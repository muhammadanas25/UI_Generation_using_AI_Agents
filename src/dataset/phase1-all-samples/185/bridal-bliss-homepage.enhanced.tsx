import { Heart, Calendar, Gift, Camera, Star, Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function BridalBlissHomepage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link className="flex items-center text-xl font-bold text-pink-600" href="#">
            <Heart className="h-6 w-6 text-pink-500 animate-pulse" />
            <span className="ml-2">BridalBliss</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors duration-300" href="#services">
              Services
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors duration-300" href="#portfolio">
              Portfolio
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors duration-300" href="#reviews">
              Reviews
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors duration-300" href="#contact">
              Contact
            </Link>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
              {menuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="md:hidden bg-white shadow-md">
            <ul className="flex flex-col space-y-2 p-4">
              <li>
                <Link className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors duration-300" href="#services" onClick={() => setMenuOpen(false)}>
                  Services
                </Link>
              </li>
              <li>
                <Link className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors duration-300" href="#portfolio" onClick={() => setMenuOpen(false)}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors duration-300" href="#reviews" onClick={() => setMenuOpen(false)}>
                  Reviews
                </Link>
              </li>
              <li>
                <Link className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors duration-300" href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
      <main className="flex-1 mt-16">
        <section className="w-full py-20 md:py-32 bg-gradient-to-r from-pink-100 to-pink-200 flex items-center">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-pink-700 animate-fadeInUp">
              Your Dream Wedding Awaits
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto animate-fadeInUp delay-200">
              Let BridalBliss turn your wedding dreams into reality. We create unforgettable moments tailored just for you.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Button className="px-6 py-3 animate-bounce hover:scale-105">Book a Consultation</Button>
              <Button variant="outline" className="px-6 py-3 hover:bg-pink-100 transition">
                Learn More
              </Button>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-600 mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="transition transform hover:scale-105 hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6">
                  <Calendar className="h-12 w-12 text-pink-500 mb-4 animate-pulse" />
                  <h3 className="text-xl font-semibold mb-2">Full Wedding Planning</h3>
                  <p className="text-center text-gray-600">
                    Comprehensive planning from start to finish, ensuring every detail is perfect.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition transform hover:scale-105 hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6">
                  <Gift className="h-12 w-12 text-pink-500 mb-4 animate-pulse" />
                  <h3 className="text-xl font-semibold mb-2">Partial Planning</h3>
                  <p className="text-center text-gray-600">
                    Support for couples who've started planning but need expert guidance.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition transform hover:scale-105 hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6">
                  <Camera className="h-12 w-12 text-pink-500 mb-4 animate-pulse" />
                  <h3 className="text-xl font-semibold mb-2">Day-of Coordination</h3>
                  <p className="text-center text-gray-600">
                    Ensuring your wedding day runs smoothly, allowing you to relax and enjoy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="portfolio" className="w-full py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-600 mb-12">Past Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative group">
                <Image
                  src="/wedding1.jpg"
                  width={600}
                  height={400}
                  alt="Wedding venue decorated with flowers"
                  className="rounded-lg object-cover w-full h-64 transition transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-pink-600 bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ChevronDown className="h-8 w-8 text-white animate-bounce" />
                </div>
              </div>
              <div className="relative group">
                <Image
                  src="/wedding2.jpg"
                  width={600}
                  height={400}
                  alt="Bride and groom cutting the cake"
                  className="rounded-lg object-cover w-full h-64 transition transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-pink-600 bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ChevronDown className="h-8 w-8 text-white animate-bounce" />
                </div>
              </div>
              <div className="relative group">
                <Image
                  src="/wedding3.jpg"
                  width={600}
                  height={400}
                  alt="Elegant table setting at a wedding reception"
                  className="rounded-lg object-cover w-full h-64 transition transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-pink-600 bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ChevronDown className="h-8 w-8 text-white animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="reviews" className="w-full py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-600 mb-12">Client Reviews</h2>
            <div className="swiper-container">
              <div className="swiper-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="transition transform hover:translate-y-2 hover:shadow-xl">
                  <CardContent className="p-6 flex flex-col">
                    <div className="flex items-center space-x-1 mb-4">
                      <Star className="h-5 w-5 text-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400" />
                    </div>
                    <p className="text-gray-600 mb-4 italic">
                      "BridalBliss made our dream wedding a reality. Their attention to detail was impeccable!"
                    </p>
                    <p className="font-semibold text-gray-800">- Sarah & Tom</p>
                  </CardContent>
                </Card>
                <Card className="transition transform hover:translate-y-2 hover:shadow-xl">
                  <CardContent className="p-6 flex flex-col">
                    <div className="flex items-center space-x-1 mb-4">
                      <Star className="h-5 w-5 text-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400" />
                    </div>
                    <p className="text-gray-600 mb-4 italic">
                      "We couldn't have asked for a better wedding planner. They took care of everything!"
                    </p>
                    <p className="font-semibold text-gray-800">- Emily & Michael</p>
                  </CardContent>
                </Card>
                <Card className="transition transform hover:translate-y-2 hover:shadow-xl">
                  <CardContent className="p-6 flex flex-col">
                    <div className="flex items-center space-x-1 mb-4">
                      <Star className="h-5 w-5 text-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400" />
                    </div>
                    <p className="text-gray-600 mb-4 italic">
                      "Professional, creative, and a joy to work with. Our wedding was absolutely perfect!"
                    </p>
                    <p className="font-semibold text-gray-800">- Jessica & David</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-20 md:py-32 bg-pink-50">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-6">Ready to Start Planning?</h2>
              <p className="text-gray-700 mb-8">
                Let's create your perfect wedding day together. Contact us for a free consultation.
              </p>
              <form className="space-y-4">
                <Input type="text" placeholder="Your Name" required className="w-full" />
                <Input type="email" placeholder="Your Email" required className="w-full" />
                <Input type="tel" placeholder="Your Phone" className="w-full" />
                <Textarea placeholder="Your Message" className="w-full h-32"></Textarea>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-gray-800 text-gray-200 py-8">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">&copy; 2024 BridalBliss. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link className="text-sm hover:text-pink-500 transition-colors duration-300" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:text-pink-500 transition-colors duration-300" href="#">
              Privacy
            </Link>
            <Link className="text-sm hover:text-pink-500 transition-colors duration-300" href="#">
              Instagram
            </Link>
            <Link className="text-sm hover:text-pink-500 transition-colors duration-300" href="#">
              Pinterest
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}