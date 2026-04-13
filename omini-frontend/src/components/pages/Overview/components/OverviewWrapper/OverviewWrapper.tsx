import useCardNavigation from "../../../../../hooks/useCardNavigation";
import { MOCK_GOALS } from "../../../../mock/MOCK_GOALS";
import { MOCK_CARDS } from "../../../../mock/MOCK_CARDS";
import { MOCK_TRANSACTIONS } from "../../../../mock/MOCK_TRANSACTIONS";
import Cards from "../Cards/Cards";
import Goals from "../Goals/Goals";
import OutcomeStatistics from "../OutcomeStatistics/OutcomeStatistics";
import TransactionsHistory from "../Transactions/TransactionsHistory";

const STYLE = {
  gridLayout: 'grid grid-cols-12 gap-6 w-full min-h-0 h-full',
  leftCol: 'col-span-7 flex flex-col gap-6 min-h-0 h-full',
  rightCol: 'col-span-5 flex flex-col gap-6 min-h-0 h-full',
};

const OverviewWrapper = () => {

  const { currentIndex, currentCard, nextIndex, prevIndex } = useCardNavigation(MOCK_CARDS)
  const currentTransactions = MOCK_TRANSACTIONS[currentCard?.id] || []

  return (
    <div className={`${STYLE.gridLayout}`}>
        <div className={STYLE.leftCol}>
                <Cards  nextIndex={nextIndex}
                        prevIndex={prevIndex}
                        currentCard={MOCK_CARDS[currentIndex]} />
                        
                <TransactionsHistory transactions={currentTransactions}/>
        </div>

        <div className={STYLE.rightCol}>         
                <Goals goals={MOCK_GOALS} />
                <OutcomeStatistics transactions={currentTransactions}/>
        </div>
    </div>
  )
}

export default OverviewWrapper
