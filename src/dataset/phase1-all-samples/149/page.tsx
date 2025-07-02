import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Facebook, Instagram, Play, Twitter } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <MusicIcon className="h-6 w-6" />
          <span className="sr-only">SoundSmith</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Albums
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Tour
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  SoundSmith
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Crafting melodies that resonate with your soul
                </p>
              </div>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto">Listen Now</Button>
                <Button className="w-full sm:w-auto" variant="outline">Tour Dates</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Albums</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-4">
                  <Image
                    alt="Album cover 1"
                    className="rounded-lg object-cover w-full aspect-square mb-4"
                    height={300}
                    src="/placeholder.svg"
                    width={300}
                  />
                  <h3 className="font-bold text-lg mb-2">Echoes of Eternity</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Released: 2023</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <Image
                    alt="Album cover 2"
                    className="rounded-lg object-cover w-full aspect-square mb-4"
                    height={300}
                    src="/placeholder.svg"
                    width={300}
                  />
                  <h3 className="font-bold text-lg mb-2">Neon Dreams</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Released: 2021</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <Image
                    alt="Album cover 3"
                    className="rounded-lg object-cover w-full aspect-square mb-4"
                    height={300}
                    src="/placeholder.svg"
                    width={300}
                  />
                  <h3 className="font-bold text-lg mb-2">Cosmic Rhythms</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Released: 2019</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <Image
                    alt="Album cover 4"
                    className="rounded-lg object-cover w-full aspect-square mb-4"
                    height={300}
                    src="/placeholder.svg"
                    width={300}
                  />
                  <h3 className="font-bold text-lg mb-2">Acoustic Journeys</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Released: 2017</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Upcoming Shows</h2>
            <div className="grid gap-6">
              <Card>
                <CardContent className="p-4 flex flex-col sm:flex-row items-start sm:items-center">
                  <CalendarDays className="h-6 w-6 mr-4 mb-2 sm:mb-0" />
                  <div className="mb-2 sm:mb-0">
                    <h3 className="font-bold">New York City, NY</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">July 12, 2024 - Madison Square Garden</p>
                  </div>
                  <Button className="w-full sm:w-auto sm:ml-auto mt-2 sm:mt-0">Get Tickets</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex flex-col sm:flex-row items-start sm:items-center">
                  <CalendarDays className="h-6 w-6 mr-4 mb-2 sm:mb-0" />
                  <div className="mb-2 sm:mb-0">
                    <h3 className="font-bold">Los Angeles, CA</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">July 19, 2024 - Hollywood Bowl</p>
                  </div>
                  <Button className="w-full sm:w-auto sm:ml-auto mt-2 sm:mt-0">Get Tickets</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex flex-col sm:flex-row items-start sm:items-center">
                  <CalendarDays className="h-6 w-6 mr-4 mb-2 sm:mb-0" />
                  <div className="mb-2 sm:mb-0">
                    <h3 className="font-bold">Chicago, IL</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">July 26, 2024 - United Center</p>
                  </div>
                  <Button className="w-full sm:w-auto sm:ml-auto mt-2 sm:mt-0">Get Tickets</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Featured Tracks</h2>
            <div className="grid gap-6">
              <Card>
                <CardContent className="p-4 flex flex-col sm:flex-row items-start sm:items-center">
                  <Play className="h-6 w-6 mr-4 mb-2 sm:mb-0" />
                  <div className="mb-2 sm:mb-0">
                    <h3 className="font-bold">Starlight Serenade</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">From the album: Echoes of Eternity</p>
                  </div>
                  <audio className="w-full sm:w-auto sm:ml-auto mt-2 sm:mt-0" controls src="/path-to-audio-file.mp3">
                    Your browser does not support the audio element.
                  </audio>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex flex-col sm:flex-row items-start sm:items-center">
                  <Play className="h-6 w-6 mr-4 mb-2 sm:mb-0" />
                  <div className="mb-2 sm:mb-0">
                    <h3 className="font-bold">Neon Nights</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">From the album: Neon Dreams</p>
                  </div>
                  <audio className="w-full sm:w-auto sm:ml-auto mt-2 sm:mt-0" controls src="/path-to-audio-file.mp3">
                    Your browser does not support the audio element.
                  </audio>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex flex-col sm:flex-row items-start sm:items-center">
                  <Play className="h-6 w-6 mr-4 mb-2 sm:mb-0" />
                  <div className="mb-2 sm:mb-0">
                    <h3 className="font-bold">Galactic Groove</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">From the album: Cosmic Rhythms</p>
                  </div>
                  <audio className="w-full sm:w-auto sm:ml-auto mt-2 sm:mt-0" controls src="/path-to-audio-file.mp3">
                    Your browser does not support the audio element.
                  </audio>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 SoundSmith. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex gap-4">
          <Link href="#">
            <Facebook className="h-6 w-6" />
          </Link>
          <Link href="#">
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="#">
            <Instagram className="h-6 w-6" />
          </Link>
        </div>
      </footer>
    </div>
  )
}

function MusicIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}

