import ProgressBar from "../../../components/ui/ProgressBar/ProgressBar"
import type { PaymentLimitProps } from "../Cards.type"
import DataRow from "../../../components/ui/DataRow/DataRow"

const STYLE = {
  wrapper: 'flex flex-col w-full max-w-[360px] items-center gap-4 justify-between',
}

const labelData = 'Payment Limit'

const PaymentLimit = ({limitUsage = 0, totalLimit = 0}: PaymentLimitProps) => {

  const  formatedValue = `R$ ${limitUsage} / R$ ${totalLimit}`
  
  return (
    <div className={STYLE.wrapper}>
        <ProgressBar indicator={totalLimit} track={limitUsage} color="#197BBD"/>
        <DataRow label={labelData} value={formatedValue}/>
    </div>

     
  )
}

export default PaymentLimit
