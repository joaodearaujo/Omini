import CardsSection from "./components/CardsSection"
import Header from "../../features/Header/Header"
import CardsStatus from "./components/CardsStatus"
import FloatingCard from "../../components/ui/FloatingCard/FloatingCard"

  const title = 'Credit Cards'
  const subtitle = 'Manage your credit cards!'

const MyCards = () => {

  return (
      <div className="w-full h-full max-h-full flex flex-col gap-8 items-center overflow-y-auto">
          <Header title={title} subtitle={subtitle}/>
              <div className="w-full max-h-full h-min-0 flex flex-col gap-7 items-start justify-between overflow-y-auto">
                  <FloatingCard>
                      <CardsSection />
                  </FloatingCard>  
                      <CardsStatus />
              </div>
      </div>
    )
  }

export default MyCards
