import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Film, Clapperboard, BookOpen, Search, Sun, Moon, Menu, X } from 'lucide-react'
import { useState } from "react"
import { motion } from "framer-motion"

export default function Component() {
  const [darkMode, setDarkMode] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-black text-white dark:bg-gray-900 transition-colors duration-500">
        <header className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 shadow-lg fixed w-full z-50">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">FrameByFrame</h1>
              <div className="flex items-center">
                <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors mr-2 sm:mr-4">
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <button className="md:hidden" onClick={toggleMenu}>
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
            <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row justify-between items-center mt-4 md:mt-0`}>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
                <Button variant="ghost" className="hover:text-yellow-400 transition-colors">Home</Button>
                <Button variant="ghost" className="hover:text-yellow-400 transition-colors">Analysis</Button>
                <Button variant="ghost" className="hover:text-yellow-400 transition-colors">Behind the Scenes</Button>
                <Button variant="ghost" className="hover:text-yellow-400 transition-colors">Tips</Button>
              </div>
              <div className="flex items-center w-full md:w-auto">
                <Input type="text" placeholder="Search posts..." className="mr-2 bg-gray-800 text-white w-full md:w-auto" />
                <Button className="bg-yellow-500 hover:bg-yellow-600 transition-colors">
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-20 sm:py-24">
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">Recent Posts</h2>
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
        </main>

        <footer className="bg-gray-900 text-gray-300 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="mb-4 sm:mb-0">&copy; 2023 FrameByFrame. All rights reserved.</p>
              <motion.div
                className="flex flex-col sm:flex-row items-center w-full sm:w-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Input type="email" placeholder="Subscribe to our newsletter" className="mb-2 sm:mb-0 sm:mr-2 bg-gray-800 text-white w-full sm:w-auto" />
                <Button className="bg-yellow-500 hover:bg-yellow-600 transition-colors w-full sm:w-auto">Subscribe</Button>
              </motion.div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

