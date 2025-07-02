'use client'

import { useState } from "react"
import { Check, ChevronDown } from 'lucide-react'

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
  },
  {
    value: "standard",
    label: "Standard Box",
    description: "10 snacks per month",
    price: 29.99,
  },
  {
    value: "premium",
    label: "Premium Box",
    description: "15 snacks per month",
    price: 39.99,
  },
]

export default function SnackBoxSelector() {
  const [open, setOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(plans[0])

  return (
    <div className="w-full max-w-sm mx-auto space-y-4 p-4 sm:p-0">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between h-12 sm:h-10 text-base sm:text-sm"
          >
            {selectedPlan.label}
            <ChevronDown className="ml-2 h-5 w-5 sm:h-4 sm:w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command className="w-full">
            <CommandInput placeholder="Search plans..." className="h-12 sm:h-10" />
            <CommandEmpty>No plan found.</CommandEmpty>
            <CommandGroup>
              {plans.map((plan) => (
                <CommandItem
                  key={plan.value}
                  onSelect={() => {
                    setSelectedPlan(plan)
                    setOpen(false)
                  }}
                  className="h-12 sm:h-10 text-base sm:text-sm"
                >
                  <Check
                    className={cn(
                      "mr-2 h-5 w-5 sm:h-4 sm:w-4",
                      selectedPlan.value === plan.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {plan.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
      <div className="text-base sm:text-sm text-gray-500 dark:text-gray-400 space-y-2">
        <p>{selectedPlan.description}</p>
        <p className="font-semibold">
          ${selectedPlan.price.toFixed(2)} / month
        </p>
      </div>
      <Button className="w-full h-12 sm:h-10 text-base sm:text-sm">Add to Cart</Button>
    </div>
  )
}

