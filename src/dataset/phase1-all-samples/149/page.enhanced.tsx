import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Facebook, Instagram, Play, Twitter, Sun, Moon } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link className="flex items-center space-x-2" href="#">
            <Image src="/logo.png" alt="SoundSmith Logo" width={40} height={40} className="h-8 w-8 md:h-10 md:w-10" />
            <span className="text-lg md:text-xl font-bold text-gray-800 dark:text-white">SoundSmith</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200" href="#">
              Home
            </Link>
            <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200" href="#">
              Albums
            </Link>
            <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200" href="#">
              Tour
            </Link>
            <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200" href="#">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-2 md:space-x-4">
            <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
              <Sun className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" />
            </button>
            <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
              <Moon className="h-4 w-4 md:h-5 md:w-5 text-gray-500" />
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1 pt-20">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl lg:text-6xl animate-fade-in">
                  SoundSmith
                </h1>
                <p className="mx-auto max-w-2xl text-base md:text-lg text-gray-200">
                  Crafting melodies that resonate with your soul
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="px-6 py-3 text-base w-full sm:w-auto">Listen Now</Button>
                <Button variant="outline" className="px-6 py-3 text-base w-full sm:w-auto">
                  Tour Dates
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Albums</h2>
            <div className="flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory">
              {[
                { title: "Echoes of Eternity", year: "2023", image: "/albums/echoes_of_eternity.jpg" },
                { title: "Neon Dreams", year: "2021", image: "/albums/neon_dreams.jpg" },
                { title: "Cosmic Rhythms", year: "2019", image: "/albums/cosmic_rhythms.jpg" },
                { title: "Acoustic Journeys", year: "2017", image: "/albums/acoustic_journeys.jpg" },
              ].map((album) => (
                <Card key={album.title} className="min-w-[250px] snap-center transform hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-4">
                    <Image
                      alt={album.title}
                      className="rounded-lg object-cover w-full aspect-square mb-4"
                      height={300}
                      src={album.image}
                      width={300}
                    />
                    <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2">{album.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Released: {album.year}</p>
                    <Button className="mt-4 w-full">View Album</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Upcoming Shows</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { city: "New York City, NY", date: "July 12, 2024", venue: "Madison Square Garden" },
                { city: "Los Angeles, CA", date: "July 19, 2024", venue: "Hollywood Bowl" },
                { city: "Chicago, IL", date: "July 26, 2024", venue: "United Center" },
              ].map((show) => (
                <Card key={show.city} className="transform hover:translate-y-1 transition-transform duration-200">
                  <CardContent className="p-6 flex flex-col items-start">
                    <CalendarDays className="h-6 w-6 text-indigo-500 mb-4" />
                    <h3 className="font-bold text-lg text-gray-800 dark:text-white">{show.city}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{show.date} - {show.venue}</p>
                    <Button className="mt-4 w-full">Get Tickets</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Featured Tracks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Starlight Serenade", album: "Echoes of Eternity", audio: "/audio/starlight_serenade.mp3" },
                { title: "Neon Nights", album: "Neon Dreams", audio: "/audio/neon_nights.mp3" },
                { title: "Galactic Groove", album: "Cosmic Rhythms", audio: "/audio/galactic_groove.mp3" },
              ].map((track) => (
                <Card key={track.title} className="transform hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col">
                    <div className="flex items-center mb-4">
                      <Play className="h-6 w-6 text-indigo-500 mr-4" />
                      <div>
                        <h3 className="font-bold text-lg text-gray-800 dark:text-white">{track.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">From the album: {track.album}</p>
                      </div>
                    </div>
                    <audio className="w-full mt-2 rounded" controls src={track.audio}>
                      Your browser does not support the audio element.
                    </audio>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Concert Highlights", image: "/news/concert_highlights.jpg", description: "Relive the unforgettable moments from our latest tour." },
                { title: "New Album Release", image: "/news/new_album.jpg", description: "Announcing the release of our upcoming album, full of fresh sounds." },
                { title: "Behind the Scenes", image: "/news/behind_the_scenes.jpg", description: "Take a peek into our creative process and studio sessions." },
              ].map((news) => (
                <Card key={news.title} className="transform hover:translate-y-1 transition-transform duration-200">
                  <CardContent className="p-6">
                    <Image
                      alt={news.title}
                      className="rounded-lg object-cover w-full h-40 mb-4"
                      height={160}
                      src={news.image}
                      width={400}
                    />
                    <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2">{news.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{news.description}</p>
                    <Button variant="link" className="mt-4 text-indigo-500 hover:underline">Read More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center md:flex-row md:justify-between">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 md:mb-0">© 2024 SoundSmith. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mb-4 md:mb-0">
            <Link className="text-xs text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200" href="#">
              Privacy
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
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

