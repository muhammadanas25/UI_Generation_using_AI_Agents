import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Headphones, Search, Menu } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Headphones className="h-6 w-6 text-primary" />
              <span className="text-2xl font-bold text-primary">IndieBeats</span>
            </div>
            <nav className="hidden md:flex space-x-4">
              <Link className="text-gray-600 dark:text-gray-300 hover:text-primary" href="#">
                Home
              </Link>
              <Link className="text-gray-600 dark:text-gray-300 hover:text-primary" href="#">
                Reviews
              </Link>
              <Link className="text-gray-600 dark:text-gray-300 hover:text-primary" href="#">
                Artists
              </Link>
              <Link className="text-gray-600 dark:text-gray-300 hover:text-primary" href="#">
                About
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <form className="hidden md:block">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <Input className="pl-8" placeholder="Search..." type="search" />
                </div>
              </form>
              <Button className="md:hidden" size="icon" variant="ghost">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3">
                <img
                  alt="Featured album cover"
                  className="h-full w-full object-cover"
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
                  <h2 className="text-2xl font-bold mb-2">New Release: "Echoes of Solitude"</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Dive into the haunting melodies of Sarah Blackwood's latest album, a journey through introspection and
                    rebirth.
                  </p>
                </div>
                <Button className="w-full">Read Review</Button>
              </div>
            </div>
          </Card>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-6">Latest Reviews</h2>
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
              <Card key={index}>
                <CardHeader>
                  <img
                    alt={`${review.title} album cover`}
                    className="w-full h-48 object-cover mb-4"
                    height="200"
                    src={review.image}
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
                  <CardTitle>{review.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{review.artist}</p>
                  <p className="mt-2">{review.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Read More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-white dark:bg-gray-800 shadow mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-lg font-semibold">Subscribe to our newsletter</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Stay updated with the latest indie music reviews</p>
            </div>
            <form className="flex w-full md:w-auto">
              <Input className="mr-2" placeholder="Your email" type="email" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
          <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
            © 2023 IndieBeats. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}