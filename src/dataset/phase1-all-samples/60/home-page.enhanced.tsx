import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Utensils, ShoppingBag, Heart, Instagram, Twitter, Facebook, Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container flex items-center justify-between mx-auto">
          <Link className="flex items-center" href="/">
            <Leaf className="h-8 w-8 text-green-500 animate-pulse" />
            <span className="ml-2 text-2xl font-bold text-green-600">VeganVibes</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium text-gray-700 hover:text-green-500 transition-colors" href="#">
              Recipes
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-green-500 transition-colors" href="#">
              Reviews
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-green-500 transition-colors" href="#">
              Living Tips
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-green-500 transition-colors" href="#">
              About
            </Link>
            <Input placeholder="Search..." className="w-40 hidden md:block" />
          </nav>
          <div className="flex md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
              {mobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden bg-white shadow-md"
          >
            <div className="flex flex-col p-4 space-y-2">
              <Link className="text-sm font-medium text-gray-700 hover:text-green-500 transition-colors" href="#">
                Recipes
              </Link>
              <Link className="text-sm font-medium text-gray-700 hover:text-green-500 transition-colors" href="#">
                Reviews
              </Link>
              <Link className="text-sm font-medium text-gray-700 hover:text-green-500 transition-colors" href="#">
                Living Tips
              </Link>
              <Link className="text-sm font-medium text-gray-700 hover:text-green-500 transition-colors" href="#">
                About
              </Link>
              <Input placeholder="Search..." className="w-full" />
            </div>
          </motion.nav>
        )}
      </header>
      <main className="flex-1 mt-16">
        <section className="w-full py-20 bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
          <div className="bg-white bg-opacity-80 backdrop-blur-sm container px-4 md:px-6 flex flex-col items-center justify-center h-full text-center rounded-lg mx-4">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl text-green-700">
                Welcome to VeganVibes
              </h1>
              <p className="mx-auto max-w-2xl text-gray-600 md:text-xl">
                Discover delicious plant-based recipes, honest vegan product reviews, and tips for a cruelty-free lifestyle.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 space-x-4"
            >
              <Button className="bg-green-500 hover:bg-green-600 transition-colors">Latest Recipes</Button>
              <Button variant="outline" className="text-green-500 border-green-500 hover:bg-green-50 transition-colors">
                About Us
              </Button>
            </motion.div>
          </div>
        </section>
        <section className="w-full py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 text-green-600">Latest Posts</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-2xl transition-shadow">
                <CardHeader className="relative h-48">
                  <Image src="/post1.jpg" alt="Creamy Vegan Pasta" layout="fill" objectFit="cover" className="rounded-t-lg" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold">Creamy Vegan Pasta</CardTitle>
                  <p className="text-gray-600 mt-2">Indulge in this rich and creamy pasta dish that's completely dairy-free!</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full text-green-500 border-green-500 hover:bg-green-50 transition-colors">
                    Read More
                  </Button>
                </CardFooter>
              </Card>
              <Card className="hover:shadow-2xl transition-shadow">
                <CardHeader className="relative h-48">
                  <Image src="/post2.jpg" alt="Best Vegan Cheese Brands" layout="fill" objectFit="cover" className="rounded-t-lg" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold">Best Vegan Cheese Brands</CardTitle>
                  <p className="text-gray-600 mt-2">We've taste-tested the top vegan cheese brands so you don't have to!</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full text-green-500 border-green-500 hover:bg-green-50 transition-colors">
                    Read More
                  </Button>
                </CardFooter>
              </Card>
              <Card className="hover:shadow-2xl transition-shadow">
                <CardHeader className="relative h-48">
                  <Image src="/post3.jpg" alt="Eco-Friendly Cleaning Tips" layout="fill" objectFit="cover" className="rounded-t-lg" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold">Eco-Friendly Cleaning Tips</CardTitle>
                  <p className="text-gray-600 mt-2">Learn how to keep your home clean and green with these simple tips.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full text-green-500 border-green-500 hover:bg-green-50 transition-colors">
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 text-green-600">Explore Our Content</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col items-center p-6 hover:shadow-xl transition-shadow text-center">
                <Utensils className="w-12 h-12 text-green-500 mb-4" />
                <CardTitle className="text-xl font-semibold">Recipes</CardTitle>
                <CardContent className="mt-2 text-gray-600">
                  Discover delicious plant-based recipes for every meal and occasion.
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button variant="outline" className="w-full text-green-500 border-green-500 hover:bg-green-50 transition-colors">
                    View Recipes
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col items-center p-6 hover:shadow-xl transition-shadow text-center">
                <ShoppingBag className="w-12 h-12 text-green-500 mb-4" />
                <CardTitle className="text-xl font-semibold">Product Reviews</CardTitle>
                <CardContent className="mt-2 text-gray-600">
                  Honest reviews of vegan products to help you make informed choices.
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button variant="outline" className="w-full text-green-500 border-green-500 hover:bg-green-50 transition-colors">
                    Read Reviews
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col items-center p-6 hover:shadow-xl transition-shadow text-center">
                <Heart className="w-12 h-12 text-green-500 mb-4" />
                <CardTitle className="text-xl font-semibold">Living Tips</CardTitle>
                <CardContent className="mt-2 text-gray-600">
                  Practical advice for embracing a cruelty-free and sustainable lifestyle.
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button variant="outline" className="w-full text-green-500 border-green-500 hover:bg-green-50 transition-colors">
                    Get Tips
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-600">Join Our Community</h2>
              <p className="max-w-2xl text-center text-gray-600">
                Subscribe to our newsletter to receive the latest vegan recipes, product reviews, and lifestyle tips directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <Input placeholder="Your email address" type="email" className="flex-1" />
                <Button className="w-full sm:w-auto">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-white border-t">
        <div className="container px-4 md:px-6 flex flex-col items-center sm:flex-row justify-between">
          <p className="text-xs text-gray-500">&copy; 2024 VeganVibes. All rights reserved.</p>
          <nav className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Link className="text-xs text-gray-500 hover:text-green-500 transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs text-gray-500 hover:text-green-500 transition-colors" href="#">
              Privacy
            </Link>
          </nav>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Link href="#" className="text-gray-500 hover:text-green-500 transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-green-500 transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-green-500 transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}