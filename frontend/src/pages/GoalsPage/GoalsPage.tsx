import Header from "../../features/Header/Header"
import FloatingCard from "../../components/ui/FloatingCard/FloatingCard"
import GoalsSection from "./components/GoalsSection"

const STYLE = {
    container: 'flex flex-col w-full max-h-full h-min-0 gap-8',
}

const GoalsPage = () => {
  return (
    <div className={STYLE.container}>
        <Header title="Goals" subtitle="All your goals in one place!"/>

        <div className={STYLE.container}>
            <FloatingCard title="My Goals">
                <GoalsSection />
            </FloatingCard>
        </div>
    </div>
  )
}

export default GoalsPage
