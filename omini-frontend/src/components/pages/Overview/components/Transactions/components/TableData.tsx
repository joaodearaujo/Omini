import useFadeIn from "../../../../../../hooks/useFadeIn"
import type { TableDataProps } from "../TransactionsHistory.type"

const STYLE = {
    tableData: 'py-2 align-middle',
    icon: {iconSize: 18, iconClass: 'text-primary'},
    wrapper: 'flex items-center text-small gap-2 p-2 font-[400] font-light w-fit text-secondary justify-self-start transition-all duration-500 whitespace-nowrap truncate',
    iconWrapper: 'shadow-md p-1 rounded-lg bg-iconBg'
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