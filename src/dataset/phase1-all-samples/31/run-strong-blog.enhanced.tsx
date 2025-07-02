'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Instagram, Twitter, Sun, Moon, Menu, X } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Component() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (darkMode) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''} bg-background transition-colors duration-500`}>
      <header className="sticky top-0 z-50 bg-background border-b shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-extrabold text-primary transition-transform transform hover:scale-105">RunStrong</h1>
          <div className="flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-md bg-muted hover:bg-accent transition-colors">
              {darkMode ? <Sun className="h-5 w-5 text-primary" /> : <Moon className="h-5 w-5 text-primary" />}
              <span className="sr-only">Toggle Dark Mode</span>
            </button>
            <button onClick={toggleMenu} className="md:hidden p-2 rounded-md bg-muted hover:bg-accent transition-colors">
              {isMenuOpen ? <X className="h-5 w-5 text-primary" /> : <Menu className="h-5 w-5 text-primary" />}
              <span className="sr-only">Toggle Menu</span>
            </button>
          </div>
        </div>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block bg-background md:bg-transparent`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
            <li><Link href="#" className="block py-2 text-sm font-medium hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="#" className="block py-2 text-sm font-medium hover:text-primary transition-colors">Running Tips</Link></li>
            <li><Link href="#" className="block py-2 text-sm font-medium hover:text-primary transition-colors">Gear Reviews</Link></li>
            <li><Link href="#" className="block py-2 text-sm font-medium hover:text-primary transition-colors">Marathon Prep</Link></li>
            <li><Link href="#" className="block py-2 text-sm font-medium hover:text-primary transition-colors">About</Link></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Post</h2>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl">10 Essential Tips for Your First Marathon</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      src="/marathon.jpg"
                      alt="Marathon runners"
                      className="w-full h-48 md:h-64 object-cover mb-4 rounded-md transform hover:scale-105 transition-transform duration-300"
                    />
                    <p className="text-sm md:text-base text-muted-foreground">
                      Preparing for your first marathon? Don't miss these crucial tips to ensure you're ready for the big day. From training schedules to nutrition advice, we've got you covered.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="default" className="mt-4 w-full hover:bg-primary hover:text-white transition-colors">Read More</Button>
                  </CardFooter>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Recent Articles</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "The Best Running Shoes of 2023",
                      excerpt: "Our comprehensive review of this year's top running shoes for every type of runner.",
                      image: "/shoes.jpg"
                    },
                    {
                      title: "5 Post-Run Stretches for Better Recovery",
                      excerpt: "Improve your recovery time and prevent injuries with these essential stretches.",
                      image: "/stretches.jpg"
                    },
                    {
                      title: "Nutrition Guide: What to Eat Before a Long Run",
                      excerpt: "Fuel your body properly for those long training runs with our expert nutrition advice.",
                      image: "/nutrition.jpg"
                    },
                    {
                      title: "Top 10 Marathon Routes Around the World",
                      excerpt: "Discover the most scenic and challenging marathon routes that every runner should experience.",
                      image: "/routes.jpg"
                    }
                  ].map((post, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg md:text-xl">{post.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-40 md:h-48 object-cover mb-4 rounded-md transform hover:scale-105 transition-transform duration-300"
                        />
                        <p className="text-sm md:text-base text-muted-foreground">{post.excerpt}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="mt-2 w-full hover:bg-primary hover:text-white transition-colors">Read More</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            <div className="lg:col-span-1">
              <aside className="space-y-6 lg:sticky lg:top-24">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl">Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li><Link href="#" className="text-sm hover:text-primary transition-colors">Running Tips</Link></li>
                      <li><Link href="#" className="text-sm hover:text-primary transition-colors">Gear Reviews</Link></li>
                      <li><Link href="#" className="text-sm hover:text-primary transition-colors">Marathon Preparation</Link></li>
                      <li><Link href="#" className="text-sm hover:text-primary transition-colors">Nutrition</Link></li>
                      <li><Link href="#" className="text-sm hover:text-primary transition-colors">Injury Prevention</Link></li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl">Newsletter</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Stay up to date with the latest running tips and gear reviews!
                    </p>
                    <form className="space-y-4">
                      <Input type="email" placeholder="Enter your email" className="focus:border-primary" />
                      <Button className="w-full hover:bg-primary hover:text-white transition-colors">Subscribe</Button>
                    </form>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl">Popular Tags</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["Marathon", "Running Shoes", "Nutrition", "Training Plans", "Recovery", "Gear"].map((tag, idx) => (
                        <Link key={idx} href="#" className="px-3 py-1 bg-muted rounded-full text-sm hover:bg-primary hover:text-white transition-colors">
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </aside>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">© 2023 RunStrong. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
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

