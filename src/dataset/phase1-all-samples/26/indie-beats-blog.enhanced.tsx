import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Headphones, Search, Menu, Sun, Moon, GitHub, Twitter, Facebook } from "lucide-react"
import { Transition } from "@headlessui/react"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div className={isDarkMode ? "min-h-screen bg-gray-900 text-white" : "min-h-screen bg-gray-100 text-gray-900"}>
      <header className={isDarkMode ? "bg-gray-800 shadow" : "bg-white shadow"}>
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Headphones className="h-6 w-6 text-primary" />
            <span className="text-2xl font-bold text-primary">IndieBeats</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors" href="#">
              Home
            </Link>
            <Link className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors" href="#">
              Reviews
            </Link>
            <Link className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors" href="#">
              Artists
            </Link>
            <Link className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors" href="#">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <form className="hidden md:block">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input className="pl-8 focus:ring-primary focus:border-primary transition" placeholder="Search..." type="search" />
              </div>
            </form>
            <Button onClick={() => setIsDarkMode(!isDarkMode)} variant="ghost" size="icon" className="hidden md:flex">
              {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </Button>
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden" size="icon" variant="ghost">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        <Transition
          show={isMenuOpen}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-150"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className={isDarkMode ? "md:hidden bg-gray-800" : "md:hidden bg-white"}>
            <nav className="px-4 pt-2 pb-4 space-y-1">
              <Link className="block px-2 py-1 text-gray-600 dark:text-gray-300 hover:text-primary transition" href="#">
                Home
              </Link>
              <Link className="block px-2 py-1 text-gray-600 dark:text-gray-300 hover:text-primary transition" href="#">
                Reviews
              </Link>
              <Link className="block px-2 py-1 text-gray-600 dark:text-gray-300 hover:text-primary transition" href="#">
                Artists
              </Link>
              <Link className="block px-2 py-1 text-gray-600 dark:text-gray-300 hover:text-primary transition" href="#">
                About
              </Link>
              <Button onClick={() => setIsDarkMode(!isDarkMode)} variant="ghost" size="icon" className="mt-2">
                {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </nav>
          </div>
        </Transition>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <Card className="overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
            <div className="md:flex">
              <div className="md:w-2/3">
                <img
                  alt="Featured album cover"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                  height="400"
                  src="/placeholder.svg?height=400&width=600"
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width="600"
                />
              </div>
              <div className="md:w-1/3 p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-2 hover:text-primary transition-colors">New Release: "Echoes of Solitude"</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Dive into the haunting melodies of Sarah Blackwood's latest album, a journey through introspection and rebirth.
                  </p>
                </div>
                <Button className="w-full mt-4 hover:bg-primary-dark transition-colors">Read Review</Button>
              </div>
            </div>
          </Card>
        </section>
        <section>
          <h2 className="text-3xl font-bold mb-6">Latest Reviews</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Neon Dreams",
                artist: "The Midnight Riders",
                image: "/placeholder.svg?height=400&width=400",
                excerpt: "A synth-wave masterpiece that transports you to a neon-lit cityscape.",
              },
              {
                title: "Whispers in the Wind",
                artist: "Luna Skye",
                image: "/placeholder.svg?height=400&width=400",
                excerpt: "Folk-inspired melodies that speak to the soul and stir the heart.",
              },
              {
                title: "Digital Dystopia",
                artist: "Cyber Punk Collective",
                image: "/placeholder.svg?height=400&width=400",
                excerpt: "An electronic album that paints a vivid picture of a world on the brink.",
              },
            ].map((review, index) => (
              <Card key={index} className="shadow-lg transform hover:scale-105 transition-transform">
                <CardHeader>
                  <img
                    alt={`${review.title} album cover`}
                    className="w-full h-48 object-cover mb-4 transition-transform duration-300 hover:scale-110"
                    height="200"
                    src={review.image}
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
                  <CardTitle className="text-xl font-semibold">{review.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{review.artist}</p>
                  <p className="mt-2">{review.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full hover:bg-primary-dark transition-colors">Read More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Featured Artists</h2>
          <div className="flex overflow-x-auto space-x-6">
            {[
              {
                name: "Sarah Blackwood",
                image: "/artist1.svg",
              },
              {
                name: "The Midnight Riders",
                image: "/artist2.svg",
              },
              {
                name: "Luna Skye",
                image: "/artist3.svg",
              },
              {
                name: "Cyber Punk Collective",
                image: "/artist4.svg",
              },
            ].map((artist, index) => (
              <div key={index} className="flex-shrink-0 w-48 text-center">
                <Avatar className="mx-auto mb-2">
                  <AvatarImage src={artist.image} alt={artist.name} />
                  <AvatarFallback>{artist.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <p className="font-medium">{artist.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className={isDarkMode ? "bg-gray-800" : "bg-white"} className="bg-white dark:bg-gray-800 shadow mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-lg font-semibold">Subscribe to our newsletter</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Stay updated with the latest indie music reviews</p>
            </div>
            <form className="flex w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
              <Input className="mr-2" placeholder="Your email" type="email" required />
              <Button type="submit" className="hover:bg-primary-dark transition-colors">Subscribe</Button>
            </form>
          </div>
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition">
                <GitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
            <div className="text-center text-sm text-gray-600 dark:text-gray-300">
              © 2023 IndieBeats. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}