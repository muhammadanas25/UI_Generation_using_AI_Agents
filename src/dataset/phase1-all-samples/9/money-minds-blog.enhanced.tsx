"use client";

import Link from "next/link"
import { Mail, Sun, Moon, Menu, X } from 'lucide-react'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export default function Component() {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <header className="px-4 lg:px-6 h-16 flex items-center justify-between sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
          <Link className="flex items-center justify-center space-x-2" href="#">
            <MoneyMindsLogo className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">MoneyMinds</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
              Home
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
              Saving Tips
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
              Product Reviews
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => setDarkMode(!darkMode)} className="p-2">
              {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
            </Button>
            <Button variant="ghost" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </header>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-800 px-4 py-2 space-y-2 shadow-md"
          >
            <Link className="block text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition py-2" href="#">
              Home
            </Link>
            <Link className="block text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition py-2" href="#">
              Saving Tips
            </Link>
            <Link className="block text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition py-2" href="#">
              Product Reviews
            </Link>
            <Link className="block text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition py-2" href="#">
              About
            </Link>
          </motion.nav>
        )}
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
            <div className="container px-4 md:px-6">
              <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2 items-center">
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-800 dark:text-white md:text-5xl xl:text-6xl">
                    Welcome to MoneyMinds
                  </h1>
                  <p className="max-w-lg text-base sm:text-lg text-gray-600 dark:text-gray-300">
                    Your guide to smart saving and informed financial decisions.
                  </p>
                  <Button variant="default" className="mt-4 w-full sm:w-auto">Get Started</Button>
                </motion.div>
                <motion.img
                  src="/financial-illustration.svg"
                  alt="Financial Illustration"
                  className="w-full h-auto rounded-lg shadow-lg"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
                <div className="space-y-4">
                  <Card className="w-full hover:shadow-2xl transition-shadow">
                    <CardHeader className="bg-blue-500 text-white rounded-t-lg">
                      <CardTitle>Featured Post</CardTitle>
                      <CardDescription>5 Easy Ways to Save $500 This Month</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Discover simple strategies to boost your savings and reach your financial goals faster.
                      </p>
                      <img src="/savings-tips.jpg" alt="Savings Tips" className="mt-4 rounded-md w-full h-auto" />
                    </CardContent>
                    <CardFooter>
                      <Link className="text-sm underline underline-offset-4 text-blue-500 hover:text-blue-700 transition" href="#">
                        Read More
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card className="w-full hover:shadow-2xl transition-shadow">
                    <CardHeader className="bg-green-500 text-white rounded-t-lg">
                      <CardTitle>Latest Review</CardTitle>
                      <CardDescription>Best High-Yield Savings Accounts of 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        We compare the top high-yield savings accounts to help you maximize your interest earnings.
                      </p>
                      <img src="/savings-accounts.jpg" alt="Savings Accounts" className="mt-4 rounded-md w-full h-auto" />
                    </CardContent>
                    <CardFooter>
                      <Link className="text-sm underline underline-offset-4 text-green-500 hover:text-green-700 transition" href="#">
                        Read More
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
                <div className="flex flex-col items-start space-y-4">
                  <Card className="w-full">
                    <CardHeader className="bg-yellow-500 text-white rounded-t-lg">
                      <CardTitle>Join Our Community</CardTitle>
                      <CardDescription>Connect with like-minded individuals</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Share your experiences and learn from others on their financial journeys.
                      </p>
                      <img src="/community.jpg" alt="Community" className="mt-4 rounded-md w-full h-auto" />
                    </CardContent>
                    <CardFooter>
                      <Link className="text-sm underline underline-offset-4 text-yellow-500 hover:text-yellow-700 transition" href="#">
                        Join Now
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <div className="grid gap-10 px-4 sm:px-10 md:gap-16 md:grid-cols-3">
                <div className="space-y-4 md:col-span-2">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-gray-800 dark:text-white md:text-4xl">Recent Posts</h2>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {[
                      {
                        title: "How to Create a Budget That Actually Works",
                        description: "Learn the key principles of effective budgeting and stick to your financial plan.",
                        image: "/budgeting.jpg",
                      },
                      {
                        title: "Investing 101: Getting Started in the Stock Market",
                        description: "A beginner's guide to understanding stocks, bonds, and mutual funds.",
                        image: "/investing.jpg",
                      },
                      {
                        title: "The Pros and Cons of Credit Card Rewards Programs",
                        description: "Maximize your benefits while avoiding common pitfalls of reward credit cards.",
                        image: "/credit-cards.jpg",
                      },
                      {
                        title: "How to Negotiate a Higher Salary: Tips from HR Experts",
                        description: "Increase your earning potential with these proven negotiation strategies.",
                        image: "/salary-negotiation.jpg",
                      },
                    ].map((post, index) => (
                      <Card key={index} className="hover:shadow-2xl transition-shadow">
                        <CardHeader className="rounded-t-lg overflow-hidden p-0">
                          <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
                        </CardHeader>
                        <CardContent className="p-4">
                          <CardTitle className="text-lg text-gray-800 dark:text-white">{post.title}</CardTitle>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{post.description}</p>
                        </CardContent>
                        <CardFooter className="p-4">
                          <Link className="text-sm underline underline-offset-4 text-indigo-500 hover:text-indigo-700 transition" href="#">
                            Read More
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  <Card className="p-4 shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">Categories</h3>
                    <ul className="mt-2 space-y-2">
                      <li>
                        <Link className="text-sm text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
                          Budgeting
                        </Link>
                      </li>
                      <li>
                        <Link className="text-sm text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
                          Saving
                        </Link>
                      </li>
                      <li>
                        <Link className="text-sm text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
                          Investing
                        </Link>
                      </li>
                      <li>
                        <Link className="text-sm text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
                          Credit Cards
                        </Link>
                      </li>
                      <li>
                        <Link className="text-sm text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
                          Retirement Planning
                        </Link>
                      </li>
                    </ul>
                  </Card>
                  <Card className="p-4 shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">Newsletter</h3>
                    <form className="mt-4 space-y-2">
                      <Input placeholder="Enter your email" type="email" className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200" />
                      <Button type="submit" className="w-full">Subscribe</Button>
                    </form>
                  </Card>
                  <Card className="p-4 shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">Follow Us</h3>
                    <div className="flex space-x-4 mt-4">
                      <Link href="#" className="text-blue-500 hover:text-blue-700 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.942 13.942 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.573 4.897 4.897 0 0 1-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.918 4.918 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.513 14.01-14.01 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z" />
                        </svg>
                      </Link>
                      <Link href="#" className="text-blue-400 hover:text-blue-600 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.928 2.205-4.928 4.928 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.19 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.6 3.416-1.68 1.319-3.809 2.105-6.102 2.105-.394 0-.779-.023-1.17-.067 2.189 1.397 4.768 2.212 7.557 2.212 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.635.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                        </svg>
                      </Link>
                      <Link href="#" className="text-pink-500 hover:text-pink-700 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.428.403a4.92 4.92 0 0 1 1.675 1.09 4.92 4.92 0 0 1 1.09 1.675c.163.458.349 1.258.403 2.428.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.428a4.932 4.932 0 0 1-1.09 1.675 4.932 4.932 0 0 1-1.675 1.09c-.458.163-1.258.349-2.428.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.428-.403a4.932 4.932 0 0 1-1.675-1.09 4.932 4.932 0 0 1-1.09-1.675c-.163-.458-.349-1.258-.403-2.428-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.428a4.92 4.92 0 0 1 1.09-1.675 4.92 4.92 0 0 1 1.675-1.09c.458-.163 1.258-.349 2.428-.403 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.332.013 7.052.07 5.772.127 4.793.31 4.013.635a7.072 7.072 0 0 0-2.575 1.694A7.072 7.072 0 0 0 .635 4.913c-.325.78-.508 1.759-.565 3.039C.013 8.332 0 8.756 0 12c0 3.244.013 3.668.07 4.948.057 1.28.24 2.259.565 3.039a7.072 7.072 0 0 0 1.694 2.575 7.072 7.072 0 0 0 2.575 1.694c.78.325 1.759.508 3.039.565 1.28.058 1.704.07 4.948.07s3.668-.013 4.948-.07c1.28-.057 2.259-.24 3.039-.565a7.072 7.072 0 0 0 2.575-1.694 7.072 7.072 0 0 0 1.694-2.575c.325-.78.508-1.759.565-3.039.058-1.28.07-1.704.07-4.948s-.013-3.668-.07-4.948c-.057-1.28-.24-2.259-.565-3.039a7.072 7.072 0 0 0-1.694-2.575A7.072 7.072 0 0 0 19.038.635c-.78-.325-1.759-.508-3.039-.565C15.668.013 15.244 0 12 0z" />
                          <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                          <circle cx="18.406" cy="5.594" r="1.44" />
                        </svg>
                      </Link>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900">
          <p className="text-xs text-gray-600 dark:text-gray-400">© 2024 MoneyMinds. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  )
}

function MoneyMindsLogo(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
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

