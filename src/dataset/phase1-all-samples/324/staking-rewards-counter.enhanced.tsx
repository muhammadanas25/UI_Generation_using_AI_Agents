"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Coins, Check, Pause, Play } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

export default function StakingRewardsCounter() {
  const [rewards, setRewards] = useState(0);
  const [isStaking, setIsStaking] = useState(true);
  const [progressValue, setProgressValue] = useState(0);
  const [maxRewards] = useState(100);
  const rewardsPerSecond = 0.01;

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isStaking) {
      interval = setInterval(() => {
        setRewards((prevRewards) => {
          const newRewards = prevRewards + rewardsPerSecond;
          setProgressValue((newRewards / maxRewards) * 100);
          return newRewards > maxRewards ? maxRewards : newRewards;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isStaking, rewardsPerSecond, maxRewards]);

  const formatRewards = (value: number) => value.toFixed(2);

  const handleClaim = () => {
    alert(`Claimed ${formatRewards(rewards)} tokens!`);
    setRewards(0);
    setProgressValue(0);
  };

  const toggleStaking = () => setIsStaking(!isStaking);

  return (
    <Card className="w-full max-w-sm mx-auto shadow-2xl transition-transform transform hover:scale-105">
      <CardHeader className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-t-lg p-4 sm:p-6">
        <CardTitle className="text-2xl sm:text-3xl font-extrabold flex items-center">
          <Coins className="w-6 h-6 sm:w-8 sm:h-8 mr-2 animate-bounce" />
          Staking Rewards
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm">
          Earn and track your rewards in real-time
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center p-4 sm:p-6 bg-gray-50">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40">
          <motion.svg
            className="w-full h-full animate-spin-slow"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#e5e7eb"
              strokeWidth="10"
              fill="none"
              className="opacity-20"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              stroke="#6366f1"
              strokeWidth="10"
              fill="none"
              strokeDasharray={2 * Math.PI * 45}
              strokeDashoffset={
                2 * Math.PI * 45 * ((100 - progressValue) / 100)
              }
              strokeLinecap="round"
              animate={{
                strokeDashoffset:
                  2 * Math.PI * 45 * ((100 - progressValue) / 100),
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </motion.svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <Coins className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 animate-pulse" />
          </div>
        </div>
        <motion.div
          className="mt-4 sm:mt-6 text-4xl sm:text-5xl font-bold text-indigo-600"
          animate={{ number: rewards }}
          transition={{ duration: 1 }}
        >
          {formatRewards(rewards)}
        </motion.div>
        <div className="text-xs sm:text-sm text-gray-500">Tokens Earned</div>
        <Progress value={progressValue} className="w-full mt-4" />
        <div className="flex flex-col sm:flex-row justify-between w-full mt-4 text-xs sm:text-sm text-gray-600">
          <div className="mb-2 sm:mb-0">
            <span className="font-medium">APY:</span> 12.5%
          </div>
          <div>
            <span className="font-medium">Total Staked:</span> 1,000 Tokens
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2 p-4 sm:p-6 bg-gray-100 rounded-b-lg">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={handleClaim}
                disabled={rewards === 0}
                className="w-full flex items-center justify-center space-x-2 transition-colors duration-300 hover:bg-indigo-600"
              >
                <Check className="w-4 h-4" />
                <span>Claim Rewards</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Claim your accumulated rewards</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                onClick={toggleStaking}
                className="w-full flex items-center justify-center space-x-2 transition-colors duration-300 hover:border-indigo-600"
              >
                {isStaking ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
                <span>{isStaking ? "Pause" : "Resume"}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {isStaking
                  ? "Pause staking to stop earning"
                  : "Resume staking to continue earning"}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </Card>
  );
}
