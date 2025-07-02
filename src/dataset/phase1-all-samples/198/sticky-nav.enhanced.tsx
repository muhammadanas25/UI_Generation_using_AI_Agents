"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Mic, Sun, Moon } from 'lucide-react'
import { Button } from '@shadcn/ui/button'
import { Input } from '@shadcn/ui/input'
import { Tooltip } from '@shadcn/ui/tooltip'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState('light')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Mic className="h-6 w-6 text-white animate-pulse" />
              <span className="text-xl font-bold text-white">VoiceVibes</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="text-white hover:text-gray-300 transition duration-300">
              About
            </Link>
            <Link href="#portfolio" className="text-white hover:text-gray-300 transition duration-300">
              Portfolio
            </Link>
            <Link href="#services" className="text-white hover:text-gray-300 transition duration-300">
              Services
            </Link>
            <Link href="#testimonials" className="text-white hover:text-gray-300 transition duration-300">
              Testimonials
            </Link>
            <Link href="#contact" className="text-white hover:text-gray-300 transition duration-300">
              Contact
            </Link>
            <Input placeholder="Search..." className="hidden md:block" />
            <Tooltip content={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}>
              <Button variant="ghost" onClick={toggleTheme}>
                {theme === 'light' ? <Moon className="h-5 w-5 text-white" /> : <Sun className="h-5 w-5 text-yellow-300" />}
              </Button>
            </Tooltip>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="primary"
              asChild
              className="bg-white text-indigo-600 hover:bg-gray-100 transition duration-300"
            >
              <Link href="#contact">Book a Session</Link>
            </Button>
          </div>
          <div className="flex md:hidden items-center space-x-2">
            <Tooltip content={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}>
              <Button variant="ghost" onClick={toggleTheme}>
                {theme === 'light' ? <Moon className="h-5 w-5 text-white" /> : <Sun className="h-5 w-5 text-yellow-300" />}
              </Button>
            </Tooltip>
            <button onClick={toggleMenu} className="text-white hover:text-gray-300 transition duration-300">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden transition-max-height duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-indigo-700">
          <Link
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-600 transition duration-300"
          >
            About
          </Link>
          <Link
            href="#portfolio"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-600 transition duration-300"
          >
            Portfolio
          </Link>
          <Link
            href="#services"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-600 transition duration-300"
          >
            Services
          </Link>
          <Link
            href="#testimonials"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-600 transition duration-300"
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-600 transition duration-300"
          >
            Contact
          </Link>
          <Button
            variant="primary"
            asChild
            className="w-full bg-white text-indigo-600 hover:bg-gray-100 transition duration-300"
          >
            <Link href="#contact">Book a Session</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}