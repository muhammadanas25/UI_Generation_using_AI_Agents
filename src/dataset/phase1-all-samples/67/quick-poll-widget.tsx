"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Component() {
  const [votes, setVotes] = useState({
    "Strength Training": 0,
    "Cardio": 0,
    "Yoga": 0,
    "HIIT": 0
  })
  const [userVoted, setUserVoted] = useState(false)
  const [totalVotes, setTotalVotes] = useState(0)

  const handleVote = (option: string) => {
    if (!userVoted) {
      setVotes(prev => ({ ...prev, [option]: prev[option] + 1 }))
      setUserVoted(true)
      setTotalVotes(prev => prev + 1)
    }
  }

  useEffect(() => {
    // Simulate live updates
    const interval = setInterval(() => {
      const randomOption = Object.keys(votes)[Math.floor(Math.random() * 4)]
      setVotes(prev => ({ ...prev, [randomOption]: prev[randomOption] + 1 }))
      setTotalVotes(prev => prev + 1)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="w-full max-w-[95%] sm:max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl font-bold text-center">FitFocus Quick Poll</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center mb-4 text-sm sm:text-base">What's your favorite type of workout?</p>
        <div className="space-y-3 sm:space-y-4">
          {Object.entries(votes).map(([option, voteCount]) => (
            <div key={option} className="space-y-1 sm:space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <Button
                  variant={userVoted ? "ghost" : "outline"}
                  className="w-full justify-start text-sm sm:text-base py-1 px-2 sm:py-2 sm:px-4"
                  onClick={() => handleVote(option)}
                  disabled={userVoted}
                >
                  {option}
                </Button>
                <span className="text-xs sm:text-sm font-medium mt-1 sm:mt-0 sm:ml-2">
                  {((voteCount / totalVotes) * 100).toFixed(1)}%
                </span>
              </div>
              <Progress value={(voteCount / totalVotes) * 100} className="h-1 sm:h-2" />
            </div>
          ))}
        </div>
        <p className="text-center mt-4 text-xs sm:text-sm text-muted-foreground">
          Total votes: {totalVotes}
        </p>
      </CardContent>
    </Card>
  )
}

