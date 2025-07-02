import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dumbbell, Utensils, ChevronRight, Facebook, Twitter, Instagram, Menu, X } from 'lucide-react'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <nav className="flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-bold">FitFocus</h1>
            <button
              className="sm:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
            <ul className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row absolute sm:relative top-full left-0 right-0 bg-primary sm:bg-transparent p-4 sm:p-0 space-y-2 sm:space-y-0 sm:space-x-4`}>
              <li><a href="#" className="block sm:inline hover:underline">Home</a></li>
              <li><a href="#" className="block sm:inline hover:underline">Workouts</a></li>
              <li><a href="#" className="block sm:inline hover:underline">Nutrition</a></li>
              <li><a href="#" className="block sm:inline hover:underline">About</a></li>
              <li><a href="#" className="block sm:inline hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8">
        <section className="mb-8 sm:mb-12">
          <Card className="bg-secondary">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">Welcome to FitFocus</h2>
              <p className="text-lg sm:text-xl mb-4">Your go-to resource for effective workouts and nutrition tips!</p>
              <Button className="w-full sm:w-auto">Get Started <ChevronRight className="ml-2 h-4 w-4" /></Button>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center">
            <Dumbbell className="mr-2" /> Latest Workout Routines
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              "30-Minute HIIT Blast",
              "Full Body Strength Training",
              "Yoga for Flexibility",
            ].map((title) => (
              <Card key={title}>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">{title}</CardTitle>
                  <CardDescription>Boost your fitness with our latest workout</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full sm:w-auto">View Routine</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center">
            <Utensils className="mr-2" /> Nutrition Tips
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              "5 Protein-Packed Smoothie Recipes",
              "Meal Prep Ideas for Busy Professionals",
              "Understanding Macronutrients",
            ].map((title) => (
              <Card key={title}>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">{title}</CardTitle>
                  <CardDescription>Fuel your body with the right nutrition</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full sm:w-auto">Read More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold mb-2">FitFocus</h3>
              <p className="text-sm sm:text-base">Empowering you to reach your fitness goals</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary"><Facebook /></a>
              <a href="#" className="hover:text-secondary"><Twitter /></a>
              <a href="#" className="hover:text-secondary"><Instagram /></a>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-sm">&copy; 2023 FitFocus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

