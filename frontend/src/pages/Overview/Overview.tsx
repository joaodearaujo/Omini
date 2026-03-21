import FloatingCard from "../../components/ui/FloatingCard/FloatingCard";
import Cards from "../../features/Cards/Cards";
import Transactions from "../../features/Transactions/Transactions";
import Goals from "../../features/Goals/Goals";
import OutcomeStatistics from "../../features/OutcomeStatistics/OutcomeStatistics";
import { MOCK_GOALS } from "../../mock/MOCK_GOALS";
import { MOCK_TRANSACTIONS } from "../../mock/MOCK_TRANSACTIONS";
import { MOCK_CARDS } from "../../mock/MOCK_CARDS";
import useCardNavigation from "../../hooks/useCardNavigation";


const Overview = () => {

    const { currentIndex, currentCard, nextIndex, prevIndex } = useCardNavigation(MOCK_CARDS)
    
    const currentTransactions = MOCK_TRANSACTIONS[currentCard?.id] || []

  return (
    <div className="grid grid-cols-18 gap-4 w-full h-full">
        <div className="col-span-10 flex flex-col gap-4">
            <FloatingCard title="Cards">
                <Cards nextIndex={nextIndex}
                       prevIndex={prevIndex}
                       currentCard={MOCK_CARDS[currentIndex]}/>
            </FloatingCard>

            <FloatingCard title="Transactions">
                <Transactions transactions={currentTransactions}/>
            </FloatingCard>
        </div>

        <div className="col-span-8 flex flex-col gap-4">
            <FloatingCard title="Goals">
                <Goals goals={MOCK_GOALS} />
            </FloatingCard>

            <FloatingCard title="Outcome Statistics">
                <OutcomeStatistics transactions={currentTransactions}/>
            </FloatingCard>
        </div>
    </div>
  )
};

export default Overview


