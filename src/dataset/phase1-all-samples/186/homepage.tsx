import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Leaf, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function EcoDesignsPortfolio() {
  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link className="flex items-center gap-2 text-xl font-bold text-green-800" href="#">
            <Leaf className="h-6 w-6" />
            EcoDesigns
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline" href="#projects">
              Projects
            </Link>
            <Link className="text-sm font-medium hover:underline" href="#certifications">
              Certifications
            </Link>
            <Link className="text-sm font-medium hover:underline" href="#materials">
              Materials
            </Link>
            <Link className="text-sm font-medium hover:underline" href="#contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('/placeholder.svg')] bg-cover bg-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Sustainable Design for a Better World
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Creating eco-friendly spaces that harmonize with nature and promote sustainability.
                </p>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white" size="lg">
                Explore Our Projects
              </Button>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-green-800">
              Featured Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Green Office Complex",
                  description: "A LEED Platinum certified office building with rooftop gardens and solar panels.",
                  image: "/placeholder.svg",
                },
                {
                  title: "Eco-Friendly Home",
                  description: "A net-zero energy home built with sustainable materials and smart energy systems.",
                  image: "/placeholder.svg",
                },
                {
                  title: "Urban Vertical Farm",
                  description: "An innovative vertical farming solution for urban food production and green spaces.",
                  image: "/placeholder.svg",
                },
              ].map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-48"
                  />
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="certifications" className="w-full py-12 md:py-24 lg:py-32 bg-green-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-green-800">
              Green Certifications
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "LEED Accredited Professional", icon: Award },
                { name: "BREEAM Assessor", icon: Award },
                { name: "Passive House Designer", icon: Award },
                { name: "WELL Accredited Professional", icon: Award },
              ].map((cert, index) => (
                <Card key={index} className="flex flex-col items-center text-center p-4">
                  <cert.icon className="h-12 w-12 mb-2 text-green-600" />
                  <CardContent>
                    <p className="font-semibold">{cert.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="materials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-green-800">
              Eco-Friendly Materials
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Recycled Steel", description: "High-strength material with reduced carbon footprint" },
                { name: "Bamboo", description: "Fast-growing, renewable resource for flooring and structures" },
                { name: "Reclaimed Wood", description: "Salvaged timber with unique character and low environmental impact" },
                { name: "Hemp Insulation", description: "Natural, non-toxic insulation with excellent thermal properties" },
                { name: "Low-VOC Paints", description: "Eco-friendly paints with minimal volatile organic compounds" },
                { name: "Solar Glass", description: "Energy-generating windows for improved building efficiency" },
              ].map((material, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{material.name}</CardTitle>
                    <CardDescription>{material.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-green-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Go Green?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Let's create sustainable spaces that make a positive impact on the environment.
              </p>
              <Button className="bg-white text-green-800 hover:bg-green-100" size="lg">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-green-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6" />
              <span className="text-lg font-bold">EcoDesigns</span>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>123 Green Street, Eco City, EC 12345</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@ecodesigns.com</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}