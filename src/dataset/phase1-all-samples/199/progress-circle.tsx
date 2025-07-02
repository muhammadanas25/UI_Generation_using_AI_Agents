'use client'

import { Progress } from "@/components/ui/progress"
import { Dumbbell } from "lucide-react"
import { useEffect, useState } from "react"

interface ProgressCircleProps {
  progress: number
  size?: 'sm' | 'md' | 'lg'
}

export default function Component({ progress: initialProgress = 0, size = 'md' }: ProgressCircleProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(initialProgress), 100)
    return () => clearTimeout(timer)
  }, [initialProgress])

  const sizeClasses = {
    sm: 'w-24 h-24 text-lg',
    md: 'w-32 h-32 text-xl',
    lg: 'w-40 h-40 text-2xl'
  }

  return (
    <div className={`relative ${sizeClasses[size]} bg-secondary rounded-full`}>
      <Progress
        value={progress}
        className="absolute inset-0 [&>div]:bg-primary [&>div]:rounded-full"
      />
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <Dumbbell className="w-6 h-6 mb-1 text-primary" />
        <span className="font-bold text-primary">{progress}%</span>
      </div>
    </div>
  )
}