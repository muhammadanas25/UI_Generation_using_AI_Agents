import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/placeholder.svg?height=32&width=32"
            width={32}
            height={32}
            alt="ProtoLab logo"
            className="h-6 w-6"
          />
          <span className="sr-only">ProtoLab</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#case-studies">
            Case Studies
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#process">
            Process
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
                  Welcome to ProtoLab
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Crafting innovative product designs through prototypes, research, and user-centered approaches.
                </p>
              </div>
              <div className="space-x-4">
                <Button>
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">Contact Me</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <Image
                      src={`/placeholder.svg?height=200&width=400`}
                      width={400}
                      height={200}
                      alt={`Project ${i}`}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle>Project {i}</CardTitle>
                    <CardDescription>A brief description of the project and its key features.</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">View Details</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="case-studies" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Case Studies</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[1, 2].map((i) => (
                <Card key={i} className="flex flex-col md:flex-row overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=200&width=200`}
                    width={200}
                    height={200}
                    alt={`Case Study ${i}`}
                    className="w-full md:w-1/3 object-cover"
                  />
                  <div className="p-4 md:w-2/3">
                    <CardTitle>Case Study {i}</CardTitle>
                    <CardDescription>An in-depth look at the design process and outcomes.</CardDescription>
                    <Button className="mt-4" variant="outline">
                      Read More
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="process" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Design Process</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {["Research", "Ideation", "Prototyping", "Testing"].map((step, i) => (
                <Card key={i} className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                      {i + 1}
                    </div>
                    <CardTitle>{step}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Brief explanation of the {step.toLowerCase()} phase.</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Get in Touch</h2>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <Card className="w-full md:w-2/3">
                <CardHeader>
                  <CardTitle>Contact Form</CardTitle>
                  <CardDescription>Send me a message and I'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <div className="grid gap-2">
                      <label htmlFor="name">Name</label>
                      <input id="name" className="border rounded p-2" placeholder="Your name" />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="email">Email</label>
                      <input id="email" type="email" className="border rounded p-2" placeholder="Your email" />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="message">Message</label>
                      <textarea id="message" className="border rounded p-2" placeholder="Your message" rows={4} />
                    </div>
                    <Button type="submit">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
              <Card className="w-full md:w-1/3">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span>hello@protolab.design</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Github className="h-4 w-4" />
                      <Link href="#" className="hover:underline">
                        GitHub
                      </Link>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Linkedin className="h-4 w-4" />
                      <Link href="#" className="hover:underline">
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
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 ProtoLab. All rights reserved.</p>
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