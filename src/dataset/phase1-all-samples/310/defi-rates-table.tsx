"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Search, Loader2 } from "lucide-react";
import {
  Bitcoin,
  EclipseIcon as Ethereum,
  Tally2Icon as Tether,
  CurrencyIcon as UsdCoin,
  JapaneseYenIcon as Dai,
} from "lucide-react";

type Asset = {
  name: string;
  icon: React.ReactNode;
  lendingAPY: number;
  borrowingAPY: number;
};

const assets: Asset[] = [
  {
    name: "Bitcoin",
    icon: <Bitcoin className="h-6 w-6" />,
    lendingAPY: 3.5,
    borrowingAPY: 5.2,
  },
  {
    name: "Ethereum",
    icon: <Ethereum className="h-6 w-6" />,
    lendingAPY: 4.2,
    borrowingAPY: 6.1,
  },
  {
    name: "USDT",
    icon: <Tether className="h-6 w-6" />,
    lendingAPY: 8.5,
    borrowingAPY: 10.3,
  },
  {
    name: "USDC",
    icon: <UsdCoin className="h-6 w-6" />,
    lendingAPY: 8.2,
    borrowingAPY: 9.8,
  },
  {
    name: "DAI",
    icon: <Dai className="h-6 w-6" />,
    lendingAPY: 7.9,
    borrowingAPY: 9.5,
  },
];

export default function DeFiRatesTable() {
  const [sortColumn, setSortColumn] = useState<
    "name" | "lendingAPY" | "borrowingAPY"
  >("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Asset[]>([]);

  useEffect(() => {
    // Simulate API call to fetch live data
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setData(assets);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleSort = (column: "name" | "lendingAPY" | "borrowingAPY") => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortColumn === "name") {
      return sortDirection === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else {
      return sortDirection === "asc"
        ? a[sortColumn] - b[sortColumn]
        : b[sortColumn] - a[sortColumn];
    }
  });

  const filteredData = sortedData.filter((asset) =>
    asset.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getAPYColor = (apy: number) => {
    if (apy < 5) return "text-yellow-600";
    if (apy < 8) return "text-green-600";
    return "text-blue-600";
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-bold text-center">Live DeFi Rates</h2>
      <div className="relative">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search assets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-8"
        />
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-2 font-medium text-sm sm:text-base">
            <Button
              variant="ghost"
              onClick={() => handleSort("name")}
              className="flex items-center justify-between"
            >
              Asset
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleSort("lendingAPY")}
              className="flex items-center justify-between"
            >
              Lending
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleSort("borrowingAPY")}
              className="flex items-center justify-between"
            >
              Borrowing
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
          {filteredData.map((asset) => (
            <div
              key={asset.name}
              className="grid grid-cols-3 gap-2 items-center py-2 border-b border-gray-200 text-sm sm:text-base"
            >
              <div className="flex items-center space-x-2">
                {asset.icon}
                <span>{asset.name}</span>
              </div>
              <div className={`text-right ${getAPYColor(asset.lendingAPY)}`}>
                {asset.lendingAPY.toFixed(2)}%
              </div>
              <div className={`text-right ${getAPYColor(asset.borrowingAPY)}`}>
                {asset.borrowingAPY.toFixed(2)}%
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
