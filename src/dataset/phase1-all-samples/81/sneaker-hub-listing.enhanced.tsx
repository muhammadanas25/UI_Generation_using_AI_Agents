import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ShoppingCart, Search, Filter } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardBody, CardFooter } from '@/components/ui/card'

export default function SneakerHubListing() {
  const [size, setSize] = useState('all')
  const [brand, setBrand] = useState('all')
  const [price, setPrice] = useState('all')
  const [search, setSearch] = useState('')

  const sneakers = [
    { id: 1, name: 'Air Max 90', brand: 'Nike', price: 120, size: 10, image: '/placeholder.svg?height=200&width=200' },
    { id: 2, name: 'Ultraboost', brand: 'Adidas', price: 180, size: 9, image: '/placeholder.svg?height=200&width=200' },
    { id: 3, name: 'Classic Leather', brand: 'Reebok', price: 75, size: 11, image: '/placeholder.svg?height=200&width=200' },
    { id: 4, name: 'Chuck Taylor', brand: 'Converse', price: 55, size: 8, image: '/placeholder.svg?height=200&width=200' },
    { id: 5, name: 'Gel-Nimbus', brand: 'Asics', price: 150, size: 10, image: '/placeholder.svg?height=200&width=200' },
    { id: 6, name: 'Old Skool', brand: 'Vans', price: 60, size: 9, image: '/placeholder.svg?height=200&width=200' },
  ]

  const filteredSneakers = sneakers.filter((sneaker) => {
    return (
      (size === 'all' || sneaker.size.toString() === size) &&
      (brand === 'all' || sneaker.brand.toLowerCase() === brand) &&
      (price === 'all' || 
        (price === 'under100' && sneaker.price < 100) ||
        (price === '100to200' && sneaker.price >= 100 && sneaker.price <= 200) ||
        (price === 'over200' && sneaker.price > 200)
      ) &&
      (sneaker.name.toLowerCase().includes(search.toLowerCase()) ||
      sneaker.brand.toLowerCase().includes(search.toLowerCase()))
    )
  })

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 sm:mb-0 animate-fadeIn">SneakerHub</h1>
          <div className="flex flex-wrap gap-4 items-center animate-fadeIn">
            <Input
              placeholder="Search sneakers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-64 flex items-center"
              icon={<Search className="w-5 h-5 text-gray-500" />}
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center">
                  Size <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuRadioGroup value={size} onValueChange={setSize}>
                  <DropdownMenuRadioItem value="all">All Sizes</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="8">8</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="9">9</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="10">10</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="11">11</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center">
                  Brand <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuRadioGroup value={brand} onValueChange={setBrand}>
                  <DropdownMenuRadioItem value="all">All Brands</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="nike">Nike</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="adidas">Adidas</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="reebok">Reebok</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="converse">Converse</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="asics">Asics</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="vans">Vans</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center">
                  Price <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuRadioGroup value={price} onValueChange={setPrice}>
                  <DropdownMenuRadioItem value="all">All Prices</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="under100">Under $100</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="100to200">$100 - $200</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="over200">Over $200</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 animate-fadeIn">
          <h2 className="text-2xl font-bold text-gray-800">Available Sneakers</h2>
          <Button variant="secondary" className="mt-4 sm:mt-0 flex items-center">
            <Filter className="mr-2 w-5 h-5" /> Filter
          </Button>
        </div>
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredSneakers.map((sneaker) => (
              <Card key={sneaker.id} className="transform hover:scale-105 transition-transform duration-300 shadow-lg">
                <CardHeader className="relative">
                  <Image
                    src={sneaker.image}
                    alt={sneaker.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <span className="absolute top-2 left-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">New</span>
                </CardHeader>
                <CardBody className="px-4 py-2">
                  <h3 className="text-xl font-semibold text-gray-900">{sneaker.name}</h3>
                  <p className="mt-1 text-sm text-gray-600 uppercase">{sneaker.brand}</p>
                  <p className="mt-2 text-lg font-bold text-gray-900">${sneaker.price}</p>
                  <p className="mt-1 text-sm text-gray-600">Size: {sneaker.size}</p>
                </CardBody>
                <CardFooter className="px-4 py-2 flex justify-between">
                  <Button variant="default" size="sm" className="flex items-center">
                    <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
                  </Button>
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
            {filteredSneakers.length === 0 && (
              <div className="col-span-full text-center text-gray-500">
                No sneakers found matching your criteria.
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}