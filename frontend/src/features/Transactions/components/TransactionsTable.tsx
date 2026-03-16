

import type { TableDataProps, TransactionsProps } from "../Transactions.type";
import { UtensilsCrossed, HeartPlus, Bus, Lightbulb, Armchair} from 'lucide-react'

  const CATEGORY_MAP: Record<string, React.ElementType> = {
  Food: UtensilsCrossed,
  Health: HeartPlus,
  Transport: Bus,
  Essentials: Lightbulb,
  Lifestyle: Armchair
};

const HEADERS = [
  {name: 'receiver', width: 'w-[240px]', align: 'text-start'},
  {name: 'category', width: 'w-[120px]', align: 'text-start'},
  {name: 'date', width: 'w-[120px]', align: 'text-start'},
  {name: 'value', width: 'w-[120px]', align: 'text-end'},
];


const TableData = ({data, style, className = 'text-start'}: TableDataProps & {className?: string}) => {

  return (
      <td className={`px-2 py-4 font-[400] text-[#AEAEAE] align-middle whitespace-nowrap truncate ${className}`}
      style={style}>{data}</td>
  )
}

const TransactionsTable = ({transactions}: TransactionsProps) => {

  return (
      <table className="w-full h-full border-collapse table-fixed">

        <thead className="sticky top-0 z-10 bg-white ">
          <tr className="">
            {HEADERS.map((item) => {
            return (
              <th key={`${item.name}`} className={`font-[400] ${item.width} ${item.align} px-2 py-1 capitalize text-[#AEAEAE]`}>{item.name}</th>
            )
          })} 
          </tr>
        </thead>

        <tbody>
            {transactions.map((transaction) => {

              const Icon = CATEGORY_MAP[transaction.category];

              return (
              <tr key={`${transaction.id}`} className="border-b-1 border-black/10" >
                  
                <td className="px-2 py-4 ">
                  <div className="flex items-center gap-2 justify-start">
                    <span className="p-1 rounded-lg bg-[#e5e5e5]">
                     <Icon size={18}/>
                    </span>
                  
                    <span className="whitespace-nowrap text-[#404040] capitalize">{`${transaction.receiver}`}</span>
                  </div>
                </td>

                <TableData  data={`${transaction.category}`}/>
                <TableData  data={`${transaction.date}`}/>
                <TableData  style={{color:"#404040"}} className="text-end" data={`R$ ${transaction.amount}`}/>
              </tr>
              )
            })}
        </tbody>
      </table>
  )
}

export default TransactionsTable;
