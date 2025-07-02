import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Code, GraduationCap, BarChart, Users, Zap, Menu, X, Facebook, Twitter, Linkedin } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export default function DeFiLearnLanding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white shadow-md fixed w-full z-50">
        <Link className="flex items-center justify-center" href="#">
          <GraduationCap className="h-6 w-6 mr-2 text-purple-600" />
          <span className="font-bold text-xl text-purple-600">DeFiLearn</span>
        </Link>
        <nav className="ml-auto hidden lg:flex gap-6">
          <Link className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors" href="#">
            Courses
          </Link>
          <Link className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors" href="#">
            About
          </Link>
          <Button className="bg-purple-600 text-white hover:bg-purple-700 transition-colors">Sign Up</Button>
        </nav>
        <div className="ml-auto lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
            {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 lg:hidden"
          >
            <Link className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors" href="#">
              Features
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors" href="#">
              Courses
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors" href="#">
              Pricing
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors" href="#">
              About
            </Link>
            <Button className="bg-purple-600 text-white hover:bg-purple-700 transition-colors">Sign Up</Button>
          </motion.nav>
        )}
      </header>
      <main className="flex-1 mt-16">
        <section className="w-full py-20 md:py-32 lg:py-40 xl:py-56 bg-gradient-to-r from-purple-500 to-indigo-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center text-white">
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="space-y-3"
              >
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
                  Master DeFi with DeFiLearn
                </h1>
                <p className="mx-auto max-w-xl text-gray-200 md:text-xl">
                  Your gateway to understanding and excelling in decentralized finance. From beginners to experts, we've got you covered.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <Button className="bg-white text-purple-600 hover:bg-gray-100 transition-colors">Get Started</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600 transition-colors">
                  Learn More
                </Button>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <img src="/hero-illustration.svg" alt="DeFi Illustration" className="w-full max-w-md" />
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Why Choose DeFiLearn?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}
                className="cursor-pointer"
              >
                <Card className="h-full">
                  <CardHeader>
                    <BookOpen className="w-8 h-8 mb-2 text-purple-600" />
                    <CardTitle>Comprehensive Curriculum</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>From blockchain basics to advanced DeFi strategies, our courses cover it all.</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}
                className="cursor-pointer"
              >
                <Card className="h-full">
                  <CardHeader>
                    <Users className="w-8 h-8 mb-2 text-purple-600" />
                    <CardTitle>Expert Instructors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Learn from industry professionals and seasoned DeFi practitioners.</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}
                className="cursor-pointer"
              >
                <Card className="h-full">
                  <CardHeader>
                    <Zap className="w-8 h-8 mb-2 text-purple-600" />
                    <CardTitle>Interactive Learning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Engage with hands-on projects, quizzes, and real-world DeFi simulations.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2 items-center">
              <motion.div
                className="space-y-4"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">For Beginners</div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Start Your DeFi Journey
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our beginner-friendly courses introduce you to the world of decentralized finance. Learn about blockchain, cryptocurrencies, and basic DeFi concepts.
                </p>
                <Button className="bg-purple-600 text-white hover:bg-purple-700 transition-colors">Explore Beginner Courses</Button>
              </motion.div>
              <motion.div
                className="space-y-4"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-600">For Experts</div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Advance Your DeFi Skills
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Dive deep into advanced topics like yield farming, liquidity provision, and DeFi protocol development. Stay ahead of the curve with our expert-level content.
                </p>
                <Button className="bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">Discover Advanced Courses</Button>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Master DeFi?</h2>
                <p className="max-w-2xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of learners and start your DeFi education journey today. Get access to our full course library and expert community.
                </p>
              </div>
              <motion.div
                className="w-full max-w-md space-y-4"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <form className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
                  <Input className="flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="w-full sm:w-auto">Sign Up</Button>
                </form>
                <p className="text-xs text-gray-500">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="h-full flex flex-col">
                <CardContent className="flex-1">
                  <p className="text-gray-600">"DeFiLearn transformed my understanding of decentralized finance. The courses are well-structured and the instructors are top-notch."</p>
                </CardContent>
                <CardHeader className="mt-4">
                  <div className="flex items-center space-x-3">
                    <img src="/user1.jpg" alt="User 1" className="w-10 h-10 rounded-full" />
                    <div>
                      <CardTitle className="text-sm">Jane Doe</CardTitle>
                      <p className="text-xs text-gray-500">Crypto Enthusiast</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              <Card className="h-full flex flex-col">
                <CardContent className="flex-1">
                  <p className="text-gray-600">"The interactive projects helped me apply what I learned in real-world scenarios. Highly recommend DeFiLearn to anyone serious about DeFi."</p>
                </CardContent>
                <CardHeader className="mt-4">
                  <div className="flex items-center space-x-3">
                    <img src="/user2.jpg" alt="User 2" className="w-10 h-10 rounded-full" />
                    <div>
                      <CardTitle className="text-sm">John Smith</CardTitle>
                      <p className="text-xs text-gray-500">Blockchain Developer</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              <Card className="h-full flex flex-col">
                <CardContent className="flex-1">
                  <p className="text-gray-600">"The expert instructors provided invaluable insights into advanced DeFi strategies. My portfolio has grown significantly thanks to DeFiLearn."</p>
                </CardContent>
                <CardHeader className="mt-4">
                  <div className="flex items-center space-x-3">
                    <img src="/user3.jpg" alt="User 3" className="w-10 h-10 rounded-full" />
                    <div>
                      <CardTitle className="text-sm">Alice Johnson</CardTitle>
                      <p className="text-xs text-gray-500">Financial Analyst</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 bg-white shadow-inner">
        <p className="text-xs text-gray-500">© 2024 DeFiLearn. All rights reserved.</p>
        <div className="flex gap-4">
          <Link className="text-xs text-gray-500 hover:text-purple-600 transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-gray-500 hover:text-purple-600 transition-colors" href="#">
            Privacy
          </Link>
        </div>
        <div className="flex gap-3 ml-auto">
          <Link href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
            <Facebook className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
            <Twitter className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
            <Linkedin className="w-5 h-5" />
          </Link>
        </div>
      </footer>
    </div>
  )
}