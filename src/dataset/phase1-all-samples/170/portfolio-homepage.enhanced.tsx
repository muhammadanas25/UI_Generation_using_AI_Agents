import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Mail, MapPin, Phone, Menu, X, Sun, Moon, Instagram, Twitter, LinkedIn } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`${darkMode ? 'dark' : ''} flex flex-col min-h-screen transition-colors duration-300`}>
      <header className="sticky top-0 bg-white dark:bg-gray-900 shadow z-50">
        <div className="container px-4 md:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="#" className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              width={32}
              height={32}
              alt="BrandVision logo"
              className="h-8 w-8 animate-spin-slow"
            />
            <span className="text-lg font-bold text-gray-800 dark:text-white">BrandVision</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="#projects" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
              Projects
            </Link>
            <Link href="#services" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
              Services
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button onClick={() => setDarkMode(!darkMode)} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button className="md:hidden text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white dark:bg-gray-900 px-4 py-2 space-y-2">
            <Link href="#projects" className="block text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
              Projects
            </Link>
            <Link href="#services" className="block text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
              Services
            </Link>
            <Link href="#contact" className="block text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
              Contact
            </Link>
          </nav>
        )}
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 dark:from-gray-800 dark:via-gray-900 dark:to-black">
          <div className="container px-4 md:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="mt-8 md:mt-0">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-800 dark:text-white animate-fade-in-up">
                Crafting <span className="text-pink-500">Powerful</span> Brand Identities
              </h1>
              <p className="mt-4 max-w-xl text-gray-600 dark:text-gray-300 text-lg md:text-xl">
                Elevate your brand with stunning visuals and strategic design. Let's create something extraordinary together.
              </p>
              <div className="mt-6 flex space-x-4">
                <Link href="#projects">
                  <Button className="transition-transform transform hover:scale-105">
                    View Projects <ArrowRight className="ml-2" />
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button variant="outline" className="transition-transform transform hover:scale-105">
                    Get in Touch <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src="/hero-image.png"
                width={500}
                height={500}
                alt="BrandVision Illustration"
                className="w-full h-auto animate-fade-in-right"
              />
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-gray-800 dark:text-white animate-fade-in">
              Featured Projects
            </h2>
            <div className="flex justify-center mb-8 space-x-4">
              <Button variant="ghost" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
                All
              </Button>
              <Button variant="ghost" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
                Logos
              </Button>
              <Button variant="ghost" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
                Visual Identities
              </Button>
              <Button variant="ghost" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
                Marketing
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 relative group">
                  <CardContent className="p-0">
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=Project+${i}`}
                      width={600}
                      height={400}
                      alt={`Project ${i}`}
                      className="object-cover w-full h-48 group-hover:scale-105 transform transition-transform duration-300"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">Project {i}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        A brief description of the project and its impact on the client's brand.
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link href={`/projects/${i}`} className="text-white bg-pink-500 px-4 py-2 rounded hover:bg-pink-600 transition">
                        View Details
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-gray-800 dark:text-white animate-fade-in">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {["Logo Design", "Brand Identity", "Marketing Collateral", "Packaging Design", "Web Design", "Brand Strategy"].map((service) => (
                <Card key={service} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    {service === "Logo Design" && <ArrowRight className="h-6 w-6 text-pink-500 mb-4" />}
                    {service === "Brand Identity" && <MapPin className="h-6 w-6 text-pink-500 mb-4" />}
                    {service === "Marketing Collateral" && <Mail className="h-6 w-6 text-pink-500 mb-4" />}
                    {service === "Packaging Design" && <Phone className="h-6 w-6 text-pink-500 mb-4" />}
                    {service === "Web Design" && <Image src="/web-design-icon.svg" width={24} height={24} alt={`${service} icon`} className="mb-4" />}
                    {service === "Brand Strategy" && <Image src="/strategy-icon.svg" width={24} height={24} alt={`${service} icon`} className="mb-4" />}
                    <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">{service}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Expert {service.toLowerCase()} tailored to your unique brand vision and goals.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-gray-800 dark:text-white animate-fade-in">
              Client Testimonials
            </h2>
            <div className="relative">
              <div className="overflow-hidden">
                <div className="flex flex-wrap md:flex-nowrap -mx-4">
                  {[
                    { name: "Alex Johnson", company: "TechCorp", quote: "BrandVision transformed our brand identity, resulting in a 40% increase in brand recognition." },
                    { name: "Sarah Lee", company: "GreenEats", quote: "The logo design perfectly captured our eco-friendly ethos. Highly recommended!" },
                    { name: "Michael Brown", company: "FitLife", quote: "Our new brand collateral has significantly boosted our marketing efforts. Thank you, BrandVision!" },
                  ].map((testimonial, i) => (
                    <div key={i} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6 md:mb-0">
                      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6 flex flex-col h-full">
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-1">"{testimonial.quote}"</p>
                          <div>
                            <p className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.company}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
              <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-900 p-2 rounded-full shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                <ArrowRight className="h-4 w-4 transform rotate-180" />
              </button>
              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-900 p-2 rounded-full shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-gray-800 dark:text-white animate-fade-in">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <form className="space-y-4">
                  <Input placeholder="Name" required />
                  <Input type="email" placeholder="Email" required />
                  <Textarea placeholder="Message" required />
                  <Button className="w-full hover:bg-pink-500 transition-colors">Send Message</Button>
                </form>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Mail className="text-pink-500" />
                  <span className="text-gray-600 dark:text-gray-300">hello@brandvision.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="text-pink-500" />
                  <span className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="text-pink-500" />
                  <span className="text-gray-600 dark:text-gray-300">123 Design Street, Creativity City, 12345</span>
                </div>
                <div className="flex space-x-4 mt-4">
                  <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition">
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition">
                    <LinkedIn className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!... (placeholder for map)"
                width="100%"
                height="300"
                allowFullScreen
                loading="lazy"
                className="border-0 rounded"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row justify-between items-center py-6 w-full shrink-0 bg-gray-50 dark:bg-gray-900 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 BrandVision. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
            Privacy
          </Link>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition">
              <Instagram className="h-4 w-4" />
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition">
              <Twitter className="h-4 w-4" />
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition">
              <LinkedIn className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  )
}