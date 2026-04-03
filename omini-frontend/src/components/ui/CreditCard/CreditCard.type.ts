export interface CreditCardProps {
    creditCard: CardInfoProps;
}

export interface CardInfoProps {
    id: string;
    color: string;
    bank: 'Nubank' | 'MercadoPago' | 'Inter' | 'Bradesco' | 'Itaú' | 'Santander' | 'BTG Pactual';
    flag: 'Mastercard' | 'Visa' | 'Elo' | 'American Express';
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

export type CreditCardContentProps = Pick<CardInfoProps, 'bank' | 'flag' | 'owner' | 'number' | 'date'>;