import { useState } from "react";
import TransactionsForm from "./TransactionsForm";
import Wrapper from "../../../ui/Wrapper/Wrapper";
import TransactionsList from "./TransactionsList";
import useTransactions from "../../../../hooks/useTransactions";

const TransactionsWrapper = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { transactionsArray, loading, refresh } = useTransactions();

return (
    <Wrapper title="My Transactions" onClick={() => setIsFormOpen(true)}>
        <TransactionsForm isFormOpen={isFormOpen} onTransactionsCreated={refresh} onClose={() => setIsFormOpen(false)}/>
        <TransactionsList transactions={transactionsArray} isLoading={loading} />
    </Wrapper>
  );
};

export default TransactionsWrapper