import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Gift, Star, CreditCard, X } from "lucide-react"
import Image from "next/image"

export default function Component() {
  const [open, setOpen] = useState(true)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="relative sm:max-w-[425px] p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg">
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
          onClick={() => setOpen(false)}
        >
          <X className="h-5 w-5" />
        </button>
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <Image src="/rewards-banner.png" alt="Rewards Banner" width={80} height={80} />
          </div>
          <DialogTitle className="text-3xl font-bold text-white text-center animate-fadeIn">Timeless Rewards</DialogTitle>
          <DialogDescription className="text-center text-white mt-2">
            Join our loyalty program and start earning rewards today!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-4 p-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-transform transform hover:scale-105">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white bg-opacity-25">
              <Star className="h-6 w-6 text-yellow-300" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white">Earn Points</h3>
              <p className="text-sm text-gray-200">Get 1 point for every $1 spent</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-transform transform hover:scale-105">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white bg-opacity-25">
              <Gift className="h-6 w-6 text-green-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white">Redeem Rewards</h3>
              <p className="text-sm text-gray-200">Use points for discounts and free items</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-transform transform hover:scale-105">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white bg-opacity-25">
              <CreditCard className="h-6 w-6 text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white">Exclusive Benefits</h3>
              <p className="text-sm text-gray-200">Access to special sales and events</p>
            </div>
          </div>
        </div>
        <DialogFooter className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <Button
            variant="outline"
            className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-indigo-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            Maybe Later
          </Button>
          <Button
            className="w-full sm:w-auto bg-white text-indigo-600 hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(false)}
          >
            Join Now
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}