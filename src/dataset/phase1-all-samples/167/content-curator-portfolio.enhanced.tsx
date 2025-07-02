import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, Facebook, Instagram, Linkedin, Twitter, Menu, X } from "lucide-react"
import Image from "next/image"

export default function ContentCuratorPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">ContentCurator</h1>
          <nav>
            <ul className="hidden md:flex space-x-6">
              <li><a href="#case-studies" className="text-gray-600 hover:text-gray-800 transition-colors">Case Studies</a></li>
              <li><a href="#campaigns" className="text-gray-600 hover:text-gray-800 transition-colors">Campaigns</a></li>
              <li><a href="#strategies" className="text-gray-600 hover:text-gray-800 transition-colors">Strategies</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-800 transition-colors">Contact</a></li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-600 hover:text-gray-800 focus:outline-none transition-colors">
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <ul className="flex flex-col space-y-4 p-4">
              <li><a href="#case-studies" className="text-gray-600 hover:text-gray-800 transition-colors">Case Studies</a></li>
              <li><a href="#campaigns" className="text-gray-600 hover:text-gray-800 transition-colors">Campaigns</a></li>
              <li><a href="#strategies" className="text-gray-600 hover:text-gray-800 transition-colors">Strategies</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-800 transition-colors">Contact</a></li>
            </ul>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-24">
        <section className="mb-24 text-center">
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-extrabold mb-6 text-gray-800 animate-fadeIn">Elevate Your Social Media Presence</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl animate-fadeIn delay-200">Expert social media management to grow your brand and engage your audience through innovative strategies and creative campaigns.</p>
            <Button size="lg" className="flex items-center justify-center animate-pulse">
              Let's Connect
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="mt-12">
            <Image src="/hero-illustration.svg" alt="Hero Illustration" width={600} height={400} className="mx-auto animate-slideIn" />
          </div>
        </section>

        <section id="case-studies" className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Featured Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Tech Startup Growth", description: "Increased social media engagement by 300% in 6 months", image: "/case-tech.png" },
              { title: "Fashion Brand Launch", description: "Reached 1 million followers across platforms in 3 months", image: "/case-fashion.png" },
              { title: "Non-Profit Awareness", description: "Drove 50,000 petition signatures through targeted campaigns", image: "/case-nonprofit.png" }
            ].map((study, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <Image src={study.image} alt={study.title} width={400} height={250} className="object-cover h-48 w-full" />
                <CardHeader className="mt-4">
                  <CardTitle className="text-xl text-gray-800">{study.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{study.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="campaigns" className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Successful Social Campaigns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { title: "#TechTuesday", description: "Weekly tech tips campaign that increased B2B leads by 25%", icon: "/campaign-tech.svg" },
              { title: "Influencer Takeover", description: "Collaborative campaign resulting in 500k+ impressions", icon: "/campaign-influencer.svg" },
              { title: "UGC Challenge", description: "Boosted engagement rates by 40% across all platforms", icon: "/campaign-ugc.svg" },
              { title: "Virtual Launch", description: "Generated 10,000 pre-orders through social media teasers", icon: "/campaign-launch.svg" }
            ].map((campaign, index) => (
              <Card key={index} className="flex items-center p-6 hover:bg-gray-50 transition-colors duration-300">
                <Image src={campaign.icon} alt={campaign.title} width={50} height={50} className="mr-4" />
                <div>
                  <CardTitle className="text-lg text-gray-800">{campaign.title}</CardTitle>
                  <CardDescription className="text-gray-600">{campaign.description}</CardDescription>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="strategies" className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Growth Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Content Calendar Optimization", description: "Tailored posting schedules for maximum engagement", icon: "/strategy-calendar.svg" },
              { title: "Cross-Platform Synergy", description: "Unified brand messaging across all social channels", icon: "/strategy-synergy.svg" },
              { title: "Data-Driven Decisions", description: "Continuous improvement based on analytics insights", icon: "/strategy-data.svg" }
            ].map((strategy, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Image src={strategy.icon} alt={strategy.title} width={40} height={40} className="mr-3" />
                  <CardTitle className="text-lg text-gray-800">{strategy.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-600">{strategy.description}</CardDescription>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Get in Touch</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <Card className="w-full md:w-1/2 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input placeholder="Name" required />
                    <Input placeholder="Email" type="email" required />
                  </div>
                  <Input placeholder="Subject" required />
                  <Textarea placeholder="Your message" rows={5} required />
                  <Button type="submit" className="w-full hover:bg-indigo-600 transition-colors">Send Message</Button>
                </form>
              </CardContent>
            </Card>
            <div className="mt-8 md:mt-0 md:ml-8 w-full md:w-1/2">
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                  <p className="text-gray-600 mb-2"><strong>Email:</strong> contact@contentcurator.com</p>
                  <p className="text-gray-600 mb-2"><strong>Phone:</strong> +1 (234) 567-8901</p>
                  <p className="text-gray-600"><strong>Address:</strong> 123 Social Ave, Media City, NY</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold">ContentCurator</h3>
              <p className="text-gray-400">Elevating brands through strategic social media management</p>
            </div>
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            © 2023 ContentCurator. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}