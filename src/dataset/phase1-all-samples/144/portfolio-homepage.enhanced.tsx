import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Book, FileText, Mail, Menu, Newspaper, Sun, Moon, Linkedin, Twitter, Github } from 'lucide-react'

export default function Component() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <header className="sticky top-0 z-50 px-4 lg:px-6 py-4 flex items-center justify-between bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
          <Link className="flex items-center" href="#">
            <FileText className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            <span className="ml-2 text-lg font-semibold text-gray-800 dark:text-gray-200">Storyteller Ink</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200" href="#">
              Home
            </Link>
            <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200" href="#">
              Works
            </Link>
            <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200" href="#">
              About
            </Link>
            <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200" href="#">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle Dark Mode">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <div className="md:hidden">
              <Button variant="ghost" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
                <Menu className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </Button>
            </div>
          </div>
        </header>
        {menuOpen && (
          <nav className="md:hidden px-4 pb-4 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
            <Link className="block py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200" href="#">
              Home
            </Link>
            <Link className="block py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200" href="#">
              Works
            </Link>
            <Link className="block py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200" href="#">
              About
            </Link>
            <Link className="block py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200" href="#">
              Contact
            </Link>
          </nav>
        )}
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-500 to-purple-600">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white animate-fade-in">
                  Welcome to Storyteller Ink
                </h1>
                <p className="max-w-[700px] text-lg text-gray-100">
                  Crafting narratives that captivate, inspire, and endure. Explore my world of words.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button className="animate-slide-in">Explore My Works</Button>
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-indigo-600 transition-colors duration-200">
                    Contact Me
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8 md:mb-12">Featured Works</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="transition-transform transform hover:scale-105 hover:shadow-xl">
                  <CardHeader className="flex flex-col items-start">
                    <Newspaper className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-2" />
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Latest Article</h3>
                    <CardDescription className="text-gray-500 dark:text-gray-400">The Future of Storytelling in the Digital Age</CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-300">
                    <p>Exploring how technology is shaping the way we create and consume stories.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full mt-4 flex items-center justify-center">
                      Read Article
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="transition-transform transform hover:scale-105 hover:shadow-xl">
                  <CardHeader className="flex flex-col items-start">
                    <FileText className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-2" />
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Popular Blog Post</h3>
                    <CardDescription className="text-gray-500 dark:text-gray-400">5 Tips for Overcoming Writer's Block</CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-300">
                    <p>Practical advice for writers struggling to find inspiration and productivity.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full mt-4 flex items-center justify-center">
                      Read Post
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="transition-transform transform hover:scale-105 hover:shadow-xl">
                  <CardHeader className="flex flex-col items-start">
                    <Book className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-2" />
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Latest Book</h3>
                    <CardDescription className="text-gray-500 dark:text-gray-400">Echoes of Tomorrow: A Sci-Fi Odyssey</CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-300">
                    <p>A thrilling journey through time and space, exploring the human condition.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full mt-4 flex items-center justify-center">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
                <div className="flex flex-col items-start space-y-4">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200">About Me</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    I'm a passionate writer with over a decade of experience in crafting compelling narratives across various
                    mediums. From thought-provoking articles to immersive novels, my goal is to transport readers to new worlds
                    and perspectives.
                  </p>
                  <Button variant="ghost">Read My Story</Button>
                </div>
                <div className="flex flex-col items-start space-y-4">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200">My Mission</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    To create stories that resonate with readers, challenge perceptions, and leave a lasting impact. Through my
                    work, I aim to entertain, educate, and inspire, one word at a time.
                  </p>
                  <Button variant="ghost">Learn More</Button>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200">Get in Touch</h2>
                <p className="max-w-[700px] text-lg text-gray-600 dark:text-gray-400">
                  Have a question or want to collaborate? Feel free to reach out. I'd love to hear from you!
                </p>
                <div className="w-full max-w-md">
                  <form className="flex flex-col space-y-4">
                    <Input placeholder="Your name" type="text" className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200" />
                    <Input placeholder="Your email" type="email" className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200" />
                    <Textarea placeholder="Your message" className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200" />
                    <Button type="submit" className="flex items-center justify-center">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </div>
                <div className="flex space-x-4 mt-6">
                  <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                    <Linkedin className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                    <Twitter className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                    <Github className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="w-full py-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="container px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
            <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Storyteller Ink. All rights reserved.</p>
            <nav className="flex space-x-4">
              <Link className="text-xs text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200" href="#">
                Terms of Service
              </Link>
              <Link className="text-xs text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200" href="#">
                Privacy
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  )
}

