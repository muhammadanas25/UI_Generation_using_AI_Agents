import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plane, Hotel, Shield, Globe, Zap, Users, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"

export default function TravelChainLanding() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-between">
        <Link className="flex items-center space-x-2 text-white" href="#">
          <Plane className="h-6 w-6" />
          <span className="font-bold text-lg">TravelChain</span>
        </Link>
        <nav className="hidden lg:flex gap-6">
          <Link className="text-sm font-medium text-white hover:underline underline-offset-4 transition" href="#">
            How It Works
          </Link>
          <Link className="text-sm font-medium text-white hover:underline underline-offset-4 transition" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium text-white hover:underline underline-offset-4 transition" href="#">
            About
          </Link>
          <Link className="text-sm font-medium text-white hover:underline underline-offset-4 transition" href="#">
            Contact
          </Link>
        </nav>
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>
      {menuOpen && (
        <nav className="lg:hidden bg-indigo-700 text-white flex flex-col items-center space-y-4 py-4 animate-slide-down">
          <Link className="text-sm font-medium hover:underline underline-offset-4 transition" href="#">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 transition" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 transition" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 transition" href="#">
            Contact
          </Link>
        </nav>
      )}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center space-y-4 text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Decentralized Travel Booking with TravelChain
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Experience the future of travel with blockchain-powered hotel and flight bookings. Secure, transparent, and rewarding.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-white text-black" placeholder="Enter your email" type="email" />
                  <Button className="bg-white text-indigo-600 hover:bg-indigo-100 transition" type="submit">
                    Join Waitlist
                  </Button>
                </form>
                <p className="text-xs text-gray-200">
                  By signing up, you agree to our Terms & Conditions and Privacy Policy.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              Why Choose TravelChain?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Shield className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">Secure Transactions</h3>
                <p className="text-gray-600">Blockchain-powered bookings ensure your data and payments are always secure.</p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Globe className="h-12 w-12 mb-4 text-green-600" />
                <h3 className="text-xl font-bold mb-2">Global Accessibility</h3>
                <p className="text-gray-600">Access a worldwide network of accommodations and flights without intermediaries.</p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Zap className="h-12 w-12 mb-4 text-yellow-600" />
                <h3 className="text-xl font-bold mb-2">Instant Rewards</h3>
                <p className="text-gray-600">Earn and redeem TravelTokens for discounts and exclusive perks.</p>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              How TravelChain Works
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                  <p className="text-xl">Connect your Web3 wallet</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                  <p className="text-xl">Search for hotels or flights</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                  <p className="text-xl">Book with crypto or fiat</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                  <p className="text-xl">Receive instant confirmation and rewards</p>
                </div>
              </motion.div>
              <motion.div
                className="bg-gray-200 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="aspect-video rounded-md overflow-hidden">
                  <img
                    alt="TravelChain platform demo"
                    className="object-cover w-full h-full transform hover:scale-105 transition duration-300"
                    src="/placeholder.svg?height=300&width=400"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              What Our Users Say
            </motion.h2>
            <div className="flex overflow-x-auto space-x-8 py-4">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md flex-none w-80"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-600 mb-4">"TravelChain revolutionized how I book my trips. The transparency and rewards are unmatched!"</p>
                <p className="font-bold">- Alice, Crypto Enthusiast</p>
              </motion.div>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md flex-none w-80"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-600 mb-4">"As a frequent traveler, the security of blockchain-based bookings gives me peace of mind."</p>
                <p className="font-bold">- Bob, Business Traveler</p>
              </motion.div>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md flex-none w-80"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-600 mb-4">"The global accessibility of TravelChain has opened up a world of new destinations for me."</p>
                <p className="font-bold">- Charlie, Adventure Seeker</p>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center space-y-4 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Transform Your Travel Experience?</h2>
                <p className="mx-auto max-w-[700px] text-indigo-100 md:text-xl">
                  Join the TravelChain revolution and enjoy secure, rewarding, and decentralized travel bookings.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-white text-black" placeholder="Enter your email" type="email" />
                  <Button className="bg-white text-indigo-600 hover:bg-indigo-100 transition" type="submit">
                    Get Early Access
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 bg-gray-800 text-gray-400">
        <p className="text-xs">© 2024 TravelChain. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 transition" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 transition" href="#">
            Privacy
          </Link>
          <div className="flex space-x-2">
            <Link href="#" className="hover:text-white transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.597 0 0 .598 0 1.333v21.333C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.793.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.588l-.467 3.622h-3.121V24h6.116C23.403 24 24 23.403 24 22.667V1.333C24 .598 23.403 0 22.675 0z" />
              </svg>
            </Link>
            <Link href="#" className="hover:text-white transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.828 9.828 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616 2c-2.737 0-4.95 2.213-4.95 4.95 0 .388.043.765.127 1.124C7.691 7.775 4.066 5.822 1.64 2.928a4.928 4.928 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.242-.616v.062c0 2.385 1.697 4.372 3.946 4.827a4.935 4.935 0 0 1-2.236.084c.63 1.953 2.445 3.377 4.6 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.213c9.056 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.637A10.012 10.012 0 0 0 24 4.557z" />
              </svg>
            </Link>
            <Link href="#" className="hover:text-white transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.976 1.248 2.243 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.976.975-2.243 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.976-1.248-2.243-1.31-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608C4.527 2.5 5.794 2.227 7.16 2.165 8.426 2.107 8.806 2.095 12 2.095m0-2.163C8.741 0 8.332.013 7.052.072 5.766.13 4.608.376 3.678 1.306c-.93.93-1.176 2.087-1.234 3.373C2.013 5.668 2 6.077 2 9.333v5.334c0 3.256.013 3.665.072 4.945.058 1.286.304 2.443 1.234 3.373.93.93 2.087 1.176 3.373 1.234 1.28.059 1.689.072 4.945.072s3.665-.013 4.945-.072c1.286-.058 2.443-.304 3.373-1.234.93-.93 1.176-2.087 1.234-3.373.059-1.28.072-1.689.072-4.945V9.333c0-3.256-.013-3.665-.072-4.945-.058-1.286-.304-2.443-1.234-3.373-.93-.93-2.087-1.176-3.373-1.234C15.665.013 15.256 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                <circle cx="18.406" cy="5.594" r="1.44" />
              </svg>
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  )
}