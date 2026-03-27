import type { TransactionsTableProps } from "../Transactions.type";
import TableData from "./TableData";
import { CATEGORY_MAP } from "../../../../../utils/CategoryMap";
import TableHead from "./TableHead";

const TransactionsTable = ({transactions}: TransactionsTableProps) => {

  return (
      <table className="w-full h-full border-collapse table-fixed">
        <TableHead/>

        <tbody>
            {transactions.map((transaction) => {
              return (
              <tr key={transaction.id} className="p-4 bg-white hover:bg-[#f9fafb] rounded-2xl cursor-default" >    
                <TableData  style={{color:"#404040"}} Icon={CATEGORY_MAP[transaction.category].icon} data={transaction.receiver}/>
                <TableData  data={transaction.category}/>
                <TableData  data={transaction.date}/>
                <TableData  style={{color:"#404040", justifySelf:'end'}} data={`R$ ${transaction.amount}`}/>
              </tr>
              )
            })}
        </tbody>
      </table>
  )
}

export default TransactionsTable;
