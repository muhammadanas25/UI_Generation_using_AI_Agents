"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
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
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">
                Token Details
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Enter the basic information about your token.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm sm:text-base">
                  Token Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => updateFormData("name", e.target.value)}
                  placeholder="e.g., MyAwesomeToken"
                  className="text-sm sm:text-base"
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
                  className="text-sm sm:text-base"
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
                  className="text-sm sm:text-base"
                />
              </div>
            </CardContent>
          </>
        );
      case 2:
        return (
          <>
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">
                Token Appearance
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Customize how your token looks.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
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
                    className="w-12 h-12 p-1"
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
            </CardContent>
          </>
        );
      case 3:
        return (
          <>
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">
                Distribution Parameters
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Set up how your tokens will be distributed.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="supply" className="text-sm sm:text-base">
                  Total Supply
                </Label>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                  <Slider
                    id="supply"
                    min={100000}
                    max={10000000}
                    step={100000}
                    value={[formData.supply]}
                    onValueChange={(value) =>
                      updateFormData("supply", value[0])
                    }
                    className="w-full sm:w-3/4"
                  />
                  <span className="text-sm sm:text-base">
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
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">
                Review and Mint
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Review your token details before minting.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
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
    <Card className="w-full max-w-2xl mx-auto">
      {renderStep()}
      <CardFooter className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0">
        {step > 1 && (
          <Button
            onClick={handlePrev}
            variant="outline"
            className="w-full sm:w-auto"
          >
            Previous
          </Button>
        )}
        {step < 4 ? (
          <Button onClick={handleNext} className="w-full sm:w-auto">
            Next
          </Button>
        ) : (
          <Button
            onClick={() => alert("Token minted successfully!")}
            className="w-full sm:w-auto"
          >
            Mint Token
          </Button>
        )}
      </CardFooter>
      <div className="px-4 sm:px-6 pb-4">
        <div className="flex justify-between">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`w-1/4 h-2 rounded-full ${
                s <= step ? "bg-primary" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
