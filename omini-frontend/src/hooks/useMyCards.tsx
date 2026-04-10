import { useState, useEffect, useCallback } from "react"
import type { CardInfoProps } from "../components/ui/CreditCard/CreditCard.type"

const useMyCards = () => {
    const [creditCardsArray, setCreditCardArray] = useState<CardInfoProps[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const fetchCreditCardArray = useCallback(async () => {
        try {
            setLoading(true);
            const res = await fetch('http://localhost:3333/mycards');
            const data = await res.json();
            setCreditCardArray(data);
        } catch (error) {
            console.error("Fetch error:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchCreditCardArray();
    }, [fetchCreditCardArray])

    return { creditCardsArray, refresh: fetchCreditCardArray, loading }
}

export default useMyCards