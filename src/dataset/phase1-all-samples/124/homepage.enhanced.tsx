import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Twitter, Search, ShoppingCart, Menu, X } from 'lucide-react'
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Component() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link className="flex items-center space-x-2" href="#">
            <MountainIcon className={`h-6 w-6 transition-transform duration-500 transform ${isScrolled ? 'text-black' : 'text-white'}`} />
            <span className={`text-2xl font-bold transition-colors duration-500 ${isScrolled ? 'text-black' : 'text-white'}`}>ShineBright</span>
          </Link>
          <nav className={`fixed top-16 left-0 w-full bg-white md:bg-transparent md:relative md:top-0 md:w-auto md:flex gap-6 transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
            <Link className="block py-2 px-4 md:p-0 text-sm font-medium hover:text-indigo-600 transition-colors duration-300" href="#">
              Collections
            </Link>
            <Link className="block py-2 px-4 md:p-0 text-sm font-medium hover:text-indigo-600 transition-colors duration-300" href="#">
              Gifts
            </Link>
            <Link className="block py-2 px-4 md:p-0 text-sm font-medium hover:text-indigo-600 transition-colors duration-300" href="#">
              Customize
            </Link>
            <Link className="block py-2 px-4 md:p-0 text-sm font-medium hover:text-indigo-600 transition-colors duration-300" href="#">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-gray-700 hover:text-indigo-600 transition-colors duration-300">
              <Search className="h-5 w-5" />
            </button>
            <Link href="#" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">
              <ShoppingCart className="h-5 w-5" />
            </Link>
            <button
              className="md:hidden text-gray-700 hover:text-indigo-600 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1 mt-16">
        <section className="w-full py-20 bg-gradient-to-r from-purple-600 to-indigo-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/hero-background.jpg"
              alt="Jewelry Background"
              layout="fill"
              objectFit="cover"
              quality={75}
            />
          </div>
          <div className="container relative z-10 px-4 md:px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-4"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter">
                Shine Bright with Exquisite Jewelry
              </h1>
              <p className="mx-auto max-w-2xl text-base md:text-lg lg:text-xl">
                Discover our stunning collections, perfect gifts, and create your own unique pieces.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
                <Button className="bg-white text-black shadow hover:bg-gray-200 transition">Shop Now</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black transition">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="w-full py-16 bg-gray-100">
          <div className="container px-4 md:px-6">
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-center mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              Our Collections
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-4">
                  <Image
                    src="/necklaces.jpg"
                    alt="Elegant Necklaces"
                    className="rounded-lg object-cover w-full h-60"
                    width={400}
                    height={300}
                  />
                  <h3 className="text-xl md:text-2xl font-semibold mt-4">Elegant Necklaces</h3>
                  <p className="text-gray-600 mt-2">Timeless pieces for every occasion</p>
                  <Button className="mt-4 bg-indigo-600 text-white hover:bg-indigo-700 w-full sm:w-auto">View Collection</Button>
                </CardContent>
              </Card>
              <Card className="transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-4">
                  <Image
                    src="/rings.jpg"
                    alt="Sparkling Rings"
                    className="rounded-lg object-cover w-full h-60"
                    width={400}
                    height={300}
                  />
                  <h3 className="text-xl md:text-2xl font-semibold mt-4">Sparkling Rings</h3>
                  <p className="text-gray-600 mt-2">From engagement to eternity</p>
                  <Button className="mt-4 bg-indigo-600 text-white hover:bg-indigo-700 w-full sm:w-auto">View Collection</Button>
                </CardContent>
              </Card>
              <Card className="transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-4">
                  <Image
                    src="/earrings.jpg"
                    alt="Dazzling Earrings"
                    className="rounded-lg object-cover w-full h-60"
                    width={400}
                    height={300}
                  />
                  <h3 className="text-xl md:text-2xl font-semibold mt-4">Dazzling Earrings</h3>
                  <p className="text-gray-600 mt-2">Add a touch of sparkle to your look</p>
                  <Button className="mt-4 bg-indigo-600 text-white hover:bg-indigo-700 w-full sm:w-auto">View Collection</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-16">
          <div className="container px-4 md:px-6">
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-center mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              Gift Ideas
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 flex flex-col items-center">
                  <Image
                    src="/birthday.jpg"
                    alt="Birthday Gifts"
                    className="rounded-full object-cover w-24 h-24 sm:w-40 sm:h-40 transition-transform duration-300 hover:scale-110"
                    width={200}
                    height={200}
                  />
                  <h3 className="text-lg md:text-xl font-semibold mt-4">Birthday</h3>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 flex flex-col items-center">
                  <Image
                    src="/anniversary.jpg"
                    alt="Anniversary Gifts"
                    className="rounded-full object-cover w-24 h-24 sm:w-40 sm:h-40 transition-transform duration-300 hover:scale-110"
                    width={200}
                    height={200}
                  />
                  <h3 className="text-lg md:text-xl font-semibold mt-4">Anniversary</h3>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 flex flex-col items-center">
                  <Image
                    src="/wedding.jpg"
                    alt="Wedding Gifts"
                    className="rounded-full object-cover w-24 h-24 sm:w-40 sm:h-40 transition-transform duration-300 hover:scale-110"
                    width={200}
                    height={200}
                  />
                  <h3 className="text-lg md:text-xl font-semibold mt-4">Wedding</h3>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 flex flex-col items-center">
                  <Image
                    src="/graduation.jpg"
                    alt="Graduation Gifts"
                    className="rounded-full object-cover w-24 h-24 sm:w-40 sm:h-40 transition-transform duration-300 hover:scale-110"
                    width={200}
                    height={200}
                  />
                  <h3 className="text-lg md:text-xl font-semibold mt-4">Graduation</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-gray-100">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center text-center space-y-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold">Create Your Own Masterpiece</h2>
              <p className="max-w-2xl text-gray-600">
                Design a unique piece that tells your story. Our expert jewelers will bring your vision to life.
              </p>
              <Button className="bg-indigo-600 text-white hover:bg-indigo-700 transition w-full sm:w-auto">Start Designing</Button>
            </motion.div>
          </div>
        </section>
        <section className="w-full py-16">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center text-center space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold">Stay Connected</h2>
              <p className="max-w-2xl text-gray-600">
                Subscribe to our newsletter for exclusive offers and the latest jewelry trends.
              </p>
              <form className="w-full max-w-md flex flex-col sm:flex-row items-center gap-4">
                <Input className="flex-1 w-full" placeholder="Enter your email" type="email" required />
                <Button type="submit" className="w-full sm:w-auto bg-indigo-600 text-white hover:bg-indigo-700 transition">
                  Subscribe
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="bg-white py-8 shadow-t">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link className="flex items-center space-x-2" href="#">
              <MountainIcon className="h-6 w-6 text-indigo-600" />
              <span className="text-2xl font-bold text-indigo-600">ShineBright</span>
            </Link>
            <p className="text-gray-600 text-center md:text-left">&copy; 2024 ShineBright Jewelry. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link className="text-gray-600 hover:text-indigo-600 transition-colors duration-300" href="#">
                <Facebook className="h-5 w-5" /><Facebook className="h-5 w-5" />
              </Link>
              <Link className="text-gray-600 hover:text-indigo-600 transition-colors duration-300" href="#">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link className="text-gray-600 hover:text-indigo-600 transition-colors duration-300" href="#">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <Link className="text-gray-600 hover:text-indigo-600 transition-colors duration-300" href="#">
              Collections
            </Link>
            <Link className="text-gray-600 hover:text-indigo-600 transition-colors duration-300" href="#">
              Gifts
            </Link>
            <Link className="text-gray-600 hover:text-indigo-600 transition-colors duration-300" href="#">
              Customize
            </Link>
            <Link className="text-gray-600 hover:text-indigo-600 transition-colors duration-300" href="#">
              About
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="text-xl font-semibold">Legal</h3>
            <Link className="text-gray-600 hover:text-indigo-600 transition-colors duration-300" href="#">
              Terms of Service
            </Link>
            <Link className="text-gray-600 hover:text-indigo-600 transition-colors duration-300" href="#">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300 hidden md:block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-indigo-600"
    >
      <path d="M3 13l4-4 5 5 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

