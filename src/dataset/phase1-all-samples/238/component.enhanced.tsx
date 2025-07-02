import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GitHubIcon, LinkedInIcon, TwitterIcon, ArrowRightIcon, CheckIcon } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="px-4 lg:px-6 h-20 flex items-center shadow-md bg-white dark:bg-gray-900 fixed w-full z-10">
        <Link className="flex items-center justify-center" href="#">
          <ChainIcon className="h-8 w-8 text-indigo-600" />
          <span className="ml-3 text-3xl font-extrabold text-indigo-600">ChainGov</span>
        </Link>
        <nav className="ml-auto flex gap-6">
          <Link className="text-md font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-200" href="#features">
            Features
          </Link>
          <Link className="text-md font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-200" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-md font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-200" href="#contact">
            Contact
          </Link>
          <Button variant="ghost" className="flex items-center space-x-2">
            <span>Login</span>
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </nav>
      </header>
      <main className="flex-1 pt-20">
        <section className="w-full py-20 bg-gradient-to-r from-indigo-500 to-purple-600">
          <div className="container mx-auto px-4">
            <motion.div
              className="flex flex-col items-center text-center space-y-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
                Empower Your DAO with ChainGov
              </h1>
              <p className="max-w-3xl text-lg sm:text-xl md:text-2xl text-gray-200">
                Decentralized voting system for DAOs. Secure, transparent, and efficient governance for the future of decentralized organizations.
              </p>
              <div className="flex space-x-4">
                <Button className="px-6 py-3 bg-indigo-700 hover:bg-indigo-800 transition-colors duration-200">
                  Get Started
                </Button>
                <Button variant="outline" className="px-6 py-3 border-indigo-700 text-indigo-700 hover:bg-indigo-50 transition-colors duration-200">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        <section id="features" className="w-full py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Key Features
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<LockIcon className="h-8 w-8 text-indigo-600" />}
                title="Secure Voting"
                description="End-to-end encryption ensures the integrity and confidentiality of every vote."
              />
              <FeatureCard
                icon={<BarChartIcon className="h-8 w-8 text-indigo-600" />}
                title="Real-time Results"
                description="Watch the voting process unfold with live updates and transparent tallying."
              />
              <FeatureCard
                icon={<UsersIcon className="h-8 w-8 text-indigo-600" />}
                title="Customizable Governance"
                description="Tailor voting mechanisms to fit your DAO's unique needs and structure."
              />
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              How It Works
            </motion.h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 space-y-6">
                <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">Simple 3-Step Process</h3>
                <ol className="list-decimal list-inside space-y-4 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-indigo-600 mt-1 mr-3" />
                    Connect your wallet and join your DAO's governance portal
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-indigo-600 mt-1 mr-3" />
                    Participate in ongoing proposals or create new ones
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-indigo-600 mt-1 mr-3" />
                    Vote securely and watch real-time results unfold
                  </li>
                </ol>
              </div>
              <motion.div
                className="md:w-1/2 rounded-xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src="/dashboard-animated.gif"
                  alt="ChainGov Dashboard"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div
              className="flex flex-col items-center text-center space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100">
                Ready to Revolutionize Your DAO?
              </h2>
              <p className="max-w-2xl text-lg sm:text-xl text-gray-600 dark:text-gray-400">
                Join the future of decentralized governance. Sign up for early access and be among the first to experience ChainGov.
              </p>
              <form className="w-full max-w-md flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
                <Input placeholder="Enter your email" type="email" className="flex-1" />
                <Button type="submit" className="w-full sm:w-auto px-6 py-3 bg-indigo-700 hover:bg-indigo-800 transition-colors duration-200">
                  Sign Up
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-white dark:bg-gray-900 shadow-inner">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 ChainGov. All rights reserved.</p>
          <nav className="flex space-x-6 mt-4 sm:mt-0">
            <Link className="text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-200" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-200" href="#">
              Privacy
            </Link>
          </nav>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="#" aria-label="GitHub" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-200">
              <GitHubIcon className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-200">
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-200">
              <LinkedInIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <div className="bg-indigo-100 dark:bg-indigo-700 p-3 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  )
}

function ChainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="animated-spin"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}

function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function BarChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

<style jsx global>{`
  .animated-spin {
    animation: spin 4s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`}</style>