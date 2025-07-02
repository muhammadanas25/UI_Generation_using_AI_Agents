import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Building2, Mail, Phone, Menu, X, Instagram, LinkedIn, Twitter } from "lucide-react"

export default function Component() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <a className="flex items-center space-x-2 text-xl font-bold text-gray-800 dark:text-white" href="#">
            <Building2 className="h-6 w-6" />
            <span>DesignByDrew</span>
          </a>
          <nav className="hidden md:flex space-x-6">
            <a
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              href="#drawings"
            >
              Drawings
            </a>
            <a
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              href="#contact"
            >
              Contact
            </a>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none transition-colors duration-300"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-2">
            <a
              className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              href="#projects"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              href="#drawings"
              onClick={() => setMenuOpen(false)}
            >
              Drawings
            </a>
            <a
              className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        )}
      </header>
      <main className="flex-1 pt-16">
        <section className="w-full bg-cover bg-center py-20 md:py-32 lg:py-40" style={{ backgroundImage: "url('/architectural-bg.jpg')" }}>
          <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 rounded-lg">
            <div className="text-center text-white space-y-4 animate-fadeIn">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Welcome to DesignByDrew
              </h1>
              <p className="max-w-xl mx-auto text-lg sm:text-xl md:text-2xl">
                Innovative architectural designs that transform spaces and inspire living.
              </p>
              <div className="mt-6 flex space-x-4">
                <Button className="transition-transform transform hover:scale-105">
                  View Projects
                </Button>
                <Button variant="outline" className="transition-transform transform hover:scale-105">
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white transition-colors duration-300">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="transform hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-4">
                    <img
                      alt={`Project ${i}`}
                      className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-110"
                      src={`/placeholder.svg?height=300&width=400`}
                    />
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Project {i}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      A brief description of the architectural project and its unique features.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="drawings" className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white transition-colors duration-300">CAD Drawings &amp; Blueprints</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="transform hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-4">
                    <img
                      alt={`Drawing ${i}`}
                      className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-110"
                      src={`/placeholder.svg?height=300&width=300`}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white transition-colors duration-300">Get in Touch</h2>
            <div className="flex flex-col lg:flex-row lg:space-x-12 space-y-12 lg:space-y-0">
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  <a href="mailto:drew@designbydrew.com" className="text-lg text-gray-700 dark:text-gray-300 hover:underline transition-colors duration-300">
                    drew@designbydrew.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  <a href="tel:+15551234567" className="text-lg text-gray-700 dark:text-gray-300 hover:underline transition-colors duration-300">
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <LocationIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  <span className="text-lg text-gray-700 dark:text-gray-300">123 Architecture Lane, BuildCity, BC</span>
                </div>
              </div>
              <div className="flex-1">
                <form className="space-y-6">
                  <Input placeholder="Your Name" required />
                  <Input placeholder="Your Email" type="email" required />
                  <Textarea placeholder="Your Message" required />
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 dark:bg-gray-900 py-6">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400">© 2024 DesignByDrew. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-300">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-300">
              <LinkedIn className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-300">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function LocationIcon(props) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.65685 0 3-1.34315 3-3s-1.34315-3-3-3-3 1.34315-3 3 1.34315 3 3 3zm0 2c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path>
    </svg>
  )
}