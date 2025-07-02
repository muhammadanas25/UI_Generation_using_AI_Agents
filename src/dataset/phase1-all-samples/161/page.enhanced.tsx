import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Play, ChevronRight, Instagram, Facebook, Twitter, Menu } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function RhythmMovesPortfolio() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-gradient-to-r from-purple-600 to-pink-600 shadow-md">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">RhythmMoves</span>
          <span className="h-8 w-8 text-3xl animate-bounce">💃</span>
          <span className="ml-3 text-2xl font-extrabold text-white">RhythmMoves</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link className="text-sm font-medium text-white hover:underline underline-offset-4 transition" href="#videos">
            Videos
          </Link>
          <Link className="text-sm font-medium text-white hover:underline underline-offset-4 transition" href="#choreography">
            Choreography
          </Link>
          <Link className="text-sm font-medium text-white hover:underline underline-offset-4 transition" href="#events">
            Events
          </Link>
          <Link className="text-sm font-medium text-white hover:underline underline-offset-4 transition" href="#contact">
            Contact
          </Link>
        </nav>
        <button className="md:hidden text-white" onClick={() => setIsNavOpen(!isNavOpen)}>
          <Menu className="h-6 w-6" />
        </button>
        {isNavOpen && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            className="absolute top-16 left-0 w-full bg-gradient-to-r from-purple-600 to-pink-600 flex flex-col items-center space-y-4 py-4 md:hidden"
          >
            <Link className="text-sm font-medium text-white hover:underline underline-offset-4 transition" href="#videos" onClick={() => setIsNavOpen(false)}>
              Videos
            </Link>
            <Link className="text-sm font-medium text-white hover:underline underline-offset-4 transition" href="#choreography" onClick={() => setIsNavOpen(false)}>
              Choreography
            </Link>
            <Link className="text-sm font-medium text-white hover:underline underline-offset-4 transition" href="#events" onClick={() => setIsNavOpen(false)}>
              Events
            </Link>
            <Link className="text-sm font-medium text-white hover:underline underline-offset-4 transition" href="#contact" onClick={() => setIsNavOpen(false)}>
              Contact
            </Link>
          </motion.nav>
        )}
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="space-y-2"
              >
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                  Welcome to RhythmMoves
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Expressing emotions through movement, creating art with every step.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex space-x-4"
              >
                <Button className="transform hover:scale-105 transition-transform">Book a Performance</Button>
                <Button variant="outline" className="transform hover:scale-105 transition-transform">Learn More</Button>
              </motion.div>
              <div className="flex space-x-4 mt-6">
                <Link href="https://instagram.com" target="_blank">
                  <Button variant="ghost" className="text-white hover:bg-pink-500 transition">
                    <Instagram className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://facebook.com" target="_blank">
                  <Button variant="ghost" className="text-white hover:bg-blue-600 transition">
                    <Facebook className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://twitter.com" target="_blank">
                  <Button variant="ghost" className="text-white hover:bg-blue-400 transition">
                    <Twitter className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="videos" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Featured Performances</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="relative aspect-video">
                    <img
                      alt={`Dance Performance ${i}`}
                      className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-105"
                      src={`/placeholder.${i}.jpg`}
                    />
                    <Button
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity"
                      variant="ghost"
                    >
                      <Play className="h-12 w-12 text-white animate-pulse" />
                    </Button>
                  </div>
                  <CardHeader className="mt-4">
                    <CardTitle className="text-xl">Performance Title {i}</CardTitle>
                    <CardDescription className="text-gray-600">A captivating dance performance showcasing {['ballet', 'hip-hop', 'contemporary'][i-1]} styles.</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full flex items-center justify-center">
                      Watch Now <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="choreography" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Choreography Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <Card key={i} className="flex flex-col md:flex-row overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="relative md:w-1/3 h-48 md:h-auto">
                    <img
                      alt={`Choreography ${i}`}
                      className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-105"
                      src={`/choreography.${i}.jpg`}
                    />
                  </div>
                  <CardHeader className="flex-1 p-4">
                    <CardTitle className="text-xl">Choreography Project {i}</CardTitle>
                    <CardDescription className="text-gray-600">
                      An innovative dance piece exploring themes of {['nature', 'technology'][i-1]} and human connection.
                    </CardDescription>
                    <CardContent className="mt-2">
                      <p className="text-sm text-gray-500">Duration: {['5', '7'][i-1]} minutes</p>
                      <p className="text-sm text-gray-500">Style: {['Contemporary Fusion', 'Modern Expression'][i-1]}</p>
                    </CardContent>
                    <CardFooter className="mt-4">
                      <Button variant="outline" className="w-full flex items-center justify-center">
                        Learn More <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="events" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Upcoming Performances</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-lg hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <CardTitle>Performance Calendar</CardTitle>
                  <CardDescription>Check out where I'll be dancing next!</CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar className="mt-4" />
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View All Events</Button>
                </CardFooter>
              </Card>
              <Card className="shadow-lg hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <CardTitle>Next Event</CardTitle>
                  <CardDescription>Don't miss my upcoming performance!</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-md">
                      15
                    </div>
                    <div>
                      <h3 className="font-semibold">Summer Dance Festival</h3>
                      <p className="text-sm text-gray-600">July 15, 2023 at 7:00 PM</p>
                      <p className="text-sm text-gray-600">City Park Amphitheater</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full flex items-center justify-center">
                    Get Tickets <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Get in Touch</h2>
            <form className="max-w-md mx-auto space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-6">
        <div className="container px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs">© 2023 RhythmMoves. All rights reserved.</p>
          <nav className="flex space-x-4 mt-4 sm:mt-0">
            <Link className="text-xs hover:underline underline-offset-4 transition" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 transition" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}