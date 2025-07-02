import * as React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { ChevronDown, Search, ShoppingBag, Filter, X, Heart } from "lucide-react"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"

export default function Component() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <div className="flex items-center space-x-4">
            <h1 className="text-3xl font-extrabold text-indigo-600">ShoeLuxe</h1>
            <nav className="hidden md:flex space-x-6">
              <a className="text-gray-700 font-medium hover:text-indigo-600 transition-colors" href="#">
                New Arrivals
              </a>
              <a className="text-gray-700 font-medium hover:text-indigo-600 transition-colors" href="#">
                Women
              </a>
              <a className="text-gray-700 font-medium hover:text-indigo-600 transition-colors" href="#">
                Men
              </a>
              <a className="text-gray-700 font-medium hover:text-indigo-600 transition-colors" href="#">
                Collections
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <form className="hidden md:flex items-center space-x-2">
              <Input className="w-64" placeholder="Search..." type="search" />
              <Button size="icon" type="submit" variant="ghost" className="hover:bg-indigo-100">
                <Search className="h-5 w-5 text-gray-600" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
            <Button size="icon" variant="ghost" className="relative">
              <ShoppingBag className="h-6 w-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-indigo-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">2</span>
              <span className="sr-only">Open cart</span>
            </Button>
            <Button size="icon" variant="ghost" className="md:hidden" onClick={() => setIsFilterOpen(true)}>
              <Filter className="h-6 w-6 text-gray-600" />
              <span className="sr-only">Open filters</span>
            </Button>
          </div>
        </div>
        <div className="bg-indigo-50">
          <div className="container px-4 md:px-6 py-8 flex flex-col items-center text-center">
            <h2 className="text-4xl font-bold text-gray-800 animate-fade-in">Discover Your Perfect Pair</h2>
            <p className="mt-4 text-gray-600">Explore the latest trends in luxury footwear.</p>
            <Button variant="default" className="mt-6 px-6 py-3 bg-indigo-600 text-white hover:bg-indigo-700 transition">
              Shop Now
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-6 grid gap-6 md:grid-cols-[240px_1fr] lg:grid-cols-[240px_1fr]">
          <aside className="w-full space-y-6 hidden md:block">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold flex items-center space-x-2">
                <Filter className="h-5 w-5 text-indigo-600" />
                <span>Filters</span>
              </h2>
              <div className="space-y-3">
                <div className="space-y-1">
                  <Label htmlFor="style">Style</Label>
                  <Select defaultValue="all">
                    <SelectTrigger id="style">
                      <SelectValue placeholder="Select style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Styles</SelectItem>
                      <SelectItem value="sneakers">Sneakers</SelectItem>
                      <SelectItem value="boots">Boots</SelectItem>
                      <SelectItem value="sandals">Sandals</SelectItem>
                      <SelectItem value="heels">Heels</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="material">Material</Label>
                  <Select defaultValue="all">
                    <SelectTrigger id="material">
                      <SelectValue placeholder="Select material" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Materials</SelectItem>
                      <SelectItem value="leather">Leather</SelectItem>
                      <SelectItem value="suede">Suede</SelectItem>
                      <SelectItem value="canvas">Canvas</SelectItem>
                      <SelectItem value="synthetic">Synthetic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="color">Color</Label>
                  <Select defaultValue="all">
                    <SelectTrigger id="color">
                      <SelectValue placeholder="Select color" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Colors</SelectItem>
                      <SelectItem value="black">Black</SelectItem>
                      <SelectItem value="brown">Brown</SelectItem>
                      <SelectItem value="white">White</SelectItem>
                      <SelectItem value="red">Red</SelectItem>
                      <SelectItem value="blue">Blue</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1">
                  <Label>Price Range</Label>
                  <Slider defaultValue={[0, 1000]} max={1000} min={0} step={10} />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>$0</span>
                    <span>$1000</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight">All Products</h2>
              <div className="flex items-center space-x-2">
                <Label className="text-sm">Sort by:</Label>
                <Select defaultValue="popular">
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Popular" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Popular</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest Arrivals</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="group relative overflow-hidden rounded-lg border bg-white shadow hover:shadow-lg transition-shadow">
                  <img
                    alt="Luxury Shoe"
                    className="object-cover w-full h-60 transform group-hover:scale-105 transition-transform duration-300"
                    height="400"
                    src={`/placeholder.svg?height=400&width=300`}
                    style={{
                      aspectRatio: "300/400",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-800 hover:text-indigo-600 transition-colors">Luxury Shoe {i + 1}</h3>
                    <p className="text-sm text-gray-500">Premium quality, handcrafted</p>
                    <p className="mt-2 font-bold text-indigo-600">$299.99</p>
                  </div>
                  <div className="absolute top-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="ghost" className="bg-white rounded-full p-2 hover:bg-indigo-100">
                      <Heart className="h-5 w-5 text-gray-600" />
                      <span className="sr-only">Add to Wishlist</span>
                    </Button>
                    <Button size="icon" variant="ghost" className="bg-white rounded-full p-2 hover:bg-indigo-100">
                      <ShoppingBag className="h-5 w-5 text-gray-600" />
                      <span className="sr-only">Add to Cart</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button variant="outline" className="px-6 py-3 hover:bg-indigo-50 transition">
                Load More
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
        <DialogTrigger></DialogTrigger>
        <DialogContent className="md:hidden">
          <DialogHeader>
            <DialogTitle className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Filters</h2>
              <DialogClose>
                <X className="h-6 w-6 text-gray-600" />
              </DialogClose>
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="mobile-style">Style</Label>
              <Select defaultValue="all">
                <SelectTrigger id="mobile-style">
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Styles</SelectItem>
                  <SelectItem value="sneakers">Sneakers</SelectItem>
                  <SelectItem value="boots">Boots</SelectItem>
                  <SelectItem value="sandals">Sandals</SelectItem>
                  <SelectItem value="heels">Heels</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobile-material">Material</Label>
              <Select defaultValue="all">
                <SelectTrigger id="mobile-material">
                  <SelectValue placeholder="Select material" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Materials</SelectItem>
                  <SelectItem value="leather">Leather</SelectItem>
                  <SelectItem value="suede">Suede</SelectItem>
                  <SelectItem value="canvas">Canvas</SelectItem>
                  <SelectItem value="synthetic">Synthetic</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobile-color">Color</Label>
              <Select defaultValue="all">
                <SelectTrigger id="mobile-color">
                  <SelectValue placeholder="Select color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Colors</SelectItem>
                  <SelectItem value="black">Black</SelectItem>
                  <SelectItem value="brown">Brown</SelectItem>
                  <SelectItem value="white">White</SelectItem>
                  <SelectItem value="red">Red</SelectItem>
                  <SelectItem value="blue">Blue</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Price Range</Label>
              <Slider defaultValue={[0, 1000]} max={1000} min={0} step={10} />
              <div className="flex justify-between text-sm text-gray-500">
                <span>$0</span>
                <span>$1000</span>
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsFilterOpen(false)}>
                Reset
              </Button>
              <Button onClick={() => setIsFilterOpen(false)}>
                Apply
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <footer className="w-full border-t bg-white py-6 shadow-inner">
        <div className="container flex flex-col md:flex-row justify-between items-center px-4 md:px-6 space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500">© 2024 ShoeLuxe. All rights reserved.</p>
          </div>
          <nav className="flex space-x-4">
            <a className="text-sm text-gray-600 hover:text-indigo-600 transition-colors" href="#">
              Terms
            </a>
            <a className="text-sm text-gray-600 hover:text-indigo-600 transition-colors" href="#">
              Privacy
            </a>
            <a className="text-sm text-gray-600 hover:text-indigo-600 transition-colors" href="#">
              Contact
            </a>
          </nav>
          <div className="flex space-x-3">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M..." />
              </svg>
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M..." />
              </svg>
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M..." />
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}