import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Code, Github, Linkedin, Mail, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Code className="h-6 w-6" />
          <span className="sr-only">Devon Code</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#github">
            GitHub
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#stack">
            Tech Stack
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
                  Devon Code
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Software Engineer | Full Stack Developer | Open Source Enthusiast
                </p>
              </div>
              <div className="space-x-4">
                <Link href="#contact">
                  <Button>Get in touch</Button>
                </Link>
                <Link href="#projects">
                  <Button variant="outline">View Projects</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Project Alpha</CardTitle>
                  <CardDescription>A revolutionary app for task management</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=100&width=200"
                    alt="Project Alpha"
                    className="w-full h-[200px] object-cover"
                    width={200}
                    height={100}
                  />
                </CardContent>
                <CardFooter>
                  <Button variant="outline">View Project</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project Beta</CardTitle>
                  <CardDescription>An AI-powered code review assistant</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=100&width=200"
                    alt="Project Beta"
                    className="w-full h-[200px] object-cover"
                    width={200}
                    height={100}
                  />
                </CardContent>
                <CardFooter>
                  <Button variant="outline">View Project</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project Gamma</CardTitle>
                  <CardDescription>A blockchain-based voting system</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=100&width=200"
                    alt="Project Gamma"
                    className="w-full h-[200px] object-cover"
                    width={200}
                    height={100}
                  />
                </CardContent>
                <CardFooter>
                  <Button variant="outline">View Project</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section id="github" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">GitHub Activity</h2>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="GitHub contribution graph"
                width={600}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="mt-8 text-center">
              <Link href="https://github.com/devoncode">
                <Button>
                  <Github className="mr-2 h-4 w-4" />
                  View GitHub Profile
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section id="stack" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
              {["React", "Node.js", "TypeScript", "Python", "Docker", "AWS", "GraphQL", "MongoDB"].map((tech) => (
                <div key={tech} className="flex flex-col items-center space-y-2">
                  <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center">
                    <Image src={`/placeholder.svg?height=40&width=40`} alt={tech} width={40} height={40} />
                  </div>
                  <span className="font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Get in Touch</h2>
            <div className="max-w-md mx-auto space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" />
              <Button className="w-full">Send Message</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Devon Code. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </nav>
      </footer>
    </div>
  )
}