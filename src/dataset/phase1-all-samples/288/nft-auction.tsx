import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Clock, Coins } from "lucide-react"

interface AuctionProps {
  nftId: string
  nftName: string
  imageUrl: string
  currentBid: number
  endTime: Date
}

export default function Component({ nftId, nftName, imageUrl, currentBid, endTime }: AuctionProps = {
  nftId: '1',
  nftName: 'Rare Cosmic Kitty',
  imageUrl: '/placeholder.svg?height=300&width=300',
  currentBid: 0.5,
  endTime: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours from now
}) {
  const [bid, setBid] = useState('')
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  function getTimeLeft() {
    const now = new Date()
    const diff = endTime.getTime() - now.getTime()
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    return `${hours}h ${minutes}m`
  }

  function handleBid(e: React.FormEvent) {
    e.preventDefault()
    // Here you would typically interact with a smart contract to place the bid
    console.log(`Placing bid of ${bid} ETH on NFT ${nftId}`)
    setBid('')
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{nftName}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <img 
          src={imageUrl} 
          alt={nftName} 
          className="w-full h-auto rounded-lg"
        />
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Coins className="text-primary" />
            <span className="font-bold">Current Bid: {currentBid} ETH</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="text-primary" />
            <span>{timeLeft}</span>
          </div>
        </div>
        <form onSubmit={handleBid} className="flex space-x-2">
          <Input
            type="number"
            placeholder="Your bid (ETH)"
            value={bid}
            onChange={(e) => setBid(e.target.value)}
            min={currentBid + 0.1}
            step={0.1}
            required
            className="flex-grow"
          />
          <Button type="submit">Place Bid</Button>
        </form>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        AuctionX: Bid on rare digital assets securely and transparently.
      </CardFooter>
    </Card>
  )
}