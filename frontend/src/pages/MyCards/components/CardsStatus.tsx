import StatusCard from "./StatusCard"

const CARDS = [
    {title: 'Total Spending', amount: 12.84550, description: ''},
    {title: 'Available Credit', amount: 37154.50, description: 'Across all cards'},
    {title: 'Rewards', amount: 37154.50, description: ''},
    {title: 'Next Payment', amount: 2450.00, description: 'Due in 12 days'}
]

const CardsStatus = () => {
  return (
    <div className="w-full h-fit flex gap-4">
        {CARDS.map((card) => {
            return (
               <StatusCard {...card}/>
            )
        })}
    </div>
  )
}

export default CardsStatus
