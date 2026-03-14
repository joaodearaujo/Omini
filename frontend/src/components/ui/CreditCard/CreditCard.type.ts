
export interface CardInfo {
    id: string;
    bank: string;
    flag: string;
    number: string;
    owner: string;
    date: string;
}

export interface CreditCardProps {
    card: CardInfo
}

export interface CardFieldProps {
    label: string;
    value: string;
}