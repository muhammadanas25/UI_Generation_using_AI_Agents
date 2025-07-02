import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardDescription, CardTitle, CardFooter } from "@/components/ui/card"
import { Dumbbell, Utensils, ChevronRight, Facebook, Twitter, Instagram, Menu, X, Leaf, ArrowRight } from 'lucide-react'
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Image from "next/image";

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
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 dark:text-green-200 animate-fade-in-up">
                Live Green with EcoEarth
              </h1>
              <p className="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-md mx-auto lg:mx-0">
                Your ultimate resource for sustainable living tips and eco-friendly product recommendations.
              </p>
              <Button className="mt-6 animate-pulse w-full sm:w-auto">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src="/eco-illustration.svg"
                alt="Eco Illustration"
                width={300}
                height={300}
                className="animate-bounce max-w-full h-auto"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-8 sm:py-12 md:py-24 lg:py-32 bg-green-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 sm:mb-8">Featured Workout</h2>
            <Card className="max-w-4xl mx-auto hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-col sm:flex-row items-center">
                <Image
                  src="/featured-post.jpg"
                  alt="Featured Post"
                  width={400}
                  height={200}
                  className="rounded-t-lg sm:rounded-l-lg sm:rounded-t-none w-full sm:w-1/2 h-auto object-cover"
                />
                <div className="sm:ml-4 mt-4 sm:mt-0">
                  <CardTitle className="text-xl sm:text-2xl">10 Easy Ways to Reduce Your Carbon Footprint</CardTitle>
                  <CardDescription>Learn how small changes can make a big impact on the environment</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Discover simple yet effective ways to reduce your carbon footprint and contribute to a healthier planet.
                  From energy-saving tips to sustainable shopping habits, this guide covers all you need to know to start
                  your eco-friendly journey.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="default" className="flex items-center w-full sm:w-auto">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
        <section className="w-full py-8 sm:py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 sm:mb-8">Recent Workouts & Nutrition Tips</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                <form className="w-full max-w-sm flex flex-col sm:flex-row items-center gap-4">
                  <Input className="w-full sm:flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="w-full sm:w-auto">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="container mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 md:mb-0">© 2024 EcoEarth. All rights reserved.</p>
          <div className="flex gap-4 mb-4 md:mb-0">
            <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-green-600 transition">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-green-600 transition">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-green-600 transition">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
          <nav className="flex gap-4">
            <Link className="text-xs text-gray-600 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs text-gray-600 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

