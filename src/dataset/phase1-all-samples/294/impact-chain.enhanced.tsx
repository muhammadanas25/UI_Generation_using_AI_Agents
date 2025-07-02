"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Wallet, Heart, Search, Moon, Sun } from "lucide-react"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogBody, DialogFooter } from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import Image from "next/image"

interface Cause {
  id: number
  title: string
  description: string
  imageUrl: string
  raised: number
  goal: number
}

const causes: Cause[] = [
  {
    id: 1,
    title: "Clean Water Initiative",
    description: "Provide clean water to communities in need",
    imageUrl: "/clean-water.jpg",
    raised: 2.5,
    goal: 10,
  },
  {
    id: 2,
    title: "Education for All",
    description: "Support education in underprivileged areas",
    imageUrl: "/education.jpg",
    raised: 5.7,
    goal: 15,
  },
  {
    id: 3,
    title: "Reforestation Project",
    description: "Plant trees to combat deforestation",
    imageUrl: "/reforestation.jpg",
    raised: 1.8,
    goal: 8,
  },
  // Add more causes as needed
]

export default function ImpactChain() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [donationAmount, setDonationAmount] = useState<{ [key: number]: string }>({})
  const [darkMode, setDarkMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCause, setSelectedCause] = useState<Cause | null>(null)

  const connectWallet = () => {
    // Simulate wallet connection
    setWalletConnected(true)
  }

  const handleDonation = (causeId: number) => {
    // Simulate donation process
    alert(`Donating ${donationAmount[causeId] || 0} crypto to ${selectedCause?.title}`)
    setDonationAmount({ ...donationAmount, [causeId]: "" })
    setSelectedCause(null)
  }

  const filteredCauses = causes.filter(
    (cause) =>
      cause.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cause.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 py-6">
          <header className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <Image src="/logo.png" alt="ImpactChain Logo" width={50} height={50} className="mr-3" />
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">ImpactChain</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Switch
                checked={darkMode}
                onCheckedChange={() => setDarkMode(!darkMode)}
                aria-label="Toggle Dark Mode"
              />
              {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-500" />}
              <Button onClick={connectWallet} disabled={walletConnected} className="flex items-center">
                {walletConnected ? "Wallet Connected" : "Connect Wallet"}
                <Wallet className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </header>

          <section className="mb-12 text-center">
            <h2 className="text-4xl font-semibold text-gray-800 dark:text-white mb-4">Make a Difference with Crypto</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              ImpactChain is a decentralized platform that allows you to donate cryptocurrency directly to
              social impact causes. Your contributions are transparent, secure, and make a real difference.
            </p>
            <div className="mt-6 flex justify-center">
              <Input
                type="text"
                placeholder="Search for causes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full max-w-md flex-1"
                icon={<Search className="h-5 w-5 text-gray-500" />}
              />
            </div>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCauses.map((cause) => (
              <Card
                key={cause.id}
                className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{cause.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">{cause.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-48 w-full mb-4">
                    <Image
                      src={cause.imageUrl}
                      alt={cause.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                      priority
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <span>{cause.raised} ETH raised</span>
                    <span>Goal: {cause.goal} ETH</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 transition-all duration-500">
                    <div
                      className="bg-green-500 h-2.5 rounded-full"
                      style={{ width: `${Math.min((cause.raised / cause.goal) * 100, 100)}%` }}
                    ></div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-stretch gap-2">
                  <Input
                    type="number"
                    placeholder="Amount to donate"
                    value={donationAmount[cause.id] || ""}
                    onChange={(e) => setDonationAmount({ ...donationAmount, [cause.id]: e.target.value })}
                    disabled={!walletConnected}
                    className="bg-white dark:bg-gray-800"
                  />
                  <Dialog open={selectedCause?.id === cause.id} onOpenChange={() => setSelectedCause(null)}>
                    <DialogTrigger asChild>
                      <Button
                        onClick={() => setSelectedCause(cause)}
                        disabled={!walletConnected}
                        className="flex items-center justify-center"
                      >
                        Donate <Heart className="ml-2 h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-lg">
                      <DialogHeader>
                        <DialogTitle>Confirm Donation</DialogTitle>
                      </DialogHeader>
                      <DialogBody>
                        <p className="text-gray-600 dark:text-gray-300">
                          Are you sure you want to donate {donationAmount[cause.id] || 0} ETH to {cause.title}?
                        </p>
                      </DialogBody>
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setSelectedCause(null)}>
                          Cancel
                        </Button>
                        <Button
                          onClick={() => handleDonation(cause.id)}
                          className="ml-2 bg-green-500 hover:bg-green-600"
                        >
                          Confirm
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </section>

          <section className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Impact Statistics</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center">
                <span className="block text-3xl font-bold text-green-500">50+</span>
                <span className="block text-gray-600 dark:text-gray-300">Causes Supported</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-green-500">100K+</span>
                <span className="block text-gray-600 dark:text-gray-300">Donations Made</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-green-500">200+</span>
                <span className="block text-gray-600 dark:text-gray-300">Partners</span>
              </div>
            </div>
          </section>

          <footer className="mt-16 text-center text-gray-600 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} ImpactChain. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="#" className="hover:text-green-500 transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-green-500 transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-green-500 transition-colors">
                Instagram
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}