import CreditCard from "../../../../components/ui/CreditCard/CreditCard"
import PaymentLimit from "./components/PaymentLimit"
import BalanceStatus from "./components/BalanceStatus"
import CardNav from "./components/CardNav"
import Divider from "../../../../components/ui/Divider"
import type { CardProps } from "./Cards.type"
import FloatingCard from "../../../../components/ui/FloatingCard/FloatingCard"

const STYLE = {
  container: 'flex h-full gap-4',
  wrapper: 'flex-1 flex max-h-full min-h-0 flex-col items-center justify-between gap-2',
}

const Cards = ({nextIndex, prevIndex, currentCard}: CardProps) => {

  return (
    <FloatingCard title="Cards">
        <section className={STYLE.container} >
            <div className={STYLE.wrapper}>

                <CardNav nextIndex={nextIndex}
                         prevIndex={prevIndex}
                >
                    <CreditCard creditCard={currentCard}/>
                </CardNav>
                
                <PaymentLimit limitUsage={currentCard.limitUsage}
                              totalLimit={currentCard.totalLimit}
                />
            </div>

            <Divider />

            <BalanceStatus currentCard={currentCard}/>        
        </section>
    </FloatingCard>
  )
}

export default Cards
