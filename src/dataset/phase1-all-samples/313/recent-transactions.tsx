import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Sample transaction data
const transactions = [
  { id: "TRX001", status: "completed" },
  { id: "TRX002", status: "pending" },
  { id: "TRX003", status: "completed" },
  { id: "TRX004", status: "failed" },
  { id: "TRX005", status: "completed" },
];

export default function RecentTransactions() {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl">
          Recent Transactions
        </CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/2 sm:w-auto">Transaction ID</TableHead>
              <TableHead className="w-1/2 sm:w-auto">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <span className="text-sm sm:text-base">
                      {transaction.id}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      transaction.status === "completed"
                        ? "success"
                        : transaction.status === "pending"
                        ? "warning"
                        : "destructive"
                    }
                    className="text-xs sm:text-sm"
                  >
                    {transaction.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex justify-center sm:justify-end">
        <Button variant="outline" className="w-full sm:w-auto">
          View All Transactions
        </Button>
      </CardFooter>
    </Card>
  );
}
