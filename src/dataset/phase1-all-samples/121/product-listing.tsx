'use client'

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ArrowUpDown, Scissors, Droplet, BeakerIcon as Beard, Filter } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function ProductListing() {
  const [filters, setFilters] = useState({
    beardCare: false,
    hairStyling: false,
    skincare: false,
  })

  const products = [
    { id: 1, name: "Beard Oil", category: "beardCare", price: 24.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 2, name: "Hair Pomade", category: "hairStyling", price: 18.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 3, name: "Face Moisturizer", category: "skincare", price: 29.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 4, name: "Beard Balm", category: "beardCare", price: 22.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 5, name: "Hair Clay", category: "hairStyling", price: 20.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 6, name: "Face Scrub", category: "skincare", price: 15.99, image: "/placeholder.svg?height=200&width=200" },
  ]

  const filteredProducts = products.filter(
    (product) =>
      !filters.beardCare &&
      !filters.hairStyling &&
      !filters.skincare ||
      (filters.beardCare && product.category === "beardCare") ||
      (filters.hairStyling && product.category === "hairStyling") ||
      (filters.skincare && product.category === "skincare")
  )

  const FilterContent = () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="beardCare"
          checked={filters.beardCare}
          onCheckedChange={(checked) =>
            setFilters({ ...filters, beardCare: checked as boolean })
          }
        />
        <Label htmlFor="beardCare" className="flex items-center space-x-2">
          <Beard className="w-4 h-4" />
          <span>Beard Care</span>
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="hairStyling"
          checked={filters.hairStyling}
          onCheckedChange={(checked) =>
            setFilters({ ...filters, hairStyling: checked as boolean })
          }
        />
        <Label htmlFor="hairStyling" className="flex items-center space-x-2">
          <Scissors className="w-4 h-4" />
          <span>Hair Styling</span>
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="skincare"
          checked={filters.skincare}
          onCheckedChange={(checked) =>
            setFilters({ ...filters, skincare: checked as boolean })
          }
        />
        <Label htmlFor="skincare" className="flex items-center space-x-2">
          <Droplet className="w-4 h-4" />
          <span>Skincare</span>
        </Label>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-900 text-white py-4 sm:py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl font-bold">SharpLook</h1>
          <p className="text-sm sm:text-base text-gray-400">Premium Men's Grooming Products</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <aside className="w-full md:w-64 bg-white p-4 sm:p-6 rounded-lg shadow-md hidden md:block">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Filters</h2>
            <FilterContent />
          </aside>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 sm:gap-0">
              <h2 className="text-xl sm:text-2xl font-semibold">Products</h2>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="md:hidden">
                      <Filter className="w-4 h-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left">
                    <h2 className="text-lg font-semibold mb-4">Filters</h2>
                    <FilterContent />
                  </SheetContent>
                </Sheet>
                <Select>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                    <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                    <SelectItem value="name-a-z">Name: A to Z</SelectItem>
                    <SelectItem value="name-z-a">Name: Z to A</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-base sm:text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

