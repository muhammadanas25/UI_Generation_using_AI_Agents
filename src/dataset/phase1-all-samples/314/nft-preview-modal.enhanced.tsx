import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BarChart, Clock, DollarSign, User, Heart, Share2 } from "lucide-react"
import { motion } from "framer-motion"

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)

  const nftData = {
    id: "1234",
    name: "Cosmic Voyager #42",
    description: "A unique digital art piece exploring the vastness of space.",
    image: "/placeholder.svg?height=300&width=300",
    creator: "0x1234...5678",
    owner: "0x9876...5432",
    price: "2.5 ETH",
    previousSales: [
      { date: "2023-05-15", price: "2.1 ETH" },
      { date: "2023-03-01", price: "1.8 ETH" },
      { date: "2022-12-10", price: "1.5 ETH" },
    ],
    attributes: [
      { trait_type: "Background", value: "Deep Space" },
      { trait_type: "Ship Type", value: "Explorer" },
      { trait_type: "Rarity", value: "Legendary" },
    ],
    ownershipHistory: [
      { owner: "0x9876...5432", acquiredDate: "2023-05-15" },
      { owner: "0xabcd...efgh", acquiredDate: "2023-03-01" },
      { owner: "0x1234...5678", acquiredDate: "2022-12-10" },
    ],
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="hover:bg-gray-100 transition">
          Preview NFT
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto p-6 bg-gray-900 text-white rounded-xl shadow-lg">
        <DialogHeader className="flex justify-between items-center mb-4">
          <DialogTitle className="text-2xl font-bold">TradeX NFT Preview - {nftData.name}</DialogTitle>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsFavorited(!isFavorited)}
              className="text-red-500 hover:text-red-600 transition"
            >
              <Heart className={isFavorited ? "w-5 h-5 fill-current" : "w-5 h-5"} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-blue-500 transition">
              <Share2 className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="hover:text-gray-400 transition">
              &times;
            </Button>
          </div>
        </DialogHeader>
        <motion.div
          className="grid gap-6 md:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-6">
            <motion.img
              src={nftData.image}
              alt={nftData.name}
              className="w-full h-auto rounded-xl object-cover shadow-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            />
            <Card className="bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Details</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{nftData.description}</p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="font-medium">Creator:</div>
                  <div>{nftData.creator}</div>
                  <div className="font-medium">Owner:</div>
                  <div>{nftData.owner}</div>
                  <div className="font-medium">Current Price:</div>
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1" />
                    {nftData.price}
                  </div>
                </div>
                <Button variant="primary" className="mt-4 w-full">
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col gap-6">
            <Tabs defaultValue="sales" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gray-700 rounded-lg p-1">
                <TabsTrigger value="sales" className="text-gray-300 hover:text-white transition">
                  Sales
                </TabsTrigger>
                <TabsTrigger value="attributes" className="text-gray-300 hover:text-white transition">
                  Attributes
                </TabsTrigger>
                <TabsTrigger value="history" className="text-gray-300 hover:text-white transition">
                  History
                </TabsTrigger>
              </TabsList>
              <TabsContent value="sales" className="mt-4">
                <Card className="bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">Previous Sales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-48">
                      {nftData.previousSales.map((sale, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{sale.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4" />
                            <span>{sale.price}</span>
                          </div>
                        </div>
                      ))}
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="attributes" className="mt-4">
                <Card className="bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">Attributes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-48">
                      {nftData.attributes.map((attr, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
                          <div className="font-medium">{attr.trait_type}</div>
                          <div>{attr.value}</div>
                        </div>
                      ))}
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="history" className="mt-4">
                <Card className="bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">Ownership History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-48">
                      {nftData.ownershipHistory.map((entry, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{entry.owner}</span>
                          </div>
                          <div>{entry.acquiredDate}</div>
                        </div>
                      ))}
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            <div className="flex space-x-4">
              <Button variant="secondary" className="flex-1 hover:bg-gray-700 transition">
                Share
              </Button>
              <Button variant="primary" className="flex-1 hover:bg-blue-600 transition">
                Buy Now
              </Button>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}