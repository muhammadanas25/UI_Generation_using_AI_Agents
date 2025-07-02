import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, Share2, MoreHorizontal } from 'lucide-react'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(100)

  const togglePlay = () => setIsPlaying(!isPlaying)

  return (
    <div className="w-full max-w-sm sm:max-w-md mx-auto bg-gradient-to-tr from-indigo-500 to-purple-600 shadow-2xl rounded-2xl sm:rounded-3xl overflow-hidden transform transition-transform hover:scale-105">
      <div className="p-4 sm:p-6">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <Avatar className="w-16 h-16 sm:w-24 sm:h-24">
            <AvatarImage src="/placeholder.svg" alt="Album cover" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-white">Song Title</h2>
            <p className="text-sm sm:text-base text-gray-300">Artist Name</p>
          </div>
        </div>
        <div className="mt-4 sm:mt-6">
          <Slider
            className="mt-2 transition duration-500 ease-in-out"
            value={[currentTime]}
            max={100}
            step={1}
            onValueChange={(value) => setCurrentTime(value[0])}
          />
          <div className="flex justify-between text-xs text-gray-300 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(100)}</span>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4 sm:space-x-6 mt-4 sm:mt-6">
          <Button variant="ghost" size="icon" className="text-white hover:text-indigo-200 transition-colors">
            <SkipBack className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button
            variant="default"
            size="lg"
            className="bg-white text-indigo-500 rounded-full hover:bg-indigo-100 focus:outline-none transition-colors"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause className="h-5 w-5 sm:h-6 sm:w-6" /> : <Play className="h-5 w-5 sm:h-6 sm:w-6" />}
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-indigo-200 transition-colors">
            <SkipForward className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-3 mt-4 sm:mt-6">
          <Volume2 className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300" />
          <Slider
            className="w-full transition duration-500 ease-in-out"
            value={[volume]}
            max={100}
            step={1}
            onValueChange={(value) => setVolume(value[0])}
          />
        </div>
        <div className="flex justify-between items-center mt-4 sm:mt-6">
          <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-300 transition-colors">
            <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:text-indigo-200 transition-colors">
            <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:text-indigo-200 transition-colors">
            <MoreHorizontal className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </div>
      <div className="bg-gray-800 p-3 sm:p-4">
        <Button className="w-full bg-indigo-500 hover:bg-indigo-400 text-white transition-colors text-sm sm:text-base" variant="default">
          Tip Artist 5 TuneX Tokens
        </Button>
      </div>
    </div>
  )
}

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}

