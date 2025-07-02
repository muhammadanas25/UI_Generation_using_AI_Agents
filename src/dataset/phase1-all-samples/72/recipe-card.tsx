import { Clock, Users } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden">
      <div className="relative">
        <img
          alt="Delicious Pasta Dish"
          className="w-full h-48 sm:h-56 object-cover"
          height="200"
          src="/placeholder.svg?height=200&width=400"
          style={{
            aspectRatio: "400/200",
            objectFit: "cover",
          }}
          width="400"
        />
        <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">ChefAtHome</Badge>
      </div>
      <CardHeader className="p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold">Creamy Garlic Parmesan Pasta</h2>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <p className="text-sm sm:text-base text-muted-foreground">A rich and indulgent pasta dish perfect for a cozy night in.</p>
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">30 mins</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">4 servings</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/50 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between w-full text-xs sm:text-sm space-y-2 sm:space-y-0">
          <span>Difficulty: Medium</span>
          <span>Calories: 450 kcal</span>
        </div>
      </CardFooter>
    </Card>
  )
}

