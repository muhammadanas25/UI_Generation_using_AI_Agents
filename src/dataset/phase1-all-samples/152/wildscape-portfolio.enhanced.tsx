import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Mail, MapPin, Twitter, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function WildScapePortfolio() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 py-4 flex items-center justify-between bg-white shadow sticky top-0 z-50">
        <Link className="flex items-center" href="#">
          <span className="sr-only">WildScape Photography</span>
          <Image
            src="/placeholder.svg?height=32&width=32"
            width={32}
            height={32}
            alt="WildScape Logo"
            className="h-8 w-8 mr-2 transition-transform duration-300 transform hover:scale-110"
          />
          <span className="text-xl font-extrabold text-primary transition-colors duration-300 hover:text-secondary">WildScape</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300" href="#">
            Gallery
          </Link>
          <Link className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300" href="#">
            About
          </Link>
          <Link className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300" href="#">
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="absolute top-16 right-4 bg-white shadow-lg rounded-lg py-4 px-6 flex flex-col gap-4 md:hidden animate-slide-in">
            <Link className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300" href="#">
              Home
            </Link>
            <Link className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300" href="#">
              Gallery
            </Link>
            <Link className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300" href="#">
              About
            </Link>
            <Link className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300" href="#">
              Contact
            </Link>
          </nav>
        )}
      </header>
      <main className="flex-1">
        <section className="w-full py-20 bg-gradient-to-r from-green-200 to-blue-300">
          <div className="container mx-auto px-4">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
              <div className="flex flex-col justify-center space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary drop-shadow-lg">
                  Capturing Nature's Beauty
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-xl">
                  Welcome to WildScape Photography. Explore the world through my lens and experience the raw beauty of nature.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white shadow-lg hover:bg-primary-dark transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    href="#"
                  >
                    View Gallery
                  </Link>
                  <Link
                    className="inline-flex items-center justify-center rounded-md border border-primary px-6 py-3 text-base font-medium text-primary shadow-lg hover:bg-primary hover:text-white transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    href="#"
                  >
                    About Me
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <Image
                  alt="WildScape featured image"
                  className="w-full rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
                  height="600"
                  src="/placeholder.svg?height=600&width=600"
                  width="600"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-12">Featured Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="relative group overflow-hidden rounded-lg shadow-lg">
                  <Image
                    alt={`Nature photo ${i}`}
                    className="w-full h-60 object-cover transform transition-transform duration-300 group-hover:scale-110"
                    height="300"
                    src={`/placeholder.svg?height=300&width=300&text=Photo+${i}`}
                    width="300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-bg duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Link
                      href="#"
                      className="px-4 py-2 bg-white text-black rounded-md shadow-md hover:bg-gray-200 transition-colors"
                    >
                      View
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <Link
                className="inline-flex items-center justify-center rounded-md bg-secondary px-8 py-3 text-lg font-medium text-white shadow-lg hover:bg-secondary-dark transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                href="#"
              >
                View All Photos
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-muted-foreground">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-2/3 space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary">About WildScape</h2>
                <p className="text-lg text-gray-700">
                  WildScape is dedicated to capturing the raw beauty of nature through the lens. With a passion for
                  outdoor photography, we strive to bring the wonders of the natural world to your screens and walls.
                </p>
                <div className="mt-4">
                  <div className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold">
                    Our Mission
                  </div>
                </div>
                <p className="text-lg text-gray-700">
                  To inspire a deeper connection with nature through stunning imagery, encouraging conservation and
                  appreciation for the world around us.
                </p>
                <Link
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white shadow-lg hover:bg-primary-dark transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  href="#"
                >
                  Learn More
                </Link>
              </div>
              <div className="w-full lg:w-1/3">
                <Image
                  alt="About WildScape"
                  className="w-full rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-105"
                  height="400"
                  src="/placeholder.svg?height=400&width=600&text=About+WildScape"
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-gradient-to-r from-blue-200 to-green-300">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Stay Connected</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join our newsletter to receive updates on new photos, exhibitions, and special offers.
              </p>
              <form className="flex flex-col sm:flex-row items-center gap-4">
                <Input
                  className="flex-1"
                  placeholder="Enter your email"
                  type="email"
                  required
                />
                <Button type="submit" className="w-full sm:w-auto">
                  Subscribe
                </Button>
              </form>
              <p className="text-sm text-gray-600 mt-4">
                By subscribing, you agree to our <Link href="#" className="underline">Terms of Service</Link> and <Link href="#" className="underline">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white py-6 shadow-inner">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">© 2024 WildScape Photography. All rights reserved.</p>
          <nav className="flex space-x-4 mt-4 md:mt-0">
            <Link className="text-gray-500 hover:text-primary transition-colors" href="#">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
            <Link className="text-gray-500 hover:text-primary transition-colors" href="#">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link className="text-gray-500 hover:text-primary transition-colors" href="#">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link className="text-gray-500 hover:text-primary transition-colors" href="#">
              <MapPin className="h-5 w-5" />
              <span className="sr-only">Location</span>
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}