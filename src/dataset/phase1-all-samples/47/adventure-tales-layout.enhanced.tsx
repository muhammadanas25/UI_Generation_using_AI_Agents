import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mountain, Tent, Map, Search, Moon, Sun, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Component() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="bg-primary text-primary-foreground shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Mountain className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400 animate-bounce" />
              <span className="text-xl sm:text-2xl font-bold">AdventureTales</span>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/guides" className="hover:text-amber-400 transition-colors duration-200">Guides</Link>
              <Link href="/hiking" className="hover:text-amber-400 transition-colors duration-200">Hiking</Link>
              <Link href="/camping" className="hover:text-amber-400 transition-colors duration-200">Camping</Link>
              <Link href="/about" className="hover:text-amber-400 transition-colors duration-200">About</Link>
            </nav>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="hidden md:flex" onClick={toggleDarkMode}>
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                <span className="sr-only">Toggle Dark Mode</span>
              </Button>
              <Button variant="outline" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                <span className="sr-only">Menu</span>
              </Button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden border-t border-primary-foreground/10 px-4 py-2">
            <Link href="/guides" className="block py-2 hover:text-amber-400 transition-colors duration-200">Guides</Link>
            <Link href="/hiking" className="block py-2 hover:text-amber-400 transition-colors duration-200">Hiking</Link>
            <Link href="/camping" className="block py-2 hover:text-amber-400 transition-colors duration-200">Camping</Link>
            <Link href="/about" className="block py-2 hover:text-amber-400 transition-colors duration-200">About</Link>
            <Button variant="ghost" size="sm" className="mt-2 w-full justify-start" onClick={toggleDarkMode}>
              {darkMode ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
              Toggle Dark Mode
            </Button>
          </nav>
        )}
      </header>

      <main className="flex-grow pt-20">
        <motion.section
          className="bg-muted py-12 sm:py-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-800 dark:text-white">Discover Your Next Adventure</h1>
                <p className="text-base sm:text-lg mb-6 text-gray-600 dark:text-gray-300">Explore our curated guides for outdoor enthusiasts, from beginner-friendly hikes to advanced camping techniques.</p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button className="flex items-center justify-center hover:bg-amber-400 hover:text-white transition-colors duration-200">
                    <Map className="mr-2 h-4 w-4" /> Explore Guides
                  </Button>
                  <Button variant="outline" className="flex items-center justify-center hover:bg-amber-400 hover:text-white transition-colors duration-200">
                    <Tent className="mr-2 h-4 w-4" /> Camping Tips
                  </Button>
                </div>
              </div>
              <div className="relative w-full h-64 sm:h-80 md:h-96 border-4 border-amber-400 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 mt-8 md:mt-0">
                <Image
                  src="/adventure-featured.jpg"
                  alt="Featured adventure"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h2 className="text-white text-lg sm:text-xl">Top Hiking Trails 2024</h2>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="py-12 sm:py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800 dark:text-white">Recent Adventures</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div
                  key={i}
                  className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={`/adventure-${i}.jpg`}
                    alt={`Adventure ${i}`}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 dark:text-white">Adventure Title {i}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 text-gray-600 dark:text-gray-300">A brief description of the adventure, highlighting key points and attractions.</p>
                    <Button variant="outline" size="sm" className="flex items-center w-full sm:w-auto justify-center sm:justify-start">
                      Read More
                      <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          className="bg-muted py-12 sm:py-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Stay Updated on New Adventures</h2>
            <p className="text-base sm:text-lg mb-6 text-gray-600 dark:text-gray-300">Subscribe to our newsletter for the latest guides, tips, and outdoor inspiration.</p>
            <form className="flex flex-col sm:flex-row max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-grow mb-4 sm:mb-0 sm:mr-2" />
              <Button className="w-full sm:w-auto">Subscribe</Button>
            </form>
          </div>
        </motion.section>
      </main>

      <footer className="bg-primary text-primary-foreground mt-12">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-100">About AdventureTales</h3>
              <p className="text-sm text-gray-300">Inspiring outdoor enthusiasts with expert guides, hiking routes, and camping tips since 2023.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-100">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/guides" className="hover:underline text-gray-300 hover:text-amber-400 transition-colors duration-200">Adventure Guides</Link></li>
                <li><Link href="/hiking" className="hover:underline text-gray-300 hover:text-amber-400 transition-colors duration-200">Hiking Routes</Link></li>
                <li><Link href="/camping" className="hover:underline text-gray-300 hover:text-amber-400 transition-colors duration-200">Camping Tips</Link></li>
                <li><Link href="/gear" className="hover:underline text-gray-300 hover:text-amber-400 transition-colors duration-200">Gear Reviews</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-100">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:underline text-gray-300 hover:text-amber-400 transition-colors duration-200">Facebook</Link></li>
                <li><Link href="#" className="hover:underline text-gray-300 hover:text-amber-400 transition-colors duration-200">Instagram</Link></li>
                <li><Link href="#" className="hover:underline text-gray-300 hover:text-amber-400 transition-colors duration-200">Twitter</Link></li>
                <li><Link href="#" className="hover:underline text-gray-300 hover:text-amber-400 transition-colors duration-200">YouTube</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-100">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:underline text-gray-300 hover:text-amber-400 transition-colors duration-200">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:underline text-gray-300 hover:text-amber-400 transition-colors duration-200">Terms of Service</Link></li>
                <li><Link href="/cookies" className="hover:underline text-gray-300 hover:text-amber-400 transition-colors duration-200">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-gray-400">
            <p>&copy; 2023 AdventureTales. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

