import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Key, Lock, Search, Shield, Wallet, Twitter, Facebook, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-shadow duration-300">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center">
          <Link className="flex items-center justify-center" href="#">
            <Building2 className="h-6 w-6 mr-2 text-indigo-600 animate-pulse" />
            <span className="font-bold text-xl text-indigo-600">RentX</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200" href="#features">
              Features
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200" href="#how-it-works">
              How It Works
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200" href="#about">
              About
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200" href="#contact">
              Contact
            </Link>
          </nav>
          <div className="ml-4 hidden md:block">
            <Button variant="ghost" className="text-indigo-600 hover:bg-indigo-100 transition-colors duration-200">
              Sign In
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 pt-16">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-r from-indigo-600 to-purple-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image src="/hero-bg.png" alt="Real Estate Background" layout="fill" objectFit="cover" />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight animate-fadeIn">
                Welcome to <span className="text-yellow-400">RentX</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg sm:text-xl md:text-2xl text-gray-200 animate-slideIn">
                The future of decentralized real estate rentals. Secure, transparent, and efficient with NFT-based agreements.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-6">
                <Button variant="default" className="px-6 py-3 bg-yellow-400 text-indigo-700 hover:bg-yellow-500 transition-transform transform hover:scale-105">
                  Get Started
                </Button>
                <Button variant="ghost" className="px-6 py-3 border border-white hover:bg-white hover:text-indigo-600 transition-colors duration-200">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-16 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center">
                  <Wallet className="w-12 h-12 text-indigo-600 mb-4 animate-bounce" />
                  <CardTitle className="text-xl">NFT-Based Agreements</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  Rental agreements as unique NFTs, providing unparalleled security and transparency.
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center">
                  <Search className="w-12 h-12 text-indigo-600 mb-4 animate-pulse" />
                  <CardTitle className="text-xl">Decentralized Listings</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  Browse and list properties on a decentralized network, free from intermediaries.
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center">
                  <Shield className="w-12 h-12 text-indigo-600 mb-4 rotate-12" />
                  <CardTitle className="text-xl">Smart Contract Security</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  Automated, secure transactions and agreements powered by blockchain technology.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Building2 className="w-8 h-8 text-indigo-600 animate-spin-slow" />
                  <h3 className="text-xl font-semibold">For Landlords:</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Key className="w-5 h-5 text-indigo-600 mt-1 mr-3" />
                    <span>List your property on our decentralized platform</span>
                  </li>
                  <li className="flex items-start">
                    <Wallet className="w-5 h-5 text-indigo-600 mt-1 mr-3" />
                    <span>Create unique NFT-based rental agreements</span>
                  </li>
                  <li className="flex items-start">
                    <Lock className="w-5 h-5 text-indigo-600 mt-1 mr-3" />
                    <span>Receive secure, automated payments</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Search className="w-8 h-8 text-indigo-600 animate-pulse" />
                  <h3 className="text-xl font-semibold">For Tenants:</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Search className="w-5 h-5 text-indigo-600 mt-1 mr-3" />
                    <span>Browse decentralized property listings</span>
                  </li>
                  <li className="flex items-start">
                    <Lock className="w-5 h-5 text-indigo-600 mt-1 mr-3" />
                    <span>Sign secure, NFT-based rental agreements</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-indigo-600 mt-1 mr-3" />
                    <span>Enjoy transparent, trustless transactions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose RentX?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-indigo-600">Benefits for Landlords</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Reduced intermediary fees</li>
                    <li>Automated, secure rent collection</li>
                    <li>Immutable record of rental history</li>
                    <li>Access to a global pool of verified tenants</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-indigo-600">Benefits for Tenants</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Transparent rental terms and conditions</li>
                    <li>Reduced security deposit risks</li>
                    <li>Verifiable rental history for future applications</li>
                    <li>Access to a wider range of global properties</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter animate-bounce">
                Ready to revolutionize your rental experience?
              </h2>
              <p className="mx-auto max-w-xl text-lg sm:text-xl md:text-2xl text-gray-200">
                Join RentX today and be part of the future of decentralized real estate rentals.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-6">
                <Button variant="default" className="px-6 py-3 bg-yellow-400 text-indigo-700 hover:bg-yellow-500 transition-transform transform hover:scale-105">
                  Sign Up Now
                </Button>
                <Button variant="ghost" className="px-6 py-3 border border-white hover:bg-white hover:text-indigo-600 transition-colors duration-200">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Users Say</h2>
            <div className="carousel relative shadow-md bg-white rounded-lg">
              <div className="carousel-inner relative overflow-hidden w-full">
                <input className="carousel-open hidden" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden defaultChecked />
                <div className="carousel-item absolute opacity-0 transition-opacity duration-1000 ease-in-out">
                  <div className="flex flex-col items-center p-8">
                    <Image src="/user1.jpg" alt="User 1" width={100} height={100} className="rounded-full mb-4" />
                    <p className="text-center text-gray-600 mb-4">
                      "RentX has transformed the way I manage my rental properties. The NFT agreements are secure and hassle-free."
                    </p>
                    <h4 className="text-indigo-600 font-semibold">Jane Doe</h4>
                  </div>
                </div>
                <input className="carousel-open hidden" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden />
                <div className="carousel-item absolute opacity-0 transition-opacity duration-1000 ease-in-out">
                  <div className="flex flex-col items-center p-8">
                    <Image src="/user2.jpg" alt="User 2" width={100} height={100} className="rounded-full mb-4" />
                    <p className="text-center text-gray-600 mb-4">
                      "As a tenant, I appreciate the transparency and ease of signing rental agreements with RentX."
                    </p>
                    <h4 className="text-indigo-600 font-semibold">John Smith</h4>
                  </div>
                </div>
                <input className="carousel-open hidden" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden />
                <div className="carousel-item absolute opacity-0 transition-opacity duration-1000 ease-in-out">
                  <div className="flex flex-col items-center p-8">
                    <Image src="/user3.jpg" alt="User 3" width={100} height={100} className="rounded-full mb-4" />
                    <p className="text-center text-gray-600 mb-4">
                      "The decentralized listings mean I have access to a global market without any middlemen."
                    </p>
                    <h4 className="text-indigo-600 font-semibold">Alice Johnson</h4>
                  </div>
                </div>
                <label htmlFor="carousel-3" className="carousel-control next control-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full absolute top-1/2 right-0 transform -translate-y-1/2 p-2 cursor-pointer">
                  &gt;
                </label>
                <label htmlFor="carousel-2" className="carousel-control prev control-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full absolute top-1/2 left-0 transform -translate-y-1/2 p-2 cursor-pointer">
                  &lt;
                </label>
                <label htmlFor="carousel-1" className="carousel-control next control-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full absolute top-1/2 right-0 transform -translate-y-1/2 p-2 cursor-pointer">
                  &gt;
                </label>
                <label htmlFor="carousel-3" className="carousel-control prev control-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full absolute top-1/2 left-0 transform -translate-y-1/2 p-2 cursor-pointer">
                  &lt;
                </label>
                <label htmlFor="carousel-2" className="carousel-control next control-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full absolute top-1/2 right-0 transform -translate-y-1/2 p-2 cursor-pointer">
                  &gt;
                </label>
                <label htmlFor="carousel-1" className="carousel-control prev control-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full absolute top-1/2 left-0 transform -translate-y-1/2 p-2 cursor-pointer">
                  &lt;
                </label>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Get in Touch</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start max-w-4xl mx-auto gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-indigo-600 mb-4">Contact Us</h3>
                <p className="text-gray-600 mb-4">Have questions or need support? Reach out to our team.</p>
                <form className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  <textarea placeholder="Your Message" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" rows={4}></textarea>
                  <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                    Send Message
                  </Button>
                </form>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-indigo-600 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                    <Twitter className="w-6 h-6" />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                    <Facebook className="w-6 h-6" />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                    <Linkedin className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 bg-white shadow-inner">
        <p className="text-xs text-gray-500">© 2024 RentX. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-gray-500 hover:text-indigo-600 transition-colors duration-200" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-gray-500 hover:text-indigo-600 transition-colors duration-200" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}