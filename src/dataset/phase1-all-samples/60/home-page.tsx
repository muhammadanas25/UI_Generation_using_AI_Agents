import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Utensils, ShoppingBag, Heart, Instagram, Twitter, Facebook } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Leaf className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">VeganVibes</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Recipes
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Reviews
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Living Tips
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-green-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to VeganVibes
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Discover delicious plant-based recipes, honest vegan product reviews, and tips for a cruelty-free lifestyle.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Latest Recipes</Button>
                <Button variant="outline">About Us</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Latest Posts</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Creamy Vegan Pasta</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Indulge in this rich and creamy pasta dish that's completely dairy-free!</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Read More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Best Vegan Cheese Brands</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We've taste-tested the top vegan cheese brands so you don't have to!</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Read More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Eco-Friendly Cleaning Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Learn how to keep your home clean and green with these simple tips.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Read More</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 items-center">
              <div className="flex flex-col justify-center space-y-8 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Our Content</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                    Dive into our curated sections for all your vegan needs.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 mx-auto max-w-5xl">
                <Card className="w-full md:w-1/3">
                  <CardHeader>
                    <Utensils className="w-12 h-12 mb-4" />
                    <CardTitle>Recipes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Discover delicious plant-based recipes for every meal and occasion.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">View Recipes</Button>
                  </CardFooter>
                </Card>
                <Card className="w-full md:w-1/3">
                  <CardHeader>
                    <ShoppingBag className="w-12 h-12 mb-4" />
                    <CardTitle>Product Reviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Honest reviews of vegan products to help you make informed choices.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">Read Reviews</Button>
                  </CardFooter>
                </Card>
                <Card className="w-full md:w-1/3">
                  <CardHeader>
                    <Heart className="w-12 h-12 mb-4" />
                    <CardTitle>Living Tips</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Practical advice for embracing a cruelty-free and sustainable lifestyle.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">Get Tips</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 VeganVibes. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link href="#"><Instagram className="w-5 h-5" /></Link>
          <Link href="#"><Twitter className="w-5 h-5" /></Link>
          <Link href="#"><Facebook className="w-5 h-5" /></Link>
        </div>
      </footer>
    </div>
  )
}