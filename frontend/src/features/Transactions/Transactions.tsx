import TransactionsTable from "./components/TransactionsTable";
import type { TransactionProps } from "./Transactions.type";

const MOCK_TRANSACTIONS: TransactionProps[] = [
  {
    id: "7b2d1a3e-5c4b-4a2f-9d1e-8f0a3b2c1d4e",
    receiver: "Amazon Services",
    type: "outcome",
    category: "essentials", 
    date: "2025-09-30", 
    amount: 145.20
  },
  {
    id: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
    receiver: "Whole Foods Market",
    type: "outcome",
    category: "food",     
    date: "2025-09-28",
    amount: 82.35
  },
  {
    id: "2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
    receiver: "Netflix Subscription",
    type: "outcome",
    category: "lifestyle", 
    date: "2025-09-25",
    amount: 19.99
  },
  {
    id: "5e6f7a8b-9c0d-1e2f-3a4b-5c6d7e8f9a0b",
    receiver: "Shell Gas Station",
    type: "outcome",
    category: "transport",
    date: "2025-09-20",
    amount: 55.00
  },
  {
    id: "7a8b9c0d-1e2f-3a4b-5c6d-7e8f9a0b1c2d",
    receiver: "Gym Membership",
    type: "outcome",
    category: "health",
    date: "2025-09-15",
    amount: 45.00
  }
];

const Transactions = () => {

  return (
    <div className=" max-h-[320px] h-full overflow-x-auto overflow-scroll overflow-hidden px-">
        <TransactionsTable transactions={MOCK_TRANSACTIONS}/>
    </div>
  )
}

export default Transactions;
