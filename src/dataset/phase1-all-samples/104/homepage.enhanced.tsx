import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Menu, Search, Facebook, Twitter, Instagram, X } from 'lucide-react'
import { useState } from "react"
import { motion } from "framer-motion"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="SportZone Logo" width={40} height={40} className="rounded-full" />
            <span className="text-xl md:text-2xl font-bold text-blue-600">SportZone</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {["Football", "Basketball", "Tennis", "Running"].map((item) => (
              <Link key={item} href="#" className="relative text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative group">
              <Search className="h-5 w-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="relative group">
              <ShoppingCart className="h-5 w-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
              <span className="sr-only">Cart</span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-5 w-5 text-gray-600 hover:text-blue-600 transition-colors" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 px-4 bg-white border-t">
            {["Football", "Basketball", "Tennis", "Running"].map((item) => (
              <Link key={item} href="#" className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                {item}
              </Link>
            ))}
          </nav>
        )}
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center" style={{ backgroundImage: "url('/hero-background.jpg')" }}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Gear Up for Greatness
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-base sm:text-lg md:text-xl text-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Discover top-quality sports equipment for every athlete, from beginners to pros.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 transition-colors">Shop Now</Button>
                <Button variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-blue-600 hover:text-white transition-colors">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 text-center">
              Shop by Sport
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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
          <div className="flex flex-col items-center mb-6">
            <Link href="/" className="flex items-center space-x-2 mb-2">
              <Image src="/logo.svg" alt="SportZone Logo" width={40} height={40} className="rounded-full" />
              <span className="text-lg font-bold text-blue-600">SportZone</span>
            </Link>
            <p className="text-sm text-gray-500 text-center">© 2024 SportZone. All rights reserved.</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 mb-6">
            {["About Us", "Contact", "Terms of Service", "Privacy Policy"].map((item) => (
              <Link key={item} href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram].map((Icon, index) => (
              <Link key={index} href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

