import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { IconButton } from "@/components/ui/icon-button"
import { Search } from "lucide-react"

const DIYIcon = ({ d, label }: { d: string; label: string }) => (
  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 cursor-pointer">
    <svg
      className="w-16 h-16 mb-2 text-indigo-600"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={d} />
    </svg>
    <span className="text-sm font-medium text-gray-700">{label}</span>
  </div>
)

export default function HomeDIYIcons() {
  const allIcons = [
    { d: "M3 3h18v18H3zM21 9H3m0 8h18m-9-8v8", label: "Furniture" },
    { d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", label: "Decor" },
    { d: "M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM3 7h18M3 11h18", label: "Painting" },
    { d: "M12 19c0-5 8-5 8-10a4 4 0 00-8 0 4 4 0 00-8 0c0 5 8 5 8 10z", label: "Gardening" },
    { d: "M15 14l-3-3 3-3m-6 0l3 3-3 3m3-6v12", label: "Lighting" },
    { d: "M3 3h18v18H3zM9 3v18m6-18v18", label: "Storage" },
    { d: "M3 3h18v18H3zm0 6h18M3 15h18", label: "Flooring" },
  ]

  const [searchTerm, setSearchTerm] = useState("")

  const filteredIcons = allIcons.filter(icon =>
    icon.label.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <Card className="w-full max-w-5xl mx-auto">
        <CardHeader className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <CardTitle className="text-2xl font-semibold text-gray-800">HomeDIY Icon Set</CardTitle>
          <div className="mt-4 sm:mt-0 flex items-center">
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-64"
            />
            <IconButton className="ml-2" aria-label="Search">
              <Search className="w-5 h-5 text-gray-500" />
            </IconButton>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {filteredIcons.map((icon, index) => (
              <DIYIcon key={index} d={icon.d} label={icon.label} />
            ))}
          </div>
          {filteredIcons.length === 0 && (
            <p className="text-center text-gray-500 mt-4">No projects found.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}