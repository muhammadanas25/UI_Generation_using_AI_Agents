'use client'

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Mail, Menu, X } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <span className="font-bold text-xl sm:text-2xl">DecorDelight</span>
        </Link>
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex absolute lg:relative top-14 left-0 right-0 bg-white lg:bg-transparent flex-col lg:flex-row gap-4 p-4 lg:p-0 lg:top-0 shadow-md lg:shadow-none z-50`}>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Shop
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Collections
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/placeholder.svg')] bg-cover bg-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none text-white">
                  Spring Collection 2024
                </h1>
                <p className="mx-auto max-w-[700px] text-white text-sm sm:text-base md:text-lg">
                  Refresh your space with our latest spring-inspired decor pieces.
                </p>
              </div>
              <Button className="bg-white text-black hover:bg-gray-200">Shop Now</Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl text-center mb-8">Our Collections</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {["Living Room", "Bedroom", "Dining Room", "Home Office", "Outdoor", "Accessories"].map((category) => (
                <Card key={category} className="group cursor-pointer">
                  <CardHeader className="p-0">
                    <img
                      alt={`${category} decor`}
                      className="object-cover w-full h-48 sm:h-60 rounded-t-lg"
                      height="240"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "400/240",
                        objectFit: "cover",
                      }}
                      width="400"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg sm:text-xl font-bold">{category}</CardTitle>
                    <CardDescription className="text-xs sm:text-sm text-gray-500 group-hover:text-primary transition-colors">
                      Explore {category.toLowerCase()} decor
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl text-center mb-8">Home Styling Tips</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Mix and Match Textures</CardTitle>
                </CardHeader>
                <CardContent className="text-sm sm:text-base">
                  Combine different textures like smooth, rough, and plush to add depth and interest to your space.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Create a Focal Point</CardTitle>
                </CardHeader>
                <CardContent className="text-sm sm:text-base">
                  Every room needs a focal point. It could be a fireplace, a piece of art, or a statement furniture item.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Layer Your Lighting</CardTitle>
                </CardHeader>
                <CardContent className="text-sm sm:text-base">
                  Use a combination of ambient, task, and accent lighting to create a warm and inviting atmosphere.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl">Stay Inspired</h2>
                <p className="max-w-[600px] text-gray-500 text-sm sm:text-base md:text-lg mx-auto">
                  Sign up for our newsletter to receive the latest home decor trends and exclusive offers.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="w-full sm:w-auto">
                    <Mail className="mr-2 h-4 w-4" />
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 DecorDelight. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

