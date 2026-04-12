import TransactionsTable from "./components/TransactionsTable";
import type { TransactionsProps } from "./TransactionsHistory.type";
import FloatingCard from "../../../../ui/FloatingCard/FloatingCard";
const STYLE = {
  container: 'h-full max-h-[290px] overflow-x-auto overflow-scroll overflow-hidden',
}

const TransactionsHistory = ({transactions}: TransactionsProps ) => {

  return (
    <FloatingCard title="Transactions">
      <section className={STYLE.container}>
          <TransactionsTable transactions={transactions}/>
      </section>
    </FloatingCard>
  )
}

export default TransactionsHistory;
