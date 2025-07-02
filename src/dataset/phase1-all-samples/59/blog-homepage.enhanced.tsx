import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Rocket, TrendingUp, Award, Search, Menu, Sun, Moon } from 'lucide-react'
import { useState } from "react"
import { motion } from 'framer-motion'

export default function BlogHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false); // Assuming darkMode state exists

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl sm:text-2xl font-bold flex items-center space-x-2">
              <Rocket className="h-5 w-5 sm:h-6 sm:w-6" />
              <span>EntrepreneurWay</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" onClick={toggleDarkMode}>
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                <span className="sr-only">Toggle Dark Mode</span>
              </Button>
              <Button variant="outline" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <Menu className="h-4 w-4" />
                <span className="sr-only">Menu</span>
              </Button>
            </div>
          </div>
          {mobileMenuOpen && (
            <nav className="mt-4 flex flex-col space-y-2 md:hidden">
              <Link href="/startups" className="hover:text-secondary transition-colors">Startups</Link>
              <Link href="/strategy" className="hover:text-secondary transition-colors">Strategy</Link>
              <Link href="/success-stories" className="hover:text-secondary transition-colors">Success Stories</Link>
              <Link href="/about" className="hover:text-secondary transition-colors">About</Link>
            </nav>
          )}
          <nav className="hidden md:flex space-x-6 mt-4">
            <Link href="/startups" className="hover:text-secondary transition-colors">Startups</Link>
            <Link href="/strategy" className="hover:text-secondary transition-colors">Strategy</Link>
            <Link href="/success-stories" className="hover:text-secondary transition-colors">Success Stories</Link>
            <Link href="/about" className="hover:text-secondary transition-colors">About</Link>
          </nav>
        </div>
      </header>

      <motion.main
        className="flex-grow container mx-auto px-4 py-6 sm:py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <section className="mb-8 sm:mb-12">
          <div className="relative bg-cover bg-center rounded-lg h-48 sm:h-64 overflow-hidden" style={{ backgroundImage: 'url(/hero-background.jpg)' }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
              <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">Welcome to EntrepreneurWay</h1>
              <p className="text-sm sm:text-lg mb-4 sm:mb-6">Your ultimate resource for startup tips, business strategies, and inspiring success stories.</p>
              <Button size="sm" className="animate-bounce">Get Started</Button>
            </div>
          </div>
        </section>

        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Featured Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">10 Essential Tips for First-Time Entrepreneurs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Navigate the challenges of starting your first business with these crucial insights.</p>
              </CardContent>
              <CardFooter>
                <Link href="/post/first-time-entrepreneur-tips">
                  <Button>Read More</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">The Art of Pivoting: When and How to Change Your Business Model</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Learn the signs that it's time to pivot and strategies for successful transformation.</p>
              </CardContent>
              <CardFooter>
                <Link href="/post/art-of-pivoting">
                  <Button>Read More</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="sm:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-xl">From Garage to Global: The Success Story of TechGiant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Discover how a small startup became an industry leader through innovation and perseverance.</p>
              </CardContent>
              <CardFooter>
                <Link href="/post/techgiant-success-story">
                  <Button>Read More</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">5 Funding Options for Early-Stage Startups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Explore various funding avenues to kickstart your entrepreneurial journey.</p>
              </CardContent>
              <CardFooter>
                <Link href="/post/startup-funding-options">
                  <Button variant="outline">Read More</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Building a Strong Company Culture in a Remote World</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Tips for fostering team spirit and productivity in distributed teams.</p>
              </CardContent>
              <CardFooter>
                <Link href="/post/remote-company-culture">
                  <Button variant="outline">Read More</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">The Power of Networking: Expanding Your Business Connections</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Learn effective strategies for building and leveraging your professional network.</p>
              </CardContent>
              <CardFooter>
                <Link href="/post/networking-strategies">
                  <Button variant="outline">Read More</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Sustainable Business Practices: Profit and Purpose</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Discover how integrating sustainability can boost your bottom line and impact.</p>
              </CardContent>
              <CardFooter>
                <Link href="/post/sustainable-business-practices">
                  <Button variant="outline">Read More</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>
      </motion.main>

      <footer className="bg-muted dark:bg-gray-800 text-muted-foreground dark:text-gray-200">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            <div className="sm:col-span-2">
              <h3 className="font-bold mb-2 sm:mb-4 flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>About EntrepreneurWay</span>
              </h3>
              <p className="text-sm">Empowering entrepreneurs with insights, strategies, and inspiration for business success.</p>
              <div className="flex space-x-4 mt-4">
                {/* Social media links remain unchanged */}
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-2 sm:mb-4">Quick Links</h3>
              <ul className="space-y-1 sm:space-y-2 text-sm">
                <li><Link href="/about" className="hover:underline">About Us</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                <li><Link href="/advertise" className="hover:underline">Advertise</Link></li>
                <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2 sm:mb-4">Categories</h3>
              <ul className="space-y-1 sm:space-y-2 text-sm">
                <li><Link href="/category/startups" className="hover:underline">Startups</Link></li>
                <li><Link href="/category/strategy" className="hover:underline">Business Strategy</Link></li>
                <li><Link href="/category/success-stories" className="hover:underline">Success Stories</Link></li>
                <li><Link href="/category/innovation" className="hover:underline">Innovation</Link></li>
              </ul>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="font-bold mb-2 sm:mb-4">Subscribe to Our Newsletter</h3>
              <form className="space-y-2">
                <Input type="email" placeholder="Your email address" />
                <Button type="submit" className="w-full">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-muted-foreground/20 text-center text-sm">
            © 2024 EntrepreneurWay. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

