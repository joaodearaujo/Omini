import Card from "../../components/ui/Card/Card";
import Cards from "../../features/Cards/Cards";
import Transactions from "../../features/Transactions/Transactions";

const Overview = () => {
  return (
    <div className="grid grid-cols-14 gap-4 flex-1 h-full">
        <div className="col-span-7 flex flex-col flex-1 gap-4">
            <Card title="Cards">
                <Cards/>
            </Card>

            <Card title="Transactions">
                <Transactions/>
            </Card>
        </div>

        <div className="col-span-7 flex flex-col flex-1 gap-4">
            
        </div>
    </div>
  )
};

export default Overview
