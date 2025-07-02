import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

export default function Component() {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/trendsetter" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/trendsetter" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/trendsetter" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/trendsetter" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/trendsetter" },
  ]

  return (
    <TooltipProvider>
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white bg-opacity-20 rounded-3xl shadow-lg backdrop-filter backdrop-blur-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Connect with TrendSetter</h2>
            <div className="flex flex-wrap justify-center items-center space-x-4 md:space-x-6 mb-6">
              {socialLinks.map((link) => (
                <Tooltip key={link.name}>
                  <TooltipTrigger asChild>
                    <Link
                      href={link.href}
                      className="text-white hover:text-yellow-300 transition-transform transform hover:scale-110 duration-300 ease-in-out"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <link.icon className="w-10 h-10 md:w-12 md:h-12" aria-hidden="true" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-800 text-white text-sm rounded-md p-2">
                    {link.name}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Subscribe to our newsletter"
                className="w-full max-w-md px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-300 bg-white bg-opacity-80 text-gray-800 transition-colors duration-300"
              />
              <button className="mt-4 px-6 py-2 bg-yellow-400 text-white font-semibold rounded-full hover:bg-yellow-500 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  )
}