import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FilmFocusHomepage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/placeholder.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold mb-4">FilmFocus</h1>
          <p className="text-xl mb-8">Crafting Visual Stories</p>
          <Button className="bg-red-600 hover:bg-red-700">
            <Play className="mr-2 h-4 w-4" /> Watch Showreel
          </Button>
        </div>
      </section>

      {/* Filmography Section */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Filmography</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((film) => (
            <Card key={film} className="bg-gray-900 overflow-hidden">
              <Image
                src={`/placeholder.svg?text=Film+${film}`}
                alt={`Film ${film}`}
                width={300}
                height={450}
                className="w-full h-[450px] object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">Film Title {film}</h3>
                <p className="text-gray-400 mb-4">Year | Genre</p>
                <Button variant="outline" className="w-full">
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Behind-the-Scenes Section */}
      <section className="py-20 px-4 bg-gray-900">
        <h2 className="text-4xl font-bold mb-12 text-center">Behind the Scenes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((clip) => (
            <div key={clip} className="relative aspect-video">
              <Image
                src={`/placeholder.svg?text=BTS+Clip+${clip}`}
                alt={`Behind the Scenes Clip ${clip}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <Button
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-red-600 hover:bg-red-700"
                size="icon"
              >
                <Play className="h-8 w-8" />
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Director's Notes Section */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Director's Notes</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {[1, 2, 3].map((note) => (
            <Card key={note} className="bg-gray-900">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Thoughts on Filmmaking {note}</h3>
                <p className="text-gray-400 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Link href="#" className="text-red-500 hover:text-red-400">
                  Read More <ChevronRight className="inline h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">FilmFocus</h2>
            <p className="text-gray-400">Bringing stories to life through film</p>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline">Contact</Button>
            <Button variant="outline">IMDb Profile</Button>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} FilmFocus. All rights reserved.
        </div>
      </footer>
    </div>
  )
}