import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Instagram, Search, Twitter, Menu } from 'lucide-react'
import { useState } from "react"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">ClosetChronicles</h1>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 right-0 bg-white dark:bg-gray-800 md:bg-transparent z-20`}>
              <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0">
                <li><Link href="#" className="block text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary">Home</Link></li>
                <li><Link href="#" className="block text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary">Outfits</Link></li>
                <li><Link href="#" className="block text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary">Trends</Link></li>
                <li><Link href="#" className="block text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary">About</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-3/4">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Outfit of the Day</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Outfit of the Day"
                  className="w-full h-[200px] md:h-[400px] object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl md:text-2xl font-bold mb-2">Summer Breeze Chic</h2>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  Today's outfit combines comfort and style with a flowy maxi dress in pastel hues,
                  paired with strappy sandals and minimalist gold jewelry. Perfect for a day out in the sun!
                </p>
              </CardContent>
              <CardFooter>
                <Link href="#" className="text-primary hover:underline">Read More</Link>
              </CardFooter>
            </Card>

            <h2 className="text-xl md:text-2xl font-bold mb-4">Recent Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((post) => (
                <Card key={post}>
                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl">Trendy Look #{post}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      src={`/placeholder.svg?height=200&width=300`}
                      alt={`Trendy Look ${post}`}
                      className="w-full h-[150px] md:h-[200px] object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                      Check out this amazing outfit inspiration for your next outing!
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="#" className="text-primary hover:underline">Read More</Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <aside className="w-full lg:w-1/4 mt-8 lg:mt-0">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Search</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                  <Input placeholder="Search posts" className="pl-8" />
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-primary hover:underline">Casual Wear</Link></li>
                  <li><Link href="#" className="text-primary hover:underline">Office Attire</Link></li>
                  <li><Link href="#" className="text-primary hover:underline">Evening Glamour</Link></li>
                  <li><Link href="#" className="text-primary hover:underline">Accessories</Link></li>
                  <li><Link href="#" className="text-primary hover:underline">Seasonal Trends</Link></li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>About ClosetChronicles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  Welcome to ClosetChronicles, your daily dose of fashion inspiration!
                  We're here to help you discover your personal style and stay on top of the latest trends.
                </p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-800 shadow mt-8">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">© 2023 ClosetChronicles. All rights reserved.</p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

