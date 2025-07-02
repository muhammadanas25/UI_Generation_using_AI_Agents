"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

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
  image: string;
  endTime: Date;
  highestBid: number;
}

const nfts: NFT[] = [
  {
    id: 1,
    name: "Cosmic Harmony #1",
    image: "/images/cosmic-harmony-1.jpg",
    endTime: new Date("2024-12-31T23:59:59"),
    highestBid: 0.5,
  },
  {
    id: 2,
    name: "Digital Dreams #42",
    image: "/images/digital-dreams-42.jpg",
    endTime: new Date("2024-11-15T20:00:00"),
    highestBid: 1.2,
  },
  {
    id: 3,
    name: "Neon Nights #7",
    image: "/images/neon-nights-7.jpg",
    endTime: new Date("2024-10-01T18:30:00"),
    highestBid: 0.8,
  },
];

export default function Component() {
  return (
    <motion.div
      className="container mx-auto px-4 py-6 sm:py-8 bg-gray-100 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 sm:mb-8 text-center text-indigo-600">
        AuctionX - Live Bidding
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {nfts.map((nft) => (
          <NFTCard key={nft.id} nft={nft} />
        ))}
      </div>
    </motion.div>
  );
}

function NFTCard({ nft }: { nft: NFT }) {
  const timeLeft = useCountdown(nft.endTime);
  const isEnded =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300"
    >
      <div className="relative w-full h-40 sm:h-48">
        <Image src={nft.image} alt={nft.name} fill className="object-cover" />
      </div>
      <Card className="p-3 sm:p-4">
        <CardHeader className="p-0 mb-2 sm:mb-3">
          <CardTitle className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-base sm:text-lg font-semibold">
            <span className="mb-1 sm:mb-0">{nft.name}</span>
            <Badge
              variant={isEnded ? "destructive" : "secondary"}
              className="capitalize text-xs sm:text-sm"
            >
              {isEnded ? "Ended" : `${nft.highestBid} ETH`}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="mb-3 sm:mb-4">
            <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">
              Auction ends in:
            </p>
            <div className="flex justify-around">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center">
                  <motion.span
                    className="text-lg sm:text-xl font-bold text-indigo-500"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    {value}
                  </motion.span>
                  <span className="text-[10px] sm:text-xs text-gray-400 capitalize">
                    {unit}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="default"
            className={`w-full text-sm sm:text-base py-1 sm:py-2 ${
              isEnded ? "cursor-not-allowed opacity-50" : "hover:bg-indigo-600"
            }`}
            disabled={isEnded}
            onClick={() => {
              if (!isEnded) {
                // Handle bid action
              }
            }}
          >
            {isEnded ? "Auction Ended" : "Place Bid"}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
