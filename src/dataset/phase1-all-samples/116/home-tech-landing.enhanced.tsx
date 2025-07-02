import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardBody, CardFooter } from "@/components/ui/card"
import { Home, ChefHat, Smartphone, ShoppingCart, TrendingUp, Mail, Phone, MapPin, Menu, X } from 'lucide-react'
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"

export default function HomeTechLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="px-4 lg:px-6 h-20 flex items-center justify-between bg-white shadow-md fixed top-0 w-full z-50">
        <Link className="flex items-center justify-center" href="#">
          <Home className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
          <span className="ml-2 sm:ml-3 text-2xl sm:text-3xl font-extrabold text-blue-600">HomeTech</span>
        </Link>
        <button
          className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'
          } lg:flex flex-col lg:flex-row absolute lg:relative top-20 left-0 right-0 bg-white lg:top-0 items-center gap-4 lg:gap-6 text-lg p-4 lg:p-0 shadow-md lg:shadow-none`}>
          <Link className="text-gray-700 hover:text-blue-600 transition-colors duration-300" href="#">
            Kitchen Gadgets
          </Link>
          <Link className="text-gray-700 hover:text-blue-600 transition-colors duration-300" href="#">
            Smart Home
          </Link>
          <Link className="text-gray-700 hover:text-blue-600 transition-colors duration-300" href="#">
            About
          </Link>
          <Link className="text-gray-700 hover:text-blue-600 transition-colors duration-300" href="#">
            Contact
          </Link>
          <Button className="w-full lg:w-auto mt-4 lg:mt-0" variant="secondary">
            Sign Up
          </Button>
        </nav>
      </header>
      <main className="flex-1 pt-20">
        <section className="w-full py-12 sm:py-20 bg-gradient-to-r from-blue-500 to-indigo-600">
          <div className="container mx-auto px-4">
            <motion.div
              className="flex flex-col items-center text-center text-white"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to HomeTech</h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 max-w-2xl">
                Discover the latest in kitchen gadgets and smart home technology. Upgrade your home today!
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 transition w-full sm:w-auto">Shop Now</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600 transition w-full sm:w-auto">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Image src="/images/smart-blender.jpg" alt="Smart Blender" width={400} height={300} className="w-full h-48 object-cover" />
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2">Smart Blender</h3>
                  <p className="text-gray-600 mb-4">Blend your favorite smoothies with voice control.</p>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </motion.div>
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Image src="/images/smart-thermostat.jpg" alt="Smart Thermostat" width={400} height={300} className="w-full h-48 object-cover" />
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2">Smart Thermostat</h3>
                  <p className="text-gray-600 mb-4">Control your home's temperature from anywhere.</p>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </motion.div>
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Image src="/images/smart-fridge.jpg" alt="Smart Fridge" width={400} height={300} className="w-full h-48 object-cover" />
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2">Smart Fridge</h3>
                  <p className="text-gray-600 mb-4">Keep track of groceries and order automatically.</p>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:w-1/2">
                <Image src="/images/featured-appliance.jpg" alt="Featured Appliance" width={600} height={400} className="w-full h-64 md:h-full object-cover" />
              </div>
              <div className="md:w-1/2 p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Upgrade Your Kitchen</h2>
                <p className="text-gray-700 mb-6">
                  Explore our range of smart kitchen appliances designed to make your life easier and more efficient.
                </p>
                <Button className="bg-blue-600 text-white hover:bg-blue-700 transition w-full sm:w-auto">Explore Appliances</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-16 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
              <p className="text-base sm:text-lg mb-6 max-w-2xl">
                Subscribe to our newsletter for the latest product updates and exclusive offers.
              </p>
              <form className="flex flex-col sm:flex-row items-center w-full max-w-md">
                <Input
                  className="flex-1 mb-4 sm:mb-0 sm:mr-4 w-full"
                  placeholder="Enter your email"
                  type="email"
                  aria-label="Email address"
                />
                <Button type="submit" className="w-full sm:w-auto">
                  Subscribe
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-6 md:mb-0">
              <Link href="#" className="text-gray-600 hover:text-blue-600 transition">
                <TrendingUp className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600 transition">
                <Mail className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600 transition">
                <Phone className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600 transition">
                <MapPin className="h-6 w-6" />
              </Link>
            </div>
            <p className="text-gray-500 text-sm text-center md:text-left my-4 md:my-0">&copy; 2024 HomeTech. All rights reserved.</p>
            <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
              <Link className="text-sm text-gray-600 hover:text-blue-600 transition" href="#">
                Terms of Service
              </Link>
              <Link className="text-sm text-gray-600 hover:text-blue-600 transition" href="#">
                Privacy
              </Link>
              <Link className="text-sm text-gray-600 hover:text-blue-600 transition" href="#">
                Careers
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

