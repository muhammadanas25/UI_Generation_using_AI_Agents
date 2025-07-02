'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Book, FileText, Mail, Menu, Newspaper, X } from 'lucide-react'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">Storyteller Ink</span>
          <FileText className="h-6 w-6" />
          <span className="ml-2 text-lg font-semibold">Storyteller Ink</span>
        </Link>
        <nav className={`${isMenuOpen
            ? "absolute top-14 left-0 right-0 bg-background border-b"
            : "hidden"
          } md:relative md:ml-auto md:flex md:gap-4 lg:gap-6`}>
          <Link className="block py-2 md:py-0 text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="block py-2 md:py-0 text-sm font-medium hover:underline underline-offset-4" href="#">
            Works
          </Link>
          <Link className="block py-2 md:py-0 text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="block py-2 md:py-0 text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Storyteller Ink
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Crafting narratives that captivate, inspire, and endure. Explore my world of words.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button>Explore My Works</Button>
                <Button variant="outline">Contact Me</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 text-center">Featured Works</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Newspaper className="w-8 h-8 mb-2" />
                  <CardTitle>Latest Article</CardTitle>
                  <CardDescription>The Future of Storytelling in the Digital Age</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Exploring how technology is shaping the way we create and consume stories.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Read Article</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <FileText className="w-8 h-8 mb-2" />
                  <CardTitle>Popular Blog Post</CardTitle>
                  <CardDescription>5 Tips for Overcoming Writer's Block</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Practical advice for writers struggling to find inspiration and productivity.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Read Post</Button>
                </CardFooter>
              </Card>
              <Card className="sm:col-span-2 lg:col-span-1">
                <CardHeader>
                  <Book className="w-8 h-8 mb-2" />
                  <CardTitle>Latest Book</CardTitle>
                  <CardDescription>Echoes of Tomorrow: A Sci-Fi Odyssey</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>A thrilling journey through time and space, exploring the human condition.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Learn More</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">About Me</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  I'm a passionate writer with over a decade of experience in crafting compelling narratives across various
                  mediums. From thought-provoking articles to immersive novels, my goal is to transport readers to new worlds
                  and perspectives.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">My Mission</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  To create stories that resonate with readers, challenge perceptions, and leave a lasting impact. Through my
                  work, I aim to entertain, educate, and inspire, one word at a time.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Get in Touch</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Have a question or want to collaborate? Feel free to reach out. I'd love to hear from you!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <Input placeholder="Your name" type="text" />
                  <Input placeholder="Your email" type="email" />
                  <Textarea placeholder="Your message" />
                  <Button type="submit">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Storyteller Ink. All rights reserved.</p>
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

