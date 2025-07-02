'use client'

import { Star, Heart } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface Product {
  id: number
  name: string
  price: number
  rating: number
  imageUrl: string
  isBestSeller?: boolean
}

const trendingProducts: Product[] = [
  {
    id: 1,
    name: "Radiant Glow Serum",
    price: 49.99,
    rating: 4.8,
    imageUrl: "/placeholder.svg?height=400&width=400",
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Velvet Matte Lipstick",
    price: 24.99,
    rating: 4.6,
    imageUrl: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    name: "Hydra-Boost Moisturizer",
    price: 39.99,
    rating: 4.9,
    imageUrl: "/placeholder.svg?height=400&width=400",
    isBestSeller: true,
  },
  {
    id: 4,
    name: "Lash Luxe Mascara",
    price: 19.99,
    rating: 4.7,
    imageUrl: "/placeholder.svg?height=400&width=400",
  },
]

export default function TrendingProducts() {
  return (
    <TooltipProvider>
      <section className="py-8 sm:py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 sm:mb-10 text-gray-800">Trending Now</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {trendingProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden transition-transform transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-lg sm:hover:shadow-2xl duration-300"
              >
                <div className="relative">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-48 sm:h-60 object-cover transition-transform duration-300 transform hover:scale-105"
                  />
                  {product.isBestSeller && (
                    <Badge className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-primary text-white px-2 py-1 text-xs font-semibold rounded">
                      Best Seller
                    </Badge>
                  )}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white bg-opacity-75 rounded-full p-1.5 sm:p-2 hover:bg-opacity-100 transition">
                        <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Add to Wishlist</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <CardContent className="p-3 sm:p-4">
                  <h3 className="font-semibold text-base sm:text-lg mb-2 text-gray-700 hover:text-primary transition-colors duration-200 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg sm:text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 mr-1" />
                      <span className="text-xs sm:text-sm text-gray-600">{product.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-3 sm:p-4 pt-0">
                  <Button asChild className="w-full transition-colors duration-300 hover:bg-primary-dark text-sm sm:text-base">
                    <Link href={`/product/${product.id}`}>Shop Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  )
}

