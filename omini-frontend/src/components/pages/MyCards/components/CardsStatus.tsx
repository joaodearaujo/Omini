import StatusCard from "./StatusCard"
import { Calendar, CreditCard, DollarSign, TrendingUp } from "lucide-react"
import { MOCK_CARDS } from "../../../mock/MOCK_CARDS"
import { MOCK_TRANSACTIONS } from "../../../mock/MOCK_TRANSACTIONS";

const totalCredit = MOCK_CARDS.reduce((acc, item) => {
  return acc + item.totalLimit;
}, 0);

const totalOutcome = MOCK_CARDS.reduce((acc, item) => {
  return acc + item.outcome;
}, 0);

  const values = Object.values(MOCK_TRANSACTIONS); 
  const allTransactions = values.flat();
  const totalSpending = allTransactions.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);

const CARDS = [
    {title: 'Total Spending', amount: totalSpending, description: 'Across all cards', icon: DollarSign},
    {title: 'Available Credit', amount: totalCredit, description: 'Across all cards', icon: CreditCard},
    {title: 'Rewards', amount: 0, description: 'Across all cards', icon: TrendingUp},
    {title: 'Next Payment', amount: totalOutcome, description: 'Due in 12 days', icon: Calendar},
]

const CardsStatus = () => {

  return (
    <section className="w-full h-fit flex gap-4">
        {CARDS.map((card) => (
              <StatusCard title={card.title}
                          description={card.description}
                          icon={card.icon}
                          amount={card.amount}
                          key={card.title}/>
               ))
        }
    </section>
  )
}

export default CardsStatus
