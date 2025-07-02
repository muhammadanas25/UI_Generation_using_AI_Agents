import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, Menu, X } from 'lucide-react'
import { useState } from "react"

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-purple-800">GlowBoxMonthly</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#tiers" className="text-gray-700 hover:text-purple-700 transition">
              Subscription
            </a>
            <a href="#products" className="text-gray-700 hover:text-purple-700 transition">
              Products
            </a>
            <a href="#why" className="text-gray-700 hover:text-purple-700 transition">
              Why Us
            </a>
            <Button variant="ghost" className="ml-4 bg-purple-600 hover:bg-purple-700 text-white">
              Get Started
            </Button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
              {isOpen ? <X className="h-6 w-6 text-purple-800" /> : <Menu className="h-6 w-6 text-purple-800" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-white shadow-md">
            <a href="#tiers" className="block px-4 py-2 text-gray-700 hover:bg-purple-100">
              Subscription
            </a>
            <a href="#products" className="block px-4 py-2 text-gray-700 hover:bg-purple-100">
              Products
            </a>
            <a href="#why" className="block px-4 py-2 text-gray-700 hover:bg-purple-100">
              Why Us
            </a>
            <Button variant="ghost" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2">
              Get Started
            </Button>
          </div>
        )}
      </nav>

      <div className="container mx-auto px-4 py-20 sm:py-24">
        <header className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-800 mb-4 animate-fade-in">GlowBoxMonthly</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 animate-fade-in-delay">
            Discover your perfect beauty routine, one box at a time.
          </p>
        </header>

        <section id="tiers" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {[
            {
              title: "Starter Glow",
              price: "$19.99",
              description: "Perfect for beauty beginners",
              features: ["3-4 sample-sized products", "Monthly beauty tips", "Access to community forums"],
              image: "/starter-glow.png",
            },
            {
              title: "Radiant Glow",
              price: "$34.99",
              description: "Our most popular plan",
              features: ["5-6 full-sized products", "Exclusive beauty tutorials", "Early access to new products", "Free shipping"],
              image: "/radiant-glow.png",
            },
            {
              title: "Ultimate Glow",
              price: "$49.99",
              description: "For the beauty enthusiast",
              features: ["7-8 full-sized premium products", "Personalized beauty consultation", "Luxury beauty tool each quarter", "Priority shipping"],
              image: "/ultimate-glow.png",
            },
          ].map((tier, index) => (
            <Card
              key={index}
              className={`transform transition-transform hover:scale-105 shadow-lg ${index === 1 ? "border-purple-400 border-2" : "border-transparent"
                }`}
            >
              <CardHeader>
                <img src={tier.image} alt={tier.title} className="w-full h-32 sm:h-40 object-cover rounded-t-lg" />
                <CardTitle className="text-xl sm:text-2xl font-bold text-purple-700 mt-4">{tier.title}</CardTitle>
                <CardDescription className="text-gray-500">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 animate-bounce-in">{tier.price}<span className="text-base font-normal text-gray-600">/month</span></p>
                <ul className="space-y-2">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 transition transform hover:translate-y-[-2px]">
                  Subscribe Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </section>

        <section id="products" className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-800 mb-6 text-center animate-fade-in">This Month's Glow Box</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { name: "Radiant Serum", brand: "GlowUp", image: "/radiant-serum.png" },
              { name: "Hydrating Mask", brand: "MoistMaster", image: "/hydrating-mask.png" },
              { name: "Illuminating Powder", brand: "ShineOn", image: "/illuminating-powder.png" },
              { name: "Gentle Cleanser", brand: "PureSkin", image: "/gentle-cleanser.png" },
            ].map((product, index) => (
              <div key={index} className="text-center transform transition-transform hover:scale-105">
                <div className="bg-white rounded-lg shadow-md p-2 sm:p-4 mb-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-24 sm:h-32 md:h-40 object-cover rounded"
                  />
                </div>
                <h3 className="font-semibold text-purple-700 text-sm sm:text-base">{product.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{product.brand}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="why" className="text-center bg-white rounded-lg shadow-lg p-4 sm:p-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-800 mb-4 animate-fade-in">Why Choose GlowBoxMonthly?</h2>
          <div className="flex justify-center mb-4 animate-grow-in">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 animate-fade-in-delay">
            Join thousands of happy subscribers and transform your beauty routine!
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <Badge className="text-xs sm:text-sm py-1 px-2 sm:px-3 bg-purple-100 text-purple-800 transition-transform hover:scale-110">
              Cruelty-Free
            </Badge>
            <Badge className="text-xs sm:text-sm py-1 px-2 sm:px-3 bg-purple-100 text-purple-800 transition-transform hover:scale-110">
              Vegan Options
            </Badge>
            <Badge className="text-xs sm:text-sm py-1 px-2 sm:px-3 bg-purple-100 text-purple-800 transition-transform hover:scale-110">
              Eco-Friendly
            </Badge>
            <Badge className="text-xs sm:text-sm py-1 px-2 sm:px-3 bg-purple-100 text-purple-800 transition-transform hover:scale-110">
              Dermatologist Approved
            </Badge>
          </div>
        </section>

        <section className="mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-6 text-center">What Our Subscribers Say</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Emily R.",
                testimonial: "GlowBoxMonthly has completely changed my beauty routine! The products are top-notch and always a pleasant surprise.",
              },
              {
                name: "Michael S.",
                testimonial: "I love the variety in each box. It's like getting a personalized spa treatment every month.",
              },
              {
                name: "Sophia L.",
                testimonial: "The customer service is excellent, and the products are cruelty-free which aligns with my values.",
              },
            ].map((user, index) => (
              <Card key={index} className="shadow-lg transform transition-transform hover:scale-105">
                <CardContent className="p-4 sm:p-6">
                  <p className="text-sm sm:text-base text-gray-700 italic mb-4">"{user.testimonial}"</p>
                  <h3 className="text-purple-700 font-semibold">{user.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }
        .animate-fade-in-delay {
          animation: fadeIn 1s ease-in-out 0.5s forwards;
          opacity: 0;
        }
        .animate-bounce-in {
          animation: bounceIn 1s ease-in-out;
        }
        .animate-grow-in {
          animation: growIn 1s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes bounceIn {
          0% {
            transform: scale(0.9);
            opacity: 0;
          }
          60% {
            transform: scale(1.05);
            opacity: 1;
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes growIn {
          from {
            transform: scale(0.5);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

