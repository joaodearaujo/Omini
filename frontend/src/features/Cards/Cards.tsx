import CreditCard from "../../components/ui/CreditCard/CreditCard"
import PaymentLimit from "./components/PaymenLimit"
import BalanceStatus from "./components/BalanceStatus"
import CardNav from "./components/CardsNav"
import { useState } from "react"
import type { CardInfo } from "../../components/ui/CreditCard/CreditCard.type"

const MOCK_CARDS: CardInfo[] = [
  {
    id: "cc-001",
    color: '#197bbd', 
    bank: "International Bank",
    flag: "Visa",
    number: "4532 1198 5421 0098",
    owner: "Alexander Hamilton",
    date: "12/28",
    balance: 12500.0,
    income: 5000.0,
    outcome: 3200.0,
    limit: 25000.0,
    limitUsage: 3200.0,
  },
  {
    id: "cc-002",
    color: '#820ad1', 
    bank: "Nubank",
    flag: "Mastercard",
    number: "5502 9931 0042 1123",
    owner: "Marta Vieira da Silva",
    date: "05/30",
    balance: 4500.5,
    income: 2000.0,
    outcome: 1200.0,
    limit: 10000.0,
    limitUsage: 9000.0,
  },
  {
    id: "cc-003",
    color: '#ff7a00', 
    bank: "Inter",
    flag: "Mastercard",
    number: "5234 8812 0098 7765",
    owner: "Wolfgang Amadeus Mozart",
    date: "10/27",
    balance: 890.0,
    income: 1000.0,
    outcome: 2500.0,
    limit: 5000.0,
    limitUsage: 2500.0,
  },
  {
    id: "cc-004",
    color: '#117aca', 
    bank: "Chase Bank",
    flag: "Visa",
    number: "4000 1234 5678 9010",
    owner: "John Doe",
    date: "01/26",
    balance: 0.0,
    income: 0.0,
    outcome: 0.0,
    limit: 1000.0,
    limitUsage: 0.0,
  },
  {
    id: "cc-005",
    color: '#ec0000', 
    bank: "Santander",
    flag: "Mastercard",
    number: "5412 7500 1234 5678",
    owner: "Isabella de Aragão",
    date: "03/29",
    balance: 75200.0,
    income: 15000.0,
    outcome: 8000.0,
    limit: 100000.0,
    limitUsage: 45000.0,
  },
  {
    id: "cc-006",
    color: '#00aeef', 
    bank: "Barclays",
    flag: "Visa",
    number: "4929 1111 2222 3333",
    owner: "Winston Churchill",
    date: "11/25",
    balance: 320.45,
    income: 1200.0,
    outcome: 1500.0,
    limit: 2000.0,
    limitUsage: 1850.0,
  },
  {
    id: "cc-007",
    color: '#db0011', 
    bank: "HSBC",
    flag: "American Express",
    number: "3782 8224 6310 005",
    owner: "Ada Lovelace",
    date: "08/30",
    balance: 50000.0,
    income: 20000.0,
    outcome: 5000.0,
    limit: 150000.0,
    limitUsage: 12000.0,
  },
  {
    id: "cc-008",
    color: '#0035ad',
    bank: "Bank of America",
    flag: "Visa",
    number: "4444 5555 6666 7777",
    owner: "Abraham Lincoln",
    date: "02/27",
    balance: 15.0,
    income: 500.0,
    outcome: 485.0,
    limit: 500.0,
    limitUsage: 495.0,
  },
  {
    id: "cc-009",
    color: '#ff8200', 
    bank: "Itaú Unibanco",
    flag: "Mastercard",
    number: "5100 0000 1111 2222",
    owner: "Dom Pedro II",
    date: "07/31",
    balance: 1000000.0,
    income: 50000.0,
    outcome: 10000.0,
    limit: 500000.0,
    limitUsage: 5000.0,
  },
  {
    id: "cc-010",
    color: '#d71e28', 
    bank: "Wells Fargo",
    flag: "Visa",
    number: "4111 2222 3333 4444",
    owner: "Marie Curie",
    date: "04/26",
    balance: 1200.75,
    income: 3000.0,
    outcome: 1800.0,
    limit: 5000.0,
    limitUsage: 2100.0,
  },
];
const Cards = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextIndex = () => setCurrentIndex((prev) => (prev + 1) % MOCK_CARDS.length) 
  const prevIndex = () => setCurrentIndex((prev) => (prev - 1 + MOCK_CARDS.length) % MOCK_CARDS.length) 

  const currentCard = MOCK_CARDS[currentIndex]

  return (
        <section className="flex-1 flex gap-4">
            <div className="flex-2 flex flex-col items-center justify-between gap-4">
                
                <CardNav nextIndex={nextIndex} prevIndex={prevIndex}>
                    <CreditCard card={currentCard}/>
                </CardNav>
                
                <PaymentLimit card={currentCard}/>
            </div>

            <div className="w-px h-full bg-black/10"/>
                <BalanceStatus card={currentCard}/>        
        </section>

  )
}

export default Cards
