import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"

export default function Component() {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/trendsetter" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/trendsetter" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/trendsetter" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/trendsetter" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/trendsetter" },
  ]

  return (
    <section className="bg-gradient-to-r from-purple-500 to-pink-500 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Connect with TrendSetter</h2>
        <div className="flex justify-center items-center space-x-4 md:space-x-6">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-yellow-300 transition-colors duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{link.name}</span>
              <link.icon className="w-8 h-8 md:w-10 md:h-10" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}