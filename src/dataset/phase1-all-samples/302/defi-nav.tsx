"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-background shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary">DeFi Platform</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-primary-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-primary-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                    Staking Options <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
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
              <Button variant="outline" className="text-primary-foreground hover:text-primary">
                <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-primary-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-primary-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-primary-foreground hover:text-primary w-full text-left px-3 py-2 rounded-md text-base font-medium">
                  Staking Options <ChevronDown className="float-right mt-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
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
            <Button variant="outline" className="text-primary-foreground hover:text-primary w-full justify-start">
              <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}