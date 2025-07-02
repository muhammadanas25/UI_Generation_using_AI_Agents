"use client";

import Link from "next/link"
import { Mail, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <MoneyMindsLogo className="h-6 w-6" />
          <span className="sr-only">MoneyMinds</span>
        </Link>
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
        <nav className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-14 left-0 right-0 bg-background md:top-0 flex-col md:flex-row gap-4 p-4 md:p-0 shadow-lg md:shadow-none z-50`}>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Saving Tips
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Product Reviews
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Welcome to MoneyMinds
                </h1>
                <p className="max-w-[600px] text-muted-foreground text-sm sm:text-base md:text-lg">
                  Your guide to smart saving and informed financial decisions.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>Featured Post</CardTitle>
                    <CardDescription>5 Easy Ways to Save $500 This Month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Discover simple strategies to boost your savings and reach your financial goals faster.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link className="text-sm underline underline-offset-4" href="#">
                      Read More
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>Latest Review</CardTitle>
                    <CardDescription>Best High-Yield Savings Accounts of 2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We compare the top high-yield savings accounts to help you maximize your interest earnings.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link className="text-sm underline underline-offset-4" href="#">
                      Read More
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-4 sm:px-10 md:gap-16 md:grid-cols-3">
              <div className="space-y-4 md:col-span-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Recent Posts</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      title: "How to Create a Budget That Actually Works",
                      description: "Learn the key principles of effective budgeting and stick to your financial plan.",
                    },
                    {
                      title: "Investing 101: Getting Started in the Stock Market",
                      description: "A beginner's guide to understanding stocks, bonds, and mutual funds.",
                    },
                    {
                      title: "The Pros and Cons of Credit Card Rewards Programs",
                      description: "Maximize your benefits while avoiding common pitfalls of reward credit cards.",
                    },
                    {
                      title: "How to Negotiate a Higher Salary: Tips from HR Experts",
                      description: "Increase your earning potential with these proven negotiation strategies.",
                    },
                  ].map((post, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{post.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{post.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Link className="text-sm underline underline-offset-4" href="#">
                          Read More
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold tracking-tighter">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link className="text-sm hover:underline underline-offset-4" href="#">
                      Budgeting
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm hover:underline underline-offset-4" href="#">
                      Saving
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm hover:underline underline-offset-4" href="#">
                      Investing
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm hover:underline underline-offset-4" href="#">
                      Credit Cards
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm hover:underline underline-offset-4" href="#">
                      Retirement Planning
                    </Link>
                  </li>
                </ul>
                <Separator className="my-4" />
                <h3 className="text-xl font-bold tracking-tighter">Newsletter</h3>
                <form className="space-y-2">
                  <Input placeholder="Enter your email" type="email" />
                  <Button type="submit" className="w-full">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 MoneyMinds. All rights reserved.</p>
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

function MoneyMindsLogo(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 18V6" />
    </svg>
  )
}

