import Main from "../../ui/Main/Main"
import MyCardsWrapper from "./components/MyCardsWrapper"

const MAIN_CONFIG = {
  title: 'Credit Cards',
  subtitle: 'Manage your credit cards!'
}

const MyCards = () => {
  return (
      <Main title={MAIN_CONFIG.title} subtitle={MAIN_CONFIG.subtitle}>
        <MyCardsWrapper />
      </Main>
    )
  }

export default MyCards
