interface DataRowProps {
    label: string;
    value: string;
}

const STYLE = {
    wrapper:'w-full h-full flex justify-between gap-2',
    label:'text-[#AEAEAE] font-light text-[16px]',
    value:'text-[#404040] font-regular text-[16px]',
}

const DataRow = ({label= 'Label', value='Value'}: DataRowProps) => {

  return (
      <div className={STYLE.wrapper}>
        <small className={STYLE.label}>{label}</small>
        <small className={STYLE.value}>{value}</small>
      </div>
  );
}

export default DataRow;