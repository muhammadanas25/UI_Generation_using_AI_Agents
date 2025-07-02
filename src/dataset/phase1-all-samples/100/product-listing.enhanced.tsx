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
import { ShoppingBag, ChevronDown, Search, Filter, X, Star } from 'lucide-react'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"

// Mock data for demonstration
const products = [
  { id: 1, name: "Classic Runner", brand: "Nike", price: 89.99, image: "/placeholder.svg", rating: 4 },
  { id: 2, name: "Comfort Walker", brand: "Adidas", price: 79.99, image: "/placeholder.svg", rating: 5 },
  { id: 3, name: "Urban Hiker", brand: "Timberland", price: 129.99, image: "/placeholder.svg", rating: 4 },
  { id: 4, name: "Sleek Loafer", brand: "Clarks", price: 69.99, image: "/placeholder.svg", rating: 3 },
  { id: 5, name: "Sport Sandal", brand: "Teva", price: 59.99, image: "/placeholder.svg", rating: 4 },
  { id: 6, name: "Casual Sneaker", brand: "Vans", price: 54.99, image: "/placeholder.svg", rating: 5 },
]

export default function ProductListing() {
  const [priceRange, setPriceRange] = useState([0, 200])
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-20 bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold text-[#1F2937]">StepUp</h1>
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search shoes..."
                className="pl-12 pr-4 py-2 w-80 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 transition"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <Button variant="default" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              <span className="sr-only">Shopping cart</span>
            </Button>
          </div>
          <button className="md:hidden text-gray-700" onClick={() => setMobileFiltersOpen(true)}>
            <Filter size={24} />
          </button>
        </div>
        <div className="container mx-auto px-4 py-2 hidden md:block">
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Home</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Shop</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition">About</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Contact</a>
          </nav>
        </div>
      </header>

      <Dialog open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
        <DialogTrigger asChild>
          <button className="md:hidden"></button>
        </DialogTrigger>
        <DialogContent className="w-full max-w-md p-6">
          <DialogHeader className="flex justify-between items-center mb-4">
            <DialogTitle className="text-xl font-semibold">Filters</DialogTitle>
            <DialogClose asChild>
              <button className="text-gray-700 hover:text-indigo-600 transition">
                <X size={24} />
              </button>
            </DialogClose>
          </DialogHeader>
          <div className="space-y-6">
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
              <div className="flex flex-wrap gap-2">
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
          </div>
        </DialogContent>
      </Dialog>

      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <aside className="hidden lg:block lg:w-1/4 space-y-6 sticky top-20">
          <div className="bg-white p-4 rounded-lg shadow">
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

          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Size</h2>
            <div className="flex flex-wrap gap-2">
              {[6, 7, 8, 9, 10, 11, 12, 13, 14].map((size) => (
                <Button key={size} variant="outline" size="sm">
                  {size}
                </Button>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
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

          <div className="bg-white p-4 rounded-lg shadow">
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

          <div className="bg-white p-4 rounded-lg shadow">
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
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-[#111827]">All Shoes</h2>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                  <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest Arrivals</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="secondary" size="icon">
                <Filter size={20} />
                <span className="sr-only">Filter</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-xl transition transform hover:scale-105">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-t-lg" />
                  <div className="absolute top-2 left-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
                    New
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-gray-600">{product.brand}</p>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} className={`h-4 w-4 ${index < product.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xl font-bold text-indigo-600">${product.price.toFixed(2)}</span>
                    <Button variant="primary" size="sm" className="flex items-center space-x-2">
                      <ShoppingBag className="h-4 w-4" />
                      <span>Add</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" size="lg">
              Load More
            </Button>
          </div>
        </main>
      </div>

      <footer className="bg-white shadow-inner">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} StepUp. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.944 13.944 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.574 4.902 4.902 0 0 1-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.085 4.919 4.919 0 0 0 4.59 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.514 14.01-14.034 0-.213-.005-.425-.014-.637A10.012 10.012 0 0 0 24 4.557z"/></svg></a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.314.975.975 1.252 2.242 1.314 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.314 3.608-.975.975-2.242 1.252-3.608 1.314-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.314-.975-.975-1.252-2.242-1.314-3.608C2.175 15.746 2.163 15.366 2.163 12s.012-3.584.07-4.85c.062-1.366.34-2.633 1.314-3.608C4.517 2.503 5.784 2.225 7.15 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.015 7.052.072 5.771.129 4.913.346 4.122.657c-.793.313-1.46.725-2.126 1.392C1.315 2.864.903 3.53.59 4.323.279 5.113.063 5.971.006 7.252.015 8.332 0 8.741 0 12s.015 3.668.072 4.948c.057 1.281.273 2.139.584 2.93.313.793.725 1.46 1.392 2.126.667.667 1.334 1.079 2.126 1.392.791.311 1.649.527 2.93.584C8.332 23.985 8.741 24 12 24s3.668-.015 4.948-.072c1.281-.057 2.139-.273 2.93-.584.793-.313 1.46-.725 2.126-1.392.667-.667 1.079-1.334 1.392-2.126.311-.791.527-1.649.584-2.93.057-1.28.072-1.689.072-4.948s-.015-3.668-.072-4.948c-.057-1.281-.273-2.139-.584-2.93-.313-.793-.725-1.46-1.392-2.126-.667-.667-1.334-1.079-2.126-1.392-.791-.311-1.649-.527-2.93-.584C15.668.015 15.259 0 12 0z"/><path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/><circle cx="18.406" cy="5.594" r="1.44"/></svg></a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.314.975.975 1.252 2.242 1.314 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.314 3.608-.975.975-2.242 1.252-3.608 1.314-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.314-.975-.975-1.252-2.242-1.314-3.608C2.175 15.746 2.163 15.366 2.163 12s.012-3.584.07-4.85c.062-1.366.34-2.633 1.314-3.608.975-.975 2.242-1.252 3.608-1.314C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.015 7.052.072 5.771.129 4.913.346 4.122.657c-.793.313-1.46.725-2.126 1.392C1.315 2.864.903 3.53.59 4.323.279 5.113.063 5.971.006 7.252.015 8.332 0 8.741 0 12s.015 3.668.072 4.948c.057 1.281.273 2.139.584 2.93.313.793.725 1.46 1.392 2.126.667.667 1.334 1.079 2.126 1.392.791.311 1.649.527 2.93.584C8.332 23.985 8.741 24 12 24s3.668-.015 4.948-.072c1.281-.057 2.139-.273 2.93-.584.793-.313 1.46-.725 2.126-1.392.667-.667 1.079-1.334 1.392-2.126.311-.791.527-1.649.584-2.93.057-1.28.072-1.689.072-4.948s-.015-3.668-.072-4.948c-.057-1.281-.273-2.139-.584-2.93-.313-.793-.725-1.46-1.392-2.126-.667-.667-1.334-1.079-2.126-1.392-.791-.311-1.649-.527-2.93-.584C15.668.015 15.259 0 12 0z"/></svg></a>
          </div>
        </div>
      </footer>
    </div>
  )
}