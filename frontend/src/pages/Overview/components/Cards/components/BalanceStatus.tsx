import type { BalanceStatusProps } from "../Cards.type";
import type { BalanceItemsProps } from "../Cards.type";
import type { BalanceItemsConfig } from "../Cards.type";

const STYLE = {
    balanceWrapper: 'flex flex-col flex-1 h-full gap-4 items-end',
    itemsWrapper: 'flex w-full h-fit flex-col gap-1 items-end',
}

const ITEMS: BalanceItemsConfig[] = [
  {key:'balance', label: 'Current Balance', color: 'text-[#197bbd]', isMain: true},
  {key:'income', label: 'Income', color: 'text-[#439a86]', isMain: false},
  {key:'outcome', label: 'Outcome', color: 'text-[#bb3340]', isMain: false},
] as const;

const BalanceItem = ({label = 'Balance', value = 0, isMain = false, color = 'text-#404040' } : BalanceItemsProps) => {

  return (
      <div className={STYLE.itemsWrapper}>
        <strong className={`${color} leading-none ${isMain ? 'text-[46px] font-semibold' : 'text-[24px] font-medium'}`}>R${value}</strong>
        <small className={`text-[#807c7c] font-light ${isMain ? 'text-[18px]' : 'text-[16px]'}`}>{label}</small>
      </div>
  )
}

const BalanceStatus = ({ currentCard }: BalanceStatusProps) => {
  return (
    <div className={STYLE.balanceWrapper}>
      {ITEMS.map((item => (
          <BalanceItem  key={item.key}
                        label={item.label}
                        value={currentCard[item.key] ?? 0}
                        color={item.color}
                        isMain={item.isMain}      
          />
        )
      ))}
    </div>
  );
};

export default BalanceStatus;