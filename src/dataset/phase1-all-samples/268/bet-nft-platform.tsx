"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Wallet, Dice, Trophy } from "lucide-react"

// Simulated blockchain interaction functions
const connectWallet = () => new Promise(resolve => setTimeout(() => resolve("0x1234...5678"), 1000))
const placeBet = (nftId: string, amount: string, outcome: string) => new Promise(resolve => setTimeout(() => resolve(true), 1500))

export default function Component() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [nftId, setNftId] = useState("")
  const [betAmount, setBetAmount] = useState("")
  const [betOutcome, setBetOutcome] = useState("")
  const [isPlacingBet, setIsPlacingBet] = useState(false)

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

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">BetNFT Platform</h1>
        {walletAddress ? (
          <span className="text-sm text-muted-foreground">{walletAddress}</span>
        ) : (
          <Button onClick={handleConnectWallet}>
            <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
          </Button>
        )}
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Place Your Bet</CardTitle>
            <CardDescription>Use your NFTs to place bets on various outcomes</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePlaceBet}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="nftId">NFT ID</Label>
                  <Input id="nftId" placeholder="Enter your NFT ID" value={nftId} onChange={(e) => setNftId(e.target.value)} />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="betAmount">Bet Amount</Label>
                  <Input id="betAmount" placeholder="Enter bet amount" value={betAmount} onChange={(e) => setBetAmount(e.target.value)} />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="betOutcome">Bet Outcome</Label>
                  <Select value={betOutcome} onValueChange={setBetOutcome}>
                    <SelectTrigger id="betOutcome">
                      <SelectValue placeholder="Select bet outcome" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="win">Win</SelectItem>
                      <SelectItem value="lose">Lose</SelectItem>
                      <SelectItem value="draw">Draw</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button type="submit" disabled={!walletAddress || isPlacingBet} onClick={handlePlaceBet}>
              {isPlacingBet ? "Placing Bet..." : "Place Bet"}
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
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
                <li key={bet.id} className="flex items-center justify-between p-2 border rounded">
                  <div>
                    <p className="font-semibold">{bet.nftId}</p>
                    <p className="text-sm text-muted-foreground">{bet.amount}</p>
                  </div>
                  <div className="flex items-center">
                    {bet.outcome === "Win" && <Trophy className="h-4 w-4 text-green-500 mr-2" />}
                    {bet.outcome === "Lose" && <Dice className="h-4 w-4 text-red-500 mr-2" />}
                    {bet.outcome === "Draw" && <Dice className="h-4 w-4 text-yellow-500 mr-2" />}
                    <span>{bet.outcome}</span>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}