import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Menu, X, ChevronRight, Github, Twitter, Linkedin } from 'lucide-react'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">GameVision</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </header>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed inset-0 z-40 bg-black bg-opacity-90 flex flex-col items-center justify-center"
        >
          <nav className="flex flex-col space-y-6 text-2xl">
            <a href="#gallery" className="hover:text-primary transition-colors" onClick={toggleMenu}>Gallery</a>
            <a href="#about" className="hover:text-primary transition-colors" onClick={toggleMenu}>About</a>
            <a href="#contact" className="hover:text-primary transition-colors" onClick={toggleMenu}>Contact</a>
          </nav>
        </motion.div>
      )}

      <main>
        <section className="h-screen flex items-center justify-center relative overflow-hidden">
          <motion.img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Featured artwork"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative z-10 text-center">
            <motion.h2
              className="text-5xl md:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to GameVision
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Bringing game worlds to life through art
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button size="lg" className="text-lg">
                Explore Gallery <ChevronRight className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>

        <section id="gallery" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {['Concept Art', 'Character Designs', 'Game Environments'].map((category, index) => (
                <motion.div
                  key={category}
                  className="relative overflow-hidden rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <img
                    src={`/placeholder.svg?height=400&width=600&text=${category}`}
                    alt={category}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-bold">{category}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">About GameVision</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.img
                src="/placeholder.svg?height=400&width=400&text=Artist+Portrait"
                alt="Artist portrait"
                className="w-64 h-64 rounded-full object-cover"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-lg mb-4">
                  GameVision is the creative outlet of a passionate video game artist with over a decade of experience in the industry. Specializing in concept art, character designs, and immersive game environments, GameVision brings imagination to life through stunning visuals.
                </p>
                <p className="text-lg">
                  With a keen eye for detail and a deep understanding of game design principles, GameVision has contributed to numerous AAA titles and indie gems alike. The goal is always the same: to create unforgettable visual experiences that transport players to new worlds.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Textarea placeholder="Message" />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">&copy; 2024 GameVision. All rights reserved.</p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}