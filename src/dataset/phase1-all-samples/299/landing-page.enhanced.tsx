import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Cube, Ticket, Users, Globe, Coins } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-900 to-gray-800">
      <header className="px-4 lg:px-6 h-20 flex items-center bg-transparent fixed top-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link className="flex items-center justify-center" href="#">
            <Cube className="h-8 w-8 mr-3 text-white animate-spin" />
            <span className="font-extrabold text-2xl text-white">EventX</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300" href="#">
              Features
            </Link>
            <Link className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300" href="#">
              Events
            </Link>
            <Link className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300" href="#">
              About
            </Link>
            <Link className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300" href="#">
              Contact
            </Link>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 mt-20">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-cover bg-center" style={{ backgroundImage: 'url("/hero-bg.jpg")' }}>
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center space-y-6 text-center text-white"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                Welcome to <span className="text-indigo-400">EventX</span>
              </h1>
              <p className="max-w-2xl text-lg md:text-xl">
                The future of virtual events with decentralized ticketing. Experience unique events and own a piece of
                history with NFT tickets.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-indigo-500 hover:bg-indigo-600 transition-colors duration-300 shadow-lg">
                  Explore Events
                </Button>
                <Button variant="outline" className="border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white transition-colors duration-300">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12">Why Choose EventX?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-gray-800 hover:scale-105 transition-transform duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Ticket className="w-10 h-10 mb-3 text-indigo-400" />
                  <CardTitle className="text-xl text-white">NFT Tickets</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Own a piece of the event with unique, tradeable NFT tickets that serve as digital memorabilia.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 hover:scale-105 transition-transform duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Users className="w-10 h-10 mb-3 text-indigo-400" />
                  <CardTitle className="text-xl text-white">Global Audience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Connect with attendees from around the world in our immersive virtual environments.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 hover:scale-105 transition-transform duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Globe className="w-10 h-10 mb-3 text-indigo-400" />
                  <CardTitle className="text-xl text-white">Decentralized Platform</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Enjoy increased security, transparency, and control over your event experiences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12">Featured NFT Tickets</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-gray-700 hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-full aspect-square relative rounded-md overflow-hidden">
                      <Image src={`/ticket-${i}.jpg`} alt={`Virtual Concert ${i}`} layout="fill" objectFit="cover" />
                    </div>
                    <CardTitle className="text-xl text-white mt-4">Virtual Concert #{i}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-400 mb-2">Date: June 1{i}, 2024</p>
                    <Button className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors duration-300">
                      Buy NFT Ticket
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Choose an Event", description: "Browse our curated list of virtual experiences.", icon: <Globe className="w-8 h-8 text-indigo-400" /> },
                { title: "Purchase NFT Ticket", description: "Securely buy your ticket using cryptocurrency.", icon: <Coins className="w-8 h-8 text-indigo-400" /> },
                { title: "Access the Event", description: "Use your NFT to enter the virtual event space.", icon: <Ticket className="w-8 h-8 text-indigo-400" /> },
                { title: "Keep or Trade", description: "Hold onto your NFT as a collectible or trade it on the market.", icon: <Users className="w-8 h-8 text-indigo-400" /> },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {step.icon}
                  <h3 className="text-xl font-bold text-white mt-4">{step.title}</h3>
                  <p className="text-gray-400 mt-2">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Tech Talk 2024", date: "July 15, 2024", price: "0.1 ETH", image: "/tech-talk.jpg" },
                { title: "Virtual Art Gallery", date: "August 5, 2024", price: "0.05 ETH", image: "/art-gallery.jpg" },
                { title: "Blockchain Summit", date: "September 20, 2024", price: "0.15 ETH", image: "/blockchain-summit.jpg" },
              ].map((event, i) => (
                <Card key={i} className="bg-gray-700 hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-full aspect-video relative rounded-md overflow-hidden">
                      <Image src={event.image} alt={event.title} layout="fill" objectFit="cover" />
                    </div>
                    <CardTitle className="text-xl text-white mt-4">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-400 mb-2">Date: {event.date}</p>
                    <p className="text-sm font-bold text-indigo-400 mb-4">Price: {event.price}</p>
                    <Button className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors duration-300">
                      Register Interest
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center space-y-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Ready to Join the Future of Events?</h2>
              <p className="max-w-xl text-gray-400 text-lg">
                Sign up now to be notified about upcoming events and exclusive NFT ticket drops.
              </p>
              <form className="w-full max-w-md flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Input className="flex-1 bg-gray-700 text-white placeholder-gray-400 rounded-md" placeholder="Enter your email" type="email" />
                <Button className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-600 transition-colors duration-300">
                  Subscribe
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="py-6 w-full bg-gray-900 text-gray-400">
        <div className="container px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs">© 2024 EventX. All rights reserved.</p>
          <nav className="flex space-x-4 mt-2 sm:mt-0">
            <Link className="text-xs hover:text-white transition-colors duration-300" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:text-white transition-colors duration-300" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}