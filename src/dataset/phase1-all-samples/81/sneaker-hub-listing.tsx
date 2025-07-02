import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function SneakerHubListing() {
  const [size, setSize] = useState('all')
  const [brand, setBrand] = useState('all')
  const [price, setPrice] = useState('all')

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
      )
    )
  })

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center sm:text-left">SneakerHub</h1>
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto justify-between">
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
                <Button variant="outline" className="w-full sm:w-auto justify-between">
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
                <Button variant="outline" className="w-full sm:w-auto justify-between">
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
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredSneakers.map((sneaker) => (
            <div key={sneaker.id} className="bg-white overflow-hidden shadow rounded-lg flex flex-col">
              <div className="relative h-48 sm:h-56">
                <Image
                  src={sneaker.image}
                  alt={sneaker.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="px-4 py-4 flex-grow">
                <h3 className="text-lg font-semibold text-gray-900">{sneaker.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{sneaker.brand}</p>
                <p className="mt-2 text-lg font-bold text-gray-900">${sneaker.price}</p>
                <p className="mt-1 text-sm text-gray-600">Size: {sneaker.size}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

