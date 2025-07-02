import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Laptop, Smartphone, Headphones, ChevronRight, Search } from 'lucide-react'

export default function Component() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <header className="border-b">
        <div className="container mx-auto px-4 py-3 md:py-6 flex flex-col md:flex-row justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            GadgetHub
          </Link>
          <button className="md:hidden ml-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
          <div className="hidden md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
            <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <Link href="/reviews" className="text-muted-foreground hover:text-primary">
                Reviews
              </Link>
              <Link href="/news" className="text-muted-foreground hover:text-primary">
                News
              </Link>
              <Link href="/guides" className="text-muted-foreground hover:text-primary">
                How-To Guides
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <form className="hidden md:flex items-center">
                <Input className="w-64" placeholder="Search articles..." type="search" />
                <Button type="submit" size="icon" variant="ghost">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </form>
              <Button variant="outline">Subscribe</Button>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 mt-8 md:mt-12">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4">Featured Article</h2>
              <Card>
                <CardContent className="p-0">
                  <img
                    src="/placeholder.svg?height=400&width=800"
                    alt="Latest smartphone models"
                    className="w-full h-48 md:h-64 object-cover"
                  />
                </CardContent>
                <CardHeader>
                  <CardTitle>The Future of Smartphones: What to Expect in 2024</CardTitle>
                  <CardDescription>
                    From foldable screens to AI-powered cameras, we explore the upcoming trends in smartphone technology.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button>Read More</Button>
                </CardFooter>
              </Card>
            </section>
            <Tabs defaultValue="reviews">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-2 md:gap-0">
                <TabsTrigger value="reviews">Product Reviews</TabsTrigger>
                <TabsTrigger value="news">Tech News</TabsTrigger>
                <TabsTrigger value="guides">How-To Guides</TabsTrigger>
              </TabsList>
              <TabsContent value="reviews" className="space-y-4">
                <h2 className="text-2xl font-bold mt-4">Latest Reviews</h2>
                {["Laptop", "Smartphone", "Headphones"].map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        {item === "Laptop" && <Laptop className="mr-2 h-4 w-4" />}
                        {item === "Smartphone" && <Smartphone className="mr-2 h-4 w-4" />}
                        {item === "Headphones" && <Headphones className="mr-2 h-4 w-4" />}
                        {item} Review: The Best of 2024
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Our in-depth review of the latest {item.toLowerCase()} models on the market.</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost">Read Review</Button>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="news" className="space-y-4">
                <h2 className="text-2xl font-bold mt-4">Latest Tech News</h2>
                {["AI Breakthrough", "5G Expansion", "Cybersecurity Update"].map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{item}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Stay updated with the latest developments in {item.toLowerCase()}.</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost">Read More</Button>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="guides" className="space-y-4">
                <h2 className="text-2xl font-bold mt-4">How-To Guides</h2>
                {["Optimize Your PC", "Master Smartphone Photography", "Set Up a Smart Home"].map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{item}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Step-by-step guide to help you {item.toLowerCase()}.</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost">View Guide</Button>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
          <aside className="space-y-8 mt-8 md:mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Popular Articles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["10 Must-Have Apps", "Gaming Laptops Showdown", "Future of Wearables"].map((item, index) => (
                    <li key={index}>
                      <Link href="#" className="text-sm hover:underline flex items-center">
                        {item}
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Newsletter</CardTitle>
                <CardDescription>Stay updated with our weekly tech digest</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-2">
                  <Input placeholder="Enter your email" type="email" />
                  <Button className="w-full">Subscribe</Button>
                </form>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-2">About</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Categories</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Smartphones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Laptops
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Gadgets
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Contact</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Email Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Advertise
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Write for Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Follow Us</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            © 2024 GadgetHub. All rights reserved.
          </div>
        </div>
      </footer>
      <style jsx global>{`
        @media (max-width: 768px) {
          html {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  )
}

