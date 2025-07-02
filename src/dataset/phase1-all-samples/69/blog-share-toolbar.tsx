"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Facebook, Linkedin, Link, Twitter } from 'lucide-react'

export default function Component({ title = "Exciting Startup Story", url = "https://startupstories.com/exciting-startup-story" }) {
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

  const copyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-white rounded-lg shadow-md max-w-sm mx-auto sm:max-w-md md:max-w-lg">
      <h2 className="text-lg font-semibold text-center">Share this story:</h2>
      <div className="grid grid-cols-2 gap-4 w-full sm:flex sm:justify-center sm:space-x-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                className="w-full sm:w-auto py-6 sm:py-2"
                onClick={shareToTwitter}
                aria-label="Share on Twitter"
              >
                <Twitter className="h-5 w-5 sm:h-4 sm:w-4 mr-2" />
                <span className="sm:hidden">Twitter</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Share on Twitter</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                className="w-full sm:w-auto py-6 sm:py-2"
                onClick={shareToFacebook}
                aria-label="Share on Facebook"
              >
                <Facebook className="h-5 w-5 sm:h-4 sm:w-4 mr-2" />
                <span className="sm:hidden">Facebook</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Share on Facebook</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                className="w-full sm:w-auto py-6 sm:py-2"
                onClick={shareToLinkedIn}
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="h-5 w-5 sm:h-4 sm:w-4 mr-2" />
                <span className="sm:hidden">LinkedIn</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Share on LinkedIn</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                className="w-full sm:w-auto py-6 sm:py-2"
                onClick={copyLink}
                aria-label="Copy link"
              >
                <Link className="h-5 w-5 sm:h-4 sm:w-4 mr-2" />
                <span className="sm:hidden">Copy Link</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{copied ? "Copied!" : "Copy link"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}

