import CardsSection from "./components/CardsSection"
import Header from "../../features/Header/Header"
import CardsStatus from "./components/CardsStatus"
import FloatingCard from "../../components/ui/FloatingCard/FloatingCard"
import useFadeIn from "../../hooks/useFadeIn"
import SectionHeader from "../../components/ui/SectionHeader/SectionHeader"

const STYLE = { 
    container: 'w-full h-full max-h-full flex flex-col gap-8 items-center overflow-y-auto`',
    wrapper: 'w-full h-fit h-min-0 flex flex-col gap-8 items-start overflow-y-auto transition-all ease-in-out duration-800 ',
}

const title = 'Credit Cards'
const subtitle = 'Manage your credit cards!'

const HEADER_CONFIG = {
 title: 'My Cards',
 button: '+ Add Card',
}

const MyCards = () => {

    const { isVisible } =  useFadeIn()

  return (
      <main className={STYLE.container}>
          <Header title={title} subtitle={subtitle}/>

            <section className={`${STYLE.wrapper} ${isVisible ? 'opacity-100 translate-x-0 ' : 'opacity-0 -translate-x-1'}`}>
                <FloatingCard>
                    <SectionHeader title={HEADER_CONFIG.title} button={HEADER_CONFIG.button}/>
                    <CardsSection />
                </FloatingCard>  
            </section>
                
            <section className={`${STYLE.wrapper} ${isVisible ? 'opacity-100 translate-x-0 ' : 'opacity-0 -translate-x-1'}`}>
                <CardsStatus />
            </section>
      </main>
    )
  }

export default MyCards
