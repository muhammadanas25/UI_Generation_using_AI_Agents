import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Cpu, Layers, Lightbulb, Palette, Zap, Menu, GitHub, LinkedIn, Twitter } from 'lucide-react'
import Image from 'next/image'

export default function CodeDesignPortfolio() {
  const [activeTab, setActiveTab] = useState('projects')
  const [isNavOpen, setIsNavOpen] = useState(false)

  const projects = [
    { title: 'Neural Art Generator', description: 'AI-powered art creation tool', icon: <Palette className="h-6 w-6" />, image: '/projects/neural-art.jpg' },
    { title: 'Interactive Sound Visualizer', description: 'Web-based audio visualization', icon: <Layers className="h-6 w-6" />, image: '/projects/sound-visualizer.jpg' },
    { title: 'Generative Poetry Bot', description: 'AI-generated poetry experience', icon: <Code className="h-6 w-6" />, image: '/projects/poetry-bot.jpg' },
  ]

  const experiments = [
    { title: 'Quantum Computing Simulator', description: 'Educational quantum circuit designer', icon: <Cpu className="h-6 w-6" />, image: '/experiments/quantum-simulator.jpg' },
    { title: 'AR Data Visualization', description: 'Augmented reality data explorer', icon: <Lightbulb className="h-6 w-6" />, image: '/experiments/ar-visualization.jpg' },
    { title: 'Emotion Recognition AI', description: 'Real-time emotion detection system', icon: <Zap className="h-6 w-6" />, image: '/experiments/emotion-recognition.jpg' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 text-white p-4 md:p-8">
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-2">
          <Code className="h-8 w-8"/> 
          <span className="text-2xl font-bold">CodeDesign</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#experiments" className="hover:text-gray-300">Experiments</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setIsNavOpen(!isNavOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {isNavOpen && (
        <div className="flex flex-col space-y-2 mb-8 md:hidden">
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#experiments" className="hover:text-gray-300">Experiments</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
      )}

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold mb-4">Welcome to CodeDesign</h1>
        <p className="text-xl mb-6">Where creativity meets technology</p>
        <Button size="lg" className="mx-auto">Explore My Work</Button>
      </motion.section>

      {/* Header */}
      <header className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-semibold mb-2"
        >
          CodeDesign
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg"
        >
          Creative Technologist | AI Enthusiast | Interactive Media Designer
        </motion.p>
      </header>

      {/* Tabs */}
      <Tabs defaultValue="projects" className="max-w-6xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="projects" onClick={() => setActiveTab('projects')}>Projects</TabsTrigger>
          <TabsTrigger value="experiments" onClick={() => setActiveTab('experiments')}>Experiments</TabsTrigger>
        </TabsList>
        <TabsContent value="projects">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-lg border-none text-white hover:bg-white/20 transition duration-300">
                  <CardHeader className="relative h-48">
                    <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="rounded-t-md" />
                  </CardHeader>
                  <CardContent className="flex flex-col justify-between h-40">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {project.icon}
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300">{project.description}</CardDescription>
                    </div>
                    <Button variant="secondary" className="w-full mt-4 group-hover:scale-105 transition-transform">View Project</Button>
                  </CardContent>
                </Card>
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ opacity: 1 }}
                >
                  <Button variant="outline" onClick={() => alert(`Viewing ${project.title}`)}>Learn More</Button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="experiments">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiments.map((experiment, index) => (
              <motion.div
                key={experiment.title}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-lg border-none text-white hover:bg-white/20 transition duration-300">
                  <CardHeader className="relative h-48">
                    <Image src={experiment.image} alt={experiment.title} layout="fill" objectFit="cover" className="rounded-t-md" />
                  </CardHeader>
                  <CardContent className="flex flex-col justify-between h-40">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {experiment.icon}
                        {experiment.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300">{experiment.description}</CardDescription>
                    </div>
                    <Button variant="secondary" className="w-full mt-4 group-hover:scale-105 transition-transform">Explore Experiment</Button>
                  </CardContent>
                </Card>
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ opacity: 1 }}
                >
                  <Button variant="outline" onClick={() => alert(`Exploring ${experiment.title}`)}>Learn More</Button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center mt-16"
      >
        <h3 className="text-3xl font-semibold mb-4">Get in Touch</h3>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <GitHub className="h-6 w-6 hover:text-gray-300 transition-colors" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedIn className="h-6 w-6 hover:text-gray-300 transition-colors" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-6 w-6 hover:text-gray-300 transition-colors" />
          </a>
        </div>
        <Button variant="primary" onClick={() => alert('Contact form coming soon!')}>Contact Me</Button>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="text-center mt-16"
      >
        <p>&copy; 2024 CodeDesign. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-2">
          <Button variant="outline">Privacy Policy</Button>
          <Button variant="outline">Terms of Service</Button>
        </div>
      </motion.footer>
    </div>
  )
}