import type { TableDataProps } from "../Transactions.type"

const STYLE = {
    tableData: 'px-2 py-3 font-[400] text-[#AEAEAE] text-end align-middle whitespace-nowrap truncate',
    icon: {iconSize: 18, iconClass: 'text-[#404040]'},
    wrapper: 'flex items-center gap-2 w-fit justify-self-star',
    iconWrapper: 'p-1 rounded-lg bg-[#e5e5e5] shadow-md',
}

const TableData = ({data, style, Icon, className = 'text-start'}: TableDataProps) => {

  return (
    <td className={`${STYLE.tableData} ${className}`}>
        <span className={STYLE.wrapper} style={style}>
            {Icon && (       
                <div className={STYLE.iconWrapper}>
                    <Icon size={STYLE.icon.iconSize} className={STYLE.icon.iconClass}/>
                </div>
            )}
            {data}
        </span>
    </td>
  )
}

export default TableData;