import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Instagram, Facebook, Twitter, Menu, X } from 'lucide-react'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary">DailyDressed</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link href="#" className="text-gray-600 hover:text-primary">Home</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary">Fashion Tips</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary">Styling Advice</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary">Collaborations</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary">About</Link></li>
            </ul>
          </nav>
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
              <li><Link href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Home</Link></li>
              <li><Link href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Fashion Tips</Link></li>
              <li><Link href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Styling Advice</Link></li>
              <li><Link href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Collaborations</Link></li>
              <li><Link href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">About</Link></li>
            </ul>
          </nav>
        )}
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="mb-8">
              <img src="/placeholder.svg?height=400&width=800" alt="Featured post" className="w-full h-48 sm:h-64 object-cover" />
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">10 Must-Have Summer Accessories</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600">Elevate your summer wardrobe with these essential accessories that will keep you stylish and comfortable all season long.</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full sm:w-auto">Read More</Button>
              </CardFooter>
            </Card>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">Recent Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i}>
                  <img src={`/placeholder.svg?height=200&width=400&text=Post ${i}`} alt={`Post ${i}`} className="w-full h-40 sm:h-48 object-cover" />
                  <CardHeader>
                    <CardTitle className="text-base sm:text-lg">Fashion Trend {i}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs sm:text-sm text-gray-600">Discover the latest fashion trends and how to incorporate them into your daily style.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full sm:w-auto">Read More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <div className="md:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm sm:text-base">
                  <li><Link href="#" className="text-primary hover:underline">Street Style</Link></li>
                  <li><Link href="#" className="text-primary hover:underline">Accessories</Link></li>
                  <li><Link href="#" className="text-primary hover:underline">Seasonal Trends</Link></li>
                  <li><Link href="#" className="text-primary hover:underline">Outfit Ideas</Link></li>
                  <li><Link href="#" className="text-primary hover:underline">Beauty Tips</Link></li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Featured Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <img src="/placeholder.svg?height=200&width=400&text=Brand Collab" alt="Brand Collaboration" className="w-full h-40 sm:h-48 object-cover mb-4" />
                <p className="text-xs sm:text-sm text-gray-600">Explore our latest collaboration with a top fashion brand and get exclusive styling tips!</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full sm:w-auto">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h2 className="text-xl sm:text-2xl font-bold">DailyDressed</h2>
              <p className="text-xs sm:text-sm">Your daily dose of fashion inspiration</p>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary"><Instagram className="h-5 w-5 sm:h-6 sm:w-6" /></Link>
              <Link href="#" className="hover:text-primary"><Facebook className="h-5 w-5 sm:h-6 sm:w-6" /></Link>
              <Link href="#" className="hover:text-primary"><Twitter className="h-5 w-5 sm:h-6 sm:w-6" /></Link>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-xs sm:text-sm">&copy; 2023 DailyDressed. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

