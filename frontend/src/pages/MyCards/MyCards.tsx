import CreditCard from "../../components/ui/CreditCard/CreditCard"
import { MOCK_CARDS } from "../../mock/MOCK_CARDS"

const MyCards = () => {
  return (
    <div className="w-full h-full">
         <CreditCard creditCard={MOCK_CARDS[0]}/>
    </div>
    )
  }

export default MyCards
