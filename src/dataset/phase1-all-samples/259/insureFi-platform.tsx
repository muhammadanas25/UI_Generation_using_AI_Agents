import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, Lock, Search, FileCheck, Coins } from "lucide-react"

export default function InsureFiPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">InsureFi</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-400">Products</a></li>
            <li><a href="#" className="hover:text-blue-400">About</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">Secure Your DeFi Investments</h2>
          <p className="text-xl mb-8">InsureFi provides cutting-edge insurance solutions for decentralized finance platforms.</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <Shield className="w-10 h-10 mb-2 text-blue-400" />
              <CardTitle>Asset Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">Safeguard your digital assets against hacks, exploits, and unforeseen events.</CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <Zap className="w-10 h-10 mb-2 text-blue-400" />
              <CardTitle>Instant Claims</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">Experience lightning-fast claim processing with our smart contract-based system.</CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <Lock className="w-10 h-10 mb-2 text-blue-400" />
              <CardTitle>Decentralized Security</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">Benefit from the security and transparency of blockchain technology.</CardDescription>
            </CardContent>
          </Card>
        </section>

        <section className="bg-gray-800 rounded-lg p-8 mb-20">
          <h3 className="text-3xl font-bold mb-4">Smart Contract Auditing Services</h3>
          <p className="text-xl mb-6">Ensure the security and reliability of your DeFi projects with our expert auditing team.</p>
          <ul className="grid md:grid-cols-2 gap-4 mb-8">
            <li className="flex items-center"><Search className="w-6 h-6 mr-2 text-blue-400" /> Comprehensive code review</li>
            <li className="flex items-center"><FileCheck className="w-6 h-6 mr-2 text-blue-400" /> Vulnerability assessment</li>
            <li className="flex items-center"><Coins className="w-6 h-6 mr-2 text-blue-400" /> Tokenomics analysis</li>
            <li className="flex items-center"><Shield className="w-6 h-6 mr-2 text-blue-400" /> Best practice recommendations</li>
          </ul>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Request an Audit</Button>
        </section>
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 InsureFi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}