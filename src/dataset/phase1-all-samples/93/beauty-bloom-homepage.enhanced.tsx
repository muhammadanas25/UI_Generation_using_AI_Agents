import Link from "next/link"
import { ShoppingCart, Search, Menu, ChevronRight, Play, Sun, Moon, Facebook, Instagram, Twitter, X } from 'lucide-react'
import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"

export default function BeautyBloomHomepage() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
        <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-800/90 backdrop-blur supports-[backdrop-filter]:bg-gray-800/60 transition-colors duration-500">
          <div className="container flex h-16 items-center px-4">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.svg" alt="BeautyBloom Logo" className="h-8 w-8" />
              <span className="font-bold text-xl sm:text-2xl text-pink-600 dark:text-pink-400">BeautyBloom</span>
            </Link>
            <NavigationMenu className="hidden md:flex mx-6">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-4 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <li className="col-span-2">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex items-center p-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                            href="/new-arrivals"
                          >
                            <img src="/new-arrivals.svg" alt="New Arrivals" className="h-12 w-12 mr-4" />
                            <div>
                              <h3 className="text-lg font-semibold text-white">New Arrivals</h3>
                              <p className="text-sm text-white">Check out our latest beauty products</p>
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="/skincare" className="flex items-center space-x-2">
                            <img src="/skincare.svg" alt="Skincare" className="h-8 w-8" />
                            <span className="text-md font-medium">Skincare</span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="/makeup" className="flex items-center space-x-2">
                            <img src="/makeup.svg" alt="Makeup" className="h-8 w-8" />
                            <span className="text-md font-medium">Makeup</span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="/hair-care" className="flex items-center space-x-2">
                            <img src="/hair-care.svg" alt="Hair Care" className="h-8 w-8" />
                            <span className="text-md font-medium">Hair Care</span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/tutorials" legacyBehavior passHref>
                    <NavigationMenuLink>Tutorials</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink>About</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center space-x-4 ml-auto">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Search className="h-5 w-5" />
                      <span className="sr-only">Search</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="p-4">
                    <input
                      type="text"
                      placeholder="Search for products..."
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    <Button className="mt-4 w-full" variant="primary">
                      Search
                    </Button>
                  </DialogContent>
                </Dialog>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="sr-only">Cart</span>
                </Button>
              </motion.div>
              <Sheet>
                <SheetTrigger asChild>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="md:hidden"
                    >
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Menu</span>
                    </Button>
                  </motion.div>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-4">
                    <Link href="/shop" className="text-lg font-semibold">
                      Shop
                    </Link>
                    <Link href="/tutorials" className="text-lg">
                      Tutorials
                    </Link>
                    <Link href="/about" className="text-lg">
                      About
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setDarkMode(!darkMode)}
                >
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  <span className="sr-only">Toggle Dark Mode</span>
                </Button>
              </motion.div>
            </div>
          </div>
        </header>
        <main className="flex-1">
          <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-r from-pink-50 to-red-50 dark:from-gray-800 dark:to-gray-900">
            <div className="container px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2"
              >
                <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
                  <div className="space-y-2">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-pink-600 dark:text-pink-400">
                      Discover Your True Beauty
                    </h1>
                    <p className="max-w-xl text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg">
                      Explore our range of premium cosmetics and unlock your radiant glow with BeautyBloom.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Button size="lg" className="w-full sm:w-auto flex items-center justify-center">
                        Shop Now
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Button size="lg" variant="outline" className="w-full sm:w-auto flex items-center justify-center">
                        Learn More
                      </Button>
                    </motion.div>
                  </div>
                </div>
                <motion.img
                  src="/hero-image.svg"
                  alt="BeautyBloom Products"
                  className="w-full rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500"
                  height="550"
                  width="550"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2 }}
                />
              </motion.div>
            </div>
            <div className="absolute inset-0 opacity-20">
              <svg
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#FFDEE9"
                  fillOpacity="1"
                  d="M0,160L48,170.7C96,181,192,203,288,218.7C384,235,480,245,576,245.3C672,245,768,235,864,218.7C960,203,1056,181,1152,165.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
          </section>
          <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-8 sm:mb-12 text-gray-800 dark:text-white">
                Trending Products
              </h2>
              <motion.div
                className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                  hidden: { opacity: 0 },
                }}
              >
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="relative group overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-700"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <img
                      alt={`Product ${i}`}
                      className="object-cover w-full h-48 sm:h-64 transform group-hover:scale-110 transition-transform duration-500"
                      src={`/product-${i}.jpg`}
                      width="300"
                      height="300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <h3 className="text-lg font-semibold text-white">Product Name {i}</h3>
                        <p className="text-sm text-gray-300">$29.99</p>
                        <motion.div whileHover={{ scale: 1.05 }}>
                          <Button className="mt-2 w-full" variant="secondary">
                            Add to Cart
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
          <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
            <div className="container px-4 md:px-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-8 sm:mb-12 text-gray-800 dark:text-white">
                Makeup Tutorials
              </h2>
              <motion.div
                className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                  hidden: { opacity: 0 },
                }}
              >
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <img
                      alt={`Tutorial ${i}`}
                      className="object-cover w-full h-48 sm:h-64 rounded-t-lg transform group-hover:scale-105 transition-transform duration-500"
                      src={`/tutorial-${i}.jpg`}
                      width="300"
                      height="300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="icon" variant="secondary" className="w-12 h-12 rounded-full flex items-center justify-center">
                            <Play className="h-6 w-6 text-white" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          <div className="aspect-w-16 aspect-h-9">
                            <iframe
                              src={`https://www.youtube.com/embed/dQw4w9WgXcQ`}
                              title={`Tutorial ${i}`}
                              className="w-full h-full"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <div className="p-4">
                      <h3 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">Tutorial Title {i}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Learn how to create this stunning look</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </main>
        <footer className="w-full py-8 sm:py-12 bg-gray-800 dark:bg-gray-700">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">About Us</h3>
                <ul className="space-y-2">
                  <li>
                    <Link className="text-sm hover:underline text-gray-300" href="/our-story">
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm hover:underline text-gray-300" href="/careers">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Customer Service</h3>
                <ul className="space-y-2">
                  <li>
                    <Link className="text-sm hover:underline text-gray-300" href="/contact">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm hover:underline text-gray-300" href="/faqs">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link className="text-sm hover:underline text-gray-300" href="/privacy-policy">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm hover:underline text-gray-300" href="/terms-of-service">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Newsletter</h3>
                <form className="flex flex-col space-y-2">
                  <input
                    className="p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit" className="w-full">
                    Subscribe
                  </Button>
                </form>
              </div>
              <div className="lg:col-span-2 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Link href="https://facebook.com" target="_blank" className="text-gray-300 hover:text-pink-500 transition-colors duration-300">
                      <Facebook className="h-6 w-6" />
                    </Link>
                    <Link href="https://instagram.com" target="_blank" className="text-gray-300 hover:text-pink-500 transition-colors duration-300">
                      <Instagram className="h-6 w-6" />
                    </Link>
                    <Link href="https://twitter.com" target="_blank" className="text-gray-300 hover:text-pink-500 transition-colors duration-300">
                      <Twitter className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
                <div className="mt-8 text-center text-sm text-gray-400">
                  © 2024 BeautyBloom. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

