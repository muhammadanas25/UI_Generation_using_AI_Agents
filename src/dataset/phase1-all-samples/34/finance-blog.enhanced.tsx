import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { TrendingUp, DollarSign, PieChart, Search, Menu, X, TrendingDown, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function FinanceBlog() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-primary text-primary-foreground shadow-md fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold">InvestSmart</h1>
          <nav className="hidden md:flex space-x-4 lg:space-x-6 items-center">
            <Link href="#" className="hover:text-secondary transition-colors text-sm lg:text-base">Home</Link>
            <Link href="#" className="hover:text-secondary transition-colors text-sm lg:text-base">Investments</Link>
            <Link href="#" className="hover:text-secondary transition-colors text-sm lg:text-base">Stock Market</Link>
            <Link href="#" className="hover:text-secondary transition-colors text-sm lg:text-base">Personal Finance</Link>
            <div className="relative hidden lg:block">
              <Input type="text" placeholder="Search..." className="w-40 lg:w-48 pl-10 focus:outline-none text-sm" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
          </nav>
          <Button variant="ghost" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-primary text-primary-foreground px-4 pb-4 space-y-2">
            <Link href="#" className="block hover:bg-secondary p-2 rounded transition-colors">Home</Link>
            <Link href="#" className="block hover:bg-secondary p-2 rounded transition-colors">Investments</Link>
            <Link href="#" className="block hover:bg-secondary p-2 rounded transition-colors">Stock Market</Link>
            <Link href="#" className="block hover:bg-secondary p-2 rounded transition-colors">Personal Finance</Link>
            <div className="relative mt-2">
              <Input type="text" placeholder="Search..." className="w-full pl-10 focus:outline-none" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
          </nav>
        )}
      </header>

      <main className="container mx-auto px-4 pt-20 sm:pt-24 pb-8 flex-grow">
        <section className="mb-8 sm:mb-16">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-primary">Featured Article</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-1/2">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Featured article thumbnail"
                    className="rounded-lg object-cover w-full h-48 sm:h-64 md:h-full"
                  />
                  <div className="absolute top-2 left-2 bg-secondary text-white px-2 py-1 rounded-full text-xs sm:text-sm">
                    Trending
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold mb-2">10 Investment Strategies for a Bull Market</h2>
                    <p className="text-gray-600 text-sm sm:text-base mb-4">
                      Discover the top investment strategies to maximize your returns during a bull market. Our experts share
                      insights on sector rotation, growth stocks, and more.
                    </p>
                  </div>
                  <Button className="self-start hover:bg-secondary hover:text-white transition-colors">
                    Read More
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8 sm:mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold">Recent Articles</h2>
            <Button variant="link" className="text-primary text-sm sm:text-base">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Understanding Market Volatility",
                excerpt: "Learn how to navigate market ups and downs with confidence.",
                icon: TrendingDown,
              },
              {
                title: "Budgeting 101: Take Control of Your Finances",
                excerpt: "Essential tips for creating and sticking to a personal budget.",
                icon: DollarSign,
              },
              {
                title: "Diversification: The Key to a Balanced Portfolio",
                excerpt: "Explore strategies for spreading risk across different asset classes.",
                icon: PieChart,
              },
              {
                title: "Retirement Planning Made Easy",
                excerpt: "Steps to secure your financial future and enjoy a comfortable retirement.",
                icon: TrendingUp,
              },
              {
                title: "Real Estate Investment Tips",
                excerpt: "Maximize your returns in the real estate market with these tips.",
                icon: TrendingUp,
              },
              {
                title: "Cryptocurrency: Risks and Rewards",
                excerpt: "An in-depth look at investing in cryptocurrencies safely.",
                icon: DollarSign,
              },
            ].map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex items-center space-x-2">
                  <article.icon className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                  <CardTitle className="text-base sm:text-lg">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm sm:text-base">{article.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full sm:w-auto hover:bg-secondary hover:text-white transition-colors">
                    Read Article
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-8 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Subscribe to Our Newsletter</h2>
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <form className="flex flex-col sm:flex-row items-center gap-4">
                <div className="relative w-full sm:w-auto flex-1">
                  <Input type="email" placeholder="Enter your email" className="pr-10" />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                </div>
                <Button type="submit" className="w-full sm:w-auto">
                  Subscribe
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-6 sm:py-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="mb-4 sm:mb-0 text-sm sm:text-base">&copy; 2023 InvestSmart. All rights reserved.</p>
          <nav className="flex flex-wrap justify-center gap-4 mb-4 sm:mb-0">
            <Link href="#" className="hover:underline text-sm sm:text-base">Privacy Policy</Link>
            <Link href="#" className="hover:underline text-sm sm:text-base">Terms of Service</Link>
            <Link href="#" className="hover:underline text-sm sm:text-base">Contact Us</Link>
          </nav>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 hover:text-secondary transition-colors" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 hover:text-secondary transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 hover:text-secondary transition-colors" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5 hover:text-secondary transition-colors" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

