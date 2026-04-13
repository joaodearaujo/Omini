
interface ProgressBarProps {
    track: number;
    indicator: number;
    color?: string;
}

const STYLE = {
  track: 'flex w-full h-[12px] items-center justify-start rounded-full bg-progressBar',
  indicator:'h-[12px] rounded-full ransition-all duration-1000 ease-in-out outline-none',
}

const ProgressBar = ({track, indicator, color = "#197BBD"}: ProgressBarProps) => {
  const usage = track > 0 ? Math.round((track / indicator ) * 100) : 0;

  return (
    <div className={STYLE.track}>
        <div  className={STYLE.indicator}
              style={{ width: `${usage}%`, backgroundColor: color}}
              role="progressbar">
        </div>  
    </div>
  )
}

export default ProgressBar;
