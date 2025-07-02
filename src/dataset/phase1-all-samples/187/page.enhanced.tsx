import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Github, Linkedin, Mail, Sun, Moon, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function DataVisionPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-900/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link className="flex items-center space-x-2" href="/">
            <img src="/logo.svg" alt="DataVision Logo" className="h-8 w-8" />
            <span className="hidden font-bold sm:inline-block text-xl text-gray-800 dark:text-white">DataVision</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#projects">
              Projects
            </Link>
            <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#research">
              Research
            </Link>
            <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#contact">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 animate-fade-in">
            <Link
              className="block py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition"
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              className="block py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition"
              href="#research"
              onClick={() => setMobileMenuOpen(false)}
            >
              Research
            </Link>
            <Link
              className="block py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition"
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
          <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl animate-slide-in">
                Welcome to <span className="text-indigo-600">DataVision</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
                Transforming complex data into actionable insights through advanced analytics and machine learning.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <Button asChild className="animate-bounce">
                  <Link href="#projects">
                    View Projects <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#contact">
                    Contact Me <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 mt-10 md:mt-0">
              <img
                src="/hero-illustration.svg"
                alt="Data Visualization Illustration"
                className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-800 dark:text-white">Featured Projects</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="transition-transform hover:translate-y-2">
                <CardHeader>
                  <CardTitle>COVID-19 Data Visualization</CardTitle>
                  <CardDescription>Interactive dashboard for global pandemic data</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    alt="COVID-19 Dashboard Preview"
                    className="aspect-video overflow-hidden rounded-lg object-cover object-center mb-4"
                    src="/covid-dashboard.jpg"
                  />
                  <Button className="w-full flex justify-center" variant="outline">
                    <Link href="/projects/covid-dashboard" className="w-full flex items-center justify-center">
                      View Project <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="transition-transform hover:translate-y-2">
                <CardHeader>
                  <CardTitle>Predictive Analytics for E-commerce</CardTitle>
                  <CardDescription>Machine learning model for sales forecasting</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    alt="E-commerce Analytics Preview"
                    className="aspect-video overflow-hidden rounded-lg object-cover object-center mb-4"
                    src="/ecommerce-analytics.jpg"
                  />
                  <Button className="w-full flex justify-center" variant="outline">
                    <Link href="/projects/ecommerce-analytics" className="w-full flex items-center justify-center">
                      View Project <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="transition-transform hover:translate-y-2">
                <CardHeader>
                  <CardTitle>Natural Language Processing</CardTitle>
                  <CardDescription>Sentiment analysis for social media data</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    alt="NLP Project Preview"
                    className="aspect-video overflow-hidden rounded-lg object-cover object-center mb-4"
                    src="/nlp-project.jpg"
                  />
                  <Button className="w-full flex justify-center" variant="outline">
                    <Link href="/projects/nlp-sentiment" className="w-full flex items-center justify-center">
                      View Project <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="research" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-800 dark:text-white">Research Papers</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="transition-shadow hover:shadow-xl">
                <CardHeader>
                  <CardTitle>Advancements in Deep Learning for Time Series Forecasting</CardTitle>
                  <CardDescription>Published in Journal of Machine Learning Research, 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    This paper explores novel deep learning architectures for improving time series forecasting accuracy in various domains.
                  </p>
                  <Button className="mt-4 w-full flex justify-center" variant="outline">
                    <Link href="/research/deep-learning-time-series" className="w-full flex items-center justify-center">
                      Read Paper <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="transition-shadow hover:shadow-xl">
                <CardHeader>
                  <CardTitle>Ethical Considerations in AI-Driven Decision Making</CardTitle>
                  <CardDescription>Presented at the International Conference on AI Ethics, 2022</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    An in-depth analysis of the ethical implications of using AI in critical decision-making processes across industries.
                  </p>
                  <Button className="mt-4 w-full flex justify-center" variant="outline">
                    <Link href="/research/ai-ethics" className="w-full flex items-center justify-center">
                      Read Paper <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-800 dark:text-white">Get in Touch</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl">
                Interested in collaboration or have a question? Feel free to reach out!
              </p>
            </div>
            <div className="flex space-x-4">
              <Button asChild variant="outline" className="flex items-center">
                <Link href="mailto:contact@datavision.com" className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Email
                </Link>
              </Button>
              <Button asChild variant="outline" className="flex items-center">
                <Link href="https://github.com/datavision" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="outline" className="flex items-center">
                <Link href="https://linkedin.com/in/datavision" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Link>
              </Button>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} DataVision. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        .animate-slide-in {
          animation: slide-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  )
}