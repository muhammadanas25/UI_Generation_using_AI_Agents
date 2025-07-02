import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Camera, ChefHat, Search, ShoppingBag, Star, Menu, X } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Component() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
        <Link className="flex items-center justify-center" href="#">
          <ChefHat className="h-6 w-6 md:h-8 md:w-8 text-yellow-500 animate-bounce" />
          <span className="ml-2 text-lg md:text-xl font-extrabold text-gray-800 dark:text-gray-100">
            ChefAtHome
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition"
            href="#"
          >
            Tutorials
          </Link>
          <Link
            className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition"
            href="#"
          >
            Photography
          </Link>
          <Link
            className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition"
            href="#"
          >
            Reviews
          </Link>
          <Link
            className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition"
            href="#"
          >
            About
          </Link>
        </nav>
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 flex flex-col items-center gap-4 py-4 shadow-md md:hidden"
          >
            <Link
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition"
              href="#"
              onClick={() => setMenuOpen(false)}
            >
              Tutorials
            </Link>
            <Link
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition"
              href="#"
              onClick={() => setMenuOpen(false)}
            >
              Photography
            </Link>
            <Link
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition"
              href="#"
              onClick={() => setMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition"
              href="#"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </motion.nav>
        )}
      </header>
      <main className="flex-1 pt-20">
        <section className="w-full py-8 md:py-12 lg:py-24 xl:py-32 bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-gray-800 dark:to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tighter text-gray-800 dark:text-white">
                  Welcome to ChefAtHome
                </h1>
                <p className="mx-auto max-w-2xl text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300">
                  Discover delicious recipes, cooking tips, and kitchen essentials for the home chef.
                </p>
              </motion.div>
              <motion.div
                className="w-full max-w-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <form className="flex space-x-2">
                  <Input
                    className="flex-1"
                    placeholder="Search recipes..."
                    type="search"
                  />
                  <Button type="submit" variant="default" className="flex items-center justify-center">
                    <Search className="h-5 w-5 mr-2" />
                    Search
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-10 text-gray-800 dark:text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Featured Posts
            </motion.h2>
            <div className="grid gap-6 mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-4">
                  <CardTitle>Perfect Pasta Carbonara</CardTitle>
                  <CardDescription>Master this classic Italian dish</CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    height={200}
                    width={300}
                    alt="Pasta Carbonara"
                    className="w-full h-48 object-cover rounded-md transform hover:scale-105 transition-transform duration-300"
                  />
                </CardContent>
                <CardFooter className="p-4">
                  <Button variant="primary" className="w-full">
                    Read More
                  </Button>
                </CardFooter>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-4">
                  <CardTitle>Food Photography Basics</CardTitle>
                  <CardDescription>Tips for stunning food shots</CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    height={200}
                    width={300}
                    alt="Food Photography"
                    className="w-full h-48 object-cover rounded-md transform hover:scale-105 transition-transform duration-300"
                  />
                </CardContent>
                <CardFooter className="p-4">
                  <Button variant="primary" className="w-full">
                    Read More
                  </Button>
                </CardFooter>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-4">
                  <CardTitle>Top 5 Chef's Knives</CardTitle>
                  <CardDescription>Our picks for every budget</CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    height={200}
                    width={300}
                    alt="Chef's Knives"
                    className="w-full h-48 object-cover rounded-md transform hover:scale-105 transition-transform duration-300"
                  />
                </CardContent>
                <CardFooter className="p-4">
                  <Button variant="primary" className="w-full">
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-8 md:py-12 lg:py-24 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-2">
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-gray-800 dark:text-white">
                    Explore Our Content
                  </h2>
                  <p className="max-w-xl text-sm md:text-base text-gray-600 dark:text-gray-300">
                    Dive into our extensive collection of cooking tutorials, breathtaking food photography, and honest
                    product reviews.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-yellow-600 transition"
                    href="#"
                  >
                    Tutorials
                  </Link>
                  <Link
                    className="inline-flex items-center justify-center rounded-md border border-yellow-500 px-4 py-2 text-sm font-medium text-yellow-500 hover:bg-yellow-500 hover:text-white transition"
                    href="#"
                  >
                    View All
                  </Link>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-center mt-6 lg:mt-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Image
                  alt="Chef cooking"
                  className="aspect-video w-full max-w-md rounded-xl object-cover shadow-lg"
                  height="300"
                  src="/placeholder.svg?height=300&width=400"
                  width="400"
                />
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-gray-800 dark:text-white">
              What We Offer
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col items-center p-6 hover:shadow-lg transition-shadow duration-300">
                <ChefHat className="w-12 h-12 mb-4 text-yellow-500" />
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
                  Cooking Tutorials
                </CardTitle>
                <CardDescription className="text-center text-gray-600 dark:text-gray-300">
                  Step-by-step guides for all skill levels
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-6 hover:shadow-lg transition-shadow duration-300">
                <Camera className="w-12 h-12 mb-4 text-yellow-500" />
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
                  Food Photography
                </CardTitle>
                <CardDescription className="text-center text-gray-600 dark:text-gray-300">
                  Tips and tricks for stunning food shots
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-6 hover:shadow-lg transition-shadow duration-300">
                <ShoppingBag className="w-12 h-12 mb-4 text-yellow-500" />
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
                  Product Reviews
                </CardTitle>
                <CardDescription className="text-center text-gray-600 dark:text-gray-300">
                  Honest reviews of kitchen essentials
                </CardDescription>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-gray-800 dark:to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800 dark:text-white">
                Join Our Community
              </h2>
              <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-2xl">
                Subscribe to our newsletter for the latest recipes, tips, and exclusive content.
              </p>
              <form className="flex flex-col w-full max-w-sm space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Input
                  className="w-full"
                  placeholder="Enter your email..."
                  type="email"
                />
                <Button variant="primary" className="w-full sm:w-auto">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 bg-white dark:bg-gray-900 border-t">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2024 ChefAtHome. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm hover:underline underline-offset-4 text-gray-600 dark:text-gray-300 transition"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-sm hover:underline underline-offset-4 text-gray-600 dark:text-gray-300 transition"
            href="#"
          >
            Privacy
          </Link>
          <Link
            className="text-sm hover:underline underline-offset-4 text-gray-600 dark:text-gray-300 transition"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}

