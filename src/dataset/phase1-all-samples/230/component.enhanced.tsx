import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Battery, Zap, BarChart3, Shield, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Component() {
  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 min-h-screen">
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">PowerChain</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#features" className="text-green-600 hover:text-green-800 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#comparison" className="text-green-600 hover:text-green-800 transition-colors">
                  Comparison
                </a>
              </li>
              <li>
                <a href="#cta" className="text-green-600 hover:text-green-800 transition-colors">
                  Get Started
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="relative text-center mb-24">
          <Image
            src="/hero-bg.jpg"
            alt="Renewable Energy"
            layout="responsive"
            width={1920}
            height={600}
            className="rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-white px-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold mb-4">Revolutionizing Energy Trading</h2>
            <p className="text-xl mb-8">
              Empowering individuals and businesses to trade renewable energy securely and efficiently.
            </p>
            <Button className="bg-green-600 hover:bg-green-700 flex items-center transition-transform transform hover:scale-105">
              Learn More <ChevronRight className="ml-2" />
            </Button>
          </motion.div>
        </section>

        <section id="features" className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Key Features</h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
            }}
          >
            {[{
              icon: Battery,
              title: "Peer-to-Peer Trading",
              description: "Direct energy trading between producers and consumers, cutting out the middleman."
            }, {
              icon: Zap,
              title: "Real-time Settlements",
              description: "Instant transactions and settlements using blockchain technology."
            }, {
              icon: BarChart3,
              title: "Advanced Analytics",
              description: "Detailed insights into energy production, consumption, and market trends."
            }, {
              icon: Shield,
              title: "Enhanced Security",
              description: "Robust security measures to protect user data and transactions."
            }].map((feature, index) => (
              <motion.div key={index} variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}>
                <Card className="hover:shadow-xl transition-shadow transform hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <feature.icon className="mr-2 text-green-600 w-6 h-6" />
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="comparison" className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Why Choose PowerChain?</h3>
          <motion.div
            className="overflow-x-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <table className="w-full bg-white shadow-md rounded-lg">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="px-4 py-2">Feature</th>
                  <th className="px-4 py-2">PowerChain</th>
                  <th className="px-4 py-2">Power Ledger</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Transaction Speed", powerChain: "Near-instant", powerLedger: "Fast" },
                  { feature: "Scalability", powerChain: "Highly scalable", powerLedger: "Scalable" },
                  { feature: "User Interface", powerChain: "Intuitive and modern", powerLedger: "Standard" },
                  { feature: "Integration Ease", powerChain: "Seamless API integration", powerLedger: "API available" },
                ].map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-green-50" : "bg-white"}>
                    <td className="border px-4 py-2 font-medium">{item.feature}</td>
                    <td className="border px-4 py-2">{item.powerChain}</td>
                    <td className="border px-4 py-2">{item.powerLedger}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </section>

        <section id="testimonials" className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">What Our Users Say</h3>
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            {[{
              name: "Jane Doe",
              role: "Energy Producer",
              avatar: "/avatars/jane.jpg",
              testimonial: "PowerChain has transformed the way I trade energy. The platform is user-friendly and highly efficient."
            }, {
              name: "John Smith",
              role: "Business Owner",
              avatar: "/avatars/john.jpg",
              testimonial: "With PowerChain, managing energy transactions has never been easier. The real-time settlements are a game-changer."
            }, {
              name: "Emily Johnson",
              role: "Sustainability Advocate",
              avatar: "/avatars/emily.jpg",
              testimonial: "The advanced analytics provided by PowerChain help me make informed decisions about energy consumption."
            }].map((user, index) => (
              <Card key={index} className="flex-1 p-6 shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105">
                <CardContent className="flex flex-col items-center">
                  <Avatar className="mb-4">
                    <AvatarImage src={user.avatar} alt={user.name} />
                  </Avatar>
                  <p className="italic text-gray-600 text-center mb-4">"{user.testimonial}"</p>
                  <div className="text-center">
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="cta" className="text-center mb-16">
          <h3 className="text-2xl font-semibold mb-4">Ready to Join the Energy Revolution?</h3>
          <p className="text-xl text-gray-600 mb-8">Start trading renewable energy on PowerChain today!</p>
          <Button className="bg-green-600 hover:bg-green-700 flex items-center transition-transform transform hover:scale-105">
            Get Started Now <ChevronRight className="ml-2" />
          </Button>
        </section>

        <section id="newsletter" className="bg-white shadow-md rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-semibold mb-4 text-center">Subscribe to Our Newsletter</h3>
          <p className="text-gray-600 mb-6 text-center">Stay updated with the latest news and updates from PowerChain.</p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Input placeholder="Your email address" className="w-full max-w-md" />
            <Button className="bg-green-600 hover:bg-green-700 flex items-center">
              Subscribe <ChevronRight className="ml-2" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-green-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761..." />
              </svg>
            </a>
            <a href="#" className="hover:text-green-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627..." />
              </svg>
            </a>
            <a href="#" className="hover:text-green-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204..." />
              </svg>
            </a>
          </div>
          <p className="">&copy; 2024 PowerChain. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}