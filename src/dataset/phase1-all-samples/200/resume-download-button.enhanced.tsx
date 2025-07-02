import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { useState } from "react"

export default function Component() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)
    // Replace this URL with the actual URL of your resume PDF
    const resumeUrl = "/path-to-your-resume.pdf"

    // Create a temporary anchor element
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "InspireNow_Resume.pdf"
    document.body.appendChild(link)

    // Trigger the download
    link.click()

    // Clean up
    document.body.removeChild(link)
    setIsDownloading(false)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-4">
      <Card className="max-w-sm w-full p-6 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105">
        <div className="flex flex-col items-center">
          <Image
            src="/profile-picture.jpg"
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">John Doe</h2>
          <p className="text-gray-600 mb-4 text-center">
            Frontend Engineer & UI/UX Designer
          </p>
          <Button
            onClick={handleDownload}
            disabled={isDownloading}
            className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300 font-semibold py-2 px-4 rounded-full shadow-md flex items-center space-x-2"
          >
            <Download className="w-5 h-5" />
            <span>{isDownloading ? "Downloading..." : "Download Resume"}</span>
          </Button>
        </div>
      </Card>
    </div>
  )
}