import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, Lightbulb, Target, Menu, X } from 'lucide-react'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Lightbulb className="h-6 w-6" />
          <span className="ml-2 text-xl md:text-2xl font-bold">ThriveMind</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Articles
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Goal Setting
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Productivity
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
        <Button variant="ghost" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </header>
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-b p-4">
          <Link className="block py-2 text-sm font-medium hover:underline underline-offset-4" href="#">
            Articles
          </Link>
          <Link className="block py-2 text-sm font-medium hover:underline underline-offset-4" href="#">
            Goal Setting
          </Link>
          <Link className="block py-2 text-sm font-medium hover:underline underline-offset-4" href="#">
            Productivity
          </Link>
          <Link className="block py-2 text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
      )}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-500 to-pink-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Unlock Your Potential with ThriveMind
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 text-sm sm:text-base md:text-xl">
                  Discover motivational articles, goal-setting strategies, and productivity hacks to transform your life.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-white text-purple-600 hover:bg-gray-100">Get Started</Button>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Featured Article</h2>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <img
                alt="Featured Article Image"
                className="aspect-video overflow-hidden rounded-lg object-cover object-center w-full md:w-1/2"
                height="300"
                src="/placeholder.svg"
                width="600"
              />
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold">5 Habits of Highly Successful People</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                  Discover the daily routines and mindsets that set successful individuals apart. Learn how to implement
                  these habits in your own life for greater achievement and fulfillment.
                </p>
                <Button>Read More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Recent Posts</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  title: "The Power of Positive Affirmations",
                  description: "Learn how daily affirmations can reshape your mindset and boost your confidence.",
                },
                {
                  title: "10 Steps to Achieving Your Goals",
                  description: "A comprehensive guide to setting, planning, and accomplishing your personal and professional goals.",
                },
                {
                  title: "Mastering the Art of Time Management",
                  description: "Discover effective strategies to maximize your productivity and make the most of your time.",
                },
              ].map((post, index) => (
                <div key={index} className="space-y-4">
                  <img
                    alt="Article Image"
                    className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                    height="200"
                    src="/placeholder.svg"
                    width="300"
                  />
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-bold">{post.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                      {post.description}
                    </p>
                    <Button variant="link">Read More</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-5xl">
                  Subscribe to Our Newsletter
                </h2>
                <p className="max-w-[900px] text-gray-500 text-sm sm:text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Get the latest articles, tips, and resources delivered straight to your inbox.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 ThriveMind. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

