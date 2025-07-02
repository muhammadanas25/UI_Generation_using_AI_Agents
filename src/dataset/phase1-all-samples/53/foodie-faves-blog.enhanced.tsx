import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Instagram, Twitter, Facebook, ChevronRight, Search, Menu, X } from 'lucide-react'
import Image from "next/image"
import { useState } from "react"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-foreground">
      <header className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-4 shadow-lg fixed w-full z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h1 className="text-2xl sm:text-3xl font-bold animate-pulse">FoodieFaves</h1>
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 md:top-auto bg-indigo-600 md:bg-transparent p-4 md:p-0 space-y-2 md:space-y-0 md:space-x-4`}>
            <Button variant="link" className="hover:text-yellow-300 transition-colors duration-300">Home</Button>
            <Button variant="link" className="hover:text-yellow-300 transition-colors duration-300">About</Button>
            <Button variant="link" className="hover:text-yellow-300 transition-colors duration-300">Contact</Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Search className="h-5 w-5" />
              <span>Search</span>
            </Button>
          </nav>
          <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-20 sm:py-24">
        <section className="mb-12 sm:mb-16">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fadeIn">Discover Your Next Food Adventure</h2>
              <p className="text-lg text-muted-foreground mb-6">Explore the best food reviews, restaurant guides, and travel-inspired recipes to satisfy your culinary cravings.</p>
              <Button variant="primary" size="lg" className="animate-bounce">Get Started</Button>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="/hero-image.svg"
                alt="Delicious Food"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Featured Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "The Ultimate Pizza Guide", description: "Discover the best pizzerias in town", image: "/pizza.jpg" },
              { title: "Sushi Sensation", description: "A journey through Japan's finest sushi", image: "/sushi.jpg" },
              { title: "Parisian Pastry Paradise", description: "Sweet treats from the City of Light", image: "/pastries.jpg" }
            ].map((post, index) => (
              <Card key={index} className="hover:shadow-2xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" className="flex items-center space-x-2">
                    <span>Read More</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <Tabs defaultValue="reviews" className="mb-12">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 bg-white rounded-lg shadow p-1">
              <TabsTrigger value="reviews" className="text-center">Food Reviews</TabsTrigger>
              <TabsTrigger value="guides" className="text-center">Restaurant Guides</TabsTrigger>
              <TabsTrigger value="recipes" className="text-center">Travel-Inspired Recipes</TabsTrigger>
            </TabsList>
            {["reviews", "guides", "recipes"].map((tab) => (
              <TabsContent key={tab} value={tab} className="mt-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 animate-fadeIn">
                  {tab === "reviews" ? "Latest Food Reviews" :
                    tab === "guides" ? "Popular Restaurant Guides" :
                      "Travel-Inspired Recipes"}
                </h3>
                <ul className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="p-4 bg-white rounded-lg shadow hover:bg-gray-50 transition-colors duration-300">
                      <a href="#" className="text-blue-600 hover:underline">Lorem ipsum dolor sit amet</a>
                      <p className="text-sm text-muted-foreground">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Subscribe to Our Newsletter</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input type="email" placeholder="Enter your email" className="max-w-sm" />
            <Button variant="primary" className="w-full sm:w-auto">Subscribe</Button>
          </div>
        </section>

        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Latest Recipes</h2>
          <div className="carousel relative">
            <div className="flex overflow-x-auto space-x-6 snap-mandatory snap-x pb-4">
              {[
                { title: "Thai Green Curry", image: "/thai-curry.jpg" },
                { title: "Italian Risotto", image: "/risotto.jpg" },
                { title: "Mexican Elote", image: "/elote.jpg" }
              ].map((recipe, index) => (
                <Card key={index} className="min-w-[250px] sm:min-w-[300px] snap-center">
                  <CardHeader>
                    <CardTitle>{recipe.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <p className="line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="secondary">View Recipe</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">&copy; 2023 FoodieFaves. All rights reserved.</p>
            <div className="flex space-x-4">
              {[Instagram, Twitter, Facebook].map((Icon, index) => (
                <Button key={index} variant="ghost" size="icon" className="hover:text-yellow-300 transition-colors duration-300">
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{Icon.name}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

