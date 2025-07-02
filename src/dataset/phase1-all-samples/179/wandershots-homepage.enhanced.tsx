import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Camera, MapPin, Compass, Mail, Menu, X, Instagram, Facebook, Twitter, ChevronUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function WanderShotsHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const featuredShots = [1, 2, 3, 4, 5, 6]
  const featuredDestinations = ['Bali, Indonesia', 'Santorini, Greece', 'Machu Picchu, Peru']
  const travelTips = [
    { title: "Packing Essentials", icon: <Compass className="h-6 w-6" /> },
    { title: "Photography Gear Guide", icon: <Camera className="h-6 w-6" /> },
    { title: "Finding Hidden Gems", icon: <MapPin className="h-6 w-6" /> },
    { title: "Connecting with Locals", icon: <Mail className="h-6 w-6" /> },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          <Link className="flex items-center" href="#">
            <Camera className="h-6 w-6 mr-2 text-indigo-600" />
            <span className="font-bold text-xl text-indigo-600">WanderShots</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors" href="#">
              Gallery
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors" href="#">
              Destinations
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors" href="#">
              Travel Tips
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors" href="#">
              About
            </Link>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Link href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700 hover:text-indigo-600 transition-colors">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white px-4 pb-4 shadow-lg">
            <Link className="block py-2 text-gray-700 hover:text-indigo-600 transition-colors" href="#">
              Gallery
            </Link>
            <Link className="block py-2 text-gray-700 hover:text-indigo-600 transition-colors" href="#">
              Destinations
            </Link>
            <Link className="block py-2 text-gray-700 hover:text-indigo-600 transition-colors" href="#">
              Travel Tips
            </Link>
            <Link className="block py-2 text-gray-700 hover:text-indigo-600 transition-colors" href="#">
              About
            </Link>
            <div className="flex items-center gap-4 mt-4">
              <Link href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </nav>
        )}
      </header>
      <main className="flex-1 mt-16">
        <section className="w-full h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container px-4 md:px-6 h-full flex flex-col justify-center items-center text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white animate-fade-in-down">
              Capture the World with WanderShots
            </h1>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl">
              Stunning travel photography that inspires wanderlust and adventure.
            </p>
            <div className="mt-8 flex gap-4">
              <Button className="bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                Explore Gallery
              </Button>
              <Link href="#featured-destinations" className="flex items-center text-white hover:underline underline-offset-2 transition-colors">
                View Destinations
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100" id="featured-shots">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Featured Shots</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredShots.map((i) => (
                <Dialog key={i}>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer">
                      <Image
                        alt={`Featured shot ${i}`}
                        className="aspect-video object-cover rounded-lg transform transition-transform hover:scale-105"
                        height="300"
                        src={`/placeholder.svg?height=300&width=400`}
                        width="400"
                        loading="lazy"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <Image
                      alt={`Featured shot ${i}`}
                      className="w-full h-auto rounded-lg"
                      height="600"
                      src={`/placeholder.svg?height=600&width=800`}
                      width="800"
                    />
                    <p className="mt-4 text-gray-700">Description for featured shot {i}. Explore the beauty captured in this photograph.</p>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="featured-destinations">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Featured Destinations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {featuredDestinations.map((destination) => (
                <Card key={destination} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle>{destination}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      alt={destination}
                      className="aspect-video object-cover rounded-lg mb-4 transform transition-transform hover:scale-105"
                      height="200"
                      src={`/placeholder.svg?height=200&width=300`}
                      width="300"
                      loading="lazy"
                    />
                    <p className="text-sm text-gray-500 mb-4">Discover the beauty and culture of {destination}.</p>
                    <Button variant="link" className="text-indigo-600 hover:text-indigo-800">
                      Learn More &rarr;
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100" id="travel-tips">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Travel Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {travelTips.map((tip) => (
                <Card key={tip.title} className="flex items-center p-4 hover:bg-indigo-50 transition-colors">
                  <CardHeader className="mr-4">
                    {tip.icon}
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-lg">{tip.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-600">Learn how to make the most of your travels with our expert tips.</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                <p className="mx-auto max-w-2xl text-gray-500 md:text-xl">
                  Want to collaborate or purchase prints? Reach out to us!
                </p>
              </div>
              <div className="w-full max-w-md">
                <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                  <Input placeholder="Your email" type="email" required className="focus:outline-none focus:ring-2 focus:ring-indigo-600" />
                  <Button type="submit" className="bg-indigo-600 text-white hover:bg-indigo-700 transition-colors flex items-center justify-center">
                    Subscribe
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors hidden md:block"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-8 w-full bg-gray-800 text-gray-300">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center sm:items-start">
          <Link className="flex items-center mb-4 sm:mb-0" href="#">
            <Camera className="h-6 w-6 mr-2 text-indigo-600" />
            <span className="font-bold text-xl text-white">WanderShots</span>
          </Link>
          <p className="text-xs text-center sm:text-left">© 2024 WanderShots. All rights reserved.</p>
        </div>
        <nav className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center gap-4">
          <Link className="text-xs hover:underline underline-offset-4 transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 transition-colors" href="#">
            Privacy
          </Link>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">
              <Instagram className="h-4 w-4" />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">
              <Twitter className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  )
}