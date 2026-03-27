import { CATEGORY_MAP } from "../../../../utils/CategoryMap";
import CategoryStats from "./components/CategoryStats";
import { useTransactionStats } from "../../../../hooks/useTransactionsStats";
import type { TransactionsProps } from "../Transactions/Transactions.type";
import FloatingCard from "../../../../components/ui/FloatingCard/FloatingCard";
const STYLE = {
  container: 'w-full max-h-[360px] flex flex-col overflow-y-auto overflow-hidden',
};


const OutcomeStatistics = ({transactions}: TransactionsProps) => {
    
const { stats, totalCount } = useTransactionStats({transactions});

  return (
       <FloatingCard title="Outcome Statistics">
    <div className={STYLE.container}>
      {Object.entries(stats).map(([categoryName, count]) => (
        <CategoryStats 
          key={categoryName}
          track={count} 
          indicator={totalCount}
          category={categoryName} 
          barColor={CATEGORY_MAP[categoryName].progressBarColor} 
          icon={CATEGORY_MAP[categoryName].icon} 
          bgColor={CATEGORY_MAP[categoryName].bgColor}
          iconColor={CATEGORY_MAP[categoryName].iconColor}
        />
      ))}
    </div>
    </FloatingCard>
  );
};

export default OutcomeStatistics;

