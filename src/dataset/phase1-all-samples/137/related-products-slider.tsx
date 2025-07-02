'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

interface Product {
  id: number
  name: string
  price: number
  description: string
  image: string
}

const relatedProducts: Product[] = [
  {
    id: 1,
    name: "Wireless Earbuds",
    price: 79.99,
    description: "High-quality sound with long battery life",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    id: 2,
    name: "Smartphone Stand",
    price: 24.99,
    description: "Adjustable stand for comfortable viewing",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    id: 3,
    name: "USB-C Cable",
    price: 14.99,
    description: "Fast charging and data transfer",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    id: 4,
    name: "Portable Charger",
    price: 39.99,
    description: "10000mAh capacity for multiple charges",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    id: 5,
    name: "Screen Protector",
    price: 9.99,
    description: "Tempered glass for maximum protection",
    image: "/placeholder.svg?height=200&width=200"
  }
]

export default function RelatedProductsSlider() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('product-container')
    if (container) {
      const scrollAmount = direction === 'left' ? -1 : 1
      const scrollWidth = isMobile ? container.offsetWidth : container.offsetWidth / 2
      container.scrollBy({ left: scrollAmount * scrollWidth, behavior: 'smooth' })
      setScrollPosition(container.scrollLeft + scrollAmount * scrollWidth)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Related Products</h2>
      <div className="relative">
        <div
          id="product-container"
          className="flex overflow-x-auto gap-4 scroll-smooth scrollbar-hide snap-x snap-mandatory"
          aria-label="Related products slider"
        >
          {relatedProducts.map((product) => (
            <Card key={product.id} className="w-[calc(100vw-2rem)] sm:w-[calc(50vw-2rem)] md:w-64 flex-shrink-0 snap-start">
              <CardHeader>
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-t-lg" />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg md:text-xl">{product.name}</CardTitle>
                <p className="text-xs md:text-sm text-gray-600 mt-1">{product.description}</p>
                <p className="text-base md:text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full text-sm md:text-base">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        {!isMobile && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md hidden md:flex"
              onClick={() => handleScroll('left')}
              disabled={scrollPosition <= 0}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md hidden md:flex"
              onClick={() => handleScroll('right')}
              disabled={scrollPosition >= (relatedProducts.length - 1) * 200}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

