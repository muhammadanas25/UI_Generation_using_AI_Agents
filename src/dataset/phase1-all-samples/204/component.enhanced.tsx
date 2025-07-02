import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Wallet, Shield, UserCheck, AlertCircle, ChevronRight, CheckCircle, Loader2, Menu } from 'lucide-react'
import { Tooltip } from "@/components/ui/tooltip"
import Image from 'next/image'
import Link from 'next/link'

export default function Component() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [verificationStatus, setVerificationStatus] = useState('')
  const [isConnecting, setIsConnecting] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const connectWallet = () => {
    setIsConnecting(true)
    // Placeholder for wallet connection logic
    setTimeout(() => {
      setWalletConnected(true)
      setIsConnecting(false)
    }, 2000)
  }

  const verifyIdentity = (provider: string) => {
    setIsVerifying(true)
    // Placeholder for identity verification logic
    setTimeout(() => {
      setVerificationStatus(`Verification initiated with ${provider}...`)
      setIsVerifying(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 flex flex-col">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/idlink-logo.png" alt="IDLink Logo" width={40} height={40} className="mr-2" />
            <h1 className="text-xl sm:text-2xl font-bold text-primary">IDLink</h1>
          </Link>
          <nav className="hidden md:block space-x-4">
            <Link href="#features" className="text-gray-700 hover:text-primary transition-colors">Features</Link>
            <Link href="#about" className="text-gray-700 hover:text-primary transition-colors">About</Link>
            <Link href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</Link>
          </nav>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white px-4 py-2 space-y-2">
            <Link href="#features" className="block text-gray-700 hover:text-primary transition-colors">Features</Link>
            <Link href="#about" className="block text-gray-700 hover:text-primary transition-colors">About</Link>
            <Link href="#contact" className="block text-gray-700 hover:text-primary transition-colors">Contact</Link>
          </nav>
        )}
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">IDLink</h1>
          <p className="text-lg sm:text-xl text-muted-foreground">Decentralized Identity Verification Platform</p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="primary" size="lg" className="flex items-center justify-center">
              <Shield className="h-5 w-5 mr-2" />
              Get Started <ChevronRight className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="flex items-center justify-center">
              <Wallet className="h-5 w-5 mr-2" />
              Connect Wallet
            </Button>
          </div>
        </section>

        <Tabs defaultValue="wallet" className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden animate-slide-in">
          <TabsList className="grid w-full grid-cols-2 bg-gray-50">
            <TabsTrigger value="wallet" className="py-3">Web3 Wallet</TabsTrigger>
            <TabsTrigger value="providers" className="py-3">Identity Providers</TabsTrigger>
          </TabsList>
          <TabsContent value="wallet">
            <Card className="p-4 sm:p-6 transition-transform transform hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <Wallet className="h-5 w-5 sm:h-6 sm:w-6 text-primary mr-2" />
                  Connect Your Web3 Wallet
                </CardTitle>
                <CardDescription>Link your decentralized identity to your wallet seamlessly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Wallet className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                  <div>
                    <p className="font-medium">Web3 Wallet Integration</p>
                    <p className="text-sm text-muted-foreground">Securely connect your Ethereum wallet</p>
                  </div>
                </div>
                {!walletConnected ? (
                  <Button onClick={connectWallet} className="w-full flex justify-center" disabled={isConnecting}>
                    {isConnecting ? <Loader2 className="animate-spin mr-2" /> : <Wallet className="h-5 w-5 mr-2" />}
                    {isConnecting ? 'Connecting...' : 'Connect Wallet'}
                  </Button>
                ) : (
                  <div className="bg-green-100 text-green-800 p-4 rounded-md flex items-center animate-bounce">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                    Wallet Connected Successfully
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="providers">
            <Card className="p-4 sm:p-6 transition-transform transform hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary mr-2" />
                  Choose an Identity Provider
                </CardTitle>
                <CardDescription>Verify your identity using trusted providers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button onClick={() => verifyIdentity('Civic')} className="w-full justify-start flex items-center" disabled={isVerifying}>
                  <Image src="/civic-logo.svg" alt="Civic logo" width={24} height={24} className="mr-2" />
                  {isVerifying ? <Loader2 className="animate-spin mr-2" /> : null}
                  Verify with Civic
                </Button>
                <Button onClick={() => verifyIdentity('uPort')} className="w-full justify-start flex items-center" disabled={isVerifying}>
                  <Image src="/uport-logo.svg" alt="uPort logo" width={24} height={24} className="mr-2" />
                  {isVerifying ? <Loader2 className="animate-spin mr-2" /> : null}
                  Verify with uPort
                </Button>
                <Button onClick={() => verifyIdentity('Sovrin')} className="w-full justify-start flex items-center" disabled={isVerifying}>
                  <Image src="/sovrin-logo.svg" alt="Sovrin logo" width={24} height={24} className="mr-2" />
                  {isVerifying ? <Loader2 className="animate-spin mr-2" /> : null}
                  Verify with Sovrin
                </Button>
              </CardContent>
              {verificationStatus && (
                <CardFooter>
                  <div className="bg-blue-100 text-blue-800 p-4 rounded-md flex items-center transition-opacity duration-500">
                    <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                    {verificationStatus}
                  </div>
                </CardFooter>
              )}
            </Card>
          </TabsContent>
        </Tabs>

        <section id="features" className="mt-16 max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Why Choose IDLink?</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="p-4 sm:p-6 hover:shadow-2xl transition-shadow">
              <CardHeader>
                <UserCheck className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-4" />
                <CardTitle className="text-lg sm:text-xl">Decentralized</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base">Your identity, your control. No central authority manages your personal data.</p>
              </CardContent>
            </Card>
            <Card className="p-4 sm:p-6 hover:shadow-2xl transition-shadow">
              <CardHeader>
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-4" />
                <CardTitle className="text-lg sm:text-xl">Secure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base">Advanced encryption and blockchain technology keep your information safe.</p>
              </CardContent>
            </Card>
            <Card className="p-4 sm:p-6 hover:shadow-2xl transition-shadow">
              <CardHeader>
                <Wallet className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-4" />
                <CardTitle className="text-lg sm:text-xl">Interoperable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base">Works seamlessly with various Web3 wallets and identity providers.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="about" className="mt-16 max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <Image src="/about-image.svg" alt="About IDLink" width={500} height={300} className="w-full rounded-md" />
          </div>
          <div className="md:w-1/2 md:pl-6">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">About IDLink</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-4">IDLink leverages the power of blockchain to provide a secure and decentralized identity verification system. Our platform ensures that your personal data remains under your control while offering seamless integration with leading Web3 wallets and identity providers.</p>
            <Button variant="secondary" className="flex items-center">
              Learn More <ChevronRight className="ml-2" />
            </Button>
          </div>
        </section>

        <section id="contact" className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <Card className="p-4 sm:p-6">
            <form className="space-y-4">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium">Name</Label>
                <Input id="name" placeholder="Your Name" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium">Email</Label>
                <Input type="email" id="email" placeholder="your.email@example.com" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="message" className="block text-sm font-medium">Message</Label>
                <Input as="textarea" id="message" placeholder="Your message..." required className="mt-1 h-32" />
              </div>
              <Button type="submit" className="w-full flex justify-center">
                Send Message
              </Button>
            </form>
          </Card>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-200 py-6">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm sm:text-base mb-4 sm:mb-0">&copy; 2024 IDLink. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <Link href="#" className="text-sm sm:text-base hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm sm:text-base hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="text-sm sm:text-base hover:text-white transition-colors">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

