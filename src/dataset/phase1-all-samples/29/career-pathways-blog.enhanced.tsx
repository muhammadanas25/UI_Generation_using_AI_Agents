'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Briefcase, GraduationCap, Search, TrendingUp, Menu, X, Facebook, Twitter, Linkedin } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function CareerPathwaysBlog() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "#", label: "Home" },
    { href: "#", label: "Job Search" },
    { href: "#", label: "Career Growth" },
    { href: "#", label: "Professional Development" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="sticky top-0 z-50 px-4 py-4 bg-white dark:bg-gray-900 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <Link className="flex items-center" href="#">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            <span className="ml-2 text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">CareerPathways</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item, index) => (
              <Link key={index} className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200" href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <Link key={index} className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200" href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-cover bg-center" style={{ backgroundImage: "url('/hero-background.jpg')" }}>
          <div className="bg-black bg-opacity-50 py-12">
            <div className="container mx-auto px-4 md:px-6 text-center text-white">
              <div className="flex flex-col items-center space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  Navigate Your Career Journey
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 text-base sm:text-lg md:text-xl">
                  Discover expert advice on job searching, career growth, and professional development.
                </p>
                <form className="flex flex-col sm:flex-row w-full max-w-md items-center gap-2 mt-4">
                  <Input className="w-full" placeholder="Search articles" type="search" />
                  <Button type="submit" className="w-full sm:w-auto">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-8 sm:mb-12 text-gray-800 dark:text-white">Featured Posts</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "10 Tips for a Standout Resume", description: "Learn how to make your resume shine", image: "/resume-tips.jpg" },
                { title: "Mastering the Art of Networking", description: "Build meaningful professional connections", image: "/networking.jpg" },
                { title: "The Future of Work: Skills for 2024 and Beyond", description: "Stay ahead in your career", image: "/future-work.jpg" },
              ].map((post, index) => (
                <Card key={index} className="flex flex-col hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader className="p-0">
                    <div className="relative w-full pt-[56.25%]">
                      <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" className="rounded-t-lg" />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow p-4">
                    <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                      Discover key insights and practical advice to advance your career...
                    </p>
                  </CardContent>
                  <CardFooter className="p-4">
                    <Button variant="outline" className="w-full">
                      Read More
                      <TrendingUp className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-8 sm:mb-12 text-gray-800 dark:text-white">Recent Posts</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Navigating Career Transitions", image: "/career-transition.jpg" },
                { title: "The Power of Soft Skills in the Workplace", image: "/soft-skills.jpg" },
                { title: "Acing Your Next Job Interview", image: "/job-interview.jpg" },
                { title: "Building a Personal Brand for Career Success", image: "/personal-brand.jpg" },
              ].map((post, index) => (
                <div key={index} className="flex flex-col space-y-4 hover:bg-gray-50 dark:hover:bg-gray-700 p-4 rounded-lg transition-colors duration-200">
                  <div className="relative w-full pt-[56.25%]">
                    <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" className="rounded-md" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{post.title}</h3>
                  <p className="text-gray-500 dark:text-gray-300 flex-grow">
                    Tips and strategies for successfully changing careers at any stage of your professional life.
                  </p>
                  <Link className="inline-flex items-center text-blue-600 hover:underline dark:text-blue-500 transition-colors duration-200" href="#">
                    Read More
                    <TrendingUp className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-gray-800 dark:text-white">Stay Updated</h2>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-300 text-base sm:text-lg">
                  Subscribe to our newsletter for the latest career tips, industry insights, and job opportunities.
                </p>
              </div>
              <div className="w-full max-w-sm">
                <form className="flex flex-col sm:flex-row gap-2">
                  <Input className="flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="w-full sm:w-auto">
                    Subscribe
                  </Button>
                </form>
              </div>
              <div className="flex space-x-4 mt-4">
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-700 transition-colors duration-200">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 CareerPathways. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 hover:underline transition-colors duration-200" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 hover:underline transition-colors duration-200" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

