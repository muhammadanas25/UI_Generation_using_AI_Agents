import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function DataVisionPortfolio() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">DataVision</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
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
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to DataVision
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Transforming complex data into actionable insights through advanced analytics and machine learning.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#projects">View Projects</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#contact">Contact Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Featured Projects</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>COVID-19 Data Visualization</CardTitle>
                  <CardDescription>Interactive dashboard for global pandemic data</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    alt="COVID-19 Dashboard Preview"
                    className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                    height="225"
                    src="/placeholder.svg?height=225&width=400"
                    width="400"
                  />
                  <Button className="mt-4" variant="outline">
                    View Project <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Predictive Analytics for E-commerce</CardTitle>
                  <CardDescription>Machine learning model for sales forecasting</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    alt="E-commerce Analytics Preview"
                    className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                    height="225"
                    src="/placeholder.svg?height=225&width=400"
                    width="400"
                  />
                  <Button className="mt-4" variant="outline">
                    View Project <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Natural Language Processing</CardTitle>
                  <CardDescription>Sentiment analysis for social media data</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    alt="NLP Project Preview"
                    className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                    height="225"
                    src="/placeholder.svg?height=225&width=400"
                    width="400"
                  />
                  <Button className="mt-4" variant="outline">
                    View Project <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="research" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Research Papers</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Advancements in Deep Learning for Time Series Forecasting</CardTitle>
                  <CardDescription>Published in Journal of Machine Learning Research, 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    This paper explores novel deep learning architectures for improving time series forecasting accuracy in various domains.
                  </p>
                  <Button className="mt-4" variant="outline">
                    Read Paper <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Ethical Considerations in AI-Driven Decision Making</CardTitle>
                  <CardDescription>Presented at the International Conference on AI Ethics, 2022</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    An in-depth analysis of the ethical implications of using AI in critical decision-making processes across industries.
                  </p>
                  <Button className="mt-4" variant="outline">
                    Read Paper <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Interested in collaboration or have a question? Feel free to reach out!
              </p>
            </div>
            <div className="flex space-x-4">
              <Button asChild variant="outline">
                <Link href="mailto:contact@datavision.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://github.com/datavision">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://linkedin.com/in/datavision">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}