'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Code, Laptop, Smartphone, Send, Sun, Moon, GitlabIcon as GitHub, LinkedinIcon as LinkedIn, Twitter, Menu, X } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

export default function Component() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
        <header className="px-4 lg:px-6 h-16 sm:h-20 flex items-center justify-between shadow-md bg-white dark:bg-gray-800 fixed w-full z-50 transition-colors duration-500">
          <Link className="flex items-center justify-center space-x-2" href="#">
            <Code className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-500" />
            <span className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">CodeCraft</span>
          </Link>
          <div className="flex items-center space-x-4">
            <nav className={`${isMenuOpen ? 'flex' : 'hidden'
              } absolute top-16 sm:top-20 left-0 right-0 flex-col items-center space-y-4 py-4 bg-white dark:bg-gray-800 shadow-md lg:shadow-none lg:flex lg:flex-row lg:relative lg:top-0 lg:space-y-0 lg:space-x-6 lg:py-0`}>
              <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition" href="#projects">
                Projects
              </Link>
              <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition" href="#skills">
                Skills
              </Link>
              <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition" href="#contact">
                Contact
              </Link>
            </nav>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-800" />}
            </button>
            <button
              className="lg:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </header>
        <main className="flex-1 pt-16 sm:pt-20">
          <section className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 py-16 sm:py-20 md:py-24 lg:py-32">
            <div className="container px-4 mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
                Welcome to CodeCraft
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-indigo-200">
                Full-stack developer specializing in web and mobile applications. Turning ideas into elegant,
                functional, and user-friendly solutions.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto flex items-center justify-center px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 transition">
                  View Projects
                  <Laptop className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="w-full sm:w-auto flex items-center justify-center px-6 py-3 text-white border-white hover:bg-white hover:text-indigo-600 transition">
                  Contact Me
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </section>
          <section id="projects" className="w-full py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
            <div className="container px-4 mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8 sm:mb-12">Projects</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="transform hover:scale-105 transition-transform shadow-lg">
                  <CardHeader className="flex flex-col items-center">
                    <Laptop className="w-12 h-12 text-indigo-500 mb-4" />
                    <CardTitle className="text-xl">E-commerce Platform</CardTitle>
                    <CardDescription className="text-sm text-gray-500 dark:text-gray-400">A full-featured online store built with React and Node.js</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Responsive design, secure payments, and inventory management system.
                    </p>
                    <div className="flex space-x-2">
                      <Link href="#" className="text-indigo-600 hover:text-indigo-800 dark:hover:text-indigo-400 transition">
                        Live Demo
                      </Link>
                      <Link href="#" className="text-indigo-600 hover:text-indigo-800 dark:hover:text-indigo-400 transition">
                        Source Code
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <Card className="transform hover:scale-105 transition-transform shadow-lg">
                  <CardHeader className="flex flex-col items-center">
                    <Smartphone className="w-12 h-12 text-indigo-500 mb-4" />
                    <CardTitle className="text-xl">Task Manager App</CardTitle>
                    <CardDescription className="text-sm text-gray-500 dark:text-gray-400">A mobile app for efficient task management</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Built with React Native, featuring push notifications and cloud sync.
                    </p>
                    <div className="flex space-x-2">
                      <Link href="#" className="text-indigo-600 hover:text-indigo-800 dark:hover:text-indigo-400 transition">
                        Download
                      </Link>
                      <Link href="#" className="text-indigo-600 hover:text-indigo-800 dark:hover:text-indigo-400 transition">
                        Source Code
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <Card className="transform hover:scale-105 transition-transform shadow-lg md:col-span-2 lg:col-span-1">
                  <CardHeader className="flex flex-col items-center">
                    <Code className="w-12 h-12 text-indigo-500 mb-4" />
                    <CardTitle className="text-xl">Blog CMS</CardTitle>
                    <CardDescription className="text-sm text-gray-500 dark:text-gray-400">A content management system for bloggers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Developed using Next.js and GraphQL, with a custom markdown editor.
                    </p>
                    <div className="flex space-x-2">
                      <Link href="#" className="text-indigo-600 hover:text-indigo-800 dark:hover:text-indigo-400 transition">
                        Live Demo
                      </Link>
                      <Link href="#" className="text-indigo-600 hover:text-indigo-800 dark:hover:text-indigo-400 transition">
                        Source Code
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section id="skills" className="w-full py-16 bg-white dark:bg-gray-900 transition-colors duration-500">
            <div className="container px-4 mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8 sm:mb-12">Skills</h2>
              <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                {["JavaScript", "React", "Node.js", "Python", "SQL", "MongoDB", "AWS", "Docker"].map((skill) => (
                  <div key={skill} className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-inner transition transform hover:scale-105">
                    <span className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-200">{skill}</span>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full mt-2">
                      <div className="bg-indigo-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section id="contact" className="w-full py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
            <div className="container px-4 mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8 sm:mb-12">Get in Touch</h2>
              <div className="max-w-lg mx-auto bg-white dark:bg-gray-700 p-6 sm:p-8 rounded-lg shadow-lg">
                <form className="space-y-4">
                  <Input type="text" placeholder="Your Name" className="w-full" />
                  <Input type="email" placeholder="Your Email" className="w-full" />
                  <Textarea placeholder="Your Message" className="w-full h-32" />
                  <Button className="w-full flex items-center justify-center bg-indigo-600 text-white hover:bg-indigo-700 transition">
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>
          </section>
        </main>
        <footer className="w-full py-6 bg-white dark:bg-gray-800 transition-colors duration-500">
          <div className="container px-4 mx-auto flex flex-col items-center space-y-4 sm:flex-row sm:justify-between">
            <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 CodeCraft. All rights reserved.</p>
            <nav className="flex flex-wrap justify-center space-x-4">
              <Link className="text-xs text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition" href="#">
                Terms of Service
              </Link>
              <Link className="text-xs text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition" href="#">
                Privacy
              </Link>
              <Link className="text-xs text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition" href="#" aria-label="GitHub">
                <GitHub className="h-4 w-4 inline" />
              </Link>
              <Link className="text-xs text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition" href="#" aria-label="LinkedIn">
                <LinkedIn className="h-4 w-4 inline" />
              </Link>
              <Link className="text-xs text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition" href="#" aria-label="Twitter">
                <Twitter className="h-4 w-4 inline" />
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  )
}

