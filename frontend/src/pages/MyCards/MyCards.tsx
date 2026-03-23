import CreditCard from "../../components/ui/CreditCard/CreditCard"
import { MOCK_CARDS } from "../../mock/MOCK_CARDS"
import FloatingCard from "../../components/ui/FloatingCard/FloatingCard"
import Header from "../../features/Header/Header"

const Carousel = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-4">

      <div className="max-w-full flex justify-between items-center">
        <h3 className="font-medium text-[18px]">My Cards</h3>

        <button className="bg-black text-white rounded-xl py-2 px-3 cursor-pointer"> + Add Card</button>
      </div>
      
      <div className="max-w-full min-w-0 h-fit flex gap-6 p-2 overflow-x-auto">
          {MOCK_CARDS.map((card) => {
            return (
              <CreditCard creditCard={card}/>
            )
          })}
      </div>
    </div>
  )
}

const StatusCard = () => {
  return (
    <div className="flex flex-col flex-1 h-[120px] justify-between">
      <strong>R$ 12,875, 00</strong>
      <small>asdfasdf</small>
    </div>
  )
}

const Status = () => {
  return (
    <div className="w-full h-fit flex gap-4">
        <FloatingCard title="Total">
            <StatusCard />
        </FloatingCard>
        <FloatingCard title="Total">
            <StatusCard />
        </FloatingCard>
        <FloatingCard title="Total">
            <StatusCard />
        </FloatingCard>
        <FloatingCard title="Total">
            <StatusCard />
        </FloatingCard>
    </div>
  )
}
const RecentTransactions = () => {
  return (
    <FloatingCard title="Recent Transactions">
        <table>

        </table>
    </FloatingCard>
  )
}

const MyCards = () => {

  const title = 'Credit Cards'
  const subtitle = 'Manage your credit cards and transactions.'

  return (
    <div className="flex flex-col w-full h-full gap-6">
        <Header title={title} subtitle={subtitle}/>
        <FloatingCard>
          <Carousel />
          <Status />
          <RecentTransactions />
        </FloatingCard>

    </div>
    )
  }

export default MyCards
