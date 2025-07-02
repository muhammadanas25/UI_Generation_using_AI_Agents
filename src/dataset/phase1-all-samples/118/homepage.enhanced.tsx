import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Notebook, Calendar, Paperclip, Mail, Instagram, Facebook, Twitter, Menu, X, ArrowUp } from 'lucide-react'
import { Transition } from "@headlessui/react"

export default function Component() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <a className="flex items-center" href="#">
            <Notebook className="h-6 w-6 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-indigo-600">PaperNest</span>
          </a>
          <nav className="hidden md:flex gap-6">
            <a className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition" href="#">
              Shop
            </a>
            <a className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition" href="#">
              About
            </a>
            <a className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition" href="#">
              Contact
            </a>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(true)} className="text-gray-700 hover:text-indigo-600 transition">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        <Transition
          show={isMobileMenuOpen}
          enter="transition duration-200 ease-out"
          enterFrom="transform -translate-y-full"
          enterTo="transform translate-y-0"
          leave="transition duration-150 ease-in"
          leaveFrom="transform translate-y-0"
          leaveTo="transform -translate-y-full"
        >
          <div className="md:hidden bg-white shadow-md">
            <div className="flex flex-col p-4 space-y-4">
              <button onClick={() => setIsMobileMenuOpen(false)} className="self-end text-gray-700 hover:text-indigo-600 transition">
                <X className="h-6 w-6" />
              </button>
              <a className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition" href="#">
                Shop
              </a>
              <a className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition" href="#">
                About
              </a>
              <a className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition" href="#">
                Contact
              </a>
            </div>
          </div>
        </Transition>
      </header>
      <main className="flex-1 mt-16">
        <section className="w-full py-16 sm:py-20 md:py-32 lg:py-40 bg-[url('/hero-background.svg')] bg-cover bg-center flex items-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white animate-fadeInDown">
                Welcome to PaperNest
              </h1>
              <p className="max-w-2xl text-white text-base sm:text-lg md:text-xl lg:text-2xl animate-fadeInUp">
                Discover our curated collection of planners, notebooks, and office supplies.
              </p>
              <Button className="mt-4 bg-indigo-600 text-white hover:bg-indigo-700 transition transform hover:scale-105 animate-bounce">
                Shop Now
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition transform hover:scale-105">
                <Calendar className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Planners</h3>
                <p className="text-gray-600 text-center mb-4">Stay organized with our beautiful planners</p>
                <Button variant="default" className="mt-auto bg-indigo-600 text-white hover:bg-indigo-700 transition w-full sm:w-auto">
                  View Planners
                </Button>
              </div>
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition transform hover:scale-105">
                <Notebook className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Notebooks</h3>
                <p className="text-gray-600 text-center mb-4">Capture your thoughts in our premium notebooks</p>
                <Button variant="default" className="mt-auto bg-indigo-600 text-white hover:bg-indigo-700 transition w-full sm:w-auto">
                  View Notebooks
                </Button>
              </div>
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition transform hover:scale-105">
                <Paperclip className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Office Supplies</h3>
                <p className="text-gray-600 text-center mb-4">Equip your workspace with essential supplies</p>
                <Button variant="default" className="mt-auto bg-indigo-600 text-white hover:bg-indigo-700 transition w-full sm:w-auto">
                  View Supplies
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">Testimonials</h2>
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
              <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-inner">
                <p className="text-gray-700 mb-4">"PaperNest has the best planners I've ever used. Highly recommend!"</p>
                <p className="text-indigo-600 font-semibold">- Alex Johnson</p>
              </div>
              <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-inner">
                <p className="text-gray-700 mb-4">"Their notebooks are sleek and perfect for my daily journaling."</p>
                <p className="text-indigo-600 font-semibold">- Maria Smith</p>
              </div>
              <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-inner">
                <p className="text-gray-700 mb-4">"Top-notch office supplies that keep my workspace organized."</p>
                <p className="text-indigo-600 font-semibold">- David Lee</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Stay Updated</h2>
              <p className="max-w-2xl text-gray-600 text-base sm:text-lg md:text-xl">
                Subscribe to our newsletter for exclusive offers and new product announcements.
              </p>
              <form className="w-full max-w-md flex flex-col sm:flex-row items-center gap-4">
                <Input
                  className="flex-1 w-full"
                  placeholder="Enter your email"
                  type="email"
                  required
                />
                <Button type="submit" className="w-full sm:w-auto bg-indigo-600 text-white hover:bg-indigo-700 transition">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-white shadow-inner">
        <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500 text-center md:text-left">© 2024 PaperNest. All rights reserved.</p>
          <nav className="flex space-x-4 mt-4 md:mt-0">
            <a className="text-sm text-gray-500 hover:text-indigo-600 transition" href="#">
              Terms of Service
            </a>
            <a className="text-sm text-gray-500 hover:text-indigo-600 transition" href="#">
              Privacy
            </a>
          </nav>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-indigo-600 transition">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 transition">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 transition">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
      <Transition
        show={showScrollTop}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 right-4 bg-indigo-600 text-white p-2 rounded-full shadow-lg hover:bg-indigo-700 transition"
          aria-label="Back to Top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      </Transition>
    </div>
  )
}

