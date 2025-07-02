import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { TrendingUp, DollarSign, PieChart, Search, Menu, X } from 'lucide-react'

export default function FinanceBlog() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-bold">InvestSmart</h1>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            <nav className="hidden md:block">
              <ul className="flex space-x-4">
                <li><Link href="#" className="hover:underline">Home</Link></li>
                <li><Link href="#" className="hover:underline">Investments</Link></li>
                <li><Link href="#" className="hover:underline">Stock Market</Link></li>
                <li><Link href="#" className="hover:underline">Personal Finance</Link></li>
              </ul>
            </nav>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden">
            <ul className="flex flex-col space-y-2 px-4 py-2">
              <li><Link href="#" className="block py-2 hover:underline">Home</Link></li>
              <li><Link href="#" className="block py-2 hover:underline">Investments</Link></li>
              <li><Link href="#" className="block py-2 hover:underline">Stock Market</Link></li>
              <li><Link href="#" className="block py-2 hover:underline">Personal Finance</Link></li>
            </ul>
          </nav>
        )}
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <Card className="bg-secondary text-secondary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold">Featured Article</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Featured article thumbnail"
                  className="rounded-lg object-cover w-full md:w-1/2 h-48 md:h-auto"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl md:text-2xl font-semibold mb-2">10 Investment Strategies for a Bull Market</h2>
                    <p className="text-sm md:text-base text-muted-foreground mb-4">
                      Discover the top investment strategies to maximize your returns during a bull market. Our experts share
                      insights on sector rotation, growth stocks, and more.
                    </p>
                  </div>
                  <Button className="w-full md:w-auto">Read More</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Understanding Market Volatility",
                excerpt: "Learn how to navigate market ups and downs with confidence.",
                icon: <TrendingUp className="h-6 w-6" />,
              },
              {
                title: "Budgeting 101: Take Control of Your Finances",
                excerpt: "Essential tips for creating and sticking to a personal budget.",
                icon: <DollarSign className="h-6 w-6" />,
              },
              {
                title: "Diversification: The Key to a Balanced Portfolio",
                excerpt: "Explore strategies for spreading risk across different asset classes.",
                icon: <PieChart className="h-6 w-6" />,
              },
            ].map((article, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                    {article.icon}
                    <span>{article.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-muted-foreground">{article.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full md:w-auto">Read Article</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <Card>
            <CardContent className="pt-6">
              <form className="flex flex-col md:flex-row gap-4">
                <Input type="email" placeholder="Enter your email" className="flex-grow" />
                <Button type="submit" className="w-full md:w-auto">Subscribe</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm md:text-base text-center md:text-left">&copy; 2023 InvestSmart. All rights reserved.</p>
            <nav>
              <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
                <li><Link href="#" className="text-sm md:text-base hover:underline">Privacy Policy</Link></li>
                <li><Link href="#" className="text-sm md:text-base hover:underline">Terms of Service</Link></li>
                <li><Link href="#" className="text-sm md:text-base hover:underline">Contact Us</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

