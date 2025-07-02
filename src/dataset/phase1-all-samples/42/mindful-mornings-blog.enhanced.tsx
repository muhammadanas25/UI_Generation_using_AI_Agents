import { useState } from "react"
import { Menu, X, Sun, Moon, Github, Instagram, Twitter } from 'lucide-react'
import Link from "next/link"
import { Sunrise, MedalIcon as Meditation } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"


export default function MindfulMorningsBlog() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500`}>
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Sunrise className="h-8 w-8 text-blue-500" />
            <span className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">MindfulMornings</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="hover:text-blue-500 transition-colors duration-300">Home</Button>
            <Button variant="ghost" className="hover:text-blue-500 transition-colors duration-300">About</Button>
            <Button variant="ghost" className="hover:text-blue-500 transition-colors duration-300">Contact</Button>
            <Button variant="ghost" onClick={toggleDarkMode} className="ml-2">
              {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-800" />}
            </Button>
          </nav>
          <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white dark:bg-gray-800 py-4">
            <Button variant="ghost" className="w-full justify-start hover:text-blue-500 transition-colors duration-300">Home</Button>
            <Button variant="ghost" className="w-full justify-start hover:text-blue-500 transition-colors duration-300">About</Button>
            <Button variant="ghost" className="w-full justify-start hover:text-blue-500 transition-colors duration-300">Contact</Button>
            <Button variant="ghost" onClick={toggleDarkMode} className="w-full justify-start">
              {darkMode ? <Sun className="h-5 w-5 text-yellow-500 mr-2" /> : <Moon className="h-5 w-5 text-gray-800 mr-2" />}
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </Button>
          </nav>
        )}
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 animate-fade-in">
          <Card className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 transition-transform transform hover:scale-105">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold">Start Your Day with Mindfulness</CardTitle>
              <CardDescription>Discover peace and clarity in your morning routine</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base sm:text-lg">
                Join us on a journey to transform your mornings and set a positive tone for the day ahead.
              </p>
              <img src="/images/meditation.jpg" alt="Meditation" className="mt-4 rounded-lg shadow-lg w-full" />
            </CardContent>
            <CardFooter>
              <Button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-300">Get Started</Button>
            </CardFooter>
          </Card>
        </section>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <Meditation className="h-8 w-8 mb-2 text-blue-500" />
              <CardTitle className="text-xl sm:text-2xl">5-Minute Morning Meditation</CardTitle>
              <CardDescription>A quick guide to start your day right</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base">Learn a simple meditation technique that can be done in just 5 minutes every morning.</p>
            </CardContent>
            <CardFooter>
              <Link href="/meditation-guide" className="w-full text-center sm:text-left text-blue-500 hover:underline">Read More</Link>
            </CardFooter>
          </Card>
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Card 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Content for Card 2</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-300">Read More</Button>
            </CardFooter>
          </Card>
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Card 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Content for Card 3</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-300">Read More</Button>
            </CardFooter>
          </Card>
        </section>

        <section className="mt-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <Card className="p-6 bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900 dark:to-green-700 transition-colors duration-500">
            <CardContent className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Input type="email" placeholder="Enter your email" className="w-full sm:flex-grow" />
              <Button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white transition-colors duration-300">Subscribe</Button>
            </CardContent>
          </Card>
        </section>

      </main>
      <footer className="bg-gray-100 dark:bg-gray-800 mt-12 py-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left text-gray-600 dark:text-gray-300 mb-4 sm:mb-0">
            © 2024 MindfulMornings. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <Link href="https://github.com" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-colors duration-300">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-blue-400 transition-colors duration-300">
              <Twitter className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

