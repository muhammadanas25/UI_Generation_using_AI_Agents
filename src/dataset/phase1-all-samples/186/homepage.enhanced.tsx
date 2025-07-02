import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Leaf, Mail, MapPin, Phone, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function EcoDesignsPortfolio() {
  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm shadow-md">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2 text-xl font-bold text-green-800 hover:text-green-700 transition-colors" href="#">
            <Leaf className="h-6 w-6 animate-bounce-slow" />
            EcoDesigns
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium text-green-700 hover:text-green-900 transition-colors" href="#projects">
              Projects
            </Link>
            <Link className="text-sm font-medium text-green-700 hover:text-green-900 transition-colors" href="#certifications">
              Certifications
            </Link>
            <Link className="text-sm font-medium text-green-700 hover:text-green-900 transition-colors" href="#materials">
              Materials
            </Link>
            <Link className="text-sm font-medium text-green-700 hover:text-green-900 transition-colors" href="#contact">
              Contact
            </Link>
          </nav>
          <Button variant="ghost" className="md:hidden">
            <ChevronDown className="h-6 w-6 text-green-700" />
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('/hero-background.svg')] bg-cover bg-center flex items-center">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center space-y-4 text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-lg">
                  Sustainable Design for a Better World
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl drop-shadow-md">
                  Creating eco-friendly spaces that harmonize with nature and promote sustainability.
                </p>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white transition-transform transform hover:scale-105" size="lg">
                Explore Our Projects
              </Button>
            </motion.div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-green-800 text-center">
              Featured Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Green Office Complex",
                  description: "A LEED Platinum certified office building with rooftop gardens and solar panels.",
                  image: "/projects/green-office.jpg",
                },
                {
                  title: "Eco-Friendly Home",
                  description: "A net-zero energy home built with sustainable materials and smart energy systems.",
                  image: "/projects/eco-home.jpg",
                },
                {
                  title: "Urban Vertical Farm",
                  description: "An innovative vertical farming solution for urban food production and green spaces.",
                  image: "/projects/vertical-farm.jpg",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-56"
                  />
                  <Card className="p-4">
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="mt-4 text-green-600 hover:bg-green-100">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section id="certifications" className="w-full py-12 md:py-24 lg:py-32 bg-green-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-green-800 text-center">
              Green Certifications
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "LEED Accredited Professional", icon: Award },
                { name: "BREEAM Assessor", icon: Award },
                { name: "Passive House Designer", icon: Award },
                { name: "WELL Accredited Professional", icon: Award },
              ].map((cert, index) => (
                <Card key={index} className="flex flex-col items-center text-center p-6 transition-transform transform hover:scale-105">
                  <cert.icon className="h-12 w-12 mb-4 text-green-600 animate-pulse" />
                  <CardContent>
                    <p className="font-semibold text-green-700">{cert.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="materials" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-green-800 text-center">
              Eco-Friendly Materials
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Recycled Steel", description: "High-strength material with reduced carbon footprint", icon: Leaf },
                { name: "Bamboo", description: "Fast-growing, renewable resource for flooring and structures", icon: Leaf },
                { name: "Reclaimed Wood", description: "Salvaged timber with unique character and low environmental impact", icon: Leaf },
                { name: "Hemp Insulation", description: "Natural, non-toxic insulation with excellent thermal properties", icon: Leaf },
                { name: "Low-VOC Paints", description: "Eco-friendly paints with minimal volatile organic compounds", icon: Leaf },
                { name: "Solar Glass", description: "Energy-generating windows for improved building efficiency", icon: Leaf },
              ].map((material, index) => (
                <Card key={index} className="flex flex-col items-center text-center p-6 transition-transform transform hover:scale-105">
                  <material.icon className="h-12 w-12 mb-4 text-green-600 animate-spin-slow" />
                  <CardHeader>
                    <CardTitle>{material.name}</CardTitle>
                    <CardDescription>{material.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-green-800 text-center">
              What Our Clients Say
            </h2>
            <div className="flex flex-col space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
              {[
                {
                  testimonial: "EcoDesigns transformed our workspace into a sustainable haven. Their attention to detail is unparalleled.",
                  name: "Jane Doe",
                  role: "CEO, GreenTech",
                },
                {
                  testimonial: "The eco-friendly materials they used not only look great but are also environmentally responsible.",
                  name: "John Smith",
                  role: "Architect, Urban Builders",
                },
                {
                  testimonial: "Their commitment to sustainability aligns perfectly with our company values. Highly recommend!",
                  name: "Emily Johnson",
                  role: "Project Manager, EcoLiving",
                },
              ].map((client, index) => (
                <Card key={index} className="p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardContent>
                    <p className="italic text-green-700 mb-4">"{client.testimonial}"</p>
                    <div className="mt-4">
                      <p className="font-semibold">{client.name}</p>
                      <p className="text-sm text-green-600">{client.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-green-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Go Green?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Let's create sustainable spaces that make a positive impact on the environment.
              </p>
              <Button className="bg-white text-green-800 hover:bg-green-100 transition-transform transform hover:scale-105" size="lg">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <div className="mt-8 w-full max-w-md">
                <form className="flex flex-col space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-4 py-2 rounded-md text-green-800 focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="px-4 py-2 rounded-md text-green-800 focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                  <textarea
                    placeholder="Your Message"
                    className="px-4 py-2 rounded-md text-green-800 focus:outline-none focus:ring-2 focus:ring-green-600"
                    rows="4"
                  ></textarea>
                  <Button className="bg-green-600 hover:bg-green-700 text-white transition-transform transform hover:scale-105">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-green-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 animate-bounce-slow" />
              <span className="text-lg font-bold">EcoDesigns</span>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>123 Green Street, Eco City, EC 12345</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>info@ecodesigns.com</span>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-green-300">
            &copy; {new Date().getFullYear()} EcoDesigns. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}