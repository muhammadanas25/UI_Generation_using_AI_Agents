import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, Coins, LinkIcon, Shield, Menu, X } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function LoanNFTLanding() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-transparent fixed w-full z-50">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/logo.svg"
            alt="LoanNFT logo"
            className="h-10 w-10 mr-3 transition-transform duration-300 transform hover:scale-110"
            width={40}
            height={40}
          />
          <span className="font-extrabold text-2xl text-white">LoanNFT</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300" href="#supported-chains">
            Supported Chains
          </Link>
          <Button variant="ghost" className="text-sm">Connect Wallet</Button>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-300 hover:text-white transition-colors duration-300">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="absolute top-16 right-4 bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col gap-3 md:hidden">
            <Link className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300" href="#features" onClick={() => setMenuOpen(false)}>
              Features
            </Link>
            <Link className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300" href="#how-it-works" onClick={() => setMenuOpen(false)}>
              How It Works
            </Link>
            <Link className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300" href="#supported-chains" onClick={() => setMenuOpen(false)}>
              Supported Chains
            </Link>
            <Button variant="ghost" className="text-sm">Connect Wallet</Button>
          </div>
        )}
      </header>
      <main className="flex-1 pt-20">
        <section className="w-full py-20 md:py-32 bg-cover bg-center relative" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="container relative z-10 px-4 md:px-6 text-center">
            <div className="flex flex-col items-center space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white animate-fadeInDown">
                Unlock the Value of Your NFTs
              </h1>
              <p className="max-w-2xl text-gray-300 text-lg md:text-2xl animate-fadeInUp">
                LoanNFT is the premier cross-chain NFT lending platform. Borrow against your NFTs or earn interest by lending across multiple blockchains.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp">
                <Button className="px-6 py-3 text-lg hover:scale-105 transition-transform duration-300">Get Started</Button>
                <Button variant="outline" className="px-6 py-3 text-lg hover:scale-105 transition-transform duration-300">Learn More</Button>
              </div>
              <div className="mt-8 flex space-x-4 animate-fadeInUp">
                <Image src="/trustpilot.svg" alt="Trustpilot" width={120} height={40} className="opacity-80 hover:opacity-100 transition-opacity duration-300" />
                <Image src="/chainlink.svg" alt="Chainlink" width={120} height={40} className="opacity-80 hover:opacity-100 transition-opacity duration-300" />
                <Image src="/ethereum.svg" alt="Ethereum" width={120} height={40} className="opacity-80 hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-16 md:py-24 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12 animate-fadeIn">
              Why Choose LoanNFT?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="bg-gray-800 rounded-xl p-6 text-center hover:scale-105 transform transition-transform duration-300">
                <LinkIcon className="h-12 w-12 mb-4 text-blue-400 mx-auto" />
                <h3 className="text-xl font-semibold text-white mb-2">Cross-Chain Compatibility</h3>
                <p className="text-gray-400">Lend and borrow across multiple blockchains seamlessly.</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 text-center hover:scale-105 transform transition-transform duration-300">
                <Shield className="h-12 w-12 mb-4 text-blue-400 mx-auto" />
                <h3 className="text-xl font-semibold text-white mb-2">Enhanced Security</h3>
                <p className="text-gray-400">Your NFTs are protected with advanced smart contract technology.</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 text-center hover:scale-105 transform transition-transform duration-300">
                <Coins className="h-12 w-12 mb-4 text-blue-400 mx-auto" />
                <h3 className="text-xl font-semibold text-white mb-2">Competitive Rates</h3>
                <p className="text-gray-400">Get the best lending and borrowing rates in the market.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-16 md:py-24 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12 animate-fadeIn">
              How It Works
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <div className="flex flex-col items-center text-center bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 animate-fadeInUp">
                <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-lg font-bold mb-4 animate-bounce">
                  1
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Connect Your Wallet</h3>
                <p className="text-gray-300">Link your wallet from any supported blockchain.</p>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 animate-fadeInUp delay-200">
                <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-lg font-bold mb-4 animate-bounce">
                  2
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Choose Your NFT</h3>
                <p className="text-gray-300">Select the NFT you want to use as collateral or lend against.</p>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 animate-fadeInUp delay-400">
                <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-lg font-bold mb-4 animate-bounce">
                  3
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Get Your Loan</h3>
                <p className="text-gray-300">Receive funds instantly or start earning interest on your crypto.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="supported-chains" className="w-full py-16 md:py-24 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12 animate-fadeIn">
              Supported Chains
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {["Ethereum", "Binance Smart Chain", "Polygon", "Solana", "Avalanche"].map((chain) => (
                <div key={chain} className="flex items-center bg-gray-800 rounded-full px-5 py-2 shadow-md hover:bg-gray-700 transition-colors duration-300">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                  <span className="text-gray-300 font-medium">{chain}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white animate-fadeIn">Ready to Unlock Your NFT's Potential?</h2>
              <p className="max-w-xl text-gray-400 text-lg md:text-xl animate-fadeInUp">
                Join LoanNFT today and experience the future of cross-chain NFT lending.
              </p>
              <div className="w-full max-w-md bg-gray-800 rounded-lg p-6 shadow-lg animate-fadeInUp">
                <form className="flex flex-col sm:flex-row items-center gap-4">
                  <Input className="flex-1 bg-gray-700 text-white placeholder-gray-400" placeholder="Enter your email" type="email" />
                  <Button className="w-full sm:w-auto flex items-center justify-center">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="mt-2 text-xs text-gray-400">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2 text-blue-400 hover:text-blue-300 transition-colors duration-300" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-4 sm:py-6 w-full bg-gray-800 items-center px-4 md:px-6">
        <p className="text-xs text-gray-400">© 2024 LoanNFT. All rights reserved.</p>
        <nav className="flex flex-wrap justify-center sm:justify-start gap-4 sm:ml-auto">
          <Link className="text-xs text-gray-400 hover:text-white transition-colors duration-300" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-gray-400 hover:text-white transition-colors duration-300" href="#">
            Privacy
          </Link>
          <div className="flex gap-2">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 5.924c-.817.363-1.69.608-2.6.718a4.51 4.51 0 001.98-2.483c-.865.513-1.82.89-2.825 1.093a4.498 4.498 0 00-7.675 4.11A12.807 12.807 0 013 4.89a4.5 4.5 0 001.392 6.002 4.48 4.48 0 01-2.04-.564v.057a4.506 4.506 0 003.616 4.417c-.476.13-.978.2-1.49.2-.364 0-.72-.035-1.07-.103a4.506 4.506 0 004.217 3.14A9.025 9.025 0 012 19.54a12.773 12.773 0 006.92 2.03c8.302 0 12.841-6.876 12.841-12.841 0-.196-.004-.392-.013-.586a9.18 9.18 0 002.25-2.34z" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 2.003.24 2.467.403a4.92 4.92 0 011.675 1.09 4.92 4.92 0 011.09 1.675c.163.464.347 1.26.403 2.467.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.24 2.003-.403 2.467a4.92 4.92 0 01-1.09 1.675 4.92 4.92 0 01-1.675 1.09c-.464.163-1.26.347-2.467.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-2.003-.24-2.467-.403a4.92 4.92 0 01-1.09 1.675 4.92 4.92 0 01-1.675 1.09c-.464.163-1.26.347-2.467.403-1.266.058-1.646.07-4.85.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.276.058-2.153.25-2.908.533a6.78 6.78 0 00-2.457 1.607 6.78 6.78 0 00-1.607 2.457c-.283.755-.475 1.632-.533 2.908C2.177 8.333 2.163 8.741 2.163 12s.014 3.667.072 4.947c.058 1.276.25 2.153.533 2.908a6.78 6.78 0 001.607 2.457 6.78 6.78 0 002.457 1.607c.755.283 1.632.475 2.908.533 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.276-.058 2.153-.25 2.908-.533a6.78 6.78 0 002.457-1.607 6.78 6.78 0 001.607-2.457c.283-.755.475-1.632.533-2.908.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.276-.25-2.153-.533-2.908a6.78 6.78 0 00-1.607-2.457 6.78 6.78 0 00-2.457-1.607c-.755-.283-1.632-.475-2.908-.533C15.667.014 15.259 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8z" />
                <circle cx="18.406" cy="5.594" r="1.44" />
              </svg>
            </Link>
          </div>
        </nav>
      </footer>
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 1s ease-out;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  )
}

