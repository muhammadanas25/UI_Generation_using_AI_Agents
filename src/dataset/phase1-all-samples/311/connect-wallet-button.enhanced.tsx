import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Wallet, X } from "lucide-react"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"

export default function ConnectWallet() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 p-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="relative overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center focus:outline-none"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <span className="relative z-10 flex items-center">
              <Wallet
                className={`mr-2 h-5 w-5 transition-transform duration-300 ${
                  isHovering ? "rotate-12" : "rotate-0"
                }`}
              />
              Connect Wallet
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-500 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100" />
            <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse opacity-0 hover:opacity-20 transition-opacity duration-300 ease-in-out"></span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <DialogHeader className="flex justify-between items-center mb-4">
            <div>
              <DialogTitle className="text-xl font-bold text-gray-900 dark:text-white">Connect Your Wallet</DialogTitle>
              <DialogDescription className="text-gray-600 dark:text-gray-300">
                Choose a wallet provider to connect your account.
              </DialogDescription>
            </div>
            <DialogClose asChild>
              <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none">
                <X className="h-5 w-5" />
              </button>
            </DialogClose>
          </DialogHeader>
          <div className="space-y-4">
            <Button variant="outline" className="w-full flex items-center justify-center p-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <Wallet className="mr-2 h-5 w-5 text-indigo-600" />
              MetaMask
            </Button>
            <Button variant="outline" className="w-full flex items-center justify-center p-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <Wallet className="mr-2 h-5 w-5 text-indigo-600" />
              WalletConnect
            </Button>
            <Button variant="outline" className="w-full flex items-center justify-center p-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <Wallet className="mr-2 h-5 w-5 text-indigo-600" />
              Coinbase Wallet
            </Button>
            <Button variant="ghost" className="w-full flex items-center justify-center p-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <Wallet className="mr-2 h-5 w-5 text-indigo-600" />
              Fortmatic
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}