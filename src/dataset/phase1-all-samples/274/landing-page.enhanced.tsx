import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeftRight, Ethereum, Wallet, Solana, Question, Sun, Moon } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
        <nav className="container mx-auto p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="NFTSwap Logo" width={40} height={40} className="rounded-full animate-bounce" />
            <h1 className="text-2xl font-bold text-purple-600 dark:text-purple-400">NFTSwap</h1>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors duration-300">Home</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors duration-300">About</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors duration-300">FAQ</a>
            <Button variant="outline" className="transition-transform transform hover:scale-105">Connect Wallet</Button>
            <Button variant="ghost" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-16">
          <section className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-extrabold mb-4 text-gray-800 dark:text-white animate-slide-in">Swap NFTs Across Chains</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Low-fee NFT swaps between Ethereum and Solana</p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white transition-transform transform hover:scale-105 animate-pulse">Start Swapping</Button>
          </section>

          <section className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { title: "Low Fees", description: "Enjoy minimal fees for cross-chain swaps", icon: <Wallet className="w-8 h-8 text-purple-600 dark:text-purple-400" /> },
              { title: "Fast Transactions", description: "Quick and secure NFT transfers", icon: <ArrowLeftRight className="w-8 h-8 text-purple-600 dark:text-purple-400" /> },
              { title: "Multi-Chain Support", description: "Seamlessly swap between Ethereum and Solana", icon: <Ethereum className="w-8 h-8 text-purple-600 dark:text-purple-400" /> },
              { title: "Secure Protocol", description: "Advanced security measures to protect your assets", icon: <Solana className="w-8 h-8 text-purple-600 dark:text-purple-400" /> },
              { title: "24/7 Support", description: "Our team is here to help you anytime", icon: <Question className="w-8 h-8 text-purple-600 dark:text-purple-400" /> },
              { title: "User-Friendly Interface", description: "Intuitive design for a seamless experience", icon: <Image src="/ui-icon.png" alt="UI Icon" width={32} height={32} className="w-8 h-8" /> },
            ].map((feature, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-block p-4 bg-purple-100 rounded-full dark:bg-purple-900 transition-transform transform hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          <section className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Preview Our Swap Interface</h3>
            <Card className="max-w-md mx-auto shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">From</label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Chain" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ethereum"><Ethereum className="inline-block mr-2" /> Ethereum</SelectItem>
                        <SelectItem value="solana"><Solana className="inline-block mr-2" /> Solana</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex justify-center">
                    <ArrowLeftRight className="w-6 h-6 text-gray-500 animate-bounce" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">To</label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Chain" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ethereum"><Ethereum className="inline-block mr-2" /> Ethereum</SelectItem>
                        <SelectItem value="solana"><Solana className="inline-block mr-2" /> Solana</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">NFT Contract Address</label>
                    <Input placeholder="Enter NFT contract address" className="focus:ring-purple-500 focus:border-purple-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Token ID</label>
                    <Input placeholder="Enter token ID" className="focus:ring-purple-500 focus:border-purple-500 transition-colors" />
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-transform transform hover:scale-105">Swap NFT</Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>

        <footer className="bg-gray-100 dark:bg-gray-900 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400 flex items-center">
                  <Image src="/logo-small.png" alt="NFTSwap Logo" width={30} height={30} className="mr-2" />
                  NFTSwap
                </h2>
                <p className="text-gray-600 dark:text-gray-300">Revolutionizing cross-chain NFT swaps with advanced technology and user-centric design.</p>
              </div>
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors duration-300">Home</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors duration-300">About</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors duration-300">FAQ</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors duration-300">Terms of Service</a></li>
                </ul>
              </div>
              <div className="w-full md:w-1/3">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.555-2.005.959-3.127 1.184a4.916 4.916 0 00-8.384 4.482A13.944 13.944 0 011.671 3.149a4.916 4.916 0 001.523 6.573A4.903 4.903 0 01.964 9.87v.062a4.916 4.916 0 003.946 4.814 4.996 4.996 0 01-2.212.084 4.918 4.918 0 004.588 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.056 0 14.01-7.496 14.01-13.986 0-.21-.005-.423-.014-.633A10.012 10.012 0 0024 4.557z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.633 7.997a7.757 7.757 0 01-2.237.615 3.906 3.906 0 001.707-2.153 7.722 7.722 0 01-2.457.941A3.842 3.842 0 0016.616 6c-2.123 0-3.843 1.72-3.843 3.842 0 .301.034.596.102.878C9.691 10.742 6.164 8.89 4.148 6.156a3.816 3.816 0 00-.523 1.93c0 1.332.68 2.51 1.71 3.205a3.802 3.802 0 01-1.74-.482v.05c0 1.866 1.326 3.42 3.078 3.77a3.824 3.824 0 01-1.734.065c.488 1.523 1.906 2.632 3.594 2.66a7.703 7.703 0 01-4.765 1.637c-.31 0-.616-.018-.916-.054A10.872 10.872 0 006.29 21c6.29 0 9.737-5.197 9.737-9.737 0-.148-.003-.295-.01-.44A6.94 6.94 0 0024 5.557a7.533 7.533 0 01-2.367.646z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.479 2 2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.242 0-1.628.771-1.628 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.522-4.478-10-10-10z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.304 3.495.997.108-.775.419-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.046.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.232 1.91 1.232 3.22 0 4.61-2.807 5.625-5.479 5.92.43.371.823 1.102.823 2.222v3.293c0 .321.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center text-gray-600 dark:text-gray-300">
              © 2023 NFTSwap. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}