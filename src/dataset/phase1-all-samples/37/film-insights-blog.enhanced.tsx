import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Film, Search, User, Menu, X, Sun, Moon } from 'lucide-react'
import { Dialog, DialogContent } from "@/components/ui/dialog"
import Link from "next/link"

export default function Component() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString())
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <header className="bg-white dark:bg-gray-800 shadow fixed w-full z-10">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Film className="h-6 w-6 text-blue-500" />
              <span className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">FilmInsights</span>
            </div>
            <nav className="hidden md:flex space-x-4 lg:space-x-6">
              <Link href="#" className="text-sm lg:text-base text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200">Home</Link>
              <Link href="#" className="text-sm lg:text-base text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200">Film Theory</Link>
              <Link href="#" className="text-sm lg:text-base text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200">Director Analysis</Link>
              <Link href="#" className="text-sm lg:text-base text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200">Reviews</Link>
            </nav>
            <div className="flex items-center space-x-2 md:space-x-4">
              <Input className="hidden md:block w-32 lg:w-auto transition duration-200" placeholder="Search articles..." />
              <Button size="icon" variant="ghost" aria-label="Search">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
              <Button size="icon" variant="ghost" aria-label="User account">
                <User className="h-4 w-4" />
                <span className="sr-only">User account</span>
              </Button>
              <Button size="icon" variant="ghost" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle Dark Mode">
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button size="icon" variant="ghost" className="md:hidden" onClick={() => setMenuOpen(true)} aria-label="Menu">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </div>
          </div>
        </header>
        <Dialog open={menuOpen} onOpenChange={setMenuOpen}>
          <DialogContent className="fixed inset-0 bg-white dark:bg-gray-800 p-6 flex flex-col space-y-4">
            <Button size="icon" variant="ghost" onClick={() => setMenuOpen(false)} aria-label="Close menu" className="self-end">
              <X className="h-6 w-6" />
            </Button>
            <nav className="flex flex-col space-y-4">
              <Link href="#" className="text-lg text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="#" className="text-lg text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Film Theory</Link>
              <Link href="#" className="text-lg text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Director Analysis</Link>
              <Link href="#" className="text-lg text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Reviews</Link>
            </nav>
            <Input className="mt-4" placeholder="Search articles..." />
          </DialogContent>
        </Dialog>
        <main className="pt-16 md:pt-20 container mx-auto px-4 py-8">
          <section className="mb-8 md:mb-12">
            <div className="relative">
              <img
                src="/hero-image.jpg"
                alt="Film Insights Hero"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h1 className="text-2xl md:text-4xl font-bold text-white text-center px-4">Welcome to FilmInsights</h1>
              </div>
            </div>
          </section>
          <section className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "The Whimsical World of Wes Anderson",
                author: "Emma Thompson",
                date: "August 15, 2023",
                description: "Dive deep into the unique film theory and directorial style that make Wes Anderson's \"The Grand Budapest Hotel\" a masterpiece.",
                image: "/placeholder.svg?height=400&width=800"
              },
              {
                title: "Christopher Nolan: Master of Mind-Bending Narratives",
                author: "John Doe",
                date: "September 10, 2023",
                description: "An in-depth review of Christopher Nolan's techniques in creating complex and engaging storylines.",
                image: "/inception.jpg"
              },
              {
                title: "Exploring Space and Time in Interstellar",
                author: "Jane Smith",
                date: "October 5, 2023",
                description: "A comprehensive analysis of the scientific and emotional layers in \"Interstellar.\"",
                image: "/interstellar.jpg"
              }
            ].map((article, index) => (
              <article key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <img
                  alt={article.title}
                  className="w-full h-48 object-cover"
                  src={article.image}
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{article.title}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">By {article.author} | {article.date}</p>
                  <p className="text-gray-700 dark:text-gray-400 mb-4">
                    {article.description}
                  </p>
                  <Button variant="primary" className="mt-auto w-full sm:w-auto">Read More</Button>
                </div>
              </article>
            ))}
          </section>
          <section className="mt-8 md:mt-12">
            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden animate-fadeIn">
              <img
                alt="The Grand Budapest Hotel movie still"
                className="w-full h-48 md:h-64 object-cover"
                src="/placeholder.svg?height=400&width=800"
              />
              <div className="p-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  The Whimsical World of Wes Anderson: A Deep Dive into "The Grand Budapest Hotel"
                </h1>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
                  By Emma Thompson | Published on August 15, 2023
                </p>
                <div className="prose dark:prose-invert max-w-none text-sm md:text-base">
                  <h2 className="text-xl md:text-2xl">Film Theory: Symmetry and Color in Anderson's Cinematic Language</h2>
                  <p>
                    Wes Anderson's distinctive visual style is on full display in "The Grand Budapest Hotel," where symmetry
                    and color play crucial roles in storytelling. Anderson's meticulous framing creates a sense of order
                    amidst chaos, reflecting the film's themes of nostalgia and the fading grandeur of a bygone era.
                  </p>
                  <p>
                    The color palette, dominated by pastel pinks and purples, evokes a storybook quality that enhances the
                    film's fairy-tale-like narrative. This use of color not only pleases the eye but also serves to
                    underscore the contrast between the whimsical surface and the darker undercurrents of the story.
                  </p>
                  <h2 className="text-xl md:text-2xl">Director Analysis: Wes Anderson's Evolving Auteur Style</h2>
                  <p>
                    "The Grand Budapest Hotel" represents a culmination of Wes Anderson's auteur style. His signature
                    techniques—including centered compositions, tracking shots, and miniatures—are refined to perfection
                    here. Anderson's attention to detail extends beyond the visual realm to the intricate plot structure and
                    the rhythmic dialogue delivery that has become his hallmark.
                  </p>
                  <p>
                    This film also showcases Anderson's ability to balance humor and melancholy, creating a bittersweet tone
                    that resonates throughout. His direction guides the viewer through multiple time periods with ease,
                    demonstrating his growth as a storyteller.
                  </p>
                  <h2 className="text-xl md:text-2xl">In-Depth Review: A Masterpiece of Storytelling and Visual Artistry</h2>
                  <p>
                    "The Grand Budapest Hotel" is a tour de force of filmmaking that seamlessly blends comedy, drama, and
                    adventure. The nested narrative structure, with its stories within stories, adds depth and complexity to
                    the film, inviting multiple viewings to fully appreciate its intricacies.
                  </p>
                  <p>
                    Ralph Fiennes delivers a career-defining performance as Monsieur Gustave, bringing charm, wit, and
                    vulnerability to the eccentric concierge. The ensemble cast, featuring Anderson regulars and newcomers
                    alike, creates a rich tapestry of characters that populate the meticulously crafted world of the film.
                  </p>
                  <p>
                    Ultimately, "The Grand Budapest Hotel" is not just a visual feast but a profound meditation on memory,
                    loyalty, and the power of storytelling itself. It stands as one of Anderson's finest works and a
                    high-water mark in contemporary cinema.
                  </p>
                </div>
              </div>
            </article>
          </section>
        </main>
        <footer className="bg-white dark:bg-gray-800 shadow mt-8">
          <div className="container mx-auto px-4 py-6 text-center text-sm md:text-base text-gray-600 dark:text-gray-300">
            © 2023 FilmInsights. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  )
}

