'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BitcoinIcon as EthereumIcon, SearchIcon, WalletIcon, MenuIcon } from 'lucide-react'

export default function Component() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleConnectWallet = () => {
    // In a real application, this would trigger a Web3 wallet connection
    setWalletConnected(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-500 to-indigo-800 text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold">Artify</h1>
        <nav className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-16 left-0 right-0 bg-purple-800 md:bg-transparent p-4 md:p-0 space-y-2 md:space-y-0 md:space-x-4`}>
          <a href="#" className="hover:text-purple-200">Explore</a>
          <a href="#" className="hover:text-purple-200">Create</a>
          <a href="#" className="hover:text-purple-200">Community</a>
        </nav>
        <div className="flex items-center space-x-2">
          <Button
            variant={walletConnected ? "secondary" : "default"}
            onClick={handleConnectWallet}
            className="text-sm"
          >
            <WalletIcon className="mr-2 h-4 w-4" />
            {walletConnected ? "Connected" : "Connect"}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12">
        <section className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Discover, Create, and Collect Rare Digital Art</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8">Artify is the premier NFT marketplace on Ethereum. Buy, sell, and explore exclusive digital assets.</p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2">
            <Input className="max-w-sm w-full" placeholder="Search for NFTs or collections" />
            <Button className="w-full md:w-auto">
              <SearchIcon className="h-4 w-4 mr-2" />
              <span className="md:sr-only">Search</span>
            </Button>
          </div>
        </section>

        <section className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Featured Collections</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-white/10 backdrop-blur-lg border-none text-white">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">Collection {i}</CardTitle>
                  <CardDescription className="text-purple-200 text-sm">by Artist {i}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src={`/placeholder.svg?height=200&width=200&text=NFT ${i}`}
                    alt={`NFT ${i}`}
                    className="w-full h-36 md:h-48 object-cover rounded-md"
                  />
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" className="w-full text-sm">View Collection</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Why Choose Artify?</h3>
          <Tabs defaultValue="security" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="security" className="text-sm">Security</TabsTrigger>
              <TabsTrigger value="fees" className="text-sm">Low Fees</TabsTrigger>
              <TabsTrigger value="community" className="text-sm">Community</TabsTrigger>
            </TabsList>
            <TabsContent value="security" className="text-center py-4 text-sm md:text-base">
              Artify uses cutting-edge blockchain technology to ensure the security and authenticity of every NFT transaction.
            </TabsContent>
            <TabsContent value="fees" className="text-center py-4 text-sm md:text-base">
              We offer some of the lowest fees in the industry, maximizing your earnings from NFT sales.
            </TabsContent>
            <TabsContent value="community" className="text-center py-4 text-sm md:text-base">
              Join a thriving community of artists, collectors, and enthusiasts passionate about digital art and NFTs.
            </TabsContent>
          </Tabs>
        </section>

        <section className="text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Ready to Get Started?</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="w-full sm:w-auto">
              Explore NFTs
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Create an NFT
            </Button>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-6 md:py-8 mt-8 md:mt-12 border-t border-purple-400">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p className="text-sm">&copy; 2024 Artify. All rights reserved.</p>
          <div className="flex items-center text-sm">
            <span className="mr-2">Powered by</span>
            <EthereumIcon className="h-5 w-5" />
            <span className="ml-1">Ethereum</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

