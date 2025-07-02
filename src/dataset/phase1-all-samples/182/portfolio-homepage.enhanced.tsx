import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight, Github, Twitter, Linkedin, Sun, Moon, ArrowUp } from 'lucide-react'
import Image from 'next/image'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState('light')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} min-h-screen bg-black text-white transition-colors duration-500`}>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-70 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="GameVision Logo" width={40} height={40} />
            <h1 className="text-2xl font-bold">GameVision</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === 'light' ? <Moon /> : <Sun />}
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed inset-0 z-40 bg-black bg-opacity-95 flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col space-y-6 text-3xl">
              <a href="#gallery" className="hover:text-primary transition-colors" onClick={toggleMenu}>Gallery</a>
              <a href="#about" className="hover:text-primary transition-colors" onClick={toggleMenu}>About</a>
              <a href="#testimonials" className="hover:text-primary transition-colors" onClick={toggleMenu}>Testimonials</a>
              <a href="#contact" className="hover:text-primary transition-colors" onClick={toggleMenu}>Contact</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section className="h-screen flex items-center justify-center relative overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/hero-bg.jpg"
              alt="Featured artwork"
              layout="fill"
              objectFit="cover"
              quality={75}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </motion.div>
          <div className="relative z-10 text-center px-4">
            <motion.h2
              className="text-5xl md:text-7xl font-extrabold mb-4 text-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Welcome to GameVision
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Bringing game worlds to life through art
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Button size="lg" className="text-lg flex items-center">
                Explore Gallery <ChevronRight className="ml-2" />
              </Button>
            </motion.div>
          </div>
          <a href="#gallery" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronRight className="h-8 w-8 text-primary" />
          </a>
        </section>

        <section id="gallery" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {['Concept Art', 'Character Designs', 'Game Environments', 'Weapons', 'Vehicles', 'UI Designs'].map((category, index) => (
                <motion.div
                  key={category}
                  className="relative overflow-hidden rounded-lg shadow-lg group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Image
                    src={`/gallery/${category.toLowerCase().replace(' ', '-')}.jpg`}
                    alt={category}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-bold">{category}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button variant="secondary" className="flex items-center mx-auto">
                View All <ChevronRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">About GameVision</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div
                className="w-64 h-64 relative rounded-full overflow-hidden shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/artist-portrait.jpg"
                  alt="Artist portrait"
                  layout="fill"
                  objectFit="cover"
                  className="transform hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
              <motion.div
                className="max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-lg mb-4">
                  GameVision is the creative outlet of a passionate video game artist with over a decade of experience in the industry. Specializing in concept art, character designs, and immersive game environments, GameVision brings imagination to life through stunning visuals.
                </p>
                <p className="text-lg mb-4">
                  With a keen eye for detail and a deep understanding of game design principles, GameVision has contributed to numerous AAA titles and indie gems alike. The goal is always the same: to create unforgettable visual experiences that transport players to new worlds.
                </p>
                <Button variant="outline" className="mt-4 flex items-center">
                  Download Resume <ChevronRight className="ml-2" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-gray-700">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">Testimonials</h2>
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
              {[
                {
                  text: "GameVision transformed our game with stunning visuals that truly captured our vision.",
                  author: "Jane Doe, Lead Developer"
                },
                {
                  text: "The attention to detail in the character designs is unparalleled. Highly recommended!",
                  author: "John Smith, Creative Director"
                },
                {
                  text: "Working with GameVision was a pleasure. The environments created are breathtaking.",
                  author: "Alice Johnson, Project Manager"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <p className="text-lg italic mb-4">"{testimonial.text}"</p>
                  <p className="text-sm font-semibold text-right">- {testimonial.author}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <Input type="text" placeholder="Name" required />
                <Input type="email" placeholder="Email" required />
                <Input type="text" placeholder="Subject" required />
                <Textarea placeholder="Message" required />
                <Button type="submit" className="w-full flex items-center justify-center">
                  Send Message <ChevronRight className="ml-2" />
                </Button>
              </form>
            </div>
            <div className="mt-12 text-center">
              <Button variant="ghost" size="icon" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <ArrowUp className="h-5 w-5" />
                <span className="sr-only">Back to Top</span>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">&copy; 2024 GameVision. All rights reserved.</p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}