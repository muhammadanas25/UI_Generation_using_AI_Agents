'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const steps = ['Shipping', 'Billing', 'Review']

export default function CheckoutForm() {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0))

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl text-center">RentMyStyle Checkout</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6 sm:mb-8">
          <ProgressIndicator currentStep={currentStep} steps={steps} />
        </div>
        {currentStep === 0 && <ShippingStep />}
        {currentStep === 1 && <BillingStep />}
        {currentStep === 2 && <ReviewStep />}
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-between gap-4">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 0}
          className="w-full sm:w-auto order-2 sm:order-1"
        >
          Previous
        </Button>
        <Button
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
          className="w-full sm:w-auto order-1 sm:order-2"
        >
          {currentStep === steps.length - 1 ? 'Place Order' : 'Next'}
        </Button>
      </CardFooter>
    </Card>
  )
}

function ProgressIndicator({ currentStep, steps }) {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center flex-1">
          <div
            className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm ${index <= currentStep ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}
          >
            {index + 1}
          </div>
          <div className="ml-1 sm:ml-2 text-xs sm:text-sm font-medium hidden sm:block">{step}</div>
          {index < steps.length - 1 && (
            <div className={`h-1 flex-grow mx-1 sm:mx-2 ${index < currentStep ? 'bg-primary' : 'bg-muted'}`} />
          )}
        </div>
      ))}
    </div>
  )
}

function ShippingStep() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" placeholder="John" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" placeholder="Doe" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input id="address" placeholder="123 Main St" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Input id="city" placeholder="New York" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="zipCode">ZIP Code</Label>
          <Input id="zipCode" placeholder="10001" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="country">Country</Label>
        <Select>
          <SelectTrigger id="country">
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="ca">Canada</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

function BillingStep() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="cardName">Name on Card</Label>
        <Input id="cardName" placeholder="John Doe" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="cardNumber">Card Number</Label>
        <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="expiryDate">Expiry Date</Label>
          <Input id="expiryDate" placeholder="MM/YY" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cvv">CVV</Label>
          <Input id="cvv" placeholder="123" />
        </div>
      </div>
      <div className="space-y-2">
        <Label>Billing Address</Label>
        <RadioGroup defaultValue="same">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="same" id="same" />
            <Label htmlFor="same" className="text-sm sm:text-base">Same as shipping address</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="different" id="different" />
            <Label htmlFor="different" className="text-sm sm:text-base">Use a different billing address</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

function ReviewStep() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base sm:text-lg font-semibold">Order Summary</h3>
        <div className="mt-2 space-y-1 text-sm sm:text-base">
          <p>1x Elegant Evening Gown - $120.00</p>
          <p>2x Designer Handbag - $180.00</p>
          <p>1x Luxury Watch - $75.00</p>
        </div>
      </div>
      <div>
        <h3 className="text-base sm:text-lg font-semibold">Total</h3>
        <p className="text-xl sm:text-2xl font-bold">$375.00</p>
      </div>
      <div>
        <h3 className="text-base sm:text-lg font-semibold">Shipping Address</h3>
        <div className="mt-1 text-sm sm:text-base">
          <p>John Doe</p>
          <p>123 Main St</p>
          <p>New York, NY 10001</p>
          <p>United States</p>
        </div>
      </div>
      <div>
        <h3 className="text-base sm:text-lg font-semibold">Payment Method</h3>
        <p className="mt-1 text-sm sm:text-base">Visa ending in 3456</p>
      </div>
    </div>
  )
}

