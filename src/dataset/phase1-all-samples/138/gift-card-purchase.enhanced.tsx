"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Utensils, Gift, CheckCircle } from 'lucide-react'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import Image from "next/image"

export default function GiftCardPurchase() {
  const [amount, setAmount] = useState("50")
  const [recipientName, setRecipientName] = useState("")
  const [message, setMessage] = useState("")
  const [isSuccessOpen, setIsSuccessOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission,
    // such as sending the data to an API or processing the payment
    console.log("Gift card purchase:", { amount, recipientName, message })
    setIsSuccessOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-blue-100 flex items-center justify-center p-4">
      <Card className="max-w-3xl w-full shadow-lg transition-transform transform hover:scale-105 duration-300">
        <CardHeader className="flex flex-col items-center">
          <Gift className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-2 animate-bounce" />
          <CardTitle className="text-xl sm:text-2xl font-bold text-center">Chef's Choice Gift Card</CardTitle>
          <CardDescription className="text-center text-sm sm:text-base">Give the gift of culinary delight</CardDescription>
          <Image src="/images/gift-card.png" alt="Gift Card" width={150} height={150} className="mt-4 rounded-lg shadow-md w-32 h-32 sm:w-40 sm:h-40 object-cover" />
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <Label htmlFor="amount" className="block text-base sm:text-lg font-medium">Select Amount</Label>
              <RadioGroup
                id="amount"
                value={amount}
                onValueChange={setAmount}
                className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-4 mt-2"
              >
                {["25", "50", "100", "200"].map((value) => (
                  <div key={value} className="relative w-full sm:w-auto">
                    <RadioGroupItem
                      value={value}
                      id={`amount-${value}`}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={`amount-${value}`}
                      className="flex flex-col items-center justify-center w-full sm:w-24 h-16 sm:h-24 rounded-md border-2 border-muted bg-white p-2 sm:p-4 cursor-pointer transition-colors duration-200 hover:bg-primary hover:text-white peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-white text-sm sm:text-base"
                    >
                      ${value}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <div>
              <Label htmlFor="recipient-name" className="block text-base sm:text-lg font-medium">Recipient's Name</Label>
              <Input
                id="recipient-name"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                placeholder="Enter recipient's name"
                className="mt-1 focus:ring-primary focus:border-primary transition duration-200 text-sm sm:text-base"
                required
              />
            </div>
            <div>
              <Label htmlFor="message" className="block text-base sm:text-lg font-medium">Personal Message</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your personal message"
                className="mt-1 focus:ring-primary focus:border-primary transition duration-200 text-sm sm:text-base"
                rows={4}
                required
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-stretch gap-4">
          <div className="w-full">
            <Card className="bg-muted shadow-inner">
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                    <span className="font-semibold text-sm sm:text-base">Chef's Choice</span>
                  </div>
                  <span className="text-xl sm:text-2xl font-bold">${amount}</span>
                </div>
                <div className="mt-2 text-xs sm:text-sm text-muted-foreground">
                  To: {recipientName || "Recipient"}
                </div>
                <div className="mt-1 text-xs sm:text-sm italic">
                  {message || "Your personal message here"}
                </div>
              </CardContent>
            </Card>
          </div>
          <Button
            type="submit"
            onClick={handleSubmit}
            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark transition-colors duration-200 text-sm sm:text-base py-2 sm:py-3"
          >
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            Purchase Gift Card
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-500 mx-auto" />
            <DialogTitle className="text-center text-lg sm:text-xl">Success!</DialogTitle>
            <DialogDescription className="text-center text-sm sm:text-base">
              Your Chef's Choice gift card has been purchased successfully.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-center">
            <Button onClick={() => setIsSuccessOpen(false)} className="mt-4 text-sm sm:text-base">
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

