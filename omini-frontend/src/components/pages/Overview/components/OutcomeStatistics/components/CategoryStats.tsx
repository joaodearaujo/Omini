import type { CategoryStatsProps } from "../OutcomeStatistics.type";
import { HelpCircle } from "lucide-react";
import ProgressBar from "../../../../../ui/ProgressBar/ProgressBar";
import useCountUp from "../../../../../../hooks/useCountUp";

const STYLE = {
  container: 'flex items-center gap-4',
  iconBackground: 'flex items-center justify-center h-full w-full min-w-[20px] min-h-[20px] p-2 rounded-lg',
  contentWrapper: 'w-full h-full flex flex-col',
  percentage: 'text-[24px] font-[400]  text-[#696969] tabular-nums min-w-[64px] text-end',
  category: 'text-[#AEAEAE] font-[300] text-[14px] capitalize w-fit',
}

const CategoryStats = ({category, icon, bgColor, iconColor, barColor, track, indicator }: CategoryStatsProps) => {

  
  const percentage = indicator > 0 ? Math.round((track / indicator) * 100) : 0;

  const options = {
    suffix: '%'
  }

  const { countRef } = useCountUp(percentage, options)
  
  const LucideIcon = icon || HelpCircle;

  return (
    <div className={STYLE.container}>
      <div className="flex  items-center justify-center">
        <span className={STYLE.iconBackground}
              style={{backgroundColor:`${bgColor}`}}
        >
          <LucideIcon size={20} className={iconColor} />
        </span>
      </div>

      <div className={STYLE.contentWrapper}>
        <div className="w-full flex items-center gap-4">
          <ProgressBar indicator={indicator} track={track} color={barColor}/>
          <span ref={countRef} className={STYLE.percentage}>0</span>
        </div>

        <h1 className={STYLE.category}>{category}</h1>
      </div>
    </div>
  );
};


export default CategoryStats
