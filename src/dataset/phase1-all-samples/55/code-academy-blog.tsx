import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Film, Clapperboard, BookOpen, Search, Sun, Moon, Menu, X, Code } from 'lucide-react'
import { useState } from "react"
import { motion } from "framer-motion"
import Link from 'next/link';

export default function Component() {
  const [darkMode, setDarkMode] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-black text-white dark:bg-gray-900 transition-colors duration-500">
        <header className="sticky top-0 z-10 bg-background border-b">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span className="text-xl font-bold">CodeAcademy</span>
            </Link>
            <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 bg-background md:bg-transparent p-4 md:p-0 space-y-2 md:space-y-0 md:space-x-4`}>
              <Link href="/tutorials" className="text-sm font-medium hover:underline">
                Tutorials
              </Link>
              <Link href="/challenges" className="text-sm font-medium hover:underline">
                Challenges
              </Link>
              <Link href="/tips" className="text-sm font-medium hover:underline">
                Tips
              </Link>
              <Link href="/about" className="text-sm font-medium hover:underline">
                About
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <form className="hidden lg:block">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    className="pl-8 pr-4"
                    placeholder="Search articles..."
                    type="search"
                  />
                </div>
              </form>
              <Button className="hidden md:inline-flex">Subscribe</Button>
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <section className="mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Card className="bg-gray-800 text-white hover:scale-105 transform transition-transform duration-300">
                    <CardHeader className="relative">
                      <img src="/featured.jpg" alt="Featured Post" className="w-full h-48 sm:h-64 object-cover rounded-t-lg" />
                      <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-4 rounded-b-lg">
                        <CardTitle className="text-xl sm:text-2xl md:text-3xl">Featured Post</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">The Art of Visual Storytelling in 'Parasite'</h2>
                      <p className="text-sm sm:text-base text-gray-300 mb-4">Dive deep into Bong Joon-ho's masterpiece and discover how each frame contributes to the narrative.</p>
                      <Button className="bg-yellow-500 hover:bg-yellow-600 transition-colors w-full sm:w-auto">Read More</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Latest Articles</h2>
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    {
                      title: "Lighting Techniques for Low-Budget Films",
                      description: "Production Tips",
                      icon: Film,
                      content: "Learn how to achieve stunning visuals with limited resources."
                    },
                    {
                      title: "Behind the Scenes: 'Inception' Dream Sequences",
                      description: "Behind the Scenes",
                      icon: Clapperboard,
                      content: "Explore the intricate planning and execution of Nolan's mind-bending scenes."
                    },
                    {
                      title: "Character Development in 'The Godfather' Trilogy",
                      description: "Film Analysis",
                      icon: BookOpen,
                      content: "A deep dive into the evolution of Michael Corleone across three films."
                    }
                  ].map((post, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 50 },
                      }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <Card className="bg-gray-800 text-white hover:shadow-xl transform transition-shadow duration-300">
                        <CardHeader>
                          <CardTitle className="text-lg sm:text-xl">{post.title}</CardTitle>
                          <CardDescription className="text-gray-400 flex items-center">
                            <post.icon className="inline-block mr-2" size={16} />
                            {post.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-xs sm:text-sm text-gray-300">{post.content}</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors w-full sm:w-auto">
                            Read More
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </section>
            </div>
            <aside className="space-y-8">
              {/* Categories and Newsletter cards remain unchanged */}
            </aside>
          </div>
        </main>

        <footer className="bg-muted mt-8">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2">
                <Code className="h-6 w-6" />
                <span className="text-xl font-bold">CodeAcademy</span>
              </div>
              <nav className="flex flex-wrap justify-center space-x-4">
                <Link href="/about" className="text-sm hover:underline">
                  About
                </Link>
                <Link href="/contact" className="text-sm hover:underline">
                  Contact
                </Link>
                <Link href="/privacy" className="text-sm hover:underline">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm hover:underline">
                  Terms of Service
                </Link>
              </nav>
              <div className="flex space-x-4">
                {/* Social media links remain unchanged */}
              </div>
            </div>
            <div className="mt-8 text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} CodeAcademy. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

