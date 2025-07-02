"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { FaStar, FaGem, FaCircle, FaRocket } from "react-icons/fa";

export default function TokenMintingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    symbol: "",
    description: "",
    color: "#000000",
    icon: "default",
    supply: 1000000,
    distribution: "equal",
  });

  const updateFormData = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 4));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl font-bold">
                Token Details
              </CardTitle>
              <CardDescription className="text-sm sm:text-base text-gray-500">
                Enter the basic information about your token.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm sm:text-base">
                  Token Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => updateFormData("name", e.target.value)}
                  placeholder="e.g., MyAwesomeToken"
                  className="text-sm sm:text-base transition-border duration-300 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="symbol" className="text-sm sm:text-base">
                  Token Symbol
                </Label>
                <Input
                  id="symbol"
                  value={formData.symbol}
                  onChange={(e) => updateFormData("symbol", e.target.value)}
                  placeholder="e.g., MAT"
                  className="text-sm sm:text-base transition-border duration-300 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description" className="text-sm sm:text-base">
                  Token Description
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    updateFormData("description", e.target.value)
                  }
                  placeholder="Describe your token's purpose and features"
                  className="text-sm sm:text-base transition-border duration-300 focus:border-primary"
                />
              </div>
            </CardContent>
          </>
        );
      case 2:
        return (
          <>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl font-bold">
                Token Appearance
              </CardTitle>
              <CardDescription className="text-sm sm:text-base text-gray-500">
                Customize how your token looks.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="color" className="text-sm sm:text-base">
                  Token Color
                </Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="color"
                    type="color"
                    value={formData.color}
                    onChange={(e) => updateFormData("color", e.target.value)}
                    className="w-12 h-12 p-1 transition-border duration-300 focus:border-primary"
                  />
                  <span className="text-sm sm:text-base">{formData.color}</span>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="icon" className="text-sm sm:text-base">
                  Token Icon
                </Label>
                <Select
                  onValueChange={(value) => updateFormData("icon", value)}
                >
                  <SelectTrigger className="text-sm sm:text-base">
                    <SelectValue placeholder="Select an icon" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="star">Star</SelectItem>
                    <SelectItem value="diamond">Diamond</SelectItem>
                    <SelectItem value="circle">Circle</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Preview</h3>
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 p-4 border rounded-lg bg-gray-50 transition-transform duration-300 transform hover:scale-105">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: formData.color }}
                  >
                    {formData.icon === "star" && (
                      <FaStar className="text-white" size={24} />
                    )}
                    {formData.icon === "diamond" && (
                      <FaGem className="text-white" size={24} />
                    )}
                    {formData.icon === "circle" && (
                      <FaCircle className="text-white" size={24} />
                    )}
                    {formData.icon === "default" && (
                      <FaRocket className="text-white" size={24} />
                    )}
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-xl font-bold">
                      {formData.name || "Token Name"}
                    </p>
                    <p className="text-sm text-gray-600">
                      {formData.symbol || "SYM"}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </>
        );
      case 3:
        return (
          <>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl font-bold">
                Distribution Parameters
              </CardTitle>
              <CardDescription className="text-sm sm:text-base text-gray-500">
                Set up how your tokens will be distributed.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-4">
              <div className="space-y-1">
                <Label htmlFor="supply">Total Supply</Label>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                  <Slider
                    id="supply"
                    min={100000}
                    max={10000000}
                    step={100000}
                    value={[formData.supply]}
                    onValueChange={(value) =>
                      updateFormData("supply", value[0])
                    }
                    className="w-full"
                  />
                  <span className="text-base sm:text-lg font-medium">
                    {formData.supply.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">
                  Distribution Method
                </Label>
                <RadioGroup
                  value={formData.distribution}
                  onValueChange={(value) =>
                    updateFormData("distribution", value)
                  }
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="equal" id="equal" />
                    <Label htmlFor="equal" className="text-sm sm:text-base">
                      Equal Distribution
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="airdrop" id="airdrop" />
                    <Label htmlFor="airdrop" className="text-sm sm:text-base">
                      Airdrop
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="staking" id="staking" />
                    <Label htmlFor="staking" className="text-sm sm:text-base">
                      Staking Rewards
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </>
        );
      case 4:
        return (
          <>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl font-bold">
                Review and Mint
              </CardTitle>
              <CardDescription className="text-sm sm:text-base text-gray-500">
                Review your token details before minting.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-base sm:text-lg">
                  Token Details
                </h3>
                <p className="text-sm sm:text-base">Name: {formData.name}</p>
                <p className="text-sm sm:text-base">
                  Symbol: {formData.symbol}
                </p>
                <p className="text-sm sm:text-base">
                  Description: {formData.description}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg">
                  Appearance
                </h3>
                <p className="text-sm sm:text-base">
                  Color:{" "}
                  <span style={{ color: formData.color }}>
                    {formData.color}
                  </span>
                </p>
                <p className="text-sm sm:text-base">Icon: {formData.icon}</p>
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg">
                  Distribution
                </h3>
                <p className="text-sm sm:text-base">
                  Total Supply: {formData.supply.toLocaleString()}
                </p>
                <p className="text-sm sm:text-base">
                  Distribution Method: {formData.distribution}
                </p>
              </div>
            </CardContent>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <Card className="w-full max-w-3xl mx-auto shadow-lg rounded-lg bg-white overflow-hidden">
        {renderStep()}
        <CardFooter className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 space-y-2 sm:space-y-0">
          {step > 1 && (
            <Button
              onClick={handlePrev}
              variant="outline"
              className="w-full sm:w-auto transition-transform transform hover:scale-105"
            >
              Previous
            </Button>
          )}
          {step < 4 && (
            <Button
              onClick={handleNext}
              className="w-full sm:w-auto transition-transform transform hover:scale-105"
            >
              Next
            </Button>
          )}
        </CardFooter>
        <div className="px-4 sm:px-6 pb-4 sm:pb-6">
          <div className="flex justify-between items-center space-x-2">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center space-x-1 flex-1">
                <div
                  className={`w-3 h-3 rounded-full ${
                    s <= step ? "bg-primary" : "bg-gray-300"
                  }`}
                />
                {s !== 4 && (
                  <div
                    className={`flex-1 h-1 rounded-full ${
                      s < step ? "bg-primary" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between text-xs sm:text-sm text-gray-600">
            <span>Details</span>
            <span>Appearance</span>
            <span>Distribution</span>
            <span>Review</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
