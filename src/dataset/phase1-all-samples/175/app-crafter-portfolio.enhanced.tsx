import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Smartphone, Mail, Github, Linkedin, Sun, Moon } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Component() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
    if (theme === "light") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white dark:bg-gray-900 shadow-md fixed w-full z-10 transition-colors duration-500">
        <a className="flex items-center justify-center" href="#">
          <Smartphone className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
          <span className="ml-2 text-lg font-bold text-gray-800 dark:text-white">AppCrafter</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#projects">
            Projects
          </a>
          <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#reviews">
            Reviews
          </a>
          <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#contact">
            Contact
          </a>
          <button onClick={toggleTheme} className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
            {theme === "light" ? <Moon className="h-5 w-5 text-gray-800" /> : <Sun className="h-5 w-5 text-yellow-400" />}
            <span className="sr-only">Toggle Theme</span>
          </button>
        </nav>
      </header>
      <main className="flex-1 pt-16">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center space-y-4 text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-800 dark:text-white">
                  Welcome to AppCrafter
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Crafting beautiful and functional mobile experiences. Turning ideas into reality, one app at a time.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="animate-bounce">View Projects</Button>
                <Button variant="outline">Contact Me</Button>
              </div>
            </motion.div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-gray-800 dark:text-white">Featured Projects</h2>
            <Tabs defaultValue="app1" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-white dark:bg-gray-700 rounded-lg shadow">
                <TabsTrigger value="app1" className="py-2">FitTrack Pro</TabsTrigger>
                <TabsTrigger value="app2" className="py-2">EcoShop</TabsTrigger>
                <TabsTrigger value="app3" className="py-2">MindfulMinutes</TabsTrigger>
              </TabsList>
              <TabsContent value="app1">
                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="flex flex-col md:flex-row gap-6 p-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">FitTrack Pro</h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-4">
                        A comprehensive fitness tracking app with personalized workout plans and nutrition guidance.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <img
                          alt="FitTrack Pro Screenshot 1"
                          className="rounded-lg object-cover transform hover:scale-105 transition-transform duration-300"
                          src="/fitness1.jpg"
                        />
                        <img
                          alt="FitTrack Pro Screenshot 2"
                          className="rounded-lg object-cover transform hover:scale-105 transition-transform duration-300"
                          src="/fitness2.jpg"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Key Features</h4>
                      <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-300">
                        <li>Personalized workout plans</li>
                        <li>Nutrition tracking and meal suggestions</li>
                        <li>Progress visualization</li>
                        <li>Integration with wearable devices</li>
                      </ul>
                      <Button className="mt-auto">View Prototype</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="app2">
                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="flex flex-col md:flex-row gap-6 p-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">EcoShop</h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-4">
                        An e-commerce platform focused on eco-friendly and sustainable products.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <img
                          alt="EcoShop Screenshot 1"
                          className="rounded-lg object-cover transform hover:scale-105 transition-transform duration-300"
                          src="/ecoshop1.jpg"
                        />
                        <img
                          alt="EcoShop Screenshot 2"
                          className="rounded-lg object-cover transform hover:scale-105 transition-transform duration-300"
                          src="/ecoshop2.jpg"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Key Features</h4>
                      <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-300">
                        <li>Product sustainability ratings</li>
                        <li>Carbon footprint calculator</li>
                        <li>Eco-friendly packaging options</li>
                        <li>Community marketplace for used items</li>
                      </ul>
                      <Button className="mt-auto">View Prototype</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="app3">
                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="flex flex-col md:flex-row gap-6 p-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">MindfulMinutes</h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-4">
                        A meditation and mindfulness app designed to reduce stress and improve mental well-being.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <img
                          alt="MindfulMinutes Screenshot 1"
                          className="rounded-lg object-cover transform hover:scale-105 transition-transform duration-300"
                          src="/mindful1.jpg"
                        />
                        <img
                          alt="MindfulMinutes Screenshot 2"
                          className="rounded-lg object-cover transform hover:scale-105 transition-transform duration-300"
                          src="/mindful2.jpg"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Key Features</h4>
                      <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-300">
                        <li>Guided meditation sessions</li>
                        <li>Mood tracking and analysis</li>
                        <li>Breathing exercises</li>
                        <li>Sleep stories and ambient sounds</li>
                      </ul>
                      <Button className="mt-auto">View Prototype</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section id="reviews" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-t from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-gray-800 dark:text-white">User Reviews</h2>
            <div className="swiper-container">
              <div className="swiper-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 italic">
                      "AppCrafter delivered an exceptional app that exceeded our expectations. Their attention to detail and
                      user-centric design approach resulted in a product our customers love."
                    </p>
                    <div className="flex items-center">
                      <img
                        alt="Avatar"
                        className="rounded-full mr-4 transform hover:scale-110 transition-transform duration-300"
                        src="/sarah.jpg"
                      />
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Sarah Johnson</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">CEO, TechInnovate</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 italic">
                      "Working with AppCrafter was a breeze. They took our concept and turned it into a beautiful, functional
                      app that our users adore. Highly recommended!"
                    </p>
                    <div className="flex items-center">
                      <img
                        alt="Avatar"
                        className="rounded-full mr-4 transform hover:scale-110 transition-transform duration-300"
                        src="/michael.jpg"
                      />
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Michael Chen</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Founder, GreenEats</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 italic">
                      "The UI/UX design skills of AppCrafter are top-notch. They created an intuitive and visually appealing
                      interface that has significantly improved our user engagement."
                    </p>
                    <div className="flex items-center">
                      <img
                        alt="Avatar"
                        className="rounded-full mr-4 transform hover:scale-110 transition-transform duration-300"
                        src="/emily.jpg"
                      />
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Emily Rodriguez</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Product Manager, HealthHub</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-gray-800 dark:text-white">Get in Touch</h2>
            <div className="max-w-lg mx-auto">
              <form className="space-y-6">
                <Input placeholder="Your Name" required className="border-gray-300 dark:border-gray-600" />
                <Input placeholder="Your Email" type="email" required className="border-gray-300 dark:border-gray-600" />
                <Textarea placeholder="Your Message" required className="border-gray-300 dark:border-gray-600" />
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors duration-300">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white dark:bg-gray-900 transition-colors duration-500">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 AppCrafter. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
            Terms of Service
          </a>
          <a className="text-xs text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
            Privacy
          </a>
        </nav>
        <div className="flex gap-4">
          <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </footer>
    </div>
  )
}