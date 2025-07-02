import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Search, ShoppingCart, Wallet } from 'lucide-react'

export default function AIMarket() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <Brain className="h-6 w-6" />
            <h1 className="text-2xl font-bold">AIMarket</h1>
          </div>
          <nav className="w-full sm:w-auto">
            <ul className="flex flex-wrap justify-center sm:space-x-4">
              <li className="w-full sm:w-auto"><Button variant="ghost" className="w-full sm:w-auto">Explore</Button></li>
              <li className="w-full sm:w-auto"><Button variant="ghost" className="w-full sm:w-auto">Sell</Button></li>
              <li className="w-full sm:w-auto"><Button variant="ghost" className="w-full sm:w-auto">My Models</Button></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon">
              <ShoppingCart className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Wallet className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Featured AI Model</h2>
          <Card>
            <CardHeader>
              <CardTitle>SuperNLP 3000</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Advanced natural language processing model with multi-language support and sentiment analysis.</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full sm:w-auto">View Details</Button>
            </CardFooter>
          </Card>
        </section>

        <section>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-4 sm:space-y-0">
            <h2 className="text-xl sm:text-2xl font-bold">AI Models for Sale</h2>
            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <Input placeholder="Search models..." className="w-full sm:w-auto" />
              <Button size="icon" variant="outline">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full flex-wrap">
              <TabsTrigger value="all" className="flex-grow">All</TabsTrigger>
              <TabsTrigger value="nlp" className="flex-grow">NLP</TabsTrigger>
              <TabsTrigger value="computer-vision" className="flex-grow">Computer Vision</TabsTrigger>
              <TabsTrigger value="generative" className="flex-grow">Generative</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i}>
                    <CardHeader>
                      <CardTitle>AI Model #{i}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Description of AI Model #{i}</p>
                      <p className="font-bold mt-2">Price: 0.5 ETH</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">Buy Now</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-2">About AIMarket</h3>
              <p className="text-sm text-gray-600">Decentralized marketplace for AI model NFTs</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Quick Links</h3>
              <ul className="text-sm text-gray-600">
                <li><a href="#" className="hover:underline">FAQ</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Connect</h3>
              <ul className="text-sm text-gray-600">
                <li><a href="#" className="hover:underline">Twitter</a></li>
                <li><a href="#" className="hover:underline">Discord</a></li>
                <li><a href="#" className="hover:underline">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

