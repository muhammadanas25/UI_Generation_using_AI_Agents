import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Star } from "lucide-react"

export default function Component() {
  const [productTypes, setProductTypes] = useState({
    smartphones: false,
    laptops: false,
    tablets: false,
    smartwatches: false,
  })
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [rating, setRating] = useState(0)

  const handleProductTypeChange = (type: string) => {
    setProductTypes((prev) => ({ ...prev, [type]: !prev[type] }))
  }

  const handlePriceRangeChange = (value: number[]) => {
    setPriceRange(value)
  }

  const handleRatingChange = (value: number) => {
    setRating(value)
  }

  const handleApplyFilters = () => {
    console.log("Applied filters:", { productTypes, priceRange, rating })
    // Here you would typically update the search results based on the filters
  }

  return (
    <div className="p-4 space-y-4 bg-background rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-primary mb-4">Filter Results</h2>

      {/* Product Type Filter */}
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              Product Type
              <ChevronDown className="h-4 w-4 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Select Product Types</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={productTypes.smartphones}
              onCheckedChange={() => handleProductTypeChange("smartphones")}
            >
              Smartphones
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={productTypes.laptops}
              onCheckedChange={() => handleProductTypeChange("laptops")}
            >
              Laptops
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={productTypes.tablets}
              onCheckedChange={() => handleProductTypeChange("tablets")}
            >
              Tablets
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={productTypes.smartwatches}
              onCheckedChange={() => handleProductTypeChange("smartwatches")}
            >
              Smartwatches
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Price Range Filter */}
      <div>
        <label className="block text-sm font-medium text-primary mb-2">Price Range</label>
        <Slider
          min={0}
          max={1000}
          step={10}
          value={priceRange}
          onValueChange={handlePriceRangeChange}
          className="w-full"
        />
        <div className="flex justify-between mt-2 text-sm text-muted-foreground">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Rating Filter */}
      <div>
        <label className="block text-sm font-medium text-primary mb-2">Minimum Rating</label>
        <div className="flex items-center space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-6 w-6 cursor-pointer ${
                star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
              onClick={() => handleRatingChange(star)}
            />
          ))}
        </div>
      </div>

      {/* Apply Filters Button */}
      <Button className="w-full" onClick={handleApplyFilters}>
        Apply Filters
      </Button>
    </div>
  )
}