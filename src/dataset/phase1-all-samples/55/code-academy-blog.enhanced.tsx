import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, BookOpen, Lightbulb, Search, Facebook, Twitter, Linkedin, Github, Sun, Moon, Menu, X } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import Image from "next/image"

export default function Component() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Code className="h-6 w-6 text-indigo-600 dark:text-indigo-400 animate-pulse" />
              <span className="text-xl font-bold text-gray-800 dark:text-gray-100">CodeAcademy</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button className="md:hidden" variant="ghost" onClick={toggleMenu}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
              <div className="hidden md:flex items-center space-x-2">
                <Sun className="h-5 w-5 text-yellow-500" />
                <Switch checked={darkMode} onCheckedChange={() => setDarkMode(!darkMode)} />
                <Moon className="h-5 w-5 text-gray-500 dark:text-gray-300" />
              </div>
              <Button className="hidden md:inline-block" variant="outline">
                Subscribe
              </Button>
            </div>
          </div>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-50 dark:bg-gray-700`}>
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
              <Link href="/tutorials" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline transition">
                Tutorials
              </Link>
              <Link href="/challenges" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline transition">
                Challenges
              </Link>
              <Link href="/tips" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline transition">
                Tips
              </Link>
              <Link href="/about" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline transition">
                About
              </Link>
            </div>
          </nav>
        </header>
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <section className="animate-fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Featured Article</h2>
                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <Image src="/images/react-hooks.jpg" alt="React Hooks" width={600} height={400} className="rounded-t-md w-full h-auto" />
                    <CardTitle className="mt-4 text-xl md:text-2xl text-gray-800 dark:text-gray-100">Mastering React Hooks: A Comprehensive Guide</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm md:text-base text-muted-foreground mb-4 transition-opacity duration-300 hover:opacity-80">
                      Dive deep into React Hooks and learn how to build more efficient and maintainable components. This
                      guide covers useState, useEffect, useContext, and custom hooks.
                    </p>
                    <Button variant="secondary" className="mt-2 animate-pulse w-full md:w-auto">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </section>
              <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Latest Articles</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    {
                      title: "10 Python Tips for Better Code",
                      description: "Improve your Python skills with these essential tips and tricks.",
                      icon: <BookOpen className="h-6 w-6 text-green-500" />,
                      category: "Tutorial",
                      image: "/images/python-tips.jpg",
                    },
                    {
                      title: "Solving the Two Sum Problem",
                      description: "A step-by-step guide to solving this common coding challenge.",
                      icon: <Lightbulb className="h-6 w-6 text-yellow-500" />,
                      category: "Challenge",
                      image: "/images/two-sum.jpg",
                    },
                    {
                      title: "Introduction to GraphQL",
                      description: "Learn the basics of GraphQL and how it differs from REST APIs.",
                      icon: <BookOpen className="h-6 w-6 text-purple-500" />,
                      category: "Tutorial",
                      image: "/images/graphql.jpg",
                    },
                    {
                      title: "5 VS Code Extensions for Productivity",
                      description: "Boost your coding efficiency with these must-have extensions.",
                      icon: <Lightbulb className="h-6 w-6 text-blue-500" />,
                      category: "Tips",
                      image: "/images/vscode-extensions.jpg",
                    },
                  ].map((article, index) => (
                    <Card key={index} className="hover:scale-105 transform transition-transform duration-300">
                      <CardHeader>
                        <Image src={article.image} alt={article.title} width={400} height={250} className="rounded-t-md w-full h-auto" />
                        <div className="flex items-center space-x-2 mt-4">
                          {article.icon}
                          <Badge variant="secondary" className="capitalize">{article.category}</Badge>
                        </div>
                        <CardTitle className="text-lg mt-2 text-gray-800 dark:text-gray-100">{article.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 dark:text-gray-400 transition-opacity duration-300 hover:opacity-80">{article.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" className="w-full text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-800 transition">
                          Read More
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </section>
              <section className="animate-fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Programming Challenges</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Card className="flex flex-col justify-between h-full hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-800 dark:text-gray-100">Challenge of the Week: Build a Todo App</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Test your React skills by building a fully functional todo application with CRUD operations.</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full hover:bg-indigo-600 hover:text-white transition">
                        Start Challenge
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="flex flex-col justify-between h-full hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-800 dark:text-gray-100">Algorithm: Merge Sort Implementation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Implement the merge sort algorithm in your preferred programming language and optimize its performance.</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full hover:bg-indigo-600 hover:text-white transition">
                        Try Now
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </section>
            </div>
            <aside className="space-y-8">
              <Card className="p-4 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800 dark:text-gray-100">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mt-4">
                    {["JavaScript", "Python", "React", "Algorithms", "Web Development"].map((category, index) => (
                      <li key={index}>
                        <Link href={`/category/${category.toLowerCase().replace(" ", "-")}`} className="flex items-center text-sm text-gray-700 dark:text-gray-300 hover:underline group">
                          <Code className="h-4 w-4 mr-2 text-indigo-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition" />
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="p-4 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800 dark:text-gray-100">Newsletter</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4 mt-4">
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      className="border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 rounded-md transition"
                    />
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition text-white">
                      Subscribe
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <Card className="p-4 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800 dark:text-gray-100">Trending Topics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap mt-4 gap-2">
                    {["Next.js", "Tailwind CSS", "Shadcn/UI", "TypeScript", "GraphQL", "Docker"].map((topic, index) => (
                      <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-indigo-600 hover:text-white transition">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </main>
        <footer className="bg-gray-100 dark:bg-gray-800 mt-8">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <Code className="h-6 w-6 text-indigo-600 dark:text-indigo-400 animate-pulse" />
                <span className="text-xl font-bold text-gray-800 dark:text-gray-100">CodeAcademy</span>
              </div>
              <nav className="flex flex-wrap justify-center space-x-4 mb-4 md:mb-0">
                <Link href="/about" className="text-sm text-gray-700 dark:text-gray-300 hover:underline transition">
                  About
                </Link>
                <Link href="/contact" className="text-sm text-gray-700 dark:text-gray-300 hover:underline transition">
                  Contact
                </Link>
                <Link href="/privacy" className="text-sm text-gray-700 dark:text-gray-300 hover:underline transition">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm text-gray-700 dark:text-gray-300 hover:underline transition">
                  Terms of Service
                </Link>
              </nav>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Linkedin, Github].map((Icon, index) => (
                  <Link key={index} href="#" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                    <Icon className="h-6 w-6" />
                    <span className="sr-only">{Icon.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} CodeAcademy. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

