import FloatingCard from "../../../components/ui/FloatingCard/FloatingCard"
import { MOCK_TRANSACTIONS } from "../../../mock/MOCK_TRANSACTIONS"
import { MOCK_CARDS } from "../../../mock/MOCK_CARDS"
import TransactionItem from "./TransactionsItem"

const RecentTransactions = () => {

  return (
    <FloatingCard title="Recent Transactions">
      <div className="flex flex-col gap-4 max-h-[680px] py-2 min-h-0 overflow-y-auto">
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