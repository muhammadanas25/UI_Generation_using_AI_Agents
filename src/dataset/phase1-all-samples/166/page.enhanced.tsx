import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, ChevronRight, Menu, X, Moon, Sun } from "lucide-react"
import { Transition } from "@headlessui/react"

export default function FrameFlicksPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <header className="px-4 lg:px-6 h-16 flex items-center shadow-md dark:shadow-gray-800 bg-white dark:bg-gray-900 fixed w-full z-10">
          <div className="container mx-auto flex items-center justify-between">
            <Link className="flex items-center justify-center" href="#">
              <Play className="h-6 w-6 mr-2 text-blue-500 animate-spin-slow" />
              <span className="font-bold text-xl">FrameFlicks</span>
            </Link>
            <nav className="hidden md:flex gap-6 items-center">
              <Link className="text-sm font-medium hover:underline underline-offset-4 transition" href="#">
                Work
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4 transition" href="#">
                About
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4 transition" href="#">
                Contact
              </Link>
              <button onClick={toggleDarkMode} className="ml-4">
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </nav>
            <div className="md:hidden flex items-center">
              <button onClick={toggleDarkMode} className="mr-2">
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button onClick={toggleMenu}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
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
            {(ref) => (
              <nav className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md md:hidden" ref={ref}>
                <div className="flex flex-col items-center py-4 space-y-2">
                  <Link className="text-sm font-medium hover:underline underline-offset-4 transition" href="#">
                    Work
                  </Link>
                  <Link className="text-sm font-medium hover:underline underline-offset-4 transition" href="#">
                    About
                  </Link>
                  <Link className="text-sm font-medium hover:underline underline-offset-4 transition" href="#">
                    Contact
                  </Link>
                </div>
              </nav>
            )}
          </Transition>
        </header>
        <main className="flex-1 pt-20">
          <section className="w-full py-20 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-6 text-center">
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-fadeInUp">
                  Bringing Stories to Life
                </h1>
                <p className="mx-auto max-w-3xl text-gray-600 dark:text-gray-300 text-lg md:text-xl">
                  Award-winning animation and motion graphics studio. We create captivating visuals that tell your story.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button className="transition transform hover:scale-105" variant="default">
                    View Our Work
                  </Button>
                  <Button className="transition transform hover:scale-105" variant="outline">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Featured Work
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Cosmic Journey", type: "Animated Short", img: "/cosmic_journey.jpg" },
                  { title: "Tech Explainer", type: "Motion Graphics", img: "/tech_explainer.jpg" },
                  { title: "Brand Story", type: "Client Work", img: "/brand_story.jpg" },
                ].map((item, index) => (
                  <Card key={index} className="overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
                    <CardContent className="p-0">
                      <img
                        alt={item.title}
                        className="object-cover w-full h-60 transition-transform duration-300 hover:scale-110"
                        src={item.img}
                        width="360"
                        height="240"
                      />
                      <div className="p-4">
                        <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                        <Badge className="capitalize">{item.type}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-12 text-center">
                <Button variant="outline" className="flex items-center justify-center mx-auto">
                  View All Projects
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>
          <section className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-gray-900 dark:text-gray-100">
                Clients We've Worked With
              </h2>
              <div className="flex overflow-x-auto space-x-8 py-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
                  <div key={index} className="flex-shrink-0 flex items-center justify-center w-40 h-24 bg-gray-200 dark:bg-gray-800 rounded-md">
                    <img
                      alt={`Client logo ${index + 1}`}
                      className="max-h-12 w-auto dark:invert"
                      src={`/client_${index + 1}.png`}
                      width="120"
                      height="48"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-6 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
                <p className="max-w-2xl text-gray-600 dark:text-gray-300">
                  Interested in working together? We'd love to hear from you. Reach out to discuss your project needs and how we can help.
                </p>
                <form className="w-full max-w-lg">
                  <div className="flex flex-col space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    />
                    <textarea
                      placeholder="Your Message"
                      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      rows="4"
                    ></textarea>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t dark:border-gray-800 bg-white dark:bg-gray-900">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 FrameFlicks. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4 transition" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 transition" href="#">
              Privacy
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 transition flex items-center" href="#">
              <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.59l-.467 3.622h-3.123V24h6.116C23.4 24 24 23.4 24 22.675v-21.35C24 .6 23.4 0 22.675 0z" />
              </svg>
              Facebook
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 transition flex items-center" href="#">
              <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184A4.916 4.916 0 0 0 16.616 3c-2.73 0-4.936 2.206-4.936 4.936 0 .386.044.762.127 1.124C7.728 8.853 4.1 6.874 1.671 3.149a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.215 2.188 4.099a4.904 4.904 0 0 1-2.23-.616v.062c0 2.385 1.693 4.374 3.946 4.827a4.935 4.935 0 0 1-2.224.084c.63 1.953 2.445 3.377 4.6 3.416A9.867 9.867 0 0 1 0 19.54a13.945 13.945 0 0 0 7.548 2.212c9.056 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
              </svg>
              Twitter
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  )
}