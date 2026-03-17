import type { DataRowProps } from "./DataRow.type"

const STYLE = {
    wrapper:'w-full h-full flex justify-between gap-2',
    label:'text-[#AEAEAE] font-light',
    value:'text-[#404040] font-medium',
}
const DataRow = ({label= 'Label', value=''}: DataRowProps) => {

  return (
      <div className={STYLE.wrapper}>
        <p className={STYLE.label}>{label}</p>
        <p className={STYLE.value}>{value}</p>
      </div>
  );
}

export default DataRow;