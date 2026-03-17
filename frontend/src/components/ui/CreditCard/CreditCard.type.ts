
export interface CreditCardProps {
    card: CardInfoProps;
}

export interface CardInfoProps {
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
    totalLimit: number;
    limitUsage: number;
}

export interface CardFieldProps {
    label: string;
    value: string;
}

export interface CreditCardContentProps {
    bank: string,
    flag:string,
    owner:string, 
    number: string,
    date:string,
}