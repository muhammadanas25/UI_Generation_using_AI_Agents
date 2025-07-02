import Image from "next/image"
import Link from "next/link"
import { Tent, Bike, Mountain, ChevronDown, Search, ShoppingCart, Heart, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { useState } from "react"

export default function ProductListing() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Mountain className="h-6 w-6 text-green-600" />
            <span className="font-bold text-xl text-green-600">AdventureGear</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium text-gray-700 hover:text-green-600 transition" href="#">
              Camping
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-green-600 transition" href="#">
              Hiking
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-green-600 transition" href="#">
              Biking
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-green-600 transition" href="#">
              About
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-green-600 transition" href="#">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" className="relative">
                <Search className="h-5 w-5 text-gray-500" />
              </Button>
              <Button variant="ghost" className="relative">
                <ShoppingCart className="h-5 w-5 text-gray-500" />
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">3</span>
              </Button>
              <Button variant="ghost" className="relative">
                <Heart className="h-5 w-5 text-gray-500" />
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">2</span>
              </Button>
            </div>
            <Button variant="ghost" className="md:hidden" onClick={() => setIsMobileNavOpen(true)}>
              <Menu className="h-6 w-6 text-gray-700" />
            </Button>
          </div>
        </div>
        <Drawer isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)}>
          <DrawerContent>
            <div className="flex items-center justify-between p-4 border-b">
              <Link href="/" className="flex items-center space-x-2">
                <Mountain className="h-6 w-6 text-green-600" />
                <span className="font-bold text-xl text-green-600">AdventureGear</span>
              </Link>
              <Button variant="ghost" onClick={() => setIsMobileNavOpen(false)}>
                <X className="h-6 w-6 text-gray-700" />
              </Button>
            </div>
            <nav className="flex flex-col p-4 space-y-4">
              <Link className="text-md font-medium text-gray-700 hover:text-green-600 transition" href="#">
                Camping
              </Link>
              <Link className="text-md font-medium text-gray-700 hover:text-green-600 transition" href="#">
                Hiking
              </Link>
              <Link className="text-md font-medium text-gray-700 hover:text-green-600 transition" href="#">
                Biking
              </Link>
              <Link className="text-md font-medium text-gray-700 hover:text-green-600 transition" href="#">
                About
              </Link>
              <Link className="text-md font-medium text-gray-700 hover:text-green-600 transition" href="#">
                Contact
              </Link>
              <div className="mt-4 flex flex-col space-y-2">
                <Button variant="ghost">
                  <ShoppingCart className="h-5 w-5 mr-2" /> Cart
                </Button>
                <Button variant="ghost">
                  <Heart className="h-5 w-5 mr-2" /> Wishlist
                </Button>
              </div>
            </nav>
          </DrawerContent>
        </Drawer>
      </header>
      <main className="flex-1 container px-4 py-6 lg:py-8">
        <section className="mb-8">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/hero-adventure.jpg"
              alt="Adventure Gear Hero"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 ease-in-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
              <h2 className="text-4xl font-bold mb-4">Gear Up for Your Next Adventure</h2>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 transition">
                Shop Now
              </Button>
            </div>
          </div>
        </section>
        <div className="flex flex-col md:flex-row md:space-x-6">
          <aside className="w-full md:w-1/4 lg:w-1/5 mb-6 md:mb-0">
            <div className="p-4 bg-white rounded-lg shadow">
              <div className="mb-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-800">Categories</h3>
                <div className="flex flex-col space-y-2">
                  <Button variant="ghost" className="justify-start text-left">
                    <Tent className="mr-2 h-4 w-4 text-green-600" />
                    Camping
                  </Button>
                  <Button variant="ghost" className="justify-start text-left">
                    <Mountain className="mr-2 h-4 w-4 text-green-600" />
                    Hiking
                  </Button>
                  <Button variant="ghost" className="justify-start text-left">
                    <Bike className="mr-2 h-4 w-4 text-green-600" />
                    Biking
                  </Button>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-800">Price Range</h3>
                <div className="flex items-center space-x-2">
                  <Input type="number" placeholder="Min" className="w-20" />
                  <span className="text-gray-600">-</span>
                  <Input type="number" placeholder="Max" className="w-20" />
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    Apply
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-gray-800">Brand</h3>
                <div className="flex flex-col space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-green-600" />
                    <span className="text-gray-700">North Face</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-green-600" />
                    <span className="text-gray-700">Patagonia</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-green-600" />
                    <span className="text-gray-700">Columbia</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-green-600" />
                    <span className="text-gray-700">REI</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>
          <div className="w-full md:w-3/4 lg:w-4/5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-800">Products</h1>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <form className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </form>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center">
                      Sort By <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                    <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                    <DropdownMenuItem>Newest Arrivals</DropdownMenuItem>
                    <DropdownMenuItem>Customer Rating</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow hover:shadow-lg transition transform hover:scale-105">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={`/products/product-${i + 1}.jpg`}
                      alt={`Product ${i + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 flex space-x-2">
                      <Button variant="ghost" size="icon" className="bg-white bg-opacity-75 hover:bg-opacity-100">
                        <Heart className="h-4 w-4 text-red-500" />
                      </Button>
                      <Button variant="ghost" size="icon" className="bg-white bg-opacity-75 hover:bg-opacity-100">
                        <ShoppingCart className="h-4 w-4 text-green-600" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">Adventure Product {i + 1}</h3>
                    <p className="text-sm text-gray-600 mt-1">High-quality outdoor gear</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-green-600 font-bold">${(Math.random() * 100 + 50).toFixed(2)}</span>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-center items-center space-x-4">
              <Button variant="outline" className="flex items-center space-x-2">
                <ChevronDown className="transform rotate-180 h-4 w-4" /> Previous
              </Button>
              <Button variant="outline" className="flex items-center space-x-2">
                Next <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white border-t">
        <div className="container px-4 py-6 text-center text-gray-600">
          &copy; {new Date().getFullYear()} AdventureGear. All rights reserved.
        </div>
      </footer>
    </div>
  )
}