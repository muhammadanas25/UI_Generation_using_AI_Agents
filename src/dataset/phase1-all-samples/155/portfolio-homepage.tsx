import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">VisionaryWorks</span>
          <Image
            src="/placeholder.svg?height=32&width=32"
            width={32}
            height={32}
            alt="VisionaryWorks Logo"
            className="rounded-lg"
          />
          <span className="ml-2 text-lg font-semibold">VisionaryWorks</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#campaigns">
            Campaigns
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#case-studies">
            Case Studies
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#collaborations">
            Collaborations
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Creative Direction That Inspires
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Transforming brands through innovative campaigns and strategic collaborations.
                </p>
              </div>
              <div className="space-x-4">
                <Button>View Portfolio</Button>
                <Button variant="outline">Contact Me</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="campaigns" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Brand Campaigns</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-4">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    width={400}
                    height={300}
                    alt="Campaign 1"
                    className="rounded-lg object-cover w-full aspect-video mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">Eco-Friendly Fashion</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A sustainable clothing line campaign that resonated with environmentally conscious consumers.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    width={400}
                    height={300}
                    alt="Campaign 2"
                    className="rounded-lg object-cover w-full aspect-video mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">Tech Innovation Series</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Showcasing cutting-edge technology through an immersive digital campaign.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    width={400}
                    height={300}
                    alt="Campaign 3"
                    className="rounded-lg object-cover w-full aspect-video mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">Global Cuisine Journey</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A food and beverage campaign celebrating diverse culinary traditions around the world.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="case-studies" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Case Studies</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Rebranding a Legacy Company</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    How we transformed a 50-year-old company's image for the digital age.
                  </p>
                  <Link className="flex items-center text-blue-600 hover:underline" href="#">
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Launching a Disruptive Start-up</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    The strategy behind introducing a game-changing product to a competitive market.
                  </p>
                  <Link className="flex items-center text-blue-600 hover:underline" href="#">
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="collaborations" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Collaborations</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center">
              <Image
                src="/placeholder.svg?height=100&width=200"
                width={200}
                height={100}
                alt="Collaborator 1"
                className="rounded-lg object-contain"
              />
              <Image
                src="/placeholder.svg?height=100&width=200"
                width={200}
                height={100}
                alt="Collaborator 2"
                className="rounded-lg object-contain"
              />
              <Image
                src="/placeholder.svg?height=100&width=200"
                width={200}
                height={100}
                alt="Collaborator 3"
                className="rounded-lg object-contain"
              />
              <Image
                src="/placeholder.svg?height=100&width=200"
                width={200}
                height={100}
                alt="Collaborator 4"
                className="rounded-lg object-contain"
              />
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 VisionaryWorks. All rights reserved.</p>
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