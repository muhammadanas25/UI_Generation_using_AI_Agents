import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Wallet, Search, GamepadIcon as GameController, Coins, ShieldCheck, Zap, User, Globe, Heart } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function GameXMarketplace() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <header className="px-4 lg:px-6 h-20 flex items-center bg-transparent backdrop-blur-lg fixed w-full z-10">
        <Link className="flex items-center justify-center" href="#">
          <GameController className="h-8 w-8 text-primary animate-pulse" />
          <span className="ml-2 text-3xl font-extrabold text-white">GameX</span>
        </Link>
        <nav className="ml-auto flex gap-6">
          <Link className="text-sm font-medium text-gray-300 hover:text-white transition duration-300" href="#">
            Marketplace
          </Link>
          <Link className="text-sm font-medium text-gray-300 hover:text-white transition duration-300" href="#">
            Games
          </Link>
          <Link className="text-sm font-medium text-gray-300 hover:text-white transition duration-300" href="#">
            About
          </Link>
          <Button variant="outline" size="sm" className="flex items-center">
            <Wallet className="mr-2 h-4 w-4" />
            Connect Wallet
          </Button>
        </nav>
      </header>
      <main className="flex-1 pt-20">
        <motion.section
          className="w-full py-20 md:py-32 lg:py-40 xl:py-48 bg-cover bg-center"
          style={{ backgroundImage: 'url("/hero-background.svg")' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="container px-4 md:px-6 text-center text-white">
            <motion.div
              className="flex flex-col items-center space-y-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg">
                Welcome to GameX Marketplace
              </h1>
              <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl drop-shadow">
                Trade, own, and profit from in-game assets across multiple blockchain games.
              </p>
              <form className="mt-6 flex justify-center">
                <Input
                  className="max-w-lg flex-1 bg-white/10 text-white placeholder-gray-400 focus:bg-white/20"
                  placeholder="Search assets, games..."
                  type="text"
                />
                <Button type="submit" variant="secondary" className="ml-2 flex items-center justify-center">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.section>
        <motion.section
          className="w-full py-16 md:py-24 lg:py-32 bg-gray-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12">Featured Assets</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-gray-800 hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Legendary Sword</CardTitle>
                  <CardDescription className="text-gray-400">Rare weapon from CryptoQuest</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/legendary-sword.svg"
                    alt="Legendary Sword"
                    className="w-full h-48 object-cover rounded-md transform hover:rotate-3 transition-transform duration-500"
                    width={300}
                    height={200}
                  />
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-yellow-400">0.5 ETH</span>
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black" size="sm">
                    Buy Now
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-gray-800 hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Dragon Egg</CardTitle>
                  <CardDescription className="text-gray-400">Mythical item from DragonVerse</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/dragon-egg.svg"
                    alt="Dragon Egg"
                    className="w-full h-48 object-cover rounded-md transform hover:rotate-3 transition-transform duration-500"
                    width={300}
                    height={200}
                  />
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-yellow-400">1.2 ETH</span>
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black" size="sm">
                    Buy Now
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-gray-800 hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Cyber Armor</CardTitle>
                  <CardDescription className="text-gray-400">Futuristic gear from NeoWorld</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/cyber-armor.svg"
                    alt="Cyber Armor"
                    className="w-full h-48 object-cover rounded-md transform hover:rotate-3 transition-transform duration-500"
                    width={300}
                    height={200}
                  />
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-yellow-400">0.8 ETH</span>
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black" size="sm">
                    Buy Now
                  </Button>
                </CardFooter>
              </Card>
              {/* Add more featured assets as needed */}
            </div>
          </div>
        </motion.section>
        <motion.section
          className="w-full py-16 md:py-24 lg:py-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div
                className="flex flex-col items-center text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Wallet className="h-12 w-12 mb-4 text-primary animate-pulse" />
                <h3 className="text-xl font-semibold text-white mb-2">Connect Your Wallet</h3>
                <p className="text-gray-400">Link your crypto wallet to start trading on GameX.</p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Search className="h-12 w-12 mb-4 text-primary animate-pulse" />
                <h3 className="text-xl font-semibold text-white mb-2">Discover Assets</h3>
                <p className="text-gray-400">Browse through a wide range of in-game items and collectibles.</p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Coins className="h-12 w-12 mb-4 text-primary animate-pulse" />
                <h3 className="text-xl font-semibold text-white mb-2">Trade Securely</h3>
                <p className="text-gray-400">Buy, sell, or auction your assets with confidence on our platform.</p>
              </motion.div>
            </div>
          </div>
        </motion.section>
        <motion.section
          className="w-full py-16 md:py-24 lg:py-32 bg-gray-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12">Why Choose GameX?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gray-800 hover:shadow-2xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <ShieldCheck className="h-6 w-6 mr-2 text-yellow-400" />
                    Secure Transactions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Our blockchain-based system ensures that all trades are secure, transparent, and immutable.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 hover:shadow-2xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Zap className="h-6 w-6 mr-2 text-yellow-400" />
                    Instant Transfers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Experience lightning-fast asset transfers across different games and platforms.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 hover:shadow-2xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <GameController className="h-6 w-6 mr-2 text-yellow-400" />
                    Multi-Game Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Trade assets from various blockchain games, all in one convenient marketplace.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 hover:shadow-2xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Coins className="h-6 w-6 mr-2 text-yellow-400" />
                    Low Fees
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Enjoy competitive trading fees that maximize your profits and minimize costs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>
        <motion.section
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-purple-800 to-indigo-900 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <motion.div
                className="space-y-4"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">Ready to Start Trading?</h2>
                <p className="max-w-xl mx-auto text-gray-300 text-lg md:text-xl">
                  Join thousands of gamers already trading on GameX. Connect your wallet and dive into the future of gaming assets.
                </p>
              </motion.div>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 text-lg rounded-full flex items-center shadow-lg transition transform hover:scale-105">
                <Wallet className="mr-2 h-6 w-6" />
                Connect Wallet
              </Button>
            </div>
          </div>
        </motion.section>
      </main>
      <footer className="flex flex-col gap-4 py-6 w-full shrink-0 items-center px-4 md:px-6 bg-transparent backdrop-blur-lg border-t border-gray-700">
        <p className="text-xs text-gray-400 text-center">© 2024 GameX Inc. All rights reserved.</p>
        <nav className="flex flex-wrap justify-center gap-4">
          <Link className="text-xs text-gray-400 hover:text-white transition duration-300" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-gray-400 hover:text-white transition duration-300" href="#">
            Privacy
          </Link>
          <Link className="text-xs text-gray-400 hover:text-white transition duration-300" href="#">
            Contact
          </Link>
        </nav>
        <div className="flex space-x-4 mt-4">
          <Link href="#" aria-label="Facebook">
            <User className="h-5 w-5 text-gray-400 hover:text-white transition duration-300" />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Globe className="h-5 w-5 text-gray-400 hover:text-white transition duration-300" />
          </Link>
          <Link href="#" aria-label="Instagram">
            <Heart className="h-5 w-5 text-gray-400 hover:text-white transition duration-300" />
          </Link>
        </div>
      </footer>
    </div>
  )
}

