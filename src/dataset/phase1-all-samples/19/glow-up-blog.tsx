import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, ChevronRight, Menu, X } from 'lucide-react'

export default function GlowUp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-pink-600">GlowUp</h1>
          <button
            className="md:hidden text-gray-600 hover:text-pink-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link href="#" className="text-gray-600 hover:text-pink-600">Home</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-pink-600">Skincare</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-pink-600">Makeup</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-pink-600">Reviews</Link></li>
            </ul>
          </nav>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200">
            <ul className="flex flex-col space-y-2 px-4 py-2">
              <li><Link href="#" className="block py-2 text-gray-600 hover:text-pink-600">Home</Link></li>
              <li><Link href="#" className="block py-2 text-gray-600 hover:text-pink-600">Skincare</Link></li>
              <li><Link href="#" className="block py-2 text-gray-600 hover:text-pink-600">Makeup</Link></li>
              <li><Link href="#" className="block py-2 text-gray-600 hover:text-pink-600">Reviews</Link></li>
            </ul>
          </nav>
        )}
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8">
        <section className="mb-8 sm:mb-12">
          <Card className="bg-gradient-to-r from-pink-100 to-purple-100">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold text-gray-800">Featured Post</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900">10 Steps to Achieve Glass Skin</h2>
              <p className="text-gray-600 mb-4">Discover the secrets to achieving that coveted glass skin look with our comprehensive guide.</p>
              <Button variant="secondary" className="w-full sm:w-auto">
                Read More <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">Latest Tutorials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Skincare</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-pink-600 hover:underline">Night-time Skincare Routine for Dry Skin</Link></li>
                  <li><Link href="#" className="text-pink-600 hover:underline">How to Layer Your Skincare Products</Link></li>
                  <li><Link href="#" className="text-pink-600 hover:underline">DIY Face Masks for Glowing Skin</Link></li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Makeup</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-pink-600 hover:underline">5-Minute Everyday Makeup Look</Link></li>
                  <li><Link href="#" className="text-pink-600 hover:underline">Mastering the Smokey Eye</Link></li>
                  <li><Link href="#" className="text-pink-600 hover:underline">How to Apply False Lashes Like a Pro</Link></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">Product Reviews</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { name: "Glow Serum", brand: "LuminousBeauty", rating: 4.5 },
              { name: "Matte Lipstick", brand: "ColorPop", rating: 4.0 },
              { name: "Hydrating Moisturizer", brand: "AquaFresh", rating: 5.0 },
            ].map((product, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.brand}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 sm:h-5 sm:w-5 ${i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                          }`}
                      />
                    ))}
                    <span className="ml-2 text-sm sm:text-base text-gray-600">{product.rating.toFixed(1)}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full text-sm sm:text-base">Read Full Review</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Subscribe to Our Newsletter</CardTitle>
              <CardDescription className="text-sm sm:text-base">Get the latest beauty tips and product reviews delivered to your inbox.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <Input type="email" placeholder="Enter your email" className="flex-grow" />
                <Button type="submit" className="w-full sm:w-auto">Subscribe</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}

