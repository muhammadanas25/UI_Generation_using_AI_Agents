import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Dumbbell, Utensils, ChefHat, Search, Facebook, Twitter, Instagram, Menu, X } from 'lucide-react'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Dumbbell className="h-6 w-6" />
          <span className="ml-2 text-xl sm:text-2xl font-bold">FitnessFuel</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Workouts
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Nutrition
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Meal Prep
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
        <Button variant="ghost" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </header>
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-b p-4">
          <Link className="block py-2 text-sm font-medium hover:underline underline-offset-4" href="#">
            Workouts
          </Link>
          <Link className="block py-2 text-sm font-medium hover:underline underline-offset-4" href="#">
            Nutrition
          </Link>
          <Link className="block py-2 text-sm font-medium hover:underline underline-offset-4" href="#">
            Meal Prep
          </Link>
          <Link className="block py-2 text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
      )}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Welcome to FitnessFuel
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Your one-stop destination for workout plans, nutrition guides, and meal prep ideas.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-white" placeholder="Search articles" type="text" />
                  <Button type="submit" className="bg-white text-black hover:bg-gray-200">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Featured Workout Plans</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "30-Day HIIT Challenge",
                  description: "Transform your body in just 30 days",
                  buttonText: "Start Now",
                },
                {
                  title: "Strength Training 101",
                  description: "Build muscle and increase strength",
                  buttonText: "Learn More",
                },
                {
                  title: "Yoga for Flexibility",
                  description: "Improve your flexibility and balance",
                  buttonText: "Get Flexible",
                },
              ].map((plan, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{plan.title}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      alt={plan.title}
                      className="w-full h-48 sm:h-60 object-cover"
                      height="300"
                      src="/placeholder.svg?height=300&width=400"
                      style={{
                        aspectRatio: "400/300",
                        objectFit: "cover",
                      }}
                      width="400"
                    />
                  </CardContent>
                  <CardFooter>
                    <Button>{plan.buttonText}</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Nutrition Guides</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Macro Counting 101",
                  description: "Learn how to balance your macronutrients",
                  buttonText: "Read Guide",
                },
                {
                  title: "Plant-Based Nutrition",
                  description: "Optimize your diet with plant-based foods",
                  buttonText: "Explore",
                },
                {
                  title: "Supplements Guide",
                  description: "Understand which supplements you need",
                  buttonText: "Learn More",
                },
              ].map((guide, index) => (
                <Card key={index}>
                  <CardHeader>
                    <Utensils className="w-8 h-8 mb-2" />
                    <CardTitle>{guide.title}</CardTitle>
                    <CardDescription>{guide.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline">{guide.buttonText}</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Meal Prep Ideas</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "High-Protein Lunch Box",
                  description: "5 easy high-protein lunch ideas",
                  buttonText: "Get Recipes",
                },
                {
                  title: "Vegan Meal Prep",
                  description: "7-day vegan meal prep plan",
                  buttonText: "View Plan",
                },
                {
                  title: "Quick Post-Workout Meals",
                  description: "10 fast and nutritious post-workout meals",
                  buttonText: "Discover Meals",
                },
              ].map((meal, index) => (
                <Card key={index}>
                  <CardHeader>
                    <ChefHat className="w-8 h-8 mb-2" />
                    <CardTitle>{meal.title}</CardTitle>
                    <CardDescription>{meal.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      alt={meal.title}
                      className="w-full h-40 object-cover rounded-md"
                      height="200"
                      src="/placeholder.svg?height=200&width=300"
                      style={{
                        aspectRatio: "300/200",
                        objectFit: "cover",
                      }}
                      width="300"
                    />
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">{meal.buttonText}</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 FitnessFuel. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex gap-4">
          <Link className="text-gray-500 hover:text-gray-700" href="#">
            <Facebook className="h-4 w-4" />
          </Link>
          <Link className="text-gray-500 hover:text-gray-700" href="#">
            <Twitter className="h-4 w-4" />
          </Link>
          <Link className="text-gray-500 hover:text-gray-700" href="#">
            <Instagram className="h-4 w-4" />
          </Link>
        </div>
      </footer>
    </div>
  )
}

