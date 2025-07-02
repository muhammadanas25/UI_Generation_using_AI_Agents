import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Code, ExternalLink, Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Component() {
  const [activeTab, setActiveTab] = useState('html')

  const projects = [
    { name: 'E-commerce Site', image: '/placeholder.svg?height=100&width=200', demo: '#', github: '#' },
    { name: 'Blog Platform', image: '/placeholder.svg?height=100&width=200', demo: '#', github: '#' },
    { name: 'Portfolio Template', image: '/placeholder.svg?height=100&width=200', demo: '#', github: '#' },
  ]

  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Git']

  const codeSnippets = {
    html: `<nav class="flex items-center justify-between">
  <a href="#" class="text-2xl font-bold">Logo</a>
  <ul class="flex space-x-4">
    <li><a href="#" class="hover:text-blue-500">Home</a></li>
    <li><a href="#" class="hover:text-blue-500">About</a></li>
    <li><a href="#" class="hover:text-blue-500">Contact</a></li>
  </ul>
</nav>`,
    css: `.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}`,
    js: `const toggleDarkMode = () => {
  const body = document.body;
  body.classList.toggle('dark-mode');
  
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
};

// Check user's preference on load
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">CSSPro</h1>
          <ul className="flex space-x-4">
            <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
            <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
            <li><a href="#snippets" className="hover:text-primary transition-colors">Snippets</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-24">
        <section className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Front-End Developer Extraordinaire</h2>
          <p className="text-xl max-w-2xl mx-auto">Crafting beautiful, responsive, and user-friendly web experiences with a passion for clean code and modern design.</p>
          <Button className="mt-4">View My Work</Button>
        </section>

        <section id="projects" className="space-y-8">
          <h3 className="text-3xl font-bold text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                <div className="p-4 space-y-2">
                  <h4 className="text-xl font-semibold">{project.name}</h4>
                  <div className="flex space-x-2">
                    <a href={project.demo} className="text-primary hover:underline flex items-center">
                      <ExternalLink className="w-4 h-4 mr-1" /> Demo
                    </a>
                    <a href={project.github} className="text-primary hover:underline flex items-center">
                      <Github className="w-4 h-4 mr-1" /> Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="space-y-8">
          <h3 className="text-3xl font-bold text-center">Skills & Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span key={index} className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="snippets" className="space-y-8">
          <h3 className="text-3xl font-bold text-center">Code Snippets</h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              {Object.keys(codeSnippets).map((lang) => (
                <button
                  key={lang}
                  className={`px-4 py-2 focus:outline-none ${activeTab === lang ? 'bg-primary text-primary-foreground' : 'text-gray-600 dark:text-gray-400'}`}
                  onClick={() => setActiveTab(lang)}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            <pre className="p-4 overflow-x-auto">
              <code>{codeSnippets[activeTab]}</code>
            </pre>
          </div>
        </section>

        <section id="contact" className="space-y-8">
          <h3 className="text-3xl font-bold text-center">Get In Touch</h3>
          <form className="max-w-md mx-auto space-y-4">
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Textarea placeholder="Message" />
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 CSSPro. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary"><Twitter className="w-6 h-6" /></a>
            <a href="#" className="hover:text-primary"><Github className="w-6 h-6" /></a>
            <a href="#" className="hover:text-primary"><Linkedin className="w-6 h-6" /></a>
            <a href="#" className="hover:text-primary"><Mail className="w-6 h-6" /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}