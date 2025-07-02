import { useState } from 'react'
import { Search, Sliders } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const products = [
  { id: 1, name: "USB-C Fast Charging Cable", category: "Cables", price: 19.99, image: "/placeholder.svg" },
  { id: 2, name: "Wireless Charging Pad", category: "Chargers", price: 29.99, image: "/placeholder.svg" },
  { id: 3, name: "Rugged Phone Case", category: "Cases", price: 24.99, image: "/placeholder.svg" },
  { id: 4, name: "Bluetooth Earbuds", category: "Audio", price: 79.99, image: "/placeholder.svg" },
  { id: 5, name: "Portable Power Bank", category: "Chargers", price: 39.99, image: "/placeholder.svg" },
  { id: 6, name: "Phone Ring Holder", category: "Accessories", price: 9.99, image: "/placeholder.svg" },
  { id: 7, name: "Screen Protector", category: "Accessories", price: 14.99, image: "/placeholder.svg" },
  { id: 8, name: "Car Phone Mount", category: "Accessories", price: 19.99, image: "/placeholder.svg" },
]

export default function ProductCatalog() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortOrder, setSortOrder] = useState("featured")

  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" || product.category === selectedCategory)
    )
    .sort((a, b) => {
      if (sortOrder === "priceLowToHigh") return a.price - b.price
      if (sortOrder === "priceHighToLow") return b.price - a.price
      return 0 // Default to featured order
    })

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">GadgetAddict</h1>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 w-[300px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Sliders className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
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
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 space-y-6 hidden md:block">
            <div>
              <h2 className="text-lg font-semibold mb-2">Category</h2>
              <div className="space-y-2">
                {["All", "Cables", "Chargers", "Cases", "Audio", "Accessories"].map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category}`}
                      checked={selectedCategory === category}
                      onCheckedChange={() => setSelectedCategory(category)}
                    />
                    <Label htmlFor={`category-${category}`}>{category}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Sort by</h2>
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
          </aside>
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="flex flex-col">
                  <CardHeader>
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
                    <Button>Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}