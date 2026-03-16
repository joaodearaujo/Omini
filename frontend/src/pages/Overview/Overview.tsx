import Card from "../../components/ui/Section/Section";
import Cards from "../../features/Cards/Cards";
import Transactions from "../../features/Transactions/Transactions";

const Overview = () => {
  return (
    <div className="grid grid-cols-14 gap-4 flex-1 h-full">
        <div className="col-span-8 flex flex-col flex-1 gap-6">
            <Card title="Cards">
                <Cards/>
            </Card>

            <Card title="Transactions">
                <Transactions/>
            </Card>
        </div>

        <div className="col-span-6 flex flex-col flex-1 gap-6">
            <Card title="Goals">
                
            </Card>

            <Card title="Outcome Statistics">
                
            </Card>
        </div>
    </div>
  )
};

export default Overview
