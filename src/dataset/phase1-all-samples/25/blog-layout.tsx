import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Search, Instagram, Twitter, Facebook, Menu } from 'lucide-react'

export default function BlogLayout() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-xl md:text-2xl font-bold text-primary">UrbanGardener</span>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link href="/tips" className="text-muted-foreground hover:text-primary">Tips</Link></li>
              <li><Link href="/plants" className="text-muted-foreground hover:text-primary">Plants</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8 flex-grow">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Latest Urban Gardening Tips</h1>
            <div className="grid gap-6">
              {[1, 2, 3].map((post) => (
                <Card key={post} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl">How to Grow Herbs in Small Spaces</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      src="/placeholder.svg?height=200&width=400"
                      alt="Herbs growing in a small container"
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <p className="text-sm md:text-base text-muted-foreground">
                      Discover the secrets to growing a thriving herb garden in your apartment or small urban space.
                      Learn about the best herbs for indoor growing and essential care tips.
                    </p>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button variant="outline">Read More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <aside className="w-full md:w-1/3 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Search</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex w-full items-center space-x-2">
                  <Input type="search" placeholder="Search..." />
                  <Button type="submit" size="icon">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li><Link href="/category/indoor-plants" className="text-muted-foreground hover:text-primary">Indoor Plants</Link></li>
                  <li><Link href="/category/balcony-gardens" className="text-muted-foreground hover:text-primary">Balcony Gardens</Link></li>
                  <li><Link href="/category/vertical-gardening" className="text-muted-foreground hover:text-primary">Vertical Gardening</Link></li>
                  <li><Link href="/category/plant-care" className="text-muted-foreground hover:text-primary">Plant Care</Link></li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    <Instagram className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    <Twitter className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    <Facebook className="h-6 w-6" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>

      <footer className="border-t mt-auto">
        <div className="container mx-auto px-4 py-6 text-center text-sm md:text-base text-muted-foreground">
          © 2023 UrbanGardener. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

