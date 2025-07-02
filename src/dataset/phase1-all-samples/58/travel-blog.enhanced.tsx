import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Compass, Globe, User, Menu, Sun, Moon, Search, Twitter, Facebook, Instagram } from 'lucide-react'
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { useState } from "react";

export default function TravelBlog() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className={`bg-white shadow ${darkMode ? "bg-gray-800" : ""}`}>
        <div className="container mx-auto px-4 py-3 sm:py-6 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl sm:text-3xl font-bold text-primary hover:text-secondary transition-colors duration-300">NomadDiaries</h1>
          </Link>
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              <li><Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">Home</Link></li>
              <li><Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">About</Link></li>
              <li><Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">Destinations</Link></li>
              <li><Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">Contact</Link></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button variant="ghost" size="sm" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
            </Button>
            <div className="relative hidden sm:block">
              <Input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-4 py-1 text-sm border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
            <div className="md:hidden">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm"><Menu className="w-4 h-4 sm:w-5 sm:h-5" /></Button>
                </DialogTrigger>
                <DialogContent className="p-4 space-y-4">
                  <ul className="flex flex-col space-y-2">
                    <li><Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">Home</Link></li>
                    <li><Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">About</Link></li>
                    <li><Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">Destinations</Link></li>
                    <li><Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">Contact</Link></li>
                  </ul>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8">
        <section className="mb-8 sm:mb-16">
          <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fadeIn">Welcome to NomadDiaries</h2>
              <p className="text-lg sm:text-xl">Embark on a journey of solo adventures and digital nomad lifestyle. Discover tips, guides, and inspirations to fuel your wanderlust.</p>
              <Button className="mt-4 sm:mt-6">Get Started</Button>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8 sm:mb-16">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold">Featured Post</h2>
            <Button variant="link">View All</Button>
          </div>
          <Card className="hover:shadow-2xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">10 Must-Visit Hidden Gems for Solo Travelers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-hidden rounded-md">
                <img
                  src="/placeholder.svg?height=400&width=800"
                  alt="Hidden travel destinations"
                  className="w-full h-60 sm:h-80 object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm sm:text-base">Explore unique destinations away from the crowds.</p>
                </div>
              </div>
              <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400">Discover breathtaking locations off the beaten path that are perfect for solo adventures...</p>
            </CardContent>
            <CardFooter>
              <Button variant="primary" className="w-full">Read More</Button>
            </CardFooter>
          </Card>
        </section>

        <section className="mb-8 sm:mb-16">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold">Latest Posts</h2>
            <Button variant="link">View All</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="flex items-center">
                <User className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <CardTitle className="text-lg sm:text-xl">Solo Travel Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative overflow-hidden rounded-md">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Solo traveler"
                    className="w-full h-48 sm:h-52 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-white bg-opacity-75 text-gray-800 px-2 py-1 rounded text-xs sm:text-sm">
                    Tips & Tricks
                  </div>
                </div>
                <h3 className="mt-3 sm:mt-4 font-semibold text-lg sm:text-xl">How to Make Friends While Traveling Solo</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">Learn the best ways to connect with fellow travelers and locals on your solo journey.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Read More</Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="flex items-center">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <CardTitle className="text-lg sm:text-xl">Digital Nomad Guides</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative overflow-hidden rounded-md">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Digital nomad workspace"
                    className="w-full h-48 sm:h-52 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-white bg-opacity-75 text-gray-800 px-2 py-1 rounded text-xs sm:text-sm">
                    Remote Work
                  </div>
                </div>
                <h3 className="mt-3 sm:mt-4 font-semibold text-lg sm:text-xl">Top 5 Co-working Spaces in Southeast Asia</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">Discover the best places to work and network as a digital nomad in Southeast Asia.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Read More</Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="flex items-center">
                <Compass className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <CardTitle className="text-lg sm:text-xl">Destination Inspiration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative overflow-hidden rounded-md">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Scenic destination"
                    className="w-full h-48 sm:h-52 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-white bg-opacity-75 text-gray-800 px-2 py-1 rounded text-xs sm:text-sm">
                    Adventure
                  </div>
                </div>
                <h3 className="mt-3 sm:mt-4 font-semibold text-lg sm:text-xl">Why You Should Visit Patagonia This Year</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">Explore the breathtaking landscapes and unique experiences Patagonia has to offer.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Read More</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="mb-8 sm:mb-16">
          <Card className="bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl">Join Our Community</CardTitle>
            </CardHeader>
            <CardContent className="p-6 sm:p-8">
              <p className="mb-4 sm:mb-6 text-sm sm:text-base">Connect with fellow travelers and digital nomads. Share your experiences and get inspired!</p>
              <form className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Input type="email" placeholder="Enter your email" className="flex-grow w-full sm:w-auto" />
                <Button type="submit" className="w-full sm:w-auto">Subscribe</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className={`bg-gray-800 text-white py-6 sm:py-8 ${darkMode ? "bg-gray-900" : ""}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6">
            <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} NomadDiaries. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Link href="#" className="hover:text-primary transition-colors duration-300"><Twitter className="w-4 h-4 sm:w-5 sm:h-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors duration-300"><Facebook className="w-4 h-4 sm:w-5 sm:h-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors duration-300"><Instagram className="w-4 h-4 sm:w-5 sm:h-5" /></Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-end space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Terms of Service</Link>
            <Link href="#" className="hover:underline">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

