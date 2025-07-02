import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight, Feather, Shield, Zap, Menu, X } from "lucide-react"
import { Dialog } from "@/components/ui/dialog"
import Image from 'next/image'

export default function LandingPage() {
  const [email, setEmail] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission (e.g., add to waitlist)
    console.log('Submitted email:', email)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md z-50 shadow">
        <div className="flex items-center space-x-2">
          <Feather className="h-8 w-8 text-purple-600 animate-bounce" />
          <span className="text-2xl font-bold text-purple-900">ContentChain</span>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li><a href="#" className="text-purple-900 hover:text-purple-700 transition-colors">About</a></li>
            <li><a href="#" className="text-purple-900 hover:text-purple-700 transition-colors">Features</a></li>
            <li><a href="#" className="text-purple-900 hover:text-purple-700 transition-colors">Creators</a></li>
            <li><Button variant="ghost" className="ml-4">Sign In</Button></li>
          </ul>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="h-6 w-6 text-purple-900"/>
          </Button>
          <Dialog open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30"/>
            <Dialog.Content className="fixed top-0 right-0 w-3/4 h-full bg-white p-6 shadow-lg flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-2">
                  <Feather className="h-8 w-8 text-purple-600" />
                  <span className="text-2xl font-bold text-purple-900">ContentChain</span>
                </div>
                <Button variant="ghost" onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="h-6 w-6 text-purple-900"/>
                </Button>
              </div>
              <ul className="flex flex-col space-y-6">
                <li><a href="#" className="text-purple-900 hover:text-purple-700 transition-colors">About</a></li>
                <li><a href="#" className="text-purple-900 hover:text-purple-700 transition-colors">Features</a></li>
                <li><a href="#" className="text-purple-900 hover:text-purple-700 transition-colors">Creators</a></li>
                <li><Button variant="outline" className="mt-4">Sign In</Button></li>
              </ul>
            </Dialog.Content>
          </Dialog>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-24 pb-16 text-center">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold text-purple-900 mb-6 animate-fade-in">
              Decentralized Content Creation and Monetization
            </h1>
            <p className="text-xl text-purple-700 mb-6 max-w-md mx-auto md:mx-0">
              ContentChain empowers creators with true ownership, direct tipping, and community governance. Join the future of content creation.
            </p>
            <form onSubmit={handleSubmit} className="flex justify-center md:justify-start mb-6">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-64 mr-2"
              />
              <Button type="submit" className="flex items-center">
                Join Waitlist
                <ChevronRight className="ml-2 h-4 w-4"/>
              </Button>
            </form>
            <div className="flex justify-center md:justify-start space-x-4">
              <Button variant="outline" className="hover:bg-purple-100 transition">Learn More</Button>
              <Button className="bg-purple-600 text-white hover:bg-purple-700 transition">Get Started</Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image src="/hero-illustration.svg" alt="ContentChain Illustration" width={500} height={500} className="animate-slide-in"/>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-purple-900 mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="h-12 w-12 text-purple-600"/>}
              title="Decentralized Hosting"
              description="Your content, stored securely across a distributed network."
            />
            <FeatureCard
              icon={<Zap className="h-12 w-12 text-purple-600"/>}
              title="Instant Tipping"
              description="Receive tips directly from your audience, instantly and with low fees."
            />
            <FeatureCard
              icon={<Feather className="h-12 w-12 text-purple-600"/>}
              title="True Ownership"
              description="Each piece of content is an NFT, owned and controlled by you."
            />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-purple-900 mb-8">Join Our Community</h2>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="hover:bg-gray-100 transition">Discord</Button>
            <Button variant="outline" className="hover:bg-gray-100 transition">Twitter</Button>
            <Button variant="outline" className="hover:bg-gray-100 transition">Telegram</Button>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-purple-900 mb-8">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <TestimonialCard
              name="Alice"
              role="Content Creator"
              text="ContentChain has revolutionized the way I monetize my work. The tipping system is seamless and efficient."
            />
            <TestimonialCard
              name="Bob"
              role="Artist"
              text="True ownership of my content gives me peace of mind and full control over my creations."
            />
            <TestimonialCard
              name="Charlie"
              role="Developer"
              text="The decentralized hosting ensures my projects are always available and secure."
            />
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-purple-700 border-t">
        <p>&copy; 2023 ContentChain. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-purple-500 transition">Privacy Policy</a>
          <a href="#" className="hover:text-purple-500 transition">Terms of Service</a>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-purple-900 mb-2">{title}</h3>
      <p className="text-purple-700">{description}</p>
    </div>
  )
}

function TestimonialCard({ name, role, text }: { name: string, role: string, text: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
      <p className="text-purple-700 mb-4">"{text}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-purple-200 rounded-full mr-4 flex items-center justify-center">
          <Feather className="h-6 w-6 text-purple-600"/>
        </div>
        <div>
          <p className="text-purple-900 font-semibold">{name}</p>
          <p className="text-purple-600 text-sm">{role}</p>
        </div>
      </div>
    </div>
  )
}