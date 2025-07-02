'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

interface Product {
  id: number
  name: string
  price: number
  description: string
  image: string
  rating: number
  isBestSeller?: boolean
}

const relatedProducts: Product[] = [
  {
    id: 1,
    name: "Wireless Earbuds",
    price: 79.99,
    description: "High-quality sound with long battery life",
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.5,
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Smartphone Stand",
    price: 24.99,
    description: "Adjustable stand for comfortable viewing",
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.0,
  },
  {
    id: 3,
    name: "USB-C Cable",
    price: 14.99,
    description: "Fast charging and data transfer",
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.2,
  },
  {
    id: 4,
    name: "Portable Charger",
    price: 39.99,
    description: "10000mAh capacity for multiple charges",
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.8,
    isBestSeller: true,
  },
  {
    id: 5,
    name: "Screen Protector",
    price: 9.99,
    description: "Tempered glass for maximum protection",
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.1,
  }
]

export default function RelatedProductsSlider() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleScroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -1 : 1
      const cardWidth = isMobile ? containerRef.current.offsetWidth : 300
      containerRef.current.scrollBy({ left: scrollAmount * cardWidth, behavior: 'smooth' })
      setScrollPosition(containerRef.current.scrollLeft + scrollAmount * cardWidth)
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 sm:mb-6 text-gray-800">Related Products</h2>
      <div className="relative">
        <div
          ref={containerRef}
          className="flex overflow-x-auto gap-4 sm:gap-6 scroll-smooth scrollbar-hide transition-all duration-300 snap-x snap-mandatory"
          aria-label="Related products slider"
        >
          {relatedProducts.map((product) => (
            <Card key={product.id} className="w-[calc(100vw-2rem)] sm:w-72 flex-shrink-0 bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg transform hover:scale-105 snap-start">
              <CardHeader className="relative p-0">
                {product.isBestSeller && (
                  <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">Best Seller</span>
                )}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={288}
                  height={288}
                  className="w-full h-48 object-cover rounded-t-lg"
                  priority
                />
              </CardHeader>
              <CardContent className="flex flex-col p-4">
                <CardTitle className="text-lg sm:text-xl font-semibold text-gray-800">{product.name}</CardTitle>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className={`h-4 sm:h-5 w-4 sm:w-5 ${index < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                  ))}
                  <span className="ml-2 text-xs sm:text-sm text-gray-600">({product.rating})</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 flex-grow">{product.description}</p>
                <p className="text-base sm:text-lg font-bold mt-3 text-gray-900">${product.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="default" className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        {!isMobile && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 shadow-md rounded-full p-2 hidden sm:flex"
              onClick={() => handleScroll('left')}
              disabled={scrollPosition <= 0}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 shadow-md rounded-full p-2 hidden sm:flex"
              onClick={() => handleScroll('right')}
              disabled={scrollPosition >= (relatedProducts.length - 2) * 300}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </Button>
          </>
        )}
      </div>
      <style jsx>{`
        /* Hide scrollbar for all browsers */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}

