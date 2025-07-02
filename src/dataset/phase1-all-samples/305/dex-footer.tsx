import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Github,
  Twitter,
  DiscIcon as Discord,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">QuickSwap DEX</h3>
            <p className="text-sm">Decentralized trading, reimagined.</p>
            <div className="flex space-x-4">
              <Link href="https://twitter.com" className="hover:text-white">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://github.com" className="hover:text-white">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://discord.com" className="hover:text-white">
                <Discord size={20} />
                <span className="sr-only">Discord</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/swap" className="hover:text-white">
                  Swap
                </Link>
              </li>
              <li>
                <Link href="/pool" className="hover:text-white">
                  Liquidity
                </Link>
              </li>
              <li>
                <Link href="/farm" className="hover:text-white">
                  Yield Farming
                </Link>
              </li>
              <li>
                <Link href="/governance" className="hover:text-white">
                  Governance
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/docs"
                  className="hover:text-white flex items-center"
                >
                  Documentation <ExternalLink size={14} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="/whitepaper"
                  className="hover:text-white flex items-center"
                >
                  Whitepaper <ExternalLink size={14} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="/api"
                  className="hover:text-white flex items-center"
                >
                  API <ExternalLink size={14} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Newsletter
            </h3>
            <p className="text-sm mb-4">
              Stay updated with our latest features and releases.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 w-full"
              />
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-xs sm:text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} QuickSwap DEX. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
