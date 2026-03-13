import CreditCard from "../ui/CreditCard/CreditCard"
import Bar from "../ui/Bar/Bar"

const Cards = () => {
  return (
    <div className="w-full flex-1 flex flex-col">
        <div className="flex-1 grid grid-cols-8">
            <div className=" col-span-5 flex flex-col items-center justify-around gap-4">
                <CreditCard/>
                <div className="w-[400px] h-auto flex flex-col gap-2">
                    <div className="w-full flex items-center">
                        <Bar></Bar>
                    </div>

                    <div className="flex items-center justify-between">
                        <h2 className="text-[#AEAEAE] font-medium">Payment Limit</h2>
                        <h2 className="text-[#404040] font-semibold">$350.60 / $4000</h2>
                    </div>
                </div>
            </div>

            <div className="col-span-3">
            </div>
        </div>
    </div>
  )
}

export default Cards
