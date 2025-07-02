import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dumbbell, Flame, Zap } from "lucide-react"

export default function TrainWithMeHomepage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Dumbbell className="h-6 w-6" />
          <span className="sr-only">TrainWithMe</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Challenges
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Guides
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Testimonials
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Transform Your Body, Transform Your Life
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Join TrainWithMe and embark on a fitness journey that will challenge you, inspire you, and help you
                  achieve your goals.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Fitness Challenges</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <Flame className="w-8 h-8 mb-2 text-orange-500" />
                  <CardTitle>30-Day Fat Burn</CardTitle>
                  <CardDescription>Torch calories and sculpt your body in just 30 days.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>High-intensity workouts designed to maximize fat loss and build lean muscle.</p>
                </CardContent>
                <CardFooter>
                  <Button>Join Challenge</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="w-8 h-8 mb-2 text-yellow-500" />
                  <CardTitle>Strength Builder</CardTitle>
                  <CardDescription>Increase your strength and power over 8 weeks.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Progressive overload training to help you lift heavier and get stronger.</p>
                </CardContent>
                <CardFooter>
                  <Button>Join Challenge</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Dumbbell className="w-8 h-8 mb-2 text-blue-500" />
                  <CardTitle>Full Body Recomp</CardTitle>
                  <CardDescription>Transform your physique in 12 weeks.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Balanced program of strength training and cardio for total body transformation.</p>
                </CardContent>
                <CardFooter>
                  <Button>Join Challenge</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Workout Guides</h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Beginner's Guide to Weightlifting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Learn proper form and technique for fundamental lifts. Perfect for those new to strength training.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Download Guide</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Advanced HIIT Routines</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Take your high-intensity interval training to the next level with these advanced routines.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Download Guide</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Success Stories</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>Sarah M.</CardTitle>
                    <CardDescription>Lost 30 lbs in 3 months</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      "TrainWithMe's personalized approach and motivating challenges helped me achieve my weight loss goals.
                      I've never felt better!"
                    </p>
                  </CardContent>
                  <CardFooter>
                    <img
                      alt={`Before and after picture of Sarah M.`}
                      className="aspect-[2/1] overflow-hidden rounded-lg object-cover"
                      height="200"
                      src={`/placeholder.svg?height=200&width=400`}
                      width="400"
                    />
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform?</h2>
                <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                  Join TrainWithMe today and start your journey to a healthier, stronger you.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" size="lg">
                  Start Your Free Trial
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 TrainWithMe. All rights reserved.</p>
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