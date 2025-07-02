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
import { ChevronDown, Star, Tag, RefreshCw } from "lucide-react"
import { motion } from "framer-motion"

export default function FilterPanel() {
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

  const handleResetFilters = () => {
    setProductTypes({
      smartphones: false,
      laptops: false,
      tablets: false,
      smartwatches: false,
    })
    setPriceRange([0, 1000])
    setRating(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 space-y-6 bg-white rounded-2xl shadow-lg max-w-md mx-auto"
    >
      <h2 className="flex items-center text-2xl font-semibold text-gray-800">
        <Tag className="mr-2 h-6 w-6 text-primary" />
        Filter Results
      </h2>

      {/* Product Type Filter */}
      <div className="space-y-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-between hover:border-primary transition-colors"
            >
              <span>Product Type</span>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel className="text-sm font-medium text-gray-700">
              Select Product Types
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {Object.keys(productTypes).map((type) => (
              <DropdownMenuCheckboxItem
                key={type}
                checked={productTypes[type]}
                onCheckedChange={() => handleProductTypeChange(type)}
                className="capitalize"
              >
                {type}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Price Range Filter */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Price Range
        </label>
        <Slider
          min={0}
          max={1000}
          step={10}
          value={priceRange}
          onValueChange={handlePriceRangeChange}
          className="w-full"
        />
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Rating Filter */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Minimum Rating
        </label>
        <div className="flex items-center space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.div
              key={star}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Star
                className={`h-6 w-6 cursor-pointer ${
                  star <= rating ? "text-yellow-400" : "text-gray-300"
                } transition-colors`}
                onClick={() => handleRatingChange(star)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <Button
          variant="secondary"
          className="flex-1 flex items-center justify-center hover:bg-gray-100 transition-colors"
          onClick={handleResetFilters}
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Reset Filters
        </Button>
        <Button className="flex-1" onClick={handleApplyFilters}>
          Apply Filters
        </Button>
      </div>
    </motion.div>
  )
}