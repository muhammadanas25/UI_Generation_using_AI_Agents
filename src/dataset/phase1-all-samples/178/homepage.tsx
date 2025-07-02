import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, BarChart, Target, Users, Mail, Phone, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <BarChart className="h-6 w-6" />
          <span className="sr-only">StrategyGuru</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Case Studies
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Strategies
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Welcome to StrategyGuru
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Elevating brands through data-driven marketing strategies and innovative solutions.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-black hover:bg-gray-200">Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Featured Case Studies</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>E-commerce Growth</CardTitle>
                  <CardDescription>How we increased online sales by 200%</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Learn about our strategic approach that led to significant growth for an e-commerce client.</p>
                  <Button variant="link" className="mt-4">
                    Read Case Study
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Brand Revitalization</CardTitle>
                  <CardDescription>Refreshing a 50-year-old brand for the digital age</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Discover how we helped a traditional company adapt to modern marketing challenges.</p>
                  <Button variant="link" className="mt-4">
                    Read Case Study
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Social Media Mastery</CardTitle>
                  <CardDescription>Building a community of 1M+ followers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Explore our tactics for creating engaging content and growing a massive social media presence.</p>
                  <Button variant="link" className="mt-4">
                    Read Case Study
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Marketing Strategies</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Target className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Targeted Campaigns</h3>
                <p className="text-gray-500">Precision-focused strategies to reach your ideal audience.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BarChart className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Data Analytics</h3>
                <p className="text-gray-500">In-depth analysis to drive informed decision-making.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Community Building</h3>
                <p className="text-gray-500">Fostering loyal customer communities for sustainable growth.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Client Results</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold">200%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Increase in online sales for e-commerce clients</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold">1M+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Social media followers gained for brands</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold">50%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Average increase in customer engagement</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold">30+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Successful brand launches</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Get in Touch</h2>
            <div className="flex flex-col items-center space-y-4 text-center">
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto max-w-[700px]">
                Ready to take your marketing to the next level? Let's discuss how StrategyGuru can help you achieve your goals.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Button className="inline-flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </Button>
                <Button variant="outline" className="inline-flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 StrategyGuru. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex items-center">
          <Link className="text-gray-500 hover:text-gray-700" href="#">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </footer>
    </div>
  )
}