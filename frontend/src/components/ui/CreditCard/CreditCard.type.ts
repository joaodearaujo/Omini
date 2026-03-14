
export interface CardInfo {
    id: string;
    color: string;
    bank: string;
    flag: string;
    number: string;
    owner: string;
    date: string;
    balance: number;
    income: number;
    outcome: number;
    limit: number;
    limitUsage: number;
}

export interface CreditCardProps {
    card: CardInfo
}

export interface CardFieldProps {
    label: string;
    value: string;
}