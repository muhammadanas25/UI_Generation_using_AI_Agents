'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { BookOpen, Feather, BookText, Twitter, Facebook, Instagram, Menu, X, Sun, Moon } from 'lucide-react'
import Image from "next/image"

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <div className={`${theme === "dark" ? "dark" : ""}`}>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
        <header className="border-b">
          <div className="container mx-auto px-4 py-4 sm:py-6 flex justify-between items-center">
            <h1 className="text-2xl sm:text-3xl font-bold">StoryTales</h1>
            <nav className="hidden lg:flex">
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:underline transition">Home</a></li>
                <li><a href="#" className="hover:underline transition">About</a></li>
                <li><a href="#" className="hover:underline transition">Books</a></li>
                <li><a href="#" className="hover:underline transition">Contact</a></li>
              </ul>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="w-9 h-9 rounded-full">
                {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </Button>
              <Button variant="ghost" size="icon" className="lg:hidden w-9 h-9 rounded-full" onClick={() => setMobileMenuOpen(true)}>
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Menu</DialogTitle>
              </DialogHeader>
              <nav className="mt-4">
                <ul className="flex flex-col space-y-2">
                  <li><a href="#" className="hover:underline transition" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
                  <li><a href="#" className="hover:underline transition" onClick={() => setMobileMenuOpen(false)}>About</a></li>
                  <li><a href="#" className="hover:underline transition" onClick={() => setMobileMenuOpen(false)}>Books</a></li>
                  <li><a href="#" className="hover:underline transition" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
                </ul>
              </nav>
            </DialogContent>
          </Dialog>
        </header>

        <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3 space-y-8">
            <section className="relative bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg overflow-hidden shadow-lg h-[300px] sm:h-[400px]">
              <Image src="/placeholder.svg?height=400&width=800" alt="Hero" layout="fill" objectFit="cover" className="opacity-30" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Welcome to StoryTales</h2>
                <p className="text-base sm:text-lg">Dive into the world of stories, tips, and literary insights.</p>
                <Button className="mt-6 animate-bounce">Get Started</Button>
              </div>
            </section>

            <Card className="hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Featured Excerpt</CardTitle>
                <CardDescription>From "The Whispers of Autumn"</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="italic">
                  "The leaves rustled beneath her feet, each step a whisper of memories long forgotten. Sarah paused, her hand resting on the rough bark of an ancient oak. In that moment, she could almost hear the stories it held, tales of love and loss etched into its very core..."
                </p>
                <Button className="mt-4 transition transform hover:scale-105">Read More</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Feather className="mr-2" />
                  Writing Tip of the Day
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Show, Don't Tell</h3>
                <p>Instead of simply stating emotions, try to describe them through actions and sensory details. This brings your characters to life and immerses readers in the story.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookText className="mr-2" />
                  Literary Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Symbolism in "To Kill a Mockingbird"</h3>
                <p>Harper Lee's use of the mockingbird as a symbol of innocence and harmlessness is central to the novel's themes of injustice and the loss of childhood innocence...</p>
                <Button variant="outline" className="mt-4 transition transform hover:scale-105">Read Full Analysis</Button>
              </CardContent>
            </Card>
          </div>

          <aside className="lg:w-1/3 space-y-8">
            <Card className="hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle>About the Author</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Image src="/placeholder.svg?height=150&width=150" alt="Author" width={150} height={150} className="rounded-full mx-auto mb-4" />
                <p>Jane Doe is an award-winning author of contemporary fiction. With a passion for storytelling and a keen eye for human nature, Jane weaves tales that touch the heart and stir the soul.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Subscribe to Newsletter</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input type="email" placeholder="Enter your email" required className="focus:ring-primary focus:border-primary" />
                  <Button className="w-full transition transform hover:scale-105">Subscribe</Button>
                </form>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-primary hover:text-primary-foreground transition transform hover:scale-110"><Twitter className="w-6 h-6" /></a>
                  <a href="#" className="text-primary hover:text-primary-foreground transition transform hover:scale-110"><Facebook className="w-6 h-6" /></a>
                  <a href="#" className="text-primary hover:text-primary-foreground transition transform hover:scale-110"><Instagram className="w-6 h-6" /></a>
                </div>
              </CardContent>
            </Card>
          </aside>
        </main>

        <footer className="border-t mt-8">
          <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} StoryTales by Jane Doe. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  )
}

