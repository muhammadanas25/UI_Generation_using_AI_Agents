import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Leaf, ShoppingBag, Recycle, Sun, Facebook, Instagram, Twitter, Menu, X } from 'lucide-react'
import Image from "next/image"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href="#" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600 dark:text-green-400 animate-bounce" />
            <span className="text-xl font-bold text-green-700 dark:text-green-300">EcoWear</span>
          </Link>
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'
            } md:flex absolute md:relative top-16 left-0 w-full md:w-auto md:top-0 bg-white dark:bg-gray-800 md:bg-transparent flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0`}>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300" href="#">
              Shop
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300" href="#">
              About
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300" href="#">
              Sustainability
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300" href="#">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300">
              <ShoppingBag className="h-6 w-6" />
            </Link>
            <Button variant="ghost" className="hidden md:block">Sign In</Button>
            <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 transition-colors duration-300">Join Us</Button>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700 dark:text-gray-200" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 dark:text-gray-200" />
              )}
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1 pt-16">
        <section className="w-full py-16 md:py-24 bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
          <div className="bg-black bg-opacity-50 h-full flex items-center">
            <div className="container mx-auto px-4 md:px-6 text-center text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 animate-fade-in">EcoWear: Sustainable Fashion for a Better World</h1>
              <p className="text-base md:text-lg lg:text-xl mb-6">Discover our eco-friendly clothing line made from sustainable materials. Look good, feel good, and help the planet.</p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 transition-colors duration-300">Shop Now</Button>
                <Button variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-green-600 hover:border-green-600 dark:hover:bg-green-500 dark:hover:border-green-500 transition-colors duration-300">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 dark:text-white">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { name: "Organic Cotton Tee", price: "$29.99", image: "/products/organic-cotton-tee.jpg" },
                { name: "Recycled Denim Jeans", price: "$79.99", image: "/products/recycled-denim-jeans.jpg" },
                { name: "Hemp Blend Sweater", price: "$59.99", image: "/products/hemp-blend-sweater.jpg" },
              ].map((product) => (
                <div key={product.name} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={400}
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 dark:text-white">{product.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{product.price}</p>
                    <Button className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 transition-colors duration-300">Add to Cart</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 dark:text-white">Our Sustainable Materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-4 hover:scale-105 transition-transform duration-300">
                <ShoppingBag className="h-12 w-12 text-green-600 dark:text-green-400 mb-4" />
                <h3 className="text-lg md:text-xl font-semibold mb-2 dark:text-white">Organic Cotton</h3>
                <p className="text-gray-600 dark:text-gray-300">Grown without harmful pesticides or synthetic fertilizers, our organic cotton is soft, breathable, and kind to the environment.</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 hover:scale-105 transition-transform duration-300">
                <Recycle className="h-12 w-12 text-green-600 dark:text-green-400 mb-4" />
                <h3 className="text-lg md:text-xl font-semibold mb-2 dark:text-white">Recycled Materials</h3>
                <p className="text-gray-600 dark:text-gray-300">We use recycled polyester and nylon made from post-consumer plastic bottles, reducing waste and conserving resources.</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 hover:scale-105 transition-transform duration-300">
                <Sun className="h-12 w-12 text-green-600 dark:text-green-400 mb-4" />
                <h3 className="text-lg md:text-xl font-semibold mb-2 dark:text-white">Hemp</h3>
                <p className="text-gray-600 dark:text-gray-300">A versatile and sustainable fiber that requires minimal water and no pesticides to grow, hemp is durable and gets softer with each wash.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-green-100 dark:bg-green-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 dark:text-white">Subscribe to Our Newsletter</h2>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Input placeholder="Enter your email" className="w-full sm:w-64 md:w-80" />
              <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 transition-colors duration-300">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-gray-200 dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">&copy; 2024 EcoWear. All rights reserved.</p>
            <nav className="flex space-x-4">
              <Link className="text-sm hover:text-green-400 transition-colors duration-300" href="#">
                Terms of Service
              </Link>
              <Link className="text-sm hover:text-green-400 transition-colors duration-300" href="#">
                Privacy
              </Link>
            </nav>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-green-400 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-green-400 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-green-400 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

