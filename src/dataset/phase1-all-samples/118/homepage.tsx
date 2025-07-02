import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Notebook, Calendar, Paperclip, Mail, Instagram, Facebook, Twitter, Menu, X } from 'lucide-react'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <a className="flex items-center justify-center" href="#">
          <Notebook className="h-6 w-6" />
          <span className="ml-2 text-xl sm:text-2xl font-bold">PaperNest</span>
        </a>
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'
          } lg:flex absolute lg:relative top-14 left-0 right-0 bg-white lg:top-0 flex-col lg:flex-row items-center gap-4 lg:gap-6 p-4 lg:p-0 shadow-md lg:shadow-none`}>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Shop
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/placeholder.svg?height=600&width=800')] bg-cover bg-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white">
                  Welcome to PaperNest
                </h1>
                <p className="mx-auto max-w-[700px] text-white text-sm sm:text-base md:text-lg">
                  Discover our curated collection of planners, notebooks, and office supplies.
                </p>
              </div>
              <Button className="bg-white text-black hover:bg-gray-200">Shop Now</Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-8">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg bg-white">
                <Calendar className="h-12 w-12 text-gray-600" />
                <h3 className="text-lg sm:text-xl font-bold">Planners</h3>
                <p className="text-sm text-gray-500 text-center">Stay organized with our beautiful planners</p>
                <Button variant="outline" className="w-full sm:w-auto">View Planners</Button>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg bg-white">
                <Notebook className="h-12 w-12 text-gray-600" />
                <h3 className="text-lg sm:text-xl font-bold">Notebooks</h3>
                <p className="text-sm text-gray-500 text-center">Capture your thoughts in our premium notebooks</p>
                <Button variant="outline" className="w-full sm:w-auto">View Notebooks</Button>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg bg-white">
                <Paperclip className="h-12 w-12 text-gray-600" />
                <h3 className="text-lg sm:text-xl font-bold">Office Supplies</h3>
                <p className="text-sm text-gray-500 text-center">Equip your workspace with essential supplies</p>
                <Button variant="outline" className="w-full sm:w-auto">View Supplies</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">Stay Updated</h2>
                <p className="max-w-[600px] text-gray-500 text-sm sm:text-base md:text-lg mx-auto">
                  Subscribe to our newsletter for exclusive offers and new product announcements.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="w-full sm:w-auto">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 PaperNest. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <a href="#" className="text-gray-500 hover:text-gray-600">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-600">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-600">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </footer>
    </div>
  )
}

