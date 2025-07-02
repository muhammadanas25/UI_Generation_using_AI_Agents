import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Search, Instagram, Twitter, Facebook, Menu, X, Sun, Moon } from 'lucide-react'
import { Transition } from "@headlessui/react"

export default function BlogLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-background dark:bg-gray-900 transition-colors duration-300">
        <header className="border-b dark:border-gray-700">
          <div className="container mx-auto px-4 py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center justify-between w-full sm:w-auto">
              <Link href="/" className="flex items-center space-x-2">
                <Leaf className="h-6 w-6 text-primary dark:text-green-400" />
                <span className="text-xl sm:text-2xl font-bold text-primary dark:text-green-400">UrbanGardener</span>
              </Link>
              <div className="flex items-center space-x-4 sm:hidden">
                <Button variant="ghost" onClick={() => setIsDarkMode(!isDarkMode)} className="p-2">
                  {isDarkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-800" />}
                </Button>
                <Button variant="ghost" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
            <nav className="hidden sm:flex mt-4 sm:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link href="/tips" className="text-muted-foreground hover:text-primary dark:hover:text-green-400 transition-colors duration-200">
                    Tips
                  </Link>
                </li>
                <li>
                  <Link href="/plants" className="text-muted-foreground hover:text-primary dark:hover:text-green-400 transition-colors duration-200">
                    Plants
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary dark:hover:text-green-400 transition-colors duration-200">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary dark:hover:text-green-400 transition-colors duration-200">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <Transition
            show={isMobileMenuOpen}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-150"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            {(ref) => (
              <nav className="sm:hidden bg-background dark:bg-gray-800 border-t dark:border-gray-700 w-full">
                <ul ref={ref} className="flex flex-col space-y-2 py-4 px-4">
                  <li>
                    <Link href="/tips" className="text-muted-foreground hover:text-primary dark:hover:text-green-400 transition-colors duration-200">
                      Tips
                    </Link>
                  </li>
                  <li>
                    <Link href="/plants" className="text-muted-foreground hover:text-primary dark:hover:text-green-400 transition-colors duration-200">
                      Plants
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-muted-foreground hover:text-primary dark:hover:text-green-400 transition-colors duration-200">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-muted-foreground hover:text-primary dark:hover:text-green-400 transition-colors duration-200">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </Transition>
        </header>

        <main className="container mx-auto px-4 py-8">
          <section className="mb-12">
            <div className="bg-hero-pattern bg-cover bg-center rounded-lg shadow-lg p-6 sm:p-12 text-center text-white">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fadeIn">Welcome to UrbanGardener</h2>
              <p className="text-base sm:text-lg mb-6">Your go-to resource for urban gardening tips and plant care advice.</p>
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Get Started
              </Button>
            </div>
          </section>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3">
              <h1 className="text-4xl font-bold mb-8">Latest Urban Gardening Tips</h1>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {[1, 2, 3, 4, 5, 6].map((post) => (
                  <Card key={post} className="hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-2xl">How to Grow Herbs in Small Spaces</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img
                        src={`/plants/${post}.jpg`}
                        alt="Herbs growing in a small container"
                        className="w-full h-48 object-cover rounded-md mb-4 transform hover:scale-105 transition-transform duration-300"
                      />
                      <p className="text-muted-foreground">
                        Discover the secrets to growing a thriving herb garden in your apartment or small urban space.
                        Learn about the best herbs for indoor growing and essential care tips.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full mt-4">
                        Read More
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            <aside className="w-full lg:w-1/3 space-y-6">
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle>Search</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="flex w-full items-center space-x-2" onSubmit={(e) => e.preventDefault()}>
                    <Input type="search" placeholder="Search..." className="flex-1" />
                    <Button type="submit" size="icon">
                      <Search className="h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/category/indoor-plants" className="text-muted-foreground hover:text-primary dark:hover:text-green-400 transition-colors duration-200">
                        Indoor Plants
                      </Link>
                    </li>
                    <li>
                      <Link href="/category/balcony-gardens" className="text-muted-foreground hover:text-primary dark:hover:text-green-400 transition-colors duration-200">
                        Balcony Gardens
                      </Link>
                    </li>
                    <li>
                      <Link href="/category/vertical-gardening" className="text-muted-foreground hover:text-primary dark:hover:text-green-400 transition-colors duration-200">
                        Vertical Gardening
                      </Link>
                    </li>
                    <li>
                      <Link href="/category/plant-care" className="text-muted-foreground hover:text-primary dark:hover:text-green-400 transition-colors duration-200">
                        Plant Care
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle>Newsletter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Subscribe to receive the latest gardening tips and updates.</p>
                  <form className="flex flex-col space-y-2" onSubmit={(e) => e.preventDefault()}>
                    <Input type="email" placeholder="Your email address" required />
                    <Button type="submit">
                      Subscribe
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Link href="#" className="text-muted-foreground hover:text-primary dark:hover:text-green-400 transition-colors duration-200">
                      <Instagram className="h-6 w-6" />
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary dark:hover:text-green-400 transition-colors duration-200">
                      <Twitter className="h-6 w-6" />
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary dark:hover:text-green-400 transition-colors duration-200">
                      <Facebook className="h-6 w-6" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </main>

        <footer className="border-t dark:border-gray-700 mt-12">
          <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
            <p className="mb-4 sm:mb-2">© 2023 UrbanGardener. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
              <Link href="/privacy" className="hover:text-primary dark:hover:text-green-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary dark:hover:text-green-400 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

