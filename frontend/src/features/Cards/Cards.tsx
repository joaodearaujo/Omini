import CreditCard from "../../components/ui/CreditCard/CreditCard"
import PaymentLimit from "./components/PaymenLimit"
import BalanceStatus from "./components/BalanceStatus"
import CardNav from "./components/CardNav"

const MOCK_CARDS = [
  {
    id: "cc-001",
    bank: "International Bank",
    flag: "Visa",
    number: "4532 1198 5421 0098",
    owner: "Alexander Hamilton",
    date: "12/28"
  },
];

const Cards = () => {

    const currentCard = MOCK_CARDS[0]

  return (
        <section className="flex-1 flex gap-4">
            <div className="flex-2 flex flex-col items-center justify-between gap-4">
                
                <CardNav>
                    <CreditCard card={currentCard}/>
                </CardNav>
                
                <PaymentLimit/>
            </div>

            <div className="w-px h-full bg-black/10"/>
                <BalanceStatus/>        
        </section>

  )
}

export default Cards
