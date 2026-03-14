import Bar from "../../../components/ui/Bar/Bar"
import type { CreditCardProps } from "../Cards.type"

 const PaymentLimit = ({card}: CreditCardProps) => {
  return (
    <div className="flex flex-col w-full max-w-[360px] items-center gap-2 justify-between">
        <Bar limit={card.limit} 
             limitUsage={card.limitUsage}
        >
     
        </Bar>
        <div className="w-full max-w-[400px] h-auto flex justify-between gap-2">
            <p className="text-[#AEAEAE] font-light">Payment Limit</p>
            <p className="text-[#404040] font-semibold">{`$${card.limitUsage} / $${card.limit}`}</p>
        </div>
    </div>

     
  )
}

export default PaymentLimit
