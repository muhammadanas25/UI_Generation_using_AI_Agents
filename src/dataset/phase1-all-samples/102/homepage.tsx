import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            GourmetDelights
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="#" className="text-gray-600 hover:text-primary">
              Products
            </Link>
            <Link href="#" className="text-gray-600 hover:text-primary">
              Recipes
            </Link>
            <Link href="#" className="text-gray-600 hover:text-primary">
              Gift Baskets
            </Link>
            <Link href="#" className="text-gray-600 hover:text-primary">
              About
            </Link>
            <Link href="#" className="text-gray-600 hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="md:hidden">
            Menu
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Exquisite Flavors</h1>
                <p className="text-xl mb-6">Indulge in our curated selection of gourmet delicacies from around the world.</p>
                <Button size="lg">
                  Shop Now
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Gourmet food spread"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { name: "Truffle Oil", description: "Infused with black truffles", price: "$24.99" },
                { name: "Aged Balsamic Vinegar", description: "25-year-old Italian balsamic", price: "$39.99" },
                { name: "Saffron Threads", description: "Premium Spanish saffron", price: "$15.99" },
              ].map((product, index) => (
                <Card key={index}>
                  <CardHeader>
                    <Image
                      src={`/placeholder.svg?height=200&width=300&text=${product.name}`}
                      alt={product.name}
                      width={300}
                      height={200}
                      className="rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <span className="font-bold">{product.price}</span>
                    <Button variant="outline">Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Recipe Ideas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Truffle Risotto", difficulty: "Medium", time: "45 mins" },
                { name: "Balsamic Glazed Salmon", difficulty: "Easy", time: "30 mins" },
                { name: "Saffron Paella", difficulty: "Hard", time: "1 hour" },
              ].map((recipe, index) => (
                <Card key={index} className="flex flex-col">
                  <Image
                    src={`/placeholder.svg?height=200&width=300&text=${recipe.name}`}
                    alt={recipe.name}
                    width={300}
                    height={200}
                    className="rounded-t-lg"
                  />
                  <CardHeader>
                    <CardTitle>{recipe.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p>Difficulty: {recipe.difficulty}</p>
                    <p>Time: {recipe.time}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View Recipe
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Gourmet Gift Baskets</h2>
            <div className="grid grid-cols-1 gap-8">
              {[
                { name: "Cheese Lover's Delight", price: "$89.99" },
                { name: "Mediterranean Feast", price: "$109.99" },
              ].map((basket, index) => (
                <Card key={index} className="flex flex-col md:flex-row">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=${basket.name}`}
                    alt={basket.name}
                    width={300}
                    height={300}
                    className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                  />
                  <div className="flex flex-col justify-between p-6">
                    <div>
                      <CardTitle className="mb-2">{basket.name}</CardTitle>
                      <CardDescription>A carefully curated selection of gourmet treats.</CardDescription>
                    </div>
                    <div className="mt-4">
                      <p className="text-2xl font-bold mb-4">{basket.price}</p>
                      <Button className="w-full">Add to Cart</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Subscribe to Our Newsletter</h2>
            <p className="text-center mb-8">Get the latest recipes and exclusive offers delivered to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="bg-primary-foreground text-primary w-full" />
              <Button variant="secondary" className="w-full sm:w-auto">Subscribe</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-300 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  (555) 123-4567
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  info@gourmetdelights.com
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  123 Gourmet St, Foodville, FL 12345
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">
                  Facebook
                </a>
                <a href="#" className="hover:text-white">
                  Instagram
                </a>
                <a href="#" className="hover:text-white">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2023 GourmetDelights. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

