import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, ArrowRightLeft, Globe, Lock, Zap, Menu } from 'lucide-react'
import { useState } from "react"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">SwapNode</div>
        <nav className={`md:flex md:space-x-4 ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-16 md:top-0 left-0 right-0 bg-gray-800 md:bg-transparent p-4 md:p-0`}>
          <a href="#features" className="block md:inline hover:text-blue-400 py-2 md:py-0">Features</a>
          <a href="#chains" className="block md:inline hover:text-blue-400 py-2 md:py-0">Supported Chains</a>
          <a href="#compare" className="block md:inline hover:text-blue-400 py-2 md:py-0">Why SwapNode</a>
        </nav>
        <div className="flex items-center">
          <Button variant="outline" className="hidden md:inline-flex">
            Launch App
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
          Swap Across Chains with Ease
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          SwapNode: The ultimate cross-chain DEX for seamless trading across multiple blockchains
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Start Trading
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Globe className="h-12 w-12 text-blue-400" />}
              title="Cross-Chain Swaps"
              description="Trade tokens across multiple blockchains without leaving the platform"
            />
            <FeatureCard
              icon={<Zap className="h-12 w-12 text-yellow-400" />}
              title="Lightning Fast"
              description="Experience near-instant transactions with optimized routing"
            />
            <FeatureCard
              icon={<Lock className="h-12 w-12 text-green-400" />}
              title="Security First"
              description="Non-custodial trading with audited smart contracts for maximum safety"
            />
          </div>
        </div>
      </section>

      {/* Supported Chains Section */}
      <section id="chains" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Supported Chains</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Ethereum", "Binance Smart Chain", "Polygon", "Avalanche", "Solana", "Arbitrum"].map((chain) => (
              <div key={chain} className="bg-gray-700 rounded-full px-4 py-2 text-sm md:text-base">
                {chain}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="compare" className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose SwapNode</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Trading?</h2>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Join thousands of traders already using SwapNode for their cross-chain trading needs
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Launch App
            <ArrowRightLeft className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">SwapNode</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Exchange</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Liquidity</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Farms</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Discord</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              </ul>
            </div>
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
    <div className="bg-gray-700 p-6 rounded-lg text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

function ComparisonCard({ title, features, highlighted = false }) {
  return (
    <div className={`p-6 rounded-lg ${highlighted ? 'bg-blue-600' : 'bg-gray-700'}`}>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className={`h-5 w-5 ${highlighted ? 'text-blue-300' : 'text-green-400'} mr-2`}
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

