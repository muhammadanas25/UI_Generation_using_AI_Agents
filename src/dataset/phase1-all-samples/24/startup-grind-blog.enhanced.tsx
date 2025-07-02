import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon, MenuIcon, XIcon } from "@heroicons/react/outline"

export default function Component() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link className="flex items-center space-x-2" href="#">
            <MountainIcon className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-800 dark:text-white">StartupGrind</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition-colors duration-200" href="#">
              Home
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition-colors duration-200" href="#">
              Success Stories
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition-colors duration-200" href="#">
              Resources
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition-colors duration-200" href="#">
              About
            </Link>
          </nav>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 focus:outline-none transition-colors duration-200"
            >
              {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-2">
            <Link className="block text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition-colors duration-200" href="#">
              Home
            </Link>
            <Link className="block text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition-colors duration-200" href="#">
              Success Stories
            </Link>
            <Link className="block text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition-colors duration-200" href="#">
              Resources
            </Link>
            <Link className="block text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition-colors duration-200" href="#">
              About
            </Link>
          </nav>
        )}
      </header>
      <main className="flex-1 mt-16">
        <section className="w-full py-20 bg-gradient-to-r from-indigo-500 to-purple-600">
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white animate-fadeInUp">
              Welcome to <span className="text-yellow-300">StartupGrind</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl animate-fadeInUp delay-200">
              Inspiring stories and essential resources for entrepreneurs and startup founders.
            </p>
            <div className="mt-8 flex space-x-4 animate-fadeInUp delay-400">
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 transition-transform transform hover:scale-105">
                Read Success Stories
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 transition-transform transform hover:scale-105">
                Explore Resources
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12 animate-fadeInUp">
              Latest Success Stories
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <img src="/images/technova.jpg" alt="TechNova" className="w-full h-48 object-cover" />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">How two college dropouts built a billion-dollar tech company from their garage.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                    Read More
                  </Button>
                </CardFooter>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <img src="/images/greenleaf.jpg" alt="GreenLeaf" className="w-full h-48 object-cover" />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">The journey of an eco-friendly startup that's changing the face of urban farming.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                    Read More
                  </Button>
                </CardFooter>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <img src="/images/mindwave.jpg" alt="MindWave" className="w-full h-48 object-cover" />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">How a small team of AI researchers created a game-changing language model.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12 animate-fadeInUp">
              Resources for Entrepreneurs
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <img src="/images/funding.jpg" alt="Funding 101" className="w-full h-48 object-cover" />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">Learn about different funding options for your startup, from bootstrapping to VC.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-200">
                    Download Guide
                  </Button>
                </CardFooter>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <img src="/images/legal.jpg" alt="Legal Essentials" className="w-full h-48 object-cover" />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">Navigate the legal landscape of starting and running a business with our comprehensive guide.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-200">
                    Access Resources
                  </Button>
                </CardFooter>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <img src="/images/marketing.jpg" alt="Marketing Mastery" className="w-full h-48 object-cover" />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">Discover effective marketing strategies for startups on a budget.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-200">
                    Start Learning
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4 animate-fadeInUp">Stay Updated</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mb-8 animate-fadeInUp delay-200">
              Subscribe to our newsletter for the latest success stories, resources, and startup tips.
            </p>
            <form className="w-full max-w-md flex flex-col sm:flex-row items-center">
              <Input
                className="w-full mb-4 sm:mb-0 sm:mr-4 focus:ring-indigo-500 focus:border-indigo-500 transition-transform transform hover:scale-105"
                placeholder="Enter your email"
                type="email"
                required
              />
              <Button type="submit" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white transition-transform transform hover:scale-105">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="w-full bg-white dark:bg-gray-900 py-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 StartupGrind. All rights reserved.</p>
          <nav className="flex space-x-4 mt-4 sm:mt-0">
            <Link className="text-xs text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors duration-200" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors duration-200" href="#">
              Privacy
            </Link>
            <Link className="text-xs text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors duration-200" href="#">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-indigo-600"
    >
      <path d="M12 2L2 22h20L12 2z" />
    </svg>
  )
}