import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function ContentCuratorPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">ContentCurator</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#case-studies" className="text-gray-600 hover:text-gray-800">Case Studies</a></li>
              <li><a href="#campaigns" className="text-gray-600 hover:text-gray-800">Campaigns</a></li>
              <li><a href="#strategies" className="text-gray-600 hover:text-gray-800">Strategies</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Elevate Your Social Media Presence</h2>
          <p className="text-xl text-gray-600 mb-8">Expert social media management to grow your brand and engage your audience</p>
          <Button size="lg">
            Let's Connect
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </section>

        <section id="case-studies" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Tech Startup Growth", description: "Increased social media engagement by 300% in 6 months" },
              { title: "Fashion Brand Launch", description: "Reached 1 million followers across platforms in 3 months" },
              { title: "Non-Profit Awareness", description: "Drove 50,000 petition signatures through targeted campaigns" }
            ].map((study, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{study.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{study.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="campaigns" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Successful Social Campaigns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "#TechTuesday", description: "Weekly tech tips campaign that increased B2B leads by 25%" },
              { title: "Influencer Takeover", description: "Collaborative campaign resulting in 500k+ impressions" },
              { title: "User-Generated Content Challenge", description: "Boosted engagement rates by 40% across all platforms" },
              { title: "Virtual Product Launch", description: "Generated 10,000 pre-orders through social media teasers" }
            ].map((campaign, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{campaign.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{campaign.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="strategies" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Growth Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Content Calendar Optimization", description: "Tailored posting schedules for maximum engagement" },
              { title: "Cross-Platform Synergy", description: "Unified brand messaging across all social channels" },
              { title: "Data-Driven Decision Making", description: "Continuous improvement based on analytics insights" }
            ].map((strategy, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{strategy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{strategy.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <Card>
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Name" />
                  <Input placeholder="Email" type="email" />
                </div>
                <Input placeholder="Subject" />
                <Textarea placeholder="Your message" rows={4} />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">ContentCurator</h3>
              <p className="text-gray-400">Elevating brands through strategic social media management</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="hover:text-gray-300"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-gray-300"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="hover:text-gray-300"><Linkedin className="h-6 w-6" /></a>
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