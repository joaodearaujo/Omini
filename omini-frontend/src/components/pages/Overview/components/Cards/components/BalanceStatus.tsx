import type { BalanceStatusProps } from "../Cards.type";
import type { BalanceItemsConfig } from "../Cards.type";
import BalanceItem from "./BalanceItem";

const STYLE = {
    balanceWrapper: 'flex flex-col flex-1 max-w-full min-w-0 gap-4 items-end pr-4',
    itemsWrapper: 'flex w-full h-fit flex-col gap-1 items-end',
}

const ITEMS: BalanceItemsConfig[] = [
  {key:'balance', label: 'Current Balance', color: 'text-[#197bbd]', isMain: true},
  {key:'income', label: 'Income', color: 'text-[#439a86]', isMain: false},
  {key:'outcome', label: 'Outcome', color: 'text-[#bb3340]', isMain: false},
] as const;

const BalanceStatus = ({ currentCard }: BalanceStatusProps) => (

    <section className={STYLE.balanceWrapper}>
      {ITEMS.map(item => (
          <BalanceItem  key={item.key}
                        label={item.label}
                        value={currentCard[item.key] ?? 0}
                        color={item.color}
                        isMain={item.isMain}      
          />
        )
      )}
    </section>
  );

export default BalanceStatus;