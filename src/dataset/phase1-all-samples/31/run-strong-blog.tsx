'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Instagram, Twitter, Menu, X } from 'lucide-react'
import Link from "next/link"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold text-primary">RunStrong</h1>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-background md:bg-transparent pb-4 md:pb-0 shadow-md md:shadow-none`}>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 px-4 md:px-0">
              <li><Link href="#" className="text-sm font-medium hover:text-primary block py-2 md:py-0">Home</Link></li>
              <li><Link href="#" className="text-sm font-medium hover:text-primary block py-2 md:py-0">Running Tips</Link></li>
              <li><Link href="#" className="text-sm font-medium hover:text-primary block py-2 md:py-0">Gear Reviews</Link></li>
              <li><Link href="#" className="text-sm font-medium hover:text-primary block py-2 md:py-0">Marathon Prep</Link></li>
              <li><Link href="#" className="text-sm font-medium hover:text-primary block py-2 md:py-0">About</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Post</h2>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl">10 Essential Tips for Your First Marathon</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=300&width=600"
                    alt="Marathon runners"
                    className="w-full h-48 md:h-64 object-cover mb-4 rounded-md"
                  />
                  <p className="text-sm md:text-base text-muted-foreground">
                    Preparing for your first marathon? Don't miss these crucial tips to ensure you're ready for the big day. From training schedules to nutrition advice, we've got you covered.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Read More</Button>
                </CardFooter>
              </Card>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-6">Recent Articles</h2>
              <div className="grid gap-6">
                {[
                  {
                    title: "The Best Running Shoes of 2023",
                    excerpt: "Our comprehensive review of this year's top running shoes for every type of runner.",
                    image: "/placeholder.svg?height=200&width=400"
                  },
                  {
                    title: "5 Post-Run Stretches for Better Recovery",
                    excerpt: "Improve your recovery time and prevent injuries with these essential stretches.",
                    image: "/placeholder.svg?height=200&width=400"
                  },
                  {
                    title: "Nutrition Guide: What to Eat Before a Long Run",
                    excerpt: "Fuel your body properly for those long training runs with our expert nutrition advice.",
                    image: "/placeholder.svg?height=200&width=400"
                  }
                ].map((post, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg md:text-xl">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-40 md:h-48 object-cover mb-4 rounded-md"
                      />
                      <p className="text-sm md:text-base text-muted-foreground">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline">Read More</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <aside className="lg:sticky lg:top-24 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li><Link href="#" className="text-sm hover:text-primary">Running Tips</Link></li>
                    <li><Link href="#" className="text-sm hover:text-primary">Gear Reviews</Link></li>
                    <li><Link href="#" className="text-sm hover:text-primary">Marathon Preparation</Link></li>
                    <li><Link href="#" className="text-sm hover:text-primary">Nutrition</Link></li>
                    <li><Link href="#" className="text-sm hover:text-primary">Injury Prevention</Link></li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">Newsletter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Stay up to date with the latest running tips and gear reviews!
                  </p>
                  <form className="space-y-4">
                    <Input type="email" placeholder="Enter your email" />
                    <Button className="w-full">Subscribe</Button>
                  </form>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </main>

      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">© 2023 RunStrong. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

