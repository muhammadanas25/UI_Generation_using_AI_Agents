import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Home, DollarSign, PieChart, Wallet, User, Settings, Search, Plus, RefreshCcw } from 'lucide-react'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function HomePage() {
  const [connected, setConnected] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState(null)

  const connectWallet = () => {
    // Implement Web3 wallet connection logic here
    setConnected(true)
    toast.success("Wallet connected successfully!")
  }

  const properties = [
    { id: 1, name: 'Luxury Apartment 1', location: 'New York, NY', price: '1,000,000', tokens: '1000', image: '/property1.jpg' },
    { id: 2, name: 'Modern Villa', location: 'Los Angeles, CA', price: '2,500,000', tokens: '2500', image: '/property2.jpg' },
    { id: 3, name: 'Cozy Condo', location: 'Miami, FL', price: '750,000', tokens: '750', image: '/property3.jpg' },
    { id: 4, name: 'Beachside Bungalow', location: 'San Diego, CA', price: '1,800,000', tokens: '1800', image: '/property4.jpg' },
    { id: 5, name: 'Downtown Loft', location: 'Chicago, IL', price: '950,000', tokens: '950', image: '/property5.jpg' },
    { id: 6, name: 'Suburban House', location: 'Austin, TX', price: '1,200,000', tokens: '1200', image: '/property6.jpg' },
  ]

  const handleViewDetails = (property) => {
    setSelectedProperty(property)
  }

  const handleCloseDetails = () => {
    setSelectedProperty(null)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <ToastContainer />
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Home className="w-6 h-6 text-indigo-600" />
            <h1 className="text-2xl font-bold text-indigo-600">EstateChain</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="relative">
              <Search className="w-5 h-5 mr-2" />
              <span>Search</span>
            </Button>
            <Button variant="ghost">
              <User className="w-5 h-5 mr-2" />
              <span>Profile</span>
            </Button>
            <Button variant="ghost">
              <Settings className="w-5 h-5 mr-2" />
              <span>Settings</span>
            </Button>
            <Button onClick={connectWallet} className="flex items-center">
              <Wallet className="w-5 h-5 mr-2" />
              {connected ? 'Wallet Connected' : 'Connect Wallet'}
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <Tabs defaultValue="properties" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="properties" className="flex items-center space-x-2">
              <Home className="w-4 h-4" />
              <span>Properties</span>
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="flex items-center space-x-2">
              <PieChart className="w-4 h-4" />
              <span>My Portfolio</span>
            </TabsTrigger>
            <TabsTrigger value="trade" className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4" />
              <span>Trade</span>
            </TabsTrigger>
            <TabsTrigger value="activities" className="flex items-center space-x-2">
              <RefreshCcw className="w-4 h-4" />
              <span>Activities</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="properties">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Available Properties</h2>
              <Button className="flex items-center" variant="primary">
                <Plus className="w-4 h-4 mr-2" />
                Add New Property
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <Card key={property.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="relative">
                    <img src={property.image} alt={property.name} className="w-full h-48 object-cover rounded-t-md" />
                    <div className="absolute top-2 left-2 bg-indigo-600 text-white px-2 py-1 rounded">
                      <span>Tokenized</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <CardTitle className="text-lg font-bold">{property.name}</CardTitle>
                    <CardDescription className="text-sm text-gray-600">{property.location}</CardDescription>
                    <div className="flex justify-between items-center mt-4">
                      <span className="flex items-center text-indigo-600">
                        <DollarSign className="w-4 h-4 mr-1" />
                        {property.price}
                      </span>
                      <span className="flex items-center text-green-600">
                        <PieChart className="w-4 h-4 mr-1" />
                        {property.tokens} tokens
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => handleViewDetails(property)} className="w-full transition-transform transform hover:scale-105">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="portfolio">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">My Portfolio</h2>
              <Button className="flex items-center" variant="secondary">
                <RefreshCcw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
            </div>
            <Card className="p-4">
              <CardHeader>
                <CardTitle>Your Tokenized Holdings</CardTitle>
                <CardDescription>Overview of your property investments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Luxury Apartment {i}</span>
                      <span className="flex items-center text-green-600">
                        <PieChart className="w-4 h-4 mr-1" />
                        100 tokens
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Manage Portfolio</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="trade">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Trade Tokens</h2>
              <Button className="flex items-center" variant="secondary">
                <RefreshCcw className="w-4 h-4 mr-2" />
                Refresh Market
              </Button>
            </div>
            <Card className="p-4">
              <CardHeader>
                <CardTitle>Buy or Sell Property Tokens</CardTitle>
                <CardDescription>Participate in the real estate market</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="property" className="block text-sm font-medium text-gray-700">Select Property</label>
                    <select id="property" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      {properties.map((property) => (
                        <option key={property.id}>{property.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount of Tokens</label>
                    <Input type="number" id="amount" placeholder="Enter amount" className="mt-1" />
                  </div>
                  <div className="flex space-x-4">
                    <Button className="w-full" variant="primary">Buy</Button>
                    <Button className="w-full" variant="outline" color="red">Sell</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="activities">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recent Activities</h2>
              <Button className="flex items-center" variant="ghost">
                <RefreshCcw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
            </div>
            <Card className="p-4">
              <CardHeader>
                <CardTitle>Your Recent Transactions</CardTitle>
                <CardDescription>Stay updated with your trading activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Bought 100 tokens of Luxury Apartment {i}</span>
                      <span className="text-green-600">+ $10,000</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View All Activities</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {selectedProperty && (
        <Dialog open={true} onOpenChange={handleCloseDetails}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedProperty.name}</DialogTitle>
              <DialogDescription>
                Located in {selectedProperty.location}. Total Price: ${selectedProperty.price}. Total Tokens: {selectedProperty.tokens}.
              </DialogDescription>
            </DialogHeader>
            <img src={selectedProperty.image} alt={selectedProperty.name} className="w-full h-64 object-cover rounded-md mb-4" />
            <div className="space-y-4">
              <p className="text-gray-700">Detailed information about the property will go here. You can include features, investment potential, location advantages, and more to provide users with comprehensive insights.</p>
              <Button className="w-full">Invest Now</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}