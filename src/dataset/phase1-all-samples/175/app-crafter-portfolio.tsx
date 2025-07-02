import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Smartphone, Mail, Github, Linkedin } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <Smartphone className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">AppCrafter</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
            Projects
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#reviews">
            Reviews
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to AppCrafter
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Crafting beautiful and functional mobile experiences. Turning ideas into reality, one app at a time.
                </p>
              </div>
              <div className="space-x-4">
                <Button>View Projects</Button>
                <Button variant="outline">Contact Me</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Featured Projects</h2>
            <Tabs defaultValue="app1" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="app1">FitTrack Pro</TabsTrigger>
                <TabsTrigger value="app2">EcoShop</TabsTrigger>
                <TabsTrigger value="app3">MindfulMinutes</TabsTrigger>
              </TabsList>
              <TabsContent value="app1">
                <Card>
                  <CardContent className="flex flex-col md:flex-row gap-6 p-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">FitTrack Pro</h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-4">
                        A comprehensive fitness tracking app with personalized workout plans and nutrition guidance.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <img
                          alt="FitTrack Pro Screenshot 1"
                          className="rounded-lg object-cover"
                          height="200"
                          src="/placeholder.svg?height=200&width=200"
                          style={{
                            aspectRatio: "200/200",
                            objectFit: "cover",
                          }}
                          width="200"
                        />
                        <img
                          alt="FitTrack Pro Screenshot 2"
                          className="rounded-lg object-cover"
                          height="200"
                          src="/placeholder.svg?height=200&width=200"
                          style={{
                            aspectRatio: "200/200",
                            objectFit: "cover",
                          }}
                          width="200"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">Key Features</h4>
                      <ul className="list-disc list-inside mb-4">
                        <li>Personalized workout plans</li>
                        <li>Nutrition tracking and meal suggestions</li>
                        <li>Progress visualization</li>
                        <li>Integration with wearable devices</li>
                      </ul>
                      <Button>View Prototype</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="app2">
                <Card>
                  <CardContent className="flex flex-col md:flex-row gap-6 p-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">EcoShop</h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-4">
                        An e-commerce platform focused on eco-friendly and sustainable products.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <img
                          alt="EcoShop Screenshot 1"
                          className="rounded-lg object-cover"
                          height="200"
                          src="/placeholder.svg?height=200&width=200"
                          style={{
                            aspectRatio: "200/200",
                            objectFit: "cover",
                          }}
                          width="200"
                        />
                        <img
                          alt="EcoShop Screenshot 2"
                          className="rounded-lg object-cover"
                          height="200"
                          src="/placeholder.svg?height=200&width=200"
                          style={{
                            aspectRatio: "200/200",
                            objectFit: "cover",
                          }}
                          width="200"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">Key Features</h4>
                      <ul className="list-disc list-inside mb-4">
                        <li>Product sustainability ratings</li>
                        <li>Carbon footprint calculator</li>
                        <li>Eco-friendly packaging options</li>
                        <li>Community marketplace for used items</li>
                      </ul>
                      <Button>View Prototype</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="app3">
                <Card>
                  <CardContent className="flex flex-col md:flex-row gap-6 p-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">MindfulMinutes</h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-4">
                        A meditation and mindfulness app designed to reduce stress and improve mental well-being.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <img
                          alt="MindfulMinutes Screenshot 1"
                          className="rounded-lg object-cover"
                          height="200"
                          src="/placeholder.svg?height=200&width=200"
                          style={{
                            aspectRatio: "200/200",
                            objectFit: "cover",
                          }}
                          width="200"
                        />
                        <img
                          alt="MindfulMinutes Screenshot 2"
                          className="rounded-lg object-cover"
                          height="200"
                          src="/placeholder.svg?height=200&width=200"
                          style={{
                            aspectRatio: "200/200",
                            objectFit: "cover",
                          }}
                          width="200"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">Key Features</h4>
                      <ul className="list-disc list-inside mb-4">
                        <li>Guided meditation sessions</li>
                        <li>Mood tracking and analysis</li>
                        <li>Breathing exercises</li>
                        <li>Sleep stories and ambient sounds</li>
                      </ul>
                      <Button>View Prototype</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section id="reviews" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">User Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    "AppCrafter delivered an exceptional app that exceeded our expectations. Their attention to detail and
                    user-centric design approach resulted in a product our customers love."
                  </p>
                  <div className="flex items-center">
                    <img
                      alt="Avatar"
                      className="rounded-full mr-4"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <p className="font-semibold">Sarah Johnson</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">CEO, TechInnovate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    "Working with AppCrafter was a breeze. They took our concept and turned it into a beautiful, functional
                    app that our users adore. Highly recommended!"
                  </p>
                  <div className="flex items-center">
                    <img
                      alt="Avatar"
                      className="rounded-full mr-4"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <p className="font-semibold">Michael Chen</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Founder, GreenEats</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    "The UI/UX design skills of AppCrafter are top-notch. They created an intuitive and visually appealing
                    interface that has significantly improved our user engagement."
                  </p>
                  <div className="flex items-center">
                    <img
                      alt="Avatar"
                      className="rounded-full mr-4"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <p className="font-semibold">Emily Rodriguez</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Product Manager, HealthHub</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Get in Touch</h2>
            <div className="max-w-lg mx-auto">
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" type="email" />
                <Textarea placeholder="Your Message" />
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 AppCrafter. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
        <div className="flex gap-4">
          <a href="#" className="text-gray-500 hover:text-gray-700">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </footer>
    </div>
  )
}