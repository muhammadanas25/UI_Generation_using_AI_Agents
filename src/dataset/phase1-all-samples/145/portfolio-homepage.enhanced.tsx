import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { PlayCircle, Menu, X, Download, Send, Github, LinkedIn, Twitter } from "lucide-react"
import Image from "next/image"

export default function Component() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Header */}
      <header className="fixed w-full bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="AnimateMark Logo" width={40} height={40} />
            <h1 className="text-xl font-bold">AnimateMark</h1>
          </a>
          <nav className="hidden md:flex space-x-6">
            <a href="#work" className="hover:text-primary transition-colors">Work</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav className="md:hidden bg-white bg-opacity-95 backdrop-filter backdrop-blur-lg">
            <ul className="flex flex-col space-y-4 p-4">
              <li><a href="#work" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Work</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fadeInDown">Bringing Ideas to Life</h2>
          <p className="text-2xl md:text-3xl mb-8 animate-fadeInUp">Motion Graphics & Animation by Mark</p>
          <Button size="lg" className="flex items-center mx-auto animate-bounce">
            <PlayCircle className="mr-2 h-5 w-5" /> Watch Showreel
          </Button>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Work</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} className="overflow-hidden transform hover:scale-105 transition-transform shadow-lg">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src={`/project-${item}.jpg`}
                    alt={`Project ${item}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                    <PlayCircle className="h-12 w-12 text-white animate-pulse" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Title {item}</h3>
                  <p className="text-gray-600 mb-4">A brief description of the project, highlighting key aspects and impact.</p>
                  <Button variant="secondary" size="sm" className="flex items-center">
                    <PlayCircle className="mr-2 h-5 w-5" /> View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/mark-portrait.jpg"
              alt="Mark, the Motion Graphics Designer"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl font-bold mb-6">About AnimateMark</h2>
            <p className="mb-6">
              Hi, I'm Mark, a passionate motion graphics designer with over 8 years of experience. I specialize in
              creating captivating animations that tell stories and bring brands to life. My work spans across
              various industries, from tech startups to major entertainment companies.
            </p>
            <div className="flex space-x-4 mb-6">
              <Button variant="outline" size="lg" className="flex items-center">
                <Download className="mr-2 h-5 w-5" /> Download CV
              </Button>
              <Button variant="secondary" size="lg" className="flex items-center">
                <Send className="mr-2 h-5 w-5" /> Hire Me
              </Button>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/AnimateMark" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6 text-gray-700 hover:text-primary transition-colors" />
              </a>
              <a href="https://linkedin.com/in/AnimateMark" target="_blank" rel="noopener noreferrer">
                <LinkedIn className="h-6 w-6 text-gray-700 hover:text-primary transition-colors" />
              </a>
              <a href="https://twitter.com/AnimateMark" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-6 w-6 text-gray-700 hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-md mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
          <form className="space-y-6">
            <Input placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Textarea placeholder="Your Message" required />
            <Button type="submit" className="w-full flex items-center justify-center">
              <Send className="mr-2 h-5 w-5" /> Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 bg-white shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-center md:text-left">&copy; 2024 AnimateMark. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/AnimateMark" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6 text-gray-700 hover:text-primary transition-colors" />
            </a>
            <a href="https://linkedin.com/in/AnimateMark" target="_blank" rel="noopener noreferrer">
              <LinkedIn className="h-6 w-6 text-gray-700 hover:text-primary transition-colors" />
            </a>
            <a href="https://twitter.com/AnimateMark" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-6 w-6 text-gray-700 hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}