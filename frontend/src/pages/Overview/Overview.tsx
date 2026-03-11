import Card from "../../components/ui/Card/Card"
import Cards from "../../components/Cards/Cards";

const Overview = () => {
  return (
    <div className="grid grid-cols-12 gap-6 w-full h-full">
        <div className="col-span-7 flex flex-col gap-6">
            <Card>
                <Cards/>
            </Card>
            <Card>
                <Cards/>
            </Card>

        
        </div>

        <div className="col-span-5 flex flex-col gap-6">

        </div>
    </div>
  )
};

export default Overview
