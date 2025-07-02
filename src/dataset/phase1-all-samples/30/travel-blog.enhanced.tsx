import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Search, Menu, Instagram, Twitter, Facebook, X } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-gradient-to-r from-indigo-500 to-blue-500 shadow-md fixed top-0 left-0 right-0 z-50">
        <Link className="flex items-center justify-center text-white" href="#">
          <MapPin className="h-6 w-6 animate-bounce" />
          <span className="ml-2 text-2xl font-bold">GlobeTrotter</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6">
          <Link className="text-sm font-medium text-white hover:underline underline-offset-4 transition" href="#">
            Destinations
          </Link>
          <Link className="text-sm font-medium text-white hover:underline underline-offset-4 transition" href="#">
            Photography
          </Link>
          <Link className="text-sm font-medium text-white hover:underline underline-offset-4 transition" href="#">
            About
          </Link>
          <Link className="text-sm font-medium text-white hover:underline underline-offset-4 transition" href="#">
            Contact
          </Link>
        </nav>
        <div className="md:hidden ml-auto">
          <button onClick={() => setIsMenuOpen(true)} className="text-white focus:outline-none">
            <Menu className="h-6 w-6" />
          </button>
          {isMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
              <div className="w-3/4 bg-white p-6 animate-slide-in">
                <button onClick={() => setIsMenuOpen(false)} className="mb-4">
                  <X className="h-6 w-6 text-gray-700" />
                </button>
                <nav className="flex flex-col gap-4">
                  <Link className="text-lg font-medium text-gray-800 hover:text-indigo-500 transition" href="#">
                    Destinations
                  </Link>
                  <Link className="text-lg font-medium text-gray-800 hover:text-indigo-500 transition" href="#">
                    Photography
                  </Link>
                  <Link className="text-lg font-medium text-gray-800 hover:text-indigo-500 transition" href="#">
                    About
                  </Link>
                  <Link className="text-lg font-medium text-gray-800 hover:text-indigo-500 transition" href="#">
                    Contact
                  </Link>
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>
      <main className="flex-1 mt-16">
        <section className="w-full py-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero-background.jpg')" }}>
          <div className="bg-black bg-opacity-60 w-full h-full flex items-center justify-center">
            <div className="text-center space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white animate-fade-in">
                Explore the World with GlobeTrotter
              </h1>
              <p className="mx-auto max-w-2xl text-gray-300 md:text-xl animate-fade-in-delay">
                Discover amazing destinations, travel tips, and breathtaking photography from around the globe.
              </p>
              <div className="w-full max-w-md mx-auto">
                <form className="flex space-x-2">
                  <Input className="flex-1" placeholder="Search destinations" type="text" />
                  <Button type="submit" className="bg-indigo-600 text-white hover:bg-indigo-700 transition flex items-center justify-center">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 animate-slide-up">Explore Destinations</h2>
            <div className="flex justify-center mb-12 relative">
              <div className="w-full max-w-4xl aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img
                  alt="World Map"
                  className="object-cover w-full h-full"
                  src="/world-map.jpg"
                />
                <Button className="absolute top-4 left-4 bg-white bg-opacity-80 hover:bg-opacity-100 text-black flex items-center">
                  <Menu className="mr-2 h-4 w-4" />
                  Select Region
                </Button>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {["Paris", "Tokyo", "New York", "Rome", "Sydney", "Barcelona"].map((city) => (
                <Card key={city} className="hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{city}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      alt={`${city} cityscape`}
                      className="w-full h-48 object-cover rounded-md transform hover:scale-105 transition-transform duration-300"
                      src={`/images/${city.toLowerCase()}.jpg`}
                    />
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700 transition">
                      Explore {city}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 animate-slide-up">Travel Photography</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Dialog key={i}>
                  <DialogTrigger>
                    <img
                      key={i}
                      alt={`Travel photo ${i}`}
                      className="w-full h-48 md:h-64 object-cover rounded-md cursor-pointer transform hover:scale-105 transition-transform duration-300"
                      src={`/photos/photo${i}.jpg`}
                    />
                  </DialogTrigger>
                  <DialogContent className="p-0">
                    <img src={`/photos/photo${i}-large.jpg`} alt={`Travel photo ${i}`} className="w-full h-auto" />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button className="bg-indigo-600 text-white hover:bg-indigo-700 transition">
                View Gallery
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col md:flex-row justify-between items-center py-6 bg-gray-800 text-gray-400">
        <p className="text-xs">© 2024 GlobeTrotter. All rights reserved.</p>
        <nav className="flex gap-4 mt-4 md:mt-0">
          <Link className="text-xs hover:text-white transition" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:text-white transition" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="#" className="hover:text-white transition">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" className="hover:text-white transition">
            <Facebook className="h-5 w-5" />
          </Link>
        </div>
      </footer>
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-delay {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-fade-in {
          animation: fade-in 2s ease-in-out;
        }
        .animate-fade-in-delay {
          animation: fade-in-delay 2s ease-in-out 0.5s forwards;
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}