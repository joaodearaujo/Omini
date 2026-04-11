import type { BalanceItemsProps } from "../Cards.type";
import useCountUp from "../../../../../../hooks/useCountUp";

const STYLE = {
    container: 'flex w-full h-fit flex-col gap-1 items-end',
    value: 'truncate leading-none w-full tabular-nums text-end',
    label: '',
};

const BalanceItem = ({label = 'Balance', value = 0, isMain = false, color = 'text-#404040' } : BalanceItemsProps) => {

  const options = {prefix: 'R$'}
  const { countRef } = useCountUp(value, options);

  return (
      <div className={STYLE.container}>
          <span ref={countRef} className={`${color} ${STYLE.value} ${isMain ? 'text-[46px] font-medium' : 'text-[24px] font-medium'}`}>0</span>
          <p className={`text-[#807c7c] font-light ${isMain ? 'text-[18px]' : 'text-[16px]'}`}>{label}</p>
      </div>
  )
};

export default BalanceItem;