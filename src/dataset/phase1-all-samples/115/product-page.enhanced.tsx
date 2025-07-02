'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plane, Search, ShoppingBag, Menu, X } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Transition } from "@headlessui/react"

export default function ProductPage() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Plane className="h-6 w-6 text-indigo-600 animate-bounce" />
            <span className="text-xl md:text-2xl font-bold text-indigo-600">TravelEssentials</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Suitcases
            </Link>
            <Link href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Backpacks
            </Link>
            <Link href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Gadgets
            </Link>
            <Link href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
              About
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <form className="relative">
              <Input type="search" placeholder="Search..." className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </form>
            <Button size="icon" variant="ghost" className="relative">
              <ShoppingBag className="h-6 w-6 text-gray-700 hover:text-indigo-600 transition-colors" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center animate-pulse">
                3
              </span>
              <span className="sr-only">Cart</span>
            </Button>
          </div>
          <button
            className="md:hidden text-gray-700 hover:text-indigo-600 transition-colors focus:outline-none"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          >
            {isMobileNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        <Transition
          show={isMobileNavOpen}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-150"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <nav className="md:hidden bg-white shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <Link href="#" className="block text-gray-700 hover:text-indigo-600 transition-colors">
                Suitcases
              </Link>
              <Link href="#" className="block text-gray-700 hover:text-indigo-600 transition-colors">
                Backpacks
              </Link>
              <Link href="#" className="block text-gray-700 hover:text-indigo-600 transition-colors">
                Gadgets
              </Link>
              <Link href="#" className="block text-gray-700 hover:text-indigo-600 transition-colors">
                About
              </Link>
              <form className="relative mt-4">
                <Input type="search" placeholder="Search..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </form>
              <Button size="icon" variant="ghost" className="w-full relative mt-4">
                <ShoppingBag className="h-6 w-6 text-gray-700 hover:text-indigo-600 transition-colors mx-auto" />
                <span className="absolute -top-1 -right-4 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center animate-pulse">
                  3
                </span>
                <span className="sr-only">Cart</span>
              </Button>
            </div>
          </nav>
        </Transition>
      </header>

      <main className="flex-grow container mx-auto px-4 py-24">
        <section className="mb-16 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-indigo-600 mb-4 animate-fadeIn">Travel in Style and Comfort</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fadeIn delay-200">
            Discover our curated collection of premium travel accessories for your next adventure.
          </p>
          <Button className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 animate-fadeIn delay-400">
            Shop Now
          </Button>
        </section>

        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-2xl transition-shadow transform hover:-translate-y-2">
              <CardHeader className="relative">
                <Image
                  src="/suitcase.svg"
                  alt="Sleek rolling suitcase"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-md"
                />
                <span className="absolute top-2 left-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded">Best Seller</span>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-semibold">Featured Suitcase</CardTitle>
                <p className="text-gray-600 mt-2">Elegant and durable, perfect for all your travels.</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">Shop Suitcases</Button>
              </CardFooter>
            </Card>
            <Card className="hover:shadow-2xl transition-shadow transform hover:-translate-y-2">
              <CardHeader className="relative">
                <Image
                  src="/backpack.svg"
                  alt="Durable travel backpack"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-md"
                />
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">New Arrival</span>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-semibold">Top-rated Backpack</CardTitle>
                <p className="text-gray-600 mt-2">Spacious and comfortable for all your adventures.</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-500 text-white hover:bg-green-600 transition-colors">Shop Backpacks</Button>
              </CardFooter>
            </Card>
            <Card className="hover:shadow-2xl transition-shadow transform hover:-translate-y-2">
              <CardHeader>
                <Image
                  src="/gadgets.svg"
                  alt="Travel gadgets collection"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-md"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-semibold">Essential Gadgets</CardTitle>
                <p className="text-gray-600 mt-2">Innovative gadgets to enhance your travel experience.</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-yellow-500 text-white hover:bg-yellow-600 transition-colors">Shop Gadgets</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-indigo-600 mb-8 animate-fadeIn">Our Products</h2>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="flex justify-center mb-6 space-x-2 overflow-x-auto scrollbar-hide">
              <TabsTrigger value="all" className="px-4 py-2 rounded-full hover:bg-indigo-100 focus:bg-indigo-200 transition-colors">All</TabsTrigger>
              <TabsTrigger value="suitcases" className="px-4 py-2 rounded-full hover:bg-indigo-100 focus:bg-indigo-200 transition-colors">Suitcases</TabsTrigger>
              <TabsTrigger value="backpacks" className="px-4 py-2 rounded-full hover:bg-indigo-100 focus:bg-indigo-200 transition-colors">Backpacks</TabsTrigger>
              <TabsTrigger value="gadgets" className="px-4 py-2 rounded-full hover:bg-indigo-100 focus:bg-indigo-200 transition-colors">Gadgets</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {[...Array(8)].map((_, i) => (
                  <Card key={i} className="hover:shadow-lg transition-shadow transform hover:-translate-y-1">
                    <CardContent className="p-4">
                      <Image
                        src={`/product-${i + 1}.svg`}
                        alt={`Product ${i + 1}`}
                        width={200}
                        height={200}
                        className="w-full h-auto rounded-md mb-4"
                      />
                      <h3 className="font-semibold text-lg">Product {i + 1}</h3>
                      <p className="text-sm text-gray-500">$99.99</p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="outline" size="sm" className="w-full hover:bg-indigo-50 transition-colors">
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="suitcases">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {[...Array(4)].map((_, i) => (
                  <Card key={i} className="hover:shadow-lg transition-shadow transform hover:-translate-y-1">
                    <CardContent className="p-4">
                      <Image
                        src={`/suitcase-${i + 1}.svg`}
                        alt={`Suitcase ${i + 1}`}
                        width={200}
                        height={200}
                        className="w-full h-auto rounded-md mb-4"
                      />
                      <h3 className="font-semibold text-lg">Suitcase {i + 1}</h3>
                      <p className="text-sm text-gray-500">$149.99</p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="outline" size="sm" className="w-full hover:bg-indigo-50 transition-colors">
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="backpacks">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {[...Array(4)].map((_, i) => (
                  <Card key={i} className="hover:shadow-lg transition-shadow transform hover:-translate-y-1">
                    <CardContent className="p-4">
                      <Image
                        src={`/backpack-${i + 1}.svg`}
                        alt={`Backpack ${i + 1}`}
                        width={200}
                        height={200}
                        className="w-full h-auto rounded-md mb-4"
                      />
                      <h3 className="font-semibold text-lg">Backpack {i + 1}</h3>
                      <p className="text-sm text-gray-500">$89.99</p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="outline" size="sm" className="w-full hover:bg-green-50 transition-colors">
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="gadgets">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {[...Array(4)].map((_, i) => (
                  <Card key={i} className="hover:shadow-lg transition-shadow transform hover:-translate-y-1">
                    <CardContent className="p-4">
                      <Image
                        src={`/gadget-${i + 1}.svg`}
                        alt={`Gadget ${i + 1}`}
                        width={200}
                        height={200}
                        className="w-full h-auto rounded-md mb-4"
                      />
                      <h3 className="font-semibold text-lg">Gadget {i + 1}</h3>
                      <p className="text-sm text-gray-500">$49.99</p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="outline" size="sm" className="w-full hover:bg-yellow-50 transition-colors">
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-200">
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About TravelEssentials</h3>
            <p className="text-sm">
              We provide high-quality travel accessories to make your journeys comfortable and stylish.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184a4.916 4.916 0 0 0-8.384 4.482A13.94 13.94 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.573A4.903 4.903 0 0 1 .964 9.1v.062a4.916 4.916 0 0 0 3.946 4.816 4.902 4.902 0 0 1-2.212.084 4.918 4.918 0 0 0 4.588 3.417A9.867 9.867 0 0 1 .48 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.496 14.01-13.986 0-.21-.005-.423-.014-.634A10.012 10.012 0 0 0 24 4.557z" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.427.415a4.92 4.92 0 0 1 1.675 1.096 4.92 4.92 0 0 1 1.096 1.675c.175.457.361 1.257.415 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.415 2.427a4.92 4.92 0 0 1-1.096 1.675 4.92 4.92 0 0 1-1.675 1.096c-.457.175-1.257.361-2.427.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.427-.415a4.92 4.92 0 0 1-1.675-1.096 4.92 4.92 0 0 1-1.096-1.675c-.175-.457-.361-1.257-.415-2.427C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.415-2.427a4.92 4.92 0 0 1 1.096-1.675 4.92 4.92 0 0 1 1.675-1.096c.457-.175 1.257-.361 2.427-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.78.13 4.667.314 3.75.595a6.978 6.978 0 0 0-2.512 1.65A6.978 6.978 0 0 0 0 4.757c-.281.917-.465 2.03-.523 3.302C-.013 8.332 0 8.741 0 12s.013 3.668.072 4.948c.058 1.272.242 2.385.523 3.302a6.978 6.978 0 0 0 1.65 2.512 6.978 6.978 0 0 0 2.512 1.65c.917.281 2.03.465 3.302.523C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.272-.058 2.385-.242 3.302-.523a6.978 6.978 0 0 0 2.512-1.65 6.978 6.978 0 0 0 1.65-2.512c.281-.917.465-2.03.523-3.302.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.058-1.272-.242-2.385-.523-3.302a6.978 6.978 0 0 0-1.65-2.512A6.978 6.978 0 0 0 19.202.595c-.917-.281-2.03-.465-3.302-.523C15.668.013 15.259 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.427.415a4.92 4.92 0 0 1 1.675 1.096 4.92 4.92 0 0 1 1.096 1.675c.175.457.361 1.257.415 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.415 2.427a4.92 4.92 0 0 1-1.096 1.675 4.92 4.92 0 0 1-1.675 1.096c-.457.175-1.257.361-2.427.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.427-.415a4.92 4.92 0 0 1-1.675-1.096 4.92 4.92 0 0 1-1.096-1.675c-.175-.457-.361-1.257-.415-2.427C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.415-2.427a4.92 4.92 0 0 1 1.096-1.675 4.92 4.92 0 0 1 1.675-1.096c.457-.175 1.257-.361 2.427-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.78.13 4.667.314 3.75.595a6.978 6.978 0 0 0-2.512 1.65A6.978 6.978 0 0 0 0 4.757c-.281.917-.465 2.03-.523 3.302C-.013 8.332 0 8.741 0 12s.013 3.668.072 4.948c.058 1.272.242 2.385.523 3.302a6.978 6.978 0 0 0 1.65 2.512 6.978 6.978 0 0 0 2.512 1.65c.917.281 2.03.465 3.302.523C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.272-.058 2.385-.242 3.302-.523a6.978 6.978 0 0 0 2.512-1.65 6.978 6.978 0 0 0 1.65-2.512c.281-.917.465-2.03.523-3.302.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.058-1.272-.242-2.385-.523-3.302a6.978 6.978 0 0 0-1.65-2.512A6.978 6.978 0 0 0 19.202.595c-.917-.281-2.03-.465-3.302-.523C15.668.013 15.259 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="md:col-span-4">
            <form className="flex flex-col sm:flex-row items-center max-w-md mx-auto">
              <Input type="email" placeholder="Your email" className="rounded-full w-full sm:rounded-r-none sm:rounded-l-full px-4 py-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" />
              <Button type="submit" className="mt-4 sm:mt-0 sm:ml-2 bg-indigo-600 text-white rounded-full sm:rounded-l-none hover:bg-indigo-700 transition-colors px-6 py-2">
                Subscribe
              </Button>
            </form>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm">
            © 2024 TravelEssentials. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

