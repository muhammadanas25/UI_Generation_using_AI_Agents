"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Mic } from 'lucide-react'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Mic className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">VoiceVibes</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="#about" className="text-foreground/60 hover:text-foreground">
              About
            </Link>
            <Link href="#portfolio" className="text-foreground/60 hover:text-foreground">
              Portfolio
            </Link>
            <Link href="#services" className="text-foreground/60 hover:text-foreground">
              Services
            </Link>
            <Link href="#testimonials" className="text-foreground/60 hover:text-foreground">
              Testimonials
            </Link>
            <Link href="#contact" className="text-foreground/60 hover:text-foreground">
              Contact
            </Link>
          </nav>
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium"
            >
              Book a Session
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-foreground hover:text-foreground/80">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground/60 hover:text-foreground hover:bg-primary/10"
            >
              About
            </Link>
            <Link
              href="#portfolio"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground/60 hover:text-foreground hover:bg-primary/10"
            >
              Portfolio
            </Link>
            <Link
              href="#services"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground/60 hover:text-foreground hover:bg-primary/10"
            >
              Services
            </Link>
            <Link
              href="#testimonials"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground/60 hover:text-foreground hover:bg-primary/10"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground/60 hover:text-foreground hover:bg-primary/10"
            >
              Contact
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Book a Session
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}