import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Download, Zap, Menu } from 'lucide-react'

export default function AIChainMarketplace() {
  const [algorithms] = useState([
    { id: 1, name: "NeuralNet Pro", category: "Machine Learning", rating: 4.8, downloads: 1200, price: 0.05 },
    { id: 2, name: "QuickNLP", category: "Natural Language Processing", rating: 4.6, downloads: 980, price: 0.03 },
    { id: 3, name: "VisionAI", category: "Computer Vision", rating: 4.9, downloads: 1500, price: 0.08 },
  ])

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="container mx-auto p-4">
      <header className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
        <h1 className="text-2xl sm:text-3xl font-bold">AIChain Marketplace</h1>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden sm:inline-flex">Connect Wallet</Button>
          <Avatar className="hidden sm:inline-flex">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <Button variant="ghost" size="icon" className="sm:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="sm:hidden mb-6 space-y-2">
          <Button variant="outline" className="w-full">Connect Wallet</Button>
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <span>User Profile</span>
          </div>
        </div>
      )}

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {algorithms.map((algo) => (
          <Card key={algo.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">{algo.name}</CardTitle>
              <CardDescription>{algo.category}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex items-center space-x-2 mb-2">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                <span className="text-sm sm:text-base">{algo.rating}</span>
                <span className="text-xs sm:text-sm text-muted-foreground">({algo.downloads} downloads)</span>
              </div>
              <Badge variant="secondary" className="mb-2 text-xs sm:text-sm">
                {algo.price} ETH
              </Badge>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0 sm:space-x-2">
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                <Download className="w-4 h-4 mr-2" />
                Try Demo
              </Button>
              <Button size="sm" className="w-full sm:w-auto">
                <Zap className="w-4 h-4 mr-2" />
                Purchase
              </Button>
            </CardFooter>
          </Card>
        ))}
      </main>
    </div>
  )
}

