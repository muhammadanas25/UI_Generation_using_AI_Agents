'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Mail, Phone, MapPin, Menu, X } from 'lucide-react'

export default function CineMagicHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-xl sm:text-2xl font-bold">CineMagic</a>
          <nav className="hidden md:flex space-x-6">
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#documentaries" className="hover:text-primary transition-colors">Documentaries</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button variant="outline" size="sm" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md">
            <nav className="flex flex-col items-center py-4 space-y-4">
              <a href="#projects" className="hover:text-primary transition-colors" onClick={toggleMenu}>Projects</a>
              <a href="#documentaries" className="hover:text-primary transition-colors" onClick={toggleMenu}>Documentaries</a>
              <a href="#testimonials" className="hover:text-primary transition-colors" onClick={toggleMenu}>Testimonials</a>
              <a href="#contact" className="hover:text-primary transition-colors" onClick={toggleMenu}>Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/placeholder.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">CineMagic</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">Bringing your stories to life through the lens</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            View Our Work
          </Button>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-16 sm:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3].map((project) => (
              <Card key={project} className="bg-gray-800 overflow-hidden">
                <div className="relative aspect-video">
                  <img
                    src={`/placeholder.svg?height=200&width=300`}
                    alt={`Project ${project}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity">
                    <Button variant="secondary" size="icon">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">Project Title {project}</h3>
                  <p className="text-sm sm:text-base text-gray-400">Short description of the project goes here.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documentary Clips */}
      <section id="documentaries" className="py-16 sm:py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">Documentary Clips</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {[1, 2].map((clip) => (
              <div key={clip} className="relative aspect-video">
                <img
                  src={`/placeholder.svg?height=300&width=500`}
                  alt={`Documentary Clip ${clip}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity rounded-lg">
                  <Button variant="secondary" size="icon">
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
                <h3 className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-lg sm:text-xl font-semibold">Documentary Title {clip}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section id="testimonials" className="py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">Client Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3].map((testimonial) => (
              <Card key={testimonial} className="bg-gray-800">
                <CardContent className="p-4 sm:p-6">
                  <p className="mb-4 italic text-sm sm:text-base">"CineMagic brought our vision to life in ways we never imagined. Their creativity and professionalism are unmatched."</p>
                  <div className="flex items-center">
                    <img
                      src={`/placeholder.svg?height=50&width=50`}
                      alt={`Client ${testimonial}`}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base">Client Name</h4>
                      <p className="text-xs sm:text-sm text-gray-400">Company {testimonial}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-center text-sm sm:text-base">
                  <Mail className="mr-2 h-5 w-5 flex-shrink-0" />
                  info@cinemagic.com
                </p>
                <p className="flex items-center text-sm sm:text-base">
                  <Phone className="mr-2 h-5 w-5 flex-shrink-0" />
                  +1 (123) 456-7890
                </p>
                <p className="flex items-center text-sm sm:text-base">
                  <MapPin className="mr-2 h-5 w-5 flex-shrink-0" />
                  123 Film Street, Hollywood, CA 90001
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Send us a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 bg-gray-800 rounded text-sm sm:text-base"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 bg-gray-800 rounded text-sm sm:text-base"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-2 bg-gray-800 rounded text-sm sm:text-base"
                ></textarea>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 sm:py-8">
        <div className="container mx-auto px-4 text-center text-sm sm:text-base">
          <p>&copy; 2024 CineMagic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

