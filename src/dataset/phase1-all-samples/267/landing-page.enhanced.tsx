import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Box, CheckCircle, Link as LinkIcon, Shield, Zap, Menu, X } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href="#" className="flex items-center">
            <Box className="h-8 w-8 text-primary animate-pulse" />
            <span className="ml-2 text-2xl font-bold text-primary">TrackNode</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition">
              Testimonials
            </Link>
            <Button variant="ghost" className="text-sm">Contact Us</Button>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </Button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-md"
          >
            <div className="px-4 py-4 space-y-4">
              <Link href="#features" className="block text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" onClick={() => setIsMobileMenuOpen(false)}>
                Features
              </Link>
              <Link href="#how-it-works" className="block text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" onClick={() => setIsMobileMenuOpen(false)}>
                How It Works
              </Link>
              <Link href="#testimonials" className="block text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" onClick={() => setIsMobileMenuOpen(false)}>
                Testimonials
              </Link>
              <Button variant="ghost" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                Contact Us
              </Button>
              <Button variant="ghost" onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </Button>
            </div>
          </motion.div>
        )}
      </header>
      <main className="flex-1 mt-16">
        <section className="w-full py-20 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 md:px-6 flex flex-col-reverse lg:flex-row items-center">
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100">
                  Revolutionize Your Supply Chain with Blockchain
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                  TrackNode uses cutting-edge blockchain technology to ensure authenticity and transparency in your supply chain.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="flex items-center animate-bounce-slow">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <Image
                  src="/images/hero-illustration.svg"
                  alt="Blockchain Illustration"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
                <motion.div
                  className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                  <Shield className="w-24 h-24 text-primary opacity-10" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-16 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className="text-3xl sm:text-5xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Key Features
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Shield className="w-12 h-12 text-primary mb-4 animate-pulse" />
                  <CardTitle className="text-xl">Immutable Records</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 dark:text-gray-300 text-center">
                  Blockchain technology ensures that once data is recorded, it cannot be altered, providing a trustworthy audit trail.
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Zap className="w-12 h-12 text-primary mb-4 animate-bounce" />
                  <CardTitle className="text-xl">Real-time Tracking</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 dark:text-gray-300 text-center">
                  Monitor your products in real-time as they move through the supply chain, from manufacturer to end consumer.
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                  <LinkIcon className="w-12 h-12 text-primary mb-4 rotate-45" />
                  <CardTitle className="text-xl">Seamless Integration</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 dark:text-gray-300 text-center">
                  Easily integrate TrackNode with your existing systems through our robust API and comprehensive documentation.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className="text-3xl sm:text-5xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              How It Works
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: 1, title: "Register Product", description: "Enter product details into the TrackNode system.", icon: <Box className="w-12 h-12 text-primary" /> },
                { step: 2, title: "Generate QR Code", description: "A unique QR code is created for each product.", icon: <Box className="w-12 h-12 text-primary" /> },
                { step: 3, title: "Track Movement", description: "Scan the QR code at each point in the supply chain.", icon: <Box className="w-12 h-12 text-primary" /> },
                { step: 4, title: "Verify Authenticity", description: "End consumers can scan the QR code to verify the product's journey.", icon: <Box className="w-12 h-12 text-primary" /> },
              ].map((item) => (
                <motion.div
                  key={item.step}
                  className="flex flex-col items-center text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:scale-105 transform transition duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className="text-3xl sm:text-5xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              What Our Clients Say
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Supply Chain Manager, TechCorp",
                  content: "TrackNode has transformed our supply chain management. We now have unprecedented visibility and can guarantee the authenticity of our products.",
                  avatar: "/images/avatar1.jpg",
                },
                {
                  name: "Michael Lee",
                  role: "CEO, Global Logistics Inc.",
                  content: "Implementing TrackNode was a game-changer for us. Our customers trust us more than ever, and we've seen a significant reduction in counterfeit claims.",
                  avatar: "/images/avatar2.jpg",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white dark:bg-gray-700 hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="flex items-center space-x-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-lg text-gray-800 dark:text-gray-100">{testimonial.name}</CardTitle>
                      <p className="text-sm text-gray-500 dark:text-gray-300">{testimonial.role}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-300">
                    <p className="italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center">
              <motion.h2
                className="text-3xl sm:text-5xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Ready to Transform Your Supply Chain?
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Join the blockchain revolution and bring unparalleled transparency to your supply chain with TrackNode.
              </motion.p>
              <Button className="flex items-center animate-pulse">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-white dark:bg-gray-900 py-6 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 TrackNode. All rights reserved.</p>
          <nav className="flex gap-4 mt-4 sm:mt-0">
            <Link href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:underline underline-offset-4 transition">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:underline underline-offset-4 transition">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:underline underline-offset-4 transition">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark transition-colors duration-300 hidden md:block"
      >
        <ArrowRight className="transform rotate-45" />
      </button>
    </div>
  )
}