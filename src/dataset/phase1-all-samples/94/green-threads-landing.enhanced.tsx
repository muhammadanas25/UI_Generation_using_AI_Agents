import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Leaf, Recycle, Sun, Droplet, Menu, X, ShoppingBag, Info, Heart, Mail } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion } from 'framer-motion'

export default function GreenThreadsLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 py-4 flex items-center shadow-md fixed top-0 left-0 right-0 bg-white z-50">
        <Link className="flex items-center justify-center" href="#">
          <Leaf className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 animate-pulse" />
          <span className="ml-2 sm:ml-3 text-xl sm:text-3xl font-extrabold text-gray-800">GreenThreads</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6">
          <Link className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors" href="#">
            <ShoppingBag className="inline mr-1 h-5 w-5" /> Shop
          </Link>
          <Link className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors" href="#">
            <Info className="inline mr-1 h-5 w-5" /> About
          </Link>
          <Link className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors" href="#">
            <Heart className="inline mr-1 h-5 w-5" /> Sustainability
          </Link>
          <Link className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors" href="#">
            <Mail className="inline mr-1 h-5 w-5" /> Contact
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="ml-auto md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4">
              <Link className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors" href="#">
                <ShoppingBag className="inline mr-2 h-5 w-5" /> Shop
              </Link>
              <Link className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors" href="#">
                <Info className="inline mr-2 h-5 w-5" /> About
              </Link>
              <Link className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors" href="#">
                <Heart className="inline mr-2 h-5 w-5" /> Sustainability
              </Link>
              <Link className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors" href="#">
                <Mail className="inline mr-2 h-5 w-5" /> Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 lg:py-32 bg-green-50">
          <motion.div
            className="container px-4 md:px-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="flex flex-col space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-800">
                  Sustainable Fashion for a Better World
                </h1>
                <p className="text-base sm:text-lg text-gray-600">
                  Discover eco-friendly clothing that doesn't compromise on style. Join us in making fashion sustainable.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-green-600 hover:bg-green-700 transition-colors w-full sm:w-auto">
                    Shop Now
                  </Button>
                  <Button variant="outline" className="text-green-600 hover:bg-green-100 transition-colors w-full sm:w-auto">
                    Learn More
                  </Button>
                </div>
              </div>
              <motion.div
                className="relative w-full h-64 sm:h-80 lg:h-96"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  alt="Eco-friendly clothing display"
                  className="rounded-xl shadow-lg object-cover object-center"
                  fill
                  src="/hero-image.jpg"
                />
                <span className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold animate-bounce">
                  New Arrival
                </span>
              </motion.div>
            </div>
          </motion.div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-8 sm:mb-12">Our Commitment</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Recycle className="h-10 w-10 sm:h-12 sm:w-12 text-green-600" />
                <h3 className="text-lg sm:text-xl font-bold">Recycled Materials</h3>
                <p className="text-sm sm:text-base text-gray-500">We use recycled materials in our products to reduce waste and environmental impact.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Sun className="h-10 w-10 sm:h-12 sm:w-12 text-green-600" />
                <h3 className="text-lg sm:text-xl font-bold">Solar-Powered Production</h3>
                <p className="text-sm sm:text-base text-gray-500">Our factories are powered by renewable solar energy, minimizing our carbon footprint.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Droplet className="h-10 w-10 sm:h-12 sm:w-12 text-green-600" />
                <h3 className="text-lg sm:text-xl font-bold">Water Conservation</h3>
                <p className="text-sm sm:text-base text-gray-500">We employ innovative techniques to reduce water usage in our manufacturing process.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-green-100">
          <div className="container px-4 md:px-6">
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Featured Products
            </motion.h2>
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div
                  key={item}
                  className="group relative bg-white rounded-lg shadow-md overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    alt={`Eco-Friendly Product ${item}`}
                    className="w-full h-48 sm:h-60 object-cover"
                    height={300}
                    src={`/products/product-${item}.jpg`}
                    width={400}
                  />
                  <div className="p-4">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-700">Eco-Friendly Product {item}</h3>
                    <p className="text-sm text-gray-500 mt-1">Made from 100% recycled materials</p>
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button className="bg-green-600 hover:bg-green-700 transition-colors">
                      Shop Now
                    </Button>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                Join Our Mission
              </motion.h2>
              <motion.p
                className="max-w-2xl text-gray-600 text-base sm:text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Subscribe to our newsletter and be part of the sustainable fashion revolution. Stay updated with our latest collections, exclusive offers, and eco-friendly tips.
              </motion.p>
              <motion.form
                className="w-full max-w-md flex flex-col sm:flex-row items-center gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Input
                  className="flex-1 w-full"
                  placeholder="Enter your email"
                  type="email"
                  required
                />
                <Button type="submit" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 transition-colors">
                  Subscribe
                </Button>
              </motion.form>
              <p className="text-sm text-gray-500">
                By subscribing, you agree to our <Link href="#" className="underline">terms</Link> and <Link href="#" className="underline">privacy policy</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100">
        <div className="container px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-gray-500 mb-4 sm:mb-0">&copy; 2024 GreenThreads. All rights reserved.</p>
          <nav className="flex gap-6">
            <Link className="text-sm text-gray-500 hover:text-green-600 transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm text-gray-500 hover:text-green-600 transition-colors" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

