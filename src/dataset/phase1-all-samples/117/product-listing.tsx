import * as React from "react"
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
import { ChevronDown, Search, ShoppingBag, Menu, X } from 'lucide-react'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isFiltersOpen, setIsFiltersOpen] = React.useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex items-center justify-between h-16 px-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tighter">ShoeLuxe</h1>
            <nav className="hidden md:flex space-x-4">
              <a className="font-medium hover:underline" href="#">
                New Arrivals
              </a>
              <a className="font-medium hover:underline" href="#">
                Women
              </a>
              <a className="font-medium hover:underline" href="#">
                Men
              </a>
              <a className="font-medium hover:underline" href="#">
                Collections
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <form className="hidden md:flex items-center space-x-2">
              <Input className="w-64" placeholder="Search..." type="search" />
              <Button size="icon" type="submit" variant="ghost">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
            <Button size="icon" variant="ghost">
              <ShoppingBag className="h-6 w-6" />
              <span className="sr-only">Open cart</span>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden border-t p-4 space-y-2">
            <a className="block font-medium hover:underline" href="#">
              New Arrivals
            </a>
            <a className="block font-medium hover:underline" href="#">
              Women
            </a>
            <a className="block font-medium hover:underline" href="#">
              Men
            </a>
            <a className="block font-medium hover:underline" href="#">
              Collections
            </a>
            <form className="flex items-center space-x-2 mt-4">
              <Input className="flex-1" placeholder="Search..." type="search" />
              <Button size="icon" type="submit" variant="ghost">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
          </nav>
        )}
      </header>
      <main className="flex-1">
        <div className="container px-4 py-6 space-y-6">
          <Button
            className="w-full md:hidden"
            variant="outline"
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          >
            {isFiltersOpen ? "Hide Filters" : "Show Filters"}
          </Button>
          <div className="grid gap-6 md:grid-cols-[240px_1fr]">
            <aside className={`w-full space-y-6 ${isFiltersOpen ? 'block' : 'hidden md:block'}`}>
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Filters</h2>
                <div className="space-y-2">
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
                <div className="space-y-2">
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
                <div className="space-y-2">
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
                <div className="space-y-2">
                  <Label>Price Range</Label>
                  <Slider defaultValue={[0, 1000]} max={1000} min={0} step={10} />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>$0</span>
                    <span>$1000</span>
                  </div>
                </div>
              </div>
            </aside>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">All Products</h2>
                <Button variant="ghost" className="hidden sm:flex">
                  Sort by <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="group relative overflow-hidden rounded-lg border">
                    <img
                      alt="Luxury Shoe"
                      className="object-cover w-full h-60"
                      height="400"
                      src={`/placeholder.svg?height=400&width=300`}
                      style={{
                        aspectRatio: "300/400",
                        objectFit: "cover",
                      }}
                      width="300"
                    />
                    <div className="p-4 bg-white">
                      <h3 className="font-semibold text-lg">Luxury Shoe {i + 1}</h3>
                      <p className="text-sm text-gray-500">Premium quality, handcrafted</p>
                      <p className="mt-2 font-bold">$299.99</p>
                    </div>
                    <Button
                      className="absolute bottom-4 right-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
                      size="sm"
                    >
                      Add to Cart
                    </Button>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <Button variant="outline">Load More</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center px-4 space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500">© 2024 ShoeLuxe. All rights reserved.</p>
          </div>
          <nav className="flex space-x-4">
            <a className="text-sm hover:underline" href="#">
              Terms
            </a>
            <a className="text-sm hover:underline" href="#">
              Privacy
            </a>
            <a className="text-sm hover:underline" href="#">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

