"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Wallet, Dice, Trophy, Sun, Moon } from "lucide-react"
import { Switch } from "@/components/ui/switch"

// Simulated blockchain interaction functions
const connectWallet = () => new Promise(resolve => setTimeout(() => resolve("0x1234...5678"), 1000))
const placeBet = (nftId: string, amount: string, outcome: string) => new Promise(resolve => setTimeout(() => resolve(true), 1500))

export default function BetNFTPage() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [nftId, setNftId] = useState("")
  const [betAmount, setBetAmount] = useState("")
  const [betOutcome, setBetOutcome] = useState("")
  const [isPlacingBet, setIsPlacingBet] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState("placeBet")

  const handleConnectWallet = async () => {
    const address = await connectWallet()
    setWalletAddress(address as string)
  }

  const handlePlaceBet = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!walletAddress) return
    setIsPlacingBet(true)
    try {
      await placeBet(nftId, betAmount, betOutcome)
      alert("Bet placed successfully!")
      setNftId("")
      setBetAmount("")
      setBetOutcome("")
    } catch (error) {
      alert("Error placing bet")
    } finally {
      setIsPlacingBet(false)
    }
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white transition-colors duration-500">
      <header className="flex justify-between items-center p-6 bg-transparent shadow-md">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <Trophy className="text-indigo-600" />
          </div>
          <h1 className="text-2xl font-bold">BetNFT</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Switch
            checked={darkMode}
            onCheckedChange={setDarkMode}
            className="bg-gray-200 dark:bg-gray-700"
          >
            <Sun className="w-4 h-4 text-yellow-400" />
            <Moon className="w-4 h-4 text-gray-800" />
          </Switch>
          {walletAddress ? (
            <span className="text-sm bg-indigo-700 px-3 py-1 rounded-full">
              {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
            </span>
          ) : (
            <Button onClick={handleConnectWallet} className="flex items-center space-x-2">
              <Wallet className="h-4 w-4" />
              <span>Connect Wallet</span>
            </Button>
          )}
        </div>
      </header>

      <main className="container mx-auto p-4">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4 animate-fade-in">Welcome to BetNFT</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Place your bets using your favorite NFTs and win big in our decentralized platform. Experience the future of betting with transparency and security.
          </p>
        </section>

        <div className="flex justify-center mb-8 space-x-4">
          <button
            onClick={() => setActiveTab("placeBet")}
            className={`px-4 py-2 rounded ${
              activeTab === "placeBet" ? "bg-indigo-500" : "bg-indigo-300 hover:bg-indigo-400"
            } transition-colors duration-300`}
          >
            Place Bet
          </button>
          <button
            onClick={() => setActiveTab("activeBets")}
            className={`px-4 py-2 rounded ${
              activeTab === "activeBets" ? "bg-indigo-500" : "bg-indigo-300 hover:bg-indigo-400"
            } transition-colors duration-300`}
          >
            Active Bets
          </button>
        </div>

        {activeTab === "placeBet" && (
          <Card className="max-w-md mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="text-center">
              <CardTitle>Place Your Bet</CardTitle>
              <CardDescription>Use your NFTs to place bets on various outcomes</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePlaceBet} className="space-y-4">
                <div className="flex flex-col">
                  <Label htmlFor="nftId" className="mb-1">NFT ID</Label>
                  <Input
                    id="nftId"
                    placeholder="Enter your NFT ID"
                    value={nftId}
                    onChange={(e) => setNftId(e.target.value)}
                    className="bg-white text-black"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <Label htmlFor="betAmount" className="mb-1">Bet Amount</Label>
                  <Input
                    id="betAmount"
                    type="number"
                    placeholder="Enter bet amount in ETH"
                    value={betAmount}
                    onChange={(e) => setBetAmount(e.target.value)}
                    className="bg-white text-black"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <Label htmlFor="betOutcome" className="mb-1">Bet Outcome</Label>
                  <Select value={betOutcome} onValueChange={setBetOutcome}>
                    <SelectTrigger className="bg-white text-black">
                      <SelectValue placeholder="Select bet outcome" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Win">Win</SelectItem>
                      <SelectItem value="Lose">Lose</SelectItem>
                      <SelectItem value="Draw">Draw</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex justify-between space-x-2">
                  <Button variant="outline" className="w-full">
                    Cancel
                  </Button>
                  <Button type="submit" disabled={!walletAddress || isPlacingBet} className="w-full">
                    {isPlacingBet ? "Placing Bet..." : "Place Bet"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {activeTab === "activeBets" && (
          <Card className="max-w-2xl mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="text-center">
              <CardTitle>Active Bets</CardTitle>
              <CardDescription>Current bets placed on the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  { id: 1, nftId: "NFT#123", amount: "0.5 ETH", outcome: "Win" },
                  { id: 2, nftId: "NFT#456", amount: "1 ETH", outcome: "Lose" },
                  { id: 3, nftId: "NFT#789", amount: "0.3 ETH", outcome: "Draw" },
                ].map((bet) => (
                  <li
                    key={bet.id}
                    className="flex items-center justify-between p-4 bg-indigo-100 dark:bg-indigo-800 rounded-lg shadow hover:bg-indigo-200 dark:hover:bg-indigo-700 transition-colors duration-300"
                  >
                    <div>
                      <p className="font-semibold">{bet.nftId}</p>
                      <p className="text-sm text-indigo-700 dark:text-indigo-300">{bet.amount}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {bet.outcome === "Win" && <Trophy className="h-5 w-5 text-green-400" />}
                      {bet.outcome === "Lose" && <Dice className="h-5 w-5 text-red-400" />}
                      {bet.outcome === "Draw" && <Dice className="h-5 w-5 text-yellow-400" />}
                      <span className="capitalize">{bet.outcome}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        <section className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Why Choose BetNFT?</h3>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
            <Card className="flex-1 p-6 bg-indigo-500 hover:bg-indigo-600 transition-colors duration-300">
              <Trophy className="h-8 w-8 mb-4 mx-auto" />
              <CardTitle className="text-lg">Secure Betting</CardTitle>
              <CardDescription>All bets are secured on the blockchain ensuring transparency and fairness.</CardDescription>
            </Card>
            <Card className="flex-1 p-6 bg-indigo-500 hover:bg-indigo-600 transition-colors duration-300">
              <Dice className="h-8 w-8 mb-4 mx-auto" />
              <CardTitle className="text-lg">Instant Transactions</CardTitle>
              <CardDescription>Place and receive your bets instantly with our efficient smart contracts.</CardDescription>
            </Card>
            <Card className="flex-1 p-6 bg-indigo-500 hover:bg-indigo-600 transition-colors duration-300">
              <Wallet className="h-8 w-8 mb-4 mx-auto" />
              <CardTitle className="text-lg">Easy Wallet Integration</CardTitle>
              <CardDescription>Easily connect your cryptocurrency wallets to start betting with your NFTs.</CardDescription>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-indigo-700 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="mb-4">© 2024 BetNFT. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.5 9.95v-7.05h-2v-2.9h2v-2.2c0-2 1.2-3.1 3-3.1.87 0 1.77.16 1.77.16v1.95h-1c-1 0-1.3.62-1.3 1.25v1.5h2.2l-.35 2.9h-1.85v7.05A10 10 0 0022 12z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.8 8.205 11.385.6.111.82-.261.82-.577 0-.285-.011-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.763-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.874.118 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.62-5.479 5.92.43.371.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .319.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.628-5.372-12-12-12z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.058 2.003.25 2.47.416a4.92 4.92 0 011.675 1.09 4.92 4.92 0 011.09 1.675c.166.467.358 1.264.416 2.47.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.206-.25 2.003-.416 2.47a4.92 4.92 0 01-1.09 1.675 4.92 4.92 0 01-1.675 1.09c-.467.166-1.264.358-2.47.416-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.058-2.003-.25-2.47-.416a4.92 4.92 0 01-1.675-1.09 4.92 4.92 0 01-1.09-1.675c-.166-.467-.358-1.264-.416-2.47C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.058-1.206.25-2.003.416-2.47a4.92 4.92 0 011.09-1.675 4.92 4.92 0 011.675-1.09c.467-.166 1.264-.358 2.47-.416C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.775.13 4.67.324 3.758.61a6.84 6.84 0 00-2.45 1.605A6.84 6.84 0 00.61 4.665c-.286.912-.48 2.017-.538 3.294C.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.058 1.277.252 2.382.538 3.294a6.84 6.84 0 001.605 2.45 6.84 6.84 0 002.45 1.605c.912.286 2.017.48 3.294.538C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.058 2.382-.252 3.294-.538a6.84 6.84 0 002.45-1.605 6.84 6.84 0 001.605-2.45c.286-.912.48-2.017.538-3.294.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.058-1.277-.252-2.382-.538-3.294a6.84 6.84 0 00-1.605-2.45A6.84 6.84 0 0020.242.61c-.912-.286-2.017-.48-3.294-.538C15.668.014 15.259 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zM18.406 4.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}