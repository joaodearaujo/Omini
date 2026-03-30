import type { BalanceItemsProps } from "../Cards.type";
import useCountUp from "../../../../../hooks/useCountUp";

const STYLE = {
    itemsWrapper: 'flex w-full h-fit flex-col gap-1 items-end',
}

const BalanceItem = ({label = 'Balance', value = 0, isMain = false, color = 'text-#404040' } : BalanceItemsProps) => {

  const options = {
    prefix: 'R$'
  }

  const { countRef } = useCountUp(value, options);

  return (
      <div className={STYLE.itemsWrapper}>
        <strong ref={countRef} className={`${color} truncate leading-none w-full tabular-nums text-end ${isMain ? 'text-[46px] font-[500]' : 'text-[24px] font-medium'}`}>0</strong>
        <small className={`text-[#807c7c] font-light ${isMain ? 'text-[18px]' : 'text-[16px]'}`}>{label}</small>
      </div>
  )
}

export default BalanceItem