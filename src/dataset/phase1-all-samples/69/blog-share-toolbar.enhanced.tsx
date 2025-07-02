"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Facebook, Linkedin, Link, Twitter, PinIcon as Pinterest, RssIcon as Reddit, MailIcon as Email } from 'lucide-react'
import { motion } from "framer-motion"

export default function ShareToolbar({ title = "Exciting Startup Story", url = "https://startupstories.com/exciting-startup-story" }) {
  const [copied, setCopied] = useState(false)

  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')
  }

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
  }

  const shareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank')
  }

  const shareToPinterest = () => {
    window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=&description=${encodeURIComponent(title)}`, '_blank')
  }

  const shareToReddit = () => {
    window.open(`https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank')
  }

  const shareToEmail = () => {
    window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`
  }

  const copyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const shareButtons = [
    { label: "Twitter", icon: Twitter, onClick: shareToTwitter, color: "hover:text-blue-500" },
    { label: "Facebook", icon: Facebook, onClick: shareToFacebook, color: "hover:text-blue-700" },
    { label: "LinkedIn", icon: Linkedin, onClick: shareToLinkedIn, color: "hover:text-blue-600" },
    { label: "Pinterest", icon: Pinterest, onClick: shareToPinterest, color: "hover:text-red-600" },
    { label: "Reddit", icon: Reddit, onClick: shareToReddit, color: "hover:text-orange-500" },
    { label: "Email", icon: Email, onClick: shareToEmail, color: "hover:text-green-600" },
  ]

  return (
    <motion.div
      className="w-full max-w-sm sm:max-w-md mx-auto p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center space-y-4 sm:space-y-6">
        <div className="text-center sm:text-left w-full">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200">Share this story:</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Help us spread the word!</p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 w-full">
          {shareButtons.map((button) => (
            <TooltipProvider key={button.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={button.onClick}
                    aria-label={`Share on ${button.label}`}
                    className={`w-full h-12 sm:h-10 transition-transform transform hover:scale-110 ${button.color}`}
                  >
                    <button.icon className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share on {button.label}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                onClick={copyLink}
                aria-label="Copy link"
                className="w-full h-12 sm:h-10 transition-transform transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Link className={`h-5 w-5 ${copied ? "text-green-500" : "text-gray-700 dark:text-gray-300"}`} />
                <span>{copied ? "Link Copied!" : "Copy Link"}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{copied ? "Link Copied!" : "Copy Link"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </motion.div>
  )
}

