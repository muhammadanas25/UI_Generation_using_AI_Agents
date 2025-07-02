import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cube, Lock, ShoppingBag, Tshirt } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function WearChainPlatform() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Tshirt className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">WearChain</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Explore
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Brands
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to WearChain
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  The future of fashion meets blockchain technology. Own, trade, and wear your digital fashion as NFTs.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Explore Collections</Button>
                <Button variant="outline">Connect Wallet</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Featured Collections
            </h2>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="clothing">Clothing</TabsTrigger>
                <TabsTrigger value="accessories">Accessories</TabsTrigger>
                <TabsTrigger value="footwear">Footwear</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i}>
                    <CardHeader>
                      <Image
                        alt={`NFT Collection ${i}`}
                        className="aspect-square object-cover rounded-md"
                        height={300}
                        src={`/placeholder.svg?height=300&width=300`}
                        width={300}
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>Digital Denim #{i}</CardTitle>
                      <CardDescription>By FashionBrand{i}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">View Collection</Button>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <Cube className="h-10 w-10" />
                <h3 className="text-2xl font-bold">NFT-Backed Fashion</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Each piece of clothing is represented by a unique NFT, proving authenticity and ownership on the
                  blockchain.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <ShoppingBag className="h-10 w-10" />
                <h3 className="text-2xl font-bold">Physical & Digital Twins</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Own both the physical garment and its digital counterpart, unlocking new possibilities in fashion.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <Lock className="h-10 w-10" />
                <h3 className="text-2xl font-bold">Secure Ownership</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Blockchain technology ensures your ownership is verifiable and transferable at any time.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join the Fashion Revolution</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Be part of the future of fashion. Sign up for updates and early access to exclusive NFT drops.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 WearChain. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}