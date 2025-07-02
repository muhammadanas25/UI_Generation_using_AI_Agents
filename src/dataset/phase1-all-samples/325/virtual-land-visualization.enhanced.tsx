"use client";

import { useState } from "react";
import { ZoomIn, ZoomOut, Search, Filter, Info, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface LandPlot {
  id: number;
  owner: string | null;
  price: number;
}

const generateLandPlots = (): LandPlot[] => {
  return Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    owner: Math.random() > 0.7 ? `Owner ${i + 1}` : null,
    price: Math.floor(Math.random() * 1000) + 100,
  }));
};

export default function VirtualLandVisualizer() {
  const [landPlots] = useState<LandPlot[]>(generateLandPlots());
  const [selectedPlot, setSelectedPlot] = useState<LandPlot | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<
    "all" | "available" | "owned"
  >("all");

  const handlePlotClick = (plot: LandPlot) => {
    setSelectedPlot(plot);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.2, 0.5));
  };

  const filteredPlots = landPlots
    .filter((plot) => {
      if (filterStatus === "available") return !plot.owner;
      if (filterStatus === "owned") return plot.owner;
      return true;
    })
    .filter((plot) => plot.id.toString().includes(searchTerm));

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 p-2 sm:p-4">
      <header className="flex flex-col mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-purple-700 mb-4 flex items-center justify-center sm:justify-start">
          <MapPin className="mr-2 h-6 w-6 sm:h-8 sm:w-8 text-purple-500 animate-pulse" />
          MetaChain Virtual Land
        </h1>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <Input
            placeholder="Search Plot ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-48 mb-2 sm:mb-0"
            icon={<Search className="h-4 w-4 text-gray-500" />}
          />
          <div className="flex space-x-2">
            <Button
              variant="outline"
              onClick={() => setFilterStatus("all")}
              className={`flex-1 sm:flex-none items-center ${
                filterStatus === "all" ? "bg-purple-500 text-white" : ""
              }`}
            >
              All
            </Button>
            <Button
              variant="outline"
              onClick={() => setFilterStatus("available")}
              className={`flex-1 sm:flex-none items-center ${
                filterStatus === "available" ? "bg-green-500 text-white" : ""
              }`}
            >
              Available
            </Button>
            <Button
              variant="outline"
              onClick={() => setFilterStatus("owned")}
              className={`flex-1 sm:flex-none items-center ${
                filterStatus === "owned" ? "bg-red-500 text-white" : ""
              }`}
            >
              Owned
            </Button>
          </div>
        </div>
      </header>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <div className="flex mb-2 sm:mb-0 space-x-2">
          <Button
            onClick={handleZoomOut}
            className="transition-transform transform hover:scale-110"
          >
            <ZoomOut className="mr-2 h-4 w-4" /> Zoom Out
          </Button>
          <Button
            onClick={handleZoomIn}
            className="transition-transform transform hover:scale-110"
          >
            <ZoomIn className="mr-2 h-4 w-4" /> Zoom In
          </Button>
        </div>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-500 mr-2 rounded"></div>
            <span>Available</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-500 mr-2 rounded"></div>
            <span>Owned</span>
          </div>
        </div>
      </div>
      <div className="overflow-auto">
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 transition-transform duration-300 inline-block"
          style={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: "top left",
          }}
        >
          {filteredPlots.map((plot) => (
            <TooltipProvider key={plot.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-2 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 relative
                    ${plot.owner ? "bg-red-500" : "bg-green-500"}`}
                    onClick={() => handlePlotClick(plot)}
                  >
                    <span className="absolute top-1 left-1 text-xs font-semibold text-white">
                      #{plot.id}
                    </span>
                    {plot.owner && (
                      <span className="absolute bottom-1 right-1 text-xs text-white hidden sm:inline">
                        Owned
                      </span>
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Plot ID: {plot.id}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
      {selectedPlot && (
        <Dialog
          open={!!selectedPlot}
          onOpenChange={() => setSelectedPlot(null)}
        >
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Plot #{selectedPlot.id} Details</DialogTitle>
              <DialogDescription>
                Explore the details of your selected plot.
              </DialogDescription>
            </DialogHeader>
            <Card className="mt-4">
              <CardContent>
                <p>
                  <strong>ID:</strong> {selectedPlot.id}
                </p>
                <p>
                  <strong>Owner:</strong> {selectedPlot.owner || "Available"}
                </p>
                <p>
                  <strong>Price:</strong> {selectedPlot.price} ETH
                </p>
                <div className="mt-4 flex space-x-2">
                  {!selectedPlot.owner ? (
                    <Button className="bg-green-500 hover:bg-green-600">
                      Buy Plot
                    </Button>
                  ) : (
                    <Button className="bg-red-500 hover:bg-red-600">
                      View Profile
                    </Button>
                  )}
                  <Button variant="ghost" onClick={() => setSelectedPlot(null)}>
                    Close
                  </Button>
                </div>
              </CardContent>
            </Card>
          </DialogContent>
        </Dialog>
      )}
      <footer className="mt-8 text-center text-gray-600">
        © {new Date().getFullYear()} MetaChain. All rights reserved.
      </footer>
    </div>
  );
}
