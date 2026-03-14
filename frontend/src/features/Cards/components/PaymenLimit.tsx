 import Bar from "../../../components/ui/Bar/Bar"
const PaymentLimit = () => {
  return (
    <div className="flex flex-col items-center gap-2 justify-between">
        <Bar></Bar>
        <div className="w-[400px] h-auto flex justify-between gap-2">
            <p className="text-[#AEAEAE] font-light">Payment Limit</p>
            <p className="text-[#404040] font-semibold">$350.60 / $4000</p>
        </div>
    </div>

     
  )
}

export default PaymentLimit
