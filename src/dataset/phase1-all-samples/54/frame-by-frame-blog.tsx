import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Film, Clapperboard, BookOpen, Search, Menu, X } from 'lucide-react'
import { useState } from "react"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 md:p-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">FrameByFrame</h1>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative left-0 right-0 top-16 md:top-auto bg-gray-800 md:bg-transparent p-4 md:p-0 space-y-2 md:space-y-0 md:space-x-4`}>
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">Analysis</Button>
              <Button variant="ghost">Behind the Scenes</Button>
              <Button variant="ghost">Tips</Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8">
        <section className="mb-8 sm:mb-12">
          <Card className="bg-gray-800 text-white">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl">Featured Post</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">The Art of Visual Storytelling in 'Parasite'</h2>
              <p className="text-sm sm:text-base text-gray-300 mb-4">Dive deep into Bong Joon-ho's masterpiece and discover how each frame contributes to the narrative.</p>
              <Button>Read More</Button>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Recent Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
              <Card key={index} className="bg-gray-800 text-white">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">{post.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    <post.icon className="inline-block mr-2" size={16} />
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-gray-300">{post.content}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Read More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-6 sm:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="mb-4 sm:mb-0">&copy; 2023 FrameByFrame. All rights reserved.</p>
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <Input type="email" placeholder="Subscribe to our newsletter" className="w-full sm:w-auto bg-gray-800 text-white" />
              <Button className="w-full sm:w-auto">Subscribe</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

