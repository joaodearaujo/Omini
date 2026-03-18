import type { CategoryStatsProps } from "../OutcomeStatistics.type";
import { HelpCircle } from "lucide-react";
import ProgressBar from "../../../components/ui/ProgressBar/ProgressBar";

const CategoryStats = ({category, icon, bgColor, iconColor, track, indicator }: CategoryStatsProps) => {
  const percentage = indicator > 0 ? Math.round((track / indicator) * 100) : 0;
  
  const LucideIcon = icon || HelpCircle;

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center justify-center p-2">
        <span className={`flex items-center justify-center h-full w-full min-w-[30px] min-h-[30px] p-2 rounded-lg`}
              style={{backgroundColor:`${bgColor}`}}
        >
          <LucideIcon size={26} className={iconColor} />
        </span>
      </div>

      <div className="flex-1">
        <div className="w-full flex items-center gap-6">
          <ProgressBar indicator={indicator} track={track} color={bgColor}/>
          <p className="text-[24px] font-medium text-[#696969]">{percentage}%</p>
        </div>
        <p className="text-[#AEAEAE] font-[300] capitalize w-fit">{category}</p>
      </div>
    </div>
  );
};


export default CategoryStats
