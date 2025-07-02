import React from 'react'
import { ShoppingBag, CreditCard, Truck, ChevronRight, Trash2, Edit } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardBody, CardFooter } from "@/components/ui/card"
import { Transition } from '@headlessui/react'
import Image from 'next/image'

export default function CheckoutPage() {
  const [step, setStep] = React.useState(1)
  const [isEditing, setIsEditing] = React.useState(false)
  const [cartItems, setCartItems] = React.useState([
    { id: 1, name: 'Elegant Summer Dress', size: 'M', color: 'Blue', price: 89.99, image: '/dress.jpg' },
    { id: 2, name: 'Classic Leather Handbag', color: 'Brown', price: 129.99, image: '/handbag.jpg' },
  ])

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 flex flex-col">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="ChicThreads Logo" width={40} height={40} className="rounded-full" />
            <h1 className="text-2xl font-extrabold text-gray-800">ChicThreads</h1>
          </div>
          <ShoppingBag className="h-6 w-6 text-primary" />
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Checkout</h2>
              <div className="flex items-center mb-8">
                <div className={`flex items-center ${step >= 1 ? 'text-primary' : 'text-gray-400'}`}>
                  <div className={`rounded-full p-3 ${step >= 1 ? 'bg-primary/20' : 'bg-gray-200'}`}>
                    <ShoppingBag className="h-5 w-5" />
                  </div>
                  <span className="ml-2 font-medium">Cart</span>
                </div>
                <ChevronRight className={`h-5 w-5 mx-2 ${step >= 2 ? 'text-primary' : 'text-gray-400'}`} />
                <div className={`flex items-center ${step >= 2 ? 'text-primary' : 'text-gray-400'}`}>
                  <div className={`rounded-full p-3 ${step >= 2 ? 'bg-primary/20' : 'bg-gray-200'}`}>
                    <Truck className="h-5 w-5" />
                  </div>
                  <span className="ml-2 font-medium">Shipping</span>
                </div>
                <ChevronRight className={`h-5 w-5 mx-2 ${step >= 3 ? 'text-primary' : 'text-gray-400'}`} />
                <div className={`flex items-center ${step >= 3 ? 'text-primary' : 'text-gray-400'}`}>
                  <div className={`rounded-full p-3 ${step >= 3 ? 'bg-primary/20' : 'bg-gray-200'}`}>
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <span className="ml-2 font-medium">Payment</span>
                </div>
              </div>

              <Transition
                show={step === 1}
                enter="transition-opacity duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-700">Your Cart</h3>
                  <div className="space-y-6">
                    {cartItems.map(item => (
                      <Card key={item.id} className="flex items-center p-4 hover:bg-gray-50 transition-colors">
                        <Image src={item.image} alt={item.name} width={64} height={64} className="rounded-lg object-cover" />
                        <div className="ml-4 flex-grow">
                          <h4 className="font-medium text-gray-800">{item.name}</h4>
                          <p className="text-sm text-gray-500">
                            {item.size && `Size: ${item.size}, `}Color: {item.color}
                          </p>
                          <p className="font-semibold mt-2">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)}>
                            <Edit className="h-4 w-4 text-gray-600" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                  <div className="flex justify-between mt-6">
                    <Button variant="outline" onClick={() => setStep(step - 1)} disabled={step === 1}>
                      Back
                    </Button>
                    <Button onClick={nextStep}>Proceed to Shipping</Button>
                  </div>
                </div>
              </Transition>

              <Transition
                show={step === 2}
                enter="transition-opacity duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-700">Shipping Information</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <div className="flex justify-between">
                      <Button variant="outline" onClick={prevStep}>
                        Back
                      </Button>
                      <Button onClick={nextStep}>Proceed to Payment</Button>
                    </div>
                  </form>
                </div>
              </Transition>

              <Transition
                show={step === 3}
                enter="transition-opacity duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-700">Payment Details</h3>
                  <form className="space-y-6">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <div>
                      <Label>Payment Method</Label>
                      <RadioGroup defaultValue="credit" className="flex space-x-6">
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
                    </div>
                    <div className="flex justify-between">
                      <Button variant="outline" onClick={prevStep}>
                        Back
                      </Button>
                      <Button type="submit">Place Order</Button>
                    </div>
                  </form>
                </div>
              </Transition>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Order Summary</h3>
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between items-center">
                    <span className="text-gray-600">{item.name} x{cartItems.length}</span>
                    <span className="font-medium text-gray-800">${(item.price * cartItems.length).toFixed(2)}</span>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span>$9.99</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax</span>
                  <span>$21.99</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-gray-800">
                  <span>Total</span>
                  <span>${(cartItems.reduce((acc, item) => acc + item.price, 0) + 9.99 + 21.99).toFixed(2)}</span>
                </div>
                <Button className="w-full mt-4" onClick={() => setStep(1)}>
                  Edit Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white shadow-inner">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-center">
          <p className="text-sm text-gray-500">&copy; 2023 ChicThreads. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}