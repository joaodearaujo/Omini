import Header from "../../features/Header/Header"
import FloatingCard from "../../components/ui/FloatingCard/FloatingCard"
import GoalsSection from "./components/GoalsSection"
import useFadeIn from "../../hooks/useFadeIn"

const STYLE = {
    container: 'flex flex-col w-full max-h-full h-min-0 gap-8 transition-all duration-800',
}

const GoalsPage = () => {

    const { isVisible } =  useFadeIn()

  return (
    <div className={STYLE.container}>
        <Header title="Goals" subtitle="All your goals in one place!"/>

        <div className={`${STYLE.container}  ${isVisible ? 'opacity-100 translate-x-0 ' : 'opacity-0 -translate-x-1'}`}>
            <FloatingCard title="My Goals">
                <GoalsSection />
            </FloatingCard>
        </div>
    </div>
  )
}

export default GoalsPage
