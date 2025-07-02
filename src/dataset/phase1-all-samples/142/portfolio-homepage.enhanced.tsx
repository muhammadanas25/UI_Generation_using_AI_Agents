import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Code, Github, Linkedin, Mail, Twitter, Sun, Moon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Component() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between sticky top-0 bg-white dark:bg-gray-900 shadow-md z-50 transition-shadow duration-300">
        <Link className="flex items-center justify-center space-x-2" href="#">
          <Code className="h-8 w-8 text-blue-500 animate-pulse" />
          <span className="text-xl font-bold text-gray-800 dark:text-gray-100">Devon Code</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link className="text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition duration-200" href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition duration-200" href="#github">
            GitHub
          </Link>
          <Link className="text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition duration-200" href="#stack">
            Tech Stack
          </Link>
          <Link className="text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition duration-200" href="#contact">
            Contact
          </Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-800" />}
          </button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center animate-fadeIn">
              <div className="space-y-2">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-gray-800 dark:text-gray-100 transition-transform duration-500 transform hover:scale-105">
                  Devon Code
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl">
                  Software Engineer | Full Stack Developer | Open Source Enthusiast
                </p>
              </div>
              <div className="flex space-x-4">
                <Link href="#contact">
                  <Button className="flex items-center space-x-2 hover:bg-blue-600 transition-colors duration-200">
                    <Mail className="h-4 w-4" />
                    <span>Get in Touch</span>
                  </Button>
                </Link>
                <Link href="#projects">
                  <Button variant="outline" className="flex items-center space-x-2 hover:bg-transparent hover:border-blue-500 transition-colors duration-200">
                    <Code className="h-4 w-4" />
                    <span>View Projects</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-800 dark:text-gray-100">Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Project Alpha",
                  description: "A revolutionary app for task management",
                  img: "/project-alpha.jpg",
                  link: "#"
                },
                {
                  title: "Project Beta",
                  description: "An AI-powered code review assistant",
                  img: "/project-beta.jpg",
                  link: "#"
                },
                {
                  title: "Project Gamma",
                  description: "A blockchain-based voting system",
                  img: "/project-gamma.jpg",
                  link: "#"
                }
              ].map((project) => (
                <Card key={project.title} className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">{project.title}</CardTitle>
                    <CardDescription className="text-gray-500 dark:text-gray-400">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative h-48">
                    <Image
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-300 transform hover:scale-105"
                      fill
                      priority
                    />
                  </CardContent>
                  <CardFooter>
                    <Link href={project.link}>
                      <Button variant="outline" className="w-full flex items-center justify-center space-x-2 hover:bg-blue-500 hover:text-white transition-colors duration-200">
                        <Code className="h-4 w-4" />
                        <span>View Project</span>
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="github" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-800 dark:text-gray-100">GitHub Activity</h2>
            <div className="flex justify-center animate-pulse">
              <Image
                src="/github-contribution.svg"
                alt="GitHub contribution graph"
                width={600}
                height={300}
                className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-8 text-center">
              <Link href="https://github.com/devoncode">
                <Button className="flex items-center justify-center space-x-2 hover:bg-gray-800 dark:hover:bg-gray-200 hover:text-white dark:hover:text-gray-800 transition-colors duration-200">
                  <Github className="h-4 w-4" />
                  <span>View GitHub Profile</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section id="stack" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-800 dark:text-gray-100">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center animate-fadeIn">
              {["React", "Node.js", "TypeScript", "Python", "Docker", "AWS", "GraphQL", "MongoDB"].map((tech) => (
                <div key={tech} className="flex flex-col items-center space-y-2">
                  <div className="w-20 h-20 rounded-full bg-white dark:bg-gray-700 shadow-md flex items-center justify-center transition-transform duration-300 transform hover:scale-110">
                    <Image src={`/icons/${tech.toLowerCase()}.svg`} alt={tech} width={40} height={40} />
                  </div>
                  <span className="font-medium text-gray-700 dark:text-gray-300">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-800 dark:text-gray-100">Get in Touch</h2>
            <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg animate-slideIn">
              <form className="space-y-4">
                <Input type="text" placeholder="Your Name" className="w-full" />
                <Input type="email" placeholder="Your Email" className="w-full" />
                <Textarea placeholder="Your Message" className="w-full h-32" />
                <Button type="submit" className="w-full flex items-center justify-center space-x-2 hover:bg-blue-600 transition-colors duration-200">
                  <Mail className="h-4 w-4" />
                  <span>Send Message</span>
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50 dark:bg-gray-900">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Devon Code. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200" href="#">
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link className="text-xs text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200" href="#">
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link className="text-xs text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200" href="#">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </nav>
      </footer>
      <Link href="#" className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
        <span className="sr-only">Back to Top</span>
      </Link>
    </div>
  )
}