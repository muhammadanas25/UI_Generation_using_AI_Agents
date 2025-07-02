import { Check, ChevronDown } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function MonthlyMunchProductPage() {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <header className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4">MonthlyMunch</h1>
        <p className="text-lg sm:text-xl text-muted-foreground">
          Discover new flavors every month with our curated snack boxes!
        </p>
      </header>

      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">What's Inside?</h2>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Variety of Snacks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base">
                Each box contains a carefully curated selection of 8-10 unique snacks from around the world.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Healthy Options</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base">
                We offer a mix of both indulgent treats and healthier alternatives to suit all preferences.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Cultural Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base">
                Explore new cultures through their traditional and popular snacks, with information cards included.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Surprise Element</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base">
                Each month brings a new theme and selection, keeping the excitement alive with every delivery.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Choose Your Plan</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Monthly</CardTitle>
              <CardDescription>Perfect for trying it out</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl sm:text-3xl font-bold">$24.99<span className="text-lg sm:text-xl font-normal">/month</span></p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm sm:text-base">
                  <Check className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Monthly curated box</span>
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <Check className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Cancel anytime</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Subscribe Now</Button>
            </CardFooter>
          </Card>
          <Card className="border-primary">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Quarterly</CardTitle>
              <CardDescription>Our most popular plan</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl sm:text-3xl font-bold">$22.99<span className="text-lg sm:text-xl font-normal">/month</span></p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm sm:text-base">
                  <Check className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>3 months of snacks</span>
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <Check className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Save $6 per month</span>
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <Check className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Free shipping</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Best Value - Subscribe Now</Button>
            </CardFooter>
          </Card>
          <Card className="sm:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Annual</CardTitle>
              <CardDescription>For the dedicated snacker</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl sm:text-3xl font-bold">$19.99<span className="text-lg sm:text-xl font-normal">/month</span></p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm sm:text-base">
                  <Check className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>12 months of snacks</span>
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <Check className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Save $60 per year</span>
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <Check className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Free shipping</span>
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <Check className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Exclusive annual bonus box</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Subscribe Now</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-sm sm:text-base">How does MonthlyMunch work?</AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base">
              MonthlyMunch delivers a curated box of unique snacks to your doorstep every month. Simply choose your subscription plan, and we'll take care of the rest!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-sm sm:text-base">Can I customize my snack preferences?</AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base">
              While we don't offer full customization, you can let us know about any dietary restrictions or allergies, and we'll do our best to accommodate them.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-sm sm:text-base">When will my box be delivered?</AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base">
              Boxes are typically shipped on the 1st of each month. Delivery times may vary depending on your location, but most customers receive their boxes within 3-5 business days.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-sm sm:text-base">Can I cancel or pause my subscription?</AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base">
              Yes, you can cancel or pause your subscription at any time through your account settings. Changes made before the 25th of the month will be effective for the next billing cycle.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="text-center">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Ready to Start Your Snack Adventure?</h2>
        <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
          Get Your First Box Now
        </Button>
      </section>
    </div>
  )
}

