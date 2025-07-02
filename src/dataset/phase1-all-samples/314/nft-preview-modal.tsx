import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BarChart, Clock, DollarSign, User } from "lucide-react"

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)

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
        <Button variant="outline">Preview NFT</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle>NFT Preview - {nftData.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <img
              src={nftData.image}
              alt={nftData.name}
              className="w-full h-auto rounded-lg object-cover"
            />
            <Card>
              <CardHeader>
                <CardTitle>Details</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{nftData.description}</p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <div>Creator:</div>
                  <div className="font-medium">{nftData.creator}</div>
                  <div>Owner:</div>
                  <div className="font-medium">{nftData.owner}</div>
                  <div>Current Price:</div>
                  <div className="font-medium">{nftData.price}</div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col gap-4">
            <Tabs defaultValue="sales" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="sales">Sales</TabsTrigger>
                <TabsTrigger value="attributes">Attributes</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>
              <TabsContent value="sales">
                <Card>
                  <CardHeader>
                    <CardTitle>Previous Sales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[200px]">
                      {nftData.previousSales.map((sale, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
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
              <TabsContent value="attributes">
                <Card>
                  <CardHeader>
                    <CardTitle>Attributes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[200px]">
                      {nftData.attributes.map((attr, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                          <div className="font-medium">{attr.trait_type}</div>
                          <div>{attr.value}</div>
                        </div>
                      ))}
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="history">
                <Card>
                  <CardHeader>
                    <CardTitle>Ownership History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[200px]">
                      {nftData.ownershipHistory.map((entry, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
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
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}