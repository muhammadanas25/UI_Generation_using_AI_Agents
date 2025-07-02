import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
    icon: "🚀",
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
    icon: "💼",
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
    icon: "🏢",
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
    icon: "🏆",
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
    icon: "✨",
  },
];

export default function PricingComponent() {
  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-8 sm:mb-12 md:mb-16">
          Choose Your Web3 Plan
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`flex flex-col justify-between p-4 sm:p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 ${
                tier.highlighted
                  ? "bg-gradient-to-br from-purple-600 to-indigo-600 text-white relative"
                  : "bg-white"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute top-0 right-0 mt-2 mr-2 sm:mt-4 sm:mr-4 bg-yellow-400 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div>
                <div className="flex items-center justify-center mb-3 sm:mb-4 text-3xl sm:text-4xl">
                  {tier.icon}
                </div>
                <h3
                  className={`text-xl sm:text-2xl font-semibold text-center ${
                    tier.highlighted ? "text-white" : "text-gray-900"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`mt-3 sm:mt-4 text-4xl sm:text-5xl font-bold text-center ${
                    tier.highlighted ? "text-white" : "text-gray-900"
                  }`}
                >
                  {tier.price}
                  <span
                    className={`text-base sm:text-lg font-medium block ${
                      tier.highlighted ? "text-gray-100" : "text-gray-500"
                    }`}
                  >
                    /mo
                  </span>
                </p>
                <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check
                          className={`h-5 w-5 sm:h-6 sm:w-6 mt-0.5 ${
                            tier.highlighted
                              ? "text-indigo-200"
                              : "text-green-500"
                          }`}
                        />
                      </div>
                      <p
                        className={`ml-2 sm:ml-3 text-sm sm:text-base ${
                          tier.highlighted ? "text-white" : "text-gray-700"
                        }`}
                      >
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 sm:mt-8">
                <Button
                  className={`w-full py-2 sm:py-3 px-3 sm:px-4 text-sm font-medium rounded-md transition-colors duration-300 ${
                    tier.highlighted
                      ? "bg-white text-indigo-600 hover:bg-gray-50"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  }`}
                >
                  {tier.highlighted ? "Get Started Now" : "Select Plan"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8 sm:mt-12 flex justify-center">
          <button className="text-indigo-600 font-medium hover:underline transition">
            Compare All Features
          </button>
        </div>
      </div>
    </div>
  );
}
