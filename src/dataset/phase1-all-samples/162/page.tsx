import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="font-bold text-2xl">WordCraft</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Portfolio
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
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
                  Crafting Words That Convert
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Elevate your brand with compelling copy that engages, persuades, and drives results.
                </p>
              </div>
              <div className="space-x-4">
                <Button>View Portfolio</Button>
                <Button variant="outline">Contact Me</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Marketing Copy</CardTitle>
                </CardHeader>
                <CardContent>
                  Persuasive ad copy, email campaigns, and landing pages that convert.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Content Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  Comprehensive content plans aligned with your business goals and audience needs.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Blog Writing</CardTitle>
                </CardHeader>
                <CardContent>
                  Engaging, SEO-optimized blog posts that establish thought leadership and drive traffic.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Featured Work</h2>
            <Tabs defaultValue="marketing" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="blog">Blog</TabsTrigger>
              </TabsList>
              <TabsContent value="marketing">
                <Card>
                  <CardHeader>
                    <CardTitle>TechGrow Email Campaign</CardTitle>
                    <CardDescription>Increased open rates by 25% and click-through rates by 15%</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Crafted a series of compelling emails for TechGrow's product launch, resulting in significant engagement improvements.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="content">
                <Card>
                  <CardHeader>
                    <CardTitle>HealthFirst Content Strategy</CardTitle>
                    <CardDescription>Developed a 6-month content plan that increased organic traffic by 40%</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Created a comprehensive content strategy for HealthFirst, aligning their blog content with user search intent and business goals.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="blog">
                <Card>
                  <CardHeader>
                    <CardTitle>EcoLiving Blog Series</CardTitle>
                    <CardDescription>Increased time on page by 2 minutes and reduced bounce rate by 15%</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Wrote a series of in-depth blog posts on sustainable living, significantly improving user engagement metrics for EcoLiving.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-4">"WordCraft transformed our messaging. Our conversion rates have never been higher!"</p>
                  <p className="font-semibold">- Sarah J., Marketing Director at TechGrow</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-4">"The blog posts consistently exceed our expectations. Our audience loves the content!"</p>
                  <p className="font-semibold">- Mark T., CEO of EcoLiving</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Elevate Your Copy?</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Let's collaborate to create compelling content that resonates with your audience and drives results.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get in Touch</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 WordCraft. All rights reserved.</p>
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