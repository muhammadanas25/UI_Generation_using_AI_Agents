import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Code, ExternalLink, Github, Linkedin, Mail, Twitter, Sun, Moon } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import Image from 'next/image'

export default function Component() {
  const [activeTab, setActiveTab] = useState('html')
  const [darkMode, setDarkMode] = useState(false)

  const projects = [
    { name: 'E-commerce Site', image: '/placeholder.svg', demo: '#', github: '#' },
    { name: 'Blog Platform', image: '/placeholder.svg', demo: '#', github: '#' },
    { name: 'Portfolio Template', image: '/placeholder.svg', demo: '#', github: '#' },
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

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-500">
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold">CSSPro</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#snippets" className="hover:text-primary transition-colors">Snippets</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Switch checked={darkMode} onCheckedChange={toggleTheme}>
              {darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Switch>
            <button className="md:hidden focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 space-y-24">
          <section className="text-center space-y-6">
            <h2 className="text-5xl font-extrabold animate-fadeIn">Front-End Developer Extraordinaire</h2>
            <p className="text-xl max-w-2xl mx-auto animate-fadeIn delay-200">Crafting beautiful, responsive, and user-friendly web experiences with a passion for clean code and modern design.</p>
            <Button className="mt-6 animate-bounce">View My Work</Button>
            <div className="flex justify-center mt-6 space-x-4 animate-fadeIn delay-400">
              <a href="#" className="text-primary hover:text-primary-foreground transition-colors"><Github className="w-6 h-6" /></a>
              <a href="#" className="text-primary hover:text-primary-foreground transition-colors"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="text-primary hover:text-primary-foreground transition-colors"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="text-primary hover:text-primary-foreground transition-colors"><Mail className="w-6 h-6" /></a>
            </div>
          </section>

          <section id="projects" className="space-y-12">
            <h3 className="text-4xl font-bold text-center">Featured Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {projects.map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl animate-fadeIn">
                  <Image src={project.image} alt={project.name} width={400} height={300} className="w-full h-48 object-cover" />
                  <div className="p-6 space-y-4">
                    <h4 className="text-2xl font-semibold">{project.name}</h4>
                    <p className="text-gray-600 dark:text-gray-400">A brief description of the project goes here. Highlighting key features and technologies used.</p>
                    <div className="flex space-x-4">
                      <a href={project.demo} className="flex items-center text-primary hover:text-primary-foreground transition-colors">
                        <ExternalLink className="w-5 h-5 mr-1" /> Demo
                      </a>
                      <a href={project.github} className="flex items-center text-primary hover:text-primary-foreground transition-colors">
                        <Github className="w-5 h-5 mr-1" /> Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="skills" className="space-y-12">
            <h3 className="text-4xl font-bold text-center">Skills & Expertise</h3>
            <div className="flex flex-wrap justify-center gap-4 animate-fadeIn">
              {skills.map((skill, index) => (
                <span key={index} className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section id="snippets" className="space-y-12">
            <h3 className="text-4xl font-bold text-center">Code Snippets</h3>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden animate-fadeIn">
              <div className="flex border-b border-gray-200 dark:border-gray-700">
                {Object.keys(codeSnippets).map((lang) => (
                  <button
                    key={lang}
                    className={`px-4 py-2 focus:outline-none ${activeTab === lang ? 'bg-primary text-primary-foreground' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                    onClick={() => setActiveTab(lang)}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
              <pre className="p-4 overflow-x-auto">
                <code className="block whitespace-pre-wrap">{codeSnippets[activeTab]}</code>
              </pre>
            </div>
          </section>

          <section id="contact" className="space-y-12">
            <h3 className="text-4xl font-bold text-center">Get In Touch</h3>
            <form className="max-w-lg mx-auto space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg animate-fadeIn">
              <div>
                <Input type="text" placeholder="Name" className="w-full" />
              </div>
              <div>
                <Input type="email" placeholder="Email" className="w-full" />
              </div>
              <div>
                <Textarea placeholder="Message" className="w-full h-32" />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </section>
        </main>

        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 CSSPro. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Github className="w-6 h-6" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Mail className="w-6 h-6" /></a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}