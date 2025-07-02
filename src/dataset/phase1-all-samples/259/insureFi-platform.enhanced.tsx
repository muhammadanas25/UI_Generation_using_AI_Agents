import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, Lock, Search, FileCheck, Coins, Menu, X, Twitter, Linkedin, Github } from "lucide-react"
import Image from "next/image"

export default function InsureFiPlatform() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white transition-colors duration-500">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.png" alt="InsureFi Logo" width={40} height={40} className="mr-3" />
          <h1 className="text-2xl font-bold">InsureFi</h1>
        </div>
        <nav>
          <ul className="hidden md:flex space-x-6">
            <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Home</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Products</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">About</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Contact</a></li>
          </ul>
          <button className="md:hidden text-gray-300" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-800 px-4 py-2">
          <ul className="flex flex-col space-y-2">
            <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Home</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Products</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">About</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>
      )}

      <main className="container mx-auto px-4 py-12">
        <section className="flex flex-col-reverse md:flex-row items-center justify-between mb-20">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-5xl font-bold mb-4 animate-fadeIn">Secure Your DeFi Investments</h2>
            <p className="text-xl mb-8">InsureFi provides cutting-edge insurance solutions for decentralized finance platforms.</p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300">Get Started</Button>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src="/hero-illustration.svg" alt="DeFi Security" width={500} height={500} className="animate-slideIn" />
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="bg-gray-800 border-gray-700 hover:scale-105 transform transition-transform duration-300">
            <CardHeader className="flex flex-col items-center">
              <Shield className="w-12 h-12 mb-4 text-blue-400 animate-pulse" />
              <CardTitle className="text-xl">Asset Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">Safeguard your digital assets against hacks, exploits, and unforeseen events.</CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700 hover:scale-105 transform transition-transform duration-300">
            <CardHeader className="flex flex-col items-center">
              <Zap className="w-12 h-12 mb-4 text-blue-400 animate-pulse" />
              <CardTitle className="text-xl">Instant Claims</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">Experience lightning-fast claim processing with our smart contract-based system.</CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700 hover:scale-105 transform transition-transform duration-300">
            <CardHeader className="flex flex-col items-center">
              <Lock className="w-12 h-12 mb-4 text-blue-400 animate-pulse" />
              <CardTitle className="text-xl">Decentralized Security</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">Benefit from the security and transparency of blockchain technology.</CardDescription>
            </CardContent>
          </Card>
        </section>

        <section className="bg-gray-800 rounded-lg p-8 mb-20 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-3xl font-bold mb-4">Smart Contract Auditing Services</h3>
          <p className="text-xl mb-6">Ensure the security and reliability of your DeFi projects with our expert auditing team.</p>
          <ul className="grid md:grid-cols-2 gap-4 mb-8">
            <li className="flex items-center hover:text-blue-400 transition-colors duration-300">
              <Search className="w-6 h-6 mr-2 text-blue-400" />
              Comprehensive code review
            </li>
            <li className="flex items-center hover:text-blue-400 transition-colors duration-300">
              <FileCheck className="w-6 h-6 mr-2 text-blue-400" />
              Vulnerability assessment
            </li>
            <li className="flex items-center hover:text-blue-400 transition-colors duration-300">
              <Coins className="w-6 h-6 mr-2 text-blue-400" />
              Tokenomics analysis
            </li>
            <li className="flex items-center hover:text-blue-400 transition-colors duration-300">
              <Shield className="w-6 h-6 mr-2 text-blue-400" />
              Best practice recommendations
            </li>
          </ul>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300">Request an Audit</Button>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">Why Choose InsureFi?</h3>
            <p className="text-xl mb-6">With InsureFi, you gain access to top-tier security solutions tailored for the DeFi ecosystem. Our expertise ensures your projects remain safe and trustworthy.</p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300">Learn More</Button>
          </div>
          <div>
            <Image src="/security-illustration.svg" alt="Security" width={500} height={500} className="animate-fadeIn" />
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <Github className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400">&copy; 2024 InsureFi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}