import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { motion } from "framer-motion"
import { FiFacebook, FiInstagram, FiPinterest, FiMail, FiPhone } from "react-icons/fi"

export default function LoveStoriesPortfolio() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo.svg" alt="LoveStories Logo" width={40} height={40} className="animate-pulse" />
            <span className="font-extrabold text-2xl text-pink-600">LoveStories</span>
          </Link>
          <nav className="ml-auto flex gap-6">
            <Link className="text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors duration-300" href="#albums">
              Albums
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors duration-300" href="#engagements">
              Engagements
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors duration-300" href="#testimonials">
              Testimonials
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors duration-300" href="#contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <motion.section
          className="w-full py-20 md:py-32 lg:py-40 bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: 'url("/hero-background.jpg")' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container relative z-10 px-4 md:px-6 text-center text-white">
            <motion.div
              className="flex flex-col items-center space-y-6"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Capturing Love Stories, One Frame at a Time
              </h1>
              <p className="max-w-2xl text-lg md:text-2xl text-gray-200">
                Timeless wedding and engagement photography for couples in love
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="primary" size="lg" className="px-6 py-3 hover:bg-pink-600 transition-colors duration-300">
                  View Portfolio
                </Button>
                <Button variant="outline" size="lg" className="px-6 py-3 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white transition-colors duration-300">
                  Book a Session
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.section>
        <motion.section
          id="albums"
          className="w-full py-16 md:py-24 lg:py-32 bg-gray-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-pink-600">Featured Wedding Albums</h2>
            <Carousel className="w-full max-w-6xl mx-auto">
              <CarouselContent>
                {[1, 2, 3, 4].map((_, index) => (
                  <CarouselItem key={index}>
                    <Card className="transform hover:scale-105 transition-transform duration-300 shadow-lg">
                      <CardContent className="p-4">
                        <Image
                          src={`/albums/wedding-album-${index + 1}.jpg`}
                          alt={`Wedding Album ${index + 1}`}
                          width={600}
                          height={400}
                          className="rounded-lg object-cover w-full h-64"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-pink-600 text-white hover:bg-pink-700 transition-colors duration-300 rounded-full p-2" />
              <CarouselNext className="bg-pink-600 text-white hover:bg-pink-700 transition-colors duration-300 rounded-full p-2" />
            </Carousel>
          </div>
        </motion.section>
        <motion.section
          id="engagements"
          className="w-full py-16 md:py-24 lg:py-32 bg-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-pink-600">Engagement Shoots</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <Card key={index} className="shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-4">
                    <Image
                      src={`/engagements/engagement-${index + 1}.jpg`}
                      alt={`Engagement ${index + 1}`}
                      width={500}
                      height={350}
                      className="rounded-lg object-cover w-full h-48"
                    />
                    <div className="mt-4 text-center">
                      <Button variant="secondary" size="sm" className="px-4 py-2 hover:bg-pink-600 hover:text-white transition-colors duration-300">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>
        <motion.section
          id="testimonials"
          className="w-full py-16 md:py-24 lg:py-32 bg-gray-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-pink-600">What Our Clients Say</h2>
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {[
                  {
                    name: "Emily & John",
                    quote: "LoveStories captured our wedding day perfectly. The photos are absolutely stunning!",
                  },
                  {
                    name: "Sarah & Mike",
                    quote: "Our engagement shoot was so much fun, and the pictures are everything we hoped for and more.",
                  },
                  {
                    name: "Jessica & David",
                    quote: "Working with LoveStories was the best decision we made for our wedding. Highly recommended!",
                  },
                ].map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card className="p-6 shadow-lg bg-white">
                      <CardContent className="flex flex-col items-center text-center space-y-4">
                        <Image
                          src={`/testimonials/client-${index + 1}.jpg`}
                          alt={testimonial.name}
                          width={100}
                          height={100}
                          className="rounded-full object-cover w-24 h-24"
                        />
                        <blockquote className="text-lg italic text-gray-700">"{testimonial.quote}"</blockquote>
                        <p className="font-semibold text-pink-600">{testimonial.name}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-pink-600 text-white hover:bg-pink-700 transition-colors duration-300 rounded-full p-2" />
              <CarouselNext className="bg-pink-600 text-white hover:bg-pink-700 transition-colors duration-300 rounded-full p-2" />
            </Carousel>
          </div>
        </motion.section>
      </main>
      <footer id="contact" className="w-full py-10 bg-gray-800 text-white">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
            <div className="flex flex-col space-y-2 items-center md:items-start">
              <div className="flex items-center space-x-2">
                <FiMail />
                <span>info@lovestories.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiPhone />
                <span>(123) 456-7890</span>
              </div>
            </div>
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-pink-600 transition-colors duration-300">
              <FiFacebook size={24} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-pink-600 transition-colors duration-300">
              <FiInstagram size={24} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-pink-600 transition-colors duration-300">
              <FiPinterest size={24} />
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} LoveStories. All rights reserved.
        </div>
      </footer>
    </div>
  )
}