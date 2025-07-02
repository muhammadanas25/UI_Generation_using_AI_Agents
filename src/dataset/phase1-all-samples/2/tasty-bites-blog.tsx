import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Clock, Users } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-3xl font-bold mb-4 md:mb-0">TastyBites</h1>
            <div className="relative w-full md:w-96">
              <Input
                type="search"
                placeholder="Search recipes..."
                className="w-full pl-10 bg-primary-foreground text-primary"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary" size={18} />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section>
          <h2 className="text-2xl font-semibold mb-6">Featured Dishes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDishes.map((dish, index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{dish.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{dish.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center text-muted-foreground">
                    <Clock size={16} className="mr-1" />
                    <span>{dish.cookTime}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users size={16} className="mr-1" />
                    <span>{dish.servings} servings</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

const featuredDishes = [
  {
    name: "Spicy Thai Basil Chicken",
    description: "A flavorful and aromatic dish with tender chicken, fresh basil, and a spicy kick.",
    image: "/placeholder.svg?height=300&width=400",
    cookTime: "30 mins",
    servings: 4
  },
  {
    name: "Creamy Mushroom Risotto",
    description: "A comforting Italian classic with Arborio rice, wild mushrooms, and Parmesan cheese.",
    image: "/placeholder.svg?height=300&width=400",
    cookTime: "45 mins",
    servings: 6
  },
  {
    name: "Grilled Lemon Herb Salmon",
    description: "Succulent salmon fillets marinated in lemon and herbs, perfect for a healthy dinner.",
    image: "/placeholder.svg?height=300&width=400",
    cookTime: "20 mins",
    servings: 2
  },
  {
    name: "Vegetarian Quinoa Bowl",
    description: "A nutritious and colorful bowl packed with quinoa, roasted vegetables, and avocado.",
    image: "/placeholder.svg?height=300&width=400",
    cookTime: "35 mins",
    servings: 3
  },
  {
    name: "Classic Beef Bourguignon",
    description: "A rich and hearty French stew with tender beef, red wine, and aromatic vegetables.",
    image: "/placeholder.svg?height=300&width=400",
    cookTime: "3 hours",
    servings: 8
  },
  {
    name: "Mango Coconut Chia Pudding",
    description: "A refreshing and healthy dessert with tropical flavors, perfect for breakfast too.",
    image: "/placeholder.svg?height=300&width=400",
    cookTime: "10 mins + 4 hours chilling",
    servings: 4
  }
]