import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChevronRight,
  BarChart,
  Target,
  Users,
  Mail,
  Phone,
  Linkedin,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Component() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link className="flex items-center space-x-2" href="#">
            <BarChart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">StrategyGuru</span>
          </Link>
          <nav className="hidden lg:flex gap-6">
            <Link
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-300"
              href="#"
            >
              Home
            </Link>
            <Link
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-300"
              href="#case-studies"
            >
              Case Studies
            </Link>
            <Link
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-300"
              href="#strategies"
            >
              Strategies
            </Link>
            <Link
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-300"
              href="#contact"
            >
              Contact
            </Link>
          </nav>
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            className="lg:hidden bg-white shadow-md"
          >
            <div className="flex flex-col p-4 space-y-2">
              <Link
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-300"
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-300"
                href="#case-studies"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-300"
                href="#strategies"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Strategies
              </Link>
              <Link
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-300"
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.nav>
        )}
      </header>
      <main className="flex-1 mt-16">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center space-y-6 text-center text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Welcome to StrategyGuru
              </h1>
              <p className="max-w-2xl text-lg md:text-xl">
                Elevating brands through data-driven marketing strategies and innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-indigo-600 hover:bg-gray-100 transition">
                  Get Started
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-indigo-600 transition">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        <section id="case-studies" className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className="text-3xl sm:text-5xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Featured Case Studies
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src="/images/ecommerce-growth.jpg"
                  alt="E-commerce Growth"
                  className="h-48 w-full object-cover"
                />
                <Card className="border-0">
                  <CardHeader className="px-4 py-2">
                    <CardTitle>E-commerce Growth</CardTitle>
                    <CardDescription>How we increased online sales by 200%</CardDescription>
                  </CardHeader>
                  <CardContent className="px-4 py-2">
                    <p className="text-gray-600">
                      Learn about our strategic approach that led to significant growth for an e-commerce client.
                    </p>
                    <Button variant="link" className="mt-4 flex items-center text-indigo-600">
                      Read Case Study
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src="/images/brand-revitalization.jpg"
                  alt="Brand Revitalization"
                  className="h-48 w-full object-cover"
                />
                <Card className="border-0">
                  <CardHeader className="px-4 py-2">
                    <CardTitle>Brand Revitalization</CardTitle>
                    <CardDescription>Refreshing a 50-year-old brand for the digital age</CardDescription>
                  </CardHeader>
                  <CardContent className="px-4 py-2">
                    <p className="text-gray-600">
                      Discover how we helped a traditional company adapt to modern marketing challenges.
                    </p>
                    <Button variant="link" className="mt-4 flex items-center text-indigo-600">
                      Read Case Study
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src="/images/social-media-mastery.jpg"
                  alt="Social Media Mastery"
                  className="h-48 w-full object-cover"
                />
                <Card className="border-0">
                  <CardHeader className="px-4 py-2">
                    <CardTitle>Social Media Mastery</CardTitle>
                    <CardDescription>Building a community of 1M+ followers</CardDescription>
                  </CardHeader>
                  <CardContent className="px-4 py-2">
                    <p className="text-gray-600">
                      Explore our tactics for creating engaging content and growing a massive social media presence.
                    </p>
                    <Button variant="link" className="mt-4 flex items-center text-indigo-600">
                      Read Case Study
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="strategies" className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className="text-3xl sm:text-5xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Our Marketing Strategies
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <motion.div
                className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Target className="h-12 w-12 mb-4 text-indigo-600" />
                <h3 className="text-xl font-bold mb-2">Targeted Campaigns</h3>
                <p className="text-gray-600">
                  Precision-focused strategies to reach your ideal audience.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <BarChart className="h-12 w-12 mb-4 text-indigo-600" />
                <h3 className="text-xl font-bold mb-2">Data Analytics</h3>
                <p className="text-gray-600">
                  In-depth analysis to drive informed decision-making.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Users className="h-12 w-12 mb-4 text-indigo-600" />
                <h3 className="text-xl font-bold mb-2">Community Building</h3>
                <p className="text-gray-600">
                  Fostering loyal customer communities for sustainable growth.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-gray-100 to-gray-200">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className="text-3xl sm:text-5xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Client Results
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <CardTitle className="text-4xl font-bold text-indigo-600">200%</CardTitle>
                <CardContent>
                  <p className="text-gray-600">Increase in online sales for e-commerce clients</p>
                </CardContent>
              </motion.div>
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <CardTitle className="text-4xl font-bold text-indigo-600">1M+</CardTitle>
                <CardContent>
                  <p className="text-gray-600">Social media followers gained for brands</p>
                </CardContent>
              </motion.div>
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <CardTitle className="text-4xl font-bold text-indigo-600">50%</CardTitle>
                <CardContent>
                  <p className="text-gray-600">Average increase in customer engagement</p>
                </CardContent>
              </motion.div>
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <CardTitle className="text-4xl font-bold text-indigo-600">30+</CardTitle>
                <CardContent>
                  <p className="text-gray-600">Successful brand launches</p>
                </CardContent>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className="text-3xl sm:text-5xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Get in Touch
            </motion.h2>
            <div className="flex flex-col items-center space-y-6">
              <p className="text-gray-600 text-center max-w-2xl">
                Ready to take your marketing to the next level? Let's discuss how StrategyGuru can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="inline-flex items-center bg-indigo-600 text-white hover:bg-indigo-700 transition">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </Button>
                <Button
                  variant="outline"
                  className="inline-flex items-center border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Schedule a Call
                </Button>
              </div>
              <motion.form
                className="w-full max-w-lg mt-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="grid grid-cols-1 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                  <textarea
                    placeholder="Your Message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    rows="4"
                  ></textarea>
                  <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700 transition">
                    Send Message
                  </Button>
                </div>
              </motion.form>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-gray-800 text-gray-200 py-6">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center space-y-4 sm:flex-row sm:justify-between">
          <p className="text-sm">© 2024 StrategyGuru. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link
              className="text-sm hover:text-white transition-colors duration-300"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-sm hover:text-white transition-colors duration-300"
              href="#"
            >
              Privacy
            </Link>
          </nav>
          <div className="flex space-x-4">
            <Link
              className="text-gray-400 hover:text-white transition-colors duration-300"
              href="#"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            {/* You can add more social icons here */}
          </div>
        </div>
      </footer>
    </div>
  )
}