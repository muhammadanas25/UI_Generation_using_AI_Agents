import Image from "next/image"
import { Play } from 'lucide-react'

import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-amber-500 text-center sm:text-left">
        FrameByFrame: Behind the Scenes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {videos.map((video, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src={video.thumbnail}
              alt={video.title}
              width={300}
              height={169}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Button variant="secondary" size="icon" className="rounded-full">
                <Play className="h-4 w-4 sm:h-6 sm:w-6 text-amber-500" />
                <span className="sr-only">Play video</span>
              </Button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black to-transparent">
              <h3 className="text-white font-semibold mb-1 text-sm sm:text-base line-clamp-1">
                {video.title}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm">{video.views} views</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const videos = [
  {
    title: "Behind the Scenes: Lighting Setup",
    thumbnail: "/placeholder.svg?height=169&width=300",
    views: "24K",
  },
  {
    title: "Director's Commentary: Opening Scene",
    thumbnail: "/placeholder.svg?height=169&width=300",
    views: "18K",
  },
  {
    title: "Special Effects Breakdown",
    thumbnail: "/placeholder.svg?height=169&width=300",
    views: "32K",
  },
  {
    title: "Actor Interview: Getting into Character",
    thumbnail: "/placeholder.svg?height=169&width=300",
    views: "15K",
  },
  {
    title: "Costume Design Process",
    thumbnail: "/placeholder.svg?height=169&width=300",
    views: "21K",
  },
  {
    title: "Storyboard to Screen Comparison",
    thumbnail: "/placeholder.svg?height=169&width=300",
    views: "28K",
  },
  {
    title: "On-Location Filming Challenges",
    thumbnail: "/placeholder.svg?height=169&width=300",
    views: "19K",
  },
  {
    title: "Sound Design: Creating Atmosphere",
    thumbnail: "/placeholder.svg?height=169&width=300",
    views: "22K",
  },
]

