import type { TransactionItemProps } from "../Mycards.type";
import { GlassWaterIcon } from "lucide-react";

const STYLE = {
    conatainer: 'w-full h-[60px] flex justify-between items-center px-4 bg-white hover:bg-[#f9fafb] rounded-xl cursor-default',
    icon: {iconSize: 20, iconBackground: 'bg-[#f3f4f6] w-[50px] h-[50px] rounded-full p-2 flex items-center justify-center', iconClass: 'text-[#404040]'},
    receiver: 'font-medium',
    info: 'font-light',
    amount: 'font-medium',
}

const TransactionItem = ({transaction}: TransactionItemProps) => {

  const Icon = GlassWaterIcon;

  return (
    <div className={STYLE.conatainer}>
      <div className="flex gap-4">

          <span className={STYLE.icon.iconBackground}>
              <Icon size={STYLE.icon.iconSize} className={STYLE.icon.iconClass} />
          </span>

          <div className="flex flex-col">
            <strong className={STYLE.receiver}>{transaction.receiver}</strong>

            <small className={STYLE.info}>{`${transaction.category} • ${transaction.date}`}</small>
          </div>
      </div>

      <span className={STYLE.amount}>{`R$ ${transaction.amount}`}</span>
    </div>
)
}

export default TransactionItem

