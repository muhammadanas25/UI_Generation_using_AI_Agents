import React from 'react'
import { ShoppingBag, CreditCard, Truck, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

export default function CheckoutPage() {
  const [step, setStep] = React.useState(1)

  const nextStep = () => setStep(step + 1)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">ChicThreads</h1>
          <ShoppingBag className="h-6 w-6 text-gray-400" />
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white shadow-sm rounded-lg p-4 sm:p-6">
              <h2 className="text-lg font-semibold mb-4">Checkout</h2>
              <div className="flex justify-between mb-6 text-xs sm:text-sm">
                <div className={`flex items-center ${step >= 1 ? 'text-primary' : 'text-gray-400'}`}>
                  <div className="rounded-full bg-primary/10 p-1 sm:p-2 mr-1 sm:mr-2">
                    <ShoppingBag className="h-3 w-3 sm:h-4 sm:w-4" />
                  </div>
                  <span className="hidden sm:inline">Cart</span>
                </div>
                <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
                <div className={`flex items-center ${step >= 2 ? 'text-primary' : 'text-gray-400'}`}>
                  <div className="rounded-full bg-primary/10 p-1 sm:p-2 mr-1 sm:mr-2">
                    <Truck className="h-3 w-3 sm:h-4 sm:w-4" />
                  </div>
                  <span className="hidden sm:inline">Shipping</span>
                </div>
                <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
                <div className={`flex items-center ${step >= 3 ? 'text-primary' : 'text-gray-400'}`}>
                  <div className="rounded-full bg-primary/10 p-1 sm:p-2 mr-1 sm:mr-2">
                    <CreditCard className="h-3 w-3 sm:h-4 sm:w-4" />
                  </div>
                  <span className="hidden sm:inline">Payment</span>
                </div>
              </div>

              {step === 1 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Your Cart</h3>
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <div className="flex items-center mb-2 sm:mb-0">
                        <img src="/placeholder.svg?height=64&width=64" alt="Product" className="h-16 w-16 object-cover rounded mr-4" />
                        <div>
                          <h4 className="font-semibold">Elegant Summer Dress</h4>
                          <p className="text-sm text-gray-500">Size: M, Color: Blue</p>
                        </div>
                      </div>
                      <p className="font-semibold">$89.99</p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <div className="flex items-center mb-2 sm:mb-0">
                        <img src="/placeholder.svg?height=64&width=64" alt="Product" className="h-16 w-16 object-cover rounded mr-4" />
                        <div>
                          <h4 className="font-semibold">Classic Leather Handbag</h4>
                          <p className="text-sm text-gray-500">Color: Brown</p>
                        </div>
                      </div>
                      <p className="font-semibold">$129.99</p>
                    </div>
                  </div>
                  <Button className="w-full mt-6" onClick={nextStep}>Proceed to Shipping</Button>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" placeholder="123 Main St" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="New York" />
                      </div>
                      <div>
                        <Label htmlFor="zipCode">ZIP Code</Label>
                        <Input id="zipCode" placeholder="10001" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" placeholder="United States" />
                    </div>
                    <Button className="w-full" onClick={nextStep}>Proceed to Payment</Button>
                  </form>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input id="expiryDate" placeholder="MM/YY" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="nameOnCard">Name on Card</Label>
                      <Input id="nameOnCard" placeholder="John Doe" />
                    </div>
                    <RadioGroup defaultValue="credit" className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="credit" id="credit" />
                        <Label htmlFor="credit">Credit Card</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="debit" id="debit" />
                        <Label htmlFor="debit">Debit Card</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal">PayPal</Label>
                      </div>
                    </RadioGroup>
                    <Button className="w-full">Place Order</Button>
                  </form>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white shadow-sm rounded-lg p-4 sm:p-6">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$219.98</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>$9.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>$21.99</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>$251.96</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          &copy; 2023 ChicThreads. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

