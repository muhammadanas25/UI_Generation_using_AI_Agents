'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Loader2, Mail, Lock, Wallet } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Image from 'next/image'

export default function Component() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleTraditionalLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    // Add your actual login logic here
    setIsLoading(false)
    console.log('Traditional login with:', email, password)
  }

  const handleWalletLogin = async () => {
    setIsLoading(true)
    setError('')
    try {
      if (typeof window.ethereum !== 'undefined') {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        // Get the connected wallet address
        const accounts = await window.ethereum.request({ method: 'eth_accounts' })
        console.log('Wallet connected:', accounts[0])
        // Add your wallet authentication logic here
      } else {
        setError('Please install MetaMask to use this feature')
      }
    } catch (err) {
      setError('Failed to connect wallet. Please try again.')
      console.error(err)
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-500 to-purple-600 p-4">
      <Card className="w-full max-w-md bg-white dark:bg-gray-800 shadow-2xl rounded-xl transition-transform transform hover:scale-105 duration-300">
        <CardHeader className="text-center">
          <Image src="/logo.png" alt="Logo" width={60} height={60} className="mx-auto mb-4" />
          <CardTitle className="text-3xl font-bold text-gray-800 dark:text-white">Welcome Back</CardTitle>
          <CardDescription className="text-sm text-gray-500 dark:text-gray-400">Login using your email or connect your wallet</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleTraditionalLogin} className="space-y-4">
            <div className="relative">
              <Label htmlFor="email" className="sr-only">Email</Label>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-10 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div className="relative">
              <Label htmlFor="password" className="sr-only">Password</Label>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                id="password"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pl-10 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
              </label>
              <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
            <Button type="submit" className="w-full flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 transition-colors" disabled={isLoading}>
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              <span>Login with Email</span>
            </Button>
          </form>
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300 dark:border-gray-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white dark:bg-gray-800 px-2 text-gray-500 dark:text-gray-400">Or</span>
            </div>
          </div>
          <Button onClick={handleWalletLogin} variant="outline" className="w-full flex items-center justify-center space-x-2 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors" disabled={isLoading}>
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Wallet className="h-5 w-5 text-indigo-600" />}
            <span>Connect Wallet</span>
          </Button>
        </CardContent>
        <CardFooter className="flex justify-center space-x-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">Don't have an account?</span>
          <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">Sign Up</a>
        </CardFooter>
        {error && (
          <div className="mt-4 px-4">
            <Alert variant="destructive" className="flex items-center space-x-2">
              <AlertCircle className="h-4 w-4" />
              <div>
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </div>
            </Alert>
          </div>
        )}
      </Card>
    </div>
  )
}