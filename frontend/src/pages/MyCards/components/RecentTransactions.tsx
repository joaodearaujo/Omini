import FloatingCard from "../../../components/ui/FloatingCard/FloatingCard"
import type { TransactionItemProps } from "../Mycards.type"
import { MOCK_TRANSACTIONS } from "../../../mock/MOCK_TRANSACTIONS"
import { GlassWaterIcon, icons } from "lucide-react"

const TransactionItem = ({transaction}: TransactionItemProps) => {

  const Icon = GlassWaterIcon;

  return (
    <div className="w-full h-[60px] flex justify-between items-center px-4 bg-white hover:bg-[#f9fafb] rounded-xl cursor-default">
      <div className="flex gap-4">
          <span className="bg-[#f3f4f6] w-[50px] h-[50px] rounded-full p-2 flex items-center justify-center">
              <Icon></Icon>
          </span>

          <div className="flex flex-col">

            <strong>{transaction.receiver}</strong>
            <small>{`${transaction.category} • ${transaction.date}`}</small>
          </div>
      </div>

      <span>{transaction.amount}</span>
    </div>
)
}

const RecentTransactions = () => {

  const currentCardId = "cc-001";
  const transactions = MOCK_TRANSACTIONS[currentCardId];

  return (
    <FloatingCard title="Recent Transactions">
      <div className="flex flex-col gap-2">
          <TransactionItem transaction={transactions[0]} />
      </div>
    </FloatingCard>
  )
}

export default RecentTransactions