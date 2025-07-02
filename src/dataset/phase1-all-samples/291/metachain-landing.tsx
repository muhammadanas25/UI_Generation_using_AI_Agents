import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Cube, Wallet, Users, Map, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MetaChainLanding() {
  const [currentLand, setCurrentLand] = useState(0)
  const lands = [
    { name: "Neon City", price: "5 ETH", image: "/placeholder.svg?height=400&width=600" },
    { name: "Ethereal Gardens", price: "3.5 ETH", image: "/placeholder.svg?height=400&width=600" },
    { name: "Cyber Peaks", price: "4.2 ETH", image: "/placeholder.svg?height=400&width=600" }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black text-white">
      <header className="p-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Cube className="h-8 w-8 text-blue-400" />
          <span className="text-2xl font-bold">MetaChain</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="#" className="hover:text-blue-400 transition-colors">Explore</Link>
          <Link href="#" className="hover:text-blue-400 transition-colors">Marketplace</Link>
          <Link href="#" className="hover:text-blue-400 transition-colors">Community</Link>
        </nav>
        <Button className="bg-blue-600 hover:bg-blue-700">Connect Wallet</Button>
      </header>

      <main className="flex-grow">
        <section className="py-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-pulse">
            Welcome to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">MetaChain</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Explore virtual worlds, own digital land, and create your unique NFT avatar in our immersive Web3 metaverse.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-lg py-6 px-8">
            Enter the Metaverse
          </Button>
        </section>

        <section className="py-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-blue-800 bg-opacity-50 p-6 rounded-lg text-center">
              <Map className="h-12 w-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Virtual Land</h3>
              <p>Own and develop unique parcels of digital real estate in our expansive metaverse.</p>
            </div>
            <div className="bg-purple-800 bg-opacity-50 p-6 rounded-lg text-center">
              <User className="h-12 w-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">NFT Avatars</h3>
              <p>Create and customize your digital identity with unique, tradeable NFT avatars.</p>
            </div>
            <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-lg text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-indigo-400" />
              <h3 className="text-xl font-semibold mb-2">Social Experiences</h3>
              <p>Connect with friends, attend virtual events, and build communities in immersive spaces.</p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-black bg-opacity-50">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Virtual Lands</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
              <Image
                src={lands[currentLand].image}
                alt={lands[currentLand].name}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-500"
              />
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold">{lands[currentLand].name}</h3>
              <p className="text-xl">{lands[currentLand].price}</p>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              {lands.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentLand(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentLand ? 'bg-blue-500' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">NFT Avatar Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="aspect-square relative rounded-lg overflow-hidden group">
                <Image
                  src={`/placeholder.svg?height=300&width=300`}
                  alt={`NFT Avatar ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-sm font-semibold">Avatar #{index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 text-center bg-gradient-to-r from-blue-600 to-purple-600">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the MetaChain?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sign up now to be notified when we launch and get exclusive early access to virtual land sales and NFT minting.
          </p>
          <form className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-black"
            />
            <Button type="submit" className="bg-purple-900 hover:bg-purple-800">
              Get Early Access
            </Button>
          </form>
        </section>
      </main>

      <footer className="bg-black bg-opacity-50 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Cube className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold">MetaChain</span>
          </div>
          <nav className="flex space-x-4 mb-4 md:mb-0">
            <Link href="#" className="hover:text-blue-400 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">FAQ</Link>
          </nav>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-blue-400 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">
              <span className="sr-only">Discord</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}