import { CATEGORY_MAP } from "../../../../../utils/CategoryMap";
import CategoryStats from "./components/CategoryStats";
import { useTransactionStats } from "../../../../../hooks/useTransactionsStats";
import type { TransactionsProps } from "../Transactions/TransactionsHistory.type";
import FloatingCard from "../../../../ui/FloatingCard/FloatingCard";
import Fallback from "../../../../ui/Fallback/Fallback";
import { ChartBarBig } from "lucide-react";


const STYLE = {container: 'w-full h-full flex flex-col overflow-y-auto overflow-hidden'};

const OutcomeStatistics = ({ transactions }: TransactionsProps) => {
  
const { stats, totalCount } = useTransactionStats({ transactions });

  if (transactions.length === 0 ) { 
    return <Fallback title="Outcome Statistics" icon={ChartBarBig} text="Your furture statics will appear here."/>
  }

  return (
    <FloatingCard title="Outcome Statistics" style={{flex: 1}}> {}
      <article className={STYLE.container}>
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
      </article>
    </FloatingCard>
  );
};

export default OutcomeStatistics;

