import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Star, Download, Zap, Filter, Menu } from 'lucide-react'

export default function AIChainMarketplace() {
  const [algorithms] = useState([
    { id: 1, name: "NeuralNet Pro", category: "Machine Learning", rating: 4.8, downloads: 1200, price: 0.05, image: '/images/neuralnetpro.png' },
    { id: 2, name: "QuickNLP", category: "Natural Language Processing", rating: 4.6, downloads: 980, price: 0.03, image: '/images/quicknlp.png' },
    { id: 3, name: "VisionAI", category: "Computer Vision", rating: 4.9, downloads: 1500, price: 0.08, image: '/images/visionai.png' },
  ])

  const [search, setSearch] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const filteredAlgorithms = algorithms.filter(algo =>
    algo.name.toLowerCase().includes(search.toLowerCase()) ||
    algo.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="container mx-auto p-4 sm:p-6 bg-gray-100 min-h-screen">
      <header className="flex flex-col space-y-4 mb-6 sm:mb-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <h1 className="text-2xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">AIChain</h1>
            <Badge variant="outline" className="hidden sm:inline-flex">Beta</Badge>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button variant="outline" size="icon" className="sm:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="w-5 h-5" />
            </Button>
            <Button variant="secondary" className="hidden sm:inline-flex">Connect Wallet</Button>
            <Avatar className="cursor-pointer transition-transform hover:scale-110">
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className={`flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 ${mobileMenuOpen ? '' : 'hidden sm:flex'}`}>
          <Input
            placeholder="Search algorithms..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-64"
            icon={<Search className="w-5 h-5 text-muted-foreground" />}
          />
          <Button variant="outline" size="icon">
            <Filter className="w-5 h-5" />
          </Button>
          <Button variant="secondary" className="w-full sm:hidden">Connect Wallet</Button>
        </div>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredAlgorithms.map((algo) => (
          <Card key={algo.id} className="flex flex-col hover:shadow-lg sm:hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="relative p-0">
              <img src={algo.image} alt={algo.name} className="w-full h-32 sm:h-40 object-cover rounded-t-lg" />
              <Badge variant="secondary" className="absolute top-2 left-2 text-xs sm:text-sm">
                {algo.category}
              </Badge>
            </CardHeader>
            <CardContent className="flex-grow p-4">
              <CardTitle className="text-lg sm:text-xl font-semibold">{algo.name}</CardTitle>
              <div className="flex items-center space-x-2 my-2">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                <span className="font-medium text-sm sm:text-base">{algo.rating}</span>
                <span className="text-xs sm:text-sm text-muted-foreground">({algo.downloads} downloads)</span>
              </div>
              <Badge variant="secondary" className="mb-2 text-xs sm:text-sm">
                {algo.price} ETH
              </Badge>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Optimized AI algorithm for {algo.category.toLowerCase()}, delivering top performance and reliability.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between mt-2 sm:mt-4 p-4">
              <Button variant="outline" size="sm" className="flex items-center text-xs sm:text-sm">
                <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Try Demo
              </Button>
              <Button size="sm" className="flex items-center bg-emerald-500 hover:bg-emerald-600 text-white text-xs sm:text-sm">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Purchase
              </Button>
            </CardFooter>
          </Card>
        ))}
      </main>
    </div>
  )
}

