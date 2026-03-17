import type { ProgressBarProps } from "./ProgressBar.type"

const STYLE = {
  track: 'flex w-full h-[12px] items-center shadow-sm justify-start ] rounded-full  bg-[#F1F1F1]',
  indicator:'h-[12px] rounded-full bg-[#197BBD] transition-all duration-1200 ease-in-out',
}

const ProgressBar = ({track, indicator}: ProgressBarProps) => {

  const usage = track > 0 ? Math.round((track / indicator ) * 100) : 0;

  return (
    <div className={STYLE.track}>
        <div className={STYLE.indicator}
            style={{ width: `${usage}%`}}
            role="progressbar">
        </div>  
    </div>
  )
}

export default ProgressBar;
