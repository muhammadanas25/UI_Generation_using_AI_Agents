import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { SunIcon, MoonIcon, SearchIcon, Menu } from 'lucide-react'
import { useState } from "react"

export default function Component() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-background transition-colors duration-500`}>
      <header className="bg-primary text-primary-foreground shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold">LiveWell</h1>
            <nav className="hidden md:block">
              <ul className="flex space-x-4 items-center">
                <li><Link href="#" className="hover:underline transition duration-300">Home</Link></li>
                <li><Link href="#" className="hover:underline transition duration-300">Wellness</Link></li>
                <li><Link href="#" className="hover:underline transition duration-300">Beauty</Link></li>
                <li><Link href="#" className="hover:underline transition duration-300">Fitness</Link></li>
                <li><Link href="#" className="hover:underline transition duration-300">About</Link></li>
                <li>
                  <Button variant="ghost" onClick={() => setDarkMode(!darkMode)} className="p-2">
                    {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
                  </Button>
                </li>
              </ul>
            </nav>
            <Button variant="ghost" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="md:hidden fixed top-16 left-0 right-0 bg-primary text-primary-foreground z-40"
        >
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-2">
              <li><Link href="#" className="block py-2 hover:underline transition duration-300">Home</Link></li>
              <li><Link href="#" className="block py-2 hover:underline transition duration-300">Wellness</Link></li>
              <li><Link href="#" className="block py-2 hover:underline transition duration-300">Beauty</Link></li>
              <li><Link href="#" className="block py-2 hover:underline transition duration-300">Fitness</Link></li>
              <li><Link href="#" className="block py-2 hover:underline transition duration-300">About</Link></li>
              <li>
                <Button variant="ghost" onClick={() => setDarkMode(!darkMode)} className="w-full justify-start p-2">
                  {darkMode ? <SunIcon className="w-5 h-5 mr-2" /> : <MoonIcon className="w-5 h-5 mr-2" />}
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
                </Button>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}

      <main className="container mx-auto px-4 py-24">
        <section className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-secondary hover:shadow-lg transform hover:-translate-y-2 transition duration-300">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Featured Post: 10 Minute Morning Yoga Routine</h2>
                    <p className="text-sm md:text-base text-muted-foreground mb-4">Start your day right with this energizing yoga sequence that will awaken your body and mind.</p>
                    <Button className="transition transform hover:scale-105 w-full md:w-auto">Read More</Button>
                  </div>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img src="/yoga.jpg" alt="Woman doing yoga" className="object-cover w-full h-full transition-transform duration-300 hover:scale-110" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4">Wellness</h2>
            <Card className="hover:shadow-lg transition duration-300">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">5 Meditation Techniques for Stress Relief</CardTitle>
              </CardHeader>
              <CardContent>
                <img src="/meditation.jpg" alt="Person meditating" className="rounded-lg mb-4 transform hover:scale-105 transition duration-300 w-full" />
                <p className="text-sm md:text-base text-muted-foreground">Discover powerful meditation techniques to reduce stress and find inner peace.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Read More</Button>
              </CardFooter>
            </Card>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4">Beauty</h2>
            <Card className="hover:shadow-lg transition duration-300">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Natural Skincare Routine for Glowing Skin</CardTitle>
              </CardHeader>
              <CardContent>
                <img src="/skincare.jpg" alt="Skincare products" className="rounded-lg mb-4 transform hover:scale-105 transition duration-300 w-full" />
                <p className="text-sm md:text-base text-muted-foreground">Learn how to achieve radiant skin using all-natural ingredients from your kitchen.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Read More</Button>
              </CardFooter>
            </Card>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4">Fitness</h2>
            <Card className="hover:shadow-lg transition duration-300">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">High-Intensity Interval Training for Busy Professionals</CardTitle>
              </CardHeader>
              <CardContent>
                <img src="/hiit.jpg" alt="Person exercising" className="rounded-lg mb-4 transform hover:scale-105 transition duration-300 w-full" />
                <p className="text-sm md:text-base text-muted-foreground">Maximize your workout efficiency with these quick and effective HIIT routines.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Read More</Button>
              </CardFooter>
            </Card>
          </section>
        </div>

        <section className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <Card className="bg-secondary hover:shadow-lg transition duration-300">
            <CardContent className="p-6">
              <form className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Input type="email" placeholder="Enter your email" className="flex-grow w-full" />
                <Button type="submit" className="w-full sm:w-auto">Subscribe</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-secondary mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <div className="flex justify-center space-x-4 mb-4">
            <Link href="#" className="hover:text-primary transition duration-300"><SunIcon className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-primary transition duration-300"><MoonIcon className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-primary transition duration-300"><SearchIcon className="w-5 h-5" /></Link>
          </div>
          <p className="text-sm md:text-base">&copy; 2024 LiveWell. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

