import Wrapper from "../../../ui/Wrapper/Wrapper"
import CardsList from "./CardsList"
import CardsStatus from "./CardsStatus"
import MyCardsForm from "./MyCardsForm"
import { useState } from "react"

const WRAPPER_CONFIG = {
 title: 'My Cards',
}

const MyCardsWrapper = () => {

  const [ isFormOpen, setIsFormOpen ] = useState<boolean>(false)

  return (
    <Wrapper title={WRAPPER_CONFIG.title} onClick={() => setIsFormOpen(true)}>
        <MyCardsForm isFormOpen={isFormOpen} onClose={() => setIsFormOpen(false)}/>
        <CardsList />
        <CardsStatus />
    </Wrapper>
  )
}

export default MyCardsWrapper

