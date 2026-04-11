import Wrapper from "../../../ui/Wrapper/Wrapper"
import CardsList from "./CardsList"
import CardsStatus from "./CardsStatus"
import MyCardsForm from "./MyCardsForm"
import { useState } from "react"
import useMyCards from "../../../../hooks/useMyCards"

const WRAPPER_CONFIG = {
 title: 'My Cards',
}

const MyCardsWrapper = () => {
  const { creditCardsArray, loading, refresh } = useMyCards();
  const [ isFormOpen, setIsFormOpen ] = useState<boolean>(false)

  return (
    <Wrapper title={WRAPPER_CONFIG.title} onClick={() => setIsFormOpen(true)}>
        <MyCardsForm isFormOpen={isFormOpen} onClose={() => setIsFormOpen(false)} onCardCreated={refresh}/>
        <CardsList creditCards={creditCardsArray} isLoading={loading}/>
        <CardsStatus />
    </Wrapper>
  )
}

export default MyCardsWrapper

