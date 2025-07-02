"use client"

import React from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface WellnessTipProps {
  keyword: string
  tip: string
  children: React.ReactNode
}

const WellnessTip: React.FC<WellnessTipProps> = ({ keyword, tip, children }) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <span className="font-semibold text-primary cursor-help underline decoration-dotted underline-offset-2">
            {children}
          </span>
        </TooltipTrigger>
        <TooltipContent className="max-w-[250px] sm:max-w-sm" side="top">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-primary">{keyword}</h4>
            <p className="text-xs sm:text-sm text-muted-foreground">{tip}</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

const BlogPost: React.FC = () => {
  return (
    <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto px-4 sm:px-0">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">The Importance of a Balanced Diet</h1>
      <p className="text-base sm:text-lg">
        Maintaining a{" "}
        <WellnessTip
          keyword="balanced diet"
          tip="A balanced diet includes a variety of foods from all food groups to ensure you get all the nutrients your body needs."
        >
          balanced diet
        </WellnessTip>{" "}
        is crucial for overall health and wellbeing. It's important to include a variety of{" "}
        <WellnessTip
          keyword="fruits and vegetables"
          tip="Aim for at least 5 servings of fruits and vegetables per day to get essential vitamins, minerals, and fiber."
        >
          fruits and vegetables
        </WellnessTip>{" "}
        in your daily meals.
      </p>
      <p className="text-base sm:text-lg">
        Regular{" "}
        <WellnessTip
          keyword="exercise"
          tip="Aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity aerobic activity per week."
        >
          exercise
        </WellnessTip>{" "}
        is also essential for maintaining good health. It helps improve cardiovascular health, strengthens muscles and bones,
        and can even boost your{" "}
        <WellnessTip
          keyword="mental health"
          tip="Exercise releases endorphins, which can help reduce stress, anxiety, and depression."
        >
          mental health
        </WellnessTip>
        .
      </p>
      <p className="text-base sm:text-lg">
        Don't forget about the importance of{" "}
        <WellnessTip
          keyword="hydration"
          tip="Aim to drink at least 8 glasses (64 ounces) of water per day. Your exact needs may vary based on climate, activity level, and overall health."
        >
          hydration
        </WellnessTip>
        . Drinking enough water throughout the day helps maintain bodily functions and can improve energy levels.
      </p>
    </article>
  )
}

export default function Component() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">LiveWell Blog</h1>
      <BlogPost />
    </div>
  )
}

