import type { TransactionsProps } from "../Transactions.type";
import TableData from "./TableData";
import { CATEGORY_MAP } from "../../../Utilities/CategoryMap";
import TableHead from "./TableHead";

const TransactionsTable = ({transactions}: TransactionsProps) => {

  return (
      <table className="w-full h-full border-collapse table-fixed">
        <TableHead/>

        <tbody>
            {transactions.map((transaction) => {
              return (
              <tr key={transaction.id} className="border-b border-black/10" >    
                <TableData  style={{color:"#404040"}} Icon={CATEGORY_MAP[transaction.category]} data={transaction.receiver}/>
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
