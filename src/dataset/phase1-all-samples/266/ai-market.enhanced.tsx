import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Search, ShoppingCart, Wallet, User, Menu, Sun, Moon } from 'lucide-react'
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"

export default function AIMarket() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
        <header className="border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-indigo-500" />
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">AIMarket</h1>
            </div>
            <nav className="hidden md:flex">
              <ul className="flex space-x-6">
                <li>
                  <Button variant="ghost" className="relative group">
                    Explore
                    <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-indigo-500 transition-all group-hover:w-full"></span>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="relative group">
                    Sell
                    <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-indigo-500 transition-all group-hover:w-full"></span>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="relative group">
                    My Models
                    <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-indigo-500 transition-all group-hover:w-full"></span>
                  </Button>
                </li>
              </ul>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon" className="relative group">
                <ShoppingCart className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full px-1">3</span>
              </Button>
              <Button variant="outline" size="icon" className="hidden sm:inline-flex">
                <Wallet className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} className="hidden sm:inline-flex">
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-800 py-2">
              <nav className="container mx-auto px-4">
                <ul className="space-y-2">
                  <li><Button variant="ghost" className="w-full justify-start">Explore</Button></li>
                  <li><Button variant="ghost" className="w-full justify-start">Sell</Button></li>
                  <li><Button variant="ghost" className="w-full justify-start">My Models</Button></li>
                </ul>
              </nav>
            </div>
          )}
        </header>

        <main className="flex-grow container mx-auto px-4 py-8">
          <section className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-lg p-6">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover and Sell AI Model NFTs</h2>
                  <p className="mb-6">
                    Join AIMarket, the premier decentralized marketplace for AI models. Buy, sell, and trade unique AI model NFTs with ease.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button className="w-full sm:w-auto">Get Started</Button>
                    <Button variant="secondary" className="w-full sm:w-auto">Learn More</Button>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/hero-image.png"
                    alt="AI Marketplace"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </motion.div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white">Featured AI Model</h2>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300"
            >
              <Image
                src="/supernlp-3000.png"
                alt="SuperNLP 3000"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl text-indigo-600 dark:text-indigo-400">SuperNLP 3000</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                    Advanced natural language processing model with multi-language support and sentiment analysis.
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                  <Button variant="primary" className="w-full sm:w-auto">View Details</Button>
                  <span className="text-indigo-500 font-semibold">0.8 ETH</span>
                </CardFooter>
              </Card>
            </motion.div>
          </section>

          <section>
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <h2 className="text-2xl font-bold mb-4 md:mb-0 text-gray-800 dark:text-white">AI Models for Sale</h2>
              <div className="flex items-center space-x-2 w-full md:w-auto">
                <Input placeholder="Search models..." className="dark:bg-gray-700 w-full md:w-auto" />
                <Button size="icon" variant="outline">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Tabs defaultValue="all" className="mb-6">
              <TabsList className="flex flex-wrap justify-center md:justify-start space-x-2 bg-gray-200 dark:bg-gray-700 p-1 rounded">
                <TabsTrigger value="all" className="px-4 py-2 rounded focus:outline-none">
                  All
                </TabsTrigger>
                <TabsTrigger value="nlp" className="px-4 py-2 rounded focus:outline-none">
                  NLP
                </TabsTrigger>
                <TabsTrigger value="computer-vision" className="px-4 py-2 rounded focus:outline-none">
                  Computer Vision
                </TabsTrigger>
                <TabsTrigger value="generative" className="px-4 py-2 rounded focus:outline-none">
                  Generative
                </TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300"
                    >
                      <Image
                        src={`/ai-model-${i}.png`}
                        alt={`AI Model ${i}`}
                        width={400}
                        height={250}
                        className="w-full h-40 object-cover"
                      />
                      <Card className="p-4">
                        <CardHeader>
                          <CardTitle className="text-lg md:text-xl text-indigo-600 dark:text-indigo-400">AI Model #{i}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">Description of AI Model #{i}</p>
                          <p className="font-bold mt-2 text-indigo-500">Price: 0.5 ETH</p>
                        </CardContent>
                        <CardFooter className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                          <Button variant="outline" className="w-full sm:w-auto">Buy Now</Button>
                          <Button variant="secondary" size="icon">
                            <ShoppingCart className="h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="nlp">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2].map((i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300"
                    >
                      <Image
                        src={`/ai-model-nlp-${i}.png`}
                        alt={`NLP AI Model ${i}`}
                        width={400}
                        height={250}
                        className="w-full h-40 object-cover"
                      />
                      <Card className="p-4">
                        <CardHeader>
                          <CardTitle className="text-indigo-600 dark:text-indigo-400">NLP AI Model #{i}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700 dark:text-gray-300">Description of NLP AI Model #{i}</p>
                          <p className="font-bold mt-2 text-indigo-500">Price: 0.6 ETH</p>
                        </CardContent>
                        <CardFooter className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                          <Button variant="outline" className="w-full sm:w-auto">Buy Now</Button>
                          <Button variant="secondary" size="icon">
                            <ShoppingCart className="h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="computer-vision">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300"
                    >
                      <Image
                        src={`/ai-model-cv-${i}.png`}
                        alt={`Computer Vision AI Model ${i}`}
                        width={400}
                        height={250}
                        className="w-full h-40 object-cover"
                      />
                      <Card className="p-4">
                        <CardHeader>
                          <CardTitle className="text-indigo-600 dark:text-indigo-400">Computer Vision AI Model #{i}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700 dark:text-gray-300">Description of Computer Vision AI Model #{i}</p>
                          <p className="font-bold mt-2 text-indigo-500">Price: 0.7 ETH</p>
                        </CardContent>
                        <CardFooter className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                          <Button variant="outline" className="w-full sm:w-auto">Buy Now</Button>
                          <Button variant="secondary" size="icon">
                            <ShoppingCart className="h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="generative">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2].map((i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300"
                    >
                      <Image
                        src={`/ai-model-gen-${i}.png`}
                        alt={`Generative AI Model ${i}`}
                        width={400}
                        height={250}
                        className="w-full h-40 object-cover"
                      />
                      <Card className="p-4">
                        <CardHeader>
                          <CardTitle className="text-indigo-600 dark:text-indigo-400">Generative AI Model #{i}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700 dark:text-gray-300">Description of Generative AI Model #{i}</p>
                          <p className="font-bold mt-2 text-indigo-500">Price: 0.9 ETH</p>
                        </CardContent>
                        <CardFooter className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                          <Button variant="outline" className="w-full sm:w-auto">Buy Now</Button>
                          <Button variant="secondary" size="icon">
                            <ShoppingCart className="h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </section>

        </main>

        <footer className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold mb-2 text-gray-800 dark:text-white">About AIMarket</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Decentralized marketplace for AI model NFTs. Empowering developers to monetize their AI creations seamlessly.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-gray-800 dark:text-white">Quick Links</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>
                    <a href="#" className="hover:underline hover:text-indigo-500 transition-colors duration-200">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline hover:text-indigo-500 transition-colors duration-200">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline hover:text-indigo-500 transition-colors duration-200">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-gray-800 dark:text-white">Connect</h3>
                <ul className="flex space-x-4">
                  <li>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition-colors duration-200">
                      <User className="h-5 w-5" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition-colors duration-200">
                      <User className="h-5 w-5" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition-colors duration-200">
                      <User className="h-5 w-5" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} AIMarket. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

