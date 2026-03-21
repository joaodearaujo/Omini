import CreditCard from "../../components/ui/CreditCard/CreditCard"
import { MOCK_CARDS } from "../../mock/MOCK_CARDS"
import FloatingCard from "../../components/ui/FloatingCard/FloatingCard"

const CardsPage = () => {
  return (
    <div className="w-full h-full">
          <FloatingCard title='All your cards in one place!' style={{padding:38}}>
              <div className="flex max-w-full flex-wrap gap-24">
                {MOCK_CARDS.map((card) => {
                  return (
                      <CreditCard creditCard={card}/>
                  )
                            })}
              </div>
          </FloatingCard>
    </div>
  )
}

export default CardsPage
