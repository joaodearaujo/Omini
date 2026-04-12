import ProgressBar from "../../../../../ui/ProgressBar/ProgressBar";
import DataRow from "../../../../../ui/DataRow/DataRow";

const STYLE = {wrapper: 'flex flex-col w-full max-w-[360px] items-center gap-1 justify-between'};

export interface PaymentLimitProps {
    totalLimit: number;
    limitUsage: number;
}

const PAYMENT_LIMIT_CONFIG = {
  label: 'Payment Limit',
}

const PaymentLimit = ({limitUsage = 0, totalLimit = 0}: PaymentLimitProps) => {
  
  const  formatedValue = `R$ ${limitUsage} / R$ ${totalLimit}`
  
  return (
    <div className={STYLE.wrapper}>
        <ProgressBar indicator={totalLimit} track={limitUsage}/>
        <DataRow label={PAYMENT_LIMIT_CONFIG.label} value={formatedValue}/>
    </div>
  )
};

export default PaymentLimit;
