import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { PlayCircle } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">AnimateMark</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#work" className="hover:underline">Work</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/placeholder.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Bringing Ideas to Life</h2>
            <p className="text-xl mb-8">Motion Graphics & Animation by Mark</p>
            <Button size="lg">
              <PlayCircle className="mr-2 h-5 w-5" /> Watch Showreel
            </Button>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <img
                    src={`/placeholder.svg?height=200&width=300`}
                    alt={`Project ${item}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50">
                    <PlayCircle className="h-12 w-12 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Project Title {item}</h3>
                  <p className="text-sm text-muted-foreground">Brief description of the project and its impact.</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About AnimateMark</h2>
          <p className="mb-6">
            Hi, I'm Mark, a passionate motion graphics designer with over 8 years of experience. I specialize in
            creating captivating animations that tell stories and bring brands to life. My work spans across
            various industries, from tech startups to major entertainment companies.
          </p>
          <Button variant="outline">Download CV</Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <form className="space-y-6">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 bg-muted text-center">
        <p>&copy; 2024 AnimateMark. All rights reserved.</p>
      </footer>
    </div>
  )
}