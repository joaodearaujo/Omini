import type { BalanceItemsProps } from "../Cards.type"
import type { CreditCardProps } from "../../../components/ui/CreditCard/CreditCard.type"
import DisableButton from "./DisableButton"

const BalanceItem = ({label, value, isMain, color} : BalanceItemsProps) => {


  return (
      <div className="flex w-full flex-1 max-w-full flex-col gap-1 items-end">
        <p className={`${color} leading-none ${isMain ? 'text-[46px] font-semibold' : 'text-[24px] font-medium'}`}>${value ?? 0}</p>
        <p className={` text-[#807c7c] font-light ${isMain ? 'text-[18px] ' : 'text-[16px]'}`}>{label}</p>
      </div>
  )
}

const BalanceStatus = ({card}: CreditCardProps) => {
  return (
    <div className="flex flex-col w-full flex-1 gap-6 items-end">
      <BalanceItem label="Current Balance" value={card.balance} isMain color="text-[#197bbd]"/>
      <BalanceItem label="Income" value={card.income} color="text-[#439a86]"/>
      <BalanceItem label="Outcome" value={card.outcome} color="text-[#bb3340]"/>      
      <DisableButton/>

    </div>
  )
}

export default BalanceStatus
