import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Instagram, Facebook, Twitter, Search, Menu, X } from 'lucide-react'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
      <header className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary">DailyDressed</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4 lg:space-x-6">
              <li><Link href="#" className="text-sm lg:text-base text-gray-700 hover:text-primary transition-colors duration-300">Home</Link></li>
              <li><Link href="#" className="text-sm lg:text-base text-gray-700 hover:text-primary transition-colors duration-300">Fashion Tips</Link></li>
              <li><Link href="#" className="text-sm lg:text-base text-gray-700 hover:text-primary transition-colors duration-300">Styling Advice</Link></li>
              <li><Link href="#" className="text-sm lg:text-base text-gray-700 hover:text-primary transition-colors duration-300">Collaborations</Link></li>
              <li><Link href="#" className="text-sm lg:text-base text-gray-700 hover:text-primary transition-colors duration-300">About</Link></li>
            </ul>
          </nav>
          <div className="hidden md:block relative">
            <Input placeholder="Search..." className="pl-10 w-40 lg:w-60" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden border-t">
            <ul className="py-2">
              <li><Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</Link></li>
              <li><Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Fashion Tips</Link></li>
              <li><Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Styling Advice</Link></li>
              <li><Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Collaborations</Link></li>
              <li><Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About</Link></li>
            </ul>
            <div className="px-4 py-2">
              <Input placeholder="Search..." className="pl-10 w-full" />
              <Search className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </nav>
        )}
      </header>

      <main className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <Card className="mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="/placeholder.svg?height=400&width=800" alt="Featured post" className="w-full h-48 sm:h-64 object-cover rounded-t-lg" />
              <CardHeader className="p-4">
                <CardTitle className="text-xl sm:text-2xl">10 Must-Have Summer Accessories</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm sm:text-base text-gray-600">Elevate your summer wardrobe with these essential accessories that will keep you stylish and comfortable all season long.</p>
              </CardContent>
              <CardFooter className="p-4">
                <Button className="w-full sm:w-auto bg-primary hover:bg-primary-dark transition-colors duration-300">Read More</Button>
              </CardFooter>
            </Card>

            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Recent Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="hover:translate-y-2 transition-transform duration-300">
                  <img src={`/placeholder.svg?height=200&width=400&text=Post ${i}`} alt={`Post ${i}`} className="w-full h-40 sm:h-48 object-cover rounded-t-lg" />
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg sm:text-xl">Fashion Trend {i}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <p className="text-sm text-gray-600">Discover the latest fashion trends and how to incorporate them into your daily style.</p>
                  </CardContent>
                  <CardFooter className="p-4">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300">Read More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="mb-6 shadow-md">
              <CardHeader className="p-4 border-b">
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <ul className="space-y-2">
                  <li><Link href="#" className="text-primary hover:underline">Street Style</Link></li>
                  <li><Link href="#" className="text-primary hover:underline">Accessories</Link></li>
                  <li><Link href="#" className="text-primary hover:underline">Seasonal Trends</Link></li>
                  <li><Link href="#" className="text-primary hover:underline">Outfit Ideas</Link></li>
                  <li><Link href="#" className="text-primary hover:underline">Beauty Tips</Link></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader className="p-4 border-b">
                <CardTitle>Featured Collaboration</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <img src="/placeholder.svg?height=200&width=400&text=Brand Collab" alt="Brand Collaboration" className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4" />
                <p className="text-sm text-gray-600">Explore our latest collaboration with a top fashion brand and get exclusive styling tips!</p>
              </CardContent>
              <CardFooter className="p-4">
                <Button className="w-full bg-primary hover:bg-primary-dark transition-colors duration-300">Learn More</Button>
              </CardFooter>
            </Card>

            <Card className="mt-6 shadow-md p-4">
              <CardTitle className="text-xl mb-4">Subscribe to Our Newsletter</CardTitle>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <Input placeholder="Your email" className="flex-1" />
                <Button className="bg-primary hover:bg-primary-dark transition-colors duration-300">Subscribe</Button>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-6 lg:mb-0 text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl font-bold">DailyDressed</h2>
              <p className="text-xs sm:text-sm">Your daily dose of fashion inspiration</p>
            </div>
            <div className="flex space-x-4 mb-6 lg:mb-0">
              <Link href="#" className="hover:text-primary transition-colors duration-300"><Instagram className="h-5 w-5 sm:h-6 sm:w-6" /></Link>
              <Link href="#" className="hover:text-primary transition-colors duration-300"><Facebook className="h-5 w-5 sm:h-6 sm:w-6" /></Link>
              <Link href="#" className="hover:text-primary transition-colors duration-300"><Twitter className="h-5 w-5 sm:h-6 sm:w-6" /></Link>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
              <Link href="#" className="hover:underline text-sm">Privacy Policy</Link>
              <Link href="#" className="hover:underline text-sm">Terms of Service</Link>
              <Link href="#" className="hover:underline text-sm">Contact</Link>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-xs sm:text-sm">&copy; 2023 DailyDressed. All rights reserved.</p>
            <Button variant="ghost" className="mt-4" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Back to Top
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

