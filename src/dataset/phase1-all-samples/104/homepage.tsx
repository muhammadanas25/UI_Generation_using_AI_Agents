import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Menu, Search, Facebook, Twitter, Instagram, X } from 'lucide-react'
import { useState } from "react"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">SportZone</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Football
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Basketball
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Tennis
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Running
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Search className="h-5 w-5" />
            <ShoppingCart className="h-5 w-5" />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden p-4 border-t bg-background">
            <div className="flex flex-col space-y-4">
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                Football
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                Basketball
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                Tennis
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                Running
              </Link>
            </div>
          </nav>
        )}
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none">
                  Gear Up for Greatness
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 text-sm md:text-base lg:text-xl">
                  Discover top-quality sports equipment for every athlete, from beginners to pros.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto">Shop Now</Button>
                <Button variant="outline" className="w-full sm:w-auto">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 text-center">
              Shop by Sport
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {["Football", "Basketball", "Tennis", "Running"].map((sport) => (
                <Card key={sport} className="group cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Image
                      src={`/placeholder.svg?height=200&width=200`}
                      alt={sport}
                      width={200}
                      height={200}
                      className="rounded-md object-cover w-full h-auto"
                    />
                  </CardHeader>
                  <CardFooter>
                    <CardTitle className="text-center w-full group-hover:underline text-sm md:text-base">
                      {sport}
                    </CardTitle>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 text-center">
              Athlete Endorsements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { name: "John Doe", sport: "Football" },
                { name: "Jane Smith", sport: "Basketball" },
                { name: "Mike Johnson", sport: "Tennis" },
              ].map((athlete) => (
                <Card key={athlete.name}>
                  <CardHeader>
                    <Image
                      src={`/placeholder.svg?height=300&width=300`}
                      alt={athlete.name}
                      width={300}
                      height={300}
                      className="rounded-full mx-auto w-32 h-32 md:w-48 md:h-48"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-center mb-2 text-lg md:text-xl">{athlete.name}</CardTitle>
                    <p className="text-center text-gray-500 text-sm md:text-base">{athlete.sport}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 text-center">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Pro Football", price: "$59.99" },
                { name: "Basketball Hoop", price: "$199.99" },
                { name: "Tennis Racket", price: "$89.99" },
                { name: "Running Shoes", price: "$129.99" },
              ].map((product) => (
                <Card key={product.name} className="flex flex-col justify-between">
                  <CardHeader>
                    <Image
                      src={`/placeholder.svg?height=200&width=200`}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="rounded-md object-cover w-full h-auto"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="mb-2 text-lg">{product.name}</CardTitle>
                    <p className="text-gray-500">{product.price}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col items-center py-8 px-4 md:px-6">
          <div className="flex flex-col items-center mb-4">
            <span className="text-lg font-bold mb-2">SportZone</span>
            <p className="text-sm text-gray-500 text-center">© 2024 SportZone. All rights reserved.</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 mb-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              About Us
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy Policy
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

