import Header from "../../features/Header/Header"
import FloatingCard from "../../ui/FloatingCard/FloatingCard"
import GoalsSection from "./components/GoalsSection"
import useFadeIn from "../../../hooks/useFadeIn"
import SectionHeader from "../../ui/SectionHeader/SectionHeader"

const STYLE = {
    container: 'flex flex-col w-full max-h-full h-min-0 gap-8 transition-all duration-800',
}

const title = 'Goals'
const subtitle = 'All your goals in one place!'


const HEADER_CONFIG = {
 title: 'My Cards',
 button: '+ Add Goal',
}

const GoalsPage = () => {

    const { isVisible } =  useFadeIn()

  return (
    <main className={STYLE.container}>
        <Header title={title} subtitle={subtitle}/>

        <section className={`${STYLE.container}  ${isVisible ? 'opacity-100 translate-x-0 ' : 'opacity-0 -translate-x-1'}`}>
            <FloatingCard>
                <SectionHeader title={HEADER_CONFIG.title} button={HEADER_CONFIG.button}/>
                <GoalsSection />
            </FloatingCard>
        </section>
    </main>
  )
}

export default GoalsPage
