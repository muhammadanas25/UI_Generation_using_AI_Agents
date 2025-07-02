'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Laptop, Smartphone, Tablet, Headphones, Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "#", label: "Home" },
    { href: "#", label: "Categories" },
    { href: "#", label: "About" },
    { href: "#", label: "Contact" },
  ]

  const recentComparisons = [
    { title: "MacBook Air M2 vs Dell XPS 13", icon: Laptop },
    { title: "iPad Pro vs Samsung Galaxy Tab S8", icon: Tablet },
    { title: "AirPods Pro 2 vs Sony WF-1000XM4", icon: Headphones },
    { title: "Google Pixel 7 vs OnePlus 11", icon: Smartphone },
    { title: "Microsoft Surface Laptop 5 vs HP Spectre x360", icon: Laptop },
    { title: "Bose QuietComfort 45 vs Sony WH-1000XM5", icon: Headphones },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 sm:py-6 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-primary">TechVersus</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-gray-600 hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
              <nav>
                <ul className="flex flex-col space-y-4">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-gray-600 hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Featured Comparison</h2>
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">iPhone 14 Pro vs Samsung Galaxy S23 Ultra</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold">iPhone 14 Pro</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>A16 Bionic chip</li>
                  <li>48MP main camera</li>
                  <li>6.1" Super Retina XDR display</li>
                  <li>Dynamic Island</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Samsung Galaxy S23 Ultra</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Snapdragon 8 Gen 2 chip</li>
                  <li>200MP main camera</li>
                  <li>6.8" Dynamic AMOLED 2X display</li>
                  <li>S Pen included</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full sm:w-auto">Read Full Comparison</Button>
            </CardFooter>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Recent Comparisons</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentComparisons.map((comparison, index) => (
              <Card key={index} className="bg-white">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <comparison.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  <CardTitle className="text-base sm:text-lg">{comparison.title}</CardTitle>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full">Read Comparison</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6 sm:py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} TechVersus. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

