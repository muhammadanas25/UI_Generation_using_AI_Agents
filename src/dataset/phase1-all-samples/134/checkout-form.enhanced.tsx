'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from 'lucide-react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @media (max-width: 640px) {
    html {
      font-size: 14px;
    }
  }
`

const steps = ['Shipping', 'Billing', 'Review']

export default function CheckoutForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingAddress: 'same',
    billingFirstName: '',
    billingLastName: '',
    billingAddressDetail: '',
    billingCity: '',
    billingZipCode: '',
    billingCountry: ''
  })

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0))

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const handleSelectChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <Card className="w-full max-w-3xl mx-auto p-6 shadow-lg rounded-lg transition-transform duration-500 transform hover:scale-105">
      <CardHeader className="flex flex-col items-center">
        <CardTitle className="text-2xl font-bold text-primary mb-2">RentMyStyle Checkout</CardTitle>
        <p className="text-sm text-muted-foreground">Step {currentStep + 1} of {steps.length}</p>
      </CardHeader>
      <CardContent>
        <div className="mb-8">
          <ProgressIndicator currentStep={currentStep} steps={steps} />
        </div>
        <div className="transition-opacity duration-500 ease-in-out">
          {currentStep === 0 && <ShippingStep formData={formData} handleChange={handleChange} />}
          {currentStep === 1 && <BillingStep formData={formData} handleChange={handleChange} handleSelectChange={handleSelectChange} />}
          {currentStep === 2 && <ReviewStep formData={formData} />}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={prevStep} disabled={currentStep === 0} className="px-6 py-2 hover:bg-muted transition">
          Previous
        </Button>
        <Button onClick={nextStep} disabled={currentStep === steps.length - 1} className="px-6 py-2 bg-primary hover:bg-primary-dark transition">
          {currentStep === steps.length - 1 ? 'Place Order' : 'Next'}
        </Button>
      </CardFooter>
    </Card>
  )
}

<GlobalStyle />

function ProgressIndicator({ currentStep, steps }) {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${index < currentStep ? 'bg-primary text-white' :
                index === currentStep ? 'bg-secondary text-white' :
                  'bg-gray-200 text-gray-500'
              }`}
          >
            {index < currentStep ? <CheckCircle className="w-6 h-6" /> : index + 1}
          </div>
          <div className="ml-3 text-sm font-medium">{step}</div>
          {index < steps.length - 1 && (
            <div className={`flex-1 h-1 mx-2 transition-colors duration-300 ${index < currentStep ? 'bg-primary' : 'bg-gray-200'}`} />
          )}
        </div>
      ))}
    </div>
  )
}

