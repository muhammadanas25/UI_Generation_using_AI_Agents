import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Laptop, Smartphone, Headphones, ChevronRight, Search, Menu, X, Mail, Twitter, Facebook, Instagram } from "lucide-react"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="fixed w-full bg-white shadow z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-primary transition-transform transform hover:scale-105">
            GadgetHub
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/reviews" className="text-gray-700 hover:text-primary transition-colors">
              Reviews
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-primary transition-colors">
              News
            </Link>
            <Link href="/guides" className="text-gray-700 hover:text-primary transition-colors">
              How-To Guides
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <form className="flex items-center">
              <Input className="w-60" placeholder="Search articles..." type="search" />
              <Button type="submit" size="icon" variant="ghost" className="ml-2 hover:bg-gray-100 transition">
                <Search className="h-5 w-5 text-gray-600" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
            <Button variant="primary">Subscribe</Button>
          </div>
          <div className="md:hidden flex items-center">
            <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white shadow-md">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <Link href="/reviews" className="block text-gray-700 hover:text-primary transition-colors">
                Reviews
              </Link>
              <Link href="/news" className="block text-gray-700 hover:text-primary transition-colors">
                News
              </Link>
              <Link href="/guides" className="block text-gray-700 hover:text-primary transition-colors">
                How-To Guides
              </Link>
              <form className="flex items-center mt-2">
                <Input className="w-full" placeholder="Search articles..." type="search" />
                <Button type="submit" size="icon" variant="ghost" className="ml-2 hover:bg-gray-100 transition">
                  <Search className="h-5 w-5 text-gray-600" />
                  <span className="sr-only">Search</span>
                </Button>
              </form>
              <Button variant="primary" className="w-full">Subscribe</Button>
            </div>
          </nav>
        )}
      </header>
      <main className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <section className="relative group">
              <img
                src="/placeholder.svg?height=600&width=1200"
                alt="Latest smartphone models"
                className="w-full h-96 object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-4xl font-bold mb-2">Featured Article</h2>
                <Card className="bg-transparent shadow-none">
                  <CardHeader>
                    <CardTitle className="text-2xl">The Future of Smartphones: What to Expect in 2024</CardTitle>
                    <CardDescription>
                      From foldable screens to AI-powered cameras, we explore the upcoming trends in smartphone technology.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="primary" className="flex items-center">
                      Read More <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </section>
            <Tabs defaultValue="reviews" className="w-full">
              <TabsList className="grid grid-cols-3 bg-white rounded-lg shadow mb-4">
                <TabsTrigger value="reviews" className="flex justify-center items-center space-x-2">
                  <Laptop className="h-5 w-5" /> Product Reviews
                </TabsTrigger>
                <TabsTrigger value="news" className="flex justify-center items-center space-x-2">
                  <Smartphone className="h-5 w-5" /> Tech News
                </TabsTrigger>
                <TabsTrigger value="guides" className="flex justify-center items-center space-x-2">
                  <Headphones className="h-5 w-5" /> How-To Guides
                </TabsTrigger>
              </TabsList>
              <TabsContent value="reviews" className="space-y-6">
                <h2 className="text-3xl font-bold">Latest Reviews</h2>
                {["Laptop", "Smartphone", "Headphones"].map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="flex items-center space-x-2">
                      {item === "Laptop" && <Laptop className="h-6 w-6 text-primary" />}
                      {item === "Smartphone" && <Smartphone className="h-6 w-6 text-primary" />}
                      {item === "Headphones" && <Headphones className="h-6 w-6 text-primary" />}
                      <CardTitle className="text-xl">{item} Review: The Best of 2024</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Our in-depth review of the latest {item.toLowerCase()} models on the market.</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="flex items-center">
                        Read Review <ChevronRight className="ml-2 h-5 w-5" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="news" className="space-y-6">
                <h2 className="text-3xl font-bold">Latest Tech News</h2>
                {["AI Breakthrough", "5G Expansion", "Cybersecurity Update"].map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{item}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Stay updated with the latest developments in {item.toLowerCase()}.</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="flex items-center">
                        Read More <ChevronRight className="ml-2 h-5 w-5" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="guides" className="space-y-6">
                <h2 className="text-3xl font-bold">How-To Guides</h2>
                {["Optimize Your PC", "Master Smartphone Photography", "Set Up a Smart Home"].map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{item}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Step-by-step guide to help you {item.toLowerCase()}.</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="flex items-center">
                        View Guide <ChevronRight className="ml-2 h-5 w-5" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
          <aside className="space-y-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>Popular Articles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {["10 Must-Have Apps", "Gaming Laptops Showdown", "Future of Wearables"].map((item, index) => (
                    <li key={index}>
                      <Link href="#" className="flex items-center text-gray-700 hover:text-primary transition-colors">
                        {item}
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>Newsletter</CardTitle>
                <CardDescription>Stay updated with our weekly tech digest</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Enter your email" type="email" required />
                  <Button variant="primary" className="w-full flex items-center justify-center">
                    <Mail className="h-5 w-5 mr-2" /> Subscribe
                  </Button>
                </form>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
              </CardHeader>
              <CardContent className="flex space-x-4">
                <Link href="#" className="text-gray-700 hover:text-primary transition-colors">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-700 hover:text-primary transition-colors">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-700 hover:text-primary transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                    Smartphones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                    Laptops
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                    Gadgets
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                    Email Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                    Advertise
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                    Write for Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <ul className="flex space-x-4">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                    <Facebook className="h-5 w-5" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                    <Instagram className="h-5 w-5" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500">
            © 2024 GadgetHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}