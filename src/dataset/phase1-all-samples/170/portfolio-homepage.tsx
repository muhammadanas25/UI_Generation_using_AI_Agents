import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/placeholder.svg?height=32&width=32"
            width={32}
            height={32}
            alt="BrandVision logo"
            className="h-8 w-8"
          />
          <span className="ml-2 text-lg font-bold">BrandVision</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
            Projects
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
                  Crafting Powerful Brand Identities
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Elevate your brand with stunning visuals and strategic design. Let's create something extraordinary together.
                </p>
              </div>
              <div className="space-x-4">
                <Button>View Projects</Button>
                <Button variant="outline">Get in Touch</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=Project+${i}`}
                      width={600}
                      height={400}
                      alt={`Project ${i}`}
                      className="object-cover w-full h-48"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">Project {i}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        A brief description of the project and its impact on the client's brand.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {["Logo Design", "Brand Identity", "Marketing Collateral", "Packaging Design", "Web Design", "Brand Strategy"].map((service) => (
                <Card key={service}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{service}</h3>
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
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Client Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Alex Johnson", company: "TechCorp", quote: "BrandVision transformed our brand identity, resulting in a 40% increase in brand recognition." },
                { name: "Sarah Lee", company: "GreenEats", quote: "The logo design perfectly captured our eco-friendly ethos. Highly recommended!" },
                { name: "Michael Brown", company: "FitLife", quote: "Our new brand collateral has significantly boosted our marketing efforts. Thank you, BrandVision!" },
              ].map((testimonial, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">"{testimonial.quote}"</p>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.company}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <form className="space-y-4">
                  <Input placeholder="Name" />
                  <Input type="email" placeholder="Email" />
                  <Textarea placeholder="Message" />
                  <Button className="w-full">Send Message</Button>
                </form>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Mail className="text-gray-500" />
                  <span>hello@brandvision.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="text-gray-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="text-gray-500" />
                  <span>123 Design Street, Creativity City, 12345</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 BrandVision. All rights reserved.</p>
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