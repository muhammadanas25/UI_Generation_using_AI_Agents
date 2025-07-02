import Image from "next/image"
import Link from "next/link"
import { Tent, Bike, Mountain, ChevronDown, Search } from "lucide-react"

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

export default function ProductListing() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Mountain className="h-6 w-6" />
            <span className="font-bold text-xl">AdventureGear</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Camping
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Hiking
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Biking
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              About
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <div className="h-full py-6 pl-8 pr-6 lg:py-8">
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="mb-2 text-lg font-semibold">Categories</h3>
                <div className="flex flex-col space-y-2">
                  <Button variant="ghost" className="justify-start">
                    <Tent className="mr-2 h-4 w-4" />
                    Camping
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <Mountain className="mr-2 h-4 w-4" />
                    Hiking
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <Bike className="mr-2 h-4 w-4" />
                    Biking
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Price Range</h3>
                <div className="flex items-center space-x-2">
                  <Input type="number" placeholder="Min" className="w-20" />
                  <span>-</span>
                  <Input type="number" placeholder="Max" className="w-20" />
                  <Button size="sm">Apply</Button>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Brand</h3>
                <div className="flex flex-col space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span>North Face</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span>Patagonia</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span>Columbia</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span>REI</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <main className="flex-1 py-6 lg:py-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Products</h1>
            <div className="flex items-center space-x-4">
              <form className="hidden sm:block">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                  />
                </div>
              </form>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Sort By <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                  <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                  <DropdownMenuItem>Newest Arrivals</DropdownMenuItem>
                  <DropdownMenuItem>Customer Rating</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg border">
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Product+${i + 1}`}
                  alt={`Product ${i + 1}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-[200px] transition-transform group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="font-semibold">Adventure Product {i + 1}</h3>
                  <p className="text-sm text-muted-foreground">High-quality outdoor gear</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-bold">${(Math.random() * 100 + 50).toFixed(2)}</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="mx-2">
              Previous
            </Button>
            <Button variant="outline" className="mx-2">
              Next
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}