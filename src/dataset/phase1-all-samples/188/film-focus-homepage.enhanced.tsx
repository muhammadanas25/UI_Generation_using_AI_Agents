import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Play, ChevronRight, Instagram, Twitter, LinkedIn } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function FilmFocusHomepage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-6xl md:text-8xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            FilmFocus
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Crafting Visual Stories
          </motion.p>
          <Button className="bg-red-600 hover:bg-red-700 flex items-center mx-auto transition-transform transform hover:scale-105">
            <Play className="mr-2 h-5 w-5 animate-pulse" /> Watch Showreel
          </Button>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <a href="#filmography">
            <ChevronRight className="w-6 h-6 animate-bounce text-red-600" />
          </a>
        </div>
      </section>

      {/* Filmography Section */}
      <section id="filmography" className="py-20 px-4 bg-gray-950">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Filmography
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[1, 2, 3, 4, 5, 6].map((film) => (
            <motion.div
              key={film}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform"
            >
              <Image
                src={`/films/film-${film}.jpg`}
                alt={`Film ${film}`}
                width={500}
                height={750}
                className="w-full h-80 object-cover"
                placeholder="blur"
                blurDataURL="/placeholder.svg"
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Film Title {film}</h3>
                <p className="text-gray-400 mb-4">202{film} | Drama</p>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Behind-the-Scenes Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-gray-900 to-black">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Behind the Scenes
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((clip) => (
            <motion.div
              key={clip}
              className="relative aspect-video rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={`/bts/bts-${clip}.jpg`}
                alt={`Behind the Scenes Clip ${clip}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 transform hover:scale-110"
              />
              <Button
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                size="icon"
              >
                <Play className="h-6 w-6" />
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Director's Notes Section */}
      <section className="py-20 px-4 bg-gray-950">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Director's Notes
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {[1, 2, 3].map((note) => (
            <motion.div
              key={note}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: note * 0.2 }}
            >
              <CardContent className="p-6">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Thoughts on Filmmaking {note}</h3>
                <p className="text-gray-400 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Link href="#">
                  <a className="text-red-500 hover:text-red-400 flex items-center">
                    Read More <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Link>
              </CardContent>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-gray-900 to-black">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Testimonials
        </motion.h2>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start md:space-x-8 space-y-8 md:space-y-0">
          {[1, 2, 3].map((testimonial) => (
            <Card key={testimonial} className="bg-gray-900 p-6 rounded-lg shadow-lg flex-1">
              <CardContent>
                <p className="text-gray-400 mb-4">
                  "FilmFocus has an incredible vision and brings stories to life in a way that truly resonates."
                </p>
                <div className="flex items-center">
                  <Image
                    src={`/testimonials/user-${testimonial}.jpg`}
                    alt={`User ${testimonial}`}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">John Doe</h4>
                    <p className="text-gray-500">Producer at XYZ Films</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-950">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Get in Touch
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Your Message"
              ></textarea>
            </div>
            <Button type="submit" className="bg-red-600 hover:bg-red-700 w-full">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">FilmFocus</h2>
            <p className="text-gray-400">Bringing stories to life through film</p>
            <div className="flex justify-center md:justify-start mt-4 space-x-4">
              <Link href="#">
                <a className="text-gray-400 hover:text-red-600 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
              </Link>
              <Link href="#">
                <a className="text-gray-400 hover:text-red-600 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </Link>
              <Link href="#">
                <a className="text-gray-400 hover:text-red-600 transition-colors">
                  <LinkedIn className="h-6 w-6" />
                </a>
              </Link>
            </div>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" className="hover:bg-gray-800">
              <Link href="#contact">Contact</Link>
            </Button>
            <Button variant="outline" className="hover:bg-gray-800">
              <Link href="https://www.imdb.com">IMDb Profile</Link>
            </Button>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} FilmFocus. All rights reserved.
        </div>
      </footer>
    </div>
  )
}