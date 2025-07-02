import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Menu } from 'lucide-react'

export default function Component() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-4 md:py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold">LiveWell</h1>
            <nav className="hidden md:block">
              <ul className="flex space-x-4">
                <li><Link href="#" className="hover:underline">Home</Link></li>
                <li><Link href="#" className="hover:underline">Wellness</Link></li>
                <li><Link href="#" className="hover:underline">Beauty</Link></li>
                <li><Link href="#" className="hover:underline">Fitness</Link></li>
                <li><Link href="#" className="hover:underline">About</Link></li>
              </ul>
            </nav>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8">
        <section className="mb-8 md:mb-12">
          <Card className="bg-secondary">
            <CardContent className="p-4 md:p-6">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-2">Featured Post: 10 Minute Morning Yoga Routine</h2>
                  <p className="text-sm md:text-base text-muted-foreground mb-4">Start your day right with this energizing yoga sequence that will awaken your body and mind.</p>
                  <Button>Read More</Button>
                </div>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img src="/placeholder.svg?height=300&width=400" alt="Woman doing yoga" className="object-cover w-full h-full" />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4">Wellness</h2>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">5 Meditation Techniques for Stress Relief</CardTitle>
              </CardHeader>
              <CardContent>
                <img src="/placeholder.svg?height=200&width=400" alt="Person meditating" className="rounded-lg mb-4 w-full" />
                <p className="text-sm md:text-base text-muted-foreground">Discover powerful meditation techniques to reduce stress and find inner peace.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Read More</Button>
              </CardFooter>
            </Card>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4">Beauty</h2>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Natural Skincare Routine for Glowing Skin</CardTitle>
              </CardHeader>
              <CardContent>
                <img src="/placeholder.svg?height=200&width=400" alt="Skincare products" className="rounded-lg mb-4 w-full" />
                <p className="text-sm md:text-base text-muted-foreground">Learn how to achieve radiant skin using all-natural ingredients from your kitchen.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Read More</Button>
              </CardFooter>
            </Card>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4">Fitness</h2>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">High-Intensity Interval Training for Busy Professionals</CardTitle>
              </CardHeader>
              <CardContent>
                <img src="/placeholder.svg?height=200&width=400" alt="Person exercising" className="rounded-lg mb-4 w-full" />
                <p className="text-sm md:text-base text-muted-foreground">Maximize your workout efficiency with these quick and effective HIIT routines.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Read More</Button>
              </CardFooter>
            </Card>
          </section>
        </div>

        <section className="mt-8 md:mt-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <Card>
            <CardContent className="p-4 md:p-6">
              <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <Input type="email" placeholder="Enter your email" className="flex-grow" />
                <Button type="submit" className="w-full sm:w-auto">Subscribe</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-secondary mt-8 md:mt-12 py-4 md:py-6">
        <div className="container mx-auto px-4 text-center text-sm md:text-base text-muted-foreground">
          <p>&copy; 2024 LiveWell. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

