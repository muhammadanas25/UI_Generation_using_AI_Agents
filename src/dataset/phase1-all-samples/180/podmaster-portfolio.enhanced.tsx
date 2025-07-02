import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, Play, User, ChevronRight, ChevronLeft, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"

export default function PodMasterPortfolio() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const testimonials = [
    {
      quote: "This podcast has been incredibly insightful and entertaining. I look forward to every new episode!",
      author: "Happy Listener 1",
    },
    {
      quote: "PodMaster's interviews are top-notch. The guests are always fascinating and the discussions are deep.",
      author: "Happy Listener 2",
    },
    {
      quote: "A must-listen for anyone interested in engaging conversations and compelling stories.",
      author: "Happy Listener 3",
    },
  ]

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link className="flex items-center space-x-2 hover:opacity-80 transition" href="/">
            <Mic className="h-6 w-6 text-indigo-600" />
            <span className="text-lg font-bold text-indigo-600">PodMaster</span>
          </Link>
          <nav className="flex items-center space-x-4 sm:space-x-6">
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition" href="#episodes">
              Episodes
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition" href="#guests">
              Guests
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition" href="#about">
              About
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition" href="#contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 mt-16">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-r from-indigo-500 to-purple-600">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Welcome to PodMaster
              </motion.h1>
              <motion.p
                className="max-w-2xl text-lg md:text-2xl text-indigo-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Exploring fascinating stories and insights through engaging conversations.
              </motion.p>
              <motion.div
                className="flex space-x-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Button className="px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 transition" onClick={() => document.getElementById('episodes').scrollIntoView({ behavior: 'smooth' })}>
                  Listen Now
                </Button>
                <Button variant="outline" className="px-6 py-3 text-white border border-white hover:bg-white hover:text-indigo-600 transition" onClick={() => document.getElementById('episodes').scrollIntoView({ behavior: 'smooth' })}>
                  View Episodes
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="episodes" className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Featured Episodes
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((episode) => (
                <Card key={episode} className="transform hover:scale-105 transition-transform shadow-lg">
                  <CardContent className="p-4 flex flex-col">
                    <Image
                      alt={`Episode ${episode}`}
                      className="rounded-lg object-cover w-full h-48 mb-4"
                      height={192}
                      src={`/episodes/episode-${episode}.jpg`}
                      width={384}
                    />
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Episode {episode}: Exciting Topic</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                      A brief description of the episode and its fascinating content.
                    </p>
                    <Button className="mt-auto flex items-center justify-center" variant="outline">
                      <Play className="mr-2 h-4 w-4" />
                      Listen Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="guests" className="w-full py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Featured Guests
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((guest) => (
                <Card key={guest} className="transform hover:scale-105 transition-transform shadow-lg">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <Image
                      alt={`Guest ${guest}`}
                      className="rounded-full object-cover w-24 h-24 mb-4"
                      height={96}
                      src={`/guests/guest-${guest}.jpg`}
                      width={96}
                    />
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Guest Name {guest}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Brief bio or description of the guest and their expertise.
                    </p>
                    <Button variant="outline" className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4" />
                      View Episode
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Audience Testimonials
            </motion.h2>
            <div className="relative">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="transform hover:scale-105 transition-transform shadow-lg">
                  <CardContent className="p-6 flex flex-col">
                    <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                      "{testimonials[activeTestimonial].quote}"
                    </p>
                    <p className="font-bold text-gray-800 dark:text-white">
                      - {testimonials[activeTestimonial].author}
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex space-x-2">
                <button onClick={prevTestimonial} className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button onClick={nextTestimonial} className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="subscribe" className="w-full py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Subscribe to PodMaster
              </motion.h2>
              <motion.p
                className="max-w-2xl text-lg md:text-xl text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Never miss an episode. Get notified about new releases and exclusive content.
              </motion.p>
              <motion.form
                className="w-full max-w-md flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                onSubmit={(e) => {
                  e.preventDefault()
                  // Handle subscription logic
                }}
              >
                <input
                  className="flex-1 w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  placeholder="Enter your email"
                  type="email"
                  required
                />
                <Button type="submit" className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white hover:bg-indigo-700 transition">
                  Subscribe
                </Button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-gray-100 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 PodMaster. All rights reserved.</p>
          <nav className="flex space-x-4 sm:space-x-6 mt-4 sm:mt-0">
            <Link className="text-xs text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition" href="#">
              Privacy
            </Link>
            <Link className="text-xs text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition" href="#">
              Twitter
            </Link>
            <Link className="text-xs text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition" href="#">
              Instagram
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}