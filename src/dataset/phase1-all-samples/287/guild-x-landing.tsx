import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Coins, Gamepad2, Share2, Shield, Users } from "lucide-react"
import Link from "next/link"

export default function GuildXLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Gamepad2 className="h-6 w-6 mr-2" />
          <span className="font-bold">GuildX</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#faq">
            FAQ
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to GuildX
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Join the future of gaming. Share assets, earn together, and dominate the metaverse.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Join the Guild</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Guild Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Share2 className="h-8 w-8 mb-2" />
                  <CardTitle>Asset Sharing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Share in-game assets with guild members to maximize resources and strategic advantages.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Coins className="h-8 w-8 mb-2" />
                  <CardTitle>Profit Sharing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Earn a share of the guild's profits based on your contributions and participation.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 mb-2" />
                  <CardTitle>Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Join a thriving community of gamers, strategists, and Web3 enthusiasts.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 list-decimal list-inside">
              <li className="flex flex-col items-center text-center">
                <Shield className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Connect Your Wallet</h3>
                <p>Link your Web3 wallet to join the guild and access shared resources.</p>
              </li>
              <li className="flex flex-col items-center text-center">
                <Share2 className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Share & Collaborate</h3>
                <p>Contribute assets, participate in guild activities, and collaborate with members.</p>
              </li>
              <li className="flex flex-col items-center text-center">
                <Coins className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Earn & Grow</h3>
                <p>Receive your share of guild earnings and grow your gaming portfolio.</p>
              </li>
            </ol>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Alex",
                  quote: "GuildX has transformed my gaming experience. The shared resources have helped me progress faster than ever!",
                },
                {
                  name: "Sam",
                  quote: "The community here is amazing. I've learned so much about Web3 gaming and made great friends along the way.",
                },
                {
                  name: "Jordan",
                  quote: "Profit sharing in GuildX is a game-changer. It's great to be rewarded for my contributions to the guild.",
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <p className="mb-4 italic">"{testimonial.quote}"</p>
                    <p className="font-bold">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {[
                {
                  question: "What is a Web3 gaming guild?",
                  answer: "A Web3 gaming guild is a decentralized organization of players who come together to share resources, strategies, and earnings in blockchain-based games.",
                },
                {
                  question: "How do I join GuildX?",
                  answer: "To join GuildX, you'll need a Web3 wallet. Once you have one, you can connect it to our platform and apply for membership.",
                },
                {
                  question: "What games does GuildX support?",
                  answer: "GuildX supports a variety of popular Web3 games. Check our games page for a full list of supported titles.",
                },
                {
                  question: "How does profit sharing work?",
                  answer: "Profit sharing is based on your contributions to the guild, including time spent playing, assets shared, and overall participation in guild activities.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Join the Future of Gaming?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl">
                  Connect your wallet, join GuildX, and start your Web3 gaming journey today.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">Join GuildX Now</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 GuildX. All rights reserved.</p>
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