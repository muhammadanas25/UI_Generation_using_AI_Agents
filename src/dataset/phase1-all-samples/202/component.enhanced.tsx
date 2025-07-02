import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BitcoinIcon as EthereumIcon, SearchIcon, WalletIcon, MenuIcon, XIcon, TwitterIcon, DiscIcon as DiscordIcon, InstagramIcon } from 'lucide-react'
import { Transition } from '@headlessui/react'

export default function Component() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleConnectWallet = () => {
    // In a real application, this would trigger a Web3 wallet connection
    setWalletConnected(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 text-white overflow-x-hidden">
      <header className="container mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
        <div className="flex items-center">
          <EthereumIcon className="h-6 w-6 md:h-8 md:w-8 mr-2 animate-spin-slow" />
          <h1 className="text-2xl md:text-3xl font-bold">Artify</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-purple-200 transition-colors duration-300">Explore</a>
          <a href="#" className="hover:text-purple-200 transition-colors duration-300">Create</a>
          <a href="#" className="hover:text-purple-200 transition-colors duration-300">Community</a>
          <a href="#" className="hover:text-purple-200 transition-colors duration-300">Blog</a>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost">
            <TwitterIcon className="h-5 w-5" />
          </Button>
          <Button variant="ghost">
            <DiscordIcon className="h-5 w-5" />
          </Button>
          <Button variant="ghost">
            <InstagramIcon className="h-5 w-5" />
          </Button>
          <Button
            variant={walletConnected ? "secondary" : "default"}
            onClick={handleConnectWallet}
            className="flex items-center transition-transform transform hover:scale-105"
          >
            <WalletIcon className="mr-2 h-4 w-4" />
            {walletConnected ? "Connected" : "Connect Wallet"}
          </Button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
            {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </header>

      <Transition
        show={mobileMenuOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="-translate-y-full"
        enterTo="translate-y-0"
        leave="transition ease-in duration-200 transform"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-full"
      >
        <nav className="md:hidden bg-indigo-800 bg-opacity-90 absolute top-0 left-0 right-0 z-10 py-4 flex flex-col items-center space-y-4">
          <a href="#" className="hover:text-purple-200 transition-colors duration-300">Explore</a>
          <a href="#" className="hover:text-purple-200 transition-colors duration-300">Create</a>
          <a href="#" className="hover:text-purple-200 transition-colors duration-300">Community</a>
          <a href="#" className="hover:text-purple-200 transition-colors duration-300">Blog</a>
          <Button
            variant={walletConnected ? "secondary" : "default"}
            onClick={handleConnectWallet}
            className="mt-4 flex items-center transition-transform transform hover:scale-105"
          >
            <WalletIcon className="mr-2 h-4 w-4" />
            {walletConnected ? "Connected" : "Connect Wallet"}
          </Button>
        </nav>
      </Transition>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-12 md:mb-24 animate-fadeIn">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">Discover, Create, and Collect Rare Digital Art</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 drop-shadow-md">Artify is the premier NFT marketplace on Ethereum. Buy, sell, and explore exclusive digital assets.</p>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <Input className="max-w-sm mb-4 md:mb-0 mr-0 md:mr-2" placeholder="Search for NFTs or collections" />
            <Button className="flex items-center justify-center">
              <SearchIcon className="h-4 w-4 mr-2" />
              Search
            </Button>
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

      <footer className="container mx-auto px-4 py-6 md:py-8 mt-8 md:mt-12 border-t border-purple-400">
        <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
          <p className="text-sm md:text-base">&copy; 2024 Artify. All rights reserved.</p>
          <div className="flex space-x-4">
            <Button variant="ghost">
              <TwitterIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost">
              <DiscordIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost">
              <InstagramIcon className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex items-center text-sm md:text-base">
            <span className="mr-2">Powered by</span>
            <EthereumIcon className="h-5 w-5 md:h-6 md:w-6 animate-spin-slow" />
            <span className="ml-1">Ethereum</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

