import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Mail, Instagram, Twitter, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Component() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-transparent z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <a className="text-2xl font-bold text-white hover:text-primary transition-colors duration-300">
              SculptCraft
            </a>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="#about">
              <a className="text-white hover:text-primary transition-colors duration-300">About</a>
            </Link>
            <Link href="#gallery">
              <a className="text-white hover:text-primary transition-colors duration-300">Gallery</a>
            </Link>
            <Link href="#behind">
              <a className="text-white hover:text-primary transition-colors duration-300">Behind the Scenes</a>
            </Link>
            <Link href="#contact">
              <a className="text-white hover:text-primary transition-colors duration-300">Contact</a>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background shadow-lg">
            <div className="px-4 py-2 space-y-2">
              <Link href="#about">
                <a className="block text-white hover:text-primary transition-colors duration-300">About</a>
              </Link>
              <Link href="#gallery">
                <a className="block text-white hover:text-primary transition-colors duration-300">Gallery</a>
              </Link>
              <Link href="#behind">
                <a className="block text-white hover:text-primary transition-colors duration-300">Behind the Scenes</a>
              </Link>
              <Link href="#contact">
                <a className="block text-white hover:text-primary transition-colors duration-300">Contact</a>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        <Image
          src="/hero-background.jpg"
          alt="Featured Sculpture"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-75 transition-opacity duration-700 hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 animate-fadeIn">SculptCraft</h1>
          <p className="text-2xl md:text-4xl text-white mb-8 animate-fadeIn delay-200">Bringing Stone to Life</p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform transform hover:scale-105 animate-pulse"
          >
            Explore Gallery
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About the Artist</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <div className="flex-shrink-0 mb-8 md:mb-0">
              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
                <Image
                  src="/artist-portrait.jpg"
                  alt="Artist Portrait"
                  layout="fill"
                  objectFit="cover"
                  className="hover:opacity-90 transition-opacity duration-300"
                />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-lg mb-6">
                SculptCraft is the creative vision of renowned sculptor Jane Doe. With over 15 years of experience, Jane
                has honed her craft to perfection, transforming raw stone into breathtaking works of art that captivate
                and inspire.
              </p>
              <p className="text-lg">
                Her unique approach combines traditional sculpting techniques with modern themes, resulting in pieces that
                are both timeless and contemporary. Jane's work has been featured in galleries worldwide and has earned
                her numerous accolades in the art community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
          <Tabs defaultValue="sculptures" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-8">
              <TabsTrigger value="sculptures" className="col-span-2 md:col-span-1">
                Sculptures
              </TabsTrigger>
              <TabsTrigger value="installations" className="col-span-2 md:col-span-1">
                Installations
              </TabsTrigger>
              <TabsTrigger value="process" className="col-span-2 md:col-span-1">
                Process
              </TabsTrigger>
            </TabsList>
            <TabsContent value="sculptures">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="hover:shadow-2xl transition-shadow duration-300">
                    <CardContent className="p-4">
                      <div className="relative h-64 mb-4">
                        <Image
                          src={`/sculpture-${i}.jpg`}
                          alt={`Sculpture ${i}`}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-md transform transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Sculpture Title {i}</h3>
                      <p className="text-sm text-muted-foreground">
                        A brief description of the sculpture and its significance.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="installations">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="hover:shadow-2xl transition-shadow duration-300">
                    <CardContent className="p-4">
                      <div className="relative h-80 mb-4">
                        <Image
                          src={`/installation-${i}.jpg`}
                          alt={`Installation ${i}`}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-md transform transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Installation Title {i}</h3>
                      <p className="text-sm text-muted-foreground">
                        An overview of the installation, its location, and the concept behind it.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="process">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Card key={i} className="hover:shadow-2xl transition-shadow duration-300">
                    <CardContent className="p-4">
                      <div className="relative h-64 mb-4">
                        <Image
                          src={`/process-${i}.jpg`}
                          alt={`Process ${i}`}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-md transform transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Process Step {i}</h3>
                      <p className="text-sm text-muted-foreground">
                        Insight into the steps taken to create each masterpiece.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Behind the Scenes Section */}
      <section id="behind" className="py-20 px-4 md:px-8 bg-gradient-to-b from-muted to-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Behind the Scenes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group">
              <div className="relative h-80 mb-4 overflow-hidden rounded-md shadow-lg">
                <Image
                  src="/work-in-progress.jpg"
                  alt="Work in Progress"
                  layout="fill"
                  objectFit="cover"
                  className="transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-25 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-semibold mb-2">The Creative Process</h3>
              <p className="text-muted-foreground">
                Get a glimpse into Jane's studio and witness the transformation of raw materials into stunning sculptures.
              </p>
            </div>
            <div className="group">
              <div className="relative h-80 mb-4 overflow-hidden rounded-md shadow-lg">
                <Image
                  src="/tools-of-the-trade.jpg"
                  alt="Tools of the Trade"
                  layout="fill"
                  objectFit="cover"
                  className="transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-25 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Tools and Techniques</h3>
              <p className="text-muted-foreground">
                Explore the various tools and techniques Jane employs to bring her artistic vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg mb-12">
            Interested in commissioning a piece or have questions about SculptCraft's work? Don't hesitate to reach out!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <Button variant="secondary" size="lg" className="flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" /> Contact
            </Button>
            <Button variant="secondary" size="lg" className="flex items-center justify-center">
              <Instagram className="mr-2 h-5 w-5" /> Instagram
            </Button>
            <Button variant="secondary" size="lg" className="flex items-center justify-center">
              <Twitter className="mr-2 h-5 w-5" /> Twitter
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-background text-center">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 SculptCraft. All rights reserved. Designed with passion by Jane Doe.
          </p>
        </div>
      </footer>
    </div>
  )
}