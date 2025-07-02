import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Star, Search, ShoppingCart, Sun, Moon, Menu } from 'lucide-react'
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
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function ProductListing() {
  const [theme, setTheme] = useState("light")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
    if (theme === "light") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div className={`flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300`}>
      <header className="bg-primary text-primary-foreground py-4 shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl md:text-3xl font-bold hover:scale-105 transition-transform duration-200">GlowBox</h1>
          </Link>
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <Input
                type="text"
                placeholder="Search products..."
                className="w-48 md:w-64 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                icon={<Search className="w-5 h-5 text-gray-400" />}
              />
              <Button variant="ghost" className="relative">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">3</span>
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="w-5 h-5 text-yellow-500" />
              <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
              <Moon className="w-5 h-5 text-blue-500" />
            </div>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4">
                  <Input
                    type="text"
                    placeholder="Search products..."
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    icon={<Search className="w-5 h-5 text-gray-400" />}
                  />
                  <Button variant="ghost" className="relative flex justify-start">
                    <ShoppingCart className="w-6 h-6 mr-2" />
                    <span>Cart</span>
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">3</span>
                  </Button>
                  <Link href="/about" className="text-sm hover:underline">About Us</Link>
                  <Link href="/contact" className="text-sm hover:underline">Contact</Link>
                  <Link href="/privacy" className="text-sm hover:underline">Privacy Policy</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-1/4 space-y-6">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            {["Skin Type", "Product Type", "Brand"].map((filterType) => (
              <DropdownMenu key={filterType}>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                    {filterType}
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Select {filterType}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>{filterType === "Skin Type" ? "Normal" : filterType === "Product Type" ? "Cleanser" : "GlowBox"}</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>{filterType === "Skin Type" ? "Dry" : filterType === "Product Type" ? "Moisturizer" : "Luminous"}</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>{filterType === "Skin Type" ? "Oily" : filterType === "Product Type" ? "Serum" : "Radiant"}</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>{filterType === "Skin Type" ? "Combination" : filterType === "Product Type" ? "Sunscreen" : "Bloom"}</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>{filterType === "Skin Type" ? "Sensitive" : filterType === "Product Type" ? "Mask" : "Glow Up"}</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
            <div className="flex flex-col space-y-4">
              <Button variant="secondary" className="w-full hover:scale-105 transition-transform duration-200">
                Clear Filters
              </Button>
              <Button variant="primary" className="w-full hover:scale-105 transition-transform duration-200">
                Apply Filters
              </Button>
            </div>
          </aside>
          <section className="flex-grow">
            <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-0">Featured Products</h2>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" className="flex items-center">
                    Sort By
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Sort Products</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem>Price: Low to High</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Price: High to Low</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Best Sellers</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Newest</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[1, 2, 3, 4, 5, 6].map((product) => (
                <Card key={product} className="flex flex-col transform hover:scale-105 transition-transform duration-300 shadow-lg">
                  <CardHeader className="p-0">
                    <Image
                      src={`/placeholder.svg?height=300&width=300`}
                      alt={`Product ${product}`}
                      width={300}
                      height={300}
                      className="object-cover w-full h-48 md:h-60 rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="flex-grow p-4">
                    <CardTitle className="text-lg md:text-xl">Glow Serum</CardTitle>
                    <CardDescription className="text-sm md:text-base text-gray-600 dark:text-gray-400">Radiant skin in a bottle</CardDescription>
                    <div className="flex items-center mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-current text-yellow-400" />
                      ))}
                      <span className="ml-2 text-xs md:text-sm text-gray-600 dark:text-gray-400">(120 reviews)</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 border-t">
                    <div className="flex justify-between items-center w-full">
                      <span className="text-base md:text-lg font-semibold text-primary">$29.99</span>
                      <Button variant="primary" className="flex items-center space-x-2">
                        <ShoppingCart className="w-4 h-4" />
                        <span className="hidden sm:inline">Add to Cart</span>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-gray-100 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">© 2023 GlowBox. All rights reserved.</p>
          <div className="flex flex-wrap justify-center space-x-4">
            <Link href="/about" className="text-sm text-primary hover:underline">About Us</Link>
            <Link href="/contact" className="text-sm text-primary hover:underline">Contact</Link>
            <Link href="/privacy" className="text-sm text-primary hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

