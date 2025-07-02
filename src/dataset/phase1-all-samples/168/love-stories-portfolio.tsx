import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function LoveStoriesPortfolio() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">LoveStories</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#albums">
              Albums
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#engagements">
              Engagements
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
              Testimonials
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Capturing Love Stories, One Frame at a Time
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Timeless wedding and engagement photography for couples in love
                </p>
              </div>
              <div className="space-x-4">
                <Button variant="outline" className="bg-white text-black hover:bg-gray-200">
                  View Portfolio
                </Button>
                <Button variant="outline">Book a Session</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="albums" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Featured Wedding Albums</h2>
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {[1, 2, 3].map((_, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image
                          src={`/placeholder.svg?height=500&width=500&text=Wedding+Album+${index + 1}`}
                          alt={`Wedding Album ${index + 1}`}
                          width={500}
                          height={500}
                          className="rounded-lg object-cover"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        <section id="engagements" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Engagement Shoots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <Image
                      src={`/placeholder.svg?height=300&width=400&text=Engagement+${index + 1}`}
                      alt={`Engagement ${index + 1}`}
                      width={400}
                      height={300}
                      className="rounded-lg object-cover w-full h-64"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <Card key={index}>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <blockquote className="text-lg italic">"{testimonial.quote}"</blockquote>
                    <p className="font-semibold">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" className="w-full py-6 bg-gray-800 text-white">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-sm">Email: info@lovestories.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="text-white hover:text-gray-300">
              Facebook
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              Instagram
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              Pinterest
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}