import type { CardInfoProps } from '../components/ui/CreditCard/CreditCard.type';
import { useState } from 'react';

const useCardsNavigation = (CARDS_LIST: CardInfoProps[]) => {

  const cardSafe = CARDS_LIST;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextIndex = () => setCurrentIndex((prev) => (prev + 1) % cardSafe.length) 

  const prevIndex = () => setCurrentIndex((prev) => (prev - 1 + cardSafe.length) % cardSafe.length) 

  const currentCard = cardSafe[currentIndex]

  return {
    currentIndex,
    currentCard,
    nextIndex,
    prevIndex
    };
}

export default useCardsNavigation;