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
import { ArrowLeftRight, Wallet, Search, ExternalLink, Eye, ShoppingCart } from "lucide-react"
import { Tooltip } from "@/components/ui/tooltip"
import Image from "next/image"

export default function Component() {
  const [selectedChain, setSelectedChain] = useState("ethereum")
  const [crossChainEnabled, setCrossChainEnabled] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-b-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-white mb-2 text-center animate-pulse">
          TradeX
        </h1>
        <p className="text-center text-lg text-white opacity-80">
          Decentralized NFT Trading Platform with Cross-Chain Swaps
        </p>
      </header>
      <main className="container mx-auto p-6">
        <Tabs defaultValue="browse" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white dark:bg-gray-700 rounded-lg shadow mb-6">
            <TabsTrigger value="browse" className="flex items-center justify-center space-x-2">
              <Search className="w-5 h-5" />
              <span>Browse NFTs</span>
            </TabsTrigger>
            <TabsTrigger value="trade" className="flex items-center justify-center space-x-2">
              <ArrowLeftRight className="w-5 h-5" />
              <span>Trade</span>
            </TabsTrigger>
            <TabsTrigger value="wallet" className="flex items-center justify-center space-x-2">
              <Wallet className="w-5 h-5" />
              <span>Wallet</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="browse" className="fade-in">
            <Card className="bg-white dark:bg-gray-700 shadow-lg transition-transform transform hover:scale-105">
              <CardHeader>
                <CardTitle className="text-2xl">Browse NFTs</CardTitle>
                <CardDescription className="text-gray-500 dark:text-gray-300">
                  Explore and discover unique NFTs across multiple chains.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                  <Select value={selectedChain} onValueChange={setSelectedChain}>
                    <SelectTrigger className="w-full md:w-[200px]">
                      <SelectValue placeholder="Select chain" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ethereum">Ethereum</SelectItem>
                      <SelectItem value="polygon">Polygon</SelectItem>
                      <SelectItem value="solana">Solana</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="relative w-full">
                    <Input
                      type="text"
                      placeholder="Search NFTs"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                  <Button className="w-full md:w-auto flex items-center space-x-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>Advanced Filters</span>
                  </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <Card key={i} className="hover:shadow-2xl transition-shadow duration-300">
                      <CardContent className="p-4 relative">
                        <Image
                          src={`/placeholder.svg?height=300&width=300&text=NFT+${i}`}
                          alt={`NFT ${i}`}
                          width={300}
                          height={300}
                          className="w-full h-60 object-cover rounded-md mb-4"
                        />
                        <h3 className="font-semibold text-lg">NFT #{i}</h3>
                        <p className="text-sm text-gray-500">0.05 ETH</p>
                        <div className="absolute top-2 right-2 flex space-x-2">
                          <Tooltip content="View Details">
                            <Button variant="ghost" size="icon" className="p-1">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </Tooltip>
                          <Tooltip content="Buy NFT">
                            <Button variant="ghost" size="icon" className="p-1">
                              <ShoppingCart className="w-4 h-4" />
                            </Button>
                          </Tooltip>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="trade" className="fade-in">
            <Card className="bg-white dark:bg-gray-700 shadow-lg transition-transform transform hover:scale-105">
              <CardHeader>
                <CardTitle className="text-2xl">Trade NFTs</CardTitle>
                <CardDescription className="text-gray-500 dark:text-gray-300">
                  Swap your NFTs across different blockchain networks.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Switch
                    id="cross-chain"
                    checked={crossChainEnabled}
                    onCheckedChange={setCrossChainEnabled}
                    className={crossChainEnabled ? "bg-indigo-600" : "bg-gray-300"}
                  />
                  <Label htmlFor="cross-chain" className="cursor-pointer">
                    Enable Cross-Chain Swap
                  </Label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-gray-50 dark:bg-gray-600">
                    <CardHeader>
                      <CardTitle>Your NFT</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Select>
                        <SelectTrigger className="w-full">
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
                  <Card className="bg-gray-50 dark:bg-gray-600">
                    <CardHeader>
                      <CardTitle>Desired NFT</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Select>
                        <SelectTrigger className="w-full">
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
                  <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                    <Select defaultValue="ethereum" className="w-full md:w-1/2">
                      <SelectTrigger>
                        <SelectValue placeholder="From Chain" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ethereum">Ethereum</SelectItem>
                        <SelectItem value="polygon">Polygon</SelectItem>
                        <SelectItem value="solana">Solana</SelectItem>
                      </SelectContent>
                    </Select>
                    <ArrowLeftRight className="w-6 h-6 text-gray-500" />
                    <Select defaultValue="polygon" className="w-full md:w-1/2">
                      <SelectTrigger>
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
                <Button className="w-full transition-transform transform hover:scale-105" variant="primary">
                  Initiate Swap
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="wallet" className="fade-in">
            <Card className="bg-white dark:bg-gray-700 shadow-lg transition-transform transform hover:scale-105">
              <CardHeader>
                <CardTitle className="text-2xl">Your Wallet</CardTitle>
                <CardDescription className="text-gray-500 dark:text-gray-300">
                  Manage your NFTs and tokens across multiple chains.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Wallet className="w-12 h-12 text-indigo-500 animate-pulse" />
                  <div>
                    <p className="font-semibold text-lg">Connected Wallet</p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">0x1234...5678</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Balances</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between p-2 bg-gray-50 dark:bg-gray-600 rounded">
                      <span>Ethereum</span>
                      <span>2.5 ETH</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 dark:bg-gray-600 rounded">
                      <span>Polygon</span>
                      <span>1000 MATIC</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 dark:bg-gray-600 rounded">
                      <span>Solana</span>
                      <span>50 SOL</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Your NFTs</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <Card key={i} className="hover:shadow-2xl transition-shadow duration-300">
                        <CardContent className="p-2 relative">
                          <Image
                            src={`/placeholder.svg?height=150&width=150&text=NFT+${i}`}
                            alt={`NFT ${i}`}
                            width={150}
                            height={150}
                            className="w-full h-36 object-cover rounded-md mb-2"
                          />
                          <div className="absolute top-2 right-2 flex space-x-1">
                            <Tooltip content="View NFT">
                              <Button variant="ghost" size="icon" className="p-1">
                                <Eye className="w-3 h-3" />
                              </Button>
                            </Tooltip>
                            <Tooltip content="Trade NFT">
                              <Button variant="ghost" size="icon" className="p-1">
                                <ArrowLeftRight className="w-3 h-3" />
                              </Button>
                            </Tooltip>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button variant="secondary" className="flex items-center space-x-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>View All NFTs</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}