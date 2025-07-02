"use client";

import { useState } from "react";
import { ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LandPlot {
  id: number;
  owner: string | null;
  price: number;
}

const generateLandPlots = (): LandPlot[] => {
  return Array.from({ length: 25 }, (_, i) => ({
    id: i,
    owner: Math.random() > 0.7 ? `Owner ${i}` : null,
    price: Math.floor(Math.random() * 1000) + 100,
  }));
};

export default function Component() {
  const [landPlots] = useState<LandPlot[]>(generateLandPlots());
  const [selectedPlot, setSelectedPlot] = useState<LandPlot | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const handlePlotClick = (plot: LandPlot) => {
    setSelectedPlot(plot);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.2, 0.5));
  };

  return (
    <div className="container mx-auto p-2 sm:p-4">
      <h1 className="text-xl sm:text-2xl font-bold mb-4">
        MetaChain Virtual Land
      </h1>
      <div className="flex flex-wrap mb-4 space-y-2 sm:space-y-0 sm:space-x-2">
        <Button onClick={handleZoomOut} className="w-full sm:w-auto">
          <ZoomOut className="mr-2 h-4 w-4" /> Zoom Out
        </Button>
        <Button onClick={handleZoomIn} className="w-full sm:w-auto">
          <ZoomIn className="mr-2 h-4 w-4" /> Zoom In
        </Button>
      </div>
      <div className="flex flex-wrap mb-4 space-y-2 sm:space-y-0">
        <div className="flex items-center mr-4 w-full sm:w-auto">
          <div className="w-4 h-4 bg-green-500 mr-2"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center w-full sm:w-auto">
          <div className="w-4 h-4 bg-red-500 mr-2"></div>
          <span>Owned</span>
        </div>
      </div>
      <div className="overflow-auto">
        <div
          className="grid grid-cols-3 sm:grid-cols-5 gap-1 sm:gap-2 mb-4 inline-block"
          style={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: "top left",
          }}
        >
          {landPlots.map((plot) => (
            <div
              key={plot.id}
              className={`w-12 h-12 sm:w-16 sm:h-16 border border-gray-300 cursor-pointer ${
                plot.owner ? "bg-red-500" : "bg-green-500"
              }`}
              onClick={() => handlePlotClick(plot)}
            ></div>
          ))}
        </div>
      </div>
      {selectedPlot && (
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Plot Information</CardTitle>
          </CardHeader>
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
          </CardContent>
        </Card>
      )}
    </div>
  );
}
