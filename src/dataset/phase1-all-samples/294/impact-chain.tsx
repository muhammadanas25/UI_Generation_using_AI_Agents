"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Wallet, Heart } from "lucide-react"

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
    imageUrl: "/placeholder.svg?height=100&width=200",
    raised: 2.5,
    goal: 10,
  },
  {
    id: 2,
    title: "Education for All",
    description: "Support education in underprivileged areas",
    imageUrl: "/placeholder.svg?height=100&width=200",
    raised: 5.7,
    goal: 15,
  },
  {
    id: 3,
    title: "Reforestation Project",
    description: "Plant trees to combat deforestation",
    imageUrl: "/placeholder.svg?height=100&width=200",
    raised: 1.8,
    goal: 8,
  },
]

export default function ImpactChain() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [donationAmount, setDonationAmount] = useState<{ [key: number]: string }>({})

  const connectWallet = () => {
    // Simulate wallet connection
    setWalletConnected(true)
  }

  const handleDonation = (causeId: number) => {
    // Simulate donation process
    alert(`Donating ${donationAmount[causeId] || 0} crypto to cause #${causeId}`)
    setDonationAmount({ ...donationAmount, [causeId]: "" })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">ImpactChain</h1>
        <Button onClick={connectWallet} disabled={walletConnected}>
          {walletConnected ? "Wallet Connected" : "Connect Wallet"}
          <Wallet className="ml-2 h-4 w-4" />
        </Button>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Make a Difference with Crypto</h2>
        <p className="text-lg text-gray-600">
          ImpactChain is a decentralized platform that allows you to donate cryptocurrency directly to
          social impact causes. Your contributions are transparent, secure, and make a real difference.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {causes.map((cause) => (
          <Card key={cause.id}>
            <CardHeader>
              <CardTitle>{cause.title}</CardTitle>
              <CardDescription>{cause.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <img src={cause.imageUrl} alt={cause.title} className="w-full h-48 object-cover mb-4 rounded-md" />
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>{cause.raised} ETH raised</span>
                <span>Goal: {cause.goal} ETH</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-primary h-2.5 rounded-full"
                  style={{ width: `${(cause.raised / cause.goal) * 100}%` }}
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
              />
              <Button onClick={() => handleDonation(cause.id)} disabled={!walletConnected}>
                Donate <Heart className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  )
}