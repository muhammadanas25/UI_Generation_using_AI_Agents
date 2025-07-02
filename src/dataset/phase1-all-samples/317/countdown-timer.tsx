"use client"

import { useState, useEffect } from 'react'

export default function Component() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set the date for the token launch (example: 30 days from now)
    const launchDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)

    const timer = setInterval(() => {
      const now = new Date()
      const difference = launchDate.getTime() - now.getTime()

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })

      if (difference < 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary-foreground">
      <div className="text-center p-8 rounded-lg shadow-2xl bg-background/80 backdrop-blur-sm">
        <h1 className="text-4xl font-bold mb-4 text-primary">Token Launch Countdown</h1>
        <p className="text-xl mb-8 text-muted-foreground">Get ready for our exciting new token!</p>
        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center p-4 bg-primary/10 rounded-lg min-w-[120px]">
              <span className="text-5xl font-bold text-primary">{value}</span>
              <span className="text-sm uppercase text-muted-foreground">{unit}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">Don't miss out on this opportunity!</p>
      </div>
    </div>
  )
}