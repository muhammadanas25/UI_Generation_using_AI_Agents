import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Battery, Zap, BarChart3, Shield } from "lucide-react"

export default function Component() {
  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">PowerChain</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="text-green-600 hover:text-green-800">Features</a></li>
              <li><a href="#comparison" className="text-green-600 hover:text-green-800">Comparison</a></li>
              <li><a href="#cta" className="text-green-600 hover:text-green-800">Get Started</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Revolutionizing Energy Trading</h2>
          <p className="text-xl text-gray-600 mb-8">Empowering individuals and businesses to trade renewable energy securely and efficiently.</p>
          <Button className="bg-green-600 hover:bg-green-700">Learn More</Button>
        </section>

        <section id="features" className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Battery className="mr-2 text-green-600" />
                  Peer-to-Peer Trading
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Direct energy trading between producers and consumers, cutting out the middleman.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2 text-green-600" />
                  Real-time Settlements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Instant transactions and settlements using blockchain technology.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-2 text-green-600" />
                  Advanced Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Detailed insights into energy production, consumption, and market trends.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 text-green-600" />
                  Enhanced Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Robust security measures to protect user data and transactions.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="comparison" className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Why Choose PowerChain?</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="px-4 py-2">Feature</th>
                  <th className="px-4 py-2">PowerChain</th>
                  <th className="px-4 py-2">Power Ledger</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Transaction Speed</td>
                  <td className="border px-4 py-2">Near-instant</td>
                  <td className="border px-4 py-2">Fast</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Scalability</td>
                  <td className="border px-4 py-2">Highly scalable</td>
                  <td className="border px-4 py-2">Scalable</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">User Interface</td>
                  <td className="border px-4 py-2">Intuitive and modern</td>
                  <td className="border px-4 py-2">Standard</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Integration Ease</td>
                  <td className="border px-4 py-2">Seamless API integration</td>
                  <td className="border px-4 py-2">API available</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="cta" className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Join the Energy Revolution?</h3>
          <p className="text-xl text-gray-600 mb-8">Start trading renewable energy on PowerChain today!</p>
          <Button className="bg-green-600 hover:bg-green-700">Get Started Now</Button>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 PowerChain. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}