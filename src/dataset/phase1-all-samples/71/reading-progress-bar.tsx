"use client"

import { useEffect, useState } from 'react'

export default function ReadingProgressBar() {
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    const updateReadingProgress = () => {
      const currentProgress = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight) {
        setReadingProgress(Number((currentProgress / scrollHeight).toFixed(2)) * 100)
      }
    }

    window.addEventListener('scroll', updateReadingProgress)
    
    return () => {
      window.removeEventListener('scroll', updateReadingProgress)
    }
  }, [])

  return (
    <div 
      role="progressbar" 
      aria-valuenow={readingProgress} 
      aria-valuemin={0} 
      aria-valuemax={100} 
      className="fixed top-0 left-0 z-50 w-full h-1 bg-gray-200"
    >
      <div 
        style={{width: `${readingProgress}%`}}
        className="h-full bg-black transition-all duration-300 ease-out"
      />
    </div>
  )
}