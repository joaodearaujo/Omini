import type { BarProps } from "./Bar.type"

const Bar = ({limit, limitUsage}: BarProps) => {


  const usage = Math.round((limitUsage / limit ) * 100)


  return (
    <div className="w-full h-[12px] rounded-full flex bg-[#F1F1F1] items-center justify-start">
        <div className={'h-[12px] rounded-full bg-[#197BBD] transition-all duration-1000 ease-in-out'}
            style={{ width: `${usage}%` }}>
        </div>  
    </div>
  )
}

export default Bar
