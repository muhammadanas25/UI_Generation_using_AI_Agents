import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bitcoin, Briefcase, Globe, LucideDollarSign, Shield, Star, Users } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Bitcoin className="h-6 w-6 mr-2" />
          <span className="font-bold">GigChain</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Testimonials
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary-foreground">
                  Welcome to GigChain
                </h1>
                <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                  The decentralized freelance platform where talent meets opportunity, powered by blockchain.
                </p>
              </div>
              <div className="space-x-4">
                <Button variant="secondary">Find Work</Button>
                <Button variant="outline">Hire Talent</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Why Choose GigChain?</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <LucideDollarSign className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Crypto Payments</CardTitle>
                </CardHeader>
                <CardContent>
                  Get paid in various cryptocurrencies, ensuring fast and secure transactions.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Globe className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Global Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  Connect with clients and freelancers from around the world without borders.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Secure Contracts</CardTitle>
                </CardHeader>
                <CardContent>
                  Smart contracts ensure that both parties are protected throughout the project.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Briefcase className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">1. Post a Job</h3>
                <p>Describe your project and set your budget in cryptocurrency.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">2. Choose a Freelancer</h3>
                <p>Review proposals and select the best fit for your project.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Bitcoin className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">3. Get Work Done</h3>
                <p>Collaborate and pay securely using smart contracts.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Users Say</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Star className="h-6 w-6 mb-2 text-yellow-400" />
                  <CardTitle>Amazing Platform</CardTitle>
                </CardHeader>
                <CardContent>
                  "GigChain has revolutionized how I work. The crypto payments are fast and secure!"
                  <p className="mt-2 font-semibold">- Alice, Freelance Developer</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Star className="h-6 w-6 mb-2 text-yellow-400" />
                  <CardTitle>Global Talent Pool</CardTitle>
                </CardHeader>
                <CardContent>
                  "As a business owner, I've found incredible talent from all over the world on GigChain."
                  <p className="mt-2 font-semibold">- Bob, Startup Founder</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Star className="h-6 w-6 mb-2 text-yellow-400" />
                  <CardTitle>Secure and Trustworthy</CardTitle>
                </CardHeader>
                <CardContent>
                  "The smart contracts give me peace of mind. I know my work and payments are protected."
                  <p className="mt-2 font-semibold">- Charlie, Graphic Designer</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 GigChain. All rights reserved.</p>
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

function Link({ href, children, ...props }) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  )
}