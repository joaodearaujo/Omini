import TransactionsTable from "./components/TransactionsTable";
import { MOCK_TRANSACTIONS } from "../../MOCK/MOCK_TRANSACTIONS";

const STYLE = {
  container: 'max-h-[260px] overflow-x-auto overflow-scroll overflow-hidden',
}

const Transactions = () => {

  return (
    <div className={STYLE.container}>
        <TransactionsTable transactions={MOCK_TRANSACTIONS}/>
    </div>
  )
}

export default Transactions;
