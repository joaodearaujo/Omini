import FloatingCard from "../../components/ui/FloatingCard/FloatingCard";
import Cards from "./components/Cards/Cards";
import Transactions from "./components/Transactions/Transactions";
import Goals from "./components/Goals/Goals";
import OutcomeStatistics from "./components/OutcomeStatistics/OutcomeStatistics";
import { MOCK_GOALS } from "../../mock/MOCK_GOALS";
import { MOCK_TRANSACTIONS } from "../../mock/MOCK_TRANSACTIONS";
import { MOCK_CARDS } from "../../mock/MOCK_CARDS";
import useCardNavigation from "../../hooks/useCardNavigation";
import Header from "../../features/Header/Header";


const Overview = () => {

    const title = 'Overview'
    const subtitle = 'Get summary of your weekly online transactions here.'

    const { currentIndex, currentCard, nextIndex, prevIndex } = useCardNavigation(MOCK_CARDS)
    
    const currentTransactions = MOCK_TRANSACTIONS[currentCard?.id] || []

  return (
    
    <div className="max-w-full h-flex flex flex-col gap-8 min-h-0 items-center justify-center">
        <Header title={title} subtitle={subtitle}/>

        <div className="grid grid-cols-18 gap-4 w-full h-full">
            <div className="col-span-10 gap-4 w-full h-full flex flex-col justify-between">
                <FloatingCard title="Cards">
                    <Cards nextIndex={nextIndex}
                           prevIndex={prevIndex}
                           currentCard={MOCK_CARDS[currentIndex]}/>
                </FloatingCard>
                <FloatingCard title="Transactions">
                    <Transactions transactions={currentTransactions}/>
                </FloatingCard>
            </div>
            <div className="col-span-8 gap-4 w-full h-full flex flex-col justify-between">
                <FloatingCard title="Goals" style={{backgroundColor: 'transparent', border:'none'}}>
                    <Goals goals={MOCK_GOALS} />
                </FloatingCard>
                <FloatingCard title="Outcome Statistics">
                    <OutcomeStatistics transactions={currentTransactions}/>
                </FloatingCard>
            </div>
        </div>
    </div>
  )
};

export default Overview


