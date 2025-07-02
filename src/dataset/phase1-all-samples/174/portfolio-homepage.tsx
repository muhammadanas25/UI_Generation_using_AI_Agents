import { useState } from "react"
import { ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ColorCanvasPortfolio() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

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
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary">ColorCanvas</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#gallery" className="text-gray-600 hover:text-primary">Gallery</a></li>
              <li><a href="#exhibitions" className="text-gray-600 hover:text-primary">Exhibitions</a></li>
              <li><a href="#studio" className="text-gray-600 hover:text-primary">Studio</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8">Welcome to My Colorful World</h2>
          <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto">
            Explore the vibrant creations of ColorCanvas, where every stroke tells a story and every hue evokes an emotion.
          </p>
        </section>

        <section id="gallery" className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Featured Paintings</h2>
          <div className="relative">
            <img
              src={paintings[currentImageIndex].url}
              alt={paintings[currentImageIndex].title}
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <div className="absolute bottom-4 left-4 bg-white/80 px-4 py-2 rounded">
              <h3 className="text-lg font-semibold">{paintings[currentImageIndex].title}</h3>
            </div>
          </div>
        </section>

        <section id="exhibitions" className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Upcoming Exhibitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exhibitions.map((exhibition, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{exhibition.title}</h3>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    {new Date(exhibition.date).toLocaleDateString()}
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    {exhibition.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="studio" className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Studio Sessions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Studio Session"
                className="w-full h-[300px] object-cover rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Behind the Canvas</h3>
              <p className="text-gray-600">
                Get a glimpse into the creative process and the inspiration behind each masterpiece.
              </p>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Live Painting"
                className="w-full h-[300px] object-cover rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Live Painting Sessions</h3>
              <p className="text-gray-600">
                Join interactive live sessions where you can watch the artist bring new creations to life.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-8">Art Styles</h2>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Abstract</Badge>
            <Badge variant="secondary">Impressionism</Badge>
            <Badge variant="secondary">Contemporary</Badge>
            <Badge variant="secondary">Surrealism</Badge>
            <Badge variant="secondary">Expressionism</Badge>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 mt-16">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-gray-600">
            © 2023 ColorCanvas. All rights reserved. | Contact: info@colorcanvas.com
          </p>
        </div>
      </footer>
    </div>
  )
}