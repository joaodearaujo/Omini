import Card from "../../components/ui/Section/Section";
import Cards from "../../features/Cards/Cards";
import Transactions from "../../features/Transactions/Transactions";
import Goals from "../../features/Goals/Goals";

const MOCK_GOALS = [
    {
    value: 125000, 
    date: '2026-12-15', 
    label: 'Holidays'
  },
  {
    value: 45000, 
    date: '2026-08-20', 
    label: 'Renovation'
  },
  {
    value: 35000, 
    date: '2026-05-10', 
    label: 'Gaming'
  },
  {
    value: 1000000, 
    date: '2030-01-01', 
    label: 'Savings'
  },
    {
    value: 125000, 
    date: '2026-12-15', 
    label: 'Holidays'
  },
  {
    value: 45000, 
    date: '2026-08-20', 
    label: 'Renovation'
  },
  {
    value: 35000, 
    date: '2026-05-10', 
    label: 'Gaming'
  },
  {
    value: 1000000, 
    date: '2030-01-01', 
    label: 'Savings'
  },
]

const Overview = () => {
  return (
    <div className="grid grid-cols-18 gap-4 flex-1 h-full">
        <div className="col-span-10 flex flex-col flex-1 gap-4">
            <Card title="Cards">
                <Cards/>
            </Card>

            <Card title="Transactions">
                <Transactions/>
            </Card>
        </div>

        <div className="col-span-8 flex flex-col flex-1 gap-4">
            <Card title="Goals">
                <Goals goals={MOCK_GOALS} />
            </Card>

            <Card title="Outcome Statistics">
            </Card>
        </div>
    </div>
  )
};

export default Overview
