import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, ClockIcon, SearchIcon } from "lucide-react"
import { motion } from "framer-motion"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
      <header className="shadow-md bg-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <Link href="/" className="text-3xl font-extrabold text-primary hover:scale-105 transition-transform">
            TechSage
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-primary transition-colors">
              Categories
            </Link>
          </nav>
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-primary focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <main className="container mx-auto py-10 px-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="lg:w-2/3 space-y-8">
              <h1 className="text-5xl font-bold text-gray-800">Latest Posts</h1>
              <div className="space-y-6">
                {[1, 2, 3].map((post) => (
                  <motion.div
                    key={post}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                  >
                    <img src={`/images/post-${post}.jpg`} alt={`Post ${post}`} className="w-full h-48 object-cover" />
                    <Card className="border-none">
                      <CardHeader className="px-6 py-4">
                        <h2 className="text-2xl font-semibold text-primary hover:underline">
                          <Link href={`/post/${post}`}>The Future of AI in Web Development</Link>
                        </h2>
                        <div className="flex items-center space-x-6 mt-2 text-sm text-gray-500">
                          <span className="flex items-center">
                            <CalendarIcon className="mr-1 h-4 w-4" />
                            May 15, 2023
                          </span>
                          <span className="flex items-center">
                            <ClockIcon className="mr-1 h-4 w-4" />
                            5 min read
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="px-6 py-2">
                        <p className="text-gray-600">
                          Artificial Intelligence is revolutionizing the way we build and interact with websites. In this post,
                          we explore the latest AI trends in web development and how they're shaping the future of the internet.
                        </p>
                      </CardContent>
                      <CardFooter className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-blue-100 text-blue-800">AI</Badge>
                          <Badge className="bg-green-100 text-green-800">Web Development</Badge>
                          <Badge className="bg-purple-100 text-purple-800">Future Tech</Badge>
                        </div>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center">
                <Button variant="default" className="px-6 py-3 hover:bg-primary hover:text-white transition-colors">
                  Load More Posts
                </Button>
              </div>
            </div>
            <aside className="lg:w-1/3 space-y-6">
              <Card className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                <CardHeader className="px-6 py-4 border-b">
                  <h2 className="text-2xl font-semibold text-gray-800">About TechSage</h2>
                </CardHeader>
                <CardContent className="px-6 py-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-14 w-14">
                      <AvatarImage src="/placeholder-avatar.jpg" alt="TechSage" />
                      <AvatarFallback>TS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-lg font-medium text-gray-800">John Doe</p>
                      <p className="text-sm text-gray-500">Tech Enthusiast & Blogger</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">
                    Exploring the cutting edge of technology and sharing insights on the latest trends in the tech world.
                  </p>
                  <div className="mt-4 flex space-x-3">
                    <Link href="https://twitter.com" className="text-gray-500 hover:text-primary transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.942 13.942 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.573A4.897 4.897 0 0 1 .964 9.1v.062a4.916 4.916 0 0 0 3.946 4.816 4.902 4.902 0 0 1-2.212.084 4.918 4.918 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.056 0 14.01-7.496 14.01-13.986 0-.21-.005-.423-.014-.633A10.012 10.012 0 0 0 24 4.557z" />
                      </svg>
                    </Link>
                    <Link href="https://facebook.com" className="text-gray-500 hover:text-primary transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.675V1.325C24 .597 23.403 0 22.675 0z" />
                      </svg>
                    </Link>
                    <Link href="https://instagram.com" className="text-gray-500 hover:text-primary transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.418.403a4.92 4.92 0 0 1 1.675 1.095 4.92 4.92 0 0 1 1.095 1.675c.163.448.349 1.248.403 2.418.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.418a4.92 4.92 0 0 1-1.095 1.675 4.92 4.92 0 0 1-1.675 1.095c-.448.163-1.248.349-2.418.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.418-.403a4.92 4.92 0 0 1-1.675-1.095 4.92 4.92 0 0 1-1.095-1.675c-.163-.448-.349-1.248-.403-2.418C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.418a4.92 4.92 0 0 1 1.095-1.675A4.92 4.92 0 0 1 4.24 2.636c.448-.163 1.248-.349 2.418-.403C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.332.014 7.052.072 5.766.13 4.668.328 3.75.729a7.084 7.084 0 0 0-2.568 1.68A7.084 7.084 0 0 0 .729 4.978c-.401.918-.599 2.016-.657 3.302C.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.058 1.286.256 2.384.657 3.302a7.084 7.084 0 0 0 1.68 2.568 7.084 7.084 0 0 0 2.568 1.68c.918.401 2.016.599 3.302.657C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.286-.058 2.384-.256 3.302-.657a7.084 7.084 0 0 0 2.568-1.68 7.084 7.084 0 0 0 1.68-2.568c.401-.918.599-2.016.657-3.302.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.058-1.286-.256-2.384-.657-3.302a7.084 7.084 0 0 0-1.68-2.568A7.084 7.084 0 0 0 19.25.729c-.918-.401-2.016-.599-3.302-.657C15.668.014 15.259 0 12 0z" />
                        <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                        <circle cx="18.406" cy="5.594" r="1.44" />
                      </svg>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                <CardHeader className="px-6 py-4 border-b">
                  <h2 className="text-2xl font-semibold text-gray-800">Search</h2>
                </CardHeader>
                <CardContent className="px-6 py-4">
                  <form className="flex items-center space-x-2">
                    <Input
                      type="search"
                      placeholder="Search posts..."
                      className="flex-1 border-gray-300 focus:border-primary focus:ring-primary"
                    />
                    <Button type="submit" size="icon" className="bg-primary text-white hover:bg-primary-dark transition-colors">
                      <SearchIcon className="h-5 w-5" />
                      <span className="sr-only">Search</span>
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <Card className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                <CardHeader className="px-6 py-4 border-b">
                  <h2 className="text-2xl font-semibold text-gray-800">Categories</h2>
                </CardHeader>
                <CardContent className="px-6 py-4">
                  <ul className="grid grid-cols-2 gap-2">
                    <li>
                      <Link href="/category/ai" className="block bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200 transition-colors">
                        Artificial Intelligence
                      </Link>
                    </li>
                    <li>
                      <Link href="/category/web-dev" className="block bg-green-100 text-green-800 px-4 py-2 rounded hover:bg-green-200 transition-colors">
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/category/cybersecurity" className="block bg-red-100 text-red-800 px-4 py-2 rounded hover:bg-red-200 transition-colors">
                        Cybersecurity
                      </Link>
                    </li>
                    <li>
                      <Link href="/category/data-science" className="block bg-purple-100 text-purple-800 px-4 py-2 rounded hover:bg-purple-200 transition-colors">
                        Data Science
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                <CardHeader className="px-6 py-4 border-b">
                  <h2 className="text-2xl font-semibold text-gray-800">Newsletter</h2>
                </CardHeader>
                <CardContent className="px-6 py-4">
                  <p className="text-gray-600">Subscribe to our newsletter to stay updated with the latest posts.</p>
                  <form className="mt-4 flex flex-col space-y-3">
                    <Input type="email" placeholder="Your email" className="border-gray-300 focus:border-primary focus:ring-primary" />
                    <Button className="bg-primary text-white hover:bg-primary-dark transition-colors">
                      Subscribe
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </aside>
          </div>
        </motion.div>
      </main>
      <footer className="bg-white shadow-inner">
        <div className="container mx-auto py-6 px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} TechSage. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-600 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}