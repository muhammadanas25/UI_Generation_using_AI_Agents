import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Icons } from "@/components/icons"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-blue-100 text-foreground">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold hover:text-purple-600 transition-colors duration-300 cursor-pointer">Sam Miller</h1>
          <p className="text-xl text-muted-foreground">Graphic Designer & Illustrator</p>
        </div>
        <nav className="flex space-x-4">
          <Link href="#about" className="text-lg hover:text-purple-600 transition-colors duration-300">About</Link>
          <Link href="#portfolio" className="text-lg hover:text-purple-600 transition-colors duration-300">Portfolio</Link>
          <Link href="#contact" className="text-lg hover:text-purple-600 transition-colors duration-300">Contact</Link>
          <div className="flex space-x-2">
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <Icons.twitter className="w-6 h-6 hover:text-blue-500 transition-colors duration-300" />
            </Link>
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
              <Icons.instagram className="w-6 h-6 hover:text-pink-500 transition-colors duration-300" />
            </Link>
            <Link href="https://dribbble.com" target="_blank" aria-label="Dribbble">
              <Icons.dribbble className="w-6 h-6 hover:text-pink-400 transition-colors duration-300" />
            </Link>
          </div>
        </nav>
      </header>

      <section className="bg-cover bg-center h-64 md:h-96" style={{ backgroundImage: 'url(/hero-background.jpg)' }}>
        <div className="container mx-auto h-full flex items-center justify-center">
          <div className="text-center text-white bg-black bg-opacity-50 p-6 rounded-lg">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4 animate-fadeIn">Welcome to My Creative Space</h2>
            <p className="text-lg md:text-2xl mb-6 animate-fadeIn delay-200">Designing your visions into reality</p>
            <Button className="animate-bounce">Explore My Work</Button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <div className="flex flex-col md:flex-row items-center">
            <img src="/sam-profile.jpg" alt="Sam Miller" className="w-48 h-48 rounded-full mb-4 md:mb-0 md:mr-6 object-cover shadow-lg transition-transform duration-300 transform hover:scale-105" />
            <p className="text-lg max-w-2xl">
              Hi, I'm Sam! I'm a passionate graphic designer and illustrator with over 5 years of experience creating
              stunning visuals for brands and individuals. My work combines creativity with strategic thinking to deliver
              impactful designs that resonate with audiences. Let's create something amazing together!
            </p>
          </div>
        </section>

        <section id="portfolio" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">My Portfolio</h2>
          <Tabs defaultValue="illustrations" className="mb-6">
            <TabsList className="grid w-full grid-cols-2 bg-white rounded-lg shadow">
              <TabsTrigger value="illustrations" className="py-2 hover:bg-gray-100 transition-colors duration-300">Illustrations</TabsTrigger>
              <TabsTrigger value="branding" className="py-2 hover:bg-gray-100 transition-colors duration-300">Branding</TabsTrigger>
            </TabsList>
            <TabsContent value="illustrations" className="mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={`illustration-${i}`} className="transform hover:scale-105 transition-transform duration-300 shadow-lg">
                    <CardContent className="p-0">
                      <img
                        src={`/illustration-${i}.jpg`}
                        alt={`Illustration ${i}`}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold">Illustration Project {i}</h3>
                        <p className="text-sm text-muted-foreground">Digital Illustration</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="branding" className="mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={`branding-${i}`} className="transform hover:scale-105 transition-transform duration-300 shadow-lg">
                    <CardContent className="p-0">
                      <img
                        src={`/branding-${i}.jpg`}
                        alt={`Branding Project ${i}`}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold">Branding Project {i}</h3>
                        <p className="text-sm text-muted-foreground">Logo & Identity Design</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section id="testimonials" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Testimonials</h2>
          <div className="space-y-6">
            <Card className="p-6 shadow-md">
              <CardContent>
                <p className="text-lg italic">"Sam's designs transformed our brand. Highly recommend!"</p>
                <p className="text-sm text-right mt-2">- Client A</p>
              </CardContent>
            </Card>
            <Card className="p-6 shadow-md">
              <CardContent>
                <p className="text-lg italic">"Exceptional creativity and professionalism."</p>
                <p className="text-sm text-right mt-2">- Client B</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg mb-6">
            Interested in working together? I'm always open to new projects and collaborations.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <Input id="name" type="text" placeholder="Your Name" required className="mt-1 w-full" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <Input id="email" type="email" placeholder="you@example.com" required className="mt-1 w-full" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <Textarea id="message" placeholder="Your message..." required className="mt-1 w-full" />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="flex justify-center space-x-4 mb-4">
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <Icons.twitter className="w-6 h-6 hover:text-blue-500 transition-colors duration-300" />
            </Link>
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
              <Icons.instagram className="w-6 h-6 hover:text-pink-500 transition-colors duration-300" />
            </Link>
            <Link href="https://dribbble.com" target="_blank" aria-label="Dribbble">
              <Icons.dribbble className="w-6 h-6 hover:text-pink-400 transition-colors duration-300" />
            </Link>
          </div>
          <p>&copy; 2023 Sam Miller. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}