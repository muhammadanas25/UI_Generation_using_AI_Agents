"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Toast, ToastProvider, toast } from "@/components/ui/toast"
import { FaBitcoin, FaUser, FaChartLine } from "react-icons/fa"

type Market = {
  id: number
  question: string
  options: string[]
  endDate: string
}

type Position = {
  marketId: number
  option: string
  amount: number
}

export default function PredictChain() {
  const [markets] = useState<Market[]>([
    {
      id: 1,
      question: "Will Bitcoin reach $100,000 by the end of 2024?",
      options: ["Yes", "No"],
      endDate: "2024-12-31",
    },
    {
      id: 2,
      question: "Who will win the 2024 US Presidential Election?",
      options: ["Democrats", "Republicans", "Other"],
      endDate: "2024-11-05",
    },
  ])

  const [selectedMarket, setSelectedMarket] = useState<Market | null>(null)
  const [selectedOption, setSelectedOption] = useState<string>("")
  const [betAmount, setBetAmount] = useState<string>("")
  const [positions, setPositions] = useState<Position[]>([])
  const [balance, setBalance] = useState<number>(1000)
  const [isPlacingBet, setIsPlacingBet] = useState<boolean>(false)

  const handlePlaceBet = () => {
    if (selectedMarket && selectedOption && betAmount) {
      const amount = parseFloat(betAmount)
      if (amount > 0 && amount <= balance) {
        setIsPlacingBet(true)
        setTimeout(() => {
          setPositions([
            ...positions,
            { marketId: selectedMarket.id, option: selectedOption, amount },
          ])
          setBalance(balance - amount)
          setBetAmount("")
          setSelectedOption("")
          setIsPlacingBet(false)
          toast({
            title: "Bet Placed",
            description: `You have placed ${amount} tokens on "${selectedOption}"`,
          })
        }, 1000)
      } else {
        toast({
          title: "Invalid Amount",
          description: "Please enter a valid bet amount.",
        })
      }
    }
  }

  return (
    <ToastProvider>
      <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 p-4">
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <FaBitcoin className="text-4xl text-yellow-500 animate-bounce" />
            <h1 className="text-4xl font-bold text-white">PredictChain</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-yellow-500 transition">
              <FaChartLine className="mr-2" />
              Markets
            </Button>
            <Button variant="ghost" className="text-white hover:text-yellow-500 transition">
              <FaUser className="mr-2" />
              Profile
            </Button>
          </div>
        </header>
        <main className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="bg-gray-800 text-white hover:scale-105 transform transition duration-300">
              <CardHeader>
                <CardTitle>
                  <FaChartLine className="inline-block mr-2" />
                  Active Markets
                </CardTitle>
                <CardDescription>Select a market to place your bet</CardDescription>
              </CardHeader>
              <CardContent>
                <Select onValueChange={(value) => setSelectedMarket(markets.find(m => m.id.toString() === value) || null)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a market" />
                  </SelectTrigger>
                  <SelectContent>
                    {markets.map((market) => (
                      <SelectItem key={market.id} value={market.id.toString()}>
                        {market.question}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {selectedMarket && (
              <Card className="bg-gray-800 text-white hover:scale-105 transform transition duration-300">
                <CardHeader>
                  <CardTitle>Place a Bet</CardTitle>
                  <CardDescription>{selectedMarket.question}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="option">Select Option</Label>
                    <Select onValueChange={setSelectedOption}>
                      <SelectTrigger id="option" className="w-full">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        {selectedMarket.options.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="amount">Bet Amount (Tokens)</Label>
                    <Input
                      id="amount"
                      type="number"
                      value={betAmount}
                      onChange={(e) => setBetAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="bg-gray-700 text-white"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={handlePlaceBet}
                    disabled={!selectedOption || !betAmount || isPlacingBet}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:opacity-50 transition"
                  >
                    {isPlacingBet ? "Placing Bet..." : "Place Bet"}
                  </Button>
                </CardFooter>
              </Card>
            )}

            <Card className="bg-gray-800 text-white hover:scale-105 transform transition duration-300">
              <CardHeader>
                <CardTitle>Your Positions</CardTitle>
                <CardDescription>Current balance: {balance} tokens</CardDescription>
              </CardHeader>
              <CardContent>
                {positions.length > 0 ? (
                  <ul className="space-y-2">
                    {positions.map((position, index) => (
                      <li key={index} className="bg-gray-700 p-3 rounded-lg flex justify-between items-center">
                        <div>
                          <p className="font-semibold">Market ID: {position.marketId}</p>
                          <p>Option: {position.option}</p>
                        </div>
                        <span className="text-yellow-500 font-bold">{position.amount} Tokens</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400">No active positions</p>
                )}
              </CardContent>
            </Card>
          </div>
        </main>
        <footer className="mt-12 text-center text-gray-500">
          &copy; {new Date().getFullYear()} PredictChain. All rights reserved.
        </footer>
        <Toast />
      </div>
    </ToastProvider>
  )
}