"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

export default function Component() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Button
      className="relative overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl
                 w-full sm:w-auto text-sm sm:text-base py-2 px-3 sm:py-2 sm:px-4"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => setIsActive(false)}
    >
      <span className="relative z-10 flex items-center justify-center">
        <Wallet
          className={`mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 ${
            isActive ? "rotate-12" : ""
          }`}
        />
        Connect Wallet
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-500 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
    </Button>
  );
}
