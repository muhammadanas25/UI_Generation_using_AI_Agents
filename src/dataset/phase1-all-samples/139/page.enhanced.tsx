import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Briefcase, Mail, Menu, Palette, Sun, Moon, ExternalLink } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Component() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-500 ${isDark ? "dark" : ""}`}>
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-white dark:bg-gray-900 shadow-md fixed w-full z-10">
        <Link className="flex items-center justify-center space-x-2" href="#">
          <Palette className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
          <span className="text-xl font-bold text-gray-800 dark:text-gray-100">Alex Harper</span>
        </Link>
        <nav className="flex items-center space-x-4">
          <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#philosophy">
            Philosophy
          </Link>
          <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#contact">
            Contact
          </Link>
          <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            {isDark ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-800" />}
          </button>
        </nav>
      </header>
      <main className="flex-1 pt-20">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center space-y-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-2">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-800 dark:text-gray-100 sm:text-5xl md:text-6xl">
                  Alex Harper
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
                  UI/UX Designer crafting intuitive and beautiful digital experiences
                </p>
              </div>
              <div className="flex space-x-4">
                <Button variant="default">
                  <Link href="#contact" className="flex items-center space-x-2">
                    <Mail className="h-5 w-5" />
                    <span>Get in Touch</span>
                  </Link>
                </Button>
                <Button variant="outline">
                  <Link href="#projects" className="flex items-center space-x-2">
                    <Briefcase className="h-5 w-5" />
                    <span>View Projects</span>
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        <section id="projects" className="w-full py-20 md:py-32 lg:py-40 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tighter text-gray-800 dark:text-gray-100 sm:text-4xl md:text-5xl">Past Projects</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">A selection of my recent work showcasing design excellence and creativity.</p>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "E-commerce Redesign",
                  description: "Improved user experience for an online store",
                  imgSrc: "/ecommerce.svg",
                  imgAlt: "E-commerce project screenshot",
                  link: "#",
                },
                {
                  title: "Health App UI",
                  description: "User-friendly interface for a health tracking app",
                  imgSrc: "/healthapp.svg",
                  imgAlt: "Health app project screenshot",
                  link: "#",
                },
                {
                  title: "Financial Dashboard",
                  description: "Intuitive dashboard for personal finance management",
                  imgSrc: "/financial.svg",
                  imgAlt: "Financial dashboard project screenshot",
                  link: "#",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                >
                  <Card className="hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-indigo-600 dark:text-indigo-400">{project.title}</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="relative h-48">
                      <Image
                        alt={project.imgAlt}
                        className="object-cover rounded-lg shadow-md"
                        layout="fill"
                        src={project.imgSrc}
                        priority
                      />
                      <Link href={project.link}>
                        <a className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-50 transition-bg duration-300">
                          <ExternalLink className="h-8 w-8 text-white opacity-0 hover:opacity-100 transition-opacity duration-300" />
                        </a>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section id="philosophy" className="w-full py-20 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tighter text-gray-800 dark:text-gray-100 sm:text-4xl md:text-5xl">Design Philosophy</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">The principles that drive my design process and decision-making.</p>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "User-Centered Approach",
                  description: "Putting the user's needs and experiences at the forefront of every design decision.",
                  icon: <Palette className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
                },
                {
                  title: "Simplicity and Clarity",
                  description: "Striving for clean, uncluttered designs that communicate clearly and effectively.",
                  icon: <Briefcase className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
                },
                {
                  title: "Accessibility for All",
                  description: "Ensuring designs are inclusive and usable for people of all abilities and backgrounds.",
                  icon: <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
                },
              ].map((philosophy, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="cursor-pointer"
                >
                  <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      {philosophy.icon}
                      <CardTitle className="ml-2 text-lg text-gray-800 dark:text-gray-100">{philosophy.title}</CardTitle>
                    </div>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300">{philosophy.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-20 md:py-32 lg:py-40 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tighter text-gray-800 dark:text-gray-100 sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">I'd love to hear about your project or collaboration ideas.</p>
            </motion.div>
            <div className="mx-auto max-w-2xl">
              <form className="space-y-6" action="#" method="POST">
                <Input required type="text" placeholder="Your Name" className="bg-white dark:bg-gray-700" />
                <Input required type="email" placeholder="Your Email" className="bg-white dark:bg-gray-700" />
                <Textarea required placeholder="Your Message" className="bg-white dark:bg-gray-700" />
                <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0 py-6 px-4 w-full shrink-0 bg-white dark:bg-gray-900 shadow-inner">
        <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 Alex Harper. All rights reserved.</p>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 items-center">
          <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Terms of Service
          </Link>
          <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Privacy
          </Link>
          <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            <ExternalLink className="h-5 w-5" />
          </Link>
        </div>
      </footer>
    </div>
  )
}

