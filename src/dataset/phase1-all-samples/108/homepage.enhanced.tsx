import Link from "next/link"
import { ShoppingCart, Menu, Sun, Moon, Facebook, Instagram, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-800/95 backdrop-blur supports-[backdrop-filter]:bg-gray-800/60 transition-colors duration-300">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="EcoLiving Logo" className="h-8 w-8"/>
            <span className="text-2xl font-bold text-green-600 dark:text-green-400">EcoLiving</span>
          </Link>
          <nav className="hidden sm:flex items-center space-x-6">
            <Link href="/kitchen" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline transition">
              Kitchen
            </Link>
            <Link href="/bathroom" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline transition">
              Bathroom
            </Link>
            <Link href="/living-room" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline transition">
              Living Room
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
              <Sun className="h-5 w-5 text-yellow-500" />
              <span className="sr-only">Toggle Light Mode</span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
              <Moon className="h-5 w-5 text-gray-500" />
              <span className="sr-only">Toggle Dark Mode</span>
            </Button>
            <Button size="icon" variant="ghost" className="relative">
              <ShoppingCart className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">3</span>
              <span className="sr-only">Shopping Cart</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="sm:hidden">
                  <Menu className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  <span className="sr-only">Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white dark:bg-gray-800">
                <DropdownMenuItem>
                  <Link href="/kitchen">Kitchen</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/bathroom">Bathroom</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/living-room">Living Room</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 lg:py-32 bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
          <div className="container px-4 md:px-6 flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
            <div className="text-center text-white space-y-4 animate-fade-in">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Sustainable Living Starts Here
              </h1>
              <p className="mx-auto max-w-xl text-gray-200 md:text-lg">
                Discover eco-friendly home goods that make a difference. Shop our curated collection of sustainable products for your kitchen, bathroom, and living room.
              </p>
              <div className="space-x-4 mt-6">
                <Button className="bg-green-600 hover:bg-green-700 transition">
                  Shop Now
                </Button>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Our Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="relative group hover:shadow-lg transition-shadow">
                <Link href="/kitchen" className="absolute inset-0 z-10">
                  <span className="sr-only">View Kitchen Products</span>
                </Link>
                <img
                  src="/kitchen.jpg"
                  alt="Eco-friendly kitchen products"
                  className="rounded-lg object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-xl text-green-600">Kitchen</h3>
                  <p className="text-gray-600 dark:text-gray-400">Sustainable cookware and utensils</p>
                </div>
              </Card>
              <Card className="relative group hover:shadow-lg transition-shadow">
                <Link href="/bathroom" className="absolute inset-0 z-10">
                  <span className="sr-only">View Bathroom Products</span>
                </Link>
                <img
                  src="/bathroom.jpg"
                  alt="Eco-friendly bathroom products"
                  className="rounded-lg object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-xl text-green-600">Bathroom</h3>
                  <p className="text-gray-600 dark:text-gray-400">Plastic-free personal care items</p>
                </div>
              </Card>
              <Card className="relative group hover:shadow-lg transition-shadow">
                <Link href="/living-room" className="absolute inset-0 z-10">
                  <span className="sr-only">View Living Room Products</span>
                </Link>
                <img
                  src="/living-room.jpg"
                  alt="Eco-friendly living room products"
                  className="rounded-lg object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-xl text-green-600">Living Room</h3>
                  <p className="text-gray-600 dark:text-gray-400">Organic textiles and decor</p>
                </div>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-600 dark:text-green-400">
                  Our Commitment to Sustainability
                </h2>
                <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300 md:text-lg">
                  At EcoLiving, we believe in creating a better future for our planet. Our products are carefully selected to minimize environmental impact and promote sustainable living.
                </p>
              </div>
              <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                <li className="flex items-start space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-200">Eco-friendly materials</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-200">Plastic-free packaging</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-200">Ethical manufacturing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-200">Renewable energy use</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-200">Community initiatives</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-200">Carbon footprint reduction</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-700">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-gray-800 dark:text-gray-100">
                Join Our Community
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-xl text-center">
                Subscribe to our newsletter to receive the latest updates on sustainable living, exclusive offers, and eco-friendly tips.
              </p>
              <form className="w-full max-w-md flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                  required
                />
                <Button type="submit" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 transition">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 md:px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><Link href="/kitchen" className="text-sm text-gray-600 dark:text-gray-400 hover:underline transition">Kitchen</Link></li>
                <li><Link href="/bathroom" className="text-sm text-gray-600 dark:text-gray-400 hover:underline transition">Bathroom</Link></li>
                <li><Link href="/living-room" className="text-sm text-gray-600 dark:text-gray-400 hover:underline transition">Living Room</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-4">About</h4>
              <ul className="space-y-2">
                <li><Link href="/our-story" className="text-sm text-gray-600 dark:text-gray-400 hover:underline transition">Our Story</Link></li>
                <li><Link href="/sustainability" className="text-sm text-gray-600 dark:text-gray-400 hover:underline transition">Sustainability</Link></li>
                <li><Link href="/blog" className="text-sm text-gray-600 dark:text-gray-400 hover:underline transition">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-4">Customer Service</h4>
              <ul className="space-y-2">
                <li><Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:underline transition">Contact Us</Link></li>
                <li><Link href="/shipping" className="text-sm text-gray-600 dark:text-gray-400 hover:underline transition">Shipping</Link></li>
                <li><Link href="/returns" className="text-sm text-gray-600 dark:text-gray-400 hover:underline transition">Returns</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-4">Connect</h4>
              <ul className="space-y-2 flex space-x-4">
                <li>
                  <Link href="https://facebook.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                </li>
                <li>
                  <Link href="https://instagram.com" className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            © 2024 EcoLiving. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}