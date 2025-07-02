import subprocess
import json
import sys
import asyncio
from ai.functions.extract_import_statements import extract_code_from_formatted_response
async def process_node(node):
    # Simulate async processing - replace with actual processing later
    await asyncio.sleep(0.1)  # Simulate some async work
    return f"THIS IS PROCESSED NODE RESULT {node} END"  # Dummy result

async def process_nodes(nodes):
    tasks = [process_node(node) for node in nodes]
    results = await asyncio.gather(*tasks)
    return list(zip(nodes, results))

def update_jsx_with_results(jsx_code, node_results):
    try:
        # Call the Node.js script with both JSX code and results
        result = subprocess.run(
            ['node', 'jsx-test.js', extract_code_from_formatted_response(jsx_code), json.dumps(node_results)],
            capture_output=True,
            text=True,
            check=True
        )
        
        return result.stdout
    except subprocess.CalledProcessError as e:
        print(f"Error executing Node.js script: {e.stderr}", file=sys.stderr)
        return None

def find_image_nodes(jsx_code):
    try:
        # Original node finding logic remains the same
        result = subprocess.run(
            ['node', 'jsx-test.js', extract_code_from_formatted_response(jsx_code)],
            capture_output=True,
            text=True,
            check=True
        )
        
        nodes = json.loads(result.stdout)
        return nodes
    except subprocess.CalledProcessError as e:
        print(f"Error executing Node.js script: {e.stderr}", file=sys.stderr)
        return []
    except json.JSONDecodeError as e:
        print(f"Error parsing JSON output: {e}", file=sys.stderr)
        return []

# Example usage
if __name__ == "__main__":
    # Example JSX code
    example_code = """import { useState } from "react"
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

        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
              {[1, 2, 3].map(i => <Card key={i} className="flex-1 p-6 bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardContent>
                    <p className="text-gray-600 mb-4">"The watch I purchased is absolutely stunning and keeps perfect time!"</p>
                    <div className="flex items-center">
                      <img alt={`Customer ${i}`} className="w-12 h-12 rounded-full mr-4 object-cover" src={`/customer-${i}.jpg`} />
                      <div>
                        <h3 className="font-semibold">Customer {i}</h3>
                        <p className="text-sm text-gray-500">Verified Buyer</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
          </div>
      </main>
    </div>
  )
}
"""
    
    # Find nodes
    nodes = find_image_nodes(example_code)
    print("Found image nodes:")
    for node in nodes:
        print(node)
      
    print("total nodes found: ", len(nodes))
    
    # Process nodes and get results
    # node_results = asyncio.run(process_nodes(nodes))
    # print("\nProcessed results:")
    # for node, result in node_results:
    #     print(f"Node: {node}\nResult: {result}\n")
    
    # # Update JSX with results
    # updated_jsx = update_jsx_with_results(example_code, node_results)
    # if updated_jsx:
    #     print("\nUpdated JSX:")
    #     print(updated_jsx)