import Cards from "./components/Cards/Cards";
import TransactionsHistory from "./components/Transactions/TransactionsHistory";
import Goals from "./components/Goals/Goals";
import OutcomeStatistics from "./components/OutcomeStatistics/OutcomeStatistics";
import { MOCK_GOALS } from "../../mock/MOCK_GOALS";
import { MOCK_TRANSACTIONS } from "../../mock/MOCK_TRANSACTIONS";
import { MOCK_CARDS } from "../../mock/MOCK_CARDS";
import useCardNavigation from "../../hooks/useCardNavigation";
import Header from "../../features/Header/Header";
import { useEffect, useState } from "react";

const STYLE = {
  mainWrapper: 'max-w-full flex flex-col gap-8 min-h-0',
  gridLayout: 'grid grid-cols-12 gap-6 w-full h-full',
  leftCol: 'col-span-7 flex flex-col gap-6 justify-between',
  rightCol: 'col-span-5 flex flex-col gap-6 justify-between',
};

const Overview = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false)

    useEffect(() => {

        setIsVisible(false);

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 50)

        return () => clearTimeout(timer)
    }, []);


    const title = 'Overview'
    const subtitle = 'Get summary of your weekly online transactions here.'
    const { currentIndex, currentCard, nextIndex, prevIndex } = useCardNavigation(MOCK_CARDS)
    const currentTransactions = MOCK_TRANSACTIONS[currentCard?.id] || []

  return (
    
    <div className={STYLE.mainWrapper}>
        <Header title={title} subtitle={subtitle}/>

        <main className={`${STYLE.gridLayout} duration-500 ${isVisible ? 'opacity-100 translate-x-0 ' : 'opacity-0 -translate-x-1'}`}>
            <section className={STYLE.leftCol}>
                    <Cards nextIndex={nextIndex}
                           prevIndex={prevIndex}
                           currentCard={MOCK_CARDS[currentIndex]} />
                           
                    <TransactionsHistory transactions={currentTransactions}/>
            </section>

            <section className={STYLE.rightCol}>         
                    <Goals goals={MOCK_GOALS} />
                    <OutcomeStatistics transactions={currentTransactions}/>
            </section>
        </main>
    </div>
  )
};

export default Overview


