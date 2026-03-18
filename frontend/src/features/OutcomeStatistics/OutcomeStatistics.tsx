import type { TransactionsTableProps } from "../Transactions/Transactions.type";
import { CATEGORY_MAP } from "../../Utilities/CategoryMap";
import CategoryStats from "./components/CategoryStats";
const STYLE = {
  container: 'w-full h-full max-h-[290px] flex flex-col gap-4 overflow-y-auto overflow-hidden px-2',
};


const OutcomeStatistics = ({ transactions }: TransactionsTableProps) => {
    
  const stats = transactions.reduce<Record<string, number>>((categoryObject, item) => {
    const categoryName = item.category;
    categoryObject[categoryName] = (categoryObject[categoryName] || 0) + 1;
    return categoryObject;
  }, {});

  const totalCount = transactions.length;
  
  return (
    <div className={STYLE.container}>
      {Object.entries(stats).map(([categoryName, count]) => (
        <CategoryStats 
          key={categoryName}
          track={count} 
          indicator={totalCount}
          category={categoryName} 
          icon={CATEGORY_MAP[categoryName].icon} 
          bgColor={CATEGORY_MAP[categoryName].bgColor}
          iconColor={CATEGORY_MAP[categoryName].iconColor}
           
        />
      ))}
    </div>
  );
};

export default OutcomeStatistics;