function ShippingStep({ formData, handleChange }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name <span className="text-red-500">*</span></Label>
          <Input
            id="firstName"
            placeholder="John"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="focus:ring-primary focus:border-primary transition duration-200"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name <span className="text-red-500">*</span></Label>
          <Input
            id="lastName"
            placeholder="Doe"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="focus:ring-primary focus:border-primary transition duration-200"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="address">Address <span className="text-red-500">*</span></Label>
        <Input
          id="address"
          placeholder="123 Main St"
          value={formData.address}
          onChange={handleChange}
          required
          className="focus:ring-primary focus:border-primary transition duration-200"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="city">City <span className="text-red-500">*</span></Label>
          <Input
            id="city"
            placeholder="New York"
            value={formData.city}
            onChange={handleChange}
            required
            className="focus:ring-primary focus:border-primary transition duration-200"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="zipCode">ZIP Code <span className="text-red-500">*</span></Label>
          <Input
            id="zipCode"
            placeholder="10001"
            value={formData.zipCode}
            onChange={handleChange}
            required
            className="focus:ring-primary focus:border-primary transition duration-200"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="country">Country <span className="text-red-500">*</span></Label>
        <Select value={formData.country} onValueChange={(value) => handleChange({ target: { id: 'country', value } })}>
          <SelectTrigger id="country" className="w-full">
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="ca">Canada</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="au">Australia</SelectItem>
            <SelectItem value="de">Germany</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

function BillingStep({ formData, handleChange, handleSelectChange }) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="cardName">Name on Card <span className="text-red-500">*</span></Label>
        <Input
          id="cardName"
          placeholder="John Doe"
          value={formData.cardName}
          onChange={handleChange}
          required
          className="focus:ring-primary focus:border-primary transition duration-200"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="cardNumber">Card Number <span className="text-red-500">*</span></Label>
        <Input
          id="cardNumber"
          placeholder="1234 5678 9012 3456"
          value={formData.cardNumber}
          onChange={handleChange}
          required
          className="focus:ring-primary focus:border-primary transition duration-200"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="expiryDate">Expiry Date <span className="text-red-500">*</span></Label>
          <Input
            id="expiryDate"
            placeholder="MM/YY"
            value={formData.expiryDate}
            onChange={handleChange}
            required
            className="focus:ring-primary focus:border-primary transition duration-200"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cvv">CVV <span className="text-red-500">*</span></Label>
          <Input
            id="cvv"
            placeholder="123"
            value={formData.cvv}
            onChange={handleChange}
            required
            className="focus:ring-primary focus:border-primary transition duration-200"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label>Billing Address</Label>
        <RadioGroup
          value={formData.billingAddress}
          onValueChange={(value) => handleSelectChange('billingAddress', value)}
          className="flex flex-col space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="same" id="same" />
            <Label htmlFor="same">Same as shipping address</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="different" id="different" />
            <Label htmlFor="different">Use a different billing address</Label>
          </div>
        </RadioGroup>
      </div>
      {formData.billingAddress === 'different' && (
        <div className="mt-4 space-y-6 p-4 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="billingFirstName">First Name <span className="text-red-500">*</span></Label>
              <Input
                id="billingFirstName"
                placeholder="Jane"
                value={formData.billingFirstName}
                onChange={handleChange}
                required
                className="focus:ring-primary focus:border-primary transition duration-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="billingLastName">Last Name <span className="text-red-500">*</span></Label>
              <Input
                id="billingLastName"
                placeholder="Doe"
                value={formData.billingLastName}
                onChange={handleChange}
                required
                className="focus:ring-primary focus:border-primary transition duration-200"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="billingAddressDetail">Address <span className="text-red-500">*</span></Label>
            <Input
              id="billingAddressDetail"
              placeholder="456 Another St"
              value={formData.billingAddressDetail}
              onChange={handleChange}
              required
              className="focus:ring-primary focus:border-primary transition duration-200"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="billingCity">City <span className="text-red-500">*</span></Label>
              <Input
                id="billingCity"
                placeholder="Los Angeles"
                value={formData.billingCity}
                onChange={handleChange}
                required
                className="focus:ring-primary focus:border-primary transition duration-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="billingZipCode">ZIP Code <span className="text-red-500">*</span></Label>
              <Input
                id="billingZipCode"
                placeholder="90001"
                value={formData.billingZipCode}
                onChange={handleChange}
                required
                className="focus:ring-primary focus:border-primary transition duration-200"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="billingCountry">Country <span className="text-red-500">*</span></Label>
            <Select
              value={formData.billingCountry}
              onValueChange={(value) => handleSelectChange('billingCountry', value)}
            >
              <SelectTrigger id="billingCountry" className="w-full">
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
                <SelectItem value="de">Germany</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </div>
  )
}

function ReviewStep({ formData }) {
  return (
    <div className="space-y-6">
      <div className="p-4 bg-gray-50 rounded-md shadow-inner flex flex-col space-y-2">
        <h3 className="text-lg font-semibold">Order Summary</h3>
        <div className="space-y-1">
          <p>1x Elegant Evening Gown - $120.00</p>
          <p>2x Designer Handbag - $180.00</p>
          <p>1x Luxury Watch - $75.00</p>
        </div>
      </div>
      <div className="p-4 bg-gray-50 rounded-md shadow-inner flex flex-col space-y-2">
        <h3 className="text-lg font-semibold">Total</h3>
        <p className="text-2xl font-bold">$375.00</p>
      </div>
      <div className="p-4 bg-gray-50 rounded-md shadow-inner flex flex-col space-y-2">
        <h3 className="text-lg font-semibold">Shipping Address</h3>
        <p>{formData.firstName} {formData.lastName}</p>
        <p>{formData.address}</p>
        <p>{formData.city}, {formData.zipCode}</p>
        <p>{formData.country}</p>
      </div>
      <div className="p-4 bg-gray-50 rounded-md shadow-inner flex flex-col space-y-2">
        <h3 className="text-lg font-semibold">Payment Method</h3>
        <p>Visa ending in {formData.cardNumber.slice(-4)}</p>
      </div>
    </div>
  )
}

