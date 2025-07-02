import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GameController, Mail, Menu, Newspaper, Sun, Moon, Twitter, GitHub, LinkedIn } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export default function PixelForgePortfolio() {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div className={`${theme === "dark" ? "dark" : ""}`}>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between px-4 md:px-6">
            <div className="flex items-center">
              <Link className="flex items-center space-x-2" href="/">
                <GameController className="h-6 w-6 text-indigo-500" />
                <span className="font-bold text-xl text-gray-800 dark:text-gray-200">PixelForge</span>
              </Link>
              <nav className="hidden md:flex items-center space-x-6 ml-10 text-sm font-medium">
                <Link href="#games" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 transition-colors duration-300">Games</Link>
                <Link href="#devlogs" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 transition-colors duration-300">Dev Logs</Link>
                <Link href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 transition-colors duration-300">Contact</Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={toggleTheme} aria-label="Toggle Theme">
                {theme === "light" ? <Moon className="h-5 w-5 text-gray-800" /> : <Sun className="h-5 w-5 text-yellow-400" />}
              </Button>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </header>
        <main className="flex-1">
          <section className="w-full py-20 bg-gradient-to-r from-indigo-500 to-purple-600">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-6 text-center">
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                  Welcome to <span className="text-yellow-300">PixelForge</span>
                </h1>
                <p className="max-w-2xl text-lg text-gray-200 md:text-xl">
                  Crafting immersive gaming experiences, one pixel at a time.
                </p>
                <div className="flex space-x-4">
                  <Button className="animate-bounce">View Games</Button>
                  <Button variant="outline" className="hover:bg-indigo-700">
                    Contact Me
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section id="games" className="w-full py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">Featured Games</h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="transform hover:-translate-y-2 transition-transform duration-300">
                  <CardHeader>
                    <CardTitle>Pixel Quest</CardTitle>
                    <CardDescription>A retro-style RPG adventure</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative w-full h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/pixel-quest.jpg"
                        alt="Pixel Quest Demo"
                        layout="fill"
                        objectFit="cover"
                        className="transform hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <Button className="w-full mt-4 bg-indigo-500 hover:bg-indigo-600 transition-colors duration-300">
                      Play Demo
                    </Button>
                  </CardContent>
                </Card>
                <Card className="transform hover:-translate-y-2 transition-transform duration-300">
                  <CardHeader>
                    <CardTitle>Neon Racer</CardTitle>
                    <CardDescription>High-speed futuristic racing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative w-full h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/neon-racer.jpg"
                        alt="Neon Racer Trailer"
                        layout="fill"
                        objectFit="cover"
                        className="transform hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <Button className="w-full mt-4 bg-indigo-500 hover:bg-indigo-600 transition-colors duration-300">
                      Watch Trailer
                    </Button>
                  </CardContent>
                </Card>
                <Card className="transform hover:-translate-y-2 transition-transform duration-300">
                  <CardHeader>
                    <CardTitle>Cosmic Defenders</CardTitle>
                    <CardDescription>Multiplayer space strategy</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative w-full h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/cosmic-defenders.jpg"
                        alt="Cosmic Defenders Gameplay"
                        layout="fill"
                        objectFit="cover"
                        className="transform hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <Button className="w-full mt-4 bg-indigo-500 hover:bg-indigo-600 transition-colors duration-300">
                      View Gameplay
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section id="devlogs" className="w-full py-16">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">Development Logs</h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="transform hover:-translate-y-2 transition-transform duration-300">
                    <CardHeader>
                      <CardTitle>DevLog #{i}: Behind the Scenes</CardTitle>
                      <CardDescription>Posted on May {10 + i}, 2023</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        In this development log, we dive deep into the creation process of our latest game feature...
                      </p>
                      <Button variant="link" className="p-0 text-indigo-500 hover:underline">
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-12">
                <Button className="flex items-center justify-center mx-auto">
                  <Newspaper className="mr-2 h-4 w-4" /> View All Dev Logs
                </Button>
              </div>
            </div>
          </section>
          <section id="contact" className="w-full py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">Get in Touch</h2>
              <div className="mx-auto max-w-lg">
                <form className="space-y-6">
                  <div>
                    <Input type="text" placeholder="Your Name" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                  </div>
                  <div>
                    <Textarea placeholder="Your Message" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                  </div>
                  <Button className="w-full flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 transition-colors duration-300">
                    <Mail className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </div>
            </div>
          </section>
        </main>
        <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex items-center gap-2">
                <GameController className="h-6 w-6 text-indigo-500" />
                <span className="font-bold text-gray-800 dark:text-gray-200">PixelForge</span>
              </div>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                © 2023 PixelForge. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-500 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-300">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-300">
                  <GitHub className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-300">
                  <LinkedIn className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}