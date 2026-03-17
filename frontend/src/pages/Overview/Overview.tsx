import Card from "../../components/ui/Section/Section";
import Cards from "../../features/Cards/Cards";
import Transactions from "../../features/Transactions/Transactions";
import Goals from "../../features/Goals/Goals";
import OutcomeStatistics from "../../features/OutcomeStatistics/OutcomeStatistics";
import { MOCK_GOALS } from "../../MOCK/MOCK_TRANSACTIONS";
import { MOCK_TRANSACTIONS } from "../../MOCK/MOCK_TRANSACTIONS";

const Overview = () => {
  return (
    <div className="grid grid-cols-18 gap-4 flex-1 h-full">
        <div className="col-span-10 flex items-center gap-4 flex-col flex-1">
            <Card title="Cards">
                <Cards/>
            </Card>

            <Card title="Transactions">
                <Transactions/>
            </Card>
        </div>

        <div className="col-span-8 flex flex-col flex-1 gap-4 ">
            <Card title="Goals" style={{border:'none'}}>
                <Goals goals={MOCK_GOALS} />
            </Card>

            <Card title="Outcome Statistics">
                <OutcomeStatistics transactions={MOCK_TRANSACTIONS}/>
            </Card>
        </div>
    </div>
  )
};

export default Overview
