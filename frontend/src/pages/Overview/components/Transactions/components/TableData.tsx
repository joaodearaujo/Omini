import useFadeIn from "../../../../../hooks/useFadeIn"
import type { TableDataProps } from "../TransactionsHistory.type"

const STYLE = {
    tableData: 'px-2 py-4 align-middle',
    icon: {iconSize: 18, iconClass: 'text-[#404040]'},
    wrapper: 'flex items-center gap-2 font-[400] font-light w-fit text-[#AEAEAE] justify-self-start transition-all duration-500 whitespace-nowrap truncate',
    iconWrapper: 'p-1 rounded-lg bg-[#f3f4f6]',
}

const TableData = ({data, style, Icon, className = 'text-start'}: TableDataProps) => {

    const { isVisible } = useFadeIn()

  return (
    <td className={`${STYLE.tableData} ${className}`}>
        <span className={`${STYLE.wrapper} ${isVisible ? 'opacity-100 translate-x-0 ' : 'opacity-0 -translate-x-1'}`} style={style}>
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