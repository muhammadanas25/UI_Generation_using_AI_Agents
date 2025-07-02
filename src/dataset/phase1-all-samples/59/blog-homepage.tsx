import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Rocket, TrendingUp, Award, Search, Menu } from 'lucide-react'
import { useState } from "react"

export default function BlogHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">EntrepreneurWay</Link>
            <nav className="hidden md:flex space-x-4">
              <Link href="/startups" className="hover:underline">Startups</Link>
              <Link href="/strategy" className="hover:underline">Strategy</Link>
              <Link href="/success-stories" className="hover:underline">Success Stories</Link>
              <Link href="/about" className="hover:underline">About</Link>
            </nav>
            <div className="flex md:hidden">
              <Button variant="outline" size="icon" className="mr-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="h-4 w-4" />
                <span className="sr-only">Menu</span>
              </Button>
              <Button variant="outline" size="icon">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
          </div>
          {isMenuOpen && (
            <nav className="mt-4 flex flex-col space-y-2 md:hidden">
              <Link href="/startups" className="hover:underline">Startups</Link>
              <Link href="/strategy" className="hover:underline">Strategy</Link>
              <Link href="/success-stories" className="hover:underline">Success Stories</Link>
              <Link href="/about" className="hover:underline">About</Link>
            </nav>
          )}
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Featured Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <h2 className="text-3xl font-bold mb-6">Recent Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
      </main>

      <footer className="bg-muted">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">About EntrepreneurWay</h3>
              <p className="text-sm">Empowering entrepreneurs with insights, strategies, and inspiration for business success.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:underline">About Us</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                <li><Link href="/advertise" className="hover:underline">Advertise</Link></li>
                <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Categories</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/category/startups" className="hover:underline">Startups</Link></li>
                <li><Link href="/category/strategy" className="hover:underline">Business Strategy</Link></li>
                <li><Link href="/category/success-stories" className="hover:underline">Success Stories</Link></li>
                <li><Link href="/category/innovation" className="hover:underline">Innovation</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Subscribe to Our Newsletter</h3>
              <form className="space-y-2">
                <Input type="email" placeholder="Your email address" />
                <Button type="submit" className="w-full">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-muted-foreground/20 text-center text-sm">
            © 2024 EntrepreneurWay. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

