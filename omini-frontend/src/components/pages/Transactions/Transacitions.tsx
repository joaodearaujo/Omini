import TransactionsWrapper from "./components/TransactionsWrapper"
import Header from "../../features/Header/Header"

const title = 'Transactions'
const subtitle = 'Manage your transactions here.'

const Transacitions = () => {
  return (
    <main className="w-full h-full max-h-full flex flex-col gap-8 items-center">
        <Header title={title} subtitle={subtitle}/>
        <TransactionsWrapper />
    </main>
  )
}

export default Transacitions
