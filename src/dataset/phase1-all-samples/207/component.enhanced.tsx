import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, Lock, Zap, CheckCircle, ChevronDown, Sun, Moon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`${darkMode ? 'dark' : ''} flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300`}>
      <header className="px-4 lg:px-6 h-16 flex items-center bg-primary dark:bg-gray-800 shadow-md">
        <Link className="flex items-center justify-center" href="#">
          <Shield className="h-6 w-6 text-white" />
          <span className="ml-2 text-2xl font-bold text-white">CoverSure</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="relative text-sm font-medium text-white hover:text-primary-foreground transition-colors duration-300" href="#">
            How It Works
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 hover:w-full"></span>
          </Link>
          <Link className="relative text-sm font-medium text-white hover:text-primary-foreground transition-colors duration-300" href="#">
            Products
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 hover:w-full"></span>
          </Link>
          <Link className="relative text-sm font-medium text-white hover:text-primary-foreground transition-colors duration-300" href="#">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 hover:w-full"></span>
          </Link>
          <Link className="relative text-sm font-medium text-white hover:text-primary-foreground transition-colors duration-300" href="#">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 hover:w-full"></span>
          </Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="container px-4 md:px-6 text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 animate-pulse">
              Secure Your Smart Contracts with CoverSure
            </h1>
            <p className="mx-auto max-w-3xl text-zinc-200 md:text-xl mb-8">
              Protect your DeFi investments with our cutting-edge Web3 insurance platform. Get coverage for smart contract risks and sleep soundly.
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-white text-primary hover:bg-zinc-200 transition-colors duration-300">Get Started</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10 transition-colors duration-300">
                Learn More
              </Button>
            </div>
            <div className="mt-10 flex justify-center space-x-6">
              <Link href="#" className="text-zinc-200 hover:text-white transition-colors duration-300">
                <Image src="/crypto-icons/ethereum.svg" alt="Ethereum" width={40} height={40} className="hover:scale-110 transition-transform duration-300"/>
              </Link>
              <Link href="#" className="text-zinc-200 hover:text-white transition-colors duration-300">
                <Image src="/crypto-icons/bitcoin.svg" alt="Bitcoin" width={40} height={40} className="hover:scale-110 transition-transform duration-300"/>
              </Link>
              <Link href="#" className="text-zinc-200 hover:text-white transition-colors duration-300">
                <Image src="/crypto-icons/polygon.svg" alt="Polygon" width={40} height={40} className="hover:scale-110 transition-transform duration-300"/>
              </Link>
            </div>
          </motion.div>
          <Image
            src="/backgrounds/hero-bg.svg"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Why Choose CoverSure?</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg transition-transform duration-300"
              >
                <Lock className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Smart Contract Protection</h3>
                <p className="text-gray-600 dark:text-gray-300">Comprehensive coverage against smart contract vulnerabilities and exploits.</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg transition-transform duration-300"
              >
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Instant Claims</h3>
                <p className="text-gray-600 dark:text-gray-300">Automated claim processing with blockchain-based verification for quick payouts.</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg transition-transform duration-300"
              >
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Customizable Policies</h3>
                <p className="text-gray-600 dark:text-gray-300">Tailor your coverage to fit your specific DeFi portfolio and risk tolerance.</p>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">How It Works</h2>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                { step: 1, title: "Connect Wallet", description: "Link your Web3 wallet to our platform." },
                { step: 2, title: "Select Coverage", description: "Choose the smart contracts you want to insure." },
                { step: 3, title: "Pay Premium", description: "Use crypto to pay for your customized policy." },
                { step: 4, title: "Stay Protected", description: "Enjoy peace of mind with our robust coverage." },
              ].map((item) => (
                <motion.div
                  key={item.step}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg transition-transform duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Trusted by Web3 Leaders</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { name: "DeFi Protocol", logo: "/partner-logos/defi-protocol.svg" },
                { name: "Crypto Exchange", logo: "/partner-logos/crypto-exchange.svg" },
                { name: "NFT Marketplace", logo: "/partner-logos/nft-marketplace.svg" },
              ].map((partner) => (
                <motion.div
                  key={partner.name}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform duration-300"
                >
                  <Image src={partner.logo} alt={partner.name} width={180} height={80} className="mb-4" />
                  <p className="text-gray-600 dark:text-gray-300">{partner.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-secondary to-primary relative overflow-hidden">
          <div className="container px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-4"
            >
              <h2 className="text-3xl sm:text-5xl font-bold text-white">Ready to Secure Your Web3 Assets?</h2>
              <p className="mx-auto max-w-2xl text-zinc-200 md:text-xl">
                Join thousands of DeFi users who trust CoverSure for their smart contract insurance needs.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-8 flex justify-center"
            >
              <form className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-lg">
                <Input className="flex-1" placeholder="Enter your email" type="email" />
                <Button className="w-full sm:w-auto">Get Started</Button>
              </form>
            </motion.div>
            <p className="text-xs text-zinc-200 mt-4">
              By signing up, you agree to our{" "}
              <Link className="underline underline-offset-2" href="#">
                Terms & Conditions
              </Link>
            </p>
            <Image
              src="/decorations/abstract-shapes.svg"
              alt="Decorative Shapes"
              layout="fill"
              objectFit="cover"
              className="opacity-10"
            />
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center bg-gray-100 dark:bg-gray-800 px-4 md:px-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-600 dark:text-gray-400">© 2024 CoverSure. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-gray-600 dark:text-gray-400 hover:underline underline-offset-4 transition-colors duration-300" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-gray-600 dark:text-gray-400 hover:underline underline-offset-4 transition-colors duration-300" href="#">
            Privacy
          </Link>
          <Link className="text-xs text-gray-600 dark:text-gray-400 hover:underline underline-offset-4 transition-colors duration-300" href="#">
            Blog
          </Link>
          <Link className="text-xs text-gray-600 dark:text-gray-400 hover:underline underline-offset-4 transition-colors duration-300" href="#">
            Careers
          </Link>
        </nav>
      </footer>
    </div>
  )
}