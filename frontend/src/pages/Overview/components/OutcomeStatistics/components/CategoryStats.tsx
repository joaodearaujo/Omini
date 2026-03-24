import type { CategoryStatsProps } from "../OutcomeStatistics.type";
import { HelpCircle } from "lucide-react";
import ProgressBar from "../../../../../components/ui/ProgressBar/ProgressBar";

const CategoryStats = ({category, icon, bgColor, iconColor, track, indicator }: CategoryStatsProps) => {
  const percentage = indicator > 0 ? Math.round((track / indicator) * 100) : 0;
  
  const LucideIcon = icon || HelpCircle;

  return (
    <div className="flex items-center gap-3">
      <div className="flex h-fit items-center justify-center">
        <div className={`flex items-center justify-center h-full w-full min-w-[20px] min-h-[20px] p-2 rounded-lg`}
              style={{backgroundColor:`${bgColor}`}}
        >
          <LucideIcon size={20} className={iconColor} />
        </div>
      </div>

      <div className="flex-1">
        <div className="w-full flex items-center gap-6">
          <ProgressBar indicator={indicator} track={track} color={bgColor}/>
          <strong className="text-[24px] font-medium text-[#696969]">{percentage}%</strong>
        </div>
        <small className="text-[#AEAEAE] font-[300] text-[14px] capitalize w-fit">{category}</small>
      </div>
    </div>
  );
};


export default CategoryStats
