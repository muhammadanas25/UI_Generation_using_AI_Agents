import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Music, Mic, Sliders, Mail, Sun, Moon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BeatMakerPortfolio() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-500 dark:bg-gray-900 dark:text-gray-100">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              BeatMaker
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="#featured" className="hover:text-primary transition-colors duration-300">
                Tracks
              </Link>
              <Link href="#performances" className="hover:text-primary transition-colors duration-300">
                Performances
              </Link>
              <Link href="#production" className="hover:text-primary transition-colors duration-300">
                Production
              </Link>
              <Link href="#contact" className="hover:text-primary transition-colors duration-300">
                Contact
              </Link>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center pt-16">
          <Image
            src="/studio-background.jpg"
            alt="BeatMaker in studio"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 opacity-70 dark:opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
          <div className="relative z-10 text-center space-y-6 px-4">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white animate-fadeIn">
              BeatMaker
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 animate-fadeIn delay-200">
              Crafting Rhythms, Shaping Sounds
            </p>
            <Button
              size="lg"
              className="mt-6 animate-bounce hover:scale-105 transition-transform duration-300"
              onClick={() => document.getElementById('featured').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore My Work
            </Button>
          </div>
        </section>

        {/* Featured Tracks Section */}
        <section id="featured" className="py-20 px-4 md:px-8 bg-muted">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 flex items-center justify-center">
              <Music className="mr-3 w-6 h-6 text-primary" /> Featured Tracks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((track) => (
                <Card key={track} className="hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-xl">Track {track}</CardTitle>
                    <CardDescription className="text-sm">Genre • Released 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative group">
                      <Image
                        src={`/track-${track}.jpg`}
                        alt={`Track ${track} cover`}
                        width={600}
                        height={400}
                        className="rounded-md"
                      />
                      <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Play className="w-12 h-12 text-white animate-pulse" />
                      </button>
                    </div>
                    <Button variant="outline" className="w-full mt-4 hover:bg-primary hover:text-white transition-colors duration-300">
                      Listen Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Live Performances Section */}
        <section id="performances" className="py-20 px-4 md:px-8 bg-white dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 flex items-center justify-center">
              <Mic className="mr-3 w-6 h-6 text-primary" /> Live Performances
            </h2>
            <div className="owl-carousel owl-theme">
              <div className="carousel-item">
                <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative">
                    <Image
                      src="/performance-1.jpg"
                      alt="Live Performance 1"
                      width={800}
                      height={450}
                      className="rounded-t-md"
                    />
                    <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-16 h-16 text-white animate-pulse" />
                    </button>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold">Live at The Grand Arena</h3>
                    <p className="text-muted-foreground">July 23, 2023 • New York, NY</p>
                  </CardContent>
                </Card>
              </div>
              <div className="carousel-item">
                <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative">
                    <Image
                      src="/performance-2.jpg"
                      alt="Live Performance 2"
                      width={800}
                      height={450}
                      className="rounded-t-md"
                    />
                    <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-16 h-16 text-white animate-pulse" />
                    </button>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold">Summer Beats Festival</h3>
                    <p className="text-muted-foreground">August 15, 2023 • Los Angeles, CA</p>
                  </CardContent>
                </Card>
              </div>
              {/* Add more carousel items as needed */}
            </div>
          </div>
        </section>

        {/* Production Work Section */}
        <section id="production" className="py-20 px-4 md:px-8 bg-muted">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 flex items-center justify-center">
              <Sliders className="mr-3 w-6 h-6 text-primary" /> Production Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((project) => (
                <Card key={project} className="hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">Project {project}</CardTitle>
                    <CardDescription className="text-sm">Artist • Album</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src={`/album-${project}.jpg`}
                      alt={`Album Cover ${project}`}
                      width={600}
                      height={600}
                      className="rounded-md mb-4 hover:scale-105 transition-transform duration-300"
                    />
                    <Button variant="outline" className="w-full hover:bg-primary hover:text-white transition-colors duration-300">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 md:px-8 bg-white dark:bg-gray-800">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
              <Mail className="mr-3 w-6 h-6 text-primary" /> Get in Touch
            </h2>
            <p className="text-xl mb-8">
              Interested in collaborating or booking a session? Let's create something amazing together!
            </p>
            <Button
              size="lg"
              className="hover:bg-primary hover:text-white transition-colors duration-300"
              onClick={() => window.location.href = "mailto:beatmaker@example.com"}
            >
              Contact Me
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 md:px-8 bg-muted dark:bg-gray-900">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} BeatMaker. All rights reserved.
            </p>
            <div className="mt-4 flex justify-center space-x-6">
              <Link href="#" className="text-primary hover:text-primary-700 transition-colors duration-300">
                Instagram
              </Link>
              <Link href="#" className="text-primary hover:text-primary-700 transition-colors duration-300">
                SoundCloud
              </Link>
              <Link href="#" className="text-primary hover:text-primary-700 transition-colors duration-300">
                Spotify
              </Link>
              <Link href="#" className="text-primary hover:text-primary-700 transition-colors duration-300">
                YouTube
              </Link>
            </div>
            <div className="mt-6 flex justify-center space-x-4">
              <Link href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Instagram SVG */}
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm5.25-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"/>
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* SoundCloud SVG */}
                  <path d="M22 4.5v15a1.5 1.5 0 01-1.5 1.5h-19A1.5 1.5 0 01.5 19v-15A1.5 1.5 0 012 2.5h19A1.5 1.5 0 0122 4.5zM9 17v-10h2v10H9zm4 0v-6h2v6h-2zm4 0v-2h2v2h-2z"/>
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Spotify SVG */}
                  <path d="M12 2.25C6.605 2.25 2 6.855 2 12.25c0 5.395 4.605 9.999 10 10 5.396-.001 10-4.605 10-10 0-5.395-4.604-10-10-10zm4.68 14.775c-.072.21-.24.36-.48.36a.66.66 0 01-.48-.18l-3.6-3.6a.66.66 0 01-.18-.48c0-.24.15-.42.36-.48l.96-.24c.93-.24 1.76-1.02 1.76-1.98a1.98 1.98 0 00-1.98-1.98H8.76a1.98 1.98 0 00-1.98 1.98c0 .96.84 1.74 1.76 1.98l.96.24c.21.06.36.24.36.48 0 .24-.15.42-.36.48l-3.6.96a.66.66 0 01-.48-.18.66.66 0 01-.18-.48c0-.24.15-.42.36-.48l.96-.24c.93-.24 1.76-1.02 1.76-1.98a1.98 1.98 0 00-1.98-1.98H8.76a1.98 1.98 0 00-1.98 1.98c0 .96.84 1.74 1.76 1.98l.96.24c.21.06.36.24.36.48 0 .24-.15.42-.36.48l-3.6.96a.66.66 0 01-.48-.18.66.66 0 01-.18-.48c0-.24.15-.42.36-.48l.96-.24c.93-.24 1.76-1.02 1.76-1.98a1.98 1.98 0 00-1.98-1.98H8.76a1.98 1.98 0 00-1.98 1.98c0 .96.84 1.74 1.76 1.98l.96.24c.21.06.36.24.36.48 0 .24-.15.42-.36.48l-3.6.96a.66.66 0 01-.48-.18.66.66 0 01-.18-.48c0-.24.15-.42.36-.48l.96-.24c.93-.24 1.76-1.02 1.76-1.98a1.98 1.98 0 00-1.98-1.98H8.76a1.98 1.98 0 00-1.98 1.98c0 .96.84 1.74 1.76 1.98l.96.24c.21.06.36.24.36.48 0 .24-.15.42-.36.48l-3.6.96z"/>
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* YouTube SVG */}
                  <path d="M19.615 3.184A3.5 3.5 0 0016.538 2H7.462a3.5 3.5 0 00-3.077 1.184A3.496 3.496 0 004 5.923v12.146c0 1.047.417 2.027 1.184 2.795A3.504 3.504 0 007.462 22h9.076a3.504 3.504 0 002.278-1.982 3.504 3.504 0 001.184-2.795V5.923c0-1.047-.417-2.027-1.184-2.739zM9.75 15.25V8.75l6 3.75-6 3.75z"/>
                </svg>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}