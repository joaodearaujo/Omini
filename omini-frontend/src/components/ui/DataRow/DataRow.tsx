interface DataRowProps {
    label: string;
    value: string;
}

const STYLE = {
    wrapper:'w-full h-full flex justify-between gap-2',
    label:'text-secondary font-light text-small',
    value:'text-primary font-regular text-small',
}

const DataRow = ({label= 'Label', value='Value'}: DataRowProps) => {

  return (
      <div className={STYLE.wrapper}>
        <dt className={STYLE.label}>{label}</dt>
        <dd className={STYLE.value}>{value}</dd>
      </div>
  );
}

export default DataRow;