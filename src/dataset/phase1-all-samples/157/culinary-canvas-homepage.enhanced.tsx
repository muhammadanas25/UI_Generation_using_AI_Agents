import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChefHat, PlayCircle, Utensils, Menu, X, Instagram, YouTube, Twitter } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <a className="flex items-center text-2xl font-bold text-gray-900">
              <ChefHat className="mr-2 w-8 h-8" />
              CulinaryCanvas
            </a>
          </Link>
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              <li><a href="#dishes" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Signature Dishes</a></li>
              <li><a href="#videos" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Cooking Videos</a></li>
              <li><a href="#collaborations" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Collaborations</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Contact</a></li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)} className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
        <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <DialogContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                <X className="w-6 h-6" />
              </button>
            </div>
            <ul className="flex flex-col space-y-4">
              <li><a href="#dishes" className="text-gray-600 hover:text-gray-900 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Signature Dishes</a></li>
              <li><a href="#videos" className="text-gray-600 hover:text-gray-900 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Cooking Videos</a></li>
              <li><a href="#collaborations" className="text-gray-600 hover:text-gray-900 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Collaborations</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            </ul>
          </DialogContent>
        </Dialog>
      </header>

      <main className="flex-grow mt-16">
        <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-24 md:py-32">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center animate-fadeIn">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slideInLeft">Welcome to My Culinary World</h2>
              <p className="text-xl mb-8 animate-fadeIn">Explore the art of flavor through my signature dishes, cooking videos, and restaurant collaborations.</p>
              <Button variant="default" size="lg" className="animate-bounce">
                <a href="#dishes">Explore Dishes</a>
              </Button>
            </div>
            <div className="w-full md:w-1/2">
              <img src="/placeholder.svg?height=400&width=600" alt="Featured Dish" className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </section>

        <section id="dishes" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Signature Dishes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Truffle Risotto", description: "Creamy Arborio rice with black truffle", image: "/placeholder.svg?height=200&width=300" },
                { title: "Seared Scallops", description: "Pan-seared scallops with cauliflower purée", image: "/placeholder.svg?height=200&width=300" },
                { title: "Chocolate Soufflé", description: "Light and airy chocolate dessert", image: "/placeholder.svg?height=200&width=300" }
              ].map((dish, index) => (
                <Card key={index} className="hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>{dish.title}</CardTitle>
                    <CardDescription>{dish.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img src={dish.image} alt={dish.title} className="rounded-lg mb-4 transform hover:scale-105 transition-transform duration-300" />
                    <Button variant="secondary" size="sm">
                      View Recipe
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="videos" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Cooking Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Mastering the Perfect Steak", duration: "15:30", image: "/placeholder.svg?height=200&width=400" },
                { title: "Quick and Easy Pasta Dishes", duration: "12:45", image: "/placeholder.svg?height=200&width=400" },
                { title: "Baking 101: Artisan Bread", duration: "20:15", image: "/placeholder.svg?height=200&width=400" },
                { title: "Sushi Rolling Techniques", duration: "18:00", image: "/placeholder.svg?height=200&width=400" }
              ].map((video, index) => (
                <Card key={index} className="hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <PlayCircle className="mr-2" />
                      {video.title}
                    </CardTitle>
                    <CardDescription>Duration: {video.duration}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Dialog>
                      <DialogTrigger>
                        <img src={video.image} alt={video.title} className="rounded-lg cursor-pointer transform hover:scale-105 transition-transform duration-300" />
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        <div className="relative pb-[56.25%]">
                          <iframe
                            src={`https://www.youtube.com/embed/dQw4w9WgXcQ`}
                            title={video.title}
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="collaborations" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Restaurant Collaborations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Bistro Nouveau", location: "Paris, France", image: "/placeholder.svg?height=200&width=300" },
                { name: "Sakura Sushi", location: "Tokyo, Japan", image: "/placeholder.svg?height=200&width=300" },
                { name: "Rustic Table", location: "Tuscany, Italy", image: "/placeholder.svg?height=200&width=300" }
              ].map((restaurant, index) => (
                <Card key={index} className="hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Utensils className="mr-2" />
                      {restaurant.name}
                    </CardTitle>
                    <CardDescription>{restaurant.location}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img src={restaurant.image} alt={restaurant.name} className="rounded-lg mb-4 transform hover:scale-105 transition-transform duration-300" />
                    <Button variant="secondary" size="sm">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gray-200 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get in Touch</h2>
            <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" required></textarea>
                </div>
                <Button type="submit" variant="default" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">CulinaryCanvas</h3>
              <p>Elevating the art of cooking, one dish at a time.</p>
            </div>
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Contact</h4>
              <p>Email: <a href="mailto:chef@culinarycanvas.com" className="hover:underline">chef@culinarycanvas.com</a></p>
              <p>Phone: <a href="tel:+11234567890" className="hover:underline">(123) 456-7890</a></p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-400 transition-colors duration-300"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="hover:text-gray-400 transition-colors duration-300"><YouTube className="w-5 h-5" /></a>
                <a href="#" className="hover:text-gray-400 transition-colors duration-300"><Twitter className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500">
            &copy; {new Date().getFullYear()} CulinaryCanvas. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}