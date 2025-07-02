import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Code, Laptop, Smartphone, Send, Menu } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Code className="h-6 w-6" />
          <span className="sr-only">CodeCraft</span>
        </Link>
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex absolute lg:relative top-14 left-0 right-0 bg-white dark:bg-gray-800 lg:bg-transparent flex-col lg:flex-row gap-4 p-4 lg:p-0 lg:top-0 shadow-md lg:shadow-none`}>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#skills">
            Skills
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to CodeCraft
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Full-stack developer specializing in web and mobile applications. Turning ideas into elegant,
                  functional, and user-friendly solutions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto">View Projects</Button>
                <Button variant="outline" className="w-full sm:w-auto">Contact Me</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>E-commerce Platform</CardTitle>
                  <CardDescription>A full-featured online store built with React and Node.js</CardDescription>
                </CardHeader>
                <CardContent>
                  <Laptop className="w-12 h-12 mb-4" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Responsive design, secure payments, and inventory management system.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Task Manager App</CardTitle>
                  <CardDescription>A mobile app for efficient task management</CardDescription>
                </CardHeader>
                <CardContent>
                  <Smartphone className="w-12 h-12 mb-4" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Built with React Native, featuring push notifications and cloud sync.
                  </p>
                </CardContent>
              </Card>
              <Card className="md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle>Blog CMS</CardTitle>
                  <CardDescription>A content management system for bloggers</CardDescription>
                </CardHeader>
                <CardContent>
                  <Code className="w-12 h-12 mb-4" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Developed using Next.js and GraphQL, with a custom markdown editor.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Skills</h2>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              {["JavaScript", "React", "Node.js", "Python", "SQL", "MongoDB", "AWS", "Docker"].map((skill) => (
                <div key={skill} className="flex items-center justify-center p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Get in Touch</h2>
            <div className="max-w-md mx-auto space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" />
              <Button className="w-full">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 CodeCraft. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

