import TransactionsWrapper from "./components/TransactionsWrapper"
import Main from "../../ui/Main/Main"

const MAIN_CONFIG = {
title: 'Transactions',
subtitle: 'Manage your transactions here.',
}

const Transacitions = () => {
  return (
    <Main  title={MAIN_CONFIG.title} subtitle={MAIN_CONFIG.subtitle} >
      <TransactionsWrapper />
    </Main>
  )
}

export default Transacitions
