import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Cpu, Layers, Lightbulb, Palette, Zap } from 'lucide-react'

export default function CodeDesignPortfolio() {
  const [activeTab, setActiveTab] = useState('projects')

  const projects = [
    { title: 'Neural Art Generator', description: 'AI-powered art creation tool', icon: <Palette className="h-6 w-6" /> },
    { title: 'Interactive Sound Visualizer', description: 'Web-based audio visualization', icon: <Layers className="h-6 w-6" /> },
    { title: 'Generative Poetry Bot', description: 'AI-generated poetry experience', icon: <Code className="h-6 w-6" /> },
  ]

  const experiments = [
    { title: 'Quantum Computing Simulator', description: 'Educational quantum circuit designer', icon: <Cpu className="h-6 w-6" /> },
    { title: 'AR Data Visualization', description: 'Augmented reality data explorer', icon: <Lightbulb className="h-6 w-6" /> },
    { title: 'Emotion Recognition AI', description: 'Real-time emotion detection system', icon: <Zap className="h-6 w-6" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 text-white p-8">
      <header className="text-center mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-4"
        >
          CodeDesign
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-xl"
        >
          Creative Technologist | AI Enthusiast | Interactive Media Designer
        </motion.p>
      </header>

      <Tabs defaultValue="projects" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="projects" onClick={() => setActiveTab('projects')}>Projects</TabsTrigger>
          <TabsTrigger value="experiments" onClick={() => setActiveTab('experiments')}>Experiments</TabsTrigger>
        </TabsList>
        <TabsContent value="projects">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {project.icon}
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="secondary" className="w-full">View Project</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="experiments">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiments.map((experiment, index) => (
              <motion.div
                key={experiment.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {experiment.icon}
                      {experiment.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">{experiment.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="secondary" className="w-full">Explore Experiment</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="text-center mt-16"
      >
        <p>&copy; 2024 CodeDesign. All rights reserved.</p>
        <div className="mt-4">
          <Button variant="outline" className="mr-2">Contact</Button>
          <Button variant="outline">Resume</Button>
        </div>
      </motion.footer>
    </div>
  )
}