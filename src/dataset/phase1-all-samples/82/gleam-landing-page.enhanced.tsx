import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Twitter, ChevronRight, ChevronLeft } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function GleamLandingPage() {
  const [currentProduct, setCurrentProduct] = useState(0)
  const products = [
    {
      alt: "Diamond ring",
      src: "/placeholder.svg?height=240&width=360",
      title: "Radiant Solitaire Ring",
      description: "A stunning 2-carat diamond set in 18k white gold.",
      price: "$5,999",
    },
    {
      alt: "Pearl necklace",
      src: "/placeholder.svg?height=240&width=360",
      title: "Elegant Pearl Strand",
      description: "Lustrous Akoya pearls on an 18-inch gold chain.",
      price: "$2,499",
    },
    {
      alt: "Sapphire earrings",
      src: "/placeholder.svg?height=240&width=360",
      title: "Sapphire Drop Earrings",
      description: "Brilliant blue sapphires surrounded by diamonds.",
      price: "$3,799",
    },
  ]

  const testimonials = [
    {
      name: "Emily R.",
      src: "/placeholder.svg?height=40&width=40",
      feedback: "The quality of my new necklace is outstanding. It's even more beautiful in person!",
    },
    {
      name: "Michael T.",
      src: "/placeholder.svg?height=40&width=40",
      feedback: "I was amazed by the attention to detail in my custom-designed ring. Truly exceptional craftsmanship.",
    },
    {
      name: "Sophia L.",
      src: "/placeholder.svg?height=40&width=40",
      feedback: "The customer service was impeccable, and my earrings arrived beautifully packaged. Highly recommend!",
    },
  ]

  const handlePrev = () => {
    setCurrentProduct((prev) => (prev === 0 ? products.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentProduct((prev) => (prev === products.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="#" className="flex items-center space-x-2">
              <Image src="/logo.svg" alt="Gleam Jewelry" width={40} height={40} className="hidden sm:block" />
              <span className="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-300">
                Gleam
              </span>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                Collections
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                About
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                Login
              </Button>
              <Button size="sm">Sign Up</Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 mt-16">
        <section className="w-full py-20 bg-gradient-to-r from-gray-100 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 animate-fade-in-up">
                  Exquisite Elegance
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-6 animate-fade-in-up delay-200">
                  Discover our collection of timeless jewelry pieces, crafted with precision and passion.
                </p>
                <div className="flex justify-center lg:justify-start space-x-4 animate-fade-in-up delay-400">
                  <Button size="lg" className="transition-transform transform hover:scale-105">
                    Shop Now
                  </Button>
                  <Button size="lg" variant="outline" className="transition-transform transform hover:scale-105">
                    View Collections
                  </Button>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  alt="Luxury diamond necklace"
                  className="mx-auto w-full h-auto rounded-xl shadow-lg animate-fade-in-right"
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12 animate-fade-in-up">
              Featured Products
            </h2>
            <div className="relative">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product, index) => (
                  <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-4">
                      <Image
                        alt={product.alt}
                        className="w-full h-60 object-cover rounded-lg transition-transform duration-300 transform hover:scale-105"
                        height="240"
                        src={product.src}
                        width="360"
                      />
                      <h3 className="text-lg font-bold mt-4 text-gray-800">{product.title}</h3>
                      <p className="text-sm text-gray-500 mt-2">{product.description}</p>
                      <p className="font-bold mt-2 text-indigo-600">{product.price}</p>
                      <Button variant="ghost" size="sm" className="mt-4">
                        <span className="mr-2">View Details</span>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow hover:bg-opacity-100 transition-opacity duration-300"
              >
                <ChevronLeft className="h-6 w-6 text-gray-800" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow hover:bg-opacity-100 transition-opacity duration-300"
              >
                <ChevronRight className="h-6 w-6 text-gray-800" />
              </button>
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12 animate-fade-in-up">
              What Our Customers Say
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 animate-fade-in-left">
                      <Image
                        alt="Customer"
                        className="rounded-full"
                        height="40"
                        src={testimonial.src}
                        width="40"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">Verified Buyer</p>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-600">
                      "{testimonial.feedback}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8 animate-fade-in-up">
              Join Our Newsletter
            </h2>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up delay-200">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
                required
              />
              <Button type="submit" className="w-full sm:w-auto">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="w-full bg-gray-800 text-gray-200 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; 2024 Gleam Jewelry. All rights reserved.</p>
            <nav className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-sm hover:text-indigo-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm hover:text-indigo-400 transition-colors duration-300">
                Privacy
              </Link>
            </nav>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-indigo-400 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-indigo-400 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-indigo-400 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

