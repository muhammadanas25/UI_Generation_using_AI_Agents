import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Leaf, Mail, MapPin, Phone, Menu, X, ArrowRight, Instagram, Facebook, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-shadow duration-300">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link className="flex items-center space-x-2" href="#">
            <Image src="/logo.svg" alt="GreenVisions Logo" width={32} height={32} />
            <span className="text-lg font-bold text-green-600 dark:text-green-400">GreenVisions</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors duration-200" href="#portfolio">
              Portfolio
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors duration-200" href="#services">
              Services
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors duration-200" href="#contact">
              Contact
            </Link>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(true)} className="text-gray-700 dark:text-gray-300 focus:outline-none">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
            <div className="w-64 bg-white dark:bg-gray-800 p-6 space-y-6">
              <button onClick={() => setMobileMenuOpen(false)} className="flex items-center text-gray-700 dark:text-gray-300 focus:outline-none">
                <X className="h-6 w-6 mr-2" />
                Close
              </button>
              <nav className="flex flex-col space-y-4">
                <Link className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors duration-200" href="#portfolio" onClick={() => setMobileMenuOpen(false)}>
                  Portfolio
                </Link>
                <Link className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors duration-200" href="#services" onClick={() => setMobileMenuOpen(false)}>
                  Services
                </Link>
                <Link className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors duration-200" href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </Link>
              </nav>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors duration-200">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors duration-200">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors duration-200">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
      <main className="flex-1 mt-16">
        <section className="w-full py-20 md:py-32 bg-hero-pattern bg-cover bg-center relative">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container px-4 md:px-6 relative z-10 text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-4 animate-fade-in-up">
              Welcome to GreenVisions
            </h1>
            <p className="mx-auto max-w-2xl text-lg md:text-2xl mb-8 animate-fade-in-up delay-200">
              Transforming outdoor spaces into breathtaking landscapes. Let's bring your garden dreams to life.
            </p>
            <div className="flex justify-center space-x-4 animate-fade-in-up delay-400">
              <Button variant="default" className="px-6 py-3 flex items-center space-x-2">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" className="px-6 py-3">
                Learn More
              </Button>
            </div>
          </div>
        </section>
        <section id="portfolio" className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">Our Portfolio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1,2,3,4,5,6].map((item) => (
                <div key={item} className="relative group overflow-hidden rounded-lg shadow-lg">
                  <Image
                    alt={`Garden project ${item}`}
                    className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-300"
                    height="240"
                    src={`/portfolio-${item}.jpg`}
                    width="400"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-lg font-semibold text-white">Project Title {item}</h3>
                    <p className="text-sm text-gray-200">Brief description of the project goes here.</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline">View More</Button>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
                <Leaf className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Landscape Design</h3>
                <p className="text-gray-600 dark:text-gray-400">Custom designs tailored to your space and preferences, bringing your vision to life.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
                <MapPin className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Garden Installation</h3>
                <p className="text-gray-600 dark:text-gray-400">Expert installation of plants, hardscapes, and water features to create your perfect outdoor space.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
                <Leaf className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Maintenance</h3>
                <p className="text-gray-600 dark:text-gray-400">Regular upkeep and seasonal care to ensure your garden remains beautiful year-round.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">Contact Us</h2>
            <div className="flex flex-col lg:flex-row lg:space-x-12">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-green-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">+1 (123) 456-7890</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-green-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">info@greenvisions.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-green-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">123 Garden Street, Green City, 12345</span>
                  </div>
                </div>
                <div className="flex space-x-4 mt-6">
                  <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors duration-200">
                    <Instagram className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors duration-200">
                    <Facebook className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors duration-200">
                    <Twitter className="h-6 w-6" />
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2">
                <form className="space-y-6">
                  <Input placeholder="Name" required />
                  <Input placeholder="Email" type="email" required />
                  <Input placeholder="Phone" type="tel" />
                  <Textarea placeholder="Message" required />
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 GreenVisions. All rights reserved.</p>
          <nav className="flex space-x-4 mt-4 sm:mt-0">
            <Link className="text-sm text-gray-500 dark:text-gray-400 hover:text-green-600 transition-colors duration-200" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm text-gray-500 dark:text-gray-400 hover:text-green-600 transition-colors duration-200" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}