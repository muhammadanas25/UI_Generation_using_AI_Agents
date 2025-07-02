import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Camera, Facebook, Instagram, MapPin, Twitter, Menu, X } from 'lucide-react'

export default function LensJourney() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Camera className="h-6 w-6" />
          <span className="ml-2 text-xl sm:text-2xl font-bold">LensJourney</span>
        </Link>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-14 left-0 right-0 bg-white md:top-0 flex-col md:flex-row gap-4 p-4 md:p-0 shadow-md md:shadow-none`}>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Blog
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Gallery
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to LensJourney
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Capturing the world's beauty, one frame at a time. Join me on my photographic adventures across the globe.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto">Latest Stories</Button>
                <Button variant="outline" className="w-full sm:w-auto">Explore Gallery</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Recent Blog Posts</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <img
                    alt="Blog post thumbnail"
                    className="w-full h-48 object-cover rounded-t-lg"
                    height="200"
                    src="/placeholder.svg?height=200&width=400"
                    style={{
                      aspectRatio: "400/200",
                      objectFit: "cover",
                    }}
                    width="400"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg sm:text-xl">Sunrise at Machu Picchu</CardTitle>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Witnessing the first light of day at this ancient Incan citadel was truly breathtaking...
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link">Read More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    alt="Blog post thumbnail"
                    className="w-full h-48 object-cover rounded-t-lg"
                    height="200"
                    src="/placeholder.svg?height=200&width=400"
                    style={{
                      aspectRatio: "400/200",
                      objectFit: "cover",
                    }}
                    width="400"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg sm:text-xl">The Northern Lights Dance</CardTitle>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Chasing the aurora borealis in Iceland led to this magical moment captured on camera...
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link">Read More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    alt="Blog post thumbnail"
                    className="w-full h-48 object-cover rounded-t-lg"
                    height="200"
                    src="/placeholder.svg?height=200&width=400"
                    style={{
                      aspectRatio: "400/200",
                      objectFit: "cover",
                    }}
                    width="400"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg sm:text-xl">Safari Sunset in Serengeti</CardTitle>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    As the sun dipped below the horizon, the Serengeti came alive with silhouettes...
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link">Read More</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Gallery Preview</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <img
                alt="Gallery image 1"
                className="w-full h-32 sm:h-48 object-cover rounded-lg"
                height="200"
                src="/placeholder.svg?height=200&width=300"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <img
                alt="Gallery image 2"
                className="w-full h-32 sm:h-48 object-cover rounded-lg"
                height="200"
                src="/placeholder.svg?height=200&width=300"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <img
                alt="Gallery image 3"
                className="w-full h-32 sm:h-48 object-cover rounded-lg"
                height="200"
                src="/placeholder.svg?height=200&width=300"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <img
                alt="Gallery image 4"
                className="w-full h-32 sm:h-48 object-cover rounded-lg"
                height="200"
                src="/placeholder.svg?height=200&width=300"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <img
                alt="Gallery image 5"
                className="w-full h-32 sm:h-48 object-cover rounded-lg"
                height="200"
                src="/placeholder.svg?height=200&width=300"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <img
                alt="Gallery image 6"
                className="w-full h-32 sm:h-48 object-cover rounded-lg"
                height="200"
                src="/placeholder.svg?height=200&width=300"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
            </div>
            <div className="mt-8 text-center">
              <Button>View Full Gallery</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 LensJourney. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex gap-4">
          <Link className="text-gray-500 hover:text-gray-700" href="#">
            <Facebook className="h-4 w-4" />
          </Link>
          <Link className="text-gray-500 hover:text-gray-700" href="#">
            <Twitter className="h-4 w-4" />
          </Link>
          <Link className="text-gray-500 hover:text-gray-700" href="#">
            <Instagram className="h-4 w-4" />
          </Link>
        </div>
      </footer>
    </div>
  )
}

