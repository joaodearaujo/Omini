import FloatingCard from "../../../components/ui/FloatingCard/FloatingCard"
import { MOCK_TRANSACTIONS } from "../../../mock/MOCK_TRANSACTIONS"
import { MOCK_CARDS } from "../../../mock/MOCK_CARDS"
import TransactionItem from "./TransactionsItem"

const RecentTransactions = () => {

  return (
    <FloatingCard title="Recent Transactions">
      <div className="flex flex-col gap-2 w-full max-h-full overflow-y-auto ">
      {MOCK_CARDS.map((card) => {

        const cardId = card.id

        return (
          <TransactionItem transaction={
            MOCK_TRANSACTIONS[cardId][0]
          } />  
        )
      })}

      </div>
    </FloatingCard>
  )
}

export default RecentTransactions