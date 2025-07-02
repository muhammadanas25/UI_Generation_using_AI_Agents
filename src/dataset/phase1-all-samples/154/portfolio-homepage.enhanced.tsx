import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin, Mail, Sun, Moon } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

export default function PortfolioHomepage() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 bg-white dark:bg-gray-900 shadow-md h-20 flex items-center transition-colors duration-300">
          <div className="container mx-auto flex items-center justify-between">
            <Link className="flex items-center justify-center" href="#">
              <Image
                src="/logo.svg"
                alt="InteriorImpressions logo"
                width={50}
                height={50}
                className="rounded-full transition-transform duration-300 hover:scale-110"
              />
              <span className="ml-3 text-xl font-semibold text-gray-800 dark:text-white">InteriorImpressions</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
                Portfolio
              </Link>
              <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
                About
              </Link>
              <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Switch
                checked={darkMode}
                onCheckedChange={setDarkMode}
                className="bg-gray-200 dark:bg-gray-700"
              >
                <Sun className="h-4 w-4 text-yellow-500" />
                <Moon className="h-4 w-4 text-gray-300" />
              </Switch>
              <button className="md:hidden text-gray-700 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>
        <main className="flex-1 pt-20">
          <section className="w-full py-20 md:py-28 lg:py-36 bg-cover bg-center" style={{ backgroundImage: 'url("/hero-background.jpg")' }}>
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-6 text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg">
                  InteriorImpressions
                </h1>
                <p className="mx-auto max-w-2xl text-gray-200 md:text-2xl">
                  Transforming spaces into stunning, personalized sanctuaries.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="animate-pulse">View Portfolio</Button>
                  <Button variant="outline" className="hover:bg-gray-200 dark:hover:bg-gray-700">Contact Me</Button>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Featured Room Designs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
                    <CardContent className="p-0">
                      <Image
                        src={`/room${i}.jpg`}
                        alt={`Room design ${i}`}
                        width={600}
                        height={400}
                        className="object-cover w-full h-64 transition-transform duration-300 hover:scale-110"
                      />
                      <div className="p-6">
                        <h3 className="font-semibold text-xl mb-3 text-gray-800 dark:text-gray-100">Modern Living Room</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          A sleek and comfortable living space designed for modern families.
                        </p>
                        <Button className="mt-4">View Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-700">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Mood Boards</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-0">
                      <Image
                        src={`/mood${i}.jpg`}
                        alt={`Mood board ${i}`}
                        width={300}
                        height={300}
                        className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105"
                      />
                      <div className="p-6">
                        <h3 className="font-semibold text-xl mb-3 text-gray-800 dark:text-gray-100">Coastal Retreat</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Serene blues and natural textures for a beachy vibe.
                        </p>
                        <Button className="mt-4">Explore More</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Style Inspirations</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
                    <CardContent className="p-0">
                      <Image
                        src={`/style${i}.jpg`}
                        alt={`Style inspiration ${i}`}
                        width={600}
                        height={400}
                        className="object-cover w-full h-64 transition-transform duration-300 hover:scale-110"
                      />
                      <div className="p-6">
                        <h3 className="font-semibold text-xl mb-3 text-gray-800 dark:text-gray-100">Minimalist Chic</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Clean lines and a monochromatic palette for a sophisticated look.
                        </p>
                        <Button className="mt-4">Discover</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center text-center space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Get in Touch</h2>
                <p className="max-w-2xl text-gray-200">
                  Ready to transform your space? Let's collaborate to create your dream environment.
                </p>
                <Button className="bg-white text-indigo-600 hover:bg-gray-100">Contact Us</Button>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 bg-gray-200 dark:bg-gray-800 transition-colors duration-300">
          <p className="text-sm text-gray-600 dark:text-gray-400">© 2024 InteriorImpressions. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-6">
            <Link className="text-sm text-gray-600 dark:text-gray-400 hover:underline underline-offset-4 transition" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm text-gray-600 dark:text-gray-400 hover:underline underline-offset-4 transition" href="#">
              Privacy
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition">
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}