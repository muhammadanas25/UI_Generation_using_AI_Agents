'use client'

import { Progress } from "@/components/ui/progress"
import { Dumbbell, RefreshCw, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"
import { Card, CardHeader, CardBody, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProgressCircleProps {
  progress: number
  size?: 'sm' | 'md' | 'lg'
}

export default function Component({ progress: initialProgress = 0, size = 'md' }: ProgressCircleProps) {
  const [progress, setProgress] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
    const timer = setTimeout(() => setProgress(initialProgress), 500)
    return () => clearTimeout(timer)
  }, [initialProgress])

  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32',
    lg: 'w-40 h-40'
  }

  const handleReset = () => {
    setIsAnimating(true)
    setProgress(0)
  }

  const handleIncrease = () => {
    setIsAnimating(true)
    setProgress(prev => (prev + 10 > 100 ? 100 : prev + 10))
  }

  const handleDecrease = () => {
    setIsAnimating(true)
    setProgress(prev => (prev - 10 < 0 ? 0 : prev - 10))
  }

  return (
    <Card className="max-w-sm mx-auto p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300">
      <CardHeader className="flex justify-center">
        <h2 className="text-2xl font-bold text-white">FitFocus Progress</h2>
      </CardHeader>
      <CardBody className="flex justify-center items-center relative">
        <div className={`relative ${sizeClasses[size]} bg-white rounded-full shadow-inner transform hover:scale-105 transition-transform duration-300`}>
          <Progress
            value={progress}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${isAnimating ? 'animate-spin-slow' : ''} [&>div]:bg-green-400 [&>div]:rounded-full`}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Dumbbell className="w-8 h-8 mb-2 text-green-500 animate-bounce" />
            <span className="font-bold text-green-500 text-lg">{progress}%</span>
          </div>
        </div>
      </CardBody>
      <CardFooter className="flex justify-around">
        <Button variant="ghost" size="sm" onClick={handleDecrease} className="text-white">
          <TrendingUp className="w-4 h-4 mr-1" /> Decrease
        </Button>
        <Button variant="ghost" size="sm" onClick={handleReset} className="text-white">
          <RefreshCw className="w-4 h-4 mr-1" /> Reset
        </Button>
        <Button variant="ghost" size="sm" onClick={handleIncrease} className="text-white">
          <TrendingUp className="w-4 h-4 mr-1" /> Increase
        </Button>
      </CardFooter>
    </Card>
  )
}