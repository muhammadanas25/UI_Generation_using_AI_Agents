import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function StartupGrind() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="ml-2 text-xl sm:text-2xl font-bold">StartupGrind</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Success Stories
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Resources
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
        <Button variant="ghost" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Welcome to StartupGrind
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 text-sm sm:text-base md:text-xl">
                  Inspiring stories and essential resources for entrepreneurs and startup founders.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto">Read Success Stories</Button>
                <Button variant="outline" className="w-full sm:w-auto">Explore Resources</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Latest Success Stories</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>From Garage to Global: The TechNova Story</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">How two college dropouts built a billion-dollar tech company from their garage.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link">Read More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>GreenLeaf's Sustainable Success</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">The journey of an eco-friendly startup that's changing the face of urban farming.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link">Read More</Button>
                </CardFooter>
              </Card>
              <Card className="sm:col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle>AI Revolution: MindWave's Breakthrough</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">How a small team of AI researchers created a game-changing language model.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link">Read More</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Resources for Entrepreneurs</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Funding 101</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">Learn about different funding options for your startup, from bootstrapping to VC.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Download Guide</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Legal Essentials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">Navigate the legal landscape of starting and running a business with our comprehensive guide.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Access Resources</Button>
                </CardFooter>
              </Card>
              <Card className="sm:col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle>Marketing Mastery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">Discover effective marketing strategies for startups on a budget.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Start Learning</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl">Stay Updated</h2>
                <p className="max-w-[900px] text-gray-500 text-sm sm:text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Subscribe to our newsletter for the latest success stories, resources, and startup tips.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="w-full sm:w-auto">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col sm:flex-row py-6 w-full shrink-0 items-center justify-between px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 StartupGrind. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
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

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

