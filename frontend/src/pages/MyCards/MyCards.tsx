import CardsCarousel from "./components/CardsCarousel"
import Header from "../../features/Header/Header"
import CardsStatus from "./components/CardsStatus"
import RecentTransactions from "./components/RecentTransactions"

  const title = 'Credit Cards'
  const subtitle = 'Manage your credit cards and transactions.'

const MyCards = () => {

  return (
      <div className="w-full max-h-full flex flex-col gap-8 items-center" >
          <Header title={title} subtitle={subtitle}/>
              <div className="w-full max-h-full flex flex-col gap-8 items-center justify-between overflow-y-auto">
                <CardsCarousel />
                <CardsStatus />
                <RecentTransactions />
              </div>
      </div>
    )
  }

export default MyCards
