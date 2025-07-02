"use client";

import Link from "next/link"
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { Facebook, Instagram, Twitter, Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-primary">WanderLust</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link href="#" className="text-gray-600 hover:text-primary">Home</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary">Destinations</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary">About</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary">Contact</Link></li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-6 md:mb-8">
              <img src="/placeholder.svg?height=400&width=800" alt="Featured destination" className="w-full h-[200px] md:h-[400px] object-cover" />
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">Exploring the Hidden Gems of Bali</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm md:text-base">Discover the secret beaches and ancient temples that most tourists never see...</p>
              </CardContent>
              <CardFooter>
                <Button>Read More</Button>
              </CardFooter>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((post) => (
                <Card key={post}>
                  <img src={`/placeholder.svg?height=200&width=400&text=Post+${post}`} alt={`Post ${post}`} className="w-full h-[150px] md:h-[200px] object-cover" />
                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl">Amazing Destination {post}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm md:text-base">Brief description of the amazing experiences awaiting you...</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">Read More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Travel Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm md:text-base">
                  <li>• Pack light and smart</li>
                  <li>• Learn basic phrases in the local language</li>
                  <li>• Try local cuisine</li>
                  <li>• Always have a backup of important documents</li>
                  <li>• Be respectful of local customs</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Subscribe to Our Newsletter</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input type="email" placeholder="Enter your email" />
                  <Button className="w-full">Subscribe</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-primary text-primary-foreground mt-8 md:mt-12">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm md:text-base">&copy; 2023 WanderLust. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-300"><Facebook size={20} /></Link>
              <Link href="#" className="hover:text-gray-300"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-gray-300"><Twitter size={20} /></Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <nav className="flex flex-col space-y-4">
          <Link href="#" className="text-lg" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#" className="text-lg" onClick={() => setIsOpen(false)}>Destinations</Link>
          <Link href="#" className="text-lg" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#" className="text-lg" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

