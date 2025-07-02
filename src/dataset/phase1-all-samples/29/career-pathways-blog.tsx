'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Briefcase, GraduationCap, Search, TrendingUp, Menu } from 'lucide-react'
import Link from "next/link"

export default function CareerPathwaysBlog() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "#", label: "Home" },
    { href: "#", label: "Job Search" },
    { href: "#", label: "Career Growth" },
    { href: "#", label: "Professional Development" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <GraduationCap className="h-6 w-6" />
          <span className="ml-2 text-xl sm:text-2xl font-bold">CareerPathways</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          {navItems.map((item, index) => (
            <Link key={index} className="text-sm font-medium hover:underline underline-offset-4" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden ml-auto">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-sm font-medium hover:underline underline-offset-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Navigate Your Career Journey
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover expert advice on job searching, career growth, and professional development.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Search articles" type="search" />
                  <Button type="submit">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 sm:mb-12">Featured Posts</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>10 Tips for a Standout Resume</CardTitle>
                  <CardDescription>Learn how to make your resume shine</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Discover the key elements that make a resume stand out to potential employers...</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full sm:w-auto">Read More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Mastering the Art of Networking</CardTitle>
                  <CardDescription>Build meaningful professional connections</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Explore strategies for effective networking in today's digital and in-person environments...</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full sm:w-auto">Read More</Button>
                </CardFooter>
              </Card>
              <Card className="sm:col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle>The Future of Work: Skills for 2024 and Beyond</CardTitle>
                  <CardDescription>Stay ahead in your career</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Discover the most in-demand skills for the future job market and how to acquire them...</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full sm:w-auto">Read More</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 sm:mb-12">Recent Posts</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:gap-16">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Navigating Career Transitions</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Tips and strategies for successfully changing careers at any stage of your professional life.
                </p>
                <Link className="inline-flex items-center text-blue-600 hover:underline dark:text-blue-500" href="#">
                  Read More
                  <TrendingUp className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">The Power of Soft Skills in the Workplace</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Explore how communication, adaptability, and emotional intelligence can boost your career.
                </p>
                <Link className="inline-flex items-center text-blue-600 hover:underline dark:text-blue-500" href="#">
                  Read More
                  <TrendingUp className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Acing Your Next Job Interview</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Comprehensive guide to preparing for and excelling in job interviews, from research to follow-up.
                </p>
                <Link className="inline-flex items-center text-blue-600 hover:underline dark:text-blue-500" href="#">
                  Read More
                  <TrendingUp className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Building a Personal Brand for Career Success</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Learn how to create and maintain a strong personal brand to stand out in your industry.
                </p>
                <Link className="inline-flex items-center text-blue-600 hover:underline dark:text-blue-500" href="#">
                  Read More
                  <TrendingUp className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl">Stay Updated</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Subscribe to our newsletter for the latest career tips, industry insights, and job opportunities.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row gap-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="w-full sm:w-auto">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 CareerPathways. All rights reserved.</p>
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

