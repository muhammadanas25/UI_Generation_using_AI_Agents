import Image from "next/image"
import { Heart, Leaf, Brain, Menu, X, Sun, Moon } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Component() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-green-50 dark:bg-gray-900 transition-colors duration-300">
        <header className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-green-700 dark:text-green-400 transition-colors duration-300">HealthyHabits</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-green-600 dark:text-green-300 hover:text-green-800 dark:hover:text-green-500 transition-colors">Home</a>
              <a href="#" className="text-green-600 dark:text-green-300 hover:text-green-800 dark:hover:text-green-500 transition-colors">Self-Care</a>
              <a href="#" className="text-green-600 dark:text-green-300 hover:text-green-800 dark:hover:text-green-500 transition-colors">Wellness Routines</a>
              <a href="#" className="text-green-600 dark:text-green-300 hover:text-green-800 dark:hover:text-green-500 transition-colors">Mental Health</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => setDarkMode(!darkMode)} className="p-2">
                {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-800" />}
              </Button>
              <button className="md:hidden text-green-600 dark:text-green-300" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle menu</span>
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-800 shadow-md">
              <nav className="px-4 py-2 space-y-2">
                <a href="#" className="block text-green-600 dark:text-green-300 hover:text-green-800 dark:hover:text-green-500 transition-colors">Home</a>
                <a href="#" className="block text-green-600 dark:text-green-300 hover:text-green-800 dark:hover:text-green-500 transition-colors">Self-Care</a>
                <a href="#" className="block text-green-600 dark:text-green-300 hover:text-green-800 dark:hover:text-green-500 transition-colors">Wellness Routines</a>
                <a href="#" className="block text-green-600 dark:text-green-300 hover:text-green-800 dark:hover:text-green-500 transition-colors">Mental Health</a>
              </nav>
            </div>
          )}
        </header>

        <main className="container mx-auto px-4 py-24">
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-green-800 dark:text-green-400 mb-8 text-center">Featured Article</h2>
            <Card className="overflow-hidden transform transition-transform hover:scale-105">
              <Image
                src="/placeholder.svg"
                alt="Woman meditating"
                width={800}
                height={400}
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-3xl font-semibold text-green-700 dark:text-green-300 mb-4">10 Minutes of Mindfulness: Transform Your Day</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Discover how just 10 minutes of mindfulness practice can significantly improve your mental clarity, reduce stress, and boost overall well-being.</p>
                <Button variant="default" className="bg-green-600 dark:bg-green-500 text-white hover:bg-green-700 dark:hover:bg-green-400 transition-colors">
                  Read More
                </Button>
              </div>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-bold text-green-800 dark:text-green-400 mb-8 text-center">Recent Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "5 Self-Care Rituals for Busy Professionals", icon: <Heart className="h-6 w-6 text-green-600 dark:text-green-400" />, category: "Self-Care" },
                { title: "The Power of Green Smoothies: Boost Your Energy", icon: <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />, category: "Wellness Routines" },
                { title: "Understanding and Managing Anxiety", icon: <Brain className="h-6 w-6 text-green-600 dark:text-green-400" />, category: "Mental Health" },
                { title: "Yoga for Beginners: Start Your Journey to Wellness", icon: <Heart className="h-6 w-6 text-green-600 dark:text-green-400" />, category: "Self-Care" },
                { title: "Creating a Sustainable Morning Routine", icon: <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />, category: "Wellness Routines" },
                { title: "The Importance of Social Connections for Mental Health", icon: <Brain className="h-6 w-6 text-green-600 dark:text-green-400" />, category: "Mental Health" },
              ].map((article, index) => (
                <Card key={index} className="overflow-hidden transform transition-transform hover:scale-105">
                  <Image
                    src={`/placeholder.svg`}
                    alt="Article thumbnail"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      {article.icon}
                      <span className="ml-2 text-sm text-green-600 dark:text-green-300">{article.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-4">{article.title}</h3>
                    <Button variant="link" className="text-green-600 dark:text-green-300 hover:text-green-800 dark:hover:text-green-500 transition-colors">
                      Read More →
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-bold text-green-800 dark:text-green-400 mb-8 text-center">Join Our Newsletter</h2>
            <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition-transform hover:scale-105">
              <p className="text-gray-700 dark:text-gray-300 mb-4">Stay updated with the latest self-care tips, wellness routines, and mental health advice. Subscribe to our newsletter!</p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 border border-green-600 dark:border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 dark:focus:ring-green-400"
                />
                <Button variant="default" className="bg-green-600 dark:bg-green-500 text-white hover:bg-green-700 dark:hover:bg-green-400 transition-colors">
                  Subscribe
                </Button>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-green-800 dark:bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="">&copy; 2023 HealthyHabits. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="#" className="text-green-200 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">Contact Us</a>
            </div>
            <div className="mt-6 flex justify-center space-x-4">
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.676V1.325C24 .597 23.403 0 22.675 0z" />
                </svg>
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.058 2.003.25 2.467.415a4.918 4.918 0 011.675 1.092 4.918 4.918 0 011.092 1.675c.165.464.357 1.261.415 2.467.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.206-.25 2.003-.415 2.467a4.918 4.918 0 01-1.092 1.675 4.918 4.918 0 01-1.675 1.092c-.464.165-1.261.357-2.467.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.058-2.003-.25-2.467-.415a4.918 4.918 0 01-1.675-1.092 4.918 4.918 0 01-1.092-1.675c-.165-.464-.357-1.261-.415-2.467C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.058-1.206.25-2.003.415-2.467a4.918 4.918 0 011.092-1.675 4.918 4.918 0 011.675-1.092c.464-.165 1.261-.357 2.467-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.07 5.771.127 4.782.293 4.015.572a6.918 6.918 0 00-2.48 1.634A6.918 6.918 0 00.572 4.787C0 5.554-.165 6.543-.122 7.824.013 9.104 0 9.513 0 12s.013 2.896.07 4.176c.043 1.281.188 2.27.572 3.037a6.918 6.918 0 001.634 2.48 6.918 6.918 0 002.48 1.634c.767.384 1.756.529 3.037.572C8.332 24 8.741 24 12 24s3.668-.013 4.948-.07c1.281-.043 2.27-.188 3.037-.572a6.918 6.918 0 002.48-1.634 6.918 6.918 0 001.634-2.48c.384-.767.529-1.756.572-3.037.057-1.28.07-1.689.07-4.176s-.013-2.896-.07-4.176c-.043-1.281-.188-2.27-.572-3.037a6.918 6.918 0 00-1.634-2.48A6.918 6.918 0 0019.963.572c-.767-.384-1.756-.529-3.037-.572C15.668.013 15.259 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8z" />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.633 0H2.367C1.059 0 0 1.059 0 2.367v19.266C0 22.941 1.059 24 2.367 24h19.266C22.941 24 24 22.941 24 21.633V2.367C24 1.059 22.941 0 21.633 0zM12 17.846A5.846 5.846 0 116 12a5.846 5.846 0 015.846 5.846zm6.406-11.75a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}