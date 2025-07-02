import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Camera, MapPin, Compass, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function WanderShotsHomepage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Camera className="h-6 w-6 mr-2" />
          <span className="font-bold">WanderShots</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Gallery
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Destinations
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Travel Tips
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Capture the World with WanderShots
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Stunning travel photography that inspires wanderlust and adventure.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-black hover:bg-gray-200">Explore Gallery</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Featured Shots</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Image
                  key={i}
                  alt={`Featured shot ${i}`}
                  className="aspect-video object-cover rounded-lg"
                  height="300"
                  src={`/placeholder.svg?height=300&width=400`}
                  width="400"
                />
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Featured Destinations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {['Bali, Indonesia', 'Santorini, Greece', 'Machu Picchu, Peru'].map((destination) => (
                <Card key={destination}>
                  <CardHeader>
                    <CardTitle>{destination}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      alt={destination}
                      className="aspect-video object-cover rounded-lg mb-4"
                      height="200"
                      src={`/placeholder.svg?height=200&width=300`}
                      width="300"
                    />
                    <p className="text-sm text-gray-500">Discover the beauty and culture of {destination}.</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Travel Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Packing Essentials", icon: <Compass className="h-6 w-6" /> },
                { title: "Photography Gear Guide", icon: <Camera className="h-6 w-6" /> },
                { title: "Finding Hidden Gems", icon: <MapPin className="h-6 w-6" /> },
                { title: "Connecting with Locals", icon: <Mail className="h-6 w-6" /> },
              ].map((tip) => (
                <Card key={tip.title}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      {tip.icon}
                      <span className="ml-2">{tip.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Learn how to make the most of your travels with our expert tips.</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Want to collaborate or purchase prints? Reach out to us!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2">
                  <Input placeholder="Your email" type="email" />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 WanderShots. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}