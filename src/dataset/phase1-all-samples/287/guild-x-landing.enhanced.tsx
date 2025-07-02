import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Coins, Gamepad2, Share2, Shield, Users, ChevronDown, Linkedin, Twitter, Discord } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function GuildXLanding() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const testimonials = [
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
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <header className="px-4 lg:px-6 h-20 flex items-center bg-gray-900 shadow-md fixed top-0 w-full z-50 transition-shadow duration-300">
        <Link className="flex items-center justify-center text-white" href="#">
          <Gamepad2 className="h-8 w-8 mr-3 animate-pulse" />
          <span className="text-xl font-extrabold">GuildX</span>
        </Link>
        <nav className="ml-auto flex gap-6">
          <Link className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200" href="#faq">
            FAQ
          </Link>
          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
            <Twitter className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
            <Discord className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
            <Linkedin className="h-5 w-5" />
          </Button>
        </nav>
      </header>
      <main className="flex-1 pt-20">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-cover bg-center" style={{ backgroundImage: "url('/gaming-bg.jpg')" }}>
          <div className="container px-4 md:px-6 text-center text-white animate-fadeIn">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Welcome to GuildX</h1>
            <p className="mx-auto max-w-2xl text-lg md:text-2xl mb-8 drop-shadow-md">
              Join the future of gaming. Share assets, earn together, and dominate the metaverse.
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-indigo-600 hover:bg-indigo-700 transition-transform transform hover:scale-105">Join the Guild</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black transition-transform transform hover:scale-105">
                Learn More
              </Button>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-16 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12">Guild Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gray-700 hover:bg-gray-600 transition-colors duration-300 transform hover:scale-105">
                <CardHeader className="flex flex-col items-center">
                  <Share2 className="h-10 w-10 mb-4 text-indigo-400" />
                  <CardTitle className="text-white text-xl">Asset Sharing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Share in-game assets with guild members to maximize resources and strategic advantages.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-700 hover:bg-gray-600 transition-colors duration-300 transform hover:scale-105">
                <CardHeader className="flex flex-col items-center">
                  <Coins className="h-10 w-10 mb-4 text-yellow-400" />
                  <CardTitle className="text-white text-xl">Profit Sharing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Earn a share of the guild's profits based on your contributions and participation.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-700 hover:bg-gray-600 transition-colors duration-300 transform hover:scale-105">
                <CardHeader className="flex flex-col items-center">
                  <Users className="h-10 w-10 mb-4 text-green-400" />
                  <CardTitle className="text-white text-xl">Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Join a thriving community of gamers, strategists, and Web3 enthusiasts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-16 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12">How It Works</h2>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <li className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105">
                <Shield className="h-12 w-12 mb-4 text-indigo-400" />
                <h3 className="text-xl font-bold text-white mb-2">Connect Your Wallet</h3>
                <p className="text-gray-300">
                  Link your Web3 wallet to join the guild and access shared resources.
                </p>
              </li>
              <li className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105">
                <Share2 className="h-12 w-12 mb-4 text-indigo-400" />
                <h3 className="text-xl font-bold text-white mb-2">Share & Collaborate</h3>
                <p className="text-gray-300">
                  Contribute assets, participate in guild activities, and collaborate with members.
                </p>
              </li>
              <li className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105">
                <Coins className="h-12 w-12 mb-4 text-indigo-400" />
                <h3 className="text-xl font-bold text-white mb-2">Earn & Grow</h3>
                <p className="text-gray-300">
                  Receive your share of guild earnings and grow your gaming portfolio.
                </p>
              </li>
            </ol>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12">Testimonials</h2>
            <div className="relative max-w-3xl mx-auto">
              <div className="bg-gray-700 p-8 rounded-lg shadow-lg transition-opacity duration-500 fade-in">
                <p className="text-gray-300 italic mb-4">"{testimonials[currentTestimonial].quote}"</p>
                <p className="text-white font-bold text-right">- {testimonials[currentTestimonial].name}</p>
              </div>
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full shadow-lg transition transform hover:scale-110"
              >
                <ChevronDown className="rotate-180" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full shadow-lg transition transform hover:scale-110"
              >
                <ChevronDown />
              </button>
            </div>
          </div>
        </section>
        <section id="faq" className="w-full py-16 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
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
                  <AccordionTrigger className="text-lg text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="container px-4 md:px-6 text-center text-white animate-fadeIn">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Ready to Join the Future of Gaming?</h2>
            <p className="mx-auto max-w-2xl text-lg md:text-2xl mb-8">
              Connect your wallet, join GuildX, and start your Web3 gaming journey today.
            </p>
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 transition-transform transform hover:scale-105">
              Join GuildX Now
            </Button>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 bg-gray-900">
        <p className="text-xs text-gray-500">© 2024 GuildX. All rights reserved.</p>
        <nav className="flex gap-4 sm:ml-auto">
          <Link className="text-xs text-gray-300 hover:text-white transition-colors duration-200" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-gray-300 hover:text-white transition-colors duration-200" href="#">
            Privacy
          </Link>
          <Link className="text-xs text-gray-300 hover:text-white transition-colors duration-200 flex items-center" href="#">
            <Linkedin className="h-4 w-4 mr-1" /> LinkedIn
          </Link>
          <Link className="text-xs text-gray-300 hover:text-white transition-colors duration-200 flex items-center" href="#">
            <Twitter className="h-4 w-4 mr-1" /> Twitter
          </Link>
          <Link className="text-xs text-gray-300 hover:text-white transition-colors duration-200 flex items-center" href="#">
            <Discord className="h-4 w-4 mr-1" /> Discord
          </Link>
        </nav>
      </footer>
    </div>
  )
}