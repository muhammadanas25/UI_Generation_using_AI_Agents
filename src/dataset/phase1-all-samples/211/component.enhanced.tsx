import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { ShieldCheck, Lock, Eye, BarChart, Menu, User, Globe, Bookmark, TrendingUp } from 'lucide-react'
import { useState } from "react"
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PrivacyChainLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="fixed w-full z-50 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg border-b border-gray-700">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-extrabold text-blue-400">PrivacyChain</div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4 sm:space-x-6 text-sm sm:text-lg">
              <li><a href="#features" className="hover:text-blue-400 transition-colors duration-300">Features</a></li>
              <li><a href="#compare" className="hover:text-blue-400 transition-colors duration-300">Compare</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400 transition-colors duration-300">Testimonials</a></li>
              <li><a href="#cta" className="hover:text-blue-400 transition-colors duration-300">Get Started</a></li>
            </ul>
          </nav>
          <button className="md:hidden text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main>
        <section className="flex flex-col lg:flex-row items-center justify-between px-6 py-20 bg-cover bg-center" style={{ backgroundImage: 'url("/hero-bg.jpg")' }}>
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Your Transactions, Your Business</h1>
            <p className="text-lg sm:text-xl mb-8">
              PrivacyChain offers unparalleled privacy and security for your blockchain transactions.
              Stay anonymous, stay safe.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300">Explore PrivacyChain</Button>
          </motion.div>
          <motion.div
            className="lg:w-1/2 mt-10 lg:mt-0"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image src="/blockchain-illustration.svg" alt="Blockchain Illustration" width={500} height={500} className="w-full h-auto" />
          </motion.div>
        </section>

        <section id="features" className="py-12 sm:py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Why Choose PrivacyChain?</h2>
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              <FeatureCard
                icon={<ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400" />}
                title="Enhanced Privacy"
                description="Advanced encryption techniques ensure your transactions remain completely private."
              />
              <FeatureCard
                icon={<Lock className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400" />}
                title="Secure Transactions"
                description="Multi-layered security protocols protect against unauthorized access and attacks."
              />
              <FeatureCard
                icon={<Eye className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400" />}
                title="Zero-Knowledge Proofs"
                description="Verify transactions without revealing any sensitive information."
              />
              <FeatureCard
                icon={<BarChart className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400" />}
                title="Scalable Network"
                description="High-performance blockchain designed to handle increasing transaction volumes."
              />
            </motion.div>
          </div>
        </section>

        <section id="compare" className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">How We Compare</h2>
            <div className="overflow-x-auto">
              <Table className="min-w-full bg-gray-700 rounded-lg shadow-lg">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/4">Feature</TableHead>
                    <TableHead>PrivacyChain</TableHead>
                    <TableHead>Monero</TableHead>
                    <TableHead>Zcash</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Privacy Level</TableCell>
                    <TableCell>Advanced</TableCell>
                    <TableCell>High</TableCell>
                    <TableCell>High</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Transaction Speed</TableCell>
                    <TableCell>Very Fast</TableCell>
                    <TableCell>Fast</TableCell>
                    <TableCell>Moderate</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Scalability</TableCell>
                    <TableCell>Excellent</TableCell>
                    <TableCell>Good</TableCell>
                    <TableCell>Good</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Smart Contracts</TableCell>
                    <TableCell>Yes</TableCell>
                    <TableCell>Limited</TableCell>
                    <TableCell>Yes</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Testimonial cards remain the same */}
            </div>
          </div>
        </section>

        <section id="cta" className="py-12 sm:py-20 bg-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready to Secure Your Transactions?</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join PrivacyChain today and experience the future of private, secure blockchain technology.
            </p>
            <motion.form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto rounded-lg focus:ring-2 focus:ring-blue-400"
              />
              <Button className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 transition-colors duration-300">
                Get Early Access
              </Button>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 py-6 sm:py-8">
        <div className="container mx-auto px-4 text-center text-xs sm:text-sm text-gray-400">
          <p>&copy; 2024 PrivacyChain. All rights reserved.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">Contact Us</a>
          </div>
          <div className="mt-6 flex justify-center space-x-4">
            <SocialIcon href="#" icon={<User className="w-5 h-5" />} />
            <SocialIcon href="#" icon={<Globe className="w-5 h-5" />} />
            <SocialIcon href="#" icon={<Bookmark className="w-5 h-5" />} />
            <SocialIcon href="#" icon={<TrendingUp className="w-5 h-5" />} />
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div className="bg-gray-700 p-4 sm:p-6 rounded-lg text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-3 sm:mb-4 flex justify-center">{icon}</div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-300">{description}</p>
    </motion.div>
  )
}

function SocialIcon({ href, icon }) {
  return (
    <a href={href} className="text-blue-400 hover:text-blue-600 transition-colors duration-300">
      {icon}
    </a>
  )
}

