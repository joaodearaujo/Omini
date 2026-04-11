import TransactionItem from "./TransactionsItem";
import FloatingCard from "../../../ui/FloatingCard/FloatingCard";
import type { TransactionProps } from "../../Overview/components/Transactions/TransactionsHistory.type";

interface TransactionsListProps {
    transactions: TransactionProps[];
    isLoading: boolean;
}

const TransactionsList = ({transactions, isLoading }: TransactionsListProps) => {

    if (isLoading) return <FloatingCard><p className="text-white">Loading transactions...</p></FloatingCard>;

    if (transactions.length === 0 ){
        return (
            <FloatingCard>
               <p className="text-gray-500">No Transactions found.</p>
            </FloatingCard>
        )
    }

  return (  
    <FloatingCard >
        {transactions.map((transaction) => (<TransactionItem  key={transaction.id} transaction={transaction}/>))}
    </FloatingCard>
  )
}

export default TransactionsList
