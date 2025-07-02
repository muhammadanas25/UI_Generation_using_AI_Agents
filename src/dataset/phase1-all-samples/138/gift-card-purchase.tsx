"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Utensils } from 'lucide-react'

export default function GiftCardPurchase() {
  const [amount, setAmount] = useState("50")
  const [recipientName, setRecipientName] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission,
    // such as sending the data to an API or processing the payment
    console.log("Gift card purchase:", { amount, recipientName, message })
    alert("Gift card purchased successfully!")
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl">Chef's Choice Gift Card</CardTitle>
          <CardDescription className="text-sm sm:text-base">Give the gift of culinary delight</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <Label htmlFor="amount" className="text-sm sm:text-base">Select Amount</Label>
                <RadioGroup
                  id="amount"
                  value={amount}
                  onValueChange={setAmount}
                  className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-4 mt-2"
                >
                  {["25", "50", "100", "200"].map((value) => (
                    <div key={value} className="w-full sm:w-auto">
                      <RadioGroupItem
                        value={value}
                        id={`amount-${value}`}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={`amount-${value}`}
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-3 sm:p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary w-full text-sm sm:text-base"
                      >
                        ${value}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <div>
                <Label htmlFor="recipient-name" className="text-sm sm:text-base">Recipient's Name</Label>
                <Input
                  id="recipient-name"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  placeholder="Enter recipient's name"
                  className="mt-1 text-sm sm:text-base"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-sm sm:text-base">Personal Message</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your personal message"
                  className="mt-1 text-sm sm:text-base"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-stretch gap-4">
          <div className="w-full">
            <Card>
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Utensils className="w-5 h-5 sm:w-6 sm:h-6" />
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
          <Button type="submit" onClick={handleSubmit} className="w-full">
            Purchase Gift Card
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

