import { useCallback, useState } from "react"
import type { TransactionProps } from "../components/pages/Overview/components/Transactions/TransactionsHistory.type"
import { MOCK_TRANSACTIONS } from "../components/mock/MOCK_TRANSACTIONS"


let _transactionsStore: TransactionProps[] = Object.values(MOCK_TRANSACTIONS).flat();

const useTransactions = () => {
    const [transactionsArray, setTransactionsArray] = useState<TransactionProps[]>(_transactionsStore)
    const [loading, setLoading] = useState<boolean>(false)

    const fetchtransactionsArray = useCallback(async () => {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 300));
        setTransactionsArray([..._transactionsStore]);
        setLoading(false);
    }, []);

    const addTransaction = useCallback((newTransaction: Omit<TransactionProps, 'id'>) => {
        const transaction: TransactionProps = {
            ...newTransaction,
            id: `tx-${Date.now()}`,
        };
        _transactionsStore = [transaction, ..._transactionsStore];
        setTransactionsArray([..._transactionsStore]);
    }, []);

    return { transactionsArray, refresh: fetchtransactionsArray, loading, addTransaction }
}

export default useTransactions;
