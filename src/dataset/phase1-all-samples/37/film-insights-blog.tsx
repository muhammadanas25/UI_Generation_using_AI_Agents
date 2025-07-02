import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Film, Search, User, Menu, X } from 'lucide-react'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Film className="h-6 w-6 text-blue-500" />
            <span className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">FilmInsights</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Home</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Film Theory</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Director Analysis</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Reviews</a>
          </nav>
          <div className="flex items-center space-x-2 md:space-x-4">
            <Input className="hidden md:block w-auto" placeholder="Search articles..." />
            <Button size="icon" variant="ghost">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
            <Button size="icon" variant="ghost">
              <User className="h-4 w-4" />
              <span className="sr-only">User account</span>
            </Button>
            <Button size="icon" variant="ghost" className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white dark:bg-gray-800 px-4 py-2 border-t border-gray-200 dark:border-gray-700">
            <a href="#" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500">Home</a>
            <a href="#" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500">Film Theory</a>
            <a href="#" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500">Director Analysis</a>
            <a href="#" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500">Reviews</a>
            <Input className="mt-2 w-full" placeholder="Search articles..." />
          </nav>
        )}
      </header>
      <main className="container mx-auto px-4 py-6 md:py-8">
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img
            alt="The Grand Budapest Hotel movie still"
            className="w-full h-48 md:h-64 object-cover"
            height="400"
            src="/placeholder.svg?height=400&width=800"
            style={{
              aspectRatio: "800/400",
              objectFit: "cover",
            }}
            width="800"
          />
          <div className="p-4 md:p-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4">
              The Whimsical World of Wes Anderson: A Deep Dive into "The Grand Budapest Hotel"
            </h1>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
              By Emma Thompson | Published on August 15, 2023
            </p>
            <div className="prose dark:prose-invert max-w-none text-sm md:text-base">
              <h2 className="text-xl md:text-2xl font-semibold mt-4 mb-2">Film Theory: Symmetry and Color in Anderson's Cinematic Language</h2>
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
              <h2 className="text-xl md:text-2xl font-semibold mt-4 mb-2">Director Analysis: Wes Anderson's Evolving Auteur Style</h2>
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
              <h2 className="text-xl md:text-2xl font-semibold mt-4 mb-2">In-Depth Review: A Masterpiece of Storytelling and Visual Artistry</h2>
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
      </main>
      <footer className="bg-white dark:bg-gray-800 shadow mt-6 md:mt-8">
        <div className="container mx-auto px-4 py-4 md:py-6 text-center text-sm md:text-base text-gray-600 dark:text-gray-300">
          © 2023 FilmInsights. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

