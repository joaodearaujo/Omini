import type { TransactionItemProps } from "../Mycards.type";
import {  HelpCircle } from "lucide-react";
import { CATEGORY_MAP } from "../../../utils/CategoryMap";

const STYLE = {
    conatainer: 'w-full h-[60px] flex justify-between items-center p-4 bg-white hover:bg-[#f9fafb] rounded-xl cursor-default',
    icon: {iconSize: 20, iconBackground: 'bg-[#f3f4f6] w-[35px] h-[35px] rounded-full flex items-center justify-center', iconClass: 'text-[#404040]'},
    receiver: 'font-medium',
    info: 'font-light text-[#6a7282]',
    status: 'capitalize text-[#008236]',
    amount: 'font-medium text-[#404040]',
}

const TransactionItem = ({transaction}: TransactionItemProps) => {

  const Icon = CATEGORY_MAP[transaction.category].icon || HelpCircle;

  return (
    <div className={STYLE.conatainer}>
      <div className="flex w-fit items-center justify-between gap-4">
          <span className={STYLE.icon.iconBackground}>
              <Icon size={STYLE.icon.iconSize} className={STYLE.icon.iconClass} />
          </span>

          <div className="flex flex-col">
            <strong className={STYLE.receiver}>{transaction.receiver}</strong>

            <small className={STYLE.info}>{`${transaction.category} • ${transaction.date}`}</small>
          </div>
      </div>

      <div className="flex w-[200px] items-center justify-between gap-2">
        <div className="flex items-center justify-between gap-2 bg-[#dbfce7] px-2 rounded-2xl">
          <div className="w-[6px] h-[6px] bg-[#008236] rounded-full"></div>

          <small className={STYLE.status}>{transaction.status}</small>
        </div>

        <span className={STYLE.amount}>{`R$ ${transaction.amount}`}</span>
      </div>
    </div>
)
}

export default TransactionItem

