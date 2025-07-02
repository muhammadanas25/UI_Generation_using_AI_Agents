import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Twitter, Facebook } from "lucide-react"
import Image from "next/image"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">UrbanShots</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#gallery">
                Gallery
              </a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#about">
                About
              </a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#services">
                Services
              </a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#contact">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Capturing Urban Life
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Street scenes, candid moments, and the pulse of the city through my lens.
                </p>
              </div>
              <div className="space-x-4">
                <Button>View Gallery</Button>
                <Button variant="outline">Book a Session</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <Image
                  key={i}
                  src={`/placeholder.svg?height=300&width=300`}
                  alt={`Urban photo ${i + 1}`}
                  width={300}
                  height={300}
                  className="rounded-lg object-cover w-full h-full"
                />
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Photographer"
                  width={400}
                  height={400}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About UrbanShots</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Hi, I'm Alex, the eye behind UrbanShots. With over a decade of experience in urban photography, I've
                  developed a keen sense for capturing the essence of city life. My work focuses on the interplay of light,
                  architecture, and human interaction in urban environments.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  From bustling street corners to quiet alleyways, I strive to reveal the hidden stories of our cities
                  through my lens. My photographs have been featured in galleries across the country and in several
                  international publications.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center space-y-2 p-4 bg-white dark:bg-gray-950 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Street Photography</h3>
                <p className="text-gray-500 dark:text-gray-400">Candid shots that capture the essence of urban life.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-4 bg-white dark:bg-gray-950 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Urban Landscapes</h3>
                <p className="text-gray-500 dark:text-gray-400">Stunning cityscapes and architectural photography.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-4 bg-white dark:bg-gray-950 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Event Coverage</h3>
                <p className="text-gray-500 dark:text-gray-400">Documenting urban events and gatherings.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Get in Touch</h2>
            <form className="max-w-md mx-auto space-y-4">
              <Input placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Textarea placeholder="Message" />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 UrbanShots. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}