import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, Coins, GraduationCap, LayoutDashboard, TypeIcon as type, LucideIcon, Medal, Users, ArrowRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion'

export default function LearnChainLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="ml-2 text-2xl font-bold text-primary">LearnChain</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Courses
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Rewards
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Community
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Learn Blockchain. Earn Tokens. Build the Future.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    LearnChain revolutionizes online education with blockchain technology. Master Web3 skills and earn
                    crypto rewards for your achievements.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">Get Started</Button>
                  <Button size="lg" variant="outline">
                    Explore Courses
                  </Button>
                </div>
              </div>
              <Image
                alt="LearnChain Platform"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/placeholder.svg?height=310&width=550"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">Why Choose LearnChain?</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <FeatureCard
                icon={BookOpen}
                title="Expert-Led Courses"
                description="Learn from industry leaders and blockchain experts through our curated courses."
              />
              <FeatureCard
                icon={Coins}
                title="Token Rewards"
                description="Earn cryptocurrency tokens for completing courses and achieving learning milestones."
              />
              <FeatureCard
                icon={Users}
                title="Web3 Community"
                description="Join a vibrant community of learners and professionals in the blockchain space."
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">How It Works</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <ProcessStep number={1} title="Enroll in Courses" description="Choose from our wide range of Web3 courses." />
              <ProcessStep number={2} title="Complete Lessons" description="Watch videos, take quizzes, and finish projects." />
              <ProcessStep
                number={3}
                title="Earn Tokens"
                description="Receive LearnChain tokens for your completed courses and achievements."
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">Featured Courses</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <CourseCard
                title="Blockchain Fundamentals"
                description="Learn the basics of blockchain technology and its applications."
                image="/placeholder.svg?height=200&width=300"
              />
              <CourseCard
                title="Smart Contract Development"
                description="Master the art of writing and deploying smart contracts on Ethereum."
                image="/placeholder.svg?height=200&width=300"
              />
              <CourseCard
                title="DeFi Mastery"
                description="Explore the world of decentralized finance and its protocols."
                image="/placeholder.svg?height=200&width=300"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">What Our Learners Say</h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <TestimonialCard
                name="Alice Johnson"
                title="Blockchain Developer"
                quote="LearnChain's courses and token rewards motivated me to dive deep into blockchain development. Now, I'm building my own DApps!"
                avatar="/placeholder.svg?height=48&width=48"
              />
              <TestimonialCard
                name="Bob Smith"
                title="Crypto Enthusiast"
                quote="The knowledge I gained from LearnChain has been invaluable. The token rewards are a great bonus that keeps me coming back for more courses."
                avatar="/placeholder.svg?height=48&width=48"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Start Your Web3 Journey Today</h2>
              <p className="max-w-[600px] text-primary-foreground/90 md:text-xl">
                Join LearnChain and unlock the potential of blockchain technology while earning rewards for your progress.
              </p>
              <Button size="lg" variant="secondary">
                Sign Up Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 LearnChain. All rights reserved.</p>
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

function FeatureCard({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <Icon className="h-10 w-10 md:h-12 md:w-12 mb-4 text-primary animate-pulse" />
      <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm md:text-base text-gray-600">{description}</p>
    </motion.div>
  )
}

function ProcessStep({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -10 }}
    >
      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center text-white text-xl md:text-2xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm md:text-base text-gray-600">{description}</p>
    </motion.div>
  )
}

function CourseCard({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <motion.div
      className="flex flex-col overflow-hidden rounded-lg border bg-white shadow hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <Image
        alt={title}
        className="w-full h-40 md:h-48 object-cover"
        height="192"
        src={image}
        width="300"
      />
      <div className="p-4 md:p-6 flex flex-col flex-1">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-gray-900">{title}</h3>
        <p className="text-sm md:text-base text-gray-600 flex-1">{description}</p>
        <Button variant="outline" className="mt-4 md:mt-6 self-start hover:bg-primary/10">
          Learn More <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
        </Button>
      </div>
    </motion.div>
  )
}

function TestimonialCard({ name, title, quote, avatar }: { name: string; title: string; quote: string; avatar: string }) {
  return (
    <motion.div
      className="flex flex-col bg-white p-6 md:p-8 rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
      whileHover={{ translateY: -5 }}
    >
      <p className="text-sm md:text-base text-gray-700 italic mb-4 md:mb-6">"{quote}"</p>
      <div className="flex items-center mt-auto">
        <Image
          src={avatar}
          alt={name}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover mr-3 md:mr-4"
          width={48}
          height={48}
        />
        <div>
          <p className="font-semibold text-gray-900 text-sm md:text-base">{name}</p>
          <p className="text-gray-500 text-xs md:text-sm">{title}</p>
        </div>
      </div>
    </motion.div>
  )
}

