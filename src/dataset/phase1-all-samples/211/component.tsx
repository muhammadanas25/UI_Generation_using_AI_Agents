import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { ShieldCheck, Lock, Eye, BarChart, Menu } from 'lucide-react'
import { useState } from "react"

export default function PrivacyChainLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold">PrivacyChain</div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#features" className="hover:text-blue-400">Features</a></li>
              <li><a href="#compare" className="hover:text-blue-400">Compare</a></li>
              <li><a href="#cta" className="hover:text-blue-400">Get Started</a></li>
            </ul>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li><a href="#features" className="hover:text-blue-400">Features</a></li>
              <li><a href="#compare" className="hover:text-blue-400">Compare</a></li>
              <li><a href="#cta" className="hover:text-blue-400">Get Started</a></li>
            </ul>
          </nav>
        )}
      </header>

      <main>
        <section className="py-12 sm:py-20 text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Your Transactions, Your Business</h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            PrivacyChain offers unparalleled privacy and security for your blockchain transactions.
            Stay anonymous, stay safe.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Explore PrivacyChain
          </Button>
        </section>

        <section id="features" className="py-12 sm:py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Why Choose PrivacyChain?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
            </div>
          </div>
        </section>

        <section id="compare" className="py-12 sm:py-20 overflow-x-auto">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">How We Compare</h2>
            <Table>
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
        </section>

        <section id="cta" className="py-12 sm:py-20 bg-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready to Secure Your Transactions?</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join PrivacyChain today and experience the future of private, secure blockchain technology.
            </p>
            <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto"
              />
              <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white">
                Get Early Access
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 py-6 sm:py-8">
        <div className="container mx-auto px-4 text-center text-xs sm:text-sm text-gray-400">
          <p>&copy; 2024 PrivacyChain. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-blue-400">Privacy Policy</a> |
            <a href="#" className="hover:text-blue-400 ml-2">Terms of Service</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-700 p-4 sm:p-6 rounded-lg text-center">
      <div className="mb-3 sm:mb-4 flex justify-center">{icon}</div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-300">{description}</p>
    </div>
  )
}

