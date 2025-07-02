'use client'

import { useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Laptop, Smartphone, Watch, Headphones, ShoppingCart, Search, Menu, X } from 'lucide-react'

export default function TechHavenLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Laptop className="h-6 w-6" />
            <span className="font-bold text-xl">TechHaven</span>
          </Link>
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-16 md:top-0 left-0 right-0 flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0 bg-background md:bg-transparent text-sm font-medium`}>
            <Link href="#" className="transition-colors hover:text-primary">Home</Link>
            <Link href="#" className="transition-colors hover:text-primary">Products</Link>
            <Link href="#" className="transition-colors hover:text-primary">Deals</Link>
            <Link href="#" className="transition-colors hover:text-primary">Support</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <form className="hidden md:block">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8 md:w-[300px] lg:w-[300px]"
                />
              </div>
            </form>
            <Button variant="outline" size="icon">
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to TechHaven
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Discover the latest and greatest in tech. From smartphones to smart homes, we've got you covered.
                </p>
              </div>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto">Shop Now</Button>
                <Button variant="outline" className="w-full sm:w-auto">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl text-center mb-8">
              Best-Selling Gadgets
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> {/* Update 1 */}
              {[
                { name: "Smartphone Pro", price: "$999", icon: Smartphone },
                { name: "Laptop Ultra", price: "$1299", icon: Laptop },
                { name: "SmartWatch X", price: "$299", icon: Watch },
                { name: "Wireless Earbuds", price: "$159", icon: Headphones },
              ].map((product, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-center h-20 bg-gray-200 rounded-md">
                      <product.icon className="h-10 w-10 text-gray-500" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle>{product.name}</CardTitle>
                    <p className="text-2xl font-bold text-primary">{product.price}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl">
                Flash Sale! 24 Hours Only
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/90 md:text-xl">
                Grab these amazing deals before they're gone. Limited stock available!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"> {/* Update 2 */}
                {[
                  { name: "4K Smart TV", originalPrice: "$899", salePrice: "$699" },
                  { name: "Noise-Canceling Headphones", originalPrice: "$349", salePrice: "$249" },
                  { name: "Gaming Console", originalPrice: "$499", salePrice: "$399" },
                ].map((deal, index) => (
                  <Card key={index} className="bg-primary-foreground text-primary">
                    <CardHeader>
                      <CardTitle>{deal.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-primary">{deal.salePrice}</p>
                      <p className="text-sm text-muted-foreground line-through">{deal.originalPrice}</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" variant="secondary">Grab Now</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-800 text-gray-300">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8"> {/* Update 5 */}
            <div>
              <h3 className="font-semibold mb-2">Shop</h3>
              <ul className="space-y-1">
                <li><Link href="#" className="hover:text-white">Deals</Link></li>
                <li><Link href="#" className="hover:text-white">New Arrivals</Link></li>
                <li><Link href="#" className="hover:text-white">Best Sellers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Support</h3>
              <ul className="space-y-1">
                <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-white">FAQs</Link></li>
                <li><Link href="#" className="hover:text-white">Shipping</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul className="space-y-1">
                <li><Link href="#" className="hover:text-white">About Us</Link></li>
                <li><Link href="#" className="hover:text-white">Careers</Link></li>
                <li><Link href="#" className="hover:text-white">Press</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Connect</h3>
              <ul className="space-y-1">
                <li><Link href="#" className="hover:text-white">Facebook</Link></li>
                <li><Link href="#" className="hover:text-white">Twitter</Link></li>
                <li><Link href="#" className="hover:text-white">Instagram</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            © 2024 TechHaven. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

