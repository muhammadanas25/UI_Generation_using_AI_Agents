import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, ArrowRight, Instagram, Twitter, Github, Menu, X, Search } from 'lucide-react'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { motion } from 'framer-motion'

export default function LandingPage() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const connectWallet = () => {
    // Implement Web3 wallet connection logic here
    setWalletConnected(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">ArtX</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-purple-400 transition-colors">Explore</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Artists</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Collections</a>
          <a href="#" className="hover:text-purple-400 transition-colors">About</a>
        </nav>
        <div className="flex items-center space-x-4">
          <Input placeholder="Search NFTs" className="hidden md:block bg-gray-700 text-white placeholder-gray-400 focus:border-purple-400" />
          <Button onClick={connectWallet} variant="outline" className="flex items-center">
            <Wallet className="mr-2 h-4 w-4" />
            {walletConnected ? 'Connected' : 'Connect Wallet'}
          </Button>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <DialogContent className="bg-gray-800 text-white w-3/4 max-w-sm">
          <DialogHeader className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Menu</h2>
            <Button variant="ghost" onClick={() => setMobileMenuOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </DialogHeader>
          <nav className="flex flex-col space-y-4 mt-4">
            <a href="#" className="hover:text-purple-400 transition-colors">Explore</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Artists</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Collections</a>
            <a href="#" className="hover:text-purple-400 transition-colors">About</a>
          </nav>
        </DialogContent>
      </Dialog>

      <main>
        <section className="container mx-auto px-4 py-24 text-center">
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h2 className="text-5xl font-extrabold mb-6">Discover, Collect, and Sell Extraordinary NFTs</h2>
            <p className="text-xl mb-8">ArtX is the world's first and largest Web3 decentralized art gallery platform</p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 transition-colors">Explore</Button>
              <Button size="lg" variant="outline" className="hover:bg-gray-700 transition-colors">Create</Button>
            </div>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Featured Collections</h3>
          <motion.div className="flex overflow-x-scroll space-x-6 pb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Card key={i} className="min-w-[300px] bg-gray-800 border-gray-700 transform hover:scale-105 transition-transform shadow-lg">
                <CardHeader>
                  <CardTitle>Collection {i}</CardTitle>
                  <CardDescription>By Artist {i}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src={`/placeholder.svg?height=200&width=400&text=NFT+${i}`}
                    alt={`NFT ${i}`}
                    className="w-full h-48 object-cover rounded-md"
                  />
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="ml-auto hover:text-purple-400 flex items-center">
                    View Collection <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </motion.div>
        </section>

        <section className="container mx-auto px-4 py-16 bg-gray-850 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold mb-8 text-center">About ArtX</h3>
          <div className="flex flex-col md:flex-row items-center">
            <img
              src="/about-artx.svg"
              alt="About ArtX"
              className="w-full md:w-1/2 h-auto rounded-md mb-6 md:mb-0 md:mr-6"
            />
            <div>
              <p className="text-lg mb-6">
                ArtX is a revolutionary Web3-based decentralized art gallery platform that connects artists and collectors
                in the world of digital art and NFTs. Our mission is to empower artists, provide a secure and transparent
                marketplace, and offer unique experiences for art enthusiasts and collectors.
              </p>
              <Button variant="outline" className="hover:bg-gray-700 transition-colors">Learn More</Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Artist Spotlight</h3>
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="flex flex-col md:flex-row items-center p-6">
              <img
                src="/placeholder.svg?height=200&width=200&text=Artist"
                alt="Featured Artist"
                className="w-48 h-48 rounded-full object-cover mb-6 md:mb-0 md:mr-6"
              />
              <div>
                <h4 className="text-2xl font-bold mb-2">Jane Doe</h4>
                <p className="text-gray-400 mb-4">Digital Artist & NFT Creator</p>
                <p className="mb-4">
                  Jane Doe is a renowned digital artist known for her vibrant and thought-provoking NFT collections.
                  Her work explores the intersection of technology, nature, and human emotions.
                </p>
                <Button variant="outline" className="hover:bg-gray-700 transition-colors">View Gallery</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg shadow-lg">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Join the ArtX Community</h3>
            <p className="text-lg mb-6">Subscribe to our newsletter to stay updated with the latest collections and events.</p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <Input placeholder="Enter your email" className="bg-white text-gray-900 placeholder-gray-500" />
              <Button className="bg-white text-purple-600 hover:bg-gray-200 transition-colors">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <h4 className="text-white text-lg font-bold mb-4">ArtX</h4>
              <p>Empowering artists and collectors in the world of Web3 and NFTs.</p>
            </div>
            <div>
              <h5 className="text-white text-lg font-bold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Explore</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Artists</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white text-lg font-bold mb-4">Resources</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Platform Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white text-lg font-bold mb-4">Connect</h5>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors"><Twitter className="h-6 w-6" /></a>
                <a href="#" className="hover:text-white transition-colors"><Instagram className="h-6 w-6" /></a>
                <a href="#" className="hover:text-white transition-colors"><Github className="h-6 w-6" /></a>
              </div>
            </div>
            <div>
              <h5 className="text-white text-lg font-bold mb-4">Support</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2024 ArtX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}