import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { WalletIcon, Search, Bell } from 'lucide-react'

function CountdownTimer({ endTime }: { endTime: Date }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(endTime))

  function getTimeLeft(endTime: Date) {
    const total = endTime.getTime() - Date.now()
    const seconds = Math.floor((total / 1000) % 60)
    const minutes = Math.floor((total / 1000 / 60) % 60)
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
    const days = Math.floor(total / (1000 * 60 * 60 * 24))
    return { days, hours, minutes, seconds }
  }

  useState(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(endTime))
    }, 1000)
    return () => clearInterval(timer)
  }, [endTime])

  return (
    <div className="flex gap-2 text-sm font-mono">
      <span>{timeLeft.days}d</span>
      <span>{timeLeft.hours}h</span>
      <span>{timeLeft.minutes}m</span>
      <span>{timeLeft.seconds}s</span>
    </div>
  )
}

export default function Component() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl font-bold">AuctionX</h1>
            <nav>
              <ul className="flex gap-4">
                <li><a href="#" className="text-sm font-medium hover:text-primary">Explore</a></li>
                <li><a href="#" className="text-sm font-medium hover:text-primary">Create</a></li>
                <li><a href="#" className="text-sm font-medium hover:text-primary">About</a></li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Input type="search" placeholder="Search auctions" className="w-64" />
            <Button size="icon" variant="ghost">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button>
              <WalletIcon className="mr-2 h-4 w-4" /> Connect Wallet
            </Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Featured Auction</h2>
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-square bg-muted relative">
                <img
                  alt="Featured NFT"
                  className="object-cover"
                  height="600"
                  src="/placeholder.svg?height=600&width=600"
                  style={{
                    aspectRatio: "600/600",
                    objectFit: "cover",
                  }}
                  width="600"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Cosmic Harmony #42</h3>
                <p className="text-muted-foreground mb-4">
                  A mesmerizing piece that blends the cosmic with the terrestrial, created by renowned digital artist Stella Nova.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Current Bid</div>
                    <div className="text-2xl font-bold">12.5 ETH</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Auction Ends In</div>
                    <CountdownTimer endTime={new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)} />
                  </div>
                </div>
                <Button className="w-full">Place Bid</Button>
              </div>
            </div>
          </Card>
        </section>
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Ongoing Auctions</h2>
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="nft">NFTs</TabsTrigger>
                <TabsTrigger value="tokens">Tokens</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Card key={i}>
                <CardHeader className="p-0">
                  <div className="aspect-square bg-muted relative">
                    <img
                      alt={`Auction item ${i + 1}`}
                      className="object-cover"
                      height="300"
                      src={`/placeholder.svg?height=300&width=300&text=Item ${i + 1}`}
                      style={{
                        aspectRatio: "300/300",
                        objectFit: "cover",
                      }}
                      width="300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2">Digital Masterpiece #{i + 1}</CardTitle>
                  <div className="flex justify-between items-center text-sm">
                    <span>Current Bid: {(Math.random() * 10).toFixed(2)} ETH</span>
                    <CountdownTimer endTime={new Date(Date.now() + Math.random() * 5 * 24 * 60 * 60 * 1000)} />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Bid Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}