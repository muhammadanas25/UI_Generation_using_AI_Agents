import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Salad, Calendar, Sun, Moon, Heart } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HealthyEatsBlog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [dietaryFilters, setDietaryFilters] = useState({
    vegan: false,
    vegetarian: false,
    glutenFree: false,
    dairyFree: false,
  })
  const [darkMode, setDarkMode] = useState(false)

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleFilterChange = (filter: keyof typeof dietaryFilters) => {
    setDietaryFilters(prev => ({ ...prev, [filter]: !prev[filter] }))
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? "min-h-screen bg-gray-900 text-white" : "min-h-screen bg-background text-foreground"}>
      <header className={darkMode ? "bg-gray-800 text-white p-4 shadow-lg" : "bg-primary text-primary-foreground p-4 shadow-lg"}>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold mb-4 md:mb-0 flex items-center">
            <Heart className="mr-2 animate-pulse text-red-500" />
            HealthyEats
          </h1>
          <div className="flex items-center space-x-4">
            <div className="relative w-full md:w-1/3">
              <Input
                type="search"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="pl-10 focus:ring-2 focus:ring-secondary transition"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            </div>
            <Button variant="ghost" onClick={toggleDarkMode} className="p-2">
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div className="flex flex-col md:flex-row gap-8">
            <section className="md:w-3/4">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Salad className="mr-2" />
                Featured Recipes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['Quinoa Salad', 'Grilled Chicken with Avocado Salsa', 'Vegetable Stir-Fry', 'Berry Smoothie Bowl'].map((recipe, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.05 }} className="relative">
                    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src={`/images/${recipe.toLowerCase().replace(/ /g, '-')}.jpg`}
                        alt={recipe}
                        width={400}
                        height={250}
                        className="object-cover w-full h-48"
                      />
                      <CardHeader className="bg-white dark:bg-gray-800">
                        <CardTitle className="flex items-center">
                          <Salad className="mr-2 text-green-500" />
                          {recipe}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="bg-gray-50 dark:bg-gray-700">
                        <p className="text-sm mb-4">Delicious and nutritious {recipe.toLowerCase()} packed with vitamins and minerals.</p>
                        <Button variant="secondary" className="w-full hover:bg-secondary-dark transition">
                          View Recipe
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <h2 className="text-2xl font-semibold mt-12 mb-6 flex items-center">
                <Calendar className="mr-2" />
                Meal Planning Tips
              </h2>
              <Card className="p-4 bg-gray-50 dark:bg-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 text-blue-500" />
                    Weekly Meal Prep Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Plan your meals for the week ahead</li>
                    <li>Prep ingredients in advance</li>
                    <li>Cook in batches for easy leftovers</li>
                    <li>Use versatile ingredients across multiple meals</li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <aside className="md:w-1/4">
              <Card className="p-4 bg-gray-50 dark:bg-gray-700">
                <CardHeader>
                  <CardTitle>Dietary Needs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(dietaryFilters).map(([key, value]) => (
                      <div key={key} className="flex items-center">
                        <Checkbox
                          id={key}
                          checked={value}
                          onCheckedChange={() => handleFilterChange(key as keyof typeof dietaryFilters)}
                          className="text-green-500"
                        />
                        <label htmlFor={key} className="ml-2 text-sm font-medium">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="mt-6 p-4 bg-gray-50 dark:bg-gray-700">
                <CardHeader>
                  <CardTitle>Subscribe to Our Newsletter</CardTitle>
                </CardHeader>
                <CardContent>
                  <Input
                    type="email"
                    placeholder="Enter your email..."
                    className="mb-4"
                  />
                  <Button variant="primary" className="w-full">
                    Subscribe
                  </Button>
                </CardContent>
              </Card>
            </aside>
          </div>
        </motion.div>
      </main>

      <footer className={darkMode ? "bg-gray-800 text-white p-4" : "bg-primary text-primary-foreground p-4"}>
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} HealthyEats. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-secondary transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-secondary transition">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

