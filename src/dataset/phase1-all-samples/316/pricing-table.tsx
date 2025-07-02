import { Check, X } from "lucide-react"

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
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Storage Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            <div className="p-6 bg-white">
              <h3 className="text-lg font-semibold text-gray-900">
                {plan.name}
              </h3>
              <p className="mt-4 text-3xl font-bold text-gray-900">
                {plan.price}
                <span className="text-base font-medium text-gray-500">
                  /month
                </span>
              </p>
              <p className="mt-1 text-sm text-gray-500">{plan.storage}</p>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-500" aria-hidden="true" />
                    </div>
                    <p className="ml-3 text-sm text-gray-700">{feature}</p>
                  </li>
                ))}
                {plan.notIncluded.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0">
                      <X className="h-5 w-5 text-red-500" aria-hidden="true" />
                    </div>
                    <p className="ml-3 text-sm text-gray-500">{feature}</p>
                  </li>
                ))}
              </ul>
              <button
                className="mt-8 block w-full bg-primary text-white rounded-md py-2 text-sm font-semibold hover:bg-primary-dark transition-colors"
                type="button"
              >
                Choose {plan.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}