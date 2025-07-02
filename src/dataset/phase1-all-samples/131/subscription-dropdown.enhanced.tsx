'use client'

import { useState } from "react"
import { Check, ChevronDown, Star } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const plans = [
  {
    value: "starter",
    label: "Starter Box",
    description: "5 snacks per month",
    price: 19.99,
    icon: <Star className="w-5 h-5 text-yellow-500" />,
  },
  {
    value: "standard",
    label: "Standard Box",
    description: "10 snacks per month",
    price: 29.99,
    icon: <Star className="w-5 h-5 text-gray-400" />,
  },
  {
    value: "premium",
    label: "Premium Box",
    description: "15 snacks per month",
    price: 39.99,
    icon: <Star className="w-5 h-5 text-gray-400" />,
  },
]

export default function SubscriptionPlanSelector() {
  const [open, setOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(plans[0])

  return (
    <div className="w-full max-w-md mx-auto p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg space-y-4 sm:space-y-6 transition-all duration-300">
      <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
        Choose Your Subscription Plan
      </h2>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between flex items-center h-14 sm:h-12 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <div className="flex items-center space-x-2">
              {selectedPlan.icon}
              <span className="text-base sm:text-lg font-medium text-gray-700 dark:text-gray-200">
                {selectedPlan.label}
              </span>
            </div>
            <ChevronDown className="ml-2 h-5 w-5 shrink-0 opacity-50 transition-transform transform" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-2 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg animate-fade-in">
          <Command className="max-h-[50vh] overflow-auto">
            <CommandInput
              placeholder="Search plans..."
              className="mb-2 sm:mb-3 border-b border-gray-200 dark:border-gray-700"
            />
            <CommandEmpty className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
              No plan found.
            </CommandEmpty>
            <CommandGroup>
              {plans.map((plan) => (
                <CommandItem
                  key={plan.value}
                  onSelect={() => {
                    setSelectedPlan(plan)
                    setOpen(false)
                  }}
                  className={cn(
                    "flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                  )}
                >
                  <div className="mr-3">{plan.value === selectedPlan.value && <Check className="w-5 h-5 text-green-500" />}</div>
                  <div className="flex items-center space-x-3">
                    {plan.icon}
                    <div>
                      <p className="font-semibold text-sm sm:text-base text-gray-700 dark:text-gray-200">{plan.label}</p>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{plan.description}</p>
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
      <div className="text-center text-gray-600 dark:text-gray-300">
        <p className="mb-1 sm:mb-2 text-sm sm:text-base">{selectedPlan.description}</p>
        <p className="text-xl sm:text-2xl font-semibold">
          ${selectedPlan.price.toFixed(2)} / month
        </p>
      </div>
      <Button
        className="w-full h-12 sm:h-14 text-base sm:text-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors transform hover:scale-105"
      >
        Add to Cart
      </Button>
      <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
        <Button variant="secondary" className="w-full sm:flex-1 h-10 sm:h-12 text-sm sm:text-base">
          Learn More
        </Button>
        <Button variant="ghost" className="w-full sm:flex-1 h-10 sm:h-12 text-sm sm:text-base">
          Compare Plans
        </Button>
      </div>
    </div>
  )
}

