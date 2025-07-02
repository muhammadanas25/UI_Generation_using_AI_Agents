"use client"

import { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

interface Ingredient {
  id: string
  name: string
  amount: string
}

const ingredients: Ingredient[] = [
  { id: '1', name: 'Quinoa', amount: '1 cup' },
  { id: '2', name: 'Cherry tomatoes', amount: '1 cup, halved' },
  { id: '3', name: 'Cucumber', amount: '1/2, diced' },
  { id: '4', name: 'Red onion', amount: '1/4, finely chopped' },
  { id: '5', name: 'Feta cheese', amount: '1/2 cup, crumbled' },
  { id: '6', name: 'Kalamata olives', amount: '1/4 cup, pitted and sliced' },
  { id: '7', name: 'Extra virgin olive oil', amount: '2 tablespoons' },
  { id: '8', name: 'Lemon juice', amount: '2 tablespoons' },
  { id: '9', name: 'Fresh mint leaves', amount: '2 tablespoons, chopped' },
  { id: '10', name: 'Salt', amount: 'to taste' },
  { id: '11', name: 'Black pepper', amount: 'to taste' },
]

export default function IngredientChecklist() {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({})

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-[95%] sm:max-w-md mx-auto shadow-lg">
        <CardHeader className="pb-3">
          <CardTitle className="text-xl sm:text-2xl font-bold text-center text-primary">HealthyEats Mediterranean Quinoa Salad</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-secondary">Ingredients Checklist</h2>
          <ul className="space-y-3">
            {ingredients.map((ingredient) => (
              <li key={ingredient.id} className="flex items-start space-x-3 bg-white p-2 rounded-md shadow-sm">
                <Checkbox
                  id={ingredient.id}
                  checked={checkedItems[ingredient.id] || false}
                  onCheckedChange={() => toggleItem(ingredient.id)}
                  className="mt-1"
                />
                <Label
                  htmlFor={ingredient.id}
                  className={`flex-grow text-sm sm:text-base ${checkedItems[ingredient.id] ? 'line-through text-gray-500' : 'text-gray-800'}`}
                >
                  <span className="font-medium">{ingredient.name}</span>
                  <span className="block text-xs sm:text-sm text-gray-600">{ingredient.amount}</span>
                </Label>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

