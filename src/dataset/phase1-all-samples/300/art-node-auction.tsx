"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Clock, Wallet } from "lucide-react"

// Mock blockchain interaction
const mockBlockchain = {
  placeBid: (amount: number) => new Promise(resolve => setTimeout(() => resolve(true), 1000)),
  getHighestBid: () => Promise.resolve(1.5),
  getTimeLeft: () => Promise.resolve(3600), // 1 hour in seconds
}

interface Auction {
  id: number
  title: string
  artist: string
  image: string
  startingBid: number
}

const upcomingAuctions: Auction[] = [
  { id: 2, title: "Digital Dreamscape", artist: "CryptoArtist", image: "/placeholder.svg?height=100&width=100", startingBid: 0.5 },
  { id: 3, title: "Neon Nebula", artist: "PixelPioneer", image: "/placeholder.svg?height=100&width=100", startingBid: 0.75 },
  { id: 4, title: "Quantum Quilt", artist: "DataDaVinci", image: "/placeholder.svg?height=100&width=100", startingBid: 1 },
]

export default function Component() {
  const [currentBid, setCurrentBid] = useState<number>(0)
  const [timeLeft, setTimeLeft] = useState<number>(0)
  const [bidAmount, setBidAmount] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      const highestBid = await mockBlockchain.getHighestBid()
      const remainingTime = await mockBlockchain.getTimeLeft()
      setCurrentBid(highestBid)
      setTimeLeft(remainingTime)
    }
    fetchData()
    const timer = setInterval(fetchData, 5000) // Update every 5 seconds
    return () => clearInterval(timer)
  }, [])

  const handleBid = async () => {
    const amount = parseFloat(bidAmount)
    if (amount > currentBid) {
      await mockBlockchain.placeBid(amount)
      setCurrentBid(amount)
      setBidAmount('')
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">ArtNode: Decentralized Art Auctions</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Current Auction: "Ethereal Echoes"</CardTitle>
            <CardDescription>By: DigitalDali</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video relative overflow-hidden rounded-lg">
              <img 
                src="/placeholder.svg?height=400&width=600" 
                alt="Ethereal Echoes by DigitalDali" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <Clock className="mr-2" />
                <span>{Math.floor(timeLeft / 3600)}h {Math.floor((timeLeft % 3600) / 60)}m left</span>
              </div>
              <div className="flex items-center">
                <Wallet className="mr-2" />
                <span>Current Bid: {currentBid} ETH</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex w-full space-x-2">
              <Input 
                type="number" 
                placeholder="Enter bid amount" 
                value={bidAmount} 
                onChange={(e) => setBidAmount(e.target.value)}
              />
              <Button onClick={handleBid}>Place Bid</Button>
            </div>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Auctions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAuctions.map((auction) => (
                <div key={auction.id} className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={auction.image} alt={auction.title} />
                    <AvatarFallback>{auction.artist[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{auction.title}</p>
                    <p className="text-sm text-muted-foreground">{auction.artist}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {auction.startingBid} ETH
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}