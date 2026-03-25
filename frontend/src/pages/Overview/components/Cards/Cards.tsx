import CreditCard from "../../../../components/ui/CreditCard/CreditCard"
import PaymentLimit from "./components/PaymentLimit"
import BalanceStatus from "./components/BalanceStatus"
import CardNav from "./components/CardNav"
import type { CardProps } from "./Cards.type"

const STYLE = {
  wrapper: 'flex-2 flex flex-col items-center justify-between gap-4',
}

const Cards = ({nextIndex, prevIndex, currentCard}: CardProps) => {

  return (
        <section className="flex h-full gap-4">
            <div className={STYLE.wrapper}>

                <CardNav nextIndex={nextIndex} prevIndex={prevIndex}>
                    <CreditCard creditCard={currentCard}/>
                </CardNav>
                
                <PaymentLimit limitUsage={currentCard.limitUsage}
                              totalLimit={currentCard.totalLimit}
                />
            </div>

            <div className="w-px h-[240px] bg-black/10"/>

            <BalanceStatus currentCard={currentCard}/>        
        </section>

  )
}

export default Cards
