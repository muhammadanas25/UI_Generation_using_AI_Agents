import { useState, useEffect } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Clock, Coins, Heart, HeartFilled } from "lucide-react"
import { Tooltip } from "@/components/ui/tooltip"
import Image from 'next/image'
import { motion } from 'framer-motion'

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
  const [isFavorited, setIsFavorited] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [])

  function getTimeLeft() {
    const now = new Date()
    const diff = endTime.getTime() - now.getTime()
    if (diff <= 0) return 'Auction Ended'
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    return `${hours}h ${minutes}m`
  }

  function handleBid(e: React.FormEvent) {
    e.preventDefault()
    if (parseFloat(bid) < currentBid + 0.1) {
      alert(`Minimum bid is ${currentBid + 0.1} ETH`)
      return
    }
    // Here you would typically interact with a smart contract to place the bid
    console.log(`Placing bid of ${bid} ETH on NFT ${nftId}`)
    setBid('')
    // Optionally, update currentBid here or fetch updated bid from backend
  }

  function toggleFavorite() {
    setIsFavorited(!isFavorited)
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg">
        <CardHeader className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl font-bold">{nftName}</CardTitle>
            <CardDescription className="text-sm text-gray-500">AuctionX Exclusive</CardDescription>
          </div>
          <Tooltip content={isFavorited ? "Remove from favorites" : "Add to favorites"}>
            <button onClick={toggleFavorite} className="text-red-500 hover:text-red-600 transition-colors duration-200">
              {isFavorited ? <HeartFilled className="w-6 h-6" /> : <Heart className="w-6 h-6" />}
            </button>
          </Tooltip>
        </CardHeader>
        <CardContent className="space-y-4">
          <motion.div whileHover={{ scale: 1.05 }} className="relative">
            <Image 
              src={imageUrl} 
              alt={nftName} 
              width={300}
              height={300}
              className="w-full h-auto rounded-lg object-cover"
            />
            <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
              Limited Edition
            </div>
          </motion.div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <Coins className="text-primary w-5 h-5" />
              <span className="font-semibold">Current Bid: {currentBid} ETH</span>
            </div>
            <div className={`flex items-center space-x-2 ${timeLeft === 'Auction Ended' ? 'text-red-500' : 'text-primary'}`}>
              <Clock className="w-5 h-5" />
              <span className="font-medium">{timeLeft}</span>
            </div>
          </div>
          <form onSubmit={handleBid} className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
            <Input
              type="number"
              placeholder="Your bid (ETH)"
              value={bid}
              onChange={(e) => setBid(e.target.value)}
              min={(currentBid + 0.1).toFixed(1)}
              step={0.1}
              required
              className="flex-grow"
            />
            <Button type="submit" className="w-full sm:w-auto">
              Place Bid
            </Button>
          </form>
          <div className="mt-4">
            <Button variant="outline" className="w-full flex items-center justify-center space-x-2">
              <Coins className="w-5 h-5" />
              <span>View Bid History</span>
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
          <span>AuctionX: Secure & Transparent Bidding</span>
          <Button variant="ghost" size="sm" className="flex items-center space-x-1">
            <span>Share</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 8a3 3 0 11-6 0 3 3 0 016 0zM19.4 15c-.7-2.3-2.6-4.2-5-5m0 0a7.978 7.978 0 00-2.4-.4c-3 0-5.7 1.5-7.5 3.8M9 12a3 3 0 110-6 3 3 0 010 6z" />
            </svg>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}