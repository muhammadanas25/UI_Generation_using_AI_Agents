import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Twitter, Sun, Moon, Search, Menu } from 'lucide-react'
import { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Page() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <header className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white hover:scale-105 transition-transform duration-300">ShutterStories</h1>
          </Link>
          <nav className="flex items-center space-x-4">
            <ul className="hidden md:flex space-x-6">
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="flex items-center space-x-2">
              <Input
                placeholder="Search..."
                className="hidden md:block"
                icon={<Search className="w-4 h-4 text-gray-500" />}
              />
              <Button
                variant="ghost"
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
                <span className="sr-only">Toggle Dark Mode</span>
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="flex flex-col space-y-4">
                    <Link href="#" className="text-lg">Home</Link>
                    <Link href="#portfolio" className="text-lg">Portfolio</Link>
                    <Link href="#about" className="text-lg">About</Link>
                    <Link href="#contact" className="text-lg">Contact</Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </div>
      </header>

      <main className="pt-16 md:pt-20">
        <section className="relative h-[calc(100vh-4rem)] md:h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-500"></div>
          <div className="relative z-10 text-center px-4">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">Capture Your Story</h2>
            <p className="text-base md:text-lg lg:text-2xl text-gray-300 mb-6 animate-fade-in delay-200">Explore stunning photography from around the world</p>
            <Button variant="default" className="px-4 py-2 md:px-6 md:py-3 text-base md:text-lg rounded-lg animate-pulse">Get Started</Button>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-gray-900 dark:text-white text-center">Latest Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((post) => (
              <Card key={post} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="relative h-48 md:h-64">
                  <Image
                    src={`/placeholder-${post}.jpg`}
                    alt={`Photo post ${post}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-700 bg-opacity-75 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Nature
                  </div>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  <CardTitle className="text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-white">Capturing the Moment</CardTitle>
                  <CardDescription className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
                  </CardDescription>
                  <Button variant="primary" className="w-full">Read More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="portfolio" className="bg-gray-50 dark:bg-gray-800 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-gray-900 dark:text-white text-center">Portfolio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="overflow-hidden hover:scale-105 transform transition-transform duration-300">
                  <CardContent className="p-0 relative h-48 md:h-64">
                    <Image
                      src={`/portfolio-${item}.jpg`}
                      alt={`Portfolio item ${item}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
                      <Button variant="secondary" className="px-3 py-1 md:px-4 md:py-2 text-sm md:text-base">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="container mx-auto px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-gray-900 dark:text-white text-center">About Us</h2>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-full md:w-1/2">
              <Image
                src="/about.jpg"
                alt="About ShutterStories"
                width={600}
                height={400}
                layout="responsive"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 text-gray-700 dark:text-gray-300">
              <p className="mb-4 text-sm md:text-base">ShutterStories is dedicated to bringing you the most captivating photography from around the globe. Our mission is to inspire and connect photographers and enthusiasts alike.</p>
              <p className="mb-4 text-sm md:text-base">With a focus on quality and storytelling, we curate the best visual narratives that resonate with our diverse audience. Join us in exploring the art of photography.</p>
              <Button variant="outline" className="mt-2 md:mt-4">Learn More</Button>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gray-50 dark:bg-gray-800 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-gray-900 dark:text-white text-center">Contact Us</h2>
            <div className="max-w-lg mx-auto">
              <form className="flex flex-col gap-4">
                <Input type="text" placeholder="Your Name" required />
                <Input type="email" placeholder="Your Email" required />
                <textarea
                  className="min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your Message"
                  required
                />
                <Button type="submit" className="mt-2">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 md:mb-0 text-center md:text-left">&copy; 2023 ShutterStories. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
              <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
              <Twitter className="w-5 h-5 md:w-6 md:h-6" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

