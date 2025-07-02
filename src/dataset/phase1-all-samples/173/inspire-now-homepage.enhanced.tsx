import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, Quote, Star, Menu, X, Facebook, Twitter, Instagram } from "lucide-react"
import { useState } from "react"

export default function InspireNowHomepage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-shadow duration-300">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <Link className="flex items-center" href="#">
            <Star className="h-6 w-6 text-primary animate-pulse" />
            <span className="ml-2 text-2xl font-bold text-primary">InspireNow</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link className="text-sm font-medium text-gray-700 hover:text-primary transition" href="#programs">
              Programs
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-primary transition" href="#success-stories">
              Success Stories
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-primary transition" href="#inspiration">
              Inspiration
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-primary transition" href="#contact">
              Contact
            </Link>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
              {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white shadow-lg">
            <ul className="flex flex-col space-y-4 px-4 py-4">
              <li>
                <Link className="text-sm font-medium text-gray-700 hover:text-primary transition" href="#programs" onClick={() => setIsMobileMenuOpen(false)}>
                  Programs
                </Link>
              </li>
              <li>
                <Link className="text-sm font-medium text-gray-700 hover:text-primary transition" href="#success-stories" onClick={() => setIsMobileMenuOpen(false)}>
                  Success Stories
                </Link>
              </li>
              <li>
                <Link className="text-sm font-medium text-gray-700 hover:text-primary transition" href="#inspiration" onClick={() => setIsMobileMenuOpen(false)}>
                  Inspiration
                </Link>
              </li>
              <li>
                <Link className="text-sm font-medium text-gray-700 hover:text-primary transition" href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
      <main className="flex-1 pt-16">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('/hero-background.jpg')" }}></div>
          <div className="container relative z-10 px-4 md:px-6 text-center">
            <div className="flex flex-col items-center space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg animate-fade-in-up">
                Transform Your Life with InspireNow
              </h1>
              <p className="max-w-2xl text-lg md:text-xl text-gray-200 drop-shadow-lg animate-fade-in-up delay-200">
                Unlock your potential and achieve your dreams with personalized life coaching that empowers you to create lasting change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 animate-fade-in-up delay-400">
                <Button className="bg-white text-primary hover:bg-gray-100 transition-transform transform hover:scale-105" size="lg">
                  Get Started
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary transition-transform transform hover:scale-105" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="mt-10 flex justify-center space-x-4 animate-bounce">
              <a href="#programs" className="text-white text-2xl animate-pulse">
                <ArrowDown className="h-6 w-6" />
              </a>
            </div>
          </div>
        </section>
        <section id="programs" className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Our Coaching Programs
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="transition-transform transform hover:scale-105">
                <CardHeader className="flex justify-center">
                  <Star className="h-8 w-8 text-primary animate-spin-slow" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold text-gray-800">Personal Growth</CardTitle>
                  <p className="mt-2 text-gray-600">
                    Discover your true potential and develop a growth mindset for success in all areas of life.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      Self-discovery exercises
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      Goal-setting workshops
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      Personalized action plans
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="transition-transform transform hover:scale-105">
                <CardHeader className="flex justify-center">
                  <Star className="h-8 w-8 text-primary animate-spin-slow" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold text-gray-800">Career Advancement</CardTitle>
                  <p className="mt-2 text-gray-600">
                    Take your career to the next level with strategies for professional growth and leadership.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      Career path planning
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      Leadership skill development
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      Networking strategies
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="transition-transform transform hover:scale-105">
                <CardHeader className="flex justify-center">
                  <Star className="h-8 w-8 text-primary animate-spin-slow" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold text-gray-800">Relationship Mastery</CardTitle>
                  <p className="mt-2 text-gray-600">
                    Build stronger, more fulfilling relationships in your personal and professional life.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      Communication skills
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      Conflict resolution
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      Emotional intelligence
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="success-stories" className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Success Stories
            </h2>
            <div className="swiper-container">
              <div className="swiper-wrapper grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="swiper-slide bg-gray-50 shadow-md hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="pt-6">
                      <Quote className="h-8 w-8 text-primary mb-4 animate-bounce-slow" />
                      <p className="mb-4 text-gray-700 italic">
                        "InspireNow transformed my life. I found clarity, purpose, and the confidence to pursue my dreams.
                        I'm now living a life I never thought possible!"
                      </p>
                      <div className="flex items-center mt-4">
                        <img
                          alt="Client photo"
                          className="rounded-full h-10 w-10 object-cover"
                          src="/placeholder.svg"
                        />
                        <div className="ml-4">
                          <p className="font-semibold text-gray-800">Sarah Johnson</p>
                          <p className="text-sm text-gray-500">Entrepreneur</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {/* Add Pagination */}
              <div className="swiper-pagination mt-4"></div>
            </div>
          </div>
        </section>
        <section id="inspiration" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-100 to-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Daily Inspiration
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Believe you can and you're halfway there.",
                "The only way to do great work is to love what you do.",
                "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                "Your time is limited, don't waste it living someone else's life.",
                "Act as if what you do makes a difference. It does.",
                "Keep your face always toward the sunshine—and shadows will fall behind you.",
              ].map((quote, i) => (
                <Card key={i} className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="pt-6 flex flex-col justify-between h-full">
                    <p className="text-lg font-semibold text-gray-700 mb-4">
                      "{quote}"
                    </p>
                    <Button variant="link" className="self-end text-primary hover:underline flex items-center">
                      Share <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-primary text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6">
              <h2 className="text-3xl font-bold text-center">Ready to Transform Your Life?</h2>
              <p className="max-w-xl text-center text-gray-200 text-lg md:text-xl">
                Take the first step towards a better you. Schedule a free consultation today.
              </p>
              <div className="w-full max-w-md">
                <form className="flex flex-col sm:flex-row items-center gap-4">
                  <Input
                    className="flex-1 bg-white text-primary placeholder:text-gray-400"
                    placeholder="Enter your email"
                    type="email"
                    required
                  />
                  <Button className="bg-white text-primary hover:bg-gray-100 transition-transform transform hover:scale-105" type="submit">
                    Subscribe
                  </Button>
                </form>
                <p className="mt-2 text-xs text-gray-200 text-center">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-gray-800 text-gray-300 py-8">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs">© 2024 InspireNow. All rights reserved.</p>
          <nav className="flex space-x-4 mt-4 md:mt-0">
            <Link className="text-xs hover:underline" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline" href="#">
              Privacy
            </Link>
          </nav>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-primary transition">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-primary transition">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}