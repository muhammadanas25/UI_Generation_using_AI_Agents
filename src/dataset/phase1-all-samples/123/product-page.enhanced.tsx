import { Star, ShoppingCart, Heart, ChevronRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">SmartNest</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="#" className="text-sm font-medium hover:underline">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Products
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <Image
                src="/placeholder.svg"
                alt="SmartHome Hub"
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
              <div className="grid grid-cols-4 gap-4">
                <Image
                  src="/placeholder.svg"
                  alt="SmartHome Hub - Detail 1"
                  width={100}
                  height={100}
                  className="rounded-lg object-cover"
                />
                <Image
                  src="/placeholder.svg"
                  alt="SmartHome Hub - Detail 2"
                  width={100}
                  height={100}
                  className="rounded-lg object-cover"
                />
                <Image
                  src="/placeholder.svg"
                  alt="SmartHome Hub - Detail 3"
                  width={100}
                  height={100}
                  className="rounded-lg object-cover"
                />
                <Image
                  src="/placeholder.svg"
                  alt="SmartHome Hub - Detail 4"
                  width={100}
                  height={100}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">SmartHome Hub</h1>
                <p className="text-xl font-semibold mt-2">$199.99</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary" />
                  ))}
                </div>
                <span className="text-sm">(128 reviews)</span>
              </div>
              <p className="text-muted-foreground">
                The SmartHome Hub is the central command center for your smart home. Control all your
                connected devices, set routines, and monitor your home's energy usage from one intuitive
                interface.
              </p>
              <div className="space-y-2">
                <h3 className="font-semibold">Key Features:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Compatible with over 1000+ smart home devices</li>
                  <li>Voice control with Alexa and Google Assistant</li>
                  <li>Energy monitoring and usage reports</li>
                  <li>Customizable routines and automations</li>
                </ul>
              </div>
              <div className="flex space-x-4">
                <Button size="lg" className="flex-1">
                  <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                </Button>
                <Button size="lg" variant="outline">
                  <Heart className="mr-2 h-5 w-5" /> Add to Wishlist
                </Button>
              </div>
            </div>
          </div>
          <Tabs defaultValue="features" className="mt-12">
            <TabsList>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="features" className="mt-6 space-y-4">
              <h2 className="text-2xl font-semibold">Features</h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                <li className="flex items-center space-x-2">
                  <ChevronRight className="h-5 w-5 text-primary" />
                  <span>Easy setup with guided app instructions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight className="h-5 w-5 text-primary" />
                  <span>Real-time notifications and alerts</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight className="h-5 w-5 text-primary" />
                  <span>Secure encryption for all connected devices</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight className="h-5 w-5 text-primary" />
                  <span>Automatic software updates</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight className="h-5 w-5 text-primary" />
                  <span>Multi-user support with customizable permissions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight className="h-5 w-5 text-primary" />
                  <span>Integration with IFTTT for advanced automations</span>
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="specs" className="mt-6 space-y-4">
              <h2 className="text-2xl font-semibold">Specifications</h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                <li className="flex items-center space-x-2">
                  <ChevronRight className="h-5 w-5 text-primary" />
                  <span>Dimensions: 4.5" x 4.5" x 1.5"</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight className="h-5 w-5 text-primary" />
                  <span>Weight: 8 oz</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight className="h-5 w-5 text-primary" />
                  <span>Wireless: Wi-Fi 6 (802.11ax), Bluetooth 5.0</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight className="h-5 w-5 text-primary" />
                  <span>Processor: Quad-core ARM Cortex-A53, 1.5 GHz</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight className="h-5 w-5 text-primary" />
                  <span>Memory: 1 GB RAM, 8 GB eMMC storage</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight className="h-5 w-5 text-primary" />
                  <span>Power: 5V DC, 2A power adapter included</span>
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6 space-y-8">
              <h2 className="text-2xl font-semibold">Customer Reviews</h2>
              <div className="space-y-6">
                {[
                  {
                    name: "Alice Johnson",
                    rating: 5,
                    comment:
                      "The SmartHome Hub has completely transformed my home. It's so easy to use and the automations save me time every day!",
                  },
                  {
                    name: "Bob Smith",
                    rating: 4,
                    comment:
                      "Great product overall. The energy monitoring feature is particularly useful. Wish it had more native integrations though.",
                  },
                  {
                    name: "Carol Williams",
                    rating: 5,
                    comment:
                      "Customer support is top-notch. They helped me set up some complex routines and were very patient throughout the process.",
                  },
                ].map((review, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-semibold">{review.name}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${i < review.rating ? "fill-primary" : "fill-muted stroke-muted-foreground"
                                }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Related Products</h2>
            <div className="grid gap-6 md:grid-cols-4">
              {[
                "Smart Thermostat",
                "Wireless Security Camera",
                "Smart Door Lock",
                "Voice Assistant Speaker",
              ].map((product, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <Image
                      src="/placeholder.svg"
                      alt={product}
                      width={200}
                      height={200}
                      className="rounded-lg object-cover mb-4"
                    />
                    <h3 className="font-semibold">{product}</h3>
                    <p className="text-sm text-muted-foreground mt-1">From $79.99</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-4 md:py-6">
        <div className="container text-center text-xs md:text-sm px-4">
          © 2023 SmartNest. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

