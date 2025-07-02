import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Blocks, ScaleIcon as Scales, Shield, Users, CheckCircle, Menu, Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'

export default function LegalChainLanding() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <header className="px-4 lg:px-6 h-16 flex items-center justify-between shadow-md bg-white dark:bg-gray-800 fixed w-full z-10 transition-colors duration-300">
          <Link className="flex items-center justify-center" href="#">
            <Scales className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400 animate-pulse" />
            <span className="text-lg font-extrabold text-gray-800 dark:text-white">LegalChain</span>
          </Link>
          <div className="flex items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
              {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-800" />}
            </button>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  <Link className="text-lg font-medium" href="#" onClick={() => setMobileMenuOpen(false)}>
                    Features
                  </Link>
                  <Link className="text-lg font-medium" href="#" onClick={() => setMobileMenuOpen(false)}>
                    How It Works
                  </Link>
                  <Link className="text-lg font-medium" href="#" onClick={() => setMobileMenuOpen(false)}>
                    Pricing
                  </Link>
                  <Link className="text-lg font-medium" href="#" onClick={() => setMobileMenuOpen(false)}>
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <nav className="hidden md:flex items-center gap-4 sm:gap-6">
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
              Features
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
              How It Works
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
              Pricing
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
              Contact
            </Link>
          </nav>
        </header>
        <main className="flex-1">
          <motion.section
            className="w-full py-20 md:py-32 lg:py-40 xl:py-56 bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-6 text-center">
                <div className="space-y-3">
                  <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                    Revolutionizing Legal Services with Blockchain
                  </h1>
                  <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-gray-200">
                    LegalChain: Secure, transparent, and efficient smart contract management for the modern legal landscape.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 transition" size="lg">
                    Get Started
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600 transition" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </motion.section>
          <motion.section
            className="w-full py-16 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="container px-4 md:px-6">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8 sm:mb-12 text-gray-800 dark:text-white">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
                <div className="flex flex-col items-center text-center">
                  <Blocks className="h-12 w-12 mb-4 text-blue-600" />
                  <h3 className="text-xl font-bold mb-2">Smart Contract Management</h3>
                  <p className="text-gray-600">Create, deploy, and manage legally-binding smart contracts with ease.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Shield className="h-12 w-12 mb-4 text-blue-600" />
                  <h3 className="text-xl font-bold mb-2">Enhanced Security</h3>
                  <p className="text-gray-600">Leverage blockchain technology for tamper-proof legal agreements.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Users className="h-12 w-12 mb-4 text-blue-600" />
                  <h3 className="text-xl font-bold mb-2">Decentralized Dispute Resolution</h3>
                  <p className="text-gray-600">Fair and efficient conflict resolution through a network of legal experts.</p>
                </div>
              </div>
            </div>
          </motion.section>
          <motion.section
            className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="container px-4 md:px-6">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8 sm:mb-12 text-gray-800 dark:text-white">How It Works</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4">1</div>
                  <h3 className="text-xl font-bold mb-2">Create Smart Contract</h3>
                  <p className="text-gray-600">Draft your legal agreement using our intuitive contract builder.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4">2</div>
                  <h3 className="text-xl font-bold mb-2">Deploy on Blockchain</h3>
                  <p className="text-gray-600">Securely store and execute your contract on the blockchain.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4">3</div>
                  <h3 className="text-xl font-bold mb-2">Manage & Resolve</h3>
                  <p className="text-gray-600">Monitor contract performance and resolve disputes if necessary.</p>
                </div>
              </div>
            </div>
          </motion.section>
          <motion.section
            className="w-full py-16 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="container px-4 md:px-6">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8 sm:mb-12 text-gray-800 dark:text-white">Why Choose LegalChain</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
                <div>
                  <h3 className="text-2xl font-bold mb-4">LegalChain vs. Traditional Legal Services</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" />
                      <span>Faster contract execution and management</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" />
                      <span>Lower costs through automation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" />
                      <span>Increased transparency and trust</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" />
                      <span>Global accessibility</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">LegalChain vs. Competitors (e.g., Jur)</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" />
                      <span>More comprehensive legal service offerings</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" />
                      <span>Advanced AI-powered contract analysis</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" />
                      <span>Larger network of legal experts</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" />
                      <span>Enhanced customization options</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>
          <motion.section
            className="w-full py-16 md:py-24 lg:py-32 bg-blue-600 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-6 text-center">
                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to Transform Your Legal Services?
                  </h2>
                  <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-blue-200">
                    Join LegalChain today and experience the future of decentralized legal solutions.
                  </p>
                </div>
                <div className="w-full max-w-md">
                  <form className="flex flex-col sm:flex-row items-center gap-4">
                    <Input
                      className="w-full flex-1 bg-white text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-400 transition"
                      placeholder="Enter your email"
                      type="email"
                      required
                    />
                    <Button className="w-full sm:w-auto bg-black text-white hover:bg-gray-800 transition" type="submit">
                      Get Started
                    </Button>
                  </form>
                  <p className="mt-2 text-xs text-blue-100">
                    By signing up, you agree to our{" "}
                    <Link className="underline underline-offset-2" href="#">
                      Terms & Conditions
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </main>
        <footer className="py-6 sm:py-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 sm:mb-0">© 2024 LegalChain. All rights reserved.</p>
              <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <Link className="text-xs text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
                  Terms of Service
                </Link>
                <Link className="text-xs text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
                  Privacy
                </Link>
                <Link className="text-xs text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
                  Careers
                </Link>
                <Link className="text-xs text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
                  Blog
                </Link>
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

