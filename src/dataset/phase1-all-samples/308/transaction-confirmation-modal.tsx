import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Wallet, Clock, AlertCircle } from "lucide-react";

export default function Component() {
  const [isOpen, setIsOpen] = useState(false);
  const [gasOption, setGasOption] = useState("standard");

  const gasOptions = {
    slow: { price: "0.001 ETH", time: "~10 mins" },
    standard: { price: "0.002 ETH", time: "~3 mins" },
    fast: { price: "0.003 ETH", time: "~1 min" },
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Confirm Transaction</Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] max-w-[95vw]">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl">
              Confirm Transaction
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base">
              Please review the details of your transaction before confirming.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-2 sm:gap-4">
              <Label
                htmlFor="amount"
                className="sm:text-right text-sm font-medium"
              >
                Amount
              </Label>
              <div className="col-span-1 sm:col-span-3 flex items-center">
                <CreditCard className="mr-2 h-4 w-4" />
                <span className="font-medium">0.1 ETH</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-2 sm:gap-4">
              <Label htmlFor="to" className="sm:text-right text-sm font-medium">
                To
              </Label>
              <div className="col-span-1 sm:col-span-3 flex items-center">
                <Wallet className="mr-2 h-4 w-4" />
                <span className="font-medium">0x1234...5678</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-2 sm:gap-4">
              <Label className="sm:text-right text-sm font-medium">
                Gas Fee
              </Label>
              <div className="col-span-1 sm:col-span-3">
                <RadioGroup value={gasOption} onValueChange={setGasOption}>
                  {Object.entries(gasOptions).map(([key, { price, time }]) => (
                    <div key={key} className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value={key} id={key} />
                      <Label
                        htmlFor={key}
                        className="flex items-center text-sm"
                      >
                        <span className="capitalize mr-2">{key}</span>
                        <span className="text-xs text-gray-500">
                          ({price} - {time})
                        </span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-2 sm:gap-4">
              <Label className="sm:text-right text-sm font-medium">
                Est. Time
              </Label>
              <div className="col-span-1 sm:col-span-3 flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                <span className="text-sm">{gasOptions[gasOption].time}</span>
              </div>
            </div>
          </div>
          <DialogFooter className="flex-col gap-2">
            <div className="flex items-center justify-center w-full text-amber-500 bg-amber-50 p-2 rounded-md">
              <AlertCircle className="mr-2 h-4 w-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm">
                Please ensure all details are correct before confirming.
              </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between w-full gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="w-full sm:w-auto"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                onClick={() => setIsOpen(false)}
                className="w-full sm:w-auto"
              >
                Confirm Transaction
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
