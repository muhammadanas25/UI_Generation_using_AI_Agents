import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Compass, Globe, User, Menu } from 'lucide-react'

export default function TravelBlog() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-primary">NomadDiaries</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link href="#" className="text-gray-600 hover:text-primary">Home</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary">About</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary">Destinations</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary">Contact</Link></li>
            </ul>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8">
        <section className="mb-8 md:mb-12">
          <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <CardContent className="p-4 md:p-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Welcome to NomadDiaries</h2>
              <p className="text-lg md:text-xl">Embark on a journey of solo adventures and digital nomad lifestyle.</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Featured Post</h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">10 Must-Visit Hidden Gems for Solo Travelers</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="/placeholder.svg?height=300&width=600"
                alt="Hidden travel destinations"
                className="w-full h-48 md:h-64 object-cover rounded-md mb-4"
              />
              <p className="text-sm md:text-base text-gray-600">Discover breathtaking locations off the beaten path that are perfect for solo adventures...</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full md:w-auto">Read More</Button>
            </CardFooter>
          </Card>
        </section>

        <section className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-base md:text-lg">
                  <User className="w-5 h-5 mr-2" />
                  Solo Travel Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Solo traveler"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="font-semibold mb-2 text-sm md:text-base">How to Make Friends While Traveling Solo</h3>
                <p className="text-xs md:text-sm text-gray-600">Learn the best ways to connect with fellow travelers and locals on your solo journey.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Read More</Button>
              </CardFooter>
            </Card>

            <Card className="mt-6 md:mt-0">
              <CardHeader>
                <CardTitle className="flex items-center text-base md:text-lg">
                  <Globe className="w-5 h-5 mr-2" />
                  Digital Nomad Guides
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Digital nomad workspace"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="font-semibold mb-2 text-sm md:text-base">Top 5 Co-working Spaces in Southeast Asia</h3>
                <p className="text-xs md:text-sm text-gray-600">Discover the best places to work and network as a digital nomad in Southeast Asia.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Read More</Button>
              </CardFooter>
            </Card>

            <Card className="mt-6 lg:mt-0">
              <CardHeader>
                <CardTitle className="flex items-center text-base md:text-lg">
                  <Compass className="w-5 h-5 mr-2" />
                  Destination Inspiration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Scenic destination"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="font-semibold mb-2 text-sm md:text-base">Why You Should Visit Patagonia This Year</h3>
                <p className="text-xs md:text-sm text-gray-600">Explore the breathtaking landscapes and unique experiences Patagonia has to offer.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Read More</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Subscribe to Our Newsletter</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm md:text-base">Stay updated with the latest travel tips, destination guides, and nomad life hacks!</p>
              <form className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                <Input type="email" placeholder="Enter your email" className="flex-grow" />
                <Button type="submit" className="w-full md:w-auto">Subscribe</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6 md:py-8 mt-8">
        <div className="container mx-auto px-4 text-center text-sm md:text-base">
          <p>&copy; {new Date().getFullYear()} NomadDiaries. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

