import { useState } from "react"
import { ChevronLeft, ChevronRight, Calendar, MapPin, ArrowRight, Mail, Phone, Instagram, Twitter, Facebook } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export default function ColorCanvasPortfolio() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const paintings = [
    { title: "Sunset Serenity", url: "/placeholder.svg?height=400&width=600" },
    { title: "Urban Rhythm", url: "/placeholder.svg?height=400&width=600" },
    { title: "Nature's Whisper", url: "/placeholder.svg?height=400&width=600" },
    { title: "Abstract Emotions", url: "/placeholder.svg?height=400&width=600" },
  ]

  const exhibitions = [
    { title: "Colors of Life", date: "2023-08-15", location: "New York City" },
    { title: "Brushstrokes of Passion", date: "2023-10-01", location: "Paris" },
    { title: "Canvas Dreams", date: "2023-11-20", location: "Tokyo" },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % paintings.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + paintings.length) % paintings.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary animate-fadeIn">ColorCanvas</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#gallery" className="text-gray-600 hover:text-primary transition-colors duration-300">Gallery</a></li>
              <li><a href="#exhibitions" className="text-gray-600 hover:text-primary transition-colors duration-300">Exhibitions</a></li>
              <li><a href="#studio" className="text-gray-600 hover:text-primary transition-colors duration-300">Studio</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-primary transition-colors duration-300">Contact</a></li>
            </ul>
          </nav>
          <Button variant="secondary" className="hidden md:inline-flex items-center">
            <span>Hire Me</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-24">
        <section className="mb-20 text-center">
          <h2 className="text-5xl font-extrabold text-primary mb-6 animate-slideIn">Welcome to My Colorful World</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-fadeIn">
            Explore the vibrant creations of ColorCanvas, where every stroke tells a story and every hue evokes an emotion.
          </p>
          <Button variant="primary" className="mt-8 animate-bounce">
            View Gallery
          </Button>
        </section>

        <section id="gallery" className="mb-20">
          <h2 className="text-4xl font-semibold mb-8 text-center">Featured Paintings</h2>
          <div className="relative group">
            <img
              src={paintings[currentImageIndex].url}
              alt={paintings[currentImageIndex].title}
              className="w-full h-[400px] object-cover rounded-lg shadow-lg transition-transform duration-500 transform group-hover:scale-105"
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white transition-opacity duration-300"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white transition-opacity duration-300"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </Button>
            <div className="absolute bottom-4 left-4 bg-white/80 px-4 py-2 rounded-md">
              <h3 className="text-lg font-semibold">{paintings[currentImageIndex].title}</h3>
            </div>
            <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button variant="secondary" size="icon" onClick={() => setIsOpen(true)}>
                <Mail className="h-4 w-4" />
              </Button>
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button variant="secondary" size="icon" className="hidden"></Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogTitle>Contact Artist</DialogTitle>
                  <DialogDescription>
                    <form className="mt-4 space-y-4">
                      <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                      <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                      <textarea placeholder="Your Message" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" rows="4"></textarea>
                      <Button type="submit" variant="primary" className="w-full">Send Message</Button>
                    </form>
                  </DialogDescription>
                </DialogContent>
              </Dialog>
              <Button variant="secondary" size="icon">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section id="exhibitions" className="mb-20">
          <h2 className="text-4xl font-semibold mb-8 text-center">Upcoming Exhibitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exhibitions.map((exhibition, index) => (
              <Card key={index} className="hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{exhibition.title}</h3>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-primary" />
                    {new Date(exhibition.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-primary" />
                    {exhibition.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="studio" className="mb-20">
          <h2 className="text-4xl font-semibold mb-8 text-center">Studio Sessions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Studio Session"
                className="w-full h-[300px] object-cover rounded-lg shadow-lg transition-transform duration-500 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                <h3 className="text-xl font-semibold mb-2">Behind the Canvas</h3>
                <p className="px-4">Get a glimpse into the creative process and the inspiration behind each masterpiece.</p>
              </div>
            </div>
            <div className="group relative">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Live Painting"
                className="w-full h-[300px] object-cover rounded-lg shadow-lg transition-transform duration-500 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                <h3 className="text-xl font-semibold mb-2">Live Painting Sessions</h3>
                <p className="px-4">Join interactive live sessions where you can watch the artist bring new creations to life.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-semibold mb-8 text-center">Art Styles</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="hover:bg-primary hover:text-white transition-colors duration-300">Abstract</Badge>
            <Badge variant="secondary" className="hover:bg-primary hover:text-white transition-colors duration-300">Impressionism</Badge>
            <Badge variant="secondary" className="hover:bg-primary hover:text-white transition-colors duration-300">Contemporary</Badge>
            <Badge variant="secondary" className="hover:bg-primary hover:text-white transition-colors duration-300">Surrealism</Badge>
            <Badge variant="secondary" className="hover:bg-primary hover:text-white transition-colors duration-300">Expressionism</Badge>
            <Badge variant="secondary" className="hover:bg-primary hover:text-white transition-colors duration-300">Minimalism</Badge>
          </div>
        </section>

        <section id="testimonials" className="mb-20">
          <h2 className="text-4xl font-semibold mb-8 text-center">Testimonials</h2>
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            <Card className="flex-1 hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">"ColorCanvas brings emotions to life with every brushstroke. Truly captivating work!"</p>
                <p className="font-semibold">- Emily R.</p>
              </CardContent>
            </Card>
            <Card className="flex-1 hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">"An exceptional artist whose work transforms any space into a vibrant gallery."</p>
                <p className="font-semibold">- Michael S.</p>
              </CardContent>
            </Card>
            <Card className="flex-1 hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">"The depth and creativity in every piece are simply unmatched."</p>
                <p className="font-semibold">- Sophia L.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="mb-20">
          <h2 className="text-4xl font-semibold mb-8 text-center">Get in Touch</h2>
          <div className="flex flex-col md:flex-row md:space-x-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <p className="flex items-center text-gray-700 mb-2">
                <Phone className="mr-2 h-5 w-5 text-primary" /> +1 (234) 567-890
              </p>
              <p className="flex items-center text-gray-700 mb-2">
                <Mail className="mr-2 h-5 w-5 text-primary" /> info@colorcanvas.com
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                <textarea placeholder="Your Message" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" rows="4"></textarea>
                <Button type="submit" variant="primary" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center text-gray-400 mb-4 md:mb-0">
            © 2023 ColorCanvas. All rights reserved. | Contact: info@colorcanvas.com
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}