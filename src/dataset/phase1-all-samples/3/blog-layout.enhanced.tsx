import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sun, Moon, Mail } from "lucide-react"
import { useState } from "react"

export default function Component() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div className={`${theme === "dark" ? "dark" : ""} min-h-screen bg-background text-foreground flex flex-col transition-colors duration-500`}>
      <header className="sticky top-0 z-50 bg-background dark:bg-gray-900 border-b transition-colors duration-500">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="DailyThoughts Logo" width={40} height={40} />
            <span className="text-2xl font-bold">DailyThoughts</span>
          </Link>
          <nav>
            <ul className="hidden md:flex space-x-6">
              <li><Link href="/about" className="hover:text-indigo-500 transition-colors duration-300">About</Link></li>
              <li><Link href="/archive" className="hover:text-indigo-500 transition-colors duration-300">Archive</Link></li>
              <li><Link href="/contact" className="hover:text-indigo-500 transition-colors duration-300">Contact</Link></li>
            </ul>
          </nav>
          <button onClick={toggleTheme} className="ml-4 p-2 rounded-full bg-muted hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors duration-300">
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col lg:flex-row">
        <article className="w-full lg:w-2/3 pr-0 lg:pr-8 mb-8 lg:mb-0">
          <div className="relative">
            <Image src="/mindfulness.jpg" alt="Mindfulness" width={800} height={400} className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" />
            <span className="absolute bottom-4 left-4 bg-indigo-500 text-white px-3 py-1 rounded-full text-sm opacity-90">Featured</span>
          </div>
          <h1 className="text-4xl font-bold mt-6 mb-4 animate-fadeIn">The Art of Mindfulness</h1>
          <p className="text-muted-foreground mb-4">Published on May 15, 2023 by Jane Doe</p>
          <div className="prose max-w-none">
            <p>Mindfulness is the practice of being fully present and engaged in the moment, aware of your thoughts and feelings without distraction or judgment. In today's fast-paced world, it's becoming increasingly important to cultivate this skill...</p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">The Benefits of Mindfulness</h2>
            <p>Regular mindfulness practice has been shown to reduce stress, improve focus, and enhance overall well-being. Studies have demonstrated that mindfulness can lead to changes in the brain's structure and function, particularly in areas related to attention, emotion regulation, and self-awareness...</p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Getting Started with Mindfulness</h2>
            <p>Beginning a mindfulness practice doesn't have to be complicated. Here are some simple steps to get started:</p>
            <ol className="list-decimal list-inside mb-4">
              <li>Find a quiet space where you won't be disturbed</li>
              <li>Set aside 5-10 minutes to start</li>
              <li>Sit comfortably with your back straight</li>
              <li>Focus on your breath, noticing the sensation of inhaling and exhaling</li>
              <li>When your mind wanders, gently bring your attention back to your breath</li>
            </ol>
            <Button variant="outline" className="mt-4">Continue Reading</Button>
          </div>
        </article>

        <aside className="w-full lg:w-1/3 pl-0 lg:pl-8">
          <div className="bg-muted dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-500">
            <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-indigo-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 105.292 14.708L8 8.707V0z" />
                </svg>
                <Link href="#" className="hover:text-indigo-500 transition-colors duration-300">The Power of Positive Thinking</Link>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-indigo-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 105.292 14.708L8 8.707V0z" />
                </svg>
                <Link href="#" className="hover:text-indigo-500 transition-colors duration-300">5 Tips for Better Sleep</Link>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-indigo-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 105.292 14.708L8 8.707V0z" />
                </svg>
                <Link href="#" className="hover:text-indigo-500 transition-colors duration-300">Understanding Emotional Intelligence</Link>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-indigo-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 105.292 14.708L8 8.707V0z" />
                </svg>
                <Link href="#" className="hover:text-indigo-500 transition-colors duration-300">The Benefits of Regular Exercise</Link>
              </li>
            </ul>
          </div>
          <div className="mt-8 bg-muted dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-500">
            <h2 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
            <form className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-muted-foreground mr-2" />
                <Input type="email" placeholder="Enter your email" required className="flex-1" />
              </div>
              <Button type="submit" className="w-full">Subscribe</Button>
            </form>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter" className="text-indigo-500 hover:text-indigo-700 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.384 4.482c-4.083-.205-7.697-2.158-10.126-5.134a4.822 4.822 0 00-.666 2.475c0 1.708.869 3.216 2.188 4.099a4.904 4.904 0 01-2.228-.616c-.054 2.385 1.675 4.374 4.144 4.827a4.902 4.902 0 01-2.224.084c.63 1.953 2.445 3.376 4.6 3.416a9.867 9.867 0 01-6.102 2.105c-.396 0-.788-.023-1.175-.069a13.945 13.945 0 007.557 2.212c9.054 0 14-7.496 14-13.986 0-.21 0-.423-.016-.634A10.025 10.025 0 0024 4.557z" />
                </svg>
              </Link>
              <Link href="#" aria-label="Facebook" className="text-indigo-500 hover:text-indigo-700 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.675V1.325C24 .597 23.403 0 22.675 0z" />
                </svg>
              </Link>
              <Link href="#" aria-label="Instagram" className="text-indigo-500 hover:text-indigo-700 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.132 4.633.423 3.678 1.378c-.955.955-1.246 2.097-1.306 3.374C2.013 5.668 2 6.077 2 9.333v5.334c0 3.256.013 3.665.072 4.945.06 1.277.351 2.419 1.306 3.374.955.955 2.097 1.246 3.374 1.306 1.28.059 1.689.072 4.945.072s3.665-.013 4.945-.072c1.277-.06 2.419-.351 3.374-1.306.955-.955 1.246-2.097 1.306-3.374.059-1.28.072-1.689.072-4.945V9.333c0-3.256-.013-3.665-.072-4.945-.06-1.277-.351-2.419-1.306-3.374-.955-.955-2.097-1.246-3.374-1.306C15.665.013 15.256 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </aside>
      </main>

      <footer className="bg-muted dark:bg-gray-900 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">&copy; 2023 DailyThoughts. All rights reserved.</p>
            <nav>
              <ul className="flex space-x-4">
                <li><Link href="/privacy" className="hover:text-indigo-500 transition-colors duration-300">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-indigo-500 transition-colors duration-300">Terms of Service</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}