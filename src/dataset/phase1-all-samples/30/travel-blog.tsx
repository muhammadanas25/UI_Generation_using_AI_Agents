'use client'

import { useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MapPin, Search, Menu, Instagram, Twitter, Facebook } from 'lucide-react'

export default function GlobeTrotter() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#", label: "Destinations" },
    { href: "#", label: "Photography" },
    { href: "#", label: "About" },
    { href: "#", label: "Contact" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <MapPin className="h-6 w-6" />
          <span className="ml-2 text-xl sm:text-2xl font-bold">GlobeTrotter</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          {navItems.map((item) => (
            <Link key={item.label} className="text-sm font-medium hover:underline underline-offset-4" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden ml-auto">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium hover:underline underline-offset-4"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Explore the World with GlobeTrotter
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 text-sm sm:text-base md:text-xl">
                  Discover amazing destinations, travel tips, and breathtaking photography from around the globe.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-white" placeholder="Search destinations" type="text" />
                  <Button type="submit" className="bg-white text-black hover:bg-gray-200">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-8">Explore Destinations</h2>
            <div className="flex justify-center mb-12">
              <div className="relative w-full max-w-3xl aspect-[16/9] bg-gray-200 rounded-lg overflow-hidden">
                <img
                  alt="World Map"
                  className="object-cover w-full h-full"
                  src="/placeholder.svg?height=450&width=800"
                />
                <Button className="absolute top-2 left-2" variant="outline">
                  <Menu className="mr-2 h-4 w-4" />
                  Select Region
                </Button>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {["Paris", "Tokyo", "New York", "Rome", "Sydney", "Barcelona"].map((city) => (
                <Card key={city}>
                  <CardHeader>
                    <CardTitle>{city}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      alt={`${city} cityscape`}
                      className="w-full h-48 object-cover rounded-md"
                      src="/placeholder.svg?height=200&width=300"
                    />
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Explore {city}</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-8">Travel Photography</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <img
                  key={i}
                  alt={`Travel photo ${i}`}
                  className="w-full h-48 md:h-64 object-cover rounded-md"
                  src="/placeholder.svg?height=300&width=400"
                />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button>View Gallery</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 w-full shrink-0 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">© 2024 GlobeTrotter. All rights reserved.</p>
            <nav className="flex gap-4 sm:gap-6">
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                Terms of Service
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                Privacy
              </Link>
            </nav>
            <div className="flex gap-4">
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

