import TransactionsTable from "./components/TransactionsTable";
import type { TransactionsProps } from "./TransactionsHistory.type";
import FloatingCard from "../../../../components/ui/FloatingCard/FloatingCard";
const STYLE = {
  container: 'h-full max-h-[280px] overflow-x-auto overflow-scroll overflow-hidden',
}

const TransactionsHistory = ({transactions}: TransactionsProps ) => {

  return (
    <FloatingCard title="Transactions">
      <div className={STYLE.container}>
          <TransactionsTable transactions={transactions}/>
      </div>
    </FloatingCard>
  )
}

export default TransactionsHistory;
