import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Leaf, Mail, Menu } from 'lucide-react'
import { useState } from "react"

export default function MindSpaceBlog() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 md:py-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 md:h-8 md:w-8 text-green-500" />
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">MindSpace</h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Articles</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white py-2">
            <ul className="flex flex-col items-center space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Articles</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>
          </nav>
        )}
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8">
        <section className="mb-8 md:mb-12">
          <Card>
            <CardContent className="p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <img
                    src={featuredArticle.image}
                    alt="Featured Article"
                    className="w-full h-48 md:h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="text-xl md:text-2xl font-bold mb-2">{featuredArticle.title}</h2>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">{featuredArticle.excerpt}</p>
                  <div className="text-xs md:text-sm text-gray-500 mb-4">
                    By {featuredArticle.author} | {featuredArticle.date}
                  </div>
                  <Button className="self-start">Read More</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Recent Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {recentPosts.map((post, index) => (
              <Card key={index}>
                <CardHeader className="p-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg md:text-xl">{post.title}</CardTitle>
                  <CardDescription className="mt-2 text-sm">{post.excerpt}</CardDescription>
                  <div className="text-xs md:text-sm text-gray-500 mt-4">
                    By {post.author} | {post.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Subscribe to Our Newsletter</CardTitle>
              <CardDescription className="text-sm md:text-base">Get the latest mental health tips and mindfulness practices delivered to your inbox.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <Input type="email" placeholder="Enter your email" className="flex-grow" />
                <Button type="submit" className="w-full sm:w-auto">
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
                <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
              </ul>
            </nav>
          </div>
          <div className="mt-6 md:mt-8 text-center text-xs md:text-sm">
            © 2023 MindSpace. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

