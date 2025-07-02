"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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

  const handlePlaceBet = () => {
    if (selectedMarket && selectedOption && betAmount) {
      const amount = parseFloat(betAmount)
      if (amount > 0 && amount <= balance) {
        setPositions([
          ...positions,
          { marketId: selectedMarket.id, option: selectedOption, amount },
        ])
        setBalance(balance - amount)
        setBetAmount("")
        setSelectedOption("")
      }
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">PredictChain</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Active Markets</CardTitle>
            <CardDescription>Select a market to place your bet</CardDescription>
          </CardHeader>
          <CardContent>
            <Select onValueChange={(value) => setSelectedMarket(markets.find(m => m.id.toString() === value) || null)}>
              <SelectTrigger>
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
          <Card>
            <CardHeader>
              <CardTitle>Place a Bet</CardTitle>
              <CardDescription>{selectedMarket.question}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="option">Select Option</Label>
                <Select onValueChange={setSelectedOption}>
                  <SelectTrigger id="option">
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
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handlePlaceBet} disabled={!selectedOption || !betAmount}>
                Place Bet
              </Button>
            </CardFooter>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Your Positions</CardTitle>
            <CardDescription>Current balance: {balance} tokens</CardDescription>
          </CardHeader>
          <CardContent>
            {positions.length > 0 ? (
              <ul className="space-y-2">
                {positions.map((position, index) => (
                  <li key={index} className="bg-secondary p-2 rounded">
                    Market ID: {position.marketId}, Option: {position.option}, Amount: {position.amount} tokens
                  </li>
                ))}
              </ul>
            ) : (
              <p>No active positions</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}