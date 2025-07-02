"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Wallet, Sun, Moon, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-background shadow-md fixed top-0 left-0 right-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img src="/logo.svg" alt="DeFi Platform" className="h-8 w-8 mr-2" />
              <span className="text-2xl font-bold text-primary transition-transform hover:scale-105">DeFi Platform</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-primary-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-primary-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors">
                  Staking Options <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-gray-200 dark:border-gray-700">
                <DropdownMenuItem>
                  <Link href="/staking/ethereum">Ethereum Staking</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/staking/polkadot">Polkadot Staking</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/staking/cardano">Cardano Staking</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" className="text-primary-foreground hover:text-primary flex items-center transition-colors">
              <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
            </Button>
            <Button variant="ghost" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-gray-200 dark:border-gray-700">
                <DropdownMenuItem>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/logout">Logout</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-primary-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors">
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-primary-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-primary-foreground hover:text-primary w-full text-left px-3 py-2 rounded-md text-base font-medium flex justify-between items-center transition-colors">
                  Staking Options <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-gray-200 dark:border-gray-700">
                <DropdownMenuItem>
                  <Link href="/staking/ethereum">Ethereum Staking</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/staking/polkadot">Polkadot Staking</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/staking/cardano">Cardano Staking</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" className="text-primary-foreground hover:text-primary w-full justify-start flex items-center transition-colors">
              <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <User className="mr-2 h-5 w-5" /> Account
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-gray-200 dark:border-gray-700">
                <DropdownMenuItem>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/logout">Logout</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      )}
    </nav>
  )
}