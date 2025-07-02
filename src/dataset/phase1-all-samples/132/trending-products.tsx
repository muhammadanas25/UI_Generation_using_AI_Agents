import { Star } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface Product {
  id: number
  name: string
  price: number
  rating: number
  imageUrl: string
}

const trendingProducts: Product[] = [
  {
    id: 1,
    name: "Radiant Glow Serum",
    price: 49.99,
    rating: 4.8,
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Velvet Matte Lipstick",
    price: 24.99,
    rating: 4.6,
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Hydra-Boost Moisturizer",
    price: 39.99,
    rating: 4.9,
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Lash Luxe Mascara",
    price: 19.99,
    rating: 4.7,
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
]

export default function TrendingProducts() {
  return (
    <section className="py-8 sm:py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Trending Now</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trendingProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden transition-shadow hover:shadow-lg">
              <CardContent className="p-0">
                <div className="relative w-full h-40 sm:h-48">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-semibold text-base sm:text-lg mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg sm:text-xl font-bold">${product.price.toFixed(2)}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-primary text-primary mr-1" />
                      <span className="text-sm">{product.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-3 sm:p-4 pt-0">
                <Button asChild className="w-full text-sm sm:text-base">
                  <Link href={`/product/${product.id}`}>Shop Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

