'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Laptop, Smartphone, Tablet, Headphones, Sun, Moon, Search, Menu } from 'lucide-react'
import { motion } from "framer-motion"

export default function Component() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    document.documentElement.classList.toggle('dark', newDarkMode)
  }

  const navItems = [
    { href: "#", label: "Home" },
    { href: "#", label: "Categories" },
    { href: "#", label: "About" },
    { href: "#", label: "Contact" },
  ]

  const recentComparisons = [
    { title: "MacBook Air M2 vs Dell XPS 13", icon: Laptop, image: "/images/macbook-dell.jpg" },
    { title: "iPad Pro vs Samsung Galaxy Tab S8", icon: Tablet, image: "/images/ipad-samsung.jpg" },
    { title: "AirPods Pro 2 vs Sony WF-1000XM4", icon: Headphones, image: "/images/airpods-sony.jpg" },
    { title: "Google Pixel 7 vs OnePlus 11", icon: Smartphone, image: "/images/pixel-oneplus.jpg" },
    { title: "Microsoft Surface Laptop 5 vs HP Spectre x360", icon: Laptop, image: "/images/surface-hp.jpg" },
    { title: "Bose QuietComfort 45 vs Sony WH-1000XM5", icon: Headphones, image: "/images/bose-sony.jpg" },
  ]

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100"}`}>
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-4 py-4 sm:py-6 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-primary">TechVersus</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4 items-center">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-gray-600 dark:text-gray-300 hover:text-primary transition">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <div className="relative text-gray-600 dark:text-gray-300">
                  <input
                    type="search"
                    name="search"
                    placeholder="Search..."
                    className="bg-gray-200 dark:bg-gray-700 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-full"
                  />
                  <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </li>
              <li>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                  {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              </li>
            </ul>
          </nav>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition mr-2"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-300">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="relative text-gray-600 dark:text-gray-300 mt-4">
                    <input
                      type="search"
                      name="search"
                      placeholder="Search..."
                      className="bg-gray-200 dark:bg-gray-700 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-full"
                    />
                    <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                      <Search className="w-4 h-4" />
                    </button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Discover the Best Tech Products</h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Compare the latest gadgets and find the perfect fit for your needs.
            </p>
            <Button className="mt-6">Get Started</Button>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Featured Comparison</h2>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition"
          >
            <CardHeader className="relative h-48 sm:h-64">
              <Image
                src="/images/iphone14-galaxy-s23.jpg"
                alt="iPhone 14 Pro vs Samsung Galaxy S23 Ultra"
                layout="fill"
                objectFit="cover"
                className="opacity-70"
              />
              <CardTitle className="absolute bottom-4 left-4 text-xl sm:text-2xl text-white">
                iPhone 14 Pro vs Samsung Galaxy S23 Ultra
              </CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-6 p-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg sm:text-xl">iPhone 14 Pro</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200">
                  <li>A16 Bionic chip</li>
                  <li>48MP main camera</li>
                  <li>6.1" Super Retina XDR display</li>
                  <li>Dynamic Island</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg sm:text-xl">Samsung Galaxy S23 Ultra</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200">
                  <li>Snapdragon 8 Gen 2 chip</li>
                  <li>200MP main camera</li>
                  <li>6.8" Dynamic AMOLED 2X display</li>
                  <li>S Pen included</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="p-4">
              <Button className="w-full" variant="default">Read Full Comparison</Button>
            </CardFooter>
          </motion.div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Recent Comparisons</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentComparisons.map((comparison, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, boxShadow: "0px 4px 20px rgba(0,0,0,0.1)" }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow transition"
              >
                <CardHeader className="relative h-32 sm:h-48">
                  <Image
                    src={comparison.image}
                    alt={comparison.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <comparison.icon className="w-5 h-5 text-primary" />
                    <CardTitle className="text-base sm:text-lg">{comparison.title}</CardTitle>
                  </div>
                </CardContent>
                <CardFooter className="p-4">
                  <Button variant="outline" className="w-full">Read Comparison</Button>
                </CardFooter>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center space-y-4">
          <div className="flex flex-wrap justify-center space-x-4 mb-4">
            <Link href="#" className="hover:text-primary transition mb-2">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition mb-2">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition mb-2">Careers</Link>
          </div>
          <p>&copy; {new Date().getFullYear()} TechVersus. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="#">
              <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="#">
              <Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} />
            </Link>
            <Link href="#">
              <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
            </Link>
            <Link href="#">
              <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

