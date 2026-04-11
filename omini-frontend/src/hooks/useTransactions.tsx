import { useCallback, useEffect, useState } from "react"

const useTransactions = () => {
    const [transactionsArray, setransactionsArray] = useState([])
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

export default useTransactions;