import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plane, Search, ShoppingBag } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function ProductPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Plane className="h-6 w-6" />
            <span className="text-2xl font-bold">TravelEssentials</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="#" className="hover:underline">
              Suitcases
            </Link>
            <Link href="#" className="hover:underline">
              Backpacks
            </Link>
            <Link href="#" className="hover:underline">
              Gadgets
            </Link>
            <Link href="#" className="hover:underline">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <form className="hidden md:flex items-center">
              <Input type="search" placeholder="Search..." className="w-64" />
              <Button type="submit" size="icon" variant="ghost">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
            <Button size="icon" variant="ghost">
              <ShoppingBag className="h-6 w-6" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Travel in Style and Comfort</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Discover our curated collection of premium travel accessories for your next adventure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Featured Suitcase</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Sleek rolling suitcase"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-md"
                />
              </CardContent>
              <CardFooter>
                <Button className="w-full">Shop Suitcases</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Top-rated Backpack</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Durable travel backpack"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-md"
                />
              </CardContent>
              <CardFooter>
                <Button className="w-full">Shop Backpacks</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Essential Gadgets</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Travel gadgets collection"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-md"
                />
              </CardContent>
              <CardFooter>
                <Button className="w-full">Shop Gadgets</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Our Products</h2>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="suitcases">Suitcases</TabsTrigger>
              <TabsTrigger value="backpacks">Backpacks</TabsTrigger>
              <TabsTrigger value="gadgets">Gadgets</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[...Array(8)].map((_, i) => (
                  <Card key={i}>
                    <CardContent className="p-4">
                      <Image
                        src={`/placeholder.svg?height=200&width=200&text=Product ${i + 1}`}
                        alt={`Product ${i + 1}`}
                        width={200}
                        height={200}
                        className="w-full h-auto rounded-md mb-2"
                      />
                      <h3 className="font-semibold">Product {i + 1}</h3>
                      <p className="text-sm text-muted-foreground">$99.99</p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="outline" size="sm" className="w-full">
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="suitcases">
              <p>Suitcase products will be displayed here.</p>
            </TabsContent>
            <TabsContent value="backpacks">
              <p>Backpack products will be displayed here.</p>
            </TabsContent>
            <TabsContent value="gadgets">
              <p>Gadget products will be displayed here.</p>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <footer className="bg-muted">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About TravelEssentials</h3>
              <p className="text-sm text-muted-foreground">
                We provide high-quality travel accessories to make your journeys comfortable and stylish.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <form className="flex">
                <Input type="email" placeholder="Your email" className="rounded-r-none" />
                <Button type="submit" className="rounded-l-none">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-muted-foreground/20 text-center text-sm text-muted-foreground">
            © 2024 TravelEssentials. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

