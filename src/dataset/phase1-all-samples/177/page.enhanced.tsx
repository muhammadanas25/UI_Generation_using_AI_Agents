import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays, Mail, Phone, Play, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Button } from 'shadcn/ui/button'
import { Card, CardHeader, CardBody, CardFooter } from 'shadcn/ui/card'
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from 'shadcn/ui/dialog'
import { Input } from 'shadcn/ui/input'
import { Textarea } from 'shadcn/ui/textarea'

export default function ActorPortfolio() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-gray-900 text-white fixed w-full z-50 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">StageCraft</h1>
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              <li><Link href="#about" className="hover:text-gray-300 transition duration-300">About</Link></li>
              <li><Link href="#reels" className="hover:text-gray-300 transition duration-300">Reels</Link></li>
              <li><Link href="#performances" className="hover:text-gray-300 transition duration-300">Performances</Link></li>
              <li><Link href="#contact" className="hover:text-gray-300 transition duration-300">Contact</Link></li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsNavOpen(!isNavOpen)} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isNavOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isNavOpen && (
          <nav className="md:hidden bg-gray-800">
            <ul className="flex flex-col space-y-4 p-4">
              <li><Link href="#about" className="hover:text-gray-300 transition duration-300">About</Link></li>
              <li><Link href="#reels" className="hover:text-gray-300 transition duration-300">Reels</Link></li>
              <li><Link href="#performances" className="hover:text-gray-300 transition duration-300">Performances</Link></li>
              <li><Link href="#contact" className="hover:text-gray-300 transition duration-300">Contact</Link></li>
            </ul>
          </nav>
        )}
      </header>

      <main className="mt-20 flex-grow">
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Image
                src="/placeholder.svg?height=600&width=400"
                alt="StageCraft Headshot"
                width={400}
                height={600}
                className="rounded-lg shadow-lg transform hover:scale-105 transition transform duration-500"
              />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h2 className="text-4xl font-bold mb-4">About StageCraft</h2>
              <p className="text-lg mb-6">
                StageCraft is a versatile actor with a passion for bringing characters to life. With experience in
                theater, film, and television, StageCraft has captivated audiences with powerful performances and
                a dynamic range.
              </p>
              <Link href="#contact">
                <Button variant="solid" className="bg-gray-900 hover:bg-gray-800 transition duration-300">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="reels" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Acting Reels</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((reel) => (
                <Card key={reel} className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="relative">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-300">
                      <Play className="absolute inset-0 m-auto text-white w-16 h-16 opacity-75 cursor-pointer hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </CardHeader>
                  <CardBody>
                    <h3 className="font-bold mb-2">Reel Title {reel}</h3>
                    <p className="text-sm text-gray-600">A brief description of the reel and its highlights.</p>
                  </CardBody>
                  <CardFooter>
                    <Dialog>
                      <DialogTrigger>
                        <Button variant="outline" className="w-full">Watch Reel</Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-lg">
                        <DialogTitle>Reel Title {reel}</DialogTitle>
                        <DialogDescription>
                          <div className="aspect-w-16 aspect-h-9 mb-4">
                            <iframe
                              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                              title={`Reel ${reel}`}
                              className="w-full h-full"
                              allowFullScreen
                            ></iframe>
                          </div>
                          <p>A detailed description of the reel, scenes, and performances showcased.</p>
                        </DialogDescription>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="performances" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Upcoming Performances</h2>
            <div className="space-y-6">
              {[
                { title: "Hamlet", date: "June 15-30, 2023", venue: "City Theater" },
                { title: "A Streetcar Named Desire", date: "July 10-25, 2023", venue: "Community Playhouse" },
                { title: "The Importance of Being Earnest", date: "August 5-20, 2023", venue: "Shakespeare in the Park" },
              ].map((performance, index) => (
                <Card key={index} className="bg-gray-100 p-6 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300">
                  <h3 className="font-bold text-xl mb-2">{performance.title}</h3>
                  <p className="flex items-center text-gray-600 mb-2">
                    <CalendarDays className="mr-2 h-5 w-5" />
                    {performance.date}
                  </p>
                  <p className="text-gray-600">{performance.venue}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {["A", "B", "C"].map((testimonial, idx) => (
                <Card key={idx} className="p-6 shadow-lg rounded-lg bg-white hover:shadow-2xl transition-shadow duration-300">
                  <p className="text-gray-700 mb-4">"StageCraft brings an unparalleled depth to every role."</p>
                  <p className="font-semibold">- Director Name</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
            <div className="flex flex-col md:flex-row md:space-x-8">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <form className="space-y-4">
                  <Input type="text" placeholder="Your Name" required className="w-full" />
                  <Input type="email" placeholder="Your Email" required className="w-full" />
                  <Textarea placeholder="Your Message" required className="w-full h-32"></Textarea>
                  <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 transition duration-300">
                    Send Message
                  </Button>
                </form>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <Mail className="mr-2 h-5 w-5" />
                    stagecraft@example.com
                  </p>
                  <p className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    (123) 456-7890
                  </p>
                  <div className="flex space-x-4 mt-4">
                    <Link href="#" className="text-gray-600 hover:text-gray-800 transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616 2c-2.737 0-4.95 2.213-4.95 4.95 0 .388.044.765.127 1.128C7.691 7.97 4.066 5.92 1.64 2.905a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.24-.616v.062c0 2.385 1.693 4.374 3.946 4.827a4.935 4.935 0 0 1-2.232.084c.63 1.953 2.445 3.377 4.6 3.417A9.868 9.868 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.506 14.01-14.01 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z" />
                      </svg>
                    </Link>
                    <Link href="#" className="text-gray-600 hover:text-gray-800 transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.633 7.997a7.949 7.949 0 0 1-2.286.631A4.156 4.156 0 0 0 18.168 6c-.789.47-1.661.81-2.573.995a4.13 4.13 0 0 0-7.068 3.751A11.73 11.73 0 0 1 3.15 4.798a4.13 4.13 0 0 0 1.28 5.523A4.072 4.072 0 0 1 2.8 9.71v.052a4.13 4.13 0 0 0 3.31 4.033 4.095 4.095 0 0 1-1.86.07 4.13 4.13 0 0 0 3.85 2.861A8.28 8.28 0 0 1 2 18.407a11.7 11.7 0 0 0 6.29 1.84c7.547 0 11.675-6.246 11.675-11.675 0-.178-.004-.355-.012-.53A8.354 8.354 0 0 0 24 4.557a8.19 8.19 0 0 1-2.367.647z" />
                      </svg>
                    </Link>
                    <Link href="#" className="text-gray-600 hover:text-gray-800 transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.314.975.975 1.252 2.242 1.314 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.34 2.633-1.314 3.608-.975.975-2.242 1.252-3.608 1.314-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.34-3.608-1.314-.975-.975-1.252-2.242-1.314-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.34-2.633 1.314-3.608.975-.975 2.242-1.252 3.608-1.314C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.672.393 3.75 1.315 2.828 2.237 2.566 3.34 2.507 4.617 2.448 5.897 2.435 6.306 2.435 12s.013 6.103.072 7.383c.059 1.277.321 2.38 1.243 3.302.922.922 2.025 1.184 3.302 1.243 1.28.059 1.689.072 7.383.072s6.103-.013 7.383-.072c1.277-.059 2.38-.321 3.302-1.243.922-.922 1.184-2.025 1.243-3.302.059-1.28.072-1.689.072-7.383s-.013-6.103-.072-7.383c-.059-1.277-.321-2.38-1.243-3.302C19.38.393 18.277.131 17 .072 15.72.013 15.31 0 12 0z" />
                        <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                        <circle cx="18.406" cy="5.594" r="1.44" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>
            © {new Date().getFullYear()} StageCraft. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}