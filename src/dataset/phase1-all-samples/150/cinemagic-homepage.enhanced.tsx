import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Mail, Phone, MapPin, X, Menu } from 'lucide-react'

export default function CineMagicHomepage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl sm:text-3xl font-extrabold text-gradient">
            CineMagic
          </a>
          <nav className="hidden md:flex space-x-4 lg:space-x-8 text-sm lg:text-lg">
            <a href="#projects" className="hover:text-primary transition-colors duration-300">
              Projects
            </a>
            <a href="#documentaries" className="hover:text-primary transition-colors duration-300">
              Documentaries
            </a>
            <a href="#testimonials" className="hover:text-primary transition-colors duration-300">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-primary transition-colors duration-300">
              Contact
            </a>
          </nav>
          <Button
            variant="outline"
            size="sm"
            className="md:hidden flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black/80">
            <nav className="flex flex-col space-y-4 p-4 text-center">
              <a href="#projects" className="hover:text-primary transition-colors duration-300" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
              <a href="#documentaries" className="hover:text-primary transition-colors duration-300" onClick={() => setMenuOpen(false)}>
                Documentaries
              </a>
              <a href="#testimonials" className="hover:text-primary transition-colors duration-300" onClick={() => setMenuOpen(false)}>
                Testimonials
              </a>
              <a href="#contact" className="hover:text-primary transition-colors duration-300" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover brightness-50"
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 animate-fadeInUp">
            CineMagic
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 animate-fadeInUp delay-200">
            Bringing your stories to life through the lens
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 transition-transform transform hover:scale-105 animate-bounce"
            onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
          >
            View Our Work
          </Button>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white animate-fadeIn">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <Card key={project} className="bg-gray-800 hover:scale-105 transition-transform duration-300 shadow-lg">
                <div className="relative aspect-video">
                  <img
                    src={`/project-${project}.jpg`}
                    alt={`Project ${project}`}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-t-lg">
                    <Button variant="secondary" size="icon" aria-label="Play Project">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-white">Project Title {project}</h3>
                  <p className="text-gray-400">A brief description showcasing the highlights and unique aspects of the project.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documentary Clips */}
      <section id="documentaries" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white animate-fadeIn">
            Documentary Clips
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
            {[1, 2, 3, 4].map((clip) => (
              <div key={clip} className="relative group">
                <img
                  src={`/documentary-${clip}.jpg`}
                  alt={`Documentary Clip ${clip}`}
                  className="w-full h-80 object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <Button variant="secondary" size="icon" aria-label="Play Clip">
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-center text-white">Documentary Title {clip}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white animate-fadeIn">
            Client Testimonials
          </h2>
          <div className="swiper-container">
            <div className="swiper-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {[1, 2, 3, 4, 5].map((testimonial) => (
                <Card key={testimonial} className="bg-gray-800 hover:bg-gray-700 transition-colors duration-300 p-6 shadow-lg">
                  <CardContent>
                    <p className="mb-4 italic text-gray-300">
                      "CineMagic transformed our vision into reality with exceptional creativity and professionalism."
                    </p>
                    <div className="flex items-center">
                      <img
                        src={`/client-${testimonial}.jpg`}
                        alt={`Client ${testimonial}`}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-white">Client Name {testimonial}</h4>
                        <p className="text-sm text-gray-400">Company {testimonial}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white animate-fadeIn">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="flex flex-col space-y-6">
              <h3 className="text-2xl font-semibold text-white">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-center text-gray-300">
                  <Mail className="mr-3 h-6 w-6 text-primary" />
                  info@cinemagic.com
                </p>
                <p className="flex items-center text-gray-300">
                  <Phone className="mr-3 h-6 w-6 text-primary" />
                  +1 (123) 456-7890
                </p>
                <p className="flex items-center text-gray-300">
                  <MapPin className="mr-3 h-6 w-6 text-primary" />
                  123 Film Street, Hollywood, CA 90001
                </p>
              </div>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-primary hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116c.725 0 1.325-.6 1.325-1.324V1.325C24 .6 23.4 0 22.675 0z" />
                  </svg>
                </a>
                <a href="#" className="text-primary hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.162c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.428.411a4.92 4.92 0 011.675 1.095 4.92 4.92 0 011.095 1.675c.171.458.357 1.258.411 2.428.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.411 2.428a4.902 4.902 0 01-1.095 1.675 4.902 4.902 0 01-1.675 1.095c-.458.171-1.258.357-2.428.411-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.428-.411a4.902 4.902 0 01-1.675-1.095 4.902 4.902 0 01-1.675-1.675c-.171-.458-.357-1.258-.411-2.428C2.174 15.746 2.162 15.366 2.162 12s.012-3.584.07-4.85c.054-1.17.24-1.97.411-2.428a4.902 4.902 0 011.095-1.675 4.902 4.902 0 011.675-1.095c.458-.171 1.258-.357 2.428-.411C8.416 2.174 8.796 2.162 12 2.162zm0-2.162C8.741 0 8.332.014 7.052.072 5.771.13 4.663.343 3.75.754a6.957 6.957 0 00-2.504 1.65A6.957 6.957 0 00.754 4.908c-.411.913-.624 2.021-.682 3.302C.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.058 1.281.271 2.389.682 3.302a6.957 6.957 0 001.65 2.504 6.957 6.957 0 002.504 1.65c.913.411 2.021.624 3.302.682C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.281-.058 2.389-.271 3.302-.682a6.957 6.957 0 002.504-1.65 6.957 6.957 0 001.65-2.504c.411-.913.624-2.021.682-3.302.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.058-1.281-.271-2.389-.682-3.302a6.957 6.957 0 00-1.65-2.504A6.957 6.957 0 0020.25.754c-.913-.411-2.021-.624-3.302-.682C15.668.014 15.259 0 12 0z" />
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8z" />
                    <circle cx="18.406" cy="5.594" r="1.44" />
                  </svg>
                </a>
                <a href="#" className="text-primary hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.428.411a4.92 4.92 0 011.675 1.095 4.92 4.92 0 011.095 1.675c.171.458.357 1.258.411 2.428.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.411 2.428a4.902 4.902 0 01-1.095 1.675 4.902 4.902 0 01-1.675 1.095c-.458.171-1.258.357-2.428.411-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.428-.411a4.902 4.902 0 01-1.675-1.095 4.902 4.902 0 01-1.095-1.675c-.171-.458-.357-1.258-.411-2.428C2.174 15.746 2.162 15.366 2.162 12s.012-3.584.07-4.85c.054-1.17.24-1.97.411-2.428a4.902 4.902 0 011.095-1.675 4.902 4.902 0 011.675-1.095c.458-.171 1.258-.357 2.428-.411C8.416 2.174 8.796 2.162 12 2.162zm0-2.162C8.741 0 8.332.014 7.052.072 5.771.13 4.663.343 3.75.754a6.957 6.957 0 00-2.504 1.65A6.957 6.957 0 00.754 4.908c-.411.913-.624 2.021-.682 3.302C.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.058 1.281.271 2.389.682 3.302a6.957 6.957 0 001.65 2.504 6.957 6.957 0 002.504 1.65c.913.411 2.021.624 3.302.682C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.281-.058 2.389-.271 3.302-.682a6.957 6.957 0 002.504-1.65 6.957 6.957 0 001.65-2.504c.411-.913.624-2.021.682-3.302.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.058-1.281-.271-2.389-.682-3.302a6.957 6.957 0 00-1.65-2.504A6.957 6.957 0 0020.25.754c-.913-.411-2.021-.624-3.302-.682C15.668.014 15.259 0 12 0z" />
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8z" />
                    <circle cx="18.406" cy="5.594" r="1.44" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-primary transition"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-primary transition"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-primary transition"
                  required
                ></textarea>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 transition-colors">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 sm:mb-0">&copy; 2024 CineMagic. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-primary hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.428.411a4.92 4.92 0 011.675 1.095 4.92 4.92 0 011.095 1.675c.171.458.357 1.258.411 2.428.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.411 2.428a4.902 4.902 0 01-1.095 1.675 4.902 4.902 0 01-1.675 1.095c-.458.171-1.258.357-2.428.411-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.428-.411a4.902 4.902 0 01-1.675-1.095 4.902 4.902 0 01-1.095-1.675c-.171-.458-.357-1.258-.411-2.428C2.174 15.746 2.162 15.366 2.162 12s.012-3.584.07-4.85c.054-1.17.24-1.97.411-2.428a4.902 4.902 0 011.095-1.675 4.902 4.902 0 011.675-1.095c.458-.171 1.258-.357 2.428-.411C8.416 2.174 8.796 2.162 12 2.162zm0-2.162C8.741 0 8.332.014 7.052.072 5.771.13 4.663.343 3.75.754a6.957 6.957 0 00-2.504 1.65A6.957 6.957 0 00.754 4.908c-.411.913-.624 2.021-.682 3.302C.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.058 1.281.271 2.389.682 3.302a6.957 6.957 0 001.65 2.504 6.957 6.957 0 002.504 1.65c.913.411 2.021.624 3.302.682C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.281-.058 2.389-.271 3.302-.682a6.957 6.957 0 002.504-1.65 6.957 6.957 0 001.65-2.504c.411-.913.624-2.021.682-3.302.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.058-1.281-.271-2.389-.682-3.302a6.957 6.957 0 00-1.65-2.504A6.957 6.957 0 0019.25.754c-.913-.411-2.021-.624-3.302-.682C15.668.014 15.259 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8z" />
                <circle cx="18.406" cy="5.594" r="1.44" />
              </svg>
            </a>
            <a href="#" className="text-primary hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116c.725 0 1.325-.6 1.325-1.324V1.325C24 .6 23.4 0 22.675 0z" />
              </svg>
            </a>
            <a href="#" className="text-primary hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.428.411a4.92 4.92 0 011.675 1.095 4.92 4.92 0 011.095 1.675c.171.458.357 1.258.411 2.428.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.411 2.428a4.902 4.902 0 01-1.095 1.675 4.902 4.902 0 01-1.675 1.095c-.458.171-1.258.357-2.428.411-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.428-.411a4.902 4.902 0 01-1.675-1.095 4.902 4.902 0 01-1.095-1.675c-.171-.458-.357-1.258-.411-2.428C2.174 15.746 2.162 15.366 2.162 12s.012-3.584.07-4.85c.054-1.17.24-1.97.411-2.428a4.902 4.902 0 011.095-1.675 4.902 4.902 0 011.675-1.095c.458-.171 1.258-.357 2.428-.411C8.416 2.174 8.796 2.162 12 2.162zm0-2.162C8.741 0 8.332.014 7.052.072 5.771.13 4.663.343 3.75.754a6.957 6.957 0 00-2.504 1.65A6.957 6.957 0 00.754 4.908c-.411.913-.624 2.021-.682 3.302C.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.058 1.281.271 2.389.682 3.302a6.957 6.957 0 001.65 2.504 6.957 6.957 0 002.504 1.65c.913.411 2.021.624 3.302.682C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.281-.058 2.389-.271 3.302-.682a6.957 6.957 0 002.504-1.65 6.957 6.957 0 001.65-2.504c.411-.913.624-2.021.682-3.302.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.058-1.281-.271-2.389-.682-3.302a6.957 6.957 0 00-1.65-2.504A6.957 6.957 0 0019.25.754c-.913-.411-2.021-.624-3.302-.682C15.668.014 15.259 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8z" />
                <circle cx="18.406" cy="5.594" r="1.44" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {/* Additional Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        .text-gradient {
          background: linear-gradient(90deg, #ff7e5f, #feb47b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        @media (max-width: 640px) {
          .text-gradient {
            background: linear-gradient(90deg, #ff7e5f, #feb47b);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
          }
        }
      `}</style>
    </div>
  )
}

