import { useState } from 'react'
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ShoppingBag, ChevronDown, Search } from 'lucide-react'

// Mock data for demonstration
const products = [
  { id: 1, name: "Classic Runner", brand: "Nike", price: 89.99, image: "/placeholder.svg" },
  { id: 2, name: "Comfort Walker", brand: "Adidas", price: 79.99, image: "/placeholder.svg" },
  { id: 3, name: "Urban Hiker", brand: "Timberland", price: 129.99, image: "/placeholder.svg" },
  { id: 4, name: "Sleek Loafer", brand: "Clarks", price: 69.99, image: "/placeholder.svg" },
  { id: 5, name: "Sport Sandal", brand: "Teva", price: 59.99, image: "/placeholder.svg" },
  { id: 6, name: "Casual Sneaker", brand: "Vans", price: 54.99, image: "/placeholder.svg" },
]

export default function ProductListing() {
  const [priceRange, setPriceRange] = useState([0, 200])

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">StepUp</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search shoes..."
                className="pl-10 pr-4 py-2 w-64"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <Button variant="outline" size="icon">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Shopping cart</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Gender</h2>
            <div className="space-y-2">
              <Label className="flex items-center space-x-2">
                <Checkbox id="gender-men" />
                <span>Men</span>
              </Label>
              <Label className="flex items-center space-x-2">
                <Checkbox id="gender-women" />
                <span>Women</span>
              </Label>
              <Label className="flex items-center space-x-2">
                <Checkbox id="gender-unisex" />
                <span>Unisex</span>
              </Label>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Size</h2>
            <div className="grid grid-cols-3 gap-2">
              {[6, 7, 8, 9, 10, 11, 12, 13, 14].map((size) => (
                <Button key={size} variant="outline" size="sm">
                  {size}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Brand</h2>
            <div className="space-y-2">
              {['Nike', 'Adidas', 'Timberland', 'Clarks', 'Teva', 'Vans'].map((brand) => (
                <Label key={brand} className="flex items-center space-x-2">
                  <Checkbox id={`brand-${brand.toLowerCase()}`} />
                  <span>{brand}</span>
                </Label>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Style</h2>
            <div className="space-y-2">
              {['Casual', 'Athletic', 'Formal', 'Outdoor'].map((style) => (
                <Label key={style} className="flex items-center space-x-2">
                  <Checkbox id={`style-${style.toLowerCase()}`} />
                  <span>{style}</span>
                </Label>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Price Range</h2>
            <Slider
              min={0}
              max={200}
              step={1}
              value={priceRange}
              onValueChange={setPriceRange}
              className="mb-2"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">All Shoes</h2>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest Arrivals</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{product.brand}</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}