import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$19",
    features: [
      "1 Project",
      "5 Team Members",
      "Basic Analytics",
      "24/7 Support",
    ],
  },
  {
    name: "Pro",
    price: "$49",
    features: [
      "5 Projects",
      "20 Team Members",
      "Advanced Analytics",
      "Priority Support",
    ],
  },
  {
    name: "Business",
    price: "$99",
    features: [
      "Unlimited Projects",
      "Unlimited Team Members",
      "Custom Analytics",
      "Dedicated Support",
    ],
  },
  {
    name: "Enterprise",
    price: "$199",
    features: [
      "White-label Solution",
      "Custom Integrations",
      "Advanced Security",
      "Account Manager",
    ],
  },
  {
    name: "Ultimate",
    price: "$299",
    features: [
      "Unlimited Everything",
      "AI-powered Insights",
      "Blockchain Integration",
      "24/7 Concierge",
    ],
    highlighted: true,
  },
];

export default function PricingComponent() {
  return (
    <div className="py-8 px-4 sm:py-12 sm:px-6 lg:px-8 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-8 sm:mb-12">
          Choose Your Web3 Plan
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`rounded-lg shadow-lg overflow-hidden ${
                tier.highlighted
                  ? "bg-gradient-to-br from-purple-600 to-indigo-600 text-white sm:transform sm:scale-105 sm:z-10"
                  : "bg-white"
              }`}
            >
              <div className="p-6">
                <h3
                  className={`text-xl sm:text-2xl font-semibold ${
                    tier.highlighted ? "text-white" : "text-gray-900"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`mt-4 text-3xl sm:text-4xl font-bold ${
                    tier.highlighted ? "text-white" : "text-gray-900"
                  }`}
                >
                  {tier.price}
                  <span
                    className={`text-sm sm:text-base font-medium ${
                      tier.highlighted ? "text-gray-100" : "text-gray-500"
                    }`}
                  >
                    /mo
                  </span>
                </p>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check
                          className={`h-5 w-5 sm:h-6 sm:w-6 ${
                            tier.highlighted
                              ? "text-indigo-200"
                              : "text-green-500"
                          }`}
                        />
                      </div>
                      <p
                        className={`ml-3 text-sm sm:text-base ${
                          tier.highlighted ? "text-white" : "text-gray-700"
                        }`}
                      >
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`px-6 py-4 ${
                  tier.highlighted ? "bg-indigo-700" : "bg-gray-100"
                }`}
              >
                <button
                  className={`block w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-center text-sm font-medium ${
                    tier.highlighted
                      ? "text-indigo-600 bg-white hover:bg-gray-50"
                      : "text-white bg-indigo-600 hover:bg-indigo-700"
                  }`}
                >
                  {tier.highlighted ? "Get Started Now" : "Select Plan"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
