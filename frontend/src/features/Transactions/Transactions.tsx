import TransactionsTable from "./components/TransactionsTable";
import { MOCK_TRANSACTIONS } from "../../MOCK/MOCK_TRANSACTIONS";


const Transactions = () => {

  return (
    <div className="max-h-[260px] overflow-x-auto overflow-scroll overflow-hidden px-1">
        <TransactionsTable transactions={MOCK_TRANSACTIONS}/>
    </div>
  )
}

export default Transactions;
