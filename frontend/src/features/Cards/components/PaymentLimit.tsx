import ProgressBar from "../../../components/ui/ProgressBar/ProgressBar"
import type { CreditCardProps } from "../Cards.type"

const STYLE = {
  container: 'flex flex-col w-[360px] items-center gap-4 justify-between"',
  wrapper: 'w-full h-full flex justify-between gap-2',
}

 const PaymentLimit = ({card}: CreditCardProps) => {

  return (
    <div className={STYLE.container}>

        <ProgressBar limit={card.limit} limitUsage={card.limitUsage}/>

        <div className={STYLE.wrapper}>
            <p className="text-[#AEAEAE] font-light">Payment Limit</p>
            <p className="text-[#404040] font-medium">{`$${card.limitUsage} / $${card.limit}`}</p>
        </div>
    </div>

     
  )
}

export default PaymentLimit
