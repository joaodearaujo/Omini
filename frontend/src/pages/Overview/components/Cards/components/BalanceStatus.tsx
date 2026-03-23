import type { BalanceItemsProps } from "../Cards.type"

import type { BalanceStatusProps } from "../Cards.type";



const STYLE = {
    statusWrapper: 'flex flex-col flex-1 h-full gap-6 items-end',
    itemsWrapper: 'flex w-full flex-1 flex-col gap-1 items-end',
}

const BALANCE_CONFIG = {
  CURRENT: {label: 'Current Balance', color: 'text-[#197bbd]'},
  INCOME: {label: 'Income', color: 'text-[#439a86]'},
  OUTCOME: {label: 'Outcome Balance', color: 'text-[#bb3340]'},
 };

const BalanceItem = ({label = 'Balance', 
                      value = 0, 
                      isMain = false, 
                      color = 'text-#404040' } : BalanceItemsProps) => {

  return (
      <div className={STYLE.itemsWrapper}>
        <small className={`${color} leading-none  ${isMain ? 'text-[46px] font-semibold' : 'text-[24px] font-medium'}`}>R${value}</small>
        <small className={`text-[#807c7c] font-light ${isMain ? 'text-[18px]' : 'text-[16px]'}`}>{label}</small>
      </div>

  )

}

const BalanceStatus = ({ card }: BalanceStatusProps) => {
  return (
    <div className={STYLE.statusWrapper}>
      <BalanceItem 
        label={BALANCE_CONFIG.CURRENT.label} 
        value={card.balance} 
        isMain 
        color={BALANCE_CONFIG.CURRENT.color}
      />
      <BalanceItem 
        label={BALANCE_CONFIG.INCOME.label} 
        value={card.income} 
        color={BALANCE_CONFIG.INCOME.color}
      />
      <BalanceItem 
        label={BALANCE_CONFIG.OUTCOME.label} 
        value={card.outcome} 
        color={BALANCE_CONFIG.OUTCOME.color}
      />      
    </div>
  );
};

export default BalanceStatus;