"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { ArrowLeftRight, Wallet } from 'lucide-react'

export default function TradeX() {
  const [selectedChain, setSelectedChain] = useState("ethereum")
  const [crossChainEnabled, setCrossChainEnabled] = useState(false)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-8 text-center">TradeX: Decentralized NFT Trading Platform</h1>
      <Tabs defaultValue="browse" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="browse">Browse</TabsTrigger>
          <TabsTrigger value="trade">Trade</TabsTrigger>
          <TabsTrigger value="wallet">Wallet</TabsTrigger>
        </TabsList>
        <TabsContent value="browse">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Browse NFTs</CardTitle>
              <CardDescription>Explore and discover unique NFTs across multiple chains.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <Select value={selectedChain} onValueChange={setSelectedChain}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Select chain" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ethereum">Ethereum</SelectItem>
                    <SelectItem value="polygon">Polygon</SelectItem>
                    <SelectItem value="solana">Solana</SelectItem>
                  </SelectContent>
                </Select>
                <Input type="text" placeholder="Search NFTs" className="flex-grow" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i}>
                    <CardContent className="p-4">
                      <img
                        src={`/placeholder.svg?height=200&width=200&text=NFT ${i}`}
                        alt={`NFT ${i}`}
                        className="w-full h-48 object-cover rounded-md mb-2"
                      />
                      <h3 className="font-semibold">NFT #{i}</h3>
                      <p className="text-sm text-gray-500">0.05 ETH</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="trade">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Trade NFTs</CardTitle>
              <CardDescription>Swap your NFTs across different blockchain networks.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="cross-chain"
                  checked={crossChainEnabled}
                  onCheckedChange={setCrossChainEnabled}
                />
                <Label htmlFor="cross-chain">Enable Cross-Chain Swap</Label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Your NFT</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your NFT" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nft1">CryptoPunk #1234</SelectItem>
                        <SelectItem value="nft2">Bored Ape #5678</SelectItem>
                        <SelectItem value="nft3">Azuki #9101</SelectItem>
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Desired NFT</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select desired NFT" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nft4">Doodles #2468</SelectItem>
                        <SelectItem value="nft5">Art Blocks #1357</SelectItem>
                        <SelectItem value="nft6">World of Women #3690</SelectItem>
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>
              </div>
              {crossChainEnabled && (
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
                  <Select defaultValue="ethereum">
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="From Chain" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ethereum">Ethereum</SelectItem>
                      <SelectItem value="polygon">Polygon</SelectItem>
                      <SelectItem value="solana">Solana</SelectItem>
                    </SelectContent>
                  </Select>
                  <ArrowLeftRight className="w-6 h-6 hidden sm:block" />
                  <Select defaultValue="polygon">
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="To Chain" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ethereum">Ethereum</SelectItem>
                      <SelectItem value="polygon">Polygon</SelectItem>
                      <SelectItem value="solana">Solana</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
              <div>
                <Label>Set Slippage Tolerance</Label>
                <Slider defaultValue={[0.5]} max={5} step={0.1} className="mt-2" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Initiate Swap</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="wallet">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Your Wallet</CardTitle>
              <CardDescription>Manage your NFTs and tokens across multiple chains.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Wallet className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                <div>
                  <p className="font-semibold">Connected Wallet</p>
                  <p className="text-sm text-gray-500">0x1234...5678</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Balances</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Ethereum</span>
                    <span>2.5 ETH</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Polygon</span>
                    <span>1000 MATIC</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Solana</span>
                    <span>50 SOL</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Your NFTs</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <Card key={i}>
                      <CardContent className="p-2">
                        <img
                          src={`/placeholder.svg?height=100&width=100&text=NFT ${i}`}
                          alt={`NFT ${i}`}
                          className="w-full h-24 object-cover rounded-md"
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

