import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowRight, Mail, Github, Linkedin, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function Component() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-shadow duration-300">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link className="flex items-center space-x-2" href="#">
            <Image
              src="/placeholder.svg?height=32&width=32"
              width={32}
              height={32}
              alt="ProtoLab logo"
              className="h-8 w-8 transition-transform duration-300 hover:scale-110"
            />
            <span className="text-xl font-bold text-gray-800 dark:text-gray-100">ProtoLab</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#projects">
              Projects
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#case-studies">
              Case Studies
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#process">
              Process
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#contact">
              Contact
            </Link>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setMenuOpen(true)}>
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </Button>
            <Dialog open={menuOpen} onOpenChange={setMenuOpen}>
              <DialogContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <Link className="flex items-center space-x-2" href="#">
                    <Image
                      src="/placeholder.svg?height=32&width=32"
                      width={32}
                      height={32}
                      alt="ProtoLab logo"
                      className="h-8 w-8"
                    />
                    <span className="text-xl font-bold text-gray-800 dark:text-gray-100">ProtoLab</span>
                  </Link>
                  <Button variant="ghost" onClick={() => setMenuOpen(false)}>
                    <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                  </Button>
                </div>
                <nav className="flex flex-col space-y-4">
                  <Link className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#projects" onClick={() => setMenuOpen(false)}>
                    Projects
                  </Link>
                  <Link className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#case-studies" onClick={() => setMenuOpen(false)}>
                    Case Studies
                  </Link>
                  <Link className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#process" onClick={() => setMenuOpen(false)}>
                    Process
                  </Link>
                  <Link className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#contact" onClick={() => setMenuOpen(false)}>
                    Contact
                  </Link>
                </nav>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>
      <main className="flex-1 pt-20">
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-3">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-800 dark:text-gray-100 sm:text-5xl md:text-6xl">
                  Welcome to ProtoLab
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
                  Crafting innovative product designs through prototypes, research, and user-centered approaches.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="flex items-center transition-transform hover:translate-x-1" variant="default">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button className="transition-transform hover:scale-105" variant="outline">
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100 mb-12 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="transform transition-transform hover:scale-105 hover:shadow-lg">
                  <CardHeader>
                    <Image
                      src={`/placeholder.svg?height=300&width=600`}
                      width={600}
                      height={300}
                      alt={`Project ${i}`}
                      className="w-full h-60 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">Project {i}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      A brief description of the project and its key features. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="secondary" className="flex items-center">
                      View Details
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="case-studies" className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100 mb-12 text-center">Case Studies</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="flex flex-col md:flex-row overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg">
                  <Image
                    src={`/placeholder.svg?height=300&width=300`}
                    width={300}
                    height={300}
                    alt={`Case Study ${i}`}
                    className="w-full md:w-1/2 h-60 object-cover"
                  />
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">Case Study {i}</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300">
                        An in-depth look at the design process and outcomes for Case Study {i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </CardDescription>
                    </div>
                    <Button variant="secondary" className="mt-4 self-start flex items-center">
                      Read More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="process" className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100 mb-12 text-center">Design Process</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {["Research", "Ideation", "Prototyping", "Testing"].map((step, i) => (
                <Card key={i} className="text-center p-6 transform transition-transform hover:scale-105 hover:shadow-lg">
                  <CardHeader className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full mb-4 shadow-lg transition-transform hover:rotate-12">
                      {i + 1}
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">{step}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      A brief explanation of the {step.toLowerCase()} phase. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100 mb-12 text-center">Get in Touch</h2>
            <div className="flex flex-col lg:flex-row gap-12 justify-center items-center">
              <Card className="w-full lg:w-2/3 p-6 shadow-lg transform transition-transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Contact Form</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Send me a message and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-6">
                    <div className="grid gap-2">
                      <label htmlFor="name" className="text-gray-700 dark:text-gray-200">Name</label>
                      <input id="name" className="border border-gray-300 dark:border-gray-700 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100" placeholder="Your name" required />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="email" className="text-gray-700 dark:text-gray-200">Email</label>
                      <input id="email" type="email" className="border border-gray-300 dark:border-gray-700 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100" placeholder="Your email" required />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="message" className="text-gray-700 dark:text-gray-200">Message</label>
                      <textarea id="message" className="border border-gray-300 dark:border-gray-700 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100" placeholder="Your message" rows={5} required />
                    </div>
                    <Button type="submit" className="self-start flex items-center">
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <Card className="w-full lg:w-1/3 p-6 shadow-lg transform transition-transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Mail className="h-6 w-6 text-blue-500" />
                      <span className="text-gray-700 dark:text-gray-200">hello@protolab.design</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Github className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                      <Link href="#" className="text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition">
                        GitHub
                      </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Linkedin className="h-6 w-6 text-blue-700" />
                      <Link href="#" className="text-blue-700 hover:underline underline-offset-4 transition">
                        LinkedIn
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col sm:flex-row justify-between items-center py-6 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <p className="text-sm text-gray-600 dark:text-gray-300">© 2024 ProtoLab. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
          <Link className="text-sm text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
            Terms of Service
          </Link>
          <Link className="text-sm text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}