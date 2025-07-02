"use client";

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronRight, Menu, TrendingUp, X } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 bg-white dark:bg-gray-800 z-50">
        <Link className="flex items-center justify-center" href="#">
          <TrendingUp className="h-6 w-6" />
          <span className="sr-only">MarketingPulse</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Case Studies
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Industry Trends
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px]">
            <nav className="flex flex-col gap-4">
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#" onClick={() => setIsOpen(false)}>
                Case Studies
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#" onClick={() => setIsOpen(false)}>
                Industry Trends
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#" onClick={() => setIsOpen(false)}>
                About
              </Link>
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
                  Welcome to MarketingPulse
                </h1>
                <p className="mx-auto max-w-[700px] text-base sm:text-lg text-gray-500 md:text-xl dark:text-gray-400">
                  Insights, case studies, and trends shaping the future of marketing.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8">Featured Case Studies</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Social Media Campaign Success</CardTitle>
                  <CardDescription>How we increased engagement by 200%</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">Learn how our tailored social media strategy transformed Brand X's online presence...</p>
                  <Button variant="link" className="mt-4 p-0">
                    Read More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>E-commerce Conversion Optimization</CardTitle>
                  <CardDescription>Boosting sales by 150% in 3 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">Discover the strategies we implemented to skyrocket Company Y's e-commerce performance...</p>
                  <Button variant="link" className="mt-4 p-0">
                    Read More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="sm:col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle>Brand Repositioning</CardTitle>
                  <CardDescription>From local to global: A success story</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">See how we helped a local brand expand its reach and become a global player...</p>
                  <Button variant="link" className="mt-4 p-0">
                    Read More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8">Latest Industry Trends</h2>
            <div className="grid gap-10 sm:grid-cols-2">
              <article className="group space-y-4">
                <img
                  alt="AI in Marketing"
                  className="aspect-video w-full overflow-hidden rounded-lg object-cover"
                  height="225"
                  src="/placeholder.svg?height=225&width=400"
                  width="400"
                />
                <div>
                  <h3 className="text-lg font-bold sm:text-xl">The Rise of AI in Marketing: What You Need to Know</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                    Explore how artificial intelligence is revolutionizing marketing strategies and customer engagement.
                  </p>
                  <Button variant="link" className="mt-2 p-0">
                    Read More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </article>
              <article className="group space-y-4">
                <img
                  alt="Sustainable Marketing"
                  className="aspect-video w-full overflow-hidden rounded-lg object-cover"
                  height="225"
                  src="/placeholder.svg?height=225&width=400"
                  width="400"
                />
                <div>
                  <h3 className="text-lg font-bold sm:text-xl">Sustainable Marketing: Building Brands with Purpose</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                    Discover how eco-friendly practices and social responsibility are shaping consumer preferences.
                  </p>
                  <Button variant="link" className="mt-2 p-0">
                    Read More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 MarketingPulse. All rights reserved.</p>
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

