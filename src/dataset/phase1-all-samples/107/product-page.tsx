"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ChevronDown, ChevronUp, ShoppingCart, Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState("black")
  const [selectedSize, setSelectedSize] = useState("m")
  const [activeImage, setActiveImage] = useState(0)

  const product = {
    name: "TrendVibes Signature Hoodie",
    price: 79.99,
    description: "Stay cozy and stylish with our signature hoodie. Made from premium cotton blend for ultimate comfort.",
    colors: [
      { name: "Black", value: "black" },
      { name: "Gray", value: "gray" },
      { name: "Navy", value: "navy" },
    ],
    sizes: ["xs", "s", "m", "l", "xl"],
    images: [
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  }

  const reviews = [
    { id: 1, author: "Alex J.", rating: 5, comment: "Love this hoodie! So comfortable and stylish." },
    { id: 2, author: "Sam T.", rating: 4, comment: "Great quality, but runs a bit large." },
    { id: 3, author: "Jamie L.", rating: 5, comment: "Perfect for chilly evenings. Highly recommend!" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="relative aspect-square">
            <Image
              src={product.images[activeImage]}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square cursor-pointer"
                onClick={() => setActiveImage(index)}
              >
                <Image
                  src={image}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className={`rounded-md ${activeImage === index ? 'ring-2 ring-black' : ''}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
          <p className="text-xl md:text-2xl font-semibold">${product.price.toFixed(2)}</p>
          <p className="text-gray-600">{product.description}</p>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Color</h2>
            <RadioGroup
              value={selectedColor}
              onValueChange={setSelectedColor}
              className="flex space-x-2"
            >
              {product.colors.map((color) => (
                <div key={color.value}>
                  <RadioGroupItem
                    value={color.value}
                    id={`color-${color.value}`}
                    className="sr-only"
                  />
                  <label
                    htmlFor={`color-${color.value}`}
                    className={`w-8 h-8 rounded-full cursor-pointer flex items-center justify-center ${selectedColor === color.value ? "ring-2 ring-offset-2 ring-black" : ""
                      }`}
                    style={{ backgroundColor: color.value }}
                  >
                    <span className="sr-only">{color.name}</span>
                  </label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Size</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="link">Size Guide</Button>
                </DialogTrigger>
                <DialogContent className="max-w-sm sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Size Guide</DialogTitle>
                    <DialogDescription>
                      Find your perfect fit with our size guide.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr>
                          <th className="px-2 sm:px-4 py-2 border">Size</th>
                          <th className="px-2 sm:px-4 py-2 border">Chest (inches)</th>
                          <th className="px-2 sm:px-4 py-2 border">Waist (inches)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-2 sm:px-4 py-2 border text-center">XS</td>
                          <td className="px-2 sm:px-4 py-2 border text-center">32-34</td>
                          <td className="px-2 sm:px-4 py-2 border text-center">26-28</td>
                        </tr>
                        <tr>
                          <td className="px-2 sm:px-4 py-2 border text-center">S</td>
                          <td className="px-2 sm:px-4 py-2 border text-center">35-37</td>
                          <td className="px-2 sm:px-4 py-2 border text-center">29-31</td>
                        </tr>
                        <tr>
                          <td className="px-2 sm:px-4 py-2 border text-center">M</td>
                          <td className="px-2 sm:px-4 py-2 border text-center">38-40</td>
                          <td className="px-2 sm:px-4 py-2 border text-center">32-34</td>
                        </tr>
                        <tr>
                          <td className="px-2 sm:px-4 py-2 border text-center">L</td>
                          <td className="px-2 sm:px-4 py-2 border text-center">41-43</td>
                          <td className="px-2 sm:px-4 py-2 border text-center">35-37</td>
                        </tr>
                        <tr>
                          <td className="px-2 sm:px-4 py-2 border text-center">XL</td>
                          <td className="px-2 sm:px-4 py-2 border text-center">44-46</td>
                          <td className="px-2 sm:px-4 py-2 border text-center">38-40</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <RadioGroup
              value={selectedSize}
              onValueChange={setSelectedSize}
              className="flex flex-wrap gap-2"
            >
              {product.sizes.map((size) => (
                <div key={size}>
                  <RadioGroupItem value={size} id={`size-${size}`} className="sr-only" />
                  <label
                    htmlFor={`size-${size}`}
                    className={`w-10 h-10 rounded-md border cursor-pointer flex items-center justify-center text-sm font-medium ${selectedSize === size
                        ? "bg-black text-white"
                        : "bg-white text-black hover:bg-gray-100"
                      }`}
                  >
                    {size.toUpperCase()}
                  </label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <Button className="flex-1">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
            <Button variant="outline" className="flex-1 sm:flex-none">
              <Heart className="w-4 h-4 mr-2 sm:mr-0" />
              <span className="sm:sr-only">Add to Wishlist</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="border-b pb-4">
              <div className="flex items-center mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                    />
                  ))}
                </div>
                <span className="ml-2 font-medium">{review.author}</span>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-4">You May Also Like</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="space-y-2">
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt={`Related product ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="font-medium text-sm sm:text-base">Related Product {index + 1}</h3>
              <p className="text-sm text-gray-600">$59.99</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

