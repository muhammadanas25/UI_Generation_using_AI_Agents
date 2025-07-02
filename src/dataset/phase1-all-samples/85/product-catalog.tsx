'use client'

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
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
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Star, Filter } from 'lucide-react'

const brands = ["Apple", "Samsung", "Sony", "LG", "Bose"]
const products = [
  { id: 1, name: "Smartphone X", brand: "Apple", price: 999, rating: 4.5 },
  { id: 2, name: "4K TV", brand: "Samsung", price: 799, rating: 4.2 },
  { id: 3, name: "Wireless Headphones", brand: "Sony", price: 249, rating: 4.7 },
  { id: 4, name: "Smart Watch", brand: "Apple", price: 399, rating: 4.3 },
  { id: 5, name: "Bluetooth Speaker", brand: "Bose", price: 199, rating: 4.6 },
  { id: 6, name: "OLED TV", brand: "LG", price: 1499, rating: 4.8 },
]

export default function Component() {
  const [priceRange, setPriceRange] = useState([0, 1500])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [minRating, setMinRating] = useState(0)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const filteredProducts = products.filter(
    (product) =>
      (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      product.rating >= minRating
  )

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">TechGear Catalog</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6">
          <aside className={`w-full md:w-64 bg-white p-4 rounded-lg shadow ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Brand</h3>
                {brands.map((brand) => (
                  <div key={brand} className="flex items-center mb-2">
                    <Checkbox
                      id={brand}
                      checked={selectedBrands.includes(brand)}
                      onCheckedChange={(checked) => {
                        setSelectedBrands(
                          checked
                            ? [...selectedBrands, brand]
                            : selectedBrands.filter((b) => b !== brand)
                        )
                      }}
                    />
                    <label htmlFor={brand} className="ml-2 text-sm">
                      {brand}
                    </label>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Price Range</h3>
                <Slider
                  min={0}
                  max={1500}
                  step={10}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Minimum Rating</h3>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <Star
                      key={rating}
                      className={`w-5 h-5 cursor-pointer ${rating <= minRating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      onClick={() => setMinRating(rating)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </aside>
          <div className="flex-1">
            <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="md:hidden"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
                <p className="text-sm text-gray-600">
                  Showing {filteredProducts.length} products
                </p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full sm:w-auto">
                    Sort by <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Sort Options</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                  <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                  <DropdownMenuItem>Rating: High to Low</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">{product.name}</CardTitle>
                    <CardDescription>{product.brand}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="aspect-w-16 aspect-h-9 mb-4">
                      <img
                        src={`/placeholder.svg?height=200&width=300`}
                        alt={product.name}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xl sm:text-2xl font-bold">${product.price}</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400 mr-1" />
                        <span>{product.rating.toFixed(1)}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Add to Cart</Button>
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

