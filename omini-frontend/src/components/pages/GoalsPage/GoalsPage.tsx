import GoalsWrapper from "./components/GoalsWrapper"
import Main from "../../ui/Main/Main"

const MAIN_CONFIG = {
  title: 'Goals',
  subtitle: 'All your goals in one place!' 
}

const GoalsPage = () => {
  return (
    <Main title={MAIN_CONFIG.title} subtitle={MAIN_CONFIG.subtitle}>
      <GoalsWrapper />
    </Main>
  )
}

export default GoalsPage
