import CreditCard from "../../components/ui/CreditCard/CreditCard"
import PaymentLimit from "./components/PaymenLimit"
import BalanceStatus from "./components/BalanceStatus"
import DisableButton from "./components/DisableButton"
import CardNav from "./components/CardNav"

const Cards = () => {
  return (
        <section className="flex-1 grid grid-cols-8">
            <div className=" col-span-5 flex flex-col items-center justify-around gap-4 border-r-1 border-black/10">
                
                <CardNav>
                    <CreditCard/>
                </CardNav>
                

                <PaymentLimit/>
            </div>
            <aside className="col-span-3 flex flex-col items-end justify-between">
                <BalanceStatus/>
                <DisableButton/>
            </aside>
        </section>

  )
}

export default Cards
