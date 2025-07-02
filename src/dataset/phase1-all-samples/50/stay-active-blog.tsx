import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dumbbell, Trophy, ShoppingBag } from 'lucide-react'
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 py-4 flex flex-wrap items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Dumbbell className="h-6 w-6 mr-2" />
          <span className="font-bold text-lg">StayActive</span>
        </Link>
        <nav className="mt-4 w-full sm:w-auto sm:mt-0 flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Workouts
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Challenges
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Reviews
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Stay Active, Stay Healthy
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-sm sm:text-base md:text-xl">
                  Your go-to resource for workout guides, fitness challenges, and honest health product reviews.
                </p>
              </div>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
                <Button className="w-full sm:w-auto">Get Started</Button>
                <Button className="w-full sm:w-auto" variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Featured Posts</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Dumbbell className="w-8 h-8 mb-2" />
                  <CardTitle className="text-xl sm:text-2xl">10-Minute HIIT Workout</CardTitle>
                  <CardDescription>Quick and effective full-body workout</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">Boost your metabolism and burn fat with this intense 10-minute HIIT routine.</p>
                  <Button className="mt-4 w-full sm:w-auto" variant="outline">
                    Read More
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Trophy className="w-8 h-8 mb-2" />
                  <CardTitle className="text-xl sm:text-2xl">30-Day Plank Challenge</CardTitle>
                  <CardDescription>Strengthen your core in just a month</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">Join our 30-day plank challenge and see amazing results in your core strength.</p>
                  <Button className="mt-4 w-full sm:w-auto" variant="outline">
                    Join Challenge
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <ShoppingBag className="w-8 h-8 mb-2" />
                  <CardTitle className="text-xl sm:text-2xl">Best Protein Powders of 2024</CardTitle>
                  <CardDescription>Honest reviews of top supplements</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">We've tested the most popular protein powders. See our top picks for every goal.</p>
                  <Button className="mt-4 w-full sm:w-auto" variant="outline">
                    Read Reviews
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Stay Updated with StayActive
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground text-sm sm:text-base md:text-xl">
                  Subscribe to our newsletter for the latest workout tips, challenges, and product reviews.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="w-full sm:w-auto">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 StayActive. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

