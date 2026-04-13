import TransactionsTable from "./components/TransactionsTable";
import type { TransactionsProps } from "./TransactionsHistory.type";
import FloatingCard from "../../../../ui/FloatingCard/FloatingCard";
import Fallback from "../../../../ui/Fallback/Fallback";
import { ArrowLeftRight } from "lucide-react";

const STYLE = {
  container: 'h-full max-h-[290px] overflow-x-auto overflow-scroll overflow-hidden',
}



const TransactionsHistory = ({transactions}: TransactionsProps ) => {

   if (transactions.length === 0) {
    return <Fallback title="Transactions" icon={ArrowLeftRight} text="Your future transactions will appear here."/>
   }

  return (
    <FloatingCard title="Transactions">
      <section className={STYLE.container}>
          <TransactionsTable transactions={transactions}/>
      </section>
    </FloatingCard>
  )
}

export default TransactionsHistory;
