"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Clock, Wallet, ArrowUp, Share2, Eye } from "lucide-react"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { toast } from "@/components/ui/toast"

const mockBlockchain = {
  placeBid: (amount: number) => new Promise(resolve => setTimeout(() => resolve(true), 1000)),
  getHighestBid: () => Promise.resolve(1.5),
  getTimeLeft: () => Promise.resolve(3600),
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
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      const highestBid = await mockBlockchain.getHighestBid()
      const remainingTime = await mockBlockchain.getTimeLeft()
      setCurrentBid(highestBid)
      setTimeLeft(remainingTime)
    }
    fetchData()
    const timer = setInterval(fetchData, 5000)
    return () => clearInterval(timer)
  }, [])

  const handleBid = async () => {
    const amount = parseFloat(bidAmount)
    if (isNaN(amount) || amount <= currentBid) {
      toast({
        title: "Invalid Bid",
        description: `Please enter a bid higher than ${currentBid} ETH.`,
        variant: "destructive",
      })
      return
    }
    setLoading(true)
    const success = await mockBlockchain.placeBid(amount)
    setLoading(false)
    if (success) {
      setCurrentBid(amount)
      setBidAmount('')
      toast({
        title: "Bid Placed",
        description: `You have placed a bid of ${amount} ETH.`,
      })
    }
  }

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    return `${h}h ${m}m ${s}s`
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-blue-100 to-green-100">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-indigo-600">ArtNode</h2>
          <div className="flex space-x-4">
            <Button variant="ghost" className="flex items-center">
              <Share2 className="mr-2" /> Share
            </Button>
            <Button variant="ghost" className="flex items-center">
              <Eye className="mr-2" /> View Profile
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-extrabold mb-12 text-center text-indigo-700 animate-fadeIn">ArtNode: Decentralized Art Auctions</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <Card className="lg:col-span-3 transition-transform transform hover:scale-105 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center">
                <ArrowUp className="mr-2" /> Current Auction: "Ethereal Echoes"
              </CardTitle>
              <CardDescription>By: DigitalDali</CardDescription>
            </CardHeader>
            <CardContent className="bg-white">
              <div className="relative overflow-hidden rounded-lg shadow-md animate-fadeIn">
                <img 
                  src="/placeholder.svg?height=600&width=800" 
                  alt="Ethereal Echoes by DigitalDali" 
                  className="object-cover w-full h-96 transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="mt-6 flex justify-between items-center text-indigo-600">
                <div className="flex items-center">
                  <Clock className="mr-2" />
                  <span className="animate-pulse">{formatTime(timeLeft)} left</span>
                </div>
                <div className="flex items-center">
                  <Wallet className="mr-2" />
                  <span>Current Bid: {currentBid} ETH</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50 rounded-b-lg">
              <div className="flex flex-col md:flex-row items-center md:space-x-2 space-y-2 md:space-y-0">
                <Input 
                  type="number" 
                  placeholder="Enter bid amount" 
                  value={bidAmount} 
                  onChange={(e) => setBidAmount(e.target.value)}
                  className="w-full md:w-2/3"
                />
                <Button 
                  onClick={handleBid} 
                  disabled={loading} 
                  className="w-full md:w-auto flex items-center justify-center"
                >
                  {loading ? "Placing Bid..." : "Place Bid"}
                </Button>
              </div>
            </CardFooter>
          </Card>
          
          <Card className="transition-shadow shadow-md hover:shadow-lg">
            <CardHeader className="bg-indigo-500 text-white rounded-t-lg">
              <CardTitle>Upcoming Auctions</CardTitle>
            </CardHeader>
            <CardContent className="bg-white">
              <div className="space-y-4">
                {upcomingAuctions.map((auction) => (
                  <div key={auction.id} className="flex items-center p-2 rounded-lg hover:bg-gray-100 transition-colors">
                    <Avatar className="flex-shrink-0">
                      <AvatarImage src={auction.image} alt={auction.title} className="rounded-full" />
                      <AvatarFallback>{auction.artist.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 ml-4">
                      <p className="text-lg font-medium text-gray-800">{auction.title}</p>
                      <p className="text-sm text-gray-500">By {auction.artist}</p>
                    </div>
                    <div className="text-sm text-indigo-600 font-semibold">
                      {auction.startingBid} ETH
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" className="ml-4">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle>{auction.title}</DialogTitle>
                          <DialogDescription>
                            <img src={auction.image} alt={auction.title} className="w-full h-48 object-cover rounded-md mb-4" />
                            <p className="mb-2">Artist: {auction.artist}</p>
                            <p>Starting Bid: {auction.startingBid} ETH</p>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="bg-white shadow-inner">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          © {new Date().getFullYear()} ArtNode. All rights reserved.
        </div>
      </footer>
    </div>
  )
}