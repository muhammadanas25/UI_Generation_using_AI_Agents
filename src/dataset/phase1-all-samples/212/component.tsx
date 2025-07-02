import { Menu } from 'lucide-react';
import { Gamepad2 } from 'lucide-react';
import { Coins } from 'lucide-react';
import { Users } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function Home() {
  return (
    <div className="bg-background">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Gamepad2 className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl sm:text-2xl font-bold text-primary">PlayMint</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#comparison">
            Comparison
          </Link>
        </nav>
        <Button className="md:hidden" variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </header>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary to-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Play, Earn, and Thrive in the PlayMint Universe
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 text-sm sm:text-base md:text-xl">
                Join the revolution of GameFi. Earn real tokens while enjoying your favorite games on PlayMint.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-white text-primary hover:bg-gray-100">Get Started</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl text-center mb-8">
            Why Choose PlayMint?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Coins className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">Earn Real Tokens</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Convert your gaming skills into valuable tokens you can trade or cash out.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">Vibrant Community</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Join thousands of players in a thriving ecosystem of games and challenges.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">Growing Ecosystem</h3>
              <p className="text-sm sm:text-base text-muted-foreground">New games and features added regularly to keep the experience fresh and exciting.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl text-center mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center">1</div>
                <p className="text-base sm:text-lg">Sign up for a PlayMint account</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center">2</div>
                <p className="text-base sm:text-lg">Choose from our selection of play-to-earn games</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center">3</div>
                <p className="text-base sm:text-lg">Play games and complete challenges to earn tokens</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center">4</div>
                <p className="text-base sm:text-lg">Trade or cash out your earned tokens</p>
              </div>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-lg mt-8 md:mt-0">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Start Earning Now!</h3>
              <form className="space-y-4">
                <Input placeholder="Email" type="email" />
                <Input placeholder="Password" type="password" />
                <Button className="w-full">Create Account</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section id="comparison" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl text-center mb-8">
            PlayMint vs Competitors
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-2 text-left">Feature</th>
                  <th className="border p-2 text-center">PlayMint</th>
                  <th className="border p-2 text-center">Axie Infinity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Variety of Games</td>
                  <td className="border p-2 text-center"><CheckCircle className="inline h-5 w-5 text-green-500" /></td>
                  <td className="border p-2 text-center"><CheckCircle className="inline h-5 w-5 text-green-500" /></td>
                </tr>
                <tr>
                  <td className="border p-2">Low Entry Barrier</td>
                  <td className="border p-2 text-center"><CheckCircle className="inline h-5 w-5 text-green-500" /></td>
                  <td className="border p-2 text-center">-</td>
                </tr>
                <tr>
                  <td className="border p-2">Multiple Token Support</td>
                  <td className="border p-2 text-center"><CheckCircle className="inline h-5 w-5 text-green-500" /></td>
                  <td className="border p-2 text-center">-</td>
                </tr>
                <tr>
                  <td className="border p-2">Regular New Content</td>
                  <td className="border p-2 text-center"><CheckCircle className="inline h-5 w-5 text-green-500" /></td>
                  <td className="border p-2 text-center"><CheckCircle className="inline h-5 w-5 text-green-500" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl">
            Ready to Play and Earn?
          </h2>
          <p className="mx-auto max-w-[600px] text-primary-foreground/90 text-sm sm:text-base md:text-lg mt-4 mb-8">
            Join thousands of players already earning tokens on PlayMint. Start your journey today!
          </p>
          <Button className="bg-background text-primary hover:bg-background/90">Get Started Now</Button>
        </div>
      </section>
      <footer className="flex flex-col sm:flex-row py-6 w-full shrink-0 items-center justify-between px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground mb-4 sm:mb-0">© 2024 PlayMint. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

