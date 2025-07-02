import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Briefcase, Code, Globe, Shield, Star, Users, Menu } from 'lucide-react'

export default function WorkChainMarketplace() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Briefcase className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <span className="text-xl sm:text-2xl font-bold">WorkChain</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-sm font-medium hover:text-primary">Find Work</a></li>
              <li><a href="#" className="text-sm font-medium hover:text-primary">Find Talent</a></li>
              <li><a href="#" className="text-sm font-medium hover:text-primary">Why WorkChain</a></li>
              <li><a href="#" className="text-sm font-medium hover:text-primary">Enterprise</a></li>
            </ul>
          </nav>
          <div className="hidden md:flex space-x-4">
            <Button variant="outline">Log in</Button>
            <Button>Sign up</Button>
          </div>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <a href="#" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Find Work</a>
                <a href="#" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Find Talent</a>
                <a href="#" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Why WorkChain</a>
                <a href="#" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Enterprise</a>
                <Button className="w-full" onClick={() => setMobileMenuOpen(false)}>Log in</Button>
                <Button className="w-full" onClick={() => setMobileMenuOpen(false)}>Sign up</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-primary to-primary-foreground text-white py-12 sm:py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 animate-fadeInUp">Decentralized Talent. Unlimited Potential.</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-10 animate-fadeInUp delay-200">Join the future of work with WorkChain's blockchain-powered freelance marketplace.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fadeInUp delay-400">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto hover:scale-105 transition-transform">Find Talent</Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-primary transition-colors">Find Work</Button>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-16 animate-textSlide">Why Choose WorkChain?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
              <Card>
                <CardHeader>
                  <Globe className="h-8 w-8 sm:h-10 sm:w-10 text-primary mb-2" />
                  <CardTitle>Global Talent Pool</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Access a worldwide network of skilled professionals, unrestricted by geographical boundaries.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-primary mb-2" />
                  <CardTitle>Secure Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Blockchain-powered smart contracts ensure transparent and secure payments for all parties.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 sm:h-10 sm:w-10 text-primary mb-2" />
                  <CardTitle>Community Governed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Platform decisions are made by the community, ensuring fairness and alignment of interests.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-16">Top Freelancers on WorkChain</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <img src={`/placeholder.svg?height=100&width=100&text=User ${i}`} alt={`User ${i}`} className="rounded-full mx-auto" />
                    <CardTitle className="text-center">John Doe</CardTitle>
                    <CardDescription className="text-center">Full Stack Developer</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="flex justify-center mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">Completed 50+ projects</p>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Button variant="outline">View Profile</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-24 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 animate-bounce">Ready to Join the Revolution?</h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12">Be part of the decentralized future of work. Sign up for WorkChain today!</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Input type="email" placeholder="Enter your email" className="w-full sm:w-auto max-w-xs bg-white text-primary rounded-md shadow-md" />
              <Button variant="secondary" className="w-full sm:w-auto hover:scale-105 transition-transform">Get Started</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About WorkChain</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Our Story</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">How It Works</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Token Economics</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Clients</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">How to Hire</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Talent Marketplace</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Project Catalog</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Enterprise</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Talent</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">How to Find Work</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Direct Contracts</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Profile Best Practices</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Help & Support</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Success Stories</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Blog</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Community Standards</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 pt-8 border-t border-muted-foreground/20 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 WorkChain. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

