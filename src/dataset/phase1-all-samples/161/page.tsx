import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Play, ChevronRight } from "lucide-react"

export default function RhythmMovesPortfolio() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">RhythmMoves</span>
          <span className="h-6 w-6 text-2xl">💃</span>
          <span className="ml-2 text-2xl font-bold">RhythmMoves</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#videos">
            Videos
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#choreography">
            Choreography
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#events">
            Events
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to RhythmMoves
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Expressing emotions through movement, creating art with every step.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Book a Performance</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="videos" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Featured Performances</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="relative aspect-video">
                    <img
                      alt={`Dance Performance ${i}`}
                      className="object-cover"
                      src={`/placeholder.svg?height=225&width=400`}
                    />
                    <Button
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity"
                      variant="ghost"
                    >
                      <Play className="h-12 w-12 text-white" />
                    </Button>
                  </div>
                  <CardHeader>
                    <CardTitle>Performance Title {i}</CardTitle>
                    <CardDescription>A brief description of the dance performance.</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="choreography" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Choreography Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <Card key={i} className="flex overflow-hidden">
                  <div className="relative aspect-square w-1/3">
                    <img
                      alt={`Choreography ${i}`}
                      className="object-cover"
                      src={`/placeholder.svg?height=200&width=200`}
                    />
                  </div>
                  <CardHeader className="flex-1">
                    <CardTitle>Choreography Project {i}</CardTitle>
                    <CardDescription>An innovative dance piece exploring themes of nature and technology.</CardDescription>
                    <CardContent className="p-0 mt-2">
                      <p className="text-sm text-gray-500">Duration: 5 minutes</p>
                      <p className="text-sm text-gray-500">Style: Contemporary Fusion</p>
                    </CardContent>
                    <CardFooter className="p-0 mt-4">
                      <Button variant="outline">Learn More</Button>
                    </CardFooter>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="events" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Upcoming Performances</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Calendar</CardTitle>
                  <CardDescription>Check out where I'll be dancing next!</CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Next Event</CardTitle>
                  <CardDescription>Don't miss my upcoming performance!</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
                      15
                    </div>
                    <div>
                      <h3 className="font-semibold">Summer Dance Festival</h3>
                      <p className="text-sm text-gray-500">July 15, 2023 at 7:00 PM</p>
                      <p className="text-sm text-gray-500">City Park Amphitheater</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Tickets</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2023 RhythmMoves. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}