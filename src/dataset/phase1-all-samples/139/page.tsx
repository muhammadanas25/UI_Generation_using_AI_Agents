import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Briefcase, Mail, Menu, Palette } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex flex-col sm:flex-row items-center justify-between py-4 sm:py-0">
        <Link className="flex items-center justify-center mb-2 sm:mb-0" href="#">
          <Palette className="h-6 w-6" />
          <span className="ml-2 text-lg font-semibold">Alex Harper</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#philosophy">
            Philosophy
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
                  Alex Harper
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  UI/UX Designer crafting intuitive and beautiful digital experiences
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto">
                  <Link href="#contact">Get in touch</Link>
                </Button>
                <Button variant="outline" className="w-full sm:w-auto">
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center sm:text-left">Past Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>E-commerce Redesign</CardTitle>
                  <CardDescription>Improved user experience for an online store</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    alt="E-commerce project screenshot"
                    className="aspect-video overflow-hidden rounded-lg object-cover"
                    height="200"
                    src="/placeholder.svg"
                    width="400"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Health App UI</CardTitle>
                  <CardDescription>User-friendly interface for a health tracking app</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    alt="Health app project screenshot"
                    className="aspect-video overflow-hidden rounded-lg object-cover"
                    height="200"
                    src="/placeholder.svg"
                    width="400"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Financial Dashboard</CardTitle>
                  <CardDescription>Intuitive dashboard for personal finance management</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    alt="Financial dashboard project screenshot"
                    className="aspect-video overflow-hidden rounded-lg object-cover"
                    height="200"
                    src="/placeholder.svg"
                    width="400"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="philosophy" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center sm:text-left">Design Philosophy</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>User-Centered Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Putting the user's needs and experiences at the forefront of every design decision.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Simplicity and Clarity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Striving for clean, uncluttered designs that communicate clearly and effectively.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Accessibility for All</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Ensuring designs are inclusive and usable for people of all abilities and backgrounds.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center sm:text-left">Get in Touch</h2>
            <div className="mx-auto max-w-2xl">
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" type="email" />
                <Textarea placeholder="Your Message" />
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Alex Harper. All rights reserved.</p>
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

