import type { BalanceItemsProps } from "../Cards.type"

const BalanceItem = ({label, value, isMain, color} : BalanceItemsProps) => {


  return (
      <div className="flex w-full flex-1 max-w-full flex-col items-end">
        <p className={`${color} ${isMain ? 'text-[46px] font-semibold' : 'text-[24px] font-medium'}`}>${value ?? 0}</p>
        <p className={` text-[#807c7c] font-light ${isMain ? 'text-[18px] ' : 'text-[16px]'}`}>{label}</p>
      </div>
  )
}

const BalanceStatus = () => {
  return (
    <div className="flex w-full h-autoflex-1 flex-col gap-3 items-end px-2">
      <BalanceItem label="Current Balance" value={23.234} isMain color="text-[#197bbd]"/>
      <BalanceItem label="Income" value={3.344} color="text-[#439a86]"/>
      <BalanceItem label="Outcome" value={784} color="text-[#bb3340]"/>      
    </div>
  )
}

export default BalanceStatus
