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
import {
  CreditCard,
  Wallet,
  Clock,
  AlertCircle,
  CheckCircle,
  Copy,
} from "lucide-react";
import { toast } from "react-hot-toast";

export default function Component() {
  const [isOpen, setIsOpen] = useState(false);
  const [gasOption, setGasOption] = useState("standard");
  const [copied, setCopied] = useState(false);

  const gasOptions = {
    slow: { price: "0.001 ETH", time: "~10 mins" },
    standard: { price: "0.002 ETH", time: "~3 mins" },
    fast: { price: "0.003 ETH", time: "~1 min" },
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("0x1234...5678");
    setCopied(true);
    toast.success("Address copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-colors duration-300 w-full sm:w-auto"
      >
        Confirm Transaction
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-lg w-full p-4 sm:p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg animate-fadeInUp">
          <DialogHeader>
            <div className="flex items-center space-x-2 mb-2 sm:mb-4">
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 animate-bounce" />
              <DialogTitle className="text-xl sm:text-2xl font-semibold">
                Confirm Transaction
              </DialogTitle>
            </div>
            <DialogDescription className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Please review the details of your transaction before confirming.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 sm:gap-6 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-2 sm:gap-4">
              <Label
                htmlFor="amount"
                className="sm:text-right font-medium text-gray-700 dark:text-gray-200 text-sm sm:text-base"
              >
                Amount
              </Label>
              <div className="col-span-1 sm:col-span-3 flex items-center bg-gray-100 dark:bg-gray-700 p-2 sm:p-3 rounded-md shadow-sm">
                <CreditCard className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-indigo-500" />
                <span className="font-semibold text-gray-800 dark:text-gray-100 text-sm sm:text-base">
                  0.1 ETH
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-2 sm:gap-4">
              <Label
                htmlFor="to"
                className="sm:text-right font-medium text-gray-700 dark:text-gray-200 text-sm sm:text-base"
              >
                To
              </Label>
              <div className="col-span-1 sm:col-span-3 flex items-center bg-gray-100 dark:bg-gray-700 p-2 sm:p-3 rounded-md shadow-sm">
                <Wallet className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-indigo-500" />
                <span className="font-semibold text-gray-800 dark:text-gray-100 text-sm sm:text-base">
                  0x1234...5678
                </span>
                <button
                  onClick={handleCopy}
                  className="ml-auto text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
                  aria-label="Copy address"
                >
                  {copied ? (
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4 sm:h-5 sm:w-5" />
                  )}
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 items-start gap-2 sm:gap-4">
              <Label className="sm:text-right font-medium text-gray-700 dark:text-gray-200 text-sm sm:text-base">
                Gas Fee
              </Label>
              <div className="col-span-1 sm:col-span-3">
                <RadioGroup
                  value={gasOption}
                  onValueChange={setGasOption}
                  className="space-y-2"
                >
                  {Object.entries(gasOptions).map(([key, { price, time }]) => (
                    <label
                      key={key}
                      htmlFor={key}
                      className="flex items-center p-2 sm:p-3 bg-gray-50 dark:bg-gray-700 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      <RadioGroupItem
                        value={key}
                        id={key}
                        className="mr-2 sm:mr-3 h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                      />
                      <div className="flex flex-col">
                        <span className="capitalize font-medium text-gray-800 dark:text-gray-100 text-sm sm:text-base">
                          {key}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                          {price} - {time}
                        </span>
                      </div>
                    </label>
                  ))}
                </RadioGroup>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-2 sm:gap-4">
              <Label className="sm:text-right font-medium text-gray-700 dark:text-gray-200 text-sm sm:text-base">
                Est. Time
              </Label>
              <div className="col-span-1 sm:col-span-3 flex items-center bg-gray-100 dark:bg-gray-700 p-2 sm:p-3 rounded-md shadow-sm">
                <Clock className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-indigo-500" />
                <span className="text-gray-800 dark:text-gray-100 text-sm sm:text-base">
                  {gasOptions[gasOption].time}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-2 sm:gap-4">
              <Label className="sm:text-right font-medium text-gray-700 dark:text-gray-200 text-sm sm:text-base">
                Gas Price
              </Label>
              <div className="col-span-1 sm:col-span-3 flex items-center bg-gray-100 dark:bg-gray-700 p-2 sm:p-3 rounded-md shadow-sm">
                <span className="text-gray-800 dark:text-gray-100 text-sm sm:text-base">
                  {gasOptions[gasOption].price}
                </span>
              </div>
            </div>
          </div>
          <DialogFooter className="flex flex-col gap-4">
            <div className="flex items-center justify-center w-full bg-yellow-50 dark:bg-yellow-900 p-2 sm:p-3 rounded-md shadow-inner">
              <AlertCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-yellow-700 dark:text-yellow-300">
                Please ensure all details are correct before confirming.
              </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4 w-full">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="w-full sm:w-auto px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                onClick={() => setIsOpen(false)}
                className="w-full sm:w-auto px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center"
              >
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 animate-pulse" />
                Confirm Transaction
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
