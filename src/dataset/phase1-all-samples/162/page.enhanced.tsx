import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sun, Moon, ArrowRight, Twitter, LinkedIn, GitHub } from "lucide-react"
import Image from "next/image"

export default function Component() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
          <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
            <Link className="flex items-center space-x-2" href="#">
              <Image src="/logo.svg" alt="WordCraft Logo" width={32} height={32} />
              <span className="font-bold text-2xl text-gray-800 dark:text-white">WordCraft</span>
            </Link>
            <nav className="flex items-center space-x-4 sm:space-x-6">
              <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
                Services
              </Link>
              <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
                Portfolio
              </Link>
              <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
                About
              </Link>
              <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
                Contact
              </Link>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
              </button>
            </nav>
          </div>
        </header>
        <main className="flex-1 mt-16">
          <section className="w-full py-20 md:py-32 lg:py-40 bg-hero-pattern bg-cover bg-center relative">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container relative z-10 px-4 md:px-6 text-center text-white">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-fadeIn">
                Crafting Words That Convert
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg md:text-2xl">
                Elevate your brand with compelling copy that engages, persuades, and drives results.
              </p>
              <div className="mt-8 flex justify-center space-x-4">
                <Button className="flex items-center">
                  View Portfolio <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="flex items-center">
                  Contact Me <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-800 dark:text-white">
                Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="flex justify-center">
                    <Image src="/icons/marketing.svg" alt="Marketing Copy" width={64} height={64} />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-center text-xl">Marketing Copy</CardTitle>
                    <CardDescription className="text-center">
                      Persuasive ad copy, email campaigns, and landing pages that convert.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="flex justify-center">
                    <Image src="/icons/strategy.svg" alt="Content Strategy" width={64} height={64} />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-center text-xl">Content Strategy</CardTitle>
                    <CardDescription className="text-center">
                      Comprehensive content plans aligned with your business goals and audience needs.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="flex justify-center">
                    <Image src="/icons/blogging.svg" alt="Blog Writing" width={64} height={64} />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-center text-xl">Blog Writing</CardTitle>
                    <CardDescription className="text-center">
                      Engaging, SEO-optimized blog posts that establish thought leadership and drive traffic.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-800 dark:text-white">
                Featured Work
              </h2>
              <Tabs defaultValue="marketing" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition" value="marketing">Marketing</TabsTrigger>
                  <TabsTrigger className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition" value="content">Content</TabsTrigger>
                  <TabsTrigger className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition" value="blog">Blog</TabsTrigger>
                </TabsList>
                <TabsContent value="marketing">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle>TechGrow Email Campaign</CardTitle>
                        <CardDescription>Increased open rates by 25% and click-through rates by 15%</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Image src="/projects/techgrow.jpg" alt="TechGrow Email Campaign" width={600} height={400} className="rounded-md mb-4" />
                        <p>
                          Crafted a series of compelling emails for TechGrow's product launch, resulting in significant engagement improvements.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle>SalesBoost Landing Page</CardTitle>
                        <CardDescription>Conversion rates improved by 30%</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Image src="/projects/salesboost.jpg" alt="SalesBoost Landing Page" width={600} height={400} className="rounded-md mb-4" />
                        <p>
                          Developed persuasive landing page copy for SalesBoost, leading to a substantial increase in conversions.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="content">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle>HealthFirst Content Strategy</CardTitle>
                        <CardDescription>Developed a 6-month content plan that increased organic traffic by 40%</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Image src="/projects/healthfirst.jpg" alt="HealthFirst Content Strategy" width={600} height={400} className="rounded-md mb-4" />
                        <p>
                          Created a comprehensive content strategy for HealthFirst, aligning their blog content with user search intent and business goals.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle>EduLearn Curriculum Development</CardTitle>
                        <CardDescription>Enhanced course engagement by 35%</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Image src="/projects/edulearn.jpg" alt="EduLearn Curriculum Development" width={600} height={400} className="rounded-md mb-4" />
                        <p>
                          Developed a structured content curriculum for EduLearn, resulting in improved student engagement and satisfaction.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="blog">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle>EcoLiving Blog Series</CardTitle>
                        <CardDescription>Increased time on page by 2 minutes and reduced bounce rate by 15%</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Image src="/projects/ecoliving.jpg" alt="EcoLiving Blog Series" width={600} height={400} className="rounded-md mb-4" />
                        <p>
                          Wrote a series of in-depth blog posts on sustainable living, significantly improving user engagement metrics for EcoLiving.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle>TravelWise Guides</CardTitle>
                        <CardDescription>Boosted readership by 50%</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Image src="/projects/travelwise.jpg" alt="TravelWise Guides" width={600} height={400} className="rounded-md mb-4" />
                        <p>
                          Created comprehensive travel guides for TravelWise, attracting a larger audience and enhancing site authority.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-800 dark:text-white">
                Testimonials
              </h2>
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <Image src="/avatars/sarah.jpg" alt="Sarah J." width={80} height={80} className="rounded-full" />
                  <Card className="flex-1 p-6 bg-white dark:bg-gray-700 transition-colors duration-300">
                    <CardContent>
                      <p className="mb-4 text-gray-700 dark:text-gray-200">"WordCraft transformed our messaging. Our conversion rates have never been higher!"</p>
                      <p className="font-semibold text-gray-900 dark:text-white">- Sarah J., Marketing Director at TechGrow</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <Image src="/avatars/mark.jpg" alt="Mark T." width={80} height={80} className="rounded-full" />
                  <Card className="flex-1 p-6 bg-white dark:bg-gray-700 transition-colors duration-300">
                    <CardContent>
                      <p className="mb-4 text-gray-700 dark:text-gray-200">"The blog posts consistently exceed our expectations. Our audience loves the content!"</p>
                      <p className="font-semibold text-gray-900 dark:text-white">- Mark T., CEO of EcoLiving</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <Image src="/avatars/emily.jpg" alt="Emily R." width={80} height={80} className="rounded-full" />
                  <Card className="flex-1 p-6 bg-white dark:bg-gray-700 transition-colors duration-300">
                    <CardContent>
                      <p className="mb-4 text-gray-700 dark:text-gray-200">"Their content strategy boosted our online presence significantly."</p>
                      <p className="font-semibold text-gray-900 dark:text-white">- Emily R., Content Manager at HealthFirst</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-6 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800 dark:text-white">
                  Ready to Elevate Your Copy?
                </h2>
                <p className="mx-auto max-w-xl text-gray-600 dark:text-gray-300">
                  Let's collaborate to create compelling content that resonates with your audience and drives results.
                </p>
                <Button className="mt-4">Get in Touch</Button>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-800 dark:text-white">
                Contact Me
              </h2>
              <form className="max-w-lg mx-auto space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 WordCraft. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition">
                <LinkedIn className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition">
                <GitHub className="w-5 h-5" />
              </Link>
              <nav className="flex gap-4 sm:gap-6">
                <Link className="text-xs hover:underline underline-offset-4 text-gray-500 dark:text-gray-400 transition" href="#">
                  Terms of Service
                </Link>
                <Link className="text-xs hover:underline underline-offset-4 text-gray-500 dark:text-gray-400 transition" href="#">
                  Privacy
                </Link>
              </nav>
            </div>
          </div>
        </footer>
      </div>
      <style jsx global>{`
        .animate-fadeIn {
          animation: fadeIn 2s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .bg-hero-pattern {
          background-image: url('/hero-background.jpg');
        }
      `}</style>
    </div>
  )
}