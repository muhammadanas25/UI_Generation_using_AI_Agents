import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Mail, MapPin, Phone, Menu } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
          <Link href="/" className="text-xl md:text-2xl font-bold">
            PetPaws
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link href="#" className="hover:underline">Shop</Link></li>
              <li><Link href="#" className="hover:underline">About</Link></li>
              <li><Link href="#" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-primary-foreground text-primary">
            <ul className="flex flex-col items-center py-4">
              <li className="py-2"><Link href="#" className="hover:underline">Shop</Link></li>
              <li className="py-2"><Link href="#" className="hover:underline">About</Link></li>
              <li className="py-2"><Link href="#" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        )}
      </header>

      <main className="flex-grow">
        <section className="bg-muted py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to PetPaws</h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8">Your one-stop shop for all pet supplies</p>
            <Button size="lg">Shop Now</Button>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Shop by Pet</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {["Dogs", "Cats", "Fish", "Birds"].map((pet) => (
                <Card key={pet} className="text-center">
                  <CardContent className="pt-6">
                    <Image
                      src={`/placeholder.svg?height=100&width=100&text=${pet}`}
                      alt={pet}
                      width={100}
                      height={100}
                      className="mx-auto mb-4 rounded-full"
                    />
                    <h3 className="text-lg md:text-xl font-semibold">{pet}</h3>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Button variant="outline" size="sm">Shop {pet}</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Trending Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { name: "Cozy Pet Bed", price: "$39.99" },
                { name: "Interactive Toy", price: "$24.99" },
                { name: "Gourmet Pet Food", price: "$29.99" },
              ].map((product) => (
                <Card key={product.name}>
                  <CardHeader>
                    <Image
                      src={`/placeholder.svg?height=200&width=300&text=${product.name}`}
                      alt={product.name}
                      width={300}
                      height={200}
                      className="w-full h-40 md:h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-lg md:text-xl">{product.name}</CardTitle>
                    <p className="text-muted-foreground">{product.price}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Subscribe to PetPaws</h2>
            <div className="max-w-md mx-auto text-center">
              <p className="mb-4">Get the latest updates on new products, special offers, and pet care tips!</p>
              <form className="flex flex-col sm:flex-row gap-2">
                <Input type="email" placeholder="Enter your email" className="flex-grow" />
                <Button type="submit" className="w-full sm:w-auto">Subscribe</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">About Us</Link></li>
                <li><Link href="#" className="hover:underline">FAQs</Link></li>
                <li><Link href="#" className="hover:underline">Shipping & Returns</Link></li>
                <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center"><Phone className="w-4 h-4 mr-2" /> (123) 456-7890</li>
                <li className="flex items-center"><Mail className="w-4 h-4 mr-2" /> info@petpaws.com</li>
                <li className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> 123 Pet Street, Pawsville</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-muted">Facebook</Link>
                <Link href="#" className="hover:text-muted">Instagram</Link>
                <Link href="#" className="hover:text-muted">Twitter</Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 PetPaws. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

