import type { TransactionItemProps } from "../Transacitions.type";
import {  HelpCircle } from "lucide-react";
import { CATEGORY_MAP } from "../../../utils/CategoryMap";

const STYLE = {
    conatainer: 'w-full h-[60px] flex justify-between items-center p-4 bg-white hover:bg-[#f9fafb] rounded-xl cursor-default',
    icon: {iconSize: 20, iconBackground: 'bg-[#f3f4f6] w-[35px] h-[35px] rounded-full flex items-center justify-center', iconClass: 'text-[#404040]'},
    receiver: 'font-[400]',
    info: 'font-light text-[#6a7282] text-[14px]',
    status: '' ,
    amount: 'font-medium text-[#404040]',
}

const STATUS_VARIANTS = {
  Completed: { bg: 'bg-[#dbfce7]', dot: 'bg-[#008236]', text: 'text-[#008236]' },
  Pending:   { bg: 'bg-[#fef9c3]', dot: 'bg-[#ca8a04]', text: 'text-[#ca8a04]' },
  Canceled:  { bg: 'bg-[#fee2e2]', dot: 'bg-[#dc2626]', text: 'text-[#dc2626]' },
};

const TransactionItem = ({transaction, bank}: TransactionItemProps) => {

  
  const Icon = CATEGORY_MAP[transaction.category].icon || HelpCircle;

  const status = STATUS_VARIANTS[transaction.status]

  return (
    <article className={STYLE.conatainer}>
      <div className={`flex w-fit items-center justify-between gap-4`}>
          <span className={STYLE.icon.iconBackground}>
              <Icon size={STYLE.icon.iconSize} className={STYLE.icon.iconClass} />
          </span>

          <div className="flex flex-col">
            <span className={STYLE.receiver}>{transaction.receiver}</span>

            <span className={STYLE.info}>{`${transaction.category} • ${transaction.date} • ${bank}`}</span>
          </div>
      </div>

      <div className="flex w-[200px] items-center justify-between gap-2">

        <div className={`flex items-center justify-between gap-2 px-2 rounded-2xl ${status.bg}`}>
          <div className={`w-[6px] h-[6px] rounded-full ${status.dot}`}></div>
          <span className={`capitalize font-[400] text-[12px] ${status.text}`}>{transaction.status}</span>
        </div>

        <span className={STYLE.amount}>{`R$ ${transaction.amount}`}</span>
      </div>
    </article>
)
}

export default TransactionItem

