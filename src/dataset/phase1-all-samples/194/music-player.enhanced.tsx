"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Volume2, VolumeX, SkipBack, SkipForward, Play, Pause, Shuffle, Repeat, Heart } from "lucide-react"
import { Card, CardHeader, CardBody, CardFooter } from "@/components/ui/card"
import { Transition } from "@headlessui/react"

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [playlist] = useState([
    {
      title: "Neon Lights",
      artist: "The Electron Band",
      album: "Digital Dreams",
      artwork: "/placeholder.svg?height=400&width=400",
      audioSrc: "/path-to-audio-file1.mp3"
    },
    {
      title: "Synth Wave",
      artist: "Retro Beats",
      album: "Night Drive",
      artwork: "/placeholder2.svg?height=400&width=400",
      audioSrc: "/path-to-audio-file2.mp3"
    },
    {
      title: "Electric Pulse",
      artist: "Future Sounds",
      album: "Urban Echoes",
      artwork: "/placeholder3.svg?height=400&width=400",
      audioSrc: "/path-to-audio-file3.mp3"
    },
  ])
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isShuffle, setIsShuffle] = useState(false)
  const [repeatMode, setRepeatMode] = useState<'off' | 'all' | 'one'>('off')
  const [isFavorite, setIsFavorite] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const currentTrack = playlist[currentTrackIndex]

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('loadedmetadata', () => {
        setDuration(audioRef.current!.duration)
      })
      audioRef.current.addEventListener('timeupdate', () => {
        setCurrentTime(audioRef.current!.currentTime)
      })
      audioRef.current.addEventListener('ended', handleTrackEnd)
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleTrackEnd)
      }
    }
  }, [currentTrackIndex, isShuffle, repeatMode])

  const handleTrackEnd = () => {
    if (repeatMode === 'one') {
      audioRef.current!.currentTime = 0
      audioRef.current!.play()
    } else if (isShuffle) {
      playShuffle()
    } else if (currentTrackIndex < playlist.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1)
    } else if (repeatMode === 'all') {
      setCurrentTrackIndex(0)
    } else {
      setIsPlaying(false)
    }
  }

  const playShuffle = () => {
    const nextIndex = Math.floor(Math.random() * playlist.length)
    setCurrentTrackIndex(nextIndex)
  }

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play()
        setIsPlaying(true)
      } else {
        audioRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

  const handleVolumeChange = (newVolume: number[]) => {
    const volumeValue = newVolume[0]
    setVolume(volumeValue)
    if (audioRef.current) {
      audioRef.current.volume = volumeValue
      setIsMuted(volumeValue === 0)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume
        setIsMuted(false)
      } else {
        audioRef.current.volume = 0
        setIsMuted(true)
      }
    }
  }

  const handleSeek = (newTime: number[]) => {
    const timeValue = newTime[0]
    if (audioRef.current) {
      audioRef.current.currentTime = timeValue
      setCurrentTime(timeValue)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handleNextTrack = () => {
    if (isShuffle) {
      playShuffle()
    } else {
      if (currentTrackIndex < playlist.length - 1) {
        setCurrentTrackIndex(currentTrackIndex + 1)
      } else if (repeatMode === 'all') {
        setCurrentTrackIndex(0)
      }
    }
  }

  const handlePrevTrack = () => {
    if (isShuffle) {
      playShuffle()
    } else {
      if (currentTrackIndex > 0) {
        setCurrentTrackIndex(currentTrackIndex - 1)
      } else if (repeatMode === 'all') {
        setCurrentTrackIndex(playlist.length - 1)
      }
    }
  }

  const toggleShuffle = () => {
    setIsShuffle(!isShuffle)
  }

  const toggleRepeat = () => {
    if (repeatMode === 'off') {
      setRepeatMode('all')
    } else if (repeatMode === 'all') {
      setRepeatMode('one')
    } else {
      setRepeatMode('off')
    }
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <div className="w-full max-w-md mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 shadow-xl rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
      <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
        <CardHeader className="p-4 flex flex-col items-center">
          <img
            src={currentTrack.artwork}
            alt={`${currentTrack.album} cover`}
            className="w-40 h-40 object-cover rounded-full shadow-md mb-4 animate-spin-slow"
          />
          <h2 className="text-3xl font-bold text-white">{currentTrack.title}</h2>
          <p className="text-gray-200">{currentTrack.artist} - {currentTrack.album}</p>
        </CardHeader>
        <CardBody className="p-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-300">{formatTime(currentTime)}</span>
            <Slider
              max={duration}
              value={[currentTime]}
              onValueChange={handleSeek}
              className="w-full mx-4"
              aria-label="Seek time"
            />
            <span className="text-sm text-gray-300">{formatTime(duration)}</span>
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            <Button variant={isShuffle ? "default" : "ghost"} size="icon" onClick={toggleShuffle} aria-label="Shuffle">
              <Shuffle className={`h-5 w-5 ${isShuffle ? 'text-indigo-400' : 'text-gray-300'} transition-colors duration-300`} />
            </Button>
            <Button variant="ghost" size="icon" onClick={handlePrevTrack} aria-label="Previous track" className="transform transition-transform duration-300 hover:scale-110">
              <SkipBack className="h-6 w-6 text-gray-300" />
            </Button>
            <Button onClick={togglePlayPause} variant="default" size="lg" className="h-12 w-12 rounded-full bg-indigo-500 hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-400 transition-colors duration-300" aria-label={isPlaying ? "Pause" : "Play"}>
              <Transition
                show={isPlaying}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Pause className="h-6 w-6 text-white" />
              </Transition>
              <Transition
                show={!isPlaying}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Play className="h-6 w-6 text-white" />
              </Transition>
            </Button>
            <Button variant="ghost" size="icon" onClick={handleNextTrack} aria-label="Next track" className="transform transition-transform duration-300 hover:scale-110">
              <SkipForward className="h-6 w-6 text-gray-300" />
            </Button>
            <Button variant={repeatMode !== 'off' ? "default" : "ghost"} size="icon" onClick={toggleRepeat} aria-label="Repeat">
              <Repeat className={`h-5 w-5 ${repeatMode !== 'off' ? 'text-indigo-400' : 'text-gray-300'} transition-colors duration-300`} />
            </Button>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleMute} aria-label={isMuted ? "Unmute" : "Mute"}>
              {isMuted ? <VolumeX className="h-6 w-6 text-gray-300" /> : <Volume2 className="h-6 w-6 text-gray-300" />}
            </Button>
            <Slider
              max={1}
              step={0.01}
              value={[isMuted ? 0 : volume]}
              onValueChange={handleVolumeChange}
              className="w-full mx-4"
              aria-label="Adjust volume"
            />
            <Button variant="ghost" size="icon" onClick={toggleFavorite} aria-label="Favorite">
              <Heart className={`h-6 w-6 ${isFavorite ? 'text-red-500' : 'text-gray-300'} transition-colors duration-300`} />
            </Button>
          </div>
        </CardBody>
        <CardFooter className="p-4">
          <ul className="space-y-2">
            {playlist.map((track, index) => (
              <li key={index} className={`flex items-center p-2 rounded-lg cursor-pointer hover:bg-indigo-500 ${index === currentTrackIndex ? 'bg-indigo-700' : 'bg-transparent'}`} onClick={() => setCurrentTrackIndex(index)}>
                <img src={track.artwork} alt={`${track.album} cover`} className="w-10 h-10 object-cover rounded mr-4" />
                <div>
                  <p className="text-white">{track.title}</p>
                  <p className="text-gray-300 text-sm">{track.artist}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardFooter>
      </Card>
      <audio ref={audioRef} src={currentTrack.audioSrc} />
    </div>
}