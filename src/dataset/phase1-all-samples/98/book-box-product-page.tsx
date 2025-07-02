import { useState } from 'react'
import { ChevronDown, Check, Star } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function BookBoxProductPage() {
  const [selectedPlan, setSelectedPlan] = useState('monthly')

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Discover Your Next Favorite Book with BookBox</h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">Personalized book recommendations delivered to your doorstep every month.</p>
        <Button size="lg" className="w-full md:w-auto">Start Your Free Trial</Button>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Why Choose BookBox?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Curated Selection", description: "Hand-picked books tailored to your preferences" },
              { title: "Personalized Recommendations", description: "AI-powered suggestions that improve over time" },
              { title: "Flexible Plans", description: "Choose between monthly, quarterly, or annual subscriptions" }
            ].map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { name: "Monthly", price: 19.99, features: ["1 book per month", "Free shipping", "Cancel anytime"] },
              { name: "Quarterly", price: 54.99, features: ["3 books per quarter", "Free shipping", "10% discount"] },
              { name: "Annual", price: 199.99, features: ["12 books per year", "Free shipping", "2 months free"] }
            ].map((plan, index) => (
              <Card key={index} className={`text-center ${selectedPlan === plan.name.toLowerCase() ? 'border-primary' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-lg md:text-xl">${plan.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-center text-sm md:text-base">
                        <Check className="mr-2 h-4 w-4 text-primary" /> {feature}
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
      <section className="py-12 md:py-16 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">What Our Readers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { name: "Sarah L.", quote: "BookBox has introduced me to so many amazing authors I never would have discovered on my own!" },
              { name: "Michael R.", quote: "The personalized recommendations are spot-on. It's like having a personal librarian!" }
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-center md:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 w-4 h-4 md:w-5 md:h-5 mr-1" />
                    ))}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="italic text-sm md:text-base">"{testimonial.quote}"</p>
                  <p className="mt-4 font-semibold text-sm md:text-base">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              { question: "How does BookBox work?", answer: "BookBox uses your reading preferences and our expert curation to select books tailored to your tastes. We ship them directly to your door on a schedule that works for you." },
              { question: "Can I skip a month or cancel my subscription?", answer: "You can skip a month or cancel your subscription at any time with no penalties." },
              { question: "What if I receive a book I've already read?", answer: "No problem! Just let us know, and we'll send you a replacement book at no extra cost." }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-sm md:text-base">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-sm md:text-base">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 text-center bg-primary text-primary-foreground">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Reading Adventure?</h2>
        <p className="text-lg md:text-xl mb-8">Join BookBox today and get your first month free!</p>
        <Button size="lg" variant="secondary" className="w-full md:w-auto">Start Your Free Trial</Button>
      </section>
    </div>
  )
}

