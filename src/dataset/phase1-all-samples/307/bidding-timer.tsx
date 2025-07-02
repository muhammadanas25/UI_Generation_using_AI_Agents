"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Custom hook for countdown timer
function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

function calculateTimeLeft(targetDate: Date) {
  const difference = +targetDate - +new Date();
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
}

interface NFT {
  id: number;
  name: string;
  endTime: Date;
  highestBid: number;
}

const nfts: NFT[] = [
  {
    id: 1,
    name: "Cosmic Harmony #1",
    endTime: new Date("2024-12-31T23:59:59"),
    highestBid: 0.5,
  },
  {
    id: 2,
    name: "Digital Dreams #42",
    endTime: new Date("2024-11-15T20:00:00"),
    highestBid: 1.2,
  },
  {
    id: 3,
    name: "Neon Nights #7",
    endTime: new Date("2024-10-01T18:30:00"),
    highestBid: 0.8,
  },
];

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
        AuctionX - Live Bidding
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {nfts.map((nft) => (
          <NFTCard key={nft.id} nft={nft} />
        ))}
      </div>
    </div>
  );
}

function NFTCard({ nft }: { nft: NFT }) {
  const timeLeft = useCountdown(nft.endTime);

  return (
    <Card className="w-full">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <span className="text-lg sm:text-xl">{nft.name}</span>
          <Badge variant="secondary" className="text-sm sm:text-base">
            {nft.highestBid} ETH
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="text-center">
          <p className="text-xs sm:text-sm text-muted-foreground mb-2">
            Auction ends in:
          </p>
          <div className="grid grid-cols-4 gap-1 sm:gap-2">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center">
                <span className="text-lg sm:text-2xl font-bold">{value}</span>
                <span className="text-[10px] sm:text-xs text-muted-foreground capitalize">
                  {unit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
