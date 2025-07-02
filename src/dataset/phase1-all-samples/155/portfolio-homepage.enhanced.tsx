import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Menu, X, Sun, Moon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    if (typeof window !== "undefined") {
      if (isDarkMode) {
        document.documentElement.classList.remove("dark")
      } else {
        document.documentElement.classList.add("dark")
      }
    }
  }

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <header className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link className="flex items-center" href="#">
            <span className="sr-only">VisionaryWorks</span>
            <Image
              src="/placeholder.svg"
              width={40}
              height={40}
              alt="VisionaryWorks Logo"
              className="rounded-lg transition-transform transform hover:scale-110"
            />
            <span className="ml-2 text-xl font-semibold text-gray-800 dark:text-white">VisionaryWorks</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition" href="#campaigns">
              Campaigns
            </Link>
            <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition" href="#case-studies">
              Case Studies
            </Link>
            <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition" href="#collaborations">
              Collaborations
            </Link>
            <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition" href="#contact">
              Contact
            </Link>
            <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
              {isDarkMode ? <Sun className="w-4 h-4 text-yellow-500" /> : <Moon className="w-4 h-4 text-gray-800" />}
            </button>
          </nav>
          <div className="md:hidden flex items-center space-x-2">
            <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
              {isDarkMode ? <Sun className="w-4 h-4 text-yellow-500" /> : <Moon className="w-4 h-4 text-gray-800" />}
            </button>
            <button onClick={toggleMenu} className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-2 shadow-lg">
            <Link className="block text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition" href="#campaigns" onClick={toggleMenu}>
              Campaigns
            </Link>
            <Link className="block text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition" href="#case-studies" onClick={toggleMenu}>
              Case Studies
            </Link>
            <Link className="block text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition" href="#collaborations" onClick={toggleMenu}>
              Collaborations
            </Link>
            <Link className="block text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition" href="#contact" onClick={toggleMenu}>
              Contact
            </Link>
          </nav>
        )}
      </header>
      <main className="flex-1 pt-20">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-r from-purple-500 to-indigo-600">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 animate-fadeIn">Creative Direction That Inspires</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 animate-fadeIn delay-200">Transforming brands through innovative campaigns and strategic collaborations.</p>
            <div className="flex justify-center space-x-4 animate-fadeIn delay-400">
              <Button variant="default" className="px-6 py-3">View Portfolio</Button>
              <Button variant="outline" className="px-6 py-3">Contact Me</Button>
            </div>
          </div>
        </section>
        <section id="campaigns" className="w-full py-16 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">Brand Campaigns</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="transform hover:scale-105 hover:shadow-lg transition duration-300">
                <CardContent className="p-4">
                  <Image
                    src="/campaign1.jpg"
                    width={400}
                    height={300}
                    alt="Eco-Friendly Fashion"
                    className="rounded-lg object-cover w-full h-48 mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Eco-Friendly Fashion</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">A sustainable clothing line campaign that resonated with environmentally conscious consumers.</p>
                  <Button variant="link" className="text-blue-500 hover:underline flex items-center">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="transform hover:scale-105 hover:shadow-lg transition duration-300">
                <CardContent className="p-4">
                  <Image
                    src="/campaign2.jpg"
                    width={400}
                    height={300}
                    alt="Tech Innovation Series"
                    className="rounded-lg object-cover w-full h-48 mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Tech Innovation Series</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">Showcasing cutting-edge technology through an immersive digital campaign.</p>
                  <Button variant="link" className="text-blue-500 hover:underline flex items-center">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="transform hover:scale-105 hover:shadow-lg transition duration-300">
                <CardContent className="p-4">
                  <Image
                    src="/campaign3.jpg"
                    width={400}
                    height={300}
                    alt="Global Cuisine Journey"
                    className="rounded-lg object-cover w-full h-48 mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Global Cuisine Journey</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">A food and beverage campaign celebrating diverse culinary traditions around the world.</p>
                  <Button variant="link" className="text-blue-500 hover:underline flex items-center">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="case-studies" className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="transform hover:scale-105 hover:shadow-lg transition duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Rebranding a Legacy Company</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">How we transformed a 50-year-old company's image for the digital age.</p>
                  <Link className="flex items-center text-blue-500 hover:underline transition" href="#">
                    Read Case Study <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="transform hover:scale-105 hover:shadow-lg transition duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Launching a Disruptive Start-up</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">The strategy behind introducing a game-changing product to a competitive market.</p>
                  <Link className="flex items-center text-blue-500 hover:underline transition" href="#">
                    Read Case Study <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="collaborations" className="w-full py-16 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">Collaborations</h2>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <Image
                src="/collaborator1.png"
                width={200}
                height={100}
                alt="Collaborator 1"
                className="h-24 object-contain transition transform hover:scale-105"
              />
              <Image
                src="/collaborator2.png"
                width={200}
                height={100}
                alt="Collaborator 2"
                className="h-24 object-contain transition transform hover:scale-105"
              />
              <Image
                src="/collaborator3.png"
                width={200}
                height={100}
                alt="Collaborator 3"
                className="h-24 object-contain transition transform hover:scale-105"
              />
              <Image
                src="/collaborator4.png"
                width={200}
                height={100}
                alt="Collaborator 4"
                className="h-24 object-contain transition transform hover:scale-105"
              />
              <Image
                src="/collaborator5.png"
                width={200}
                height={100}
                alt="Collaborator 5"
                className="h-24 object-contain transition transform hover:scale-105"
              />
              <Image
                src="/collaborator6.png"
                width={200}
                height={100}
                alt="Collaborator 6"
                className="h-24 object-contain transition transform hover:scale-105"
              />
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" className="w-full py-8 bg-gray-800 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-gray-400 mb-4">© 2024 VisionaryWorks. All rights reserved.</p>
          <div className="flex justify-center items-center space-x-4 mb-4">
            <Link href="#" className="text-gray-400 hover:text-white transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <!-- Facebook Icon SVG -->
                <path d="M22 12a10 10 0 1 0-11.5 9.8v-7h-2v-2.8h2v-2c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.3v1.8h2.3l-.4 2.8h-1.9v7A10 10 0 0 0 22 12z"/>
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <!-- Twitter Icon SVG -->
                <path d="M22.46 6c-.77.35-1.6.6-2.46.7a4.3 4.3 0 0 0 1.88-2.37c-.83.5-1.75.85-2.72 1.05a4.28 4.28 0 0 0-7.3 3.9A12.13 12.13 0 0 1 3 5.1a4.28 4.28 0 0 0 1.33 5.72 4.26 4.26 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.44 4.19 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.72 8.72 0 0 0 24 5.5a8.5 8.5 0 0 1-2.54.7z"/>
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <!-- Instagram Icon SVG -->
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm4.5-.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <!-- LinkedIn Icon SVG -->
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.966 0-1.75-.785-1.75-1.75 0-.966 .784-1.75 1.75-1.75s1.75.784 1.75 1.75c0 .965-.784 1.75-1.75 1.75zm13.5 11.3h-3v-5.604c0-1.337-.025-3.068-1.869-3.068-1.872 0-2.158 1.46-2.158 2.967v5.7h-3v-10h2.881v1.368h.041c.401-.762 1.381-1.561 2.839-1.561 3.04 0 3.604 2.003 3.604 4.606v5.594z"/>
              </svg>
            </Link>
          </div>
          <nav className="flex justify-center space-x-6">
            <Link className="text-xs text-gray-400 hover:text-white transition" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs text-gray-400 hover:text-white transition" href="#">
              Privacy
            </Link>
          </nav>
        </div>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition">
          ↑
        </button>
      </footer>
    </div>
  )
}