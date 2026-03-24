import CardsCarousel from "./components/CardsCarousel"
import Header from "../../features/Header/Header"
import CardsStatus from "./components/CardsStatus"
import RecentTransactions from "./components/RecentTransactions"

  const title = 'Credit Cards'
  const subtitle = 'Manage your credit cards and transactions.'

const MyCards = () => {

  return (
    <div className="w-full flex flex-col gap-8 min-h-0 items-center justify-between">
        <Header title={title} subtitle={subtitle}/>
            <CardsCarousel />
            <CardsStatus />
            <RecentTransactions />
    </div>
    )
  }

export default MyCards
