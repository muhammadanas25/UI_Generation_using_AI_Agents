import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Paintbrush, Layers, Pen, Camera, Film, Laptop } from "lucide-react"

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
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Sam Miller's Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <skill.icon className="w-5 h-5 text-primary" />
                <span className="font-medium">{skill.name}</span>
              </div>
              <Progress value={skill.proficiency} className="h-2" />
              <span className="text-sm text-muted-foreground text-right">{skill.proficiency}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}