"use client"

import { useState } from "react"
import { Menu, X, Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { motion } from "framer-motion"

const artworks = [
  { id: 1, title: "Neon City", src: "/placeholder.svg?height=400&width=400" },
  { id: 2, title: "8-Bit Adventure", src: "/placeholder.svg?height=400&width=400" },
  { id: 3, title: "Retro Gaming Icons", src: "/placeholder.svg?height=400&width=400" },
  { id: 4, title: "Pixel Landscapes", src: "/placeholder.svg?height=400&width=400" },
  { id: 5, title: "Cyberpunk Characters", src: "/placeholder.svg?height=400&width=400" },
  { id: 6, title: "Isometric Worlds", src: "/placeholder.svg?height=400&width=400" },
]

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedArtwork, setSelectedArtwork] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-gray-700 bg-gray-800/90 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="PixelArt Logo" className="h-8 w-8" />
            <span className="hidden text-2xl font-bold sm:block">PixelArt</span>
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#gallery" className="hover:text-accent transition-colors">
              Gallery
            </a>
            <a href="#commission" className="hover:text-accent transition-colors">
              Commission
            </a>
            <a href="#about" className="hover:text-accent transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="flex items-center">
              <span>Hire Me</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="md:hidden bg-gray-800 bg-opacity-95"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              <a href="#gallery" className="block text-lg hover:text-accent">
                Gallery
              </a>
              <a href="#commission" className="block text-lg hover:text-accent">
                Commission
              </a>
              <a href="#about" className="block text-lg hover:text-accent">
                About
              </a>
              <a href="#contact" className="block text-lg hover:text-accent">
                Contact
              </a>
              <Button variant="outline" size="sm" className="w-full mt-4 flex items-center justify-center">
                Hire Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </header>
      <main className="flex-grow">
        <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("/hero-bg.jpg")' }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 px-4"
            >
              Welcome to PixelArt
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl mb-8 px-4"
            >
              Bringing your imagination to life, one pixel at a time.
            </motion.p>
            <Button variant="primary" size="lg" className="flex items-center justify-center">
              View Gallery
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
        <section id="gallery" className="py-16 bg-gray-850">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              Artwork Gallery
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {artworks.map((artwork) => (
                <motion.div
                  key={artwork.id}
                  className="relative group overflow-hidden rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="w-full h-full">
                        <img
                          src={artwork.src}
                          alt={artwork.title}
                          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white text-lg font-semibold">{artwork.title}</span>
                        </div>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>{artwork.title}</DialogTitle>
                        <DialogDescription>Explore the details of the artwork.</DialogDescription>
                      </DialogHeader>
                      <img src={artwork.src} alt={artwork.title} className="w-full h-auto rounded-lg mt-4" />
                      <div className="mt-4">
                        <Button variant="secondary" onClick={() => setSelectedArtwork(null)}>
                          Close
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section id="commission" className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-4xl font-bold text-center mb-12 text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              Commission an Artwork
            </motion.h2>
            <motion.form
              className="max-w-lg mx-auto bg-gray-700 p-6 sm:p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <Input type="text" placeholder="Your Name" required className="bg-gray-600 text-white" />
                <Input type="email" placeholder="Your Email" required className="bg-gray-600 text-white" />
                <Input type="text" placeholder="Subject" className="bg-gray-600 text-white" />
                <Textarea placeholder="Describe your commission idea" required className="bg-gray-600 text-white" />
                <Button type="submit" className="w-full">
                  Submit Inquiry
                </Button>
              </div>
            </motion.form>
          </div>
        </section>
        <section id="about" className="py-16 bg-gray-850">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-4xl font-bold text-center mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              About PixelArt
            </motion.h2>
            <motion.div
              className="max-w-2xl mx-auto text-center text-lg text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="mb-4">
                PixelArt is a digital artist specializing in creating vibrant and nostalgic pixel art. With a passion for
                retro gaming aesthetics and modern pixel art techniques, PixelArt brings imagination to life one pixel at
                a time.
              </p>
              <p>
                From character designs to expansive landscapes, each piece is crafted with attention to detail and a love
                for the art form. Commission PixelArt for your next project and add a touch of pixelated magic to your
                world.
              </p>
            </motion.div>
          </div>
        </section>
        <section id="testimonials" className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-4xl font-bold text-center mb-12 text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              Testimonials
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <p className="text-gray-300 mb-4">"PixelArt transformed my ideas into stunning visuals. Highly recommend!"</p>
                <p className="text-gray-400 text-right">- Alex Johnson</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <p className="text-gray-300 mb-4">"Exceptional attention to detail and creativity. Loved working with PixelArt."</p>
                <p className="text-gray-400 text-right">- Maria Lopez</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <p className="text-gray-300 mb-4">"Delivered exactly what I envisioned. The artwork was perfect!"</p>
                <p className="text-gray-400 text-right">- Sam Wilson</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="py-16 bg-gray-850">
          <div className="container mx-auto px-4 text-center space-y-6">
            <motion.h2
              className="text-4xl font-bold mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              Get in Touch
            </motion.h2>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <ArrowRight className="h-6 w-6 rotate-45" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <p className="text-center text-sm text-gray-400">
            © 2023 PixelArt. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <ArrowRight className="h-5 w-5 rotate-45" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

