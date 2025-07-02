"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Simulated data for the leaderboard
const leaderboardData = Array.from({ length: 100 }, (_, i) => ({
  rank: i + 1,
  address: `0x${Math.random().toString(16).substr(2, 40)}`,
  totalValueLocked: Math.floor(Math.random() * 10000000),
  rewardsEarned: Math.floor(Math.random() * 100000),
  poolsParticipated: Math.floor(Math.random() * 10) + 1,
}));

type SortKey =
  | "rank"
  | "totalValueLocked"
  | "rewardsEarned"
  | "poolsParticipated";

export default function LeaderboardComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("rank");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [poolFilter, setPoolFilter] = useState("all");

  const itemsPerPage = 10;

  const filteredData = leaderboardData
    .filter(
      (item) =>
        item.address.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (poolFilter === "all" ||
          item.poolsParticipated.toString() === poolFilter)
    )
    .sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortOrder === "asc" ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Top Liquidity Providers</h1>

      <div className="flex flex-col space-y-4 mb-4">
        <Input
          type="text"
          placeholder="Search by address"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
        <Select value={poolFilter} onValueChange={setPoolFilter}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Filter by pools" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Pools</SelectItem>
            {[1, 2, 3, 4, 5].map((num) => (
              <SelectItem key={num} value={num.toString()}>
                {num} {num === 1 ? "Pool" : "Pools"}
              </SelectItem>
            ))}
            <SelectItem value="6">6+ Pools</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16">
                  <Button
                    variant="ghost"
                    className="p-0 h-auto font-semibold"
                    onClick={() => handleSort("rank")}
                  >
                    Rank
                    <ChevronsUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>Address</TableHead>
                <TableHead className="text-right">
                  <Button
                    variant="ghost"
                    className="p-0 h-auto font-semibold"
                    onClick={() => handleSort("totalValueLocked")}
                  >
                    TVL
                    <ChevronsUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead className="text-right">
                  <Button
                    variant="ghost"
                    className="p-0 h-auto font-semibold"
                    onClick={() => handleSort("rewardsEarned")}
                  >
                    Rewards
                    <ChevronsUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead className="text-center">
                  <Button
                    variant="ghost"
                    className="p-0 h-auto font-semibold"
                    onClick={() => handleSort("poolsParticipated")}
                  >
                    Pools
                    <ChevronsUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.map((item) => (
                <TableRow key={item.address}>
                  <TableCell className="font-medium">{item.rank}</TableCell>
                  <TableCell className="font-mono text-xs sm:text-sm">
                    {item.address}
                  </TableCell>
                  <TableCell className="text-right">
                    ${item.totalValueLocked.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">
                    ${item.rewardsEarned.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-center">
                    {item.poolsParticipated}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="text-sm text-muted-foreground order-2 sm:order-1">
          Showing {(currentPage - 1) * itemsPerPage + 1} -{" "}
          {Math.min(currentPage * itemsPerPage, filteredData.length)} of{" "}
          {filteredData.length}
        </div>
        <div className="flex space-x-2 order-1 sm:order-2">
          <Button
            variant="outline"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
