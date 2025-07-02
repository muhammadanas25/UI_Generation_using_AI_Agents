import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Paintbrush, Layers, Pen, Camera, Film, Laptop } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const skills = [
  { name: "Adobe Photoshop", icon: Paintbrush, proficiency: 90 },
  { name: "Adobe Illustrator", icon: Pen, proficiency: 85 },
  { name: "Adobe InDesign", icon: Layers, proficiency: 80 },
  { name: "Photography", icon: Camera, proficiency: 75 },
  { name: "Video Editing", icon: Film, proficiency: 70 },
  { name: "Web Design", icon: Laptop, proficiency: 65 },
]

export default function SamMillerSkills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-5xl mx-auto p-4"
    >
      <Card className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl rounded-3xl">
        <CardHeader className="text-center">
          <Image
            src="/sam-miller.jpg"
            alt="Sam Miller"
            width={100}
            height={100}
            className="rounded-full mx-auto mb-4 shadow-lg"
          />
          <CardTitle className="text-3xl font-extrabold text-white">Sam Miller's Skills</CardTitle>
          <p className="text-white mt-2">Passionate Graphic Designer & Multimedia Specialist</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.05 }}
                className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-4 shadow-lg transition duration-300"
              >
                <div className="flex items-center space-x-3">
                  <skill.icon className="w-6 h-6 text-white" />
                  <h3 className="text-lg font-medium text-white">{skill.name}</h3>
                </div>
                <Progress
                  value={skill.proficiency}
                  className="mt-2 h-3 rounded-full bg-white bg-opacity-30"
                />
                <span className="text-sm text-white mt-1 block text-right">{skill.proficiency}%</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <button className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition">
              Download Resume
            </button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}