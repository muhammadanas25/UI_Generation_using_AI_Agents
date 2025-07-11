import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BitcoinIcon as EthereumIcon, SearchIcon, WalletIcon, MenuIcon, XIcon, TwitterIcon, DiscIcon as DiscordIcon, InstagramIcon } from 'lucide-react'
import { Transition } from '@headlessui/react'
import { ArrowRight, Zap } from 'lucide-react';
import Image from 'next/image';


export default function Component() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleConnectWallet = () => {
    // In a real application, this would trigger a Web3 wallet connection
    setWalletConnected(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 text-white overflow-x-hidden">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center">
          <Image src="/logo.png" alt="YieldMax Logo" width={32} height={32} className="mr-2" />
          <h1 className="text-xl lg:text-2xl font-bold text-primary">YieldMax</h1>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Docs
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Community
          </a>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12 mt-16"> {/* Added mt-16 for spacing */}
        <section className="w-full py-16 md:py-20 lg:py-28 xl:py-36">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter">
              Maximize Your Yield with YieldMax
            </h1>
            <p className="mx-auto mt-4 md:mt-6 max-w-[700px] text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400">
              The next-generation DeFi platform for staking and yield farming. Outperform the market with our
              advanced strategies and user-friendly interface.
            </p>
            <Button className="mt-6 md:mt-8 flex items-center animate-bounce" size="lg">
              Launch App
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Image src="/decentralized.svg" alt="DeFi Illustration" width={600} height={400} className="mt-8 md:mt-10 animate-fade-in w-full max-w-[400px] md:max-w-[600px]" />
          </div>
        </section>

        <section className="mb-24">
          <h3 className="text-3xl font-semibold mb-6 text-center">Featured Collections</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="bg-white/10 backdrop-blur-lg border border-purple-500 hover:border-purple-300 transition-colors duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle>Collection {i}</CardTitle>
                  <CardDescription className="text-purple-200">by Artist {i}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src={`/placeholder.svg?height=200&width=200&text=NFT ${i}`}
                    alt={`NFT ${i}`}
                    className="w-full h-48 object-cover rounded-md shadow-lg"
                  />
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" className="w-full hover:bg-purple-400 transition-colors duration-300">
                    View Collection
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12">
              Key Features
            </h2>
            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {/* ... (Card components remain unchanged) ... */}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12">
              YieldMax vs Uniswap
            </h2>
            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2">
              {/* ... (Card components remain unchanged) ... */}
            </div>
            <div className="mt-8 md:mt-12 flex justify-center">
              <Image src="/comparison-chart.svg" alt="YieldMax vs Uniswap Comparison" width={800} height={400} className="animate-fade-in w-full max-w-[400px] md:max-w-[800px]" />
            </div>
          </div>
        </section>


        <section className="mb-24">
          <h3 className="text-3xl font-semibold mb-6 text-center">Why Choose Artify?</h3>
          <Tabs defaultValue="security" className="w-full max-w-2xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-indigo-600 p-1 md:p-2 rounded-lg">
              <TabsTrigger value="security" className="flex flex-col items-center text-xs md:text-base">
                <EthereumIcon className="h-4 w-4 md:h-6 md:w-6 mb-1" />
                Security
              </TabsTrigger>
              <TabsTrigger value="fees" className="flex flex-col items-center text-xs md:text-base">
                <SearchIcon className="h-4 w-4 md:h-6 md:w-6 mb-1" />
                Low Fees
              </TabsTrigger>
              <TabsTrigger value="community" className="flex flex-col items-center text-xs md:text-base">
                <WalletIcon className="h-4 w-4 md:h-6 md:w-6 mb-1" />
                Community
              </TabsTrigger>
            </TabsList>
            <TabsContent value="security" className="text-center py-6">
              <p className="text-lg">Artify uses cutting-edge blockchain technology to ensure the security and authenticity of every NFT transaction.</p>
            </TabsContent>
            <TabsContent value="fees" className="text-center py-6">
              <p className="text-lg">We offer some of the lowest fees in the industry, maximizing your earnings from NFT sales.</p>
            </TabsContent>
            <TabsContent value="community" className="text-center py-6">
              <p className="text-lg">Join a thriving community of artists, collectors, and enthusiasts passionate about digital art and NFTs.</p>
            </TabsContent>
          </Tabs>
        </section>

        <section className="text-center mb-12 md:mb-24">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 animate-pulse">Testimonials</h3>
          <div className="flex flex-col space-y-6 md:flex-row md:justify-center md:items-center md:space-x-6 md:space-y-0">
            <Card className="bg-white/10 backdrop-blur-lg border border-purple-500 p-6 max-w-sm">
              <CardContent>
                <p className="italic">"Artify has revolutionized the way I buy and sell NFTs. The platform is secure, easy to use, and the community is fantastic!"</p>
                <p className="mt-4 font-semibold">- Jane Doe</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-lg border border-purple-500 p-6 max-w-sm">
              <CardContent>
                <p className="italic">"The lowest fees and the best selection of digital art make Artify my go-to marketplace for NFTs."</p>
                <p className="mt-4 font-semibold">- John Smith</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-lg border border-purple-500 p-6 max-w-sm">
              <CardContent>
                <p className="italic">"Joining the Artify community has connected me with so many talented artists and collectors. Highly recommended!"</p>
                <p className="mt-4 font-semibold">- Alex Johnson</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="w-full py-16 md:py-20 lg:py-28 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-4 md:mb-6 animate-slide-in">
                Start Maximizing Your Yield Today
              </h2>
              <p className="mx-auto max-w-[700px] text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400 mb-6 md:mb-8">
                Join thousands of users who are already benefiting from YieldMax's advanced DeFi strategies.
              </p>
              <Button className="mt-6 w-full sm:w-auto" size="lg">
                Connect Wallet
                <Zap className="ml-2 h-4 w-4" />
              </Button>
              <Image src="/community.svg" alt="Community Illustration" width={500} height={300} className="mt-8 md:mt-10 animate-fade-in w-full max-w-[300px] md:max-w-[500px]" />
            </div>
          </div>
        </section>

        <section className="text-center mb-12 md:mb-24">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 animate-fadeIn">Ready to Get Started?</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="w-full sm:w-auto transition-transform transform hover:scale-105">
              Explore NFTs
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto transition-transform transform hover:scale-105">
              Create an NFT
            </Button>
          </div>
        </section>
      </main>

      <footer className="flex flex-col sm:flex-row py-6 w-full shrink-0 items-center justify-between px-4 md:px-6 bg-white shadow-inner">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 sm:mb-0">© 2024 YieldMax. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
      <style jsx>{`
        /* ... existing styles ... */
        @media (max-width: 640px) {
          body {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  )
}

