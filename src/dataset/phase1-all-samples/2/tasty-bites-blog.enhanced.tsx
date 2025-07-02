import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Clock, Users } from "lucide-react"
import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-4xl font-bold animate-fadeIn">TastyBites</h1>
          <div className="relative mt-4 md:mt-0 w-full md:w-96">
            <Input
              type="search"
              placeholder="Search recipes..."
              className="w-full pl-10 bg-primary-foreground text-primary rounded-full focus:ring-2 focus:ring-accent transition"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary" size={20} />
            <Button
              variant="secondary"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              Search
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex-1">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Featured Dishes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg bg-card hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
              >
                <Image
                  src={dish.image}
                  alt={dish.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300"
                />
                <Card className="flex flex-col h-full">
                  <CardHeader className="p-4">
                    <CardTitle className="text-xl font-bold">{dish.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 p-4">
                    <p className="text-muted-foreground">{dish.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4">
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
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline" size="lg">
              Load More
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">&copy; {new Date().getFullYear()} TastyBites. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-accent transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </footer>
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