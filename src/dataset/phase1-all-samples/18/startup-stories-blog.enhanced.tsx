import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Briefcase, Newspaper, Rss, Menu, X, Twitter, Linkedin, Facebook } from 'lucide-react'

export default function StartupStoriesBlog() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-primary">
            StartupStories
          </Link>
          <nav className="hidden md:flex space-x-4 lg:space-x-6">
            <Link href="/advice" className="text-sm lg:text-base text-gray-600 hover:text-primary transition-colors duration-300">
              Advice
            </Link>
            <Link href="/case-studies" className="text-sm lg:text-base text-gray-600 hover:text-primary transition-colors duration-300">
              Case Studies
            </Link>
            <Link href="/news" className="text-sm lg:text-base text-gray-600 hover:text-primary transition-colors duration-300">
              News
            </Link>
            <Link href="/about" className="text-sm lg:text-base text-gray-600 hover:text-primary transition-colors duration-300">
              About
            </Link>
          </nav>
          <Button variant="outline" className="hidden md:block text-sm lg:text-base hover:bg-primary hover:text-white transition-colors duration-300">
            Subscribe
          </Button>
          <button
            className="md:hidden text-gray-600 hover:text-primary focus:outline-none transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <nav className="flex flex-col space-y-4 px-4 py-4">
              <Link href="/advice" className="text-gray-600 hover:text-primary transition-colors duration-300">
                Advice
              </Link>
              <Link href="/case-studies" className="text-gray-600 hover:text-primary transition-colors duration-300">
                Case Studies
              </Link>
              <Link href="/news" className="text-gray-600 hover:text-primary transition-colors duration-300">
                News
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-primary transition-colors duration-300">
                About
              </Link>
              <Button variant="outline" className="mt-4 hover:bg-primary hover:text-white transition-colors duration-300">
                Subscribe
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow mt-16 sm:mt-20">
        <section className="bg-gray-50 py-12 sm:py-20 relative">
          <div className="absolute inset-0">
            <Image
              src="/hero-background.jpg"
              alt="Startup Background"
              layout="fill"
              objectFit="cover"
              quality={75}
              className="opacity-10"
            />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6 animate-fade-in-up">
              Welcome to StartupStories
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-10 animate-fade-in-up delay-200 max-w-2xl mx-auto">
              Insights, inspiration, and practical advice for startup founders and entrepreneurs.
            </p>
            <Button size="lg" className="animate-bounce hover:bg-primary hover:text-white transition-colors duration-300">
              Start Reading
            </Button>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Featured Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <Image
                      src={`/post-${i}.jpg`}
                      alt={`Post ${i}`}
                      width={400}
                      height={200}
                      className="rounded-t-md object-cover w-full"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-lg sm:text-xl mb-2">How to Secure Your First Round of Funding</CardTitle>
                    <p className="text-sm sm:text-base text-gray-600">
                      Learn the strategies and tactics that successful startups use to attract investors and secure their
                      initial funding.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/post/${i}`}>
                      <Button variant="link" className="text-primary hover:underline transition-colors duration-300 p-0">
                        Read More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Explore Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
              {[
                { title: "Startup Advice", icon: BookOpen },
                { title: "Case Studies", icon: Briefcase },
                { title: "Industry News", icon: Newspaper },
                { title: "Founder Stories", icon: Rss },
              ].map((category, i) => (
                <Card key={i} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="flex justify-center">
                    <category.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary transition-transform duration-300 transform hover:scale-110" />
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">{category.title}</h3>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Button variant="outline" className="w-full sm:w-auto hover:bg-primary hover:text-white transition-colors duration-300">
                      Explore
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Stay Updated</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 text-center">
              Subscribe to our newsletter for the latest startup insights and news.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input type="email" placeholder="Enter your email" className="flex-grow" required />
              <Button type="submit" className="w-full sm:w-auto hover:bg-primary hover:text-white transition-colors duration-300">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About StartupStories</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Empowering entrepreneurs with insights, advice, and inspiration to build successful startups.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 border-t border-gray-700 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} StartupStories. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

