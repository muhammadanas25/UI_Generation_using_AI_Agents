import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Leaf, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Leaf className="h-6 w-6" />
          <span className="sr-only">GreenVisions</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#portfolio">
            Portfolio
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to GreenVisions
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Transforming outdoor spaces into breathtaking landscapes. Let's bring your garden dreams to life.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  alt="Garden project 1"
                  className="aspect-[4/3] object-cover w-full"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Zen Garden Retreat</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    A peaceful sanctuary with minimalist design and soothing water features.
                  </p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  alt="Garden project 2"
                  className="aspect-[4/3] object-cover w-full"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Vibrant Flower Paradise</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    A colorful explosion of perennials and annuals, creating a year-round spectacle.
                  </p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  alt="Garden project 3"
                  className="aspect-[4/3] object-cover w-full"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Modern Rooftop Oasis</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    An urban escape featuring sleek designs and drought-resistant plants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <Leaf className="h-12 w-12 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Landscape Design</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Custom designs tailored to your space and preferences, bringing your vision to life.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <MapPin className="h-12 w-12 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Garden Installation</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Expert installation of plants, hardscapes, and water features to create your perfect outdoor space.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <Leaf className="h-12 w-12 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Maintenance</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Regular upkeep and seasonal care to ensure your garden remains beautiful year-round.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-green-500" />
                    <span>(123) 456-7890</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-green-500" />
                    <span>info@greenvisions.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-green-500" />
                    <span>123 Garden Street, Green City, 12345</span>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <Input placeholder="Name" />
                  <Input placeholder="Email" type="email" />
                  <Input placeholder="Phone" type="tel" />
                  <Textarea placeholder="Message" />
                  <Button type="submit">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 GreenVisions. All rights reserved.</p>
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