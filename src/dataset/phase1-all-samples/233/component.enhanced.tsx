import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, ArrowRightLeft, Globe, Lock, Zap, Menu, X, Twitter, DiscIcon as Discord, GitlabIcon as GitHub } from 'lucide-react'
import Image from "next/image"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-lg">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="SwapNode Logo" width={40} height={40} className="mr-2 animate-pulse" />
          <div className="text-2xl font-bold">SwapNode</div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="hover:text-blue-400 transition-colors duration-300">Features</a>
          <a href="#chains" className="hover:text-blue-400 transition-colors duration-300">Supported Chains</a>
          <a href="#compare" className="hover:text-blue-400 transition-colors duration-300">Why SwapNode</a>
          <a href="#community" className="hover:text-blue-400 transition-colors duration-300">Community</a>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="hover:bg-blue-700 transition-colors duration-300">
            Launch App
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            <Discord className="h-5 w-5" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            <GitHub className="h-5 w-5" />
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <Button variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-gray-800 py-4 md:hidden animate-fade-in">
            <nav className="flex flex-col items-center space-y-4">
              <a href="#features" className="hover:text-blue-400 transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#chains" className="hover:text-blue-400 transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Supported Chains</a>
              <a href="#compare" className="hover:text-blue-400 transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Why SwapNode</a>
              <a href="#community" className="hover:text-blue-400 transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Community</a>
              <Button variant="outline" className="mt-4 hover:bg-blue-700 transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>
                Launch App
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <div className="flex space-x-4 mt-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  <Discord className="h-5 w-5" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  <GitHub className="h-5 w-5" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-40 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 animate-slide-in-left">
            Swap Across Chains with Ease
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto md:mx-0">
            SwapNode: The ultimate cross-chain DEX for seamless trading across multiple blockchains
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
              Start Trading
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="flex items-center justify-center">
              Learn More
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <Image src="/hero-illustration.svg" alt="Hero Illustration" width={500} height={500} className="animate-fade-in w-full max-w-md" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-800 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Globe className="h-10 w-10 md:h-12 md:w-12 text-blue-400 animate-bounce" />}
              title="Cross-Chain Swaps"
              description="Trade tokens across multiple blockchains without leaving the platform"
            />
            <FeatureCard
              icon={<Zap className="h-10 w-10 md:h-12 md:w-12 text-yellow-400 rotate-45" />}
              title="Lightning Fast"
              description="Experience near-instant transactions with optimized routing"
            />
            <FeatureCard
              icon={<Lock className="h-10 w-10 md:h-12 md:w-12 text-green-400 scale-110" />}
              title="Security First"
              description="Non-custodial trading with audited smart contracts for maximum safety"
            />
          </div>
        </div>
      </section>

      {/* Supported Chains Section */}
      <section id="chains" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">Supported Chains</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {["Ethereum", "Binance Smart Chain", "Polygon", "Avalanche", "Solana", "Arbitrum"].map((chain) => (
              <div key={chain} className="bg-gray-700 rounded-full px-4 md:px-6 py-2 flex items-center space-x-2 hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
                <Image src={`/icons/${chain.toLowerCase().replace(/ /g, "-")}.svg`} alt={`${chain} logo`} width={20} height={20} />
                <span className="text-sm md:text-base">{chain}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="compare" className="bg-gray-800 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">Why Choose SwapNode</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <ComparisonCard
              title="SwapNode"
              features={["Cross-chain swaps", "Low fees", "User-friendly interface", "Yield farming"]}
              highlighted={true}
            />
            <ComparisonCard
              title="PancakeSwap"
              features={["Single-chain (BSC)", "Low fees", "User-friendly interface", "Yield farming"]}
            />
            <ComparisonCard
              title="Uniswap"
              features={["Multi-chain (Ethereum-based)", "Higher fees", "Complex interface", "Limited yield options"]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 animate-pulse">Ready to Start Trading?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-100 max-w-2xl mx-auto">
            Join thousands of traders already using SwapNode for their cross-chain trading needs
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center mx-auto">
            Launch App
            <ArrowRightLeft className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12" id="community">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">SwapNode</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Exchange</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Liquidity</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Farms</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">Discord</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">Twitter</a></li>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex justify-center space-x-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Discord className="h-6 w-6" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <GitHub className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-12 text-center text-gray-400">
            © 2023 SwapNode. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-700 p-4 md:p-6 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm md:text-base text-gray-300">{description}</p>
    </div>
  )
}

function ComparisonCard({ title, features, highlighted = false }) {
  return (
    <div className={`p-4 md:p-6 rounded-lg transition-transform duration-300 transform hover:scale-105 ${highlighted ? 'bg-blue-600' : 'bg-gray-700'}`}>
      <h3 className="text-lg md:text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm md:text-base">
            <svg
              className={`h-4 w-4 md:h-5 md:w-5 ${highlighted ? 'text-blue-300' : 'text-green-400'} mr-2`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7"></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

