import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Menu, MenuButton, MenuList, MenuItem } from "@/components/ui/menu"
import { XIcon, MenuIcon, ChevronRightIcon } from 'lucide-react'

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="#" className="flex items-center space-x-2">
            <span className="sr-only">Emily Lens Photography</span>
            <Image
              src="/placeholder.svg"
              alt="Logo"
              className="h-8 w-8 rounded-full transition-transform duration-300 transform hover:scale-110"
              width={32}
              height={32}
            />
            <span className="text-xl font-semibold text-gray-800 dark:text-white">Emily Lens</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link
              href="#hero"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="#gallery"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            >
              Portfolio
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            >
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex space-x-4">
            <Button variant="outline" className="text-sm">
              Book a Session
            </Button>
            <Button variant="secondary" className="text-sm">
              View Gallery
            </Button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none transition-colors duration-300"
            >
              {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
            <nav className="flex flex-col space-y-2 px-4 py-4">
              <Link
                href="#hero"
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#gallery"
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="mt-4 space-y-2">
                <Button variant="outline" className="w-full text-sm">
                  Book a Session
                </Button>
                <Button variant="secondary" className="w-full text-sm">
                  View Gallery
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
      <main className="flex-1 mt-16">
        <section id="hero" className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/hero-background.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 md:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center text-white relative z-10 py-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">Capturing Life's Moments</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl animate-fade-in delay-200">
              Professional photography services for weddings, events, and portraits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button className="px-6 py-3 text-base w-full sm:w-auto">Book a Session</Button>
              <Button variant="outline" className="px-6 py-3 text-base w-full sm:w-auto">
                View Gallery
              </Button>
            </div>
          </div>
        </section>
        <section id="gallery" className="py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white transition-colors duration-300">
              Featured Work
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="relative group aspect-w-16 aspect-h-9">
                  <Image
                    src={`/placeholder-${i}.jpg`}
                    alt={`Featured image ${i}`}
                    className="object-cover rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105"
                    layout="fill"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-bg-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white text-lg font-semibold">View Details</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="testimonials" className="py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white transition-colors duration-300">
              Client Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Alex Johnson",
                  text: "Emily captured our wedding day beautifully. Her attention to detail is amazing!",
                  avatar: "/avatars/alex.jpg",
                },
                {
                  name: "Sarah Lee",
                  text: "The family portraits Emily took for us are absolutely stunning. We'll cherish them forever.",
                  avatar: "/avatars/sarah.jpg",
                },
                {
                  name: "Michael Chen",
                  text: "Working with Emily was a joy. She made our corporate event look spectacular in photos.",
                  avatar: "/avatars/michael.jpg",
                },
              ].map((testimonial, i) => (
                <Card key={i} className="shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-16 w-16 rounded-full mb-4"
                      width={64}
                      height={64}
                    />
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">{testimonial.text}</p>
                    <p className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white transition-colors duration-300">
              Get in Touch
            </h2>
            <div className="max-w-xl mx-auto">
              <form className="flex flex-col space-y-4 w-full max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 w-full"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 w-full"
                />
                <textarea
                  placeholder="Your Message"
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 w-full"
                  rows={5}
                ></textarea>
                <Button className="self-center px-6 py-3 w-full sm:w-auto">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 md:mb-0 text-center md:text-left">
            © 2024 Emily Lens Photography. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-xs text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            >
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

