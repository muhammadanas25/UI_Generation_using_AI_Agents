"use client"

import React from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Apple, Carrot, Dumbbell, Heart, Droplet, Activity } from "lucide-react"

interface WellnessTipProps {
  keyword: string
  tip: string
  icon: React.ReactNode
  children: React.ReactNode
}

const WellnessTip: React.FC<WellnessTipProps> = ({ keyword, tip, icon, children }) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <span className="font-semibold text-primary cursor-help underline decoration-dotted underline-offset-2 hover:text-secondary transition-colors duration-200">
            {children}
          </span>
        </TooltipTrigger>
        <TooltipContent className="max-w-sm p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col gap-2 animate-fadeIn">
          <div className="flex items-center gap-2">
            {icon}
            <h4 className="font-semibold text-primary dark:text-secondary">{keyword}</h4>
          </div>
          <p className="text-sm text-muted-foreground dark:text-gray-400">{tip}</p>
          <button className="mt-2 self-end px-3 py-1 bg-primary text-white rounded hover:bg-secondary transition-colors duration-200">
            Learn More
          </button>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

const BlogPost: React.FC = () => {
  return (
    <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
      <h1>The Importance of a Balanced Diet</h1>
      <p>
        Maintaining a{" "}
        <WellnessTip
          keyword="Balanced Diet"
          tip="A balanced diet includes a variety of foods from all food groups to ensure you get all the nutrients your body needs."
          icon={<Carrot className="w-5 h-5 text-orange-500" />}
        >
          balanced diet
        </WellnessTip>{" "}
        is crucial for overall health and wellbeing. It's important to include a variety of{" "}
        <WellnessTip
          keyword="Fruits and Vegetables"
          tip="Aim for at least 5 servings of fruits and vegetables per day to get essential vitamins, minerals, and fiber."
          icon={<Apple className="w-5 h-5 text-green-500" />}
        >
          fruits and vegetables
        </WellnessTip>{" "}
        in your daily meals.
      </p>
      <p>
        Regular{" "}
        <WellnessTip
          keyword="Exercise"
          tip="Aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity aerobic activity per week."
          icon={<Dumbbell className="w-5 h-5 text-blue-500" />}
        >
          exercise
        </WellnessTip>{" "}
        is also essential for maintaining good health. It helps improve cardiovascular health, strengthens muscles and bones,
        and can even boost your{" "}
        <WellnessTip
          keyword="Mental Health"
          tip="Exercise releases endorphins, which can help reduce stress, anxiety, and depression."
          icon={<Heart className="w-5 h-5 text-red-500" />}
        >
          mental health
        </WellnessTip>
        .
      </p>
      <p>
        Don't forget about the importance of{" "}
        <WellnessTip
          keyword="Hydration"
          tip="Aim to drink at least 8 glasses (64 ounces) of water per day. Your exact needs may vary based on climate, activity level, and overall health."
          icon={<Droplet className="w-5 h-5 text-blue-300" />}
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
      <header className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-primary">LiveWell Blog</h1>
        <p className="text-center text-muted-foreground">
          Your daily dose of health and wellness tips
        </p>
      </header>
      <BlogPost />
      <footer className="mt-12 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} LiveWell. All rights reserved.
      </footer>
    </div>
  )
}

Tailwind CSS animations (add to global CSS or relevant file):

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}