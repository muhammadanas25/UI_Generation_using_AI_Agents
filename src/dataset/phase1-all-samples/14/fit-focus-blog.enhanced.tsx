import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dumbbell, Utensils, ChevronRight, Facebook, Twitter, Instagram, Menu, X } from "lucide-react"
import Link from "next/link"

export default function Component() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold">FitFocus</h1>
          <nav className="hidden md:flex space-x-6">
            <Link href="#" className="hover:text-secondary transition-colors">Home</Link>
            <Link href="#" className="hover:text-secondary transition-colors">Workouts</Link>
            <Link href="#" className="hover:text-secondary transition-colors">Nutrition</Link>
            <Link href="#" className="hover:text-secondary transition-colors">About</Link>
            <Link href="#" className="hover:text-secondary transition-colors">Contact</Link>
          </nav>
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-primary text-primary-foreground absolute top-16 left-0 w-full shadow-lg transition-transform duration-300">
            <div className="flex flex-col space-y-4 px-4 py-6">
              <button
                className="self-end"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>
              <Link href="#" className="hover:text-secondary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link href="#" className="hover:text-secondary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Workouts</Link>
              <Link href="#" className="hover:text-secondary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Nutrition</Link>
              <Link href="#" className="hover:text-secondary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link href="#" className="hover:text-secondary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <section className="relative bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1554284126-aa88f22d63c5?auto=format&fit=crop&w=1950&q=80")' }}>
          <div className="bg-black bg-opacity-50">
            <div className="container mx-auto px-4 py-20 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">Transform Your Fitness Journey</h2>
              <p className="text-xl md:text-2xl mb-6 animate-fadeIn delay-200">Join FitFocus for expert workouts and nutrition tips</p>
              <Button className="animate-fadeIn delay-400">
                Get Started <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Dumbbell className="mr-2 w-6 h-6" /> Latest Workout Routines
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "30-Minute HIIT Blast",
                  description: "Boost your fitness with our latest workout",
                  image: "https://images.unsplash.com/photo-1554284126-aa88f22d63c5?auto=format&fit=crop&w=400&q=80",
                  link: "#"
                },
                {
                  title: "Full Body Strength Training",
                  description: "Build muscle and strength with targeted exercises",
                  image: "https://images.unsplash.com/photo-1594737625785-f1186b9f3ed4?auto=format&fit=crop&w=400&q=80",
                  link: "#"
                },
                {
                  title: "Yoga for Flexibility",
                  description: "Enhance your flexibility and balance",
                  image: "https://images.unsplash.com/photo-1554284126-aa88f22d63c5?auto=format&fit=crop&w=400&q=80",
                  link: "#"
                },
              ].map((workout) => (
                <Card key={workout.title} className="transition transform hover:scale-105">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${workout.image})` }}></div>
                  <CardHeader className="mt-4">
                    <CardTitle>{workout.title}</CardTitle>
                    <CardDescription>{workout.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-4">
                    <Button variant="outline" href={workout.link}>View Routine</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Utensils className="mr-2 w-6 h-6" /> Nutrition Tips
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "5 Protein-Packed Smoothie Recipes",
                  description: "Fuel your body with delicious smoothies",
                  image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
                  link: "#"
                },
                {
                  title: "Meal Prep Ideas for Busy Professionals",
                  description: "Stay on track with easy meal prep",
                  image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80",
                  link: "#"
                },
                {
                  title: "Understanding Macronutrients",
                  description: "Learn the basics of proteins, carbs, and fats",
                  image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80",
                  link: "#"
                },
              ].map((tip) => (
                <Card key={tip.title} className="transition transform hover:scale-105">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${tip.image})` }}></div>
                  <CardHeader className="mt-4">
                    <CardTitle>{tip.title}</CardTitle>
                    <CardDescription>{tip.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-4">
                    <Button variant="outline" href={tip.link}>Read More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-secondary rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-6">Get the latest workouts and nutrition tips straight to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">FitFocus</h3>
              <p>Empowering you to reach your fitness goals</p>
            </div>
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="text-center">
              <p>&copy; 2023 FitFocus. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

