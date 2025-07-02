import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, ShoppingCart, Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-md">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link className="flex items-center space-x-2" href="/">
            <img src="/logo.svg" alt="GadgetZone Logo" className="h-8 w-8 animate-spin-slow" />
            <span className="hidden font-bold text-xl sm:inline-block text-gray-800">GadgetZone</span>
          </Link>
          <nav className={`absolute top-16 left-0 w-full bg-white shadow-md md:shadow-none md:static md:w-auto md:flex md:items-center md:space-x-6 transition-all duration-300 ${menuOpen ? "block" : "hidden md:block"}`}>
            <Link className="block px-4 py-2 text-gray-700 hover:text-blue-500 transition-colors" href="/products">Products</Link>
            <Link className="block px-4 py-2 text-gray-700 hover:text-blue-500 transition-colors" href="/deals">Deals</Link>
            <Link className="block px-4 py-2 text-gray-700 hover:text-blue-500 transition-colors" href="/blog">Blog</Link>
            <Link className="block px-4 py-2 text-gray-700 hover:text-blue-500 transition-colors" href="/support">Support</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <Button size="icon" variant="ghost" className="relative">
              <ShoppingCart className="h-5 w-5 text-gray-600 hover:text-blue-500 transition-colors" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center animate-pulse">3</span>
              <span className="sr-only">Cart</span>
            </Button>
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle Menu</span>
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container mx-auto px-4 md:px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold">Welcome to GadgetZone</h1>
              <p className="text-lg md:text-2xl max-w-2xl mx-auto">
                Discover the latest tech gadgets and electronics. From smartphones to smart home devices, we've got you covered.
              </p>
              <div className="flex justify-center space-x-4 mt-6">
                <Button className="px-6 py-3 bg-white text-blue-600 rounded-full shadow-lg hover:bg-gray-100 transition">Shop Now</Button>
                <Button variant="outline" className="px-6 py-3 border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition">Learn More</Button>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">New Arrivals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="transform transition-transform duration-300"
                >
                  <Card className="hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl">Product {i}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img
                        src={`/placeholder.svg?height=200&width=200&text=Product+${i}`}
                        alt={`Product ${i}`}
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                      <p className="text-sm text-gray-500">High-quality gadget to simplify your life.</p>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-blue-600">$99.99</span>
                      <Button variant="secondary" size="sm" className="px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition">
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Top Deals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="transform transition-transform duration-300"
                >
                  <Card className="bg-green-50 hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl text-green-700">Deal {i}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img
                        src={`/placeholder.svg?height=200&width=200&text=Deal+${i}`}
                        alt={`Deal ${i}`}
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                      <p className="text-lg font-bold text-green-600">Save 20%</p>
                      <p className="text-sm text-gray-600">Limited time offer on our most popular items.</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-green-600 text-white hover:bg-green-700 transition">Shop Now</Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Tech Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="transform transition-transform duration-300"
                >
                  <Card className="hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl">Blog Post {i}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img
                        src={`/placeholder.svg?height=200&width=200&text=Blog+${i}`}
                        alt={`Blog ${i}`}
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                      <p className="text-sm text-gray-600">
                        Stay up-to-date with the latest tech trends and gadget reviews.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition">
                        Read More
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="container mx-auto px-4 md:px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-5xl font-bold">Join Our Newsletter</h2>
              <p className="text-lg md:text-xl max-w-2xl mx-auto">
                Subscribe to receive the latest updates and exclusive offers directly in your inbox.
              </p>
              <div className="flex justify-center mt-6 space-x-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full max-w-sm px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                />
                <Button className="px-6 py-2 bg-white text-purple-600 rounded-md shadow-lg hover:bg-gray-100 transition">Subscribe</Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-gray-800 text-gray-300 py-6">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center sm:flex-row justify-between">
          <p className="text-sm">&copy; 2023 GadgetZone. All rights reserved.</p>
          <nav className="flex space-x-4 mt-4 sm:mt-0">
            <Link className="text-sm hover:text-white transition-colors" href="/terms">Terms of Service</Link>
            <Link className="text-sm hover:text-white transition-colors" href="/privacy">Privacy</Link>
            <Link className="text-sm hover:text-white transition-colors" href="/contact">Contact</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}