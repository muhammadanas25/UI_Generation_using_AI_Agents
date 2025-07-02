import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Leaf, Mail, Menu, Sun, Moon, Search } from 'lucide-react'
import { useState } from "react"

export default function MindSpaceBlog() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const featuredArticle = {
    title: "5 Simple Mindfulness Practices for Daily Life",
    excerpt: "Discover easy-to-implement mindfulness techniques that can transform your everyday routine and boost your mental well-being.",
    image: "/placeholder.svg?height=400&width=800",
    author: "Emma Johnson",
    date: "May 15, 2023",
  }

  const recentPosts = [
    {
      title: "The Power of Positive Self-Talk",
      excerpt: "Learn how to harness the power of positive self-talk to improve your mental health and achieve personal growth.",
      image: "/placeholder.svg?height=200&width=300",
      author: "Michael Chen",
      date: "May 10, 2023",
    },
    {
      title: "Building Resilience: Strategies for Tough Times",
      excerpt: "Explore practical strategies to build emotional resilience and navigate life's challenges with confidence.",
      image: "/placeholder.svg?height=200&width=300",
      author: "Sarah Thompson",
      date: "May 5, 2023",
    },
    {
      title: "The Art of Meditation: A Beginner's Guide",
      excerpt: "Discover the basics of meditation and how it can help reduce stress, improve focus, and promote overall well-being.",
      image: "/placeholder.svg?height=200&width=300",
      author: "David Rodriguez",
      date: "April 30, 2023",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow fixed w-full z-10">
        <div className="container mx-auto px-4 py-2 md:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 md:h-8 md:w-8 text-green-500 dark:text-green-400" />
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">MindSpace</h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">Home</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">Articles</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">About</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">Contact</a></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-2 md:space-x-4">
            <Button variant="ghost" className="hidden md:flex" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" onClick={() => setDarkMode(!darkMode)} size="icon">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" className="md:hidden" onClick={() => setMobileMenuOpen(true)} size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white dark:bg-gray-800 py-2">
            <ul className="flex flex-col items-center space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">Home</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">Articles</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">About</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">Contact</a></li>
            </ul>
          </nav>
        )}
      </header>

      <main className="container mx-auto px-4 py-16 md:py-24">
        <section className="mb-8 md:mb-12 animate-fade-in">
          <Card className="transform hover:scale-105 transition-transform duration-300 shadow-lg">
            <CardContent className="p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <img
                    src={featuredArticle.image}
                    alt="Featured Article"
                    className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md hover:opacity-90 transition-opacity duration-300"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800 dark:text-white">{featuredArticle.title}</h2>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-2 md:mb-4">{featuredArticle.excerpt}</p>
                  <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-2 md:mb-4">
                    By {featuredArticle.author} | {featuredArticle.date}
                  </div>
                  <Button className="mt-2 self-start hover:bg-green-600 transition-colors">
                    Read More
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800 dark:text-white">Recent Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {recentPosts.map((post, index) => (
              <Card key={index} className="transform hover:translate-y-2 transition-transform duration-300 shadow-md">
                <CardHeader className="p-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover rounded-t-lg hover:opacity-90 transition-opacity duration-300"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg md:text-xl text-gray-800 dark:text-white">{post.title}</CardTitle>
                  <CardDescription className="mt-2 text-sm text-gray-600 dark:text-gray-300">{post.excerpt}</CardDescription>
                  <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-4">
                    By {post.author} | {post.date}
                  </div>
                  <Button className="mt-2 md:mt-4 w-full md:w-auto hover:bg-green-600 transition-colors">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <Card className="p-4 md:p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl text-gray-800 dark:text-white">Subscribe to Our Newsletter</CardTitle>
              <CardDescription className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                Get the latest mental health tips and mindfulness practices delivered to your inbox.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-2 md:mt-4">
              <form className="flex flex-col sm:flex-row sm:space-x-2">
                <Input type="email" placeholder="Enter your email" className="flex-grow mb-2 sm:mb-0" />
                <Button type="submit" className="w-full sm:w-auto flex items-center justify-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h2 className="text-lg md:text-xl font-bold">MindSpace</h2>
              <p className="text-xs md:text-sm">Nurturing Your Mental Well-being</p>
            </div>
            <nav className="mb-4 md:mb-0">
              <ul className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm">
                <li><a href="#" className="hover:text-gray-300 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-300 transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gray-300 transition">Contact Us</a></li>
              </ul>
            </nav>
          </div>
          <div className="mt-4 md:mt-8 text-center text-xs md:text-sm">
            © 2023 MindSpace. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

