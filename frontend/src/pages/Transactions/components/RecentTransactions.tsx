import FloatingCard from "../../../components/ui/FloatingCard/FloatingCard"
import { MOCK_TRANSACTIONS } from "../../../mock/MOCK_TRANSACTIONS"
import { MOCK_CARDS } from "../../../mock/MOCK_CARDS"
import TransactionItem from "./TransactionsItem"
import { useState, useEffect } from "react";

const RecentTransactions = () => {

      const [isVisible, setIsVisible] = useState<boolean>(false)
  
      useEffect(() => {
  
          setIsVisible(false);
  
          const timer = setTimeout(() => {
              setIsVisible(true);
          }, 50)
  
          return () => clearTimeout(timer)
      }, []);

  return (
    <FloatingCard title="Recent Transactions">
      <div className={`flex flex-col gap-4 max-h-full py-2 min-h-0 overflow-y-auto transition-all duration-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1'}`}>
      {MOCK_CARDS.map((card) => {

        const bankName = card.bank

        const transactions = MOCK_TRANSACTIONS[card.id] || [];

        return transactions.map((transaction) => (
          <TransactionItem 
            key={transaction.id}
            transaction={transaction}
            bank={bankName}
          />
          ));
        })}

      </div>
    </FloatingCard>
  )
}

export default RecentTransactions