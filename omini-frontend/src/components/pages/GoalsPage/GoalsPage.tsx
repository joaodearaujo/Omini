import Header from "../../features/Header/Header"
import GoalsWrapper from "./components/GoalsWrapper"

const STYLE = {
    container: 'flex flex-col w-full max-h-full h-min-0 gap-8 transition-all duration-800',
}

const title = 'Goals'
const subtitle = 'All your goals in one place!' 

const GoalsPage = () => {


  return (
    <main className={STYLE.container}>
        <Header title={title} subtitle={subtitle}/>
        <GoalsWrapper />
    </main>
  )
}

export default GoalsPage
