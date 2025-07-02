import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Instagram, Twitter, Facebook } from 'lucide-react'

export default function Component() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-primary text-primary-foreground py-4 sm:py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">FoodieFaves</h1>
          <nav className="flex flex-wrap gap-2">
            <Button variant="secondary">Home</Button>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Contact</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Featured Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>The Ultimate Pizza Guide</CardTitle>
                <CardDescription>Discover the best pizzerias in town</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Pizza"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="line-clamp-3">From classic Margherita to gourmet toppings, we've got you covered with our comprehensive guide to the best pizza joints in the city.</p>
              </CardContent>
              <CardFooter>
                <Button>Read More</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sushi Sensation</CardTitle>
                <CardDescription>A journey through Japan's finest sushi</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Sushi"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="line-clamp-3">Embark on a culinary adventure as we explore the art of sushi-making and the best places to enjoy this Japanese delicacy.</p>
              </CardContent>
              <CardFooter>
                <Button>Read More</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Parisian Pastry Paradise</CardTitle>
                <CardDescription>Sweet treats from the City of Light</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Pastries"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="line-clamp-3">Indulge in the heavenly world of French pastries as we take you through the charming patisseries of Paris.</p>
              </CardContent>
              <CardFooter>
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <Tabs defaultValue="reviews" className="mb-12">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
            <TabsTrigger value="reviews">Food Reviews</TabsTrigger>
            <TabsTrigger value="guides">Restaurant Guides</TabsTrigger>
            <TabsTrigger value="recipes">Travel-Inspired Recipes</TabsTrigger>
          </TabsList>
          <TabsContent value="reviews" className="mt-6">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Latest Food Reviews</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-blue-600 hover:underline">Farm-to-Table Delight at Green Harvest</a>
                <p className="text-sm text-muted-foreground">A fresh take on sustainable dining in the heart of the city.</p>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">Spice Route: Indian Fusion at Taj Mahal</a>
                <p className="text-sm text-muted-foreground">Experience a journey of flavors with modern twists on classic Indian dishes.</p>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">Seafood Extravaganza at Ocean's Bounty</a>
                <p className="text-sm text-muted-foreground">Dive into the freshest catches and innovative seafood preparations.</p>
              </li>
            </ul>
          </TabsContent>
          <TabsContent value="guides" className="mt-6">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Popular Restaurant Guides</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-blue-600 hover:underline">Top 10 Brunch Spots in New York City</a>
                <p className="text-sm text-muted-foreground">Start your day right with these amazing brunch destinations.</p>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">Hidden Gems: Off-the-Beaten-Path Eateries in London</a>
                <p className="text-sm text-muted-foreground">Discover the local favorites tucked away in London's charming neighborhoods.</p>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">Vegan-Friendly Restaurants in Los Angeles</a>
                <p className="text-sm text-muted-foreground">Explore the best plant-based dining options in the City of Angels.</p>
              </li>
            </ul>
          </TabsContent>
          <TabsContent value="recipes" className="mt-6">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Travel-Inspired Recipes</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-blue-600 hover:underline">Authentic Thai Green Curry</a>
                <p className="text-sm text-muted-foreground">Bring the flavors of Bangkok to your kitchen with this aromatic curry recipe.</p>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">Italian Countryside Risotto</a>
                <p className="text-sm text-muted-foreground">Master the art of creamy risotto with this Tuscan-inspired dish.</p>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">Mexican Street Corn (Elote)</a>
                <p className="text-sm text-muted-foreground">Recreate the popular Mexican street food with this easy-to-follow recipe.</p>
              </li>
            </ul>
          </TabsContent>
        </Tabs>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Subscribe to Our Newsletter</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input type="email" placeholder="Enter your email" className="max-w-sm" />
            <Button className="w-full sm:w-auto">Subscribe</Button>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-secondary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-center sm:text-left mb-4 sm:mb-0">&copy; 2023 FoodieFaves. All rights reserved.</p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

