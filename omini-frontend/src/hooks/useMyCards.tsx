import { useState, useCallback } from "react"
import type { CardInfoProps } from "../components/ui/CreditCard/CreditCard.type"
import { MOCK_CARDS } from "../components/mock/MOCK_CARDS"

const useMyCards = () => {
    const [creditCardsArray, setCreditCardArray] = useState<CardInfoProps[]>(MOCK_CARDS)
    const [loading, setLoading] = useState<boolean>(false)

    const fetchCreditCardArray = useCallback(async () => {
        setLoading(true);
        // Simula latência de rede
        await new Promise(resolve => setTimeout(resolve, 300));
        setCreditCardArray([...MOCK_CARDS]);
        setLoading(false);
    }, []);

    const addCard = useCallback((newCard: Omit<CardInfoProps, 'id' | 'balance' | 'income' | 'outcome' | 'limitUsage'> & { cardNumber: string }) => {
        const card: CardInfoProps = {
            id: `cc-${Date.now()}`,
            owner: newCard.owner,
            bank: newCard.bank,
            flag: newCard.flag,
            color: newCard.color,
            number: newCard.cardNumber,
            date: newCard.date,
            balance: 0,
            income: 0,
            outcome: 0,
            totalLimit: 5000,
            limitUsage: 0,
        };
        setCreditCardArray(prev => [...prev, card]);
    }, []);

    return { creditCardsArray, refresh: fetchCreditCardArray, cardsQuantity: creditCardsArray.length, loading, addCard }
}

export default useMyCards
