import Link from "next/link"
import { useState } from "react"
import { ArrowRight, ChevronRight, TrendingUp, Moon, Sun, Facebook, Twitter, LinkedIn, Instagram } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Component() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <header className="sticky top-0 z-50 px-4 lg:px-6 h-16 flex items-center bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
          <Link className="flex items-center justify-center" href="#">
            <TrendingUp className="h-6 w-6 text-indigo-600 dark:text-indigo-400 animate-bounce" />
            <span className="ml-2 text-xl font-bold text-gray-800 dark:text-gray-100">MarketingPulse</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
              Home
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
              Case Studies
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
              Industry Trends
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
              About
            </Link>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="h-4 w-4 text-yellow-400" /> : <Moon className="h-4 w-4 text-gray-800" />}
            </button>
          </nav>
        </header>
        <main className="flex-1">
          <section className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 py-20 md:py-32 lg:py-40">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-6 text-center">
                <Lightbulb className="h-12 w-12 text-white animate-pulse" />
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                  Welcome to MarketingPulse
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-gray-200 md:text-xl">
                  Insights, case studies, and trends shaping the future of marketing.
                </p>
                <div className="space-x-4">
                  <Button variant="default" className="flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="ghost" className="flex items-center text-white border border-white hover:bg-white hover:text-indigo-600 transition">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-gray-800 dark:text-gray-100">
                Featured Case Studies
              </h2>
              <div className="grid gap-8 lg:grid-cols-3">
                <Card className="transform hover:scale-105 hover:shadow-xl transition duration-300">
                  <CardHeader>
                    <img src="/case-study-1.jpg" alt="Social Media Campaign" className="rounded-t-lg h-48 w-full object-cover" />
                    <CardTitle className="mt-4">Social Media Campaign Success</CardTitle>
                    <CardDescription>How we increased engagement by 200%</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      Learn how our tailored social media strategy transformed Brand X's online presence and boosted engagement metrics significantly.
                    </p>
                    <Button variant="link" className="mt-4 flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 transition">
                      Read More
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
                <Card className="transform hover:scale-105 hover:shadow-xl transition duration-300">
                  <CardHeader>
                    <img src="/case-study-2.jpg" alt="E-commerce Optimization" className="rounded-t-lg h-48 w-full object-cover" />
                    <CardTitle className="mt-4">E-commerce Conversion Optimization</CardTitle>
                    <CardDescription>Boosting sales by 150% in 3 months</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      Discover the strategies we implemented to skyrocket Company Y's e-commerce performance, leading to a substantial increase in sales.
                    </p>
                    <Button variant="link" className="mt-4 flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 transition">
                      Read More
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
                <Card className="transform hover:scale-105 hover:shadow-xl transition duration-300">
                  <CardHeader>
                    <img src="/case-study-3.jpg" alt="Brand Repositioning" className="rounded-t-lg h-48 w-full object-cover" />
                    <CardTitle className="mt-4">Brand Repositioning</CardTitle>
                    <CardDescription>From local to global: A success story</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      See how we helped a local brand expand its reach and become a global player through effective repositioning strategies.
                    </p>
                    <Button variant="link" className="mt-4 flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 transition">
                      Read More
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section className="w-full py-16 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-gray-800 dark:text-gray-100">
                Latest Industry Trends
              </h2>
              <div className="grid gap-10 sm:grid-cols-2">
                <article className="group">
                  <img
                    alt="AI in Marketing"
                    className="aspect-video overflow-hidden rounded-lg object-cover transform group-hover:scale-105 transition duration-300"
                    height="225"
                    src="/trends-ai-marketing.jpg"
                    width="400"
                  />
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">The Rise of AI in Marketing: What You Need to Know</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      Explore how artificial intelligence is revolutionizing marketing strategies and customer engagement.
                    </p>
                    <Button variant="link" className="mt-2 flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 transition p-0">
                      Read More
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </article>
                <article className="group">
                  <img
                    alt="Sustainable Marketing"
                    className="aspect-video overflow-hidden rounded-lg object-cover transform group-hover:scale-105 transition duration-300"
                    height="225"
                    src="/trends-sustainable-marketing.jpg"
                    width="400"
                  />
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Sustainable Marketing: Building Brands with Purpose</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      Discover how eco-friendly practices and social responsibility are shaping consumer preferences.
                    </p>
                    <Button variant="link" className="mt-2 flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 transition p-0">
                      Read More
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </article>
              </div>
            </div>
          </section>
          <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-gray-800 dark:text-gray-100">
                Join Our Newsletter
              </h2>
              <div className="flex flex-col items-center space-y-4">
                <p className="text-gray-600 dark:text-gray-300 max-w-xl text-center">
                  Stay updated with the latest trends, insights, and case studies from the marketing world. Subscribe to our newsletter today!
                </p>
                <form className="w-full max-w-md flex flex-col sm:flex-row items-center gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1"
                  />
                  <Button type="submit" className="w-full sm:w-auto">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-6 py-10 w-full bg-gray-200 dark:bg-gray-800">
          <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">© 2024 MarketingPulse. All rights reserved.</p>
            <nav className="flex gap-4 sm:gap-6">
              <Link className="text-sm hover:underline underline-offset-4 text-gray-600 dark:text-gray-400 transition" href="#">
                Terms of Service
              </Link>
              <Link className="text-sm hover:underline underline-offset-4 text-gray-600 dark:text-gray-400 transition" href="#">
                Privacy
              </Link>
            </nav>
          </div>
          <div className="container px-4 md:px-6 flex justify-center space-x-6">
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition">
              <LinkedIn className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}