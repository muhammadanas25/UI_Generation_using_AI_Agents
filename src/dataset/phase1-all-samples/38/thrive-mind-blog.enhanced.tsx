import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { BookOpen, Lightbulb, Target, Menu, X, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { motion } from "framer-motion"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 py-4 flex items-center bg-gradient-to-r from-purple-600 to-pink-600">
        <Link className="flex items-center justify-center text-white" href="#">
          <Lightbulb className="h-6 w-6" />
          <span className="ml-2 text-xl sm:text-2xl font-bold">ThriveMind</span>
        </Link>
        <nav className="hidden md:flex ml-auto gap-4 lg:gap-6">
          <Link className="text-sm font-medium text-white hover:underline underline-offset-4 transition" href="#">
            Articles
          </Link>
          <Link className="text-sm font-medium text-white hover:underline underline-offset-4 transition" href="#">
            Goal Setting
          </Link>
          <Link className="text-sm font-medium text-white hover:underline underline-offset-4 transition" href="#">
            Productivity
          </Link>
          <Link className="text-sm font-medium text-white hover:underline underline-offset-4 transition" href="#">
            About
          </Link>
        </nav>
        <div className="md:hidden ml-auto">
          <button onClick={() => setIsMenuOpen(true)} className="text-white hover:text-gray-200 transition">
            <Menu className="h-6 w-6" />
          </button>
          <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <DialogContent className="p-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <Link className="flex items-center justify-center" href="#">
                  <Lightbulb className="h-6 w-6 text-purple-600" />
                  <span className="ml-2 text-xl font-bold text-purple-600">ThriveMind</span>
                </Link>
                <button onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-gray-900 transition">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                <Link className="text-lg font-medium hover:underline underline-offset-4 transition text-gray-700" href="#">
                  Articles
                </Link>
                <Link className="text-lg font-medium hover:underline underline-offset-4 transition text-gray-700" href="#">
                  Goal Setting
                </Link>
                <Link className="text-lg font-medium hover:underline underline-offset-4 transition text-gray-700" href="#">
                  Productivity
                </Link>
                <Link className="text-lg font-medium hover:underline underline-offset-4 transition text-gray-700" href="#">
                  About
                </Link>
              </nav>
            </DialogContent>
          </Dialog>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 to-pink-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/hero-background.svg')" }}></div>
          <div className="container relative px-4 md:px-6 z-10">
            <motion.div
              className="flex flex-col items-center space-y-4 sm:space-y-6 text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg">
                Unlock Your Potential with ThriveMind
              </h1>
              <p className="max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 drop-shadow">
                Discover motivational articles, goal-setting strategies, and productivity hacks to transform your life.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 transition">
                  Get Started
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 transition">
                  Learn More
                </Button>
              </div>
              <div className="flex space-x-4 mt-6">
                <Link href="#" className="text-white hover:text-gray-200 transition">
                  <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
                <Link href="#" className="text-white hover:text-gray-200 transition">
                  <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
                <Link href="#" className="text-white hover:text-gray-200 transition">
                  <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
                <Link href="#" className="text-white hover:text-gray-200 transition">
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center mb-8 sm:mb-12">Featured Article</h2>
            <motion.div
              className="flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition p-4 sm:p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                alt="Featured Article Image"
                className="aspect-video overflow-hidden rounded-lg object-cover object-center w-full md:w-1/2 transform hover:scale-105 transition duration-300"
                src="/featured-article.jpg"
                width="600"
                height="300"
              />
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold">5 Habits of Highly Successful People</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Discover the daily routines and mindsets that set successful individuals apart. Learn how to implement these habits in your own life for greater achievement and fulfillment.
                </p>
                <Button className="bg-purple-600 text-white hover:bg-purple-700 transition">
                  Read More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center mb-8 sm:mb-12">Recent Posts</h2>
            <div className="grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "The Power of Positive Affirmations",
                  description: "Learn how daily affirmations can reshape your mindset and boost your confidence.",
                  image: "/post1.jpg"
                },
                {
                  title: "10 Steps to Achieving Your Goals",
                  description: "A comprehensive guide to setting, planning, and accomplishing your personal and professional goals.",
                  image: "/post2.jpg"
                },
                {
                  title: "Mastering the Art of Time Management",
                  description: "Discover effective strategies to maximize your productivity and make the most of your time.",
                  image: "/post3.jpg"
                }
              ].map((post, index) => (
                <motion.div
                  key={index}
                  className="space-y-4 bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <img
                    alt={`${post.title} Image`}
                    className="aspect-video overflow-hidden rounded-t-lg object-cover object-center w-full hover:scale-105 transition duration-300"
                    src={post.image}
                    width="300"
                    height="200"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold">{post.title}</h3>
                    <p className="text-sm text-gray-600">
                      {post.description}
                    </p>
                    <Button variant="link" className="text-purple-600 hover:underline underline-offset-4 transition p-0">
                      Read More
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-100 to-gray-200">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 text-center">
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">Subscribe to Our Newsletter</h2>
                <p className="max-w-2xl text-sm sm:text-base md:text-lg text-gray-600">
                  Get the latest articles, tips, and resources delivered straight to your inbox.
                </p>
              </motion.div>
              <motion.div
                className="w-full max-w-md space-y-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <form className="flex flex-col sm:flex-row items-center gap-2" onSubmit={(e) => e.preventDefault()}>
                  <Input
                    className="flex-1 w-full sm:w-auto"
                    placeholder="Enter your email"
                    type="email"
                    required
                  />
                  <Button type="submit" className="w-full sm:w-auto">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-gray-500">
                  By subscribing, you agree to our <Link href="#" className="underline">Terms of Service</Link> and <Link href="#" className="underline">Privacy Policy</Link>.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 bg-gray-800">
        <p className="text-xs text-gray-400">© 2024 ThriveMind. All rights reserved.</p>
        <nav className="flex gap-4 sm:ml-auto">
          <Link className="text-xs text-gray-400 hover:text-gray-200 transition" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-gray-400 hover:text-gray-200 transition" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <Link href="#" className="text-gray-400 hover:text-gray-200 transition">
            <Facebook className="h-4 w-4" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-200 transition">
            <Twitter className="h-4 w-4" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-200 transition">
            <Instagram className="h-4 w-4" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-200 transition">
            <Linkedin className="h-4 w-4" />
          </Link>
        </div>
      </footer>
    </div>
  )
}

