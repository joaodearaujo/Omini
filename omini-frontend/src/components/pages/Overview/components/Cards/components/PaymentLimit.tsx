import ProgressBar from "../../../../../ui/ProgressBar/ProgressBar";
import DataRow from "../../../../../ui/DataRow/DataRow";
import useFormatNumber from "../../../../../../hooks/useFormatNumber";

const STYLE = {wrapper: 'flex flex-col w-[80%] items-center gap-2 justify-between'};

export interface PaymentLimitProps {
    totalLimit: number;
    limitUsage: number;
}

const PAYMENT_LIMIT_CONFIG = {
  label: 'Payment Limit',
}

const PaymentLimit = ({limitUsage = 0, totalLimit = 0}: PaymentLimitProps) => {

  const { format } = useFormatNumber();
  
  const  formatedValue = `${format(limitUsage)} / ${format(totalLimit)}`;

  const usagePercentage = Math.round((limitUsage / (totalLimit) * 100))

  const getAlertColor = () => {
    if (usagePercentage >= 85) return '#ef4444';  
    if (usagePercentage >= 65) return '#f59e0b'; 
    return '#197BBD';                            
  };
  
  const activeColor = getAlertColor();

  return (
    <div className={STYLE.wrapper}>
          <ProgressBar indicator={totalLimit} track={limitUsage} color={activeColor}/>
        <DataRow label={PAYMENT_LIMIT_CONFIG.label} value={formatedValue}/>
    </div>
  )
};

export default PaymentLimit;
