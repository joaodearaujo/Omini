import { useState, useEffect } from "react"


const useMyCards = () => {
    const [creditCardsArray, setCreditCardArray ] = useState([])
    const [loading, setLoading] = useState<boolean>(true)

    const fetchCreditCardArray = async () => {
        const res = await fetch('http://localhost:3333/mycards');
        const data = await res.json();
        setCreditCardArray(data);
        setLoading(false)
    }

    useEffect(() => {fetchCreditCardArray();}, [])

  return {creditCardsArray,  refresh: fetchCreditCardArray, loading}

}

export default useMyCards
