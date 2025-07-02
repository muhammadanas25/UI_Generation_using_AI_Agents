import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, HardDrive, Lock, Share2, Shield, Wifi, Menu, Sun, Moon, X } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion } from 'framer-motion'

export default function DataVaultLanding() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-white dark:bg-gray-900 shadow-md fixed top-0 w-full z-50">
        <Link href="#" className="flex items-center">
          <HardDrive className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-600" />
          <span className="ml-2 text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">DataVault</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-800 dark:text-white" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-800 dark:text-white" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-800 dark:text-white" href="#pricing">
            Pricing
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" onClick={() => setDarkMode(!darkMode)} className="p-2">
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden p-2">
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <Link
                  href="#features"
                  className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="#how-it-works"
                  className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link
                  href="#pricing"
                  className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Pricing
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-20 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-gray-800 dark:to-gray-700">
          <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between">
            <motion.div
              className="flex-1 text-center lg:text-left mb-8 lg:mb-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Secure, Decentralized Storage with DataVault
              </h1>
              <p className="text-base sm:text-lg text-gray-200 mb-6">
                Store your data securely on the decentralized web. Powered by IPFS technology for ultimate privacy and
                accessibility.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 shadow-lg">
                  Get Started
                </Button>
                <Button variant="outline" className="w-full sm:w-auto px-6 py-3 text-white border border-white hover:bg-white hover:text-indigo-600 transition-colors duration-300">
                  Learn More
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img
                src="/images/hero-illustration.svg"
                alt="DataVault Illustration"
                className="w-full max-w-md mx-auto"
              />
            </motion.div>
          </div>
        </section>
        <section id="features" className="w-full py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Why Choose DataVault?
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Shield className="w-12 h-12 mb-4" />
                  <CardTitle>Decentralized Security</CardTitle>
                </CardHeader>
                <CardContent>
                  Your data is distributed across a network of nodes, eliminating single points of failure and enhancing
                  security.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Wifi className="w-12 h-12 mb-4" />
                  <CardTitle>Always Accessible</CardTitle>
                </CardHeader>
                <CardContent>
                  Access your files from anywhere, anytime. Our IPFS integration ensures your data is always available.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Lock className="w-12 h-12 mb-4" />
                  <CardTitle>End-to-End Encryption</CardTitle>
                </CardHeader>
                <CardContent>
                  Your files are encrypted before being distributed, ensuring only you have access to your data.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              How DataVault Works
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">IPFS Integration</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  DataVault leverages the InterPlanetary File System (IPFS) to store your data across a distributed network.
                  This means your files are broken into smaller pieces, encrypted, and stored on multiple nodes worldwide.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Share2 className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span>Distributed storage for enhanced reliability</span>
                  </li>
                  <li className="flex items-center">
                    <Database className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span>Content-addressed for efficient retrieval</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span>Immutable and tamper-proof data storage</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 sm:p-6 overflow-x-auto">
                <pre className="text-sm whitespace-pre-wrap">
                  {`
1. Upload file to DataVault
2. File is encrypted
3. Encrypted file is split into chunks
4. Chunks are distributed across IPFS network
5. Receive unique content identifier (CID)
6. Use CID to retrieve file from any IPFS node
                  `}
                </pre>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Simple, Transparent Pricing
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>For personal use</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$9.99/mo</p>
                  <ul className="mt-4 space-y-2">
                    <li>100 GB Storage</li>
                    <li>End-to-end encryption</li>
                    <li>IPFS integration</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Choose Plan</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>For power users</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$24.99/mo</p>
                  <ul className="mt-4 space-y-2">
                    <li>1 TB Storage</li>
                    <li>Priority support</li>
                    <li>Advanced sharing options</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Choose Plan</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For organizations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">Custom</p>
                  <ul className="mt-4 space-y-2">
                    <li>Unlimited storage</li>
                    <li>Dedicated support</li>
                    <li>Custom integration options</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-20 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-gray-800 dark:to-gray-700">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Ready to Secure Your Data?
              </motion.h2>
              <p className="text-base sm:text-lg text-gray-200 max-w-2xl">
                Join DataVault today and experience the future of decentralized storage.
              </p>
              <Button className="w-full sm:w-auto px-8 py-3 text-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300">
                Get Started Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 sm:mb-0">© 2024 DataVault. All rights reserved.</p>
          <nav className="flex flex-wrap justify-center sm:justify-end gap-4">
            <Link
              href="#"
              className="text-xs text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-300"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-300"
            >
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

