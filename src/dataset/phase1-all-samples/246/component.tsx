import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Wallet, Search, PaintBrush, ShieldCheck, Zap } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <PaintBrush className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">ArtChain</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Explore
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Create
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Community
          </a>
        </nav>
        <Button className="ml-4" variant="outline">
          <Wallet className="mr-2 h-4 w-4" />
          Connect Wallet
        </Button>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to ArtChain
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover, collect, and sell extraordinary NFTs on the world's first decentralized art marketplace.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Search artworks, collections, or artists" type="search" />
                  <Button type="submit" variant="outline">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Featured Artworks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>Artwork #{i}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      alt={`Artwork #${i}`}
                      className="w-full h-48 object-cover rounded-md"
                      height="200"
                      src={`/placeholder.svg?height=200&width=300`}
                      style={{
                        aspectRatio: "300/200",
                        objectFit: "cover",
                      }}
                      width="300"
                    />
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">By Artist {i}</span>
                    <span className="font-bold">0.{i} ETH</span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Why Choose ArtChain?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Secure Transactions</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our blockchain technology ensures safe and transparent transactions for all users.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Instant Payouts</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Artists receive payments instantly when their artworks are sold.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <PaintBrush className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Creator-First Platform</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We prioritize artists' rights and provide tools to help them thrive in the digital art world.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 ArtChain. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}