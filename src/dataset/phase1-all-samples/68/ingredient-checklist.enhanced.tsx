import { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

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

  const handleSelectAll = () => {
    const allChecked = ingredients.every(item => checkedItems[item.id])
    const newCheckedItems: { [key: string]: boolean } = {}
    ingredients.forEach(item => {
      newCheckedItems[item.id] = !allChecked
    })
    setCheckedItems(newCheckedItems)
  }

  const handleReset = () => {
    setCheckedItems({})
  }

  const allChecked = ingredients.length > 0 && ingredients.every(item => checkedItems[item.id])

  const completedCount = Object.values(checkedItems).filter(Boolean).length

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md mx-auto shadow-lg transition-transform transform hover:scale-105">
        <CardHeader className="flex flex-col items-center">
          <Image src="/healthy_eats.png" alt="HealthyEats" width={100} height={100} className="mb-4" />
          <CardTitle className="text-2xl font-bold text-center">HealthyEats Mediterranean Quinoa Salad</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="select-all"
                checked={allChecked}
                onCheckedChange={handleSelectAll}
              />
              <Label htmlFor="select-all" className="font-medium">Select All</Label>
            </div>
            <Button variant="secondary" size="sm" onClick={handleReset}>Reset</Button>
          </div>
          <h2 className="text-xl font-semibold mb-4">Ingredients Checklist ({completedCount}/{ingredients.length})</h2>
          <ul className="space-y-2">
            {ingredients.map((ingredient) => (
              <li key={ingredient.id} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50 transition-colors">
                <Checkbox
                  id={ingredient.id}
                  checked={checkedItems[ingredient.id] || false}
                  onCheckedChange={() => toggleItem(ingredient.id)}
                  className="transition-transform duration-300"
                />
                <Label
                  htmlFor={ingredient.id}
                  className={`flex-grow transition-colors duration-300 ${checkedItems[ingredient.id] ? 'line-through text-gray-500' : 'text-gray-700'}`}
                >
                  {ingredient.name} - {ingredient.amount}
                </Label>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="text-center text-sm text-gray-500">
          Gather your ingredients and enjoy cooking!
        </CardFooter>
      </Card>
    </div>
  )
}