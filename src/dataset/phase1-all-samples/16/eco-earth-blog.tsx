import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardDescription, CardTitle, CardFooter } from "@/components/ui/card"
import { Dumbbell, Utensils, ChevronRight, Facebook, Twitter, Instagram, Menu, X, Leaf, ArrowRight } from 'lucide-react'
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="px-4 lg:px-6 h-14 flex flex-wrap items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-xl sm:text-2xl font-bold text-green-800">FitFocus</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6 mt-2 sm:mt-0 w-full sm:w-auto justify-center sm:justify-end">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Workouts
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Nutrition
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full py-8 sm:py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to FitFocus
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 text-sm sm:text-base md:text-xl">
                  Transform your fitness journey with expert workouts and nutrition tips.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-8 sm:py-12 md:py-24 lg:py-32 bg-green-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 sm:mb-8">Featured Workout</h2>
            <Card className="w-full max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">30-Minute HIIT Blast</CardTitle>
                <CardDescription className="text-sm sm:text-base">Boost your fitness with our latest workout</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base">
                  This high-intensity interval training workout is designed to help you burn calories and build muscle in a short amount of time.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full sm:w-auto">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
        <section className="w-full py-8 sm:py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 sm:mb-8">Recent Workouts & Nutrition Tips</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "The Benefits of Composting",
                  description: "Turn your kitchen scraps into garden gold",
                  category: "Workout",
                },
                {
                  title: "Eco-Friendly Cleaning Products",
                  description: "Clean your home without harming the environment",
                  category: "Nutrition",
                },
                {
                  title: "Sustainable Fashion Brands",
                  description: "Look good while supporting ethical practices",
                  category: "Workout",
                },
              ].map((post, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">{post.title}</CardTitle>
                    <CardDescription className="text-sm">{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary">{post.category}</Badge>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full sm:w-auto">Read More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-8 sm:py-12 md:py-24 lg:py-32 bg-green-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Subscribe to Our Newsletter
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-600 text-sm sm:text-base md:text-xl">
                  Stay updated with the latest eco-friendly tips and product recommendations.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="w-full sm:w-auto">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-600">© 2024 FitFocus. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6 mt-2 sm:mt-0">
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

