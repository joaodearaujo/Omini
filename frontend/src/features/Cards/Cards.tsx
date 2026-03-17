import CreditCard from "../../components/ui/CreditCard/CreditCard"
import PaymentLimit from "./components/PaymentLimit"
import BalanceStatus from "./components/BalanceStatus"
import CardNav from "./components/CardNav"
import { useState } from "react"
import { MOCK_CARDS } from "../../MOCK/MOCK_CARDS"

const STYLE = {
  wrapper: 'flex-2 flex flex-col items-center justify-between gap-4',
}

const Cards = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextIndex = () => setCurrentIndex((prev) => (prev + 1) % MOCK_CARDS.length) 
  const prevIndex = () => setCurrentIndex((prev) => (prev - 1 + MOCK_CARDS.length) % MOCK_CARDS.length) 

  const currentCard = MOCK_CARDS[currentIndex]

  return (
        <section className="flex h-full gap-4">
            <div className={STYLE.wrapper}>

                <CardNav nextIndex={nextIndex} prevIndex={prevIndex}>
                    <CreditCard card={currentCard}/>
                </CardNav>
                
                <PaymentLimit limitUsage={currentCard.limitUsage}
                              totalLimit={currentCard.totalLimit}
                />
            </div>

            <div className="w-px h-full bg-black/10"/>

            <BalanceStatus card={currentCard}/>        
        </section>

  )
}

export default Cards
