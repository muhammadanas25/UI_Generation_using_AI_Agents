import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Home, DollarSign, PieChart, Wallet, Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function HomePage() {
  const [connected, setConnected] = useState(false)

  const connectWallet = () => {
    // Implement Web3 wallet connection logic here
    setConnected(true)
  }

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">EstateChain</h1>
        <div className="flex items-center space-x-2">
          <Button onClick={connectWallet} className="hidden md:inline-flex">
            {connected ? 'Wallet Connected' : 'Connect Wallet'}
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-4">
                <Button onClick={connectWallet} className="w-full">
                  {connected ? 'Wallet Connected' : 'Connect Wallet'}
                </Button>
                <Button variant="outline" className="w-full">Properties</Button>
                <Button variant="outline" className="w-full">My Portfolio</Button>
                <Button variant="outline" className="w-full">Trade</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <Tabs defaultValue="properties" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="properties">Properties</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="trade">Trade</TabsTrigger>
        </TabsList>
        <TabsContent value="properties">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">Luxury Apartment {i}</CardTitle>
                  <CardDescription>New York, NY</CardDescription>
                </CardHeader>
                <CardContent>
                  <img src={`/placeholder.svg?height=200&width=400`} alt={`Property ${i}`} className="w-full h-48 object-cover mb-4" />
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
                    <span className="flex items-center"><DollarSign className="w-4 h-4 mr-1" /> 1,000,000</span>
                    <span className="flex items-center"><PieChart className="w-4 h-4 mr-1" /> 1000 tokens</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="portfolio">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">My Portfolio</CardTitle>
              <CardDescription>Your tokenized property holdings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
                    <span>Luxury Apartment {i}</span>
                    <span className="flex items-center"><PieChart className="w-4 h-4 mr-1" /> 100 tokens</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="trade">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Trade Tokens</CardTitle>
              <CardDescription>Buy or sell property tokens</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label htmlFor="property" className="block text-sm font-medium text-gray-700 mb-1">Select Property</label>
                  <select id="property" className="w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    <option>Luxury Apartment 1</option>
                    <option>Luxury Apartment 2</option>
                    <option>Luxury Apartment 3</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">Amount of Tokens</label>
                  <Input type="number" id="amount" placeholder="Enter amount" />
                </div>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                  <Button className="w-full">Buy</Button>
                  <Button className="w-full" variant="outline">Sell</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

