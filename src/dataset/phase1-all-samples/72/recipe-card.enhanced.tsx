import { Clock, Users, Heart, Star } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

export default function EnhancedRecipeCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="relative">
        <Image
          alt="Delicious Pasta Dish"
          className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 transform hover:scale-105"
          height={224}
          src="/placeholder.svg?height=224&width=384"
          width={384}
        />
        <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs sm:text-sm">
          ChefAtHome
        </Badge>
        <div className="absolute top-2 right-2 flex items-center space-x-1 sm:space-x-2">
          <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 cursor-pointer hover:text-red-600 transition-colors duration-200" />
          <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
          <span className="text-xs sm:text-sm font-semibold">4.5</span>
        </div>
      </div>
      <CardHeader className="p-3 sm:p-4">
        <h2 className="text-xl sm:text-2xl font-bold hover:text-primary transition-colors duration-200 cursor-pointer">
          Creamy Garlic Parmesan Pasta
        </h2>
      </CardHeader>
      <CardContent className="p-3 sm:p-4">
        <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
          A rich and indulgent pasta dish perfect for a cozy night in.
        </p>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
            <span className="text-xs sm:text-sm text-muted-foreground">30 mins</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
            <span className="text-xs sm:text-sm text-muted-foreground">4 servings</span>
          </div>
          <div className="flex items-center">
            <span className="px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded-full">
              Easy
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-3 sm:p-4 bg-gray-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
          <div className="text-xs sm:text-sm text-muted-foreground">
            <span className="font-medium">Difficulty:</span> Medium
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground">
            <span className="font-medium">Calories:</span> 450 kcal
          </div>
        </div>
        <div className="flex space-x-2 w-full sm:w-auto">
          <Button variant="outline" size="sm" className="flex-1 sm:flex-none text-xs sm:text-sm">
            View Recipe
          </Button>
          <Button variant="default" size="sm" className="flex-1 sm:flex-none text-xs sm:text-sm">
            Save
          </Button>
        </div>
      </CardFooter>
    </motion.div>
  )
}

