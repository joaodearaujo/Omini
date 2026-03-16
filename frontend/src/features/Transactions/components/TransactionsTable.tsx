
import type { TableDataProps, TransactionsProps } from "../Transactions.type";
import { UtensilsCrossed, HeartPlus, Bus, Lightbulb, Armchair} from 'lucide-react'

const TableData = ({data, style}: TableDataProps) => {

  return (
      <td className={`px-2 py-4 font-[400] text-[#AEAEAE] text-start whitespace-nowrap truncate`}
      style={style}><span className="captalize font-light text-[16px] ">{data}</span></td>
  )
}

const TransactionsTable = ({transactions}: TransactionsProps) => {

  const CATEGORY_MAP: Record<string, React.ElementType> = {
  food: UtensilsCrossed,
  health: HeartPlus,
  transport: Bus,
  essentials: Lightbulb,
  lifestyle: Armchair
};
  
  const HEADERS = ['receiver','category', 'date', 'amount'];

  return (
      <table className="w-full h-full border-collapse table-fixed">
        <thead className="sticky">
          {HEADERS.map((item) => {
            return (
              <th key={`${item}`} className="font-[400] text-start vertical-align px-2 py-1 capitalize text-[#AEAEAE]">{item}</th>
            )
          })} 
        </thead>

        <tbody>
            {transactions.map((transaction) => {

              const Icon = CATEGORY_MAP[transaction.category];

              return (
              <tr key={`${transaction.id}`} className="border-b-1 border-black/10">

                <TableData  data={`${transaction.type}`}/>
                <TableData  data={`${transaction.date}`}/>
                <TableData  style={{color:"#404040", fontWeight:600}} data={`R$ ${transaction.amount}`}/>
              </tr>
              )
            })}
        </tbody>
      </table>
  )
}

export default TransactionsTable;
