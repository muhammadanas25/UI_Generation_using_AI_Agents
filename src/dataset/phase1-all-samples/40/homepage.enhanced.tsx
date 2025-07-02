import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BookOpen, Code, Users, Menu, X } from 'lucide-react'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <a className="flex items-center justify-center" href="#">
          <Code className="h-6 w-6" />
          <span className="ml-2 text-xl sm:text-2xl font-bold">CodeCrux</span>
        </a>
        <nav className="hidden md:flex ml-auto gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Tutorials
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Best Practices
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Interviews
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </a>
        </nav>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden ml-auto p-2"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 py-4 px-4">
          <nav className="flex flex-col gap-4">
            <a className="block text-sm font-medium hover:underline underline-offset-4" href="#">
              Tutorials
            </a>
            <a className="block text-sm font-medium hover:underline underline-offset-4" href="#">
              Best Practices
            </a>
            <a className="block text-sm font-medium hover:underline underline-offset-4" href="#">
              Interviews
            </a>
            <a className="block text-sm font-medium hover:underline underline-offset-4" href="#">
              About
            </a>
          </nav>
        </div>
      )}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-100 dark:bg-gray-800 py-4">
          <div className="container px-4">
            <ul className="space-y-2">
              <li>
                <a className="block text-sm font-medium hover:underline underline-offset-4" href="#">
                  Tutorials
                </a>
              </li>
              <li>
                <a className="block text-sm font-medium hover:underline underline-offset-4" href="#">
                  Best Practices
                </a>
              </li>
              <li>
                <a className="block text-sm font-medium hover:underline underline-offset-4" href="#">
                  Interviews
                </a>
              </li>
              <li>
                <a className="block text-sm font-medium hover:underline underline-offset-4" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center px-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to CodeCrux
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Your hub for coding tutorials, programming best practices, and insightful developer interviews.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto">Get Started</Button>
                <Button variant="outline" className="w-full sm:w-auto">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl mb-8">Featured Article</h2>
            <Card className="w-full max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Mastering React Hooks: A Comprehensive Guide</CardTitle>
                <CardDescription>Learn how to leverage the power of React Hooks in your projects</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  React Hooks have revolutionized the way we write React components. In this in-depth tutorial, we'll
                  explore the most commonly used hooks, their use cases, and best practices for implementing them in
                  your projects...
                </p>
                <Button className="w-full sm:w-auto">Read More</Button>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl mb-8">Recent Articles</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4">
              {[
                {
                  title: "10 TypeScript Tips for Better Code",
                  description: "Improve your TypeScript skills with these pro tips",
                  icon: BookOpen,
                },
                {
                  title: "Building Scalable Node.js Applications",
                  description: "Learn best practices for creating large-scale Node.js apps",
                  icon: Code,
                },
                {
                  title: "Getting Started with GraphQL",
                  description: "A beginner's guide to implementing GraphQL in your API",
                  icon: BookOpen,
                },
              ].map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg sm:text-xl">
                      <item.icon className="w-4 h-4 mr-2" />
                      {item.title}
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full sm:w-auto">Read Article</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl mb-8">Developer Interviews</h2>
            <div className="grid gap-8 sm:grid-cols-2 px-4">
              {[
                {
                  name: "Jane Doe",
                  role: "Senior Frontend Developer at TechGiant",
                  quote: "The key to success in frontend development is staying curious and always learning.",
                },
                {
                  name: "John Smith",
                  role: "CTO at StartupX",
                  quote: "Building a great product is all about understanding your users and solving their problems.",
                },
              ].map((interview, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg sm:text-xl">
                      <Users className="w-4 h-4 mr-2" />
                      {interview.name}
                    </CardTitle>
                    <CardDescription>{interview.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="italic mb-4">"{interview.quote}"</p>
                    <Button className="w-full sm:w-auto" variant="outline">
                      Read Interview
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl mb-8">
              Stay Updated with CodeCrux
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-4 px-4">
              <Input
                className="w-full sm:max-w-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
                type="email"
              />
              <Button className="w-full sm:w-auto transition-transform transform hover:scale-105">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 CodeCrux. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}

