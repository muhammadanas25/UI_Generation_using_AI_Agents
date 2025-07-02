"use client"

import { useState, useEffect } from 'react'
import { Card, CardHeader, CardContent, CardFooter } from '@shadcn/ui/card'
import { Button } from '@shadcn/ui/button'
import { motion } from 'framer-motion'
import { Clock } from '@shadcn/icons'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
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

  const timerVariants = {
    hide: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <Card className="w-full max-w-md p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-3xl shadow-xl">
        <CardHeader className="text-center mb-4">
          <Clock className="mx-auto mb-2 h-12 w-12 text-yellow-300 animate-pulse" />
          <h1 className="text-3xl font-extrabold text-white">Token Launch Countdown</h1>
          <p className="mt-2 text-sm text-gray-200">Prepare for the exciting new token!</p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <motion.div
                key={unit}
                className="flex flex-col items-center p-5 bg-black bg-opacity-30 rounded-xl shadow-lg transition transform hover:scale-105"
                variants={timerVariants}
                initial="hide"
                animate="show"
              >
                <motion.span
                  className="text-4xl font-bold text-white"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {value}
                </motion.span>
                <span className="mt-1 text-sm uppercase text-gray-300">{unit}</span>
              </motion.div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="mt-6 flex justify-center space-x-4">
          <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
            Share
          </Button>
          <Button variant="outline" className="border-gray-300 text-gray-200 hover:bg-gray-800">
            Learn More
          </Button>
        </CardFooter>
        <div className="absolute bottom-5 flex space-x-2">
          <div className="w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
          <div className="w-3 h-3 bg-yellow-300 rounded-full animate-ping delay-200"></div>
          <div className="w-3 h-3 bg-yellow-300 rounded-full animate-ping delay-400"></div>
        </div>
      </Card>
    </div>
  )
}