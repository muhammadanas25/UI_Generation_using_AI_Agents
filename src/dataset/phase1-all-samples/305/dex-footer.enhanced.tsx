import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Github,
  Twitter,
  DiscIcon as Discord,
  ExternalLink,
  ArrowUp,
} from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission logic here
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 relative">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="QuickSwap DEX"
                width={32}
                height={32}
                className="w-8 h-8 sm:w-10 sm:h-10 animate-pulse"
              />
              <h3 className="text-lg sm:text-xl font-bold text-white">
                QuickSwap DEX
              </h3>
            </Link>
            <p className="text-sm">
              Decentralized trading, reimagined with unparalleled speed and
              security.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com"
                className="hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://github.com"
                className="hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://discord.com"
                className="hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Discord size={20} />
                <span className="sr-only">Discord</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/swap"
                  className="hover:text-white transition-colors duration-300"
                >
                  Swap
                </Link>
              </li>
              <li>
                <Link
                  href="/pool"
                  className="hover:text-white transition-colors duration-300"
                >
                  Liquidity
                </Link>
              </li>
              <li>
                <Link
                  href="/farm"
                  className="hover:text-white transition-colors duration-300"
                >
                  Yield Farming
                </Link>
              </li>
              <li>
                <Link
                  href="/governance"
                  className="hover:text-white transition-colors duration-300"
                >
                  Governance
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-4">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/docs"
                  className="hover:text-white transition-colors duration-300 flex items-center"
                >
                  Documentation <ExternalLink size={14} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="/whitepaper"
                  className="hover:text-white transition-colors duration-300 flex items-center"
                >
                  Whitepaper <ExternalLink size={14} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="/api"
                  className="hover:text-white transition-colors duration-300 flex items-center"
                >
                  API <ExternalLink size={14} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors duration-300"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-4">
              Newsletter
            </h3>
            <p className="text-sm mb-4">
              Stay updated with our latest features and releases.
            </p>
            <form className="space-y-2" onSubmit={handleSubmit}>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
              />
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 transition-colors duration-300"
              >
                Subscribe
              </Button>
              {submitted && (
                <p className="text-green-400 text-sm">
                  Thank you for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm">
          <p>
            &copy; {new Date().getFullYear()} QuickSwap DEX. All rights
            reserved.
          </p>
          <Link
            href="#top"
            className="mt-4 sm:mt-0 flex items-center hover:text-white transition-colors duration-300"
          >
            Back to Top <ArrowUp size={14} className="ml-1 animate-bounce" />
          </Link>
        </div>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-full fixed bottom-4 right-4 sm:bottom-6 sm:right-6 hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
      >
        <ArrowUp size={18} />
        <span className="sr-only">Back to Top</span>
      </button>
    </footer>
  );
}
