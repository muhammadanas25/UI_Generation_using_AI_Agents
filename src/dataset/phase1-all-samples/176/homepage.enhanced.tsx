import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Instagram, Twitter, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link className="flex items-center text-2xl font-bold text-blue-600" href="#">
            <Image src="/logo.svg" alt="FitFocus Logo" width={40} height={40} className="mr-2" />
            FitFocus
          </Link>
          <nav className="hidden lg:flex space-x-6">
            <Link className="text-sm font-medium text-gray-700 hover:text-blue-600 transition" href="#">
              Home
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-blue-600 transition" href="#">
              Routines
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-blue-600 transition" href="#">
              Transformations
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-blue-600 transition" href="#">
              Programs
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-blue-600 transition" href="#">
              Contact
            </Link>
          </nav>
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 hover:text-blue-600 focus:outline-none">
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            className="lg:hidden bg-white shadow-md"
          >
            <div className="px-4 py-2 space-y-2">
              <Link className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition" href="#">
                Home
              </Link>
              <Link className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition" href="#">
                Routines
              </Link>
              <Link className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition" href="#">
                Transformations
              </Link>
              <Link className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition" href="#">
                Programs
              </Link>
              <Link className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition" href="#">
                Contact
              </Link>
            </div>
          </motion.nav>
        )}
      </header>
      <main className="flex-1 mt-16">
        <section className="w-full py-20 bg-cover bg-center" style={{ backgroundImage: 'url(/hero-bg.jpg)' }}>
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
                Transform Your Body, Transform Your Life
              </h1>
              <p className="mx-auto max-w-xl text-lg md:text-2xl text-gray-200">
                Join FitFocus and start your fitness journey today. Personalized workout routines and expert guidance to help you achieve your goals.
              </p>
              <div className="flex justify-center space-x-4">
                <Button className="bg-blue-600 text-white hover:bg-blue-700 transition">Get Started</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600 transition">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </section>
        <section className="w-full py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Featured Workout Routines
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="transform hover:scale-105 transition duration-300">
                <CardHeader>
                  <CardTitle>Full Body Blast</CardTitle>
                  <CardDescription>45 minutes | High Intensity</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/full-body.jpg"
                    alt="Full Body Workout"
                    className="w-full h-48 object-cover rounded-md"
                    width={500}
                    height={300}
                  />
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition">View Routine</Button>
                </CardFooter>
              </Card>
              <Card className="transform hover:scale-105 transition duration-300">
                <CardHeader>
                  <CardTitle>Core Crusher</CardTitle>
                  <CardDescription>30 minutes | Medium Intensity</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/core-crusher.jpg"
                    alt="Core Workout"
                    className="w-full h-48 object-cover rounded-md"
                    width={500}
                    height={300}
                  />
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition">View Routine</Button>
                </CardFooter>
              </Card>
              <Card className="transform hover:scale-105 transition duration-300">
                <CardHeader>
                  <CardTitle>Leg Day Domination</CardTitle>
                  <CardDescription>60 minutes | High Intensity</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/leg-day.jpg"
                    alt="Leg Workout"
                    className="w-full h-48 object-cover rounded-md"
                    width={500}
                    height={300}
                  />
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition">View Routine</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Client Transformations
            </motion.h2>
            <div className="carousel relative overflow-hidden h-96">
              <motion.div
                className="flex transition-transform duration-700"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="relative min-w-full">
                  <Image
                    src="/transformation1.jpg"
                    alt="Client Transformation 1"
                    className="w-full h-96 object-cover"
                    width={800}
                    height={600}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <p className="font-bold">John D.</p>
                    <p>Lost 30 lbs in 3 months</p>
                  </div>
                </div>
                <div className="relative min-w-full">
                  <Image
                    src="/transformation2.jpg"
                    alt="Client Transformation 2"
                    className="w-full h-96 object-cover"
                    width={800}
                    height={600}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <p className="font-bold">Sarah M.</p>
                    <p>Gained 10 lbs of muscle in 6 months</p>
                  </div>
                </div>
                <div className="relative min-w-full">
                  <Image
                    src="/transformation3.jpg"
                    alt="Client Transformation 3"
                    className="w-full h-96 object-cover"
                    width={800}
                    height={600}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <p className="font-bold">Mike R.</p>
                    <p>Improved overall fitness and energy levels</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Training Programs
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="transform hover:shadow-xl transition duration-300">
                <CardHeader>
                  <CardTitle>Beginner's Bootcamp</CardTitle>
                  <CardDescription>8-week program</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Foundation exercises</li>
                    <li>Nutrition basics</li>
                    <li>Gradual intensity increase</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 text-white hover:bg-green-700 transition">Enroll Now</Button>
                </CardFooter>
              </Card>
              <Card className="transform hover:shadow-xl transition duration-300">
                <CardHeader>
                  <CardTitle>Strength Builder</CardTitle>
                  <CardDescription>12-week program</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Progressive overload</li>
                    <li>Compound movements</li>
                    <li>Muscle group focus</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 text-white hover:bg-green-700 transition">Enroll Now</Button>
                </CardFooter>
              </Card>
              <Card className="transform hover:shadow-xl transition duration-300">
                <CardHeader>
                  <CardTitle>Elite Performance</CardTitle>
                  <CardDescription>16-week program</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Advanced techniques</li>
                    <li>Periodization</li>
                    <li>Sport-specific training</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 text-white hover:bg-green-700 transition">Enroll Now</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">Subscribe to Our Newsletter</h2>
            <div className="flex justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <Button className="px-6 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-gray-200">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2024 FitFocus. All rights reserved.</p>
          <nav className="flex space-x-4 mt-4 md:mt-0">
            <Link className="text-sm hover:text-white transition" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:text-white transition" href="#">
              Privacy
            </Link>
          </nav>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-white transition">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="hover:text-white transition">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}