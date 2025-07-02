"use client"

import { useEffect, useState } from 'react'
import { Tooltip } from '@shadcn/ui'

export default function ReadingProgressBar() {
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    const updateReadingProgress = () => {
      const currentProgress = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight) {
        setReadingProgress(Math.min((currentProgress / scrollHeight) * 100, 100))
      }
    }

    window.addEventListener('scroll', updateReadingProgress)
    
    return () => {
      window.removeEventListener('scroll', updateReadingProgress)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-gray-200 h-4 shadow-md">
      <div className="relative w-full h-full">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
        <Tooltip content={`${Math.floor(readingProgress)}%`} delayDuration={200}>
          <div 
            className="absolute top-1/2 w-5 h-5 bg-white border-2 border-blue-500 rounded-full transform -translate-y-1/2 shadow-lg transition-transform duration-300"
            style={{ left: `${readingProgress}%` }}
          />
        </Tooltip>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-gray-700">
          {Math.floor(readingProgress)}%
        </div>
      </div>
    </div>
  )
}