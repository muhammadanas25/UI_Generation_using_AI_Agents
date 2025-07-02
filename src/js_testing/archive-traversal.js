const babelParser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generator = require('@babel/generator').default;
const t = require('@babel/types');


const code = `
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Search, Menu, X, Facebook, Twitter, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function EcommerceTShirts() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const hats = [
    { id: 1, name: "Simple Hat", price: "$24.99", image: "/hat.jpg", alt: "existing" },
    { id: 2, name: "New Hat", price: "$19.99", image: "/hat-new.jpg" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow mt-20">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Featured T-Shirts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { id: 1, name: "Graphic Tee", price: "$24.99", image: "/tshirt1.jpg" },
                { id: 2, name: "Pocket Tee", price: "$19.99", image: "/tshirt2.jpg" },
                { id: 3, name: "V-Neck Tee", price: "$22.99", image: "/tshirt3.jpg" },
                { id: 4, name: "Crew Neck Tee", price: "$21.99", image: "/tshirt4.jpg" },
              ].map((shirt) => (
                <Card key={shirt.id} className="transition transform hover:scale-105 hover:shadow-lg">
                  <CardHeader>
                    <Image
                      src={shirt.image}
                      alt={shirt.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-xl font-semibold">{shirt.name}</CardTitle>
                    <p className="text-gray-600">{shirt.price}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300">
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div>
            <img
              src="/placeholder.jpg?height=400&width=1200"
              alt="A featured hat displayed in a stylish setting, showcasing a vibrant background with a gradient blending from blue to indigo, creating an inviting atmosphere for potential customers."
              className="w-full h-96 object-cover opacity-50"
              id="08ba0c93-1f24-4a28-a459-4f115299849f"
            />
          </div>
        </section>
        
        <section className="py-16">
          <div>
            <Image
              height={900}
              src="/placeholder.png"
              alt="A placeholder image for a t-shirt"
              width={1200}
              className="w-full h-96 object-cover opacity-50"
              id="08ba0c93-1f24-4a28-a459-4f115299849f"/>
          </div>
        </section>

        <section className="py-156">
          <div>
            <Image
              height={900}
              src="/placeholder.png"
              width={1200}
              className="w-full h-96 object-cover opacity-50"
              id="08ba0c93-1f24-4a28-a459-4f115299849f"/>
          </div>
        </section>

        <section className="py-16">
          <div>
            {hats.map((hat) => (
              <img
                key={hat.id}
                src={hat.image}
                alt={hat.name}
                className="w-full h-96 object-cover opacity-50"
                id={hat.id.toString()}/>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
`;

function modifyNodes(code) {
    // Parse the code to AST
    const ast = babelParser.parse(code, {
        sourceType: 'module',
        plugins: ['jsx', 'typescript'],
    });

    const candidateNodes = [];

    // Traverse the AST to modify matched nodes
    traverse(ast, {
        ObjectExpression(path) {
            const properties = path.node.properties;
            // Check for url or image properties in the object
            properties.forEach(prop => {
                if (prop.type === 'ObjectProperty' && (prop.key.name === 'src' || prop.key.name === 'url' || prop.key.name === 'image')) {
                    // Grab the source code for this node
                    const nodeSourceCode = generator(path.node).code;
                    console.log('found url or image property node = ', nodeSourceCode);
                    candidateNodes.push(nodeSourceCode);

                    // Check for existing 'alt' property
                    const existingAlt = properties.find(p => p.key.name === 'alt');
                    if (existingAlt) {
                        // Modify the existing 'alt' property
                        existingAlt.value = t.stringLiteral('placeholder alt in place of existing alt');
                    } else {
                        // Create the 'alt' property
                        const altProperty = t.objectProperty(t.identifier('alt'), t.stringLiteral('placeholder alt'));
                        path.node.properties.push(altProperty);
                    }
                }
            });
        },
        JSXElement(path) {
            const openingElement = path.node.openingElement;
            const tagName = openingElement.name.name;
            // Check for <img> or <Image> tags
            if (tagName === 'img' || tagName === 'Image') {
                // Grab the source code for this node
                const nodeSourceCode = generator(openingElement).code;
                console.log('found img or Image tag node = ', nodeSourceCode);
                candidateNodes.push(nodeSourceCode);
                // Check for existing 'alt' attribute
                const existingAltAttr = openingElement.attributes.find(attr => attr.name.name === 'alt');
                if (existingAltAttr) {
                    // Modify the existing 'alt' property, only if its a string literal
                    if (existingAltAttr.value.type === 'StringLiteral') {
                        existingAltAttr.value = t.stringLiteral('placeholder alt in place of existing alt');
                    }
                } else {
                    // Create the 'alt' property
                    openingElement.attributes.push(t.jsxAttribute(t.jsxIdentifier('alt'), t.stringLiteral('placeholder alt')));
                }
            }
        }
    });

    // Generate the modified source code
    const output = generator(ast, {}, code);

    return output.code;
}

  
// Modify nodes in the provided code and get the updated source code
const modifiedCode = modifyNodes(code);

// Log the modified source code
console.log(modifiedCode);