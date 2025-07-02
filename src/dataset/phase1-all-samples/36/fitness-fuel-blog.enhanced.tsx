import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Dumbbell, Utensils, ChefHat, Search, Facebook, Twitter, Instagram, Menu, X, Moon, Sun } from 'lucide-react'
import { Transition } from "@headlessui/react"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString())
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <div className={`flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500`}>
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-gray-100 dark:bg-gray-800 shadow-md">
        <div className="flex items-center">
          <Link className="flex items-center justify-center" href="#">
            <Dumbbell className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">FitnessFuel</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          {["Workouts", "Nutrition", "Meal Prep", "About"].map((item) => (
            <Link key={item} className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
              {item}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" onClick={toggleDarkMode} className="p-2">
            {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-800" />}
          </Button>
          <button className="md:hidden p-2 text-gray-700 dark:text-gray-200" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>
      <Transition
        show={isMenuOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
      >
        <nav className="md:hidden bg-white dark:bg-gray-800 py-4 px-6 space-y-2">
          {["Workouts", "Nutrition", "Meal Prep", "About"].map((item) => (
            <Link key={item} className="block text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
              {item}
            </Link>
          ))}
        </nav>
      </Transition>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-500 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src="/placeholder.svg" alt="Fitness" className="w-full h-full object-cover" />
          </div>
          <div className="container relative px-4 md:px-6 flex flex-col items-center text-center space-y-4 md:space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg animate-fadeInUp">
              Welcome to FitnessFuel
            </h1>
            <p className="max-w-[600px] text-gray-200 text-sm md:text-base lg:text-lg drop-shadow-lg animate-fadeInUp delay-200">
              Your one-stop destination for workout plans, nutrition guides, and meal prep ideas.
            </p>
            <form className="w-full max-w-md flex mt-4 animate-fadeInUp delay-400">
              <Input className="flex-1" placeholder="Search articles" type="text" />
              <Button type="submit" className="ml-2 bg-white text-indigo-600 hover:bg-gray-100 transition">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-center text-gray-800 dark:text-white mb-8 md:mb-12">Featured Workout Plans</h2>
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "30-Day HIIT Challenge", description: "Transform your body in just 30 days", color: "indigo", image: "/placeholder.svg" },
                { title: "Strength Training 101", description: "Build muscle and increase strength", color: "green", image: "/placeholder.svg" },
                { title: "Yoga for Flexibility", description: "Improve your flexibility and balance", color: "yellow", image: "/placeholder.svg" },
              ].map((plan, index) => (
                <Card key={index} className="transform hover:scale-105 transition-transform shadow-lg hover:shadow-2xl">
                  <CardHeader>
                    <CardTitle className={`text-${plan.color}-600`}>{plan.title}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      alt={plan.title}
                      className="w-full h-48 md:h-60 object-cover rounded-md"
                      src={plan.image}
                    />
                  </CardContent>
                  <CardFooter>
                    <Button className={`w-full bg-${plan.color}-600 text-white hover:bg-${plan.color}-700 transition`}>Start Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-gray-100 dark:bg-gray-700">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-center text-gray-800 dark:text-white mb-8 md:mb-12">Nutrition Guides</h2>
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Macro Counting 101", description: "Learn how to balance your macronutrients", color: "red" },
                { title: "Plant-Based Nutrition", description: "Optimize your diet with plant-based foods", color: "green" },
                { title: "Supplements Guide", description: "Understand which supplements you need", color: "blue" },
              ].map((guide, index) => (
                <Card key={index} className="transform hover:translate-y-2 transition-transform shadow-md hover:shadow-lg">
                  <CardHeader className="flex flex-col items-start">
                    <Utensils className={`w-8 h-8 text-${guide.color}-500 mb-2`} />
                    <CardTitle>{guide.title}</CardTitle>
                    <CardDescription>{guide.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className={`w-full border-${guide.color}-500 text-${guide.color}-500 hover:bg-${guide.color}-500 hover:text-white transition`}>Read Guide</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-center text-gray-800 dark:text-white mb-8 md:mb-12">Meal Prep Ideas</h2>
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "High-Protein Lunch Box", description: "5 easy high-protein lunch ideas", color: "purple", image: "/placeholder.svg" },
                { title: "Vegan Meal Prep", description: "7-day vegan meal prep plan", color: "green", image: "/placeholder.svg" },
                { title: "Quick Post-Workout Meals", description: "10 fast and nutritious post-workout meals", color: "yellow", image: "/placeholder.svg" },
              ].map((meal, index) => (
                <Card key={index} className="transform hover:scale-105 transition-transform shadow-lg hover:shadow-2xl">
                  <CardHeader className="flex flex-col items-start">
                    <ChefHat className={`w-8 h-8 text-${meal.color}-500 mb-2`} />
                    <CardTitle>{meal.title}</CardTitle>
                    <CardDescription>{meal.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      alt={meal.title}
                      className="w-full h-40 object-cover rounded-md"
                      src={meal.image}
                    />
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className={`w-full border-${meal.color}-500 text-${meal.color}-500 hover:bg-${meal.color}-500 hover:text-white transition`}>Get Recipes</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-indigo-600">
          <div className="container px-4 md:px-6 text-center text-white space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Join Our Community</h2>
            <p className="max-w-[600px] mx-auto text-sm md:text-base">Stay updated with the latest workouts, nutrition tips, and meal prep ideas. Subscribe to our newsletter!</p>
            <form className="w-full max-w-sm mx-auto flex flex-col sm:flex-row items-center gap-2">
              <Input className="flex-1 w-full sm:w-auto" placeholder="Enter your email" type="email" />
              <Button className="w-full sm:w-auto bg-white text-indigo-600 hover:bg-gray-100 transition">Subscribe</Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="py-6 md:py-8 bg-gray-100 dark:bg-gray-800 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 FitnessFuel. All rights reserved.</p>
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link className="text-xs text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
                Terms of Service
              </Link>
              <Link className="text-xs text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
                Privacy
              </Link>
            </nav>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <Link key={index} className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white transition" href="#">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

