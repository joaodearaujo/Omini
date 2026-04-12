import type { TransactionsTableProps } from "../TransactionsHistory.type";
import TableData from "./TableData";
import { CATEGORY_MAP } from "../../../../../../utils/CategoryMap";
import TableHead from "./TableHead";

const TransactionsTable = ({transactions}: TransactionsTableProps) => {

  return (
      <table className="h-full w-full border-collapse table-fixed overflow-y">
        <TableHead/>
        <tbody>
            {transactions.map((transaction) => {
              return (
              <tr key={transaction.id} className="bg-white hover:bg-transactionHover transition-all duration-500 rounded-2xl border-b-1 border-black/8 cursor-default" >    
                <TableData  style={{color:"var(--text-primary-color)" }} Icon={CATEGORY_MAP[transaction.category].icon} data={transaction.receiver}/>
                <TableData  data={transaction.category}/>
                <TableData  data={transaction.date}/>
                <TableData  style={{color:"var(--text-primary-color)", justifySelf:'end'}} data={`R$ ${transaction.amount}`}/>
              </tr>
              )
            })}
        </tbody>
      </table>
  )
}

export default TransactionsTable;
