"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckIcon, FireIcon, HeartIcon, UserIcon } from "lucide-react"
import Image from "next/image"

export default function Component() {
  const [votes, setVotes] = useState({
    "Strength Training": 0,
    "Cardio": 0,
    "Yoga": 0,
    "HIIT": 0
  })
  const [userVoted, setUserVoted] = useState(false)
  const [totalVotes, setTotalVotes] = useState(0)

  const workoutOptions = [
    { name: "Strength Training", icon: <FireIcon className="w-6 h-6 text-red-500" /> },
    { name: "Cardio", icon: <UserIcon className="w-6 h-6 text-blue-500" /> },
    { name: "Yoga", icon: <HeartIcon className="w-6 h-6 text-green-500" /> },
    { name: "HIIT", icon: <CheckIcon className="w-6 h-6 text-yellow-500" /> },
  ]

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
  }, [votes])

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg animate-fadeIn">
        <CardHeader className="text-center">
          <Image src="/fitfocus-logo.png" alt="FitFocus Logo" width={100} height={100} className="mx-auto mb-4" />
          <CardTitle className="text-3xl font-bold text-indigo-600">FitFocus Quick Poll</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-6 text-gray-700">What's your favorite type of workout?</p>
          <div className="space-y-4">
            {workoutOptions.map(({ name, icon }) => {
              const voteCount = votes[name]
              const percentage = totalVotes > 0 ? ((voteCount / totalVotes) * 100).toFixed(1) : "0.0"
              return (
                <div key={name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Button
                      variant={userVoted ? "ghost" : "outline"}
                      className={`flex items-center w-full justify-start transition-transform transform hover:scale-105 ${
                        userVoted ? "cursor-not-allowed" : ""
                      }`}
                      onClick={() => handleVote(name)}
                      disabled={userVoted}
                    >
                      {icon}
                      <span className="ml-2">{name}</span>
                    </Button>
                    <span className="text-sm font-medium text-gray-600">{percentage}%</span>
                  </div>
                  <Progress
                    value={parseFloat(percentage)}
                    className="h-3 rounded-full transition-all duration-500 ease-out"
                  />
                </div>
              )
            })}
          </div>
          <p className="text-center mt-6 text-sm text-gray-500">
            Total votes: {totalVotes}
          </p>
          {userVoted && (
            <p className="text-center mt-2 text-green-600 text-sm">
              Thank you for voting!
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}