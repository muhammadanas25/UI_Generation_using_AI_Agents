import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Briefcase, Newspaper, Rss, Menu, X } from 'lucide-react'

export default function StartupStoriesBlog() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-primary">
            StartupStories
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/advice" className="text-gray-600 hover:text-primary">
              Advice
            </Link>
            <Link href="/case-studies" className="text-gray-600 hover:text-primary">
              Case Studies
            </Link>
            <Link href="/news" className="text-gray-600 hover:text-primary">
              News
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:inline-flex">Subscribe</Button>
            <Button variant="ghost" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white px-4 py-2 shadow-md">
            <Link href="/advice" className="block py-2 text-gray-600 hover:text-primary">
              Advice
            </Link>
            <Link href="/case-studies" className="block py-2 text-gray-600 hover:text-primary">
              Case Studies
            </Link>
            <Link href="/news" className="block py-2 text-gray-600 hover:text-primary">
              News
            </Link>
            <Link href="/about" className="block py-2 text-gray-600 hover:text-primary">
              About
            </Link>
            <Button variant="outline" className="w-full mt-2">Subscribe</Button>
          </nav>
        )}
      </header>

      <main className="flex-grow">
        <section className="bg-gray-50 py-12 sm:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Welcome to StartupStories</h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Insights, inspiration, and practical advice for startup founders and entrepreneurs.
            </p>
            <Button size="lg" className="w-full sm:w-auto">Start Reading</Button>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Featured Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl">How to Secure Your First Round of Funding</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Learn the strategies and tactics that successful startups use to attract investors and secure their
                      initial funding.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/post/${i}`} className="text-primary hover:underline text-sm sm:text-base">
                      Read More
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Explore Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { title: "Startup Advice", icon: BookOpen },
                { title: "Case Studies", icon: Briefcase },
                { title: "Industry News", icon: Newspaper },
                { title: "Founder Stories", icon: Rss },
              ].map((category, i) => (
                <Card key={i} className="text-center">
                  <CardHeader>
                    <category.icon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-primary" />
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-lg sm:text-xl font-semibold">{category.title}</h3>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Button variant="outline" className="w-full sm:w-auto">Explore</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Stay Updated</h2>
            <p className="text-gray-600 mb-8 text-center text-sm sm:text-base">
              Subscribe to our newsletter for the latest startup insights and news.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input type="email" placeholder="Enter your email" className="flex-grow" />
              <Button type="submit" className="w-full sm:w-auto">Subscribe</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About StartupStories</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Empowering entrepreneurs with insights, advice, and inspiration to build successful startups.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-4 text-sm sm:text-base">
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} StartupStories. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

