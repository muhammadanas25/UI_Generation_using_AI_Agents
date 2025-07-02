import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Salad, Calendar, Menu } from 'lucide-react'

export default function HealthyEatsBlog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [dietaryFilters, setDietaryFilters] = useState({
    vegan: false,
    vegetarian: false,
    glutenFree: false,
    dairyFree: false,
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleFilterChange = (filter: keyof typeof dietaryFilters) => {
    setDietaryFilters(prev => ({ ...prev, [filter]: !prev[filter] }))
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex justify-between items-center w-full sm:w-auto mb-4 sm:mb-0">
            <h1 className="text-2xl sm:text-3xl font-bold">HealthyEats</h1>
            <Button
              variant="ghost"
              size="icon"
              className="sm:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          <div className={`relative w-full sm:w-1/2 lg:w-1/3 ${mobileMenuOpen ? 'block' : 'hidden sm:block'}`}>
            <Input
              type="search"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>
      </header>

      <main className="container mx-auto py-6 sm:py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          <section className="w-full lg:w-3/4">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Featured Recipes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Quinoa Salad', 'Grilled Chicken with Avocado Salsa', 'Vegetable Stir-Fry', 'Berry Smoothie Bowl'].map((recipe, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg sm:text-xl">
                      <Salad className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                      {recipe}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base">Delicious and nutritious {recipe.toLowerCase()} packed with vitamins and minerals.</p>
                    <Button className="mt-2 w-full sm:w-auto">View Recipe</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-8 mb-4">Meal Planning Tips</h2>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <Calendar className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                  Weekly Meal Prep Guide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-sm sm:text-base">
                  <li>Plan your meals for the week ahead</li>
                  <li>Prep ingredients in advance</li>
                  <li>Cook in batches for easy leftovers</li>
                  <li>Use versatile ingredients across multiple meals</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <aside className="w-full lg:w-1/4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Dietary Needs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(dietaryFilters).map(([key, value]) => (
                    <div key={key} className="flex items-center">
                      <Checkbox
                        id={key}
                        checked={value}
                        onCheckedChange={() => handleFilterChange(key as keyof typeof dietaryFilters)}
                      />
                      <label htmlFor={key} className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  )
}

