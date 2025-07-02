import { useState } from 'react'
import { Search, Sliders, ShoppingCart, Heart, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const products = [
  { id: 1, name: "USB-C Fast Charging Cable", category: "Cables", price: 19.99, image: "/placeholder.svg", rating: 4 },
  { id: 2, name: "Wireless Charging Pad", category: "Chargers", price: 29.99, image: "/placeholder.svg", rating: 5 },
  { id: 3, name: "Rugged Phone Case", category: "Cases", price: 24.99, image: "/placeholder.svg", rating: 3 },
  { id: 4, name: "Bluetooth Earbuds", category: "Audio", price: 79.99, image: "/placeholder.svg", rating: 5 },
  { id: 5, name: "Portable Power Bank", category: "Chargers", price: 39.99, image: "/placeholder.svg", rating: 4 },
  { id: 6, name: "Phone Ring Holder", category: "Accessories", price: 9.99, image: "/placeholder.svg", rating: 4 },
  { id: 7, name: "Screen Protector", category: "Accessories", price: 14.99, image: "/placeholder.svg", rating: 4 },
  { id: 8, name: "Car Phone Mount", category: "Accessories", price: 19.99, image: "/placeholder.svg", rating: 3 },
]

export default function ProductCatalog() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortOrder, setSortOrder] = useState("featured")
  const [isDarkMode, setIsDarkMode] = useState(false)

  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" || product.category === selectedCategory)
    )
    .sort((a, b) => {
      if (sortOrder === "priceLowToHigh") return a.price - b.price
      if (sortOrder === "priceHighToLow") return b.price - a.price
      return 0
    })

  return (
    <div className={isDarkMode ? "min-h-screen bg-gray-900 text-white" : "min-h-screen bg-background text-gray-900"}>
      <header className="sticky top-0 z-50 bg-background dark:bg-gray-800 border-b shadow">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold flex items-center">
            <img src="/logo.svg" alt="GadgetAddict" className="h-8 w-8 mr-2" />
            GadgetAddict
          </h1>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 w-[300px] transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="ghost" onClick={() => setIsDarkMode(!isDarkMode)} className="rounded-full">
              {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Sliders className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="p-6">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="category-mobile">Category</Label>
                    <Select onValueChange={(value) => setSelectedCategory(value)}>
                      <SelectTrigger id="category-mobile">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">All Categories</SelectItem>
                        <SelectItem value="Cables">Cables</SelectItem>
                        <SelectItem value="Chargers">Chargers</SelectItem>
                        <SelectItem value="Cases">Cases</SelectItem>
                        <SelectItem value="Audio">Audio</SelectItem>
                        <SelectItem value="Accessories">Accessories</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sort-mobile">Sort by</Label>
                    <Select onValueChange={(value) => setSortOrder(value)}>
                      <SelectTrigger id="sort-mobile">
                        <SelectValue placeholder="Sort order" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="priceLowToHigh">Price: Low to High</SelectItem>
                        <SelectItem value="priceHighToLow">Price: High to Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <Button variant="ghost" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full px-1">3</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-72 space-y-6 hidden md:block">
            <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow transition">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Sliders className="h-6 w-6 mr-2" />
                Filters
              </h2>
              <div>
                <h3 className="text-lg font-medium mb-2">Category</h3>
                <div className="space-y-2">
                  {["All", "Cables", "Chargers", "Cases", "Audio", "Accessories"].map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category}`}
                        checked={selectedCategory === category}
                        onCheckedChange={() => setSelectedCategory(category)}
                        className="text-blue-600"
                      />
                      <Label htmlFor={`category-${category}`} className="cursor-pointer">{category}</Label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Sort by</h3>
                <Select onValueChange={(value) => setSortOrder(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort order" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="priceLowToHigh">Price: Low to High</SelectItem>
                    <SelectItem value="priceHighToLow">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </aside>
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center mt-20">
                <p className="text-xl">No products found.</p>
                <img src="/no-results.svg" alt="No Results" className="mx-auto mt-4 w-48" />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="relative">
                      <img src={product.image} alt={product.name} className="w-full h-56 object-cover rounded-t-lg transform hover:scale-105 transition-transform duration-300" />
                      <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">New</span>
                      <button className="absolute top-2 right-2 text-white bg-gray-800 bg-opacity-50 rounded-full p-1 hover:bg-opacity-75 transition">
                        <Heart className="h-4 w-4" />
                      </button>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{product.category}</p>
                      <div className="flex items-center mt-2">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star key={index} className={`h-4 w-4 ${index < product.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                      <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="default" size="sm" className="flex items-center justify-center">
                            View
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle>{product.name}</DialogTitle>
                          </DialogHeader>
                          <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-4" />
                          <p className="mb-4">{product.category} - ${product.price.toFixed(2)}</p>
                          <div className="flex justify-end space-x-2">
                            <Button variant="secondary" onClick={() => {}}>Add to Cart</Button>
                            <Button variant="ghost" onClick={() => {}}>Add to Wishlist</Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <footer className="bg-background dark:bg-gray-800 border-t">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} GadgetAddict. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-blue-500 transition">
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500 transition">
              <TwitterIcon className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500 transition">
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SunIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function MoonIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function FacebookIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.83c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12z" />
    </svg>
  )
}

function TwitterIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43 1a9.14 9.14 0 01-2.88 1.1A4.52 4.52 0 0016.16 0c-2.5 0-4.5 2-4.5 4.5 0 .35.04.69.11 1.02A12.93 12.93 0 013 1.1a4.48 4.48 0 001.39 6A4.42 4.42 0 012 6v.05A4.5 4.5 0 004.5 10a4.46 4.46 0 01-2 .07A4.5 4.5 0 006 14a9 9 0 01-5.6 1.94A9.13 9.13 0 010 19.54a12.92 12.92 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.68 0-.18 0-.35-.01-.53A8.36 8.36 0 0023 3z" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm4.75-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
    </svg>
  )
}