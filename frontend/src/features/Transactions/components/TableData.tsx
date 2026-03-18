import type { TableDataProps } from "../Transactions.type"

const STYLE = {
    tableData: 'px-2 py-3 font-[400] text-[#AEAEAE] text-end align-middle whitespace-nowrap truncate',
    wrapper: 'flex items-center gap-2 w-fit justify-self-star',
    iconWrapper: 'p-1 rounded-lg bg-[#e5e5e5] shadow-md',
}

const TableData = ({data, style, Icon, className = 'text-start'}: TableDataProps) => {

  return (
    <td className={`${STYLE.tableData} ${className}`}>
        <span className={STYLE.wrapper} style={style}>
            {Icon && (       
                <span className={STYLE.iconWrapper}>
                    <Icon size={18} className="text-[#404040]"/>
                </span>
            )}
            {data}
        </span>
    </td>
  )
}

export default TableData;