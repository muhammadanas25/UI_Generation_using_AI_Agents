import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Cube, Ticket, Users, Globe, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-shadow duration-300">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          <Link className="flex items-center justify-center" href="#">
            <Cube className="h-6 w-6 text-primary animate-spin-slow" />
            <span className="ml-2 text-2xl font-bold text-primary">EventChain</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium text-muted-foreground hover:text-primary transition" href="#">
              Features
            </Link>
            <Link className="text-sm font-medium text-muted-foreground hover:text-primary transition" href="#">
              How It Works
            </Link>
            <Link className="text-sm font-medium text-muted-foreground hover:text-primary transition" href="#">
              Pricing
            </Link>
            <Link className="text-sm font-medium text-muted-foreground hover:text-primary transition" href="#">
              Contact
            </Link>
            <Button variant="ghost" className="ml-4">Connect Wallet</Button>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
              {menuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            className="md:hidden bg-white shadow-md"
          >
            <div className="flex flex-col px-4 py-2 space-y-2">
              <Link className="text-sm font-medium text-muted-foreground hover:text-primary transition" href="#">
                Features
              </Link>
              <Link className="text-sm font-medium text-muted-foreground hover:text-primary transition" href="#">
                How It Works
              </Link>
              <Link className="text-sm font-medium text-muted-foreground hover:text-primary transition" href="#">
                Pricing
              </Link>
              <Link className="text-sm font-medium text-muted-foreground hover:text-primary transition" href="#">
                Contact
              </Link>
              <Button variant="ghost">Connect Wallet</Button>
            </div>
          </motion.nav>
        )}
      </header>
      <main className="flex-1 mt-16">
        <section className="w-full py-20 md:py-32 bg-gradient-to-r from-primary to-secondary overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-3"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
                  Revolutionize Event Management with Web3
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-white">
                  EventChain: The decentralized platform for seamless event planning, NFT ticketing, and unforgettable experiences.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button className="px-6 py-3 text-lg rounded-md shadow-lg hover:scale-105 transition-transform">Get Started</Button>
                <Button variant="outline" className="px-6 py-3 text-lg rounded-md shadow-lg hover:scale-105 transition-transform">Learn More</Button>
              </motion.div>
              <div className="mt-8 flex space-x-4">
                <Link href="#" className="text-white hover:text-primary transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.462.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.675V1.325C24 .597 23.403 0 22.675 0z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-primary transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.423.416a4.92 4.92 0 011.675 1.091 4.92 4.92 0 011.091 1.675c.176.454.362 1.253.416 2.423.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.416 2.423a4.92 4.92 0 01-1.091 1.675 4.92 4.92 0 01-1.675 1.091c-.454.176-1.253.362-2.423.416-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.423-.416a4.92 4.92 0 01-1.675-1.091 4.92 4.92 0 01-1.091-1.675c-.176-.454-.362-1.253-.416-2.423C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.416-2.423a4.92 4.92 0 011.091-1.675 4.92 4.92 0 011.675-1.091c.454-.176 1.253-.362 2.423-.416C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.665.32 3.757.654a7.07 7.07 0 00-2.545 1.664A7.07 7.07 0 00.654 4.863c-.334.908-.524 2.018-.582 3.295C0 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.058 1.277.248 2.387.582 3.295a7.07 7.07 0 001.664 2.545 7.07 7.07 0 002.545 1.664c.908.334 2.018.524 3.295.582C8.332 24 8.741 24 12 24s3.668-.013 4.948-.072c1.277-.058 2.387-.248 3.295-.582a7.07 7.07 0 002.545-1.664 7.07 7.07 0 001.664-2.545c.334-.908.524-2.018.582-3.295.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.058-1.277-.248-2.387-.582-3.295a7.07 7.07 0 00-1.664-2.545A7.07 7.07 0 0018.243.654c-.908-.334-2.018-.524-3.295-.582C15.668.013 15.259 0 12 0z"/>
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998z"/>
                    <circle cx="18.406" cy="5.594" r="1.44"/>
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-primary transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.423.416a4.92 4.92 0 011.675 1.091 4.92 4.92 0 011.091 1.675c.176.454.362 1.253.416 2.423.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.416 2.423a4.92 4.92 0 01-1.091 1.675 4.92 4.92 0 01-1.675 1.091c-.454.176-1.253.362-2.423.416-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.423-.416a4.92 4.92 0 01-1.675-1.091 4.92 4.92 0 01-1.091-1.675c-.176-.454-.362-1.253-.416-2.423C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.416-2.423a4.92 4.92 0 011.091-1.675 4.92 4.92 0 011.675-1.091c.454-.176 1.253-.362 2.423-.416C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.665.32 3.757.654a7.07 7.07 0 00-2.545 1.664A7.07 7.07 0 00.654 4.863c-.334.908-.524 2.018-.582 3.295C0 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.058 1.277.248 2.387.582 3.295a7.07 7.07 0 001.664 2.545 7.07 7.07 0 002.545 1.664c.908.334 2.018.524 3.295.582C8.332 24 8.741 24 12 24s3.668-.013 4.948-.072c1.277-.058 2.387-.248 3.295-.582a7.07 7.07 0 002.545-1.664 7.07 7.07 0 001.664-2.545c.334-.908.524-2.018.582-3.295.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.058-1.277-.248-2.387-.582-3.295a7.07 7.07 0 00-1.664-2.545A7.07 7.07 0 0018.243.654c-.908-.334-2.018-.524-3.295-.582C15.668.013 15.259 0 12 0z"/>
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998z"/>
                    <circle cx="18.406" cy="5.594" r="1.44"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-20 md:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-primary mb-16">Key Features</h2>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg transition-transform"
              >
                <Ticket className="h-12 w-12 text-primary mb-4 animate-bounce" />
                <h3 className="text-xl font-bold mb-2">NFT Ticketing</h3>
                <p className="text-center text-muted-foreground">
                  Unique, verifiable, and tradeable NFT tickets for your events
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg transition-transform"
              >
                <Globe className="h-12 w-12 text-primary mb-4 animate-pulse" />
                <h3 className="text-xl font-bold mb-2">Decentralized Platform</h3>
                <p className="text-center text-muted-foreground">
                  Powered by blockchain for transparency and security
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg transition-transform"
              >
                <Users className="h-12 w-12 text-primary mb-4 animate-bounce" />
                <h3 className="text-xl font-bold mb-2">Community Governance</h3>
                <p className="text-center text-muted-foreground">
                  Participate in platform decisions with our governance token
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-20 md:py-32 bg-gradient-to-r from-secondary to-primary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.img
                src="/nft-ticket.svg"
                alt="NFT Ticket Example"
                className="w-full rounded-xl shadow-lg hover:scale-105 transition-transform"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              />
              <div className="text-white space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-4xl font-extrabold">NFT Ticketing Revolution</h2>
                  <p className="mt-4 text-lg">
                    Transform your event tickets into unique digital assets. Offer exclusive perks, enable secure
                    transfers, and create lasting memories with EventChain's NFT ticketing system.
                  </p>
                </motion.div>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <Button className="px-6 py-3 text-lg rounded-md shadow-lg hover:scale-105 transition-transform">Create an Event</Button>
                  <Button variant="outline" className="px-6 py-3 text-lg rounded-md shadow-lg hover:scale-105 transition-transform">Explore NFT Tickets</Button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-20 md:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-extrabold text-primary">Join the Web3 Event Revolution</h2>
                <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                  Be part of the future of event management. Sign up now to start creating unforgettable experiences with
                  EventChain.
                </p>
              </motion.div>
              <motion.div
                className="w-full max-w-md"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <form className="flex flex-col sm:flex-row items-center gap-4">
                  <Input className="flex-1" placeholder="Enter your email" type="email" required />
                  <Button type="submit" className="w-full sm:w-auto">Sign Up</Button>
                </form>
                <p className="mt-2 text-sm text-muted-foreground text-center">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2 text-primary hover:text-secondary transition" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl font-extrabold text-center text-primary mb-16">Testimonials</h2>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <motion.div
                className="flex flex-col items-center bg-muted p-6 rounded-xl shadow-lg"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <img src="/user1.jpg" alt="User 1" className="w-16 h-16 rounded-full mb-4" />
                <p className="text-center text-muted-foreground">
                  "EventChain made organizing our conference seamless and innovative with NFT ticketing."
                </p>
                <h4 className="mt-4 font-semibold text-primary">Alice Johnson</h4>
              </motion.div>
              <motion.div
                className="flex flex-col items-center bg-muted p-6 rounded-xl shadow-lg"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <img src="/user2.jpg" alt="User 2" className="w-16 h-16 rounded-full mb-4" />
                <p className="text-center text-muted-foreground">
                  "The decentralized platform ensures our event's security and transparency like never before."
                </p>
                <h4 className="mt-4 font-semibold text-primary">Mark Lee</h4>
              </motion.div>
              <motion.div
                className="flex flex-col items-center bg-muted p-6 rounded-xl shadow-lg"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <img src="/user3.jpg" alt="User 3" className="w-16 h-16 rounded-full mb-4" />
                <p className="text-center text-muted-foreground">
                  "NFT tickets provided a unique experience for our attendees and opened new revenue streams."
                </p>
                <h4 className="mt-4 font-semibold text-primary">Samantha Kim</h4>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white shadow-inner">
        <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground">© 2024 EventChain. All rights reserved.</p>
          <nav className="flex space-x-4 mt-4 sm:mt-0">
            <Link className="text-xs text-muted-foreground hover:text-primary transition" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs text-muted-foreground hover:text-primary transition" href="#">
              Privacy
            </Link>
            <Link className="text-xs text-muted-foreground hover:text-primary transition" href="#">
              Support
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}