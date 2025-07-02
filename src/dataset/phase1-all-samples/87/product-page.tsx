'use client'

import { useState } from 'react'
import { Star, ShoppingCart, ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')
  const [activeImage, setActiveImage] = useState(0)

  const incrementQuantity = () => setQuantity(prev => prev + 1)
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1)

  const images = [
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400"
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square">
            <img
              src={images[activeImage]}
              alt="Organic Quinoa"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`aspect-square rounded-md overflow-hidden ${activeImage === index ? 'ring-2 ring-primary' : ''}`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold">Organic Quinoa</h1>
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 md:w-5 md:h-5 fill-primary" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">(128 reviews)</span>
          </div>
          <p className="text-xl md:text-2xl font-bold">$12.99</p>
          <p className="text-sm md:text-base text-muted-foreground">Premium organic quinoa sourced from sustainable farms.</p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center border rounded-md">
              <Button variant="ghost" size="icon" onClick={decrementQuantity}>
                <Minus className="h-4 w-4" />
              </Button>
              <span className="px-4">{quantity}</span>
              <Button variant="ghost" size="icon" onClick={incrementQuantity}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button className="w-full sm:w-auto">
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="mt-12">
        <div className="border-b overflow-x-auto">
          <nav className="flex space-x-8" aria-label="Tabs">
            {['description', 'ingredients', 'nutrition', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${activeTab === tab
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-primary hover:border-muted-foreground'
                  }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-8">
          {activeTab === 'description' && (
            <p className="text-sm md:text-base">
              Our organic quinoa is a nutrient-packed superfood that's perfect for health-conscious food lovers.
              Sourced from sustainable farms, this versatile grain is rich in protein, fiber, and essential amino acids.
              Its light, fluffy texture and nutty flavor make it an excellent base for salads, sides, and main dishes.
            </p>
          )}

          {activeTab === 'ingredients' && (
            <ul className="list-disc pl-5 text-sm md:text-base">
              <li>100% Organic Quinoa</li>
            </ul>
          )}

          {activeTab === 'nutrition' && (
            <Card>
              <CardContent className="p-4 overflow-x-auto">
                <h3 className="text-lg font-semibold mb-4">Nutrition Facts</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[180px]">Nutrient</TableHead>
                      <TableHead>Amount Per Serving</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Calories</TableCell>
                      <TableCell>120</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Total Fat</TableCell>
                      <TableCell>2g</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Carbohydrates</TableCell>
                      <TableCell>21g</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Protein</TableCell>
                      <TableCell>4g</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Fiber</TableCell>
                      <TableCell>3g</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-4">
              {[1, 2, 3].map((review) => (
                <Card key={review}>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-primary" />
                        ))}
                      </div>
                      <span className="font-semibold text-sm md:text-base">Great product!</span>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      This quinoa is fantastic! It cooks perfectly every time and has a wonderful flavor.
                      I love that it's organic and sustainably sourced. Will definitely buy again!
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

