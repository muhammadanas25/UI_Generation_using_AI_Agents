import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function Component() {
  const handleDownload = () => {
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
  }

  return (
    <div className="flex justify-center items-center min-h-[200px] bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-lg shadow-lg">
      <Button
        onClick={handleDownload}
        className="bg-white text-purple-600 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-300 font-semibold py-2 px-4 rounded-full shadow-md flex items-center space-x-2"
      >
        <Download className="w-5 h-5 mr-2" />
        <span>Download Resume</span>
      </Button>
    </div>
  )
}