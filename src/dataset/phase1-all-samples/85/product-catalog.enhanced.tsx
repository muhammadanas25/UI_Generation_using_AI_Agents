import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
import { ChevronDown, Star, Search, Heart, Filter } from 'lucide-react'

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
  const [searchQuery, setSearchQuery] = useState("")
  const [sortOption, setSortOption] = useState<string>("")
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

  const handleSort = (option: string) => {
    setSortOption(option)
  }

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "Price: Low to High") {
      return a.price - b.price
    }
    if (sortOption === "Price: High to Low") {
      return b.price - a.price
    }
    if (sortOption === "Rating: High to Low") {
      return b.rating - a.rating
    }
    return 0
  })

  const filteredProducts = sortedProducts.filter(
    (product) =>
      (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      product.rating >= minRating &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100 transition-colors duration-300">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-0">TechGear Catalog</h1>
          <div className="relative w-full sm:w-1/2 md:w-1/3">
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6">
          <Button
            variant="outline"
            className="md:hidden mb-4"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          >
            <Filter className="mr-2 h-4 w-4" />
            {isMobileFilterOpen ? "Hide Filters" : "Show Filters"}
          </Button>
          <aside className={`w-full md:w-64 bg-white p-6 rounded-lg shadow transition-all duration-300 ${isMobileFilterOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 md:max-h-[1000px] opacity-0 md:opacity-100 overflow-hidden md:overflow-visible'
            }`}>
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
                      className="text-blue-600 focus:ring-blue-500 transition"
                    />
                    <label htmlFor={brand} className="ml-2 text-sm cursor-pointer hover:text-blue-600 transition">
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
                      className={`w-5 h-5 cursor-pointer transition-colors ${rating <= minRating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 hover:text-yellow-400"
                        }`}
                      onClick={() => setMinRating(rating)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </aside>
          <div className="flex-1">
            <div className="mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <p className="text-sm text-gray-600">
                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
              </p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full sm:w-auto flex items-center justify-between">
                    Sort by <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full sm:w-auto">
                  <DropdownMenuLabel>Sort Options</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => handleSort("Price: Low to High")}>
                    Price: Low to High
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleSort("Price: High to Low")}>
                    Price: High to Low
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleSort("Rating: High to Low")}>
                    Rating: High to Low
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="transition transform hover:scale-105 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg sm:text-xl">{product.name}</CardTitle>
                      <Heart className="w-5 h-5 text-gray-400 cursor-pointer hover:text-red-500 transition" />
                    </div>
                    <CardDescription className="text-xs sm:text-sm text-gray-500">{product.brand}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-w-16 aspect-h-9 mb-4">
                      <img
                        src={`https://via.placeholder.com/300x200?text=${encodeURIComponent(product.name)}`}
                        alt={product.name}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xl sm:text-2xl font-bold text-blue-600">${product.price}</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400 mr-1" />
                        <span className="text-sm sm:text-base">{product.rating.toFixed(1)}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition text-sm sm:text-base">
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <p className="text-center text-gray-500 mt-8">No products found matching your criteria.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

