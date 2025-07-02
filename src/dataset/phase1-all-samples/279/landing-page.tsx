import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, ArrowRight, Instagram, Twitter, Github } from 'lucide-react'

export default function LandingPage() {
  const [walletConnected, setWalletConnected] = useState(false)

  const connectWallet = () => {
    // Implement Web3 wallet connection logic here
    setWalletConnected(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">ArtX</h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-300">Explore</a>
          <a href="#" className="hover:text-gray-300">Artists</a>
          <a href="#" className="hover:text-gray-300">Collections</a>
          <a href="#" className="hover:text-gray-300">About</a>
        </nav>
        <Button onClick={connectWallet} variant="outline" className="flex items-center">
          <Wallet className="mr-2 h-4 w-4" />
          {walletConnected ? 'Connected' : 'Connect Wallet'}
        </Button>
      </header>

      <main>
        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-5xl font-bold mb-6">Discover, Collect, and Sell Extraordinary NFTs</h2>
          <p className="text-xl mb-8">ArtX is the world's first and largest Web3 decentralized art gallery platform</p>
          <Button size="lg" className="mr-4">Explore</Button>
          <Button size="lg" variant="outline">Create</Button>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h3 className="text-3xl font-bold mb-8">Featured Collections</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-gray-800 border-gray-700">
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
                  <Button variant="link" className="ml-auto">
                    View Collection <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h3 className="text-3xl font-bold mb-8">About ArtX</h3>
          <p className="text-lg mb-6">
            ArtX is a revolutionary Web3-based decentralized art gallery platform that connects artists and collectors
            in the world of digital art and NFTs. Our mission is to empower artists, provide a secure and transparent
            marketplace, and offer unique experiences for art enthusiasts and collectors.
          </p>
          <Button variant="outline">Learn More</Button>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h3 className="text-3xl font-bold mb-8">Artist Spotlight</h3>
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
                <Button>View Gallery</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white text-lg font-bold mb-4">ArtX</h4>
              <p>Empowering artists and collectors in the world of Web3 and NFTs.</p>
            </div>
            <div>
              <h5 className="text-white text-lg font-bold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Explore</a></li>
                <li><a href="#" className="hover:text-white">Artists</a></li>
                <li><a href="#" className="hover:text-white">Collections</a></li>
                <li><a href="#" className="hover:text-white">About</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white text-lg font-bold mb-4">Resources</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Platform Status</a></li>
                <li><a href="#" className="hover:text-white">Partners</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white text-lg font-bold mb-4">Connect</h5>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white"><Twitter /></a>
                <a href="#" className="hover:text-white"><Instagram /></a>
                <a href="#" className="hover:text-white"><Github /></a>
              </div>
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