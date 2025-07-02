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
import { Coins } from "lucide-react";

export default function StakingRewardsCounter() {
  const [rewards, setRewards] = useState(0);
  const [isStaking, setIsStaking] = useState(true);
  const [progressValue, setProgressValue] = useState(0);

  const rewardsPerSecond = 0.01;
  const maxRewards = 100;

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
  }, [isStaking]);

  const formatRewards = (value: number) => value.toFixed(2);

  const handleClaim = () => {
    alert(`Claimed ${formatRewards(rewards)} tokens!`);
    setRewards(0);
    setProgressValue(0);
  };

  const toggleStaking = () => setIsStaking(!isStaking);

  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl font-bold">
          Staking Rewards
        </CardTitle>
        <CardDescription className="text-sm">
          Watch your rewards grow in real-time
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="relative w-32 h-32 sm:w-48 sm:h-48">
          <div className="absolute inset-0 flex items-center justify-center">
            <Coins className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-400" />
          </div>
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              stroke="currentColor"
              strokeWidth="10%"
              fill="transparent"
              className="text-muted stroke-linecap-round"
            />
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              stroke="currentColor"
              strokeWidth="10%"
              fill="transparent"
              strokeDasharray={2 * Math.PI * 45}
              strokeDashoffset={
                2 * Math.PI * 45 * ((100 - progressValue) / 100)
              }
              className="text-primary stroke-linecap-round"
            />
          </svg>
        </div>
        <div className="mt-4 text-2xl sm:text-4xl font-bold">
          {formatRewards(rewards)}
        </div>
        <div className="text-xs sm:text-sm text-muted-foreground">
          Tokens Earned
        </div>
        <Progress value={progressValue} className="w-full mt-4" />
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-between">
        <Button
          className="w-full sm:w-auto"
          onClick={handleClaim}
          disabled={rewards === 0}
        >
          Claim Rewards
        </Button>
        <Button
          className="w-full sm:w-auto"
          variant="outline"
          onClick={toggleStaking}
        >
          {isStaking ? "Pause" : "Resume"}
        </Button>
      </CardFooter>
      <div className="px-4 sm:px-6 py-3 sm:py-4 bg-muted/40 rounded-b-lg">
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <span>APY:</span>
          <span className="font-semibold">12.5%</span>
        </div>
        <div className="flex items-center justify-between text-xs sm:text-sm mt-2">
          <span>Total Staked:</span>
          <span className="font-semibold">1,000 Tokens</span>
        </div>
      </div>
    </Card>
  );
}
