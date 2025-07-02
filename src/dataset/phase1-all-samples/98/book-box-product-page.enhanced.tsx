import { useState } from 'react'
import { ChevronDown, Check, Star, BookOpen, Gift, Users2, Clock, RefreshCw } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from 'framer-motion'

export default function BookBoxProductPage() {
  const [selectedPlan, setSelectedPlan] = useState('monthly')

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-800">Discover Your Next Favorite Book with BookBox</h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8">Personalized book recommendations delivered to your doorstep every month.</p>
          <Button size="lg" className="animate-pulse hover:scale-105 transition-transform w-full md:w-auto">Start Your Free Trial</Button>
        </motion.div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-100 rounded-full opacity-50 animate-pulse"></div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">Why Choose BookBox?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: <BookOpen className="h-8 w-8 text-primary" />, title: "Curated Selection", description: "Hand-picked books tailored to your preferences" },
              { icon: <Gift className="h-8 w-8 text-primary" />, title: "Personalized Recommendations", description: "AI-powered suggestions that improve over time" },
              { icon: <Users2 className="h-8 w-8 text-primary" />, title: "Flexible Plans", description: "Choose between monthly, quarterly, or annual subscriptions" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white shadow-md rounded-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-700">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">Choose Your Plan</h2>
          <div className="flex flex-wrap justify-center mb-8">
            {['Monthly', 'Quarterly', 'Annual'].map((plan, index) => (
              <Button
                key={index}
                variant={selectedPlan === plan.toLowerCase() ? 'primary' : 'outline'}
                className={`m-2 ${selectedPlan === plan.toLowerCase() ? 'bg-primary text-white' : 'text-gray-700'}`}
                onClick={() => setSelectedPlan(plan.toLowerCase())}
              >
                {plan}
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { name: "Monthly", price: 19.99, features: ["1 book per month", "Free shipping", "Cancel anytime"] },
              { name: "Quarterly", price: 54.99, features: ["3 books per quarter", "Free shipping", "10% discount"] },
              { name: "Annual", price: 199.99, features: ["12 books per year", "Free shipping", "2 months free"] }
            ].map((plan, index) => (
              <Card
                key={index}
                className={`text-center transform transition-transform duration-300 hover:scale-105 ${selectedPlan === plan.name.toLowerCase() ? 'border-primary shadow-lg' : 'shadow-md'}`}
              >
                <CardHeader className="bg-gray-50">
                  <CardTitle className="text-xl md:text-2xl font-semibold text-gray-800">{plan.name}</CardTitle>
                  <CardDescription className="text-2xl md:text-3xl font-bold text-primary">${plan.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-center text-sm md:text-base text-gray-700">
                        <Check className="mr-2 h-4 w-4 md:h-5 md:w-5 text-green-500" /> {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={selectedPlan === plan.name.toLowerCase() ? 'default' : 'outline'}
                    onClick={() => setSelectedPlan(plan.name.toLowerCase())}
                  >
                    {selectedPlan === plan.name.toLowerCase() ? 'Selected' : 'Select Plan'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">What Our Readers Say</h2>
          <div className="flex flex-col md:flex-row md:overflow-x-scroll space-y-6 md:space-y-0 md:space-x-8 px-4">
            {[
              { name: "Sarah L.", quote: "BookBox has introduced me to so many amazing authors I never would have discovered on my own!", image: "/images/sarah.jpg" },
              { name: "Michael R.", quote: "The personalized recommendations are spot-on. It's like having a personal librarian!", image: "/images/michael.jpg" },
              { name: "Emily K.", quote: "I love the flexibility of the plans and the quality of books I receive every month.", image: "/images/emily.jpg" }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="md:min-w-[300px] bg-gray-50 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 h-4 w-4 md:h-5 md:w-5" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="italic text-sm md:text-base text-gray-600">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { question: "How does BookBox work?", answer: "BookBox uses your reading preferences and our expert curation to select books tailored to your tastes. We ship them directly to your door on a schedule that works for you." },
              { question: "Can I skip a month or cancel my subscription?", answer: "You can skip a month or cancel your subscription at any time with no penalties." },
              { question: "What if I receive a book I've already read?", answer: "No problem! Just let us know, and we'll send you a replacement book at no extra cost." },
              { question: "How are the books selected?", answer: "Our team of book enthusiasts and AI algorithms work together to ensure each selection matches your unique reading preferences." }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base md:text-xl font-medium text-gray-700">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 text-center bg-primary text-primary-foreground relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Reading Adventure?</h2>
          <p className="text-xl md:text-2xl mb-8">Join BookBox today and get your first month free!</p>
          <Button size="lg" variant="secondary" className="hover:scale-105 transition-transform w-full md:w-auto">
            Start Your Free Trial
          </Button>
        </motion.div>
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-white rounded-full opacity-20 animate-pulse"></div>
      </section>
    </div>
  )
}

