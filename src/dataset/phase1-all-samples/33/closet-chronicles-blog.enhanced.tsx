import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Instagram, Search, Twitter, Sun, Moon, Menu, X } from 'lucide-react'

export default function Component() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-100"} transition-colors duration-300`}>
      <header className={`bg-white dark:bg-gray-800 shadow transition-colors duration-300`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-primary">ClosetChronicles</h1>
          <div className="flex items-center">
            <Button variant="ghost" onClick={toggleDarkMode} className="mr-2">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle Dark Mode</span>
            </Button>
            <Button variant="ghost" onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </div>
        </div>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block transition-all duration-300 ease-in-out`}>
          <ul className="container mx-auto px-4 py-2 md:py-0 flex flex-col md:flex-row md:space-x-4">
            {['Home', 'Outfits', 'Trends', 'About'].map((item) => (
              <li key={item} className="py-2 md:py-0">
                <Link href="#">
                  <a className="block text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-200">
                    {item}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-3/4">
            <Card className="mb-8 transform hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">Outfit of the Day</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg"
                  alt="Outfit of the Day"
                  width={600}
                  height={400}
                  className="w-full h-[200px] md:h-[400px] object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl md:text-2xl font-bold mb-2">Summer Breeze Chic</h2>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
                  Today's outfit combines comfort and style with a flowy maxi dress in pastel hues,
                  paired with strappy sandals and minimalist gold jewelry. Perfect for a day out in the sun!
                </p>
                <Button variant="primary" className="w-full md:w-auto animate-pulse">
                  Shop the Look
                </Button>
              </CardContent>
              <CardFooter>
                <Link href="#">
                  <a className="text-primary hover:underline transition-colors duration-200">Read More</a>
                </Link>
              </CardFooter>
            </Card>

            <h2 className="text-xl md:text-2xl font-bold mb-4">Recent Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((post) => (
                <Card key={post} className="transform hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl">Trendy Look #{post}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src={`/placeholder.svg`}
                      alt={`Trendy Look ${post}`}
                      width={300}
                      height={200}
                      className="w-full h-[150px] md:h-[200px] object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
                      Check out this amazing outfit inspiration for your next outing!
                    </p>
                    <Button variant="secondary" size="sm" className="w-full md:w-auto">
                      Explore
                    </Button>
                  </CardContent>
                  <CardFooter>
                    <Link href="#">
                      <a className="text-primary hover:underline transition-colors duration-200">Read More</a>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <Button variant="outline" className="flex items-center space-x-2">
                <span>Load More</span>
                <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
            </div>
          </div>

          <aside className="w-full lg:w-1/4 mt-8 lg:mt-0">
            <Card className="mb-6 transform hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Search</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
                  <Input placeholder="Search posts" className="pl-10" />
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6 transform hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {['Casual Wear', 'Office Attire', 'Evening Glamour', 'Accessories', 'Seasonal Trends'].map((category) => (
                    <li key={category}>
                      <Link href="#">
                        <a className="text-primary hover:underline transition-colors duration-200">{category}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6 transform hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Newsletter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
                  Subscribe to our newsletter to get the latest fashion trends and outfit inspirations directly in your inbox.
                </p>
                <div className="flex flex-col space-y-2">
                  <Input placeholder="Your Email" />
                  <Button variant="primary" className="w-full">Subscribe</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">About ClosetChronicles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
                  Welcome to ClosetChronicles, your daily dose of fashion inspiration!
                  We're here to help you discover your personal style and stay on top of the latest trends.
                </p>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>

      <footer className={`bg-white dark:bg-gray-800 shadow mt-8 transition-colors duration-300`}>
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 md:mb-0">© 2023 ClosetChronicles. All rights reserved.</p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

