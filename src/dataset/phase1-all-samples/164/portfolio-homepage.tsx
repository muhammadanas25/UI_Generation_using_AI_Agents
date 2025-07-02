import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">DevExpert</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#open-source">
            Open Source
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#articles">
            Articles
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
                  DevExpert
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Passionate software developer crafting innovative solutions and sharing knowledge.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com/devexpert" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/devexpert" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:contact@devexpert.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Featured Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="AI Task Manager"
                description="An intelligent task management app powered by machine learning."
                image="/placeholder.svg?height=100&width=100"
                link="#"
              />
              <ProjectCard
                title="EcoTrack"
                description="A mobile app for tracking and reducing your carbon footprint."
                image="/placeholder.svg?height=100&width=100"
                link="#"
              />
              <ProjectCard
                title="CodeCollab"
                description="Real-time collaborative coding platform for remote teams."
                image="/placeholder.svg?height=100&width=100"
                link="#"
              />
            </div>
          </div>
        </section>
        <section id="open-source" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Open Source Contributions</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>React Hooks Library</CardTitle>
                  <CardDescription>A collection of custom React hooks for common use cases.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">500+ stars on GitHub</p>
                  <Link href="#" className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline mt-2">
                    View on GitHub
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>TypeScript Utilities</CardTitle>
                  <CardDescription>A set of TypeScript utility types and functions.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">300+ stars on GitHub</p>
                  <Link href="#" className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline mt-2">
                    View on GitHub
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>CSS-in-JS Framework</CardTitle>
                  <CardDescription>A lightweight CSS-in-JS solution for React applications.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">1000+ stars on GitHub</p>
                  <Link href="#" className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline mt-2">
                    View on GitHub
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="articles" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Latest Articles</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ArticleCard
                title="The Future of Web Development: What to Expect in 2024"
                description="Exploring upcoming trends and technologies in web development."
                date="March 15, 2024"
                link="#"
              />
              <ArticleCard
                title="Mastering React Hooks: Advanced Patterns and Best Practices"
                description="Deep dive into complex use cases and optimizations for React Hooks."
                date="February 28, 2024"
                link="#"
              />
              <ArticleCard
                title="Building Scalable Microservices with Node.js and Kubernetes"
                description="A comprehensive guide to designing and deploying microservices."
                date="January 10, 2024"
                link="#"
              />
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Get in Touch</h2>
            <div className="flex flex-col items-center space-y-4 text-center">
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Have a project in mind or want to collaborate? Feel free to reach out!
              </p>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="mailto:contact@devexpert.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Me
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://calendly.com/devexpert" target="_blank" rel="noopener noreferrer">
                    Schedule a Call
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 DevExpert. All rights reserved.</p>
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

function ProjectCard({ title, description, image, link }) {
  return (
    <Card>
      <CardHeader>
        <Image src={image} alt={title} width={100} height={100} className="rounded-lg object-cover" />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={link} className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline">
          View Project
          <ExternalLink className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}

function ArticleCard({ title, description, date, link }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
        <Link href={link} className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline mt-2">
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
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}