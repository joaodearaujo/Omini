import FloatingCard from "../../../components/ui/FloatingCard/FloatingCard"
import { MOCK_TRANSACTIONS } from "../../../mock/MOCK_TRANSACTIONS"
import { MOCK_CARDS } from "../../../mock/MOCK_CARDS"
import TransactionItem from "./TransactionsItem"
import useFadeIn from "../../../hooks/useFadeIn"

const STYLE = {
  container: 'flex flex-col gap-4 max-h-full py-2 min-h-0 overflow-y-auto transition-all duration-800'
}

const RecentTransactions = () => {

  const { isVisible } = useFadeIn();

  return (
    <FloatingCard>
      <section className={`${STYLE.container} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1'}`}>
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

      </section>
    </FloatingCard>
  )
}

export default RecentTransactions