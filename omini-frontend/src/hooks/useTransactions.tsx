import { useCallback, useEffect, useState } from "react"
import type { TransactionsProps } from "../components/pages/Overview/components/Transactions/TransactionsHistory.type"

const useTransactions = () => {
    const [transactionsArray, setransactionsArray] = useState<TransactionsProps[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const fetchtransactionsArray = useCallback(async () => {
        try {
            setLoading(true);
            const res = await fetch('http://localhost:3333/transactions');
            const data = await res.json();
            setransactionsArray(data);
        } catch (error) {
            console.error("Fetch error:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchtransactionsArray();
    }, [fetchtransactionsArray])

    return { transactionsArray, refresh: fetchtransactionsArray, loading }
}

export default useTransactions
