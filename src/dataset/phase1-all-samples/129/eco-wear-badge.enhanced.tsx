import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, CheckCircle, Users, Package, Mail, X, Menu } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"

const EcoWearBadge = ({ className = "" }) => (
  <div className={`inline-flex items-center rounded-full bg-gradient-to-r from-green-400 to-green-600 px-2 sm:px-3 py-1 text-xs font-semibold text-white ${className} transition-transform transform hover:scale-105`}>
    <Leaf className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
    EcoWear
  </div>
)

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-lg sm:text-xl font-bold text-green-700">EcoWear</h1>
          <nav className="hidden md:block space-x-4">
            <a href="#how-it-works" className="text-gray-700 hover:text-green-600 transition-colors">How It Works</a>
            <a href="#products" className="text-gray-700 hover:text-green-600 transition-colors">Products</a>
            <a href="#apply" className="text-gray-700 hover:text-green-600 transition-colors">Apply</a>
          </nav>
          <Button variant="ghost" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white px-4 py-2 space-y-2">
            <a href="#how-it-works" className="block text-gray-700 hover:text-green-600 transition-colors">How It Works</a>
            <a href="#products" className="block text-gray-700 hover:text-green-600 transition-colors">Products</a>
            <a href="#apply" className="block text-gray-700 hover:text-green-600 transition-colors">Apply</a>
          </nav>
        )}
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <section className="mb-12 sm:mb-16 text-center animate-fade-in">
          <h1 className="mb-4 text-3xl sm:text-5xl font-bold text-green-700">EcoWear Badge</h1>
          <p className="mb-6 sm:mb-8 text-lg sm:text-xl text-gray-600">Highlighting sustainable and eco-friendly products</p>
          <EcoWearBadge className="text-base sm:text-lg" />
        </section>

        <section id="how-it-works" className="mb-12 sm:mb-16">
          <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl font-semibold text-green-700">How it works</h2>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex items-center">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mr-2" />
                <CardTitle className="text-base sm:text-lg">Sustainable Materials</CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base">
                Products must be made from at least 70% sustainable or recycled materials.
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex items-center">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mr-2" />
                <CardTitle className="text-base sm:text-lg">Ethical Production</CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base">
                Manufacturers must adhere to fair labor practices and maintain a low carbon footprint.
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
              <CardHeader className="flex items-center">
                <Package className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mr-2" />
                <CardTitle className="text-base sm:text-lg">Eco-Friendly Packaging</CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base">
                Products should be packaged using minimal, recyclable, or biodegradable materials.
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="products" className="mb-12 sm:mb-16">
          <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl font-semibold text-green-700">Example Product Listing</h2>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="max-w-sm mx-auto sm:mx-0 hover:transform hover:scale-105 transition-transform">
              <CardHeader>
                <div className="relative h-48 w-full">
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="Eco-friendly t-shirt"
                    className="absolute inset-0 h-full w-full rounded-t-lg object-cover"
                  />
                  <EcoWearBadge className="absolute left-2 top-2" />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-base sm:text-lg font-semibold">Organic Cotton T-Shirt</h3>
                <p className="text-sm sm:text-base text-gray-600">Made from 100% organic cotton</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <p className="text-base sm:text-lg font-bold text-green-700">$29.99</p>
                <Button size="sm" variant="outline" className="flex items-center text-xs sm:text-sm">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-1" /> Contact
                </Button>
              </CardFooter>
            </Card>
            {/* Repeat similar Card components for more products */}
          </div>
        </section>

        <section id="apply" className="text-center">
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-semibold text-green-700">Are you a manufacturer?</h2>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-600">Apply for the EcoWear badge and showcase your commitment to sustainability.</p>
          <Button size="lg" onClick={() => setIsOpen(true)} className="w-full sm:w-auto bg-green-600 hover:bg-green-700 transition-colors">
            Apply for EcoWear Badge
          </Button>

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle className="text-lg sm:text-xl">Apply for EcoWear Badge</DialogTitle>
                <DialogClose className="text-gray-500 hover:text-gray-700" />
              </DialogHeader>
              <form className="mt-4 space-y-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name</label>
                  <input type="text" id="company" name="company" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm sm:text-base" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm sm:text-base" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm sm:text-base" required></textarea>
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 transition-colors">Submit Application</Button>
              </form>
            </DialogContent>
          </Dialog>
        </section>
      </main>

      <footer className="bg-gray-100 py-4 sm:py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Facebook Icon */}
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Twitter Icon */}
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Instagram Icon */}
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
          <p className="text-xs sm:text-sm text-gray-600">&copy; {new Date().getFullYear()} EcoWear. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

