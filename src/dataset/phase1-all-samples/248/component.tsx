import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight, Feather, Shield, Zap } from "lucide-react"

export default function LandingPage() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission (e.g., add to waitlist)
    console.log('Submitted email:', email)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Feather className="h-8 w-8 text-purple-600" />
          <span className="text-2xl font-bold text-purple-900">ContentChain</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-purple-900 hover:text-purple-700">About</a></li>
            <li><a href="#" className="text-purple-900 hover:text-purple-700">Features</a></li>
            <li><a href="#" className="text-purple-900 hover:text-purple-700">Creators</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-purple-900 mb-6">
          Decentralized Content Creation and Monetization
        </h1>
        <p className="text-xl text-purple-700 mb-12 max-w-2xl mx-auto">
          ContentChain empowers creators with true ownership, direct tipping, and community governance. Join the future of content creation.
        </p>
        <form onSubmit={handleSubmit} className="flex justify-center mb-12">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-64 mr-2"
          />
          <Button type="submit">
            Join Waitlist
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <FeatureCard
            icon={<Shield className="h-12 w-12 text-purple-600" />}
            title="Decentralized Hosting"
            description="Your content, stored securely across a distributed network."
          />
          <FeatureCard
            icon={<Zap className="h-12 w-12 text-purple-600" />}
            title="Instant Tipping"
            description="Receive tips directly from your audience, instantly and with low fees."
          />
          <FeatureCard
            icon={<Feather className="h-12 w-12 text-purple-600" />}
            title="True Ownership"
            description="Each piece of content is an NFT, owned and controlled by you."
          />
        </div>
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-purple-700">
        <p>&copy; 2023 ContentChain. All rights reserved.</p>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-purple-900 mb-2">{title}</h3>
      <p className="text-purple-700">{description}</p>
    </div>
  )
}