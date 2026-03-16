import type { ProgressBarProps } from "./ProgressBar.type"

const STYLE = {
  track: 'flex w-full h-[12px] items-center justify-start ] rounded-full  bg-[#F1F1F1]',
  indicator:'h-[12px] rounded-full bg-[#a9d0e9] transition-all duration-1200 ease-in-out',
}

const Bar = ({limit, limitUsage}: ProgressBarProps) => {

  const usage = limit > 0 ? Math.round((limitUsage / limit ) * 100) : 0;

  return (
    <div className={STYLE.track}>
        <div className={STYLE.indicator}
            style={{ width: `${usage}%`}}
            role="progressbar">
              
        </div>  
    </div>
  )
}

export default Bar
