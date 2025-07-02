"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Sun, Moon, Menu } from 'lucide-react'
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Component() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <header className="bg-white dark:bg-gray-800 shadow">
          <div className="container mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-primary dark:text-primary-400">WanderLust</h1>
            <nav className="hidden md:block">
              <ul className="flex space-x-4 text-gray-600 dark:text-gray-300">
                <li><Link href="#" className="hover:text-primary dark:hover:text-primary-400 transition-colors">Home</Link></li>
                <li><Link href="#" className="hover:text-primary dark:hover:text-primary-400 transition-colors">Destinations</Link></li>
                <li><Link href="#" className="hover:text-primary dark:hover:text-primary-400 transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-primary dark:hover:text-primary-400 transition-colors">Contact</Link></li>
              </ul>
            </nav>
            <div className="flex items-center space-x-4">
              <button onClick={() => setDarkMode(!darkMode)} className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400 transition-colors">
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="flex flex-col space-y-4">
                    <Link href="#" className="text-lg hover:text-primary dark:hover:text-primary-400 transition-colors">Home</Link>
                    <Link href="#" className="text-lg hover:text-primary dark:hover:text-primary-400 transition-colors">Destinations</Link>
                    <Link href="#" className="text-lg hover:text-primary dark:hover:text-primary-400 transition-colors">About</Link>
                    <Link href="#" className="text-lg hover:text-primary dark:hover:text-primary-400 transition-colors">Contact</Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <section className="mb-12">
            <div className="relative rounded-lg overflow-hidden">
              <img src="/hero-placeholder.svg?height=600&width=1200" alt="Travel Hero" className="w-full h-48 md:h-96 object-cover brightness-50 transition-transform duration-500 hover:scale-105" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center px-4">Explore the World with WanderLust</h2>
                <Button variant="primary" className="animate-bounce">Get Started</Button>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="mb-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src="/bali-placeholder.svg?height=400&width=800" alt="Featured destination" className="w-full h-48 md:h-[400px] object-cover" />
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl">Exploring the Hidden Gems of Bali</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Discover the secret beaches and ancient temples that most tourists never see...</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full hover:bg-primary dark:hover:bg-primary-400 transition-colors">Read More</Button>
                </CardFooter>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((post) => (
                  <Card key={post} className="shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img src={`/post-placeholder-${post}.svg?height=200&width=400&text=Post+${post}`} alt={`Post ${post}`} className="w-full h-40 md:h-[200px] object-cover" />
                    <CardHeader>
                      <CardTitle className="text-lg md:text-xl">Amazing Destination {post}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Brief description of the amazing experiences awaiting you...</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full hover:bg-primary dark:hover:bg-primary-400 transition-colors">Read More</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <Card className="p-4 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl mb-2">Travel Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm md:text-base">
                    <li className="flex items-center">
                      <span className="text-primary mr-2">•</span>Pack light and smart
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">•</span>Learn basic phrases in the local language
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">•</span>Try local cuisine
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">•</span>Always have a backup of important documents
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">•</span>Be respectful of local customs
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-4 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl mb-2">Subscribe to Our Newsletter</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <Input type="email" placeholder="Enter your email" className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary" />
                    <Button className="w-full hover:bg-primary dark:hover:bg-primary-400 transition-colors">Subscribe</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          <section className="mt-12">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">Top Destinations</h2>
            <div className="overflow-x-auto">
              <div className="flex space-x-4 pb-4">
                {[1, 2, 3, 4, 5, 6].map((dest) => (
                  <Card key={dest} className="min-w-[250px] md:min-w-[300px] flex-shrink-0 shadow-md">
                    <img src={`/top-dest-${dest}.svg?height=200&width=300&text=Destination+${dest}`} alt={`Destination ${dest}`} className="w-full h-40 md:h-[200px] object-cover" />
                    <CardHeader>
                      <CardTitle className="text-lg md:text-xl">Destination {dest}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Explore the beauty and culture of Destination {dest}.</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full hover:bg-primary dark:hover:bg-primary-400 transition-colors">View More</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-primary text-primary-foreground dark:bg-gray-800 dark:text-gray-300 mt-12">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="mb-4 md:mb-0 text-sm md:text-base">&copy; 2023 WanderLust. All rights reserved.</p>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-gray-300 transition-colors"><Facebook size={20} /></Link>
                <Link href="#" className="hover:text-gray-300 transition-colors"><Instagram size={20} /></Link>
                <Link href="#" className="hover:text-gray-300 transition-colors"><Twitter size={20} /></Link>
              </div>
            </div>
          </div>
        </footer>

        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-5 right-5 bg-primary text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-primary-600 dark:hover:bg-primary-400 transition-colors text-sm md:text-base">
          ↑
        </button>
      </div>
    </div>
  )
}

