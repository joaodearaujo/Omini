import Card from "../../components/ui/Card/Card"
import Cards from "../../components/Cards/Cards";

const Overview = () => {
  return (
    <div className="grid grid-cols-12 gap-4 flex-1 h-full">
        <div className="col-span-6 flex flex-col flex-1 gap-4">
            <Card>
                <Cards/>
            </Card>
            <Card>
                <Cards/>
            </Card>
        </div>

        <div className="col-span-6 flex flex-col flex-1 gap-4">
            <Card>
                <Cards/>
            </Card>
            <Card>
                <Cards/>
            </Card>
        </div>
    </div>
  )
};

export default Overview
