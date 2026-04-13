import type { TransactionItemProps } from "../Transacitions.type";
import { CATEGORY_MAP } from "../../../../utils/CategoryMap";
import useFormatNumber from "../../../../hooks/useFormatNumber";

const STYLE = {
    conatainer: 'w-full h-[60px] flex justify-between items-center p-4 bg-white hover:bg-transactionHover transition-all duration-500 rounded-xl cursor-default',
    icon: {iconSize: 20, iconBackground: 'bg-iconBg w-[35px] h-[35px] rounded-full flex items-center justify-center shadow-md', iconClass: 'text-primary'},
    receiver: 'text-small',
    info: 'text-extraSmall text-secondary',
    status: '' ,
    amount: 'text-small text-strong',
}

const STATUS_VARIANTS = {
  Completed: { bg: 'bg-status-completed-secondary', dot: 'bg-status-completed-primary', text: 'text-status-completed-primary'},
  Pending: { bg: 'bg-status-pending-secondary', dot: 'bg-status-pending-primary', text: 'text-status-pending-primary'},
  Canceled: { bg: 'bg-status-canceled-secondary', dot: 'bg-status-canceled-primary', text: 'text-status-canceled-primary'},

};

const TransactionItem = ({transaction, bank}: TransactionItemProps) => {

  const status = STATUS_VARIANTS[transaction.status]
  const Icon = CATEGORY_MAP[transaction.category].icon
  const { format } = useFormatNumber();

  return (
    <article className={STYLE.conatainer}>
      <div className={`flex w-fit items-center justify-between gap-4`}>
          <span className={STYLE.icon.iconBackground}>
            <Icon size={20}/>
          </span>

          <div className="flex flex-col">
            <span className={STYLE.receiver}>{transaction.receiver}</span>

            <span className={STYLE.info}>{`${transaction.category} • ${transaction.date} • ${bank}`}</span>
          </div>
      </div>

      <div className="flex w-[200px] items-center justify-between gap-2">

        <div className={`flex items-center justify-between gap-2 px-2 rounded-2xl ${status.bg}`}>
          <div className={`w-[6px] h-[6px] rounded-full ${status.dot}`}></div>
          <span className={`capitalize text-extraSmall ${status.text}`}>{transaction.status}</span>
        </div>

        <span className={STYLE.amount}>-{`${format(transaction.amount)}`}</span>
      </div>
    </article>
)
} 

export default TransactionItem

