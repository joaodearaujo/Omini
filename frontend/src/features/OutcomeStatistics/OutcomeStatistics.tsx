import type { TransactionsProps } from "../Transactions/Transactions.type";
import type { OutcomePercentageProps } from "./OutcomeStatistics.type";
import { HelpCircle } from "lucide-react";
import ProgressBar from "../../components/ui/ProgressBar/ProgressBar";
import { CATEGORY_MAP } from "../../Utilities/CategoryMap";

const STYLE = {
  container: 'w-full h-full max-h-[290px] flex flex-col gap-4 overflow-y-auto overflow-hidden px-2',
};

const OutcomePercentage = ({category, icon, bgColor, iconColor, track, indicator }: OutcomePercentageProps) => {
  const percentage = indicator > 0 ? Math.round((track / indicator) * 100) : 0;
  
  const LucideIcon = icon || HelpCircle;

  return (
    <div className="flex items-center gap-4">
      <div className="flex-none flex items-center justify-center">
        <span className={`flex items-center justify-center h-[50px] w-[50px] shadow-sm rounded-lg`}
        style={{backgroundColor:`${bgColor}`}}>
          <LucideIcon size={28} className={iconColor} />
        </span>
      </div>

      <div className="flex-1">
        <div className="w-full flex items-center gap-6">
          <ProgressBar indicator={indicator} track={track}/>
          <p className="text-[24px] font-medium text-[#696969]">{percentage}%</p>
        </div>
        <p className="text-[#AEAEAE] font-[300] capitalize">{category}</p>
      </div>
    </div>
  );
};

const OutcomeStatistics = ({ transactions }: TransactionsProps) => {
    
  const stats = transactions.reduce<Record<string, number>>((categoryObject, item) => {
    const categoryName = item.category;
    categoryObject[categoryName] = (categoryObject[categoryName] || 0) + 1;
    return categoryObject;
  }, {});

  const totalCount = transactions.length;
  
  return (
    <div className={STYLE.container}>
      {Object.entries(stats).map(([categoryName, count]) => (
        <OutcomePercentage 
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

