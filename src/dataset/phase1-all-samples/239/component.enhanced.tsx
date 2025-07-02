import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Globe, Server, Shield, Zap, Menu, X, Twitter, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export default function Component() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          <Link className="flex items-center space-x-2" href="#">
            <Database className="h-6 w-6 text-primary" />
            <span className="text-2xl font-bold text-primary">CDNChain</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-300" href="#features">
              Features
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-300" href="#how-it-works">
              How It Works
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-300" href="#comparison">
              Comparison
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-300" href="#contact">
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex space-x-4">
            <Button className="bg-primary text-white hover:bg-primary-dark transition-colors duration-300" size="sm">
              Get Started
            </Button>
            <Button variant="outline" className="text-primary border-primary hover:bg-primary-light transition-colors duration-300" size="sm">
              Learn More
            </Button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 hover:text-primary focus:outline-none">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white shadow-lg">
            <ul className="flex flex-col space-y-2 px-4 py-4">
              <li>
                <Link className="block text-gray-700 hover:text-primary transition-colors duration-300" href="#features" onClick={() => setIsMobileMenuOpen(false)}>
                  Features
                </Link>
              </li>
              <li>
                <Link className="block text-gray-700 hover:text-primary transition-colors duration-300" href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)}>
                  How It Works
                </Link>
              </li>
              <li>
                <Link className="block text-gray-700 hover:text-primary transition-colors duration-300" href="#comparison" onClick={() => setIsMobileMenuOpen(false)}>
                  Comparison
                </Link>
              </li>
              <li>
                <Link className="block text-gray-700 hover:text-primary transition-colors duration-300" href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </Link>
              </li>
              <li className="pt-2">
                <Button className="w-full bg-primary text-white hover:bg-primary-dark transition-colors duration-300" size="sm">
                  Get Started
                </Button>
              </li>
              <li>
                <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary-light transition-colors duration-300" size="sm">
                  Learn More
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </header>
      <main className="flex-1 mt-16">
        <section className="w-full py-20 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center">
          <div className="container mx-auto px-4 md:px-6 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              Decentralized Content Delivery for the Web3 Era
            </h1>
            <p className="text-lg md:text-2xl mb-8 animate-fade-in-delay">
              CDNChain revolutionizes content delivery with blockchain technology, offering faster, more secure, and
              censorship-resistant distribution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delay-2">
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 transition-colors duration-300" size="lg">
                Get Started
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10 transition-colors duration-300" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">Key Features of CDNChain</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Globe className="w-12 h-12 text-indigo-600 mb-4" />
                  <CardTitle className="text-xl font-semibold">Global Decentralized Network</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  Leverage a worldwide network of nodes for unparalleled content delivery speed and reliability.
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Shield className="w-12 h-12 text-indigo-600 mb-4" />
                  <CardTitle className="text-xl font-semibold">Enhanced Security</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  Benefit from blockchain-based security measures, protecting your content from attacks and censorship.
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Zap className="w-12 h-12 text-indigo-600 mb-4" />
                  <CardTitle className="text-xl font-semibold">Lightning-Fast Delivery</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  Experience ultra-low latency content delivery, powered by our optimized peer-to-peer network.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">How CDNChain Works</h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 space-y-6">
                <div className="flex flex-col">
                  <h3 className="text-2xl font-semibold text-gray-700 flex items-center">
                    1. Content Upload
                    <span className="ml-2 inline-block animate-bounce">
                      <Zap className="w-6 h-6 text-indigo-600" />
                    </span>
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Upload your content to the CDNChain network, where it's split into encrypted chunks and distributed across
                    the network.
                  </p>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-semibold text-gray-700 flex items-center">
                    2. Smart Contract Creation
                    <span className="ml-2 inline-block animate-bounce">
                      <Shield className="w-6 h-6 text-indigo-600" />
                    </span>
                  </h3>
                  <p className="text-gray-600 mt-2">
                    A smart contract is created to manage content access, distribution, and node incentives.
                  </p>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-semibold text-gray-700 flex items-center">
                    3. Decentralized Delivery
                    <span className="ml-2 inline-block animate-bounce">
                      <Server className="w-6 h-6 text-indigo-600" />
                    </span>
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Users request content, which is served from the nearest available nodes, ensuring fast and efficient
                    delivery.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img src="/how-it-works.svg" alt="How It Works" className="w-full max-w-sm animate-fade-in" />
              </div>
            </div>
          </div>
        </section>
        <section id="comparison" className="w-full py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">CDNChain vs. Traditional CDNs</h2>
            <div className="flex flex-col md:flex-row md:space-x-8">
              <Card className="flex-1 hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="bg-indigo-600 text-white py-4">
                  <CardTitle className="text-2xl">CDNChain</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 p-4">
                  <p className="flex items-center"><span className="text-green-500 mr-2">✅</span> Decentralized infrastructure</p>
                  <p className="flex items-center"><span className="text-green-500 mr-2">✅</span> Censorship-resistant</p>
                  <p className="flex items-center"><span className="text-green-500 mr-2">✅</span> Token-based incentives for node operators</p>
                  <p className="flex items-center"><span className="text-green-500 mr-2">✅</span> Smart contract-managed content delivery</p>
                  <p className="flex items-center"><span className="text-green-500 mr-2">✅</span> Blockchain-level security</p>
                </CardContent>
              </Card>
              <Card className="flex-1 hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="bg-gray-800 text-white py-4">
                  <CardTitle className="text-2xl">Traditional CDNs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 p-4">
                  <p className="flex items-center"><span className="text-red-500 mr-2">❌</span> Centralized infrastructure</p>
                  <p className="flex items-center"><span className="text-red-500 mr-2">❌</span> Vulnerable to censorship</p>
                  <p className="flex items-center"><span className="text-red-500 mr-2">❌</span> Fixed pricing models</p>
                  <p className="flex items-center"><span className="text-red-500 mr-2">❌</span> Centralized content management</p>
                  <p className="flex items-center"><span className="text-red-500 mr-2">❌</span> Standard web security measures</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">What Our Users Say</h2>
            <div className="flex flex-col md:flex-row md:space-x-8 justify-center items-center">
              <Card className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <p className="text-gray-700 mb-4">"CDNChain has transformed the way we deliver content. Faster, more secure, and incredibly reliable."</p>
                <div className="flex items-center">
                  <img src="/user1.jpg" alt="User 1" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <p className="font-semibold text-gray-800">Jane Doe</p>
                    <p className="text-gray-500 text-sm">Tech Lead, Web3 Corp</p>
                  </div>
                </div>
              </Card>
              <Card className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mt-8 md:mt-0">
                <p className="text-gray-700 mb-4">"The decentralized approach of CDNChain ensures our content is always accessible and secure."</p>
                <div className="flex items-center">
                  <img src="/user2.jpg" alt="User 2" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <p className="font-semibold text-gray-800">John Smith</p>
                    <p className="text-gray-500 text-sm">Founder, StreamFlow</p>
                  </div>
                </div>
              </Card>
              <Card className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mt-8 md:mt-0">
                <p className="text-gray-700 mb-4">"Integrating with CDNChain was seamless, and the performance improvements are noticeable."</p>
                <div className="flex items-center">
                  <img src="/user3.jpg" alt="User 3" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <p className="font-semibold text-gray-800">Alice Johnson</p>
                    <p className="text-gray-500 text-sm">Developer, NextGen Apps</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
        <section id="cta" className="w-full py-20 bg-indigo-600">
          <div className="container mx-auto px-4 md:px-6 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Join the Decentralized Content Revolution</h2>
            <p className="text-lg md:text-xl mb-8">
              Experience the future of content delivery with CDNChain. Fast, secure, and censorship-resistant.
            </p>
            <Button className="bg-white text-indigo-600 hover:bg-gray-100 transition-colors duration-300" size="lg">
              Get Started Now
            </Button>
          </div>
        </section>
      </main>
      <footer className="w-full bg-gray-800 text-gray-200 py-8">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm mb-4 md:mb-0">© 2024 CDNChain. All rights reserved.</p>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="#" className="hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">
              Privacy
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-white transition-colors duration-300">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </footer>
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        @keyframes fade-in-delay {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-delay {
          animation: fade-in-delay 1.5s ease-out forwards;
        }
        @keyframes fade-in-delay-2 {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-delay-2 {
          animation: fade-in-delay-2 2s ease-out forwards;
        }
      `}</style>
    </div>
  )
}