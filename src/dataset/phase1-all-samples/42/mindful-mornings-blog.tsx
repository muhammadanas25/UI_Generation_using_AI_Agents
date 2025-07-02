import { useState } from "react"
import { Menu, X } from 'lucide-react'
import Link from "next/link"
import { Sunrise } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"


export default function MindfulMorningsBlog() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Sunrise className="h-8 w-8 text-blue-500" />
            <span className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">MindfulMornings</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Contact</Button>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white dark:bg-gray-800 py-4">
            <Button variant="ghost" className="w-full justify-start">Home</Button>
            <Button variant="ghost" className="w-full justify-start">About</Button>
            <Button variant="ghost" className="w-full justify-start">Contact</Button>
          </nav>
        )}
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold">Start Your Day with Mindfulness</CardTitle>
              <CardDescription>Discover peace and clarity in your morning routine</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base sm:text-lg">
                Join us on a journey to transform your mornings and set a positive tone for the day ahead.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white">Get Started</Button>
            </CardFooter>
          </Card>
        </section>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Card 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Content for Card 1</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Card 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Content for Card 2</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Card 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Content for Card 3</p>
            </CardContent>
          </Card>
        </section>

        <section className="mt-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <Card>
            <CardContent className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Input type="email" placeholder="Enter your email" className="w-full sm:flex-grow" />
              <Button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white">Subscribe</Button>
            </CardContent>
          </Card>
        </section>
      </main>
      <footer className="bg-gray-100 dark:bg-gray-800 mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-sm sm:text-base text-gray-600 dark:text-gray-300">
          © 2024 MindfulMornings. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

