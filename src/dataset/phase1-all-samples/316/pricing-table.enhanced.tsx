import { Check, X } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function PricingTable() {
  const plans = [
    {
      name: "Basic",
      price: "$5",
      storage: "100 GB",
      features: [
        "End-to-end encryption",
        "File versioning",
        "Web access",
        "Mobile app access",
      ],
      notIncluded: ["Unlimited devices", "Priority support"],
      image: "/images/basic-plan.svg",
    },
    {
      name: "Pro",
      price: "$15",
      storage: "1 TB",
      features: [
        "End-to-end encryption",
        "File versioning",
        "Web access",
        "Mobile app access",
        "Unlimited devices",
      ],
      notIncluded: ["Priority support"],
      image: "/images/pro-plan.svg",
    },
    {
      name: "Enterprise",
      price: "Custom",
      storage: "10+ TB",
      features: [
        "End-to-end encryption",
        "File versioning",
        "Web access",
        "Mobile app access",
        "Unlimited devices",
        "Priority support",
      ],
      notIncluded: [],
      image: "/images/enterprise-plan.svg",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-extrabold text-center mb-12">Choose Your Storage Plan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className="transform transition-transform duration-300 hover:scale-105 shadow-lg"
          >
            <CardHeader className="flex flex-col items-center">
              <Image src={plan.image} alt={`${plan.name} plan`} width={80} height={80} />
              <CardTitle className="mt-4 text-2xl font-bold">{plan.name}</CardTitle>
              <p className="mt-2 text-4xl font-extrabold text-primary">
                {plan.price}
                <span className="text-xl font-medium text-gray-500">/month</span>
              </p>
              <p className="mt-1 text-md text-gray-600">{plan.storage} Storage</p>
            </CardHeader>
            <CardContent>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-6 w-6 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
                {plan.notIncluded.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <X className="h-6 w-6 text-red-500" aria-hidden="true" />
                    <span className="ml-3 text-sm text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                variant="primary"
                className="w-full hover:bg-primary-dark transition-colors"
              >
                Choose {plan.name}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-16 text-center">
        <Button variant="secondary" size="lg" className="px-8 py-3">
          Compare All Features
        </Button>
      </div>
    </div>
  )
}