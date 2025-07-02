'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Gift, Star, CreditCard } from 'lucide-react'

export default function LoyaltyProgramDialog() {
  const [open, setOpen] = useState(true)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-2 sm:space-y-3">
          <DialogTitle className="text-xl sm:text-2xl font-bold text-center">Timeless Rewards</DialogTitle>
          <DialogDescription className="text-center text-sm sm:text-base">
            Join our loyalty program and start earning rewards today!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-3 sm:py-4">
          <RewardItem
            icon={<Star className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />}
            title="Earn Points"
            description="Get 1 point for every $1 spent"
          />
          <RewardItem
            icon={<Gift className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />}
            title="Redeem Rewards"
            description="Use points for discounts and free items"
          />
          <RewardItem
            icon={<CreditCard className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />}
            title="Exclusive Benefits"
            description="Access to special sales and events"
          />
        </div>
        <DialogFooter className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:space-x-0">
          <Button
            type="button"
            variant="outline"
            onClick={() => setOpen(false)}
            className="w-full sm:w-auto text-sm sm:text-base py-2 sm:py-3"
          >
            Maybe Later
          </Button>
          <Button
            type="button"
            onClick={() => setOpen(false)}
            className="w-full sm:w-auto text-sm sm:text-base py-2 sm:py-3"
          >
            Join Now
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

interface RewardItemProps {
  icon: React.ReactNode
  title: string
  description: string
}

function RewardItem({ icon, title, description }: RewardItemProps) {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary/10">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-sm sm:text-base">{title}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

