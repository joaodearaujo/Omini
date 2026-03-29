  import { useMemo } from "react";
  import type { TransactionsProps } from "../pages/Overview/components/Transactions/TransactionsHistory.type";

  export const useTransactionStats = ({transactions}: TransactionsProps) => {
    
    const stats = useMemo(() => {

      const grouped = transactions.reduce<Record<string, number>>((acc, item) => {
        const category = item.category;
        acc[category] = (acc[category] || 0) + 1;
        return acc;
      }, {});

      return grouped;
    }, [transactions]);

    const totalCount = transactions.length;

    return {
      stats,
      totalCount,
    };
}; 