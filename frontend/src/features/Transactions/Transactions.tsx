import TransactionsTable from "./components/TransactionsTable";
import type { TransactionsProps } from "./Transactions.type";

const STYLE = {
  container: 'h-full max-h-[280px] overflow-x-auto overflow-scroll overflow-hidden',
}

const Transactions = ({transactions}: TransactionsProps ) => {

  return (
    <div className={STYLE.container}>
        <TransactionsTable transactions={transactions}/>
    </div>
  )
}

export default Transactions;
