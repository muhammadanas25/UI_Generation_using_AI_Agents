import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink, Sun, Moon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Component() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white dark:bg-gray-900 shadow-md fixed w-full z-10">
        <Link
          className="flex items-center justify-center text-blue-600 dark:text-blue-400"
          href="#"
        >
          <MountainIcon className="h-6 w-6 animate-bounce-slow" />
          <span className="ml-2 text-lg font-bold">DevExpert</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 transition"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 transition"
            href="#open-source"
          >
            Open Source
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 transition"
            href="#articles"
          >
            Articles
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 transition"
            href="#contact"
          >
            Contact
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="ml-2"
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </Button>
        </nav>
      </header>
      <main className="flex-1 pt-20">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center animate-fade-in">
              <div className="space-y-2">
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  DevExpert
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 text-lg md:text-xl">
                  Passionate software developer crafting innovative solutions and sharing
                  knowledge.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com/devexpert" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="transition-transform transform hover:scale-110">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/devexpert" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="transition-transform transform hover:scale-110">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:contact@devexpert.com">
                  <Button variant="outline" size="icon" className="transition-transform transform hover:scale-110">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center animate-slide-in">
              Featured Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="AI Task Manager"
                description="An intelligent task management app powered by machine learning."
                image="/ai-task-manager.png"
                link="https://github.com/devexpert/ai-task-manager"
              />
              <ProjectCard
                title="EcoTrack"
                description="A mobile app for tracking and reducing your carbon footprint."
                image="/eco-track.png"
                link="https://github.com/devexpert/ecotrack"
              />
              <ProjectCard
                title="CodeCollab"
                description="Real-time collaborative coding platform for remote teams."
                image="/code-collab.png"
                link="https://github.com/devexpert/codecollab"
              />
            </div>
          </div>
        </section>
        <section id="open-source" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center animate-slide-in">
              Open Source Contributions
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>React Hooks Library</CardTitle>
                  <CardDescription>A collection of custom React hooks for common use cases.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">500+ stars on GitHub</p>
                  <Link href="https://github.com/devexpert/react-hooks-library" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline mt-4">
                    View on GitHub
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>TypeScript Utilities</CardTitle>
                  <CardDescription>A set of TypeScript utility types and functions.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">300+ stars on GitHub</p>
                  <Link href="https://github.com/devexpert/typescript-utilities" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline mt-4">
                    View on GitHub
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>CSS-in-JS Framework</CardTitle>
                  <CardDescription>A lightweight CSS-in-JS solution for React applications.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">1000+ stars on GitHub</p>
                  <Link href="https://github.com/devexpert/css-in-js-framework" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline mt-4">
                    View on GitHub
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="articles" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center animate-slide-in">
              Latest Articles
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ArticleCard
                title="The Future of Web Development: What to Expect in 2024"
                description="Exploring upcoming trends and technologies in web development."
                date="March 15, 2024"
                link="https://devexpert.com/articles/future-of-web-development-2024"
              />
              <ArticleCard
                title="Mastering React Hooks: Advanced Patterns and Best Practices"
                description="Deep dive into complex use cases and optimizations for React Hooks."
                date="February 28, 2024"
                link="https://devexpert.com/articles/mastering-react-hooks"
              />
              <ArticleCard
                title="Building Scalable Microservices with Node.js and Kubernetes"
                description="A comprehensive guide to designing and deploying microservices."
                date="January 10, 2024"
                link="https://devexpert.com/articles/scalable-microservices-nodejs-kubernetes"
              />
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Testimonials</h2>
            <div className="flex flex-col md:flex-row md:justify-center md:space-x-6 space-y-6 md:space-y-0">
              <Card className="flex-1 hover:shadow-lg transition-shadow duration-300">
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    "DevExpert is an exceptional developer who consistently delivers high-quality work. Their expertise in React and backend technologies is unmatched."
                  </p>
                  <div className="mt-4 flex items-center">
                    <Image src="/testimonial1.jpg" alt="John Doe" width={40} height={40} className="rounded-full" />
                    <div className="ml-3">
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">CTO, TechCorp</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex-1 hover:shadow-lg transition-shadow duration-300">
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    "Working with DevExpert was a game-changer for our project. Their innovative solutions and proactive approach greatly enhanced our application's performance."
                  </p>
                  <div className="mt-4 flex items-center">
                    <Image src="/testimonial2.jpg" alt="Jane Smith" width={40} height={40} className="rounded-full" />
                    <div className="ml-3">
                      <p className="text-sm font-medium">Jane Smith</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Product Manager, InnovateX</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex-1 hover:shadow-lg transition-shadow duration-300">
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    "DevExpert's contributions to our open-source projects have been invaluable. Their commitment to quality and community is truly inspiring."
                  </p>
                  <div className="mt-4 flex items-center">
                    <Image src="/testimonial3.jpg" alt="Alice Johnson" width={40} height={40} className="rounded-full" />
                    <div className="ml-3">
                      <p className="text-sm font-medium">Alice Johnson</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Lead Developer, OpenSourceHub</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center animate-slide-in">
              Get in Touch
            </h2>
            <div className="flex flex-col items-center space-y-6 text-center">
              <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 text-lg md:text-xl">
                Have a project in mind or want to collaborate? Feel free to reach out!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="w-full sm:w-auto transition-transform transform hover:scale-105">
                  <Link href="mailto:contact@devexpert.com" className="flex items-center justify-center">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Me
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full sm:w-auto transition-transform transform hover:scale-105">
                  <Link href="https://calendly.com/devexpert" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    Schedule a Call
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 bg-white dark:bg-gray-900 shadow-t transition-colors duration-300">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 DevExpert. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 transition" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 transition" href="#">
            Privacy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 transition" href="#">
            GitHub
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function ProjectCard({ title, description, image, link }) {
  return (
    <Card className="hover:translate-y-2 transition-transform duration-300">
      <CardHeader className="flex flex-col items-center">
        <Image src={image} alt={title} width={200} height={150} className="rounded-lg object-cover mb-4" />
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-300">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline">
          View Project
          <ExternalLink className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}

function ArticleCard({ title, description, date, link }) {
  return (
    <Card className="hover:translate-y-2 transition-transform duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-300">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
        <Link href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline mt-2">
          Read More
          <ExternalLink className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="animate-spin-slow"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}