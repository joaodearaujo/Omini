import CardsSection from "./components/CardsSection"
import Header from "../../features/Header/Header"
import CardsStatus from "./components/CardsStatus"
import FloatingCard from "../../components/ui/FloatingCard/FloatingCard"
import useFadeIn from "../../hooks/useFadeIn"

const STYLE = { 
    container: 'w-full h-full max-h-full flex flex-col gap-8 items-center overflow-y-auto`',
    wrapper: 'w-full h-full h-min-0 flex flex-col gap-8 items-start overflow-y-auto transition-all ease-in-out duration-800 ',
}

const title = 'Credit Cards'
const subtitle = 'Manage your credit cards!'

const MyCards = () => {

    const { isVisible } =  useFadeIn()

  return (
      <div className={STYLE.container}>
          <Header title={title} subtitle={subtitle}/>
              <div className={`${STYLE.wrapper} ${isVisible ? 'opacity-100 translate-x-0 ' : 'opacity-0 -translate-x-1'}`}>
                  <FloatingCard>
                      <CardsSection />
                  </FloatingCard>  
                      <CardsStatus />
              </div>
      </div>
    )
  }

export default MyCards
