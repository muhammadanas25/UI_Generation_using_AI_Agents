import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { WalletIcon, Search, Bell } from 'lucide-react'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

function CountdownTimer({ endTime }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(endTime))

  function getTimeLeft(endTime) {
    const total = endTime.getTime() - Date.now()
    const seconds = Math.floor((total / 1000) % 60)
    const minutes = Math.floor((total / 1000 / 60) % 60)
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
    const days = Math.floor(total / (1000 * 60 * 60 * 24))
    return { days, hours, minutes, seconds }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(endTime))
    }, 1000)
    return () => clearInterval(timer)
  }, [endTime])

  return (
    <div className="flex gap-2 text-sm font-mono animate-pulse">
      <span className="hover:text-primary transition-colors">{timeLeft.days}d</span>
      <span className="hover:text-primary transition-colors">{timeLeft.hours}h</span>
      <span className="hover:text-primary transition-colors">{timeLeft.minutes}m</span>
      <span className="hover:text-primary transition-colors">{timeLeft.seconds}s</span>
    </div>
  )
}

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <header className="bg-transparent shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">AuctionX</h1>
            <nav className="hidden md:block">
              <ul className="flex gap-6">
                <li><a href="#" className="text-sm font-medium hover:text-pink-500 transition-colors">Explore</a></li>
                <li><a href="#" className="text-sm font-medium hover:text-pink-500 transition-colors">Create</a></li>
                <li><a href="#" className="text-sm font-medium hover:text-pink-500 transition-colors">About</a></li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Input type="search" placeholder="Search auctions" className="w-64 bg-gray-700 focus:bg-gray-600 transition-colors rounded-full" />
              <Search className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
            </div>
            <Menu as="div" className="relative">
              <Menu.Button className="p-2 rounded-full hover:bg-gray-700 transition-colors">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-150"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a href="#" className={`block px-4 py-2 text-sm ${active ? 'bg-gray-700' : ''}`}>
                        No new notifications
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
            <Button variant="gradient" className="flex items-center space-x-2">
              <WalletIcon className="h-4 w-4" />
              <span>Connect Wallet</span>
            </Button>
            <div className="md:hidden">
              <Menu as="div" className="relative">
                <Menu.Button className="p-2 rounded-md hover:bg-gray-700 transition-colors">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a href="#" className={`block px-4 py-2 text-sm ${active ? 'bg-gray-700' : ''}`}>
                          Explore
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a href="#" className={`block px-4 py-2 text-sm ${active ? 'bg-gray-700' : ''}`}>
                          Create
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a href="#" className={`block px-4 py-2 text-sm ${active ? 'bg-gray-700' : ''}`}>
                          About
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Featured Auction</h2>
            <Button variant="outline" className="mt-4 md:mt-0">View All</Button>
          </div>
          <Card className="overflow-hidden transform hover:scale-105 transition-transform shadow-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative group">
                <img
                  alt="Featured NFT"
                  className="object-cover w-full h-full transition-transform transform group-hover:scale-110"
                  src="/placeholder.svg?height=600&width=600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-2 py-1 bg-pink-500 text-xs rounded">NFT</span>
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Cosmic Harmony #42</h3>
                  <p className="text-gray-300 mb-4">
                    A mesmerizing piece that blends the cosmic with the terrestrial, created by renowned digital artist Stella Nova.
                  </p>
                </div>
                <div className="flex justify-between items-center mb-4 animate-fadeIn">
                  <div>
                    <div className="text-sm text-gray-400">Current Bid</div>
                    <div className="text-2xl font-bold text-pink-500">12.5 ETH</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Auction Ends In</div>
                    <CountdownTimer endTime={new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)} />
                  </div>
                </div>
                <Button className="w-full mt-4 animate-pulse" variant="gradient">Place Bid</Button>
              </div>
            </div>
          </Card>
        </section>
        <section>
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Ongoing Auctions</h2>
            <Tabs defaultValue="all" className="mt-4 md:mt-0">
              <TabsList className="bg-gray-700 p-1 rounded-full flex space-x-1">
                <TabsTrigger value="all" className="px-4 py-2 rounded-full hover:bg-pink-500 focus:ring-0">All</TabsTrigger>
                <TabsTrigger value="nft" className="px-4 py-2 rounded-full hover:bg-pink-500 focus:ring-0">NFTs</TabsTrigger>
                <TabsTrigger value="tokens" className="px-4 py-2 rounded-full hover:bg-pink-500 focus:ring-0">Tokens</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="hover:shadow-2xl transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative group">
                    <img
                      alt={`Auction item ${i + 1}`}
                      className="object-cover w-full h-48 transition-transform transform group-hover:scale-105"
                      src={`/placeholder.svg?height=300&width=300&text=Item ${i + 1}`}
                    />
                    <div className="absolute bottom-2 left-2">
                      <span className="px-2 py-1 bg-pink-500 text-xs rounded">NFT</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-xl font-semibold mb-2">Digital Masterpiece #{i + 1}</CardTitle>
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>Current Bid: {(Math.random() * 10).toFixed(2)} ETH</span>
                    <CountdownTimer endTime={new Date(Date.now() + Math.random() * 5 * 24 * 60 * 60 * 1000)} />
                  </div>
                </CardContent>
                <CardFooter className="p-4">
                  <Button variant="outline" className="w-full hover:bg-pink-500 hover:text-white transition-colors">Bid Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 py-6">
        <div className="container mx-auto px-4 text-center text-gray-500">
          &copy; {new Date().getFullYear()} AuctionX. All rights reserved.
        </div>
      </footer>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  )
}