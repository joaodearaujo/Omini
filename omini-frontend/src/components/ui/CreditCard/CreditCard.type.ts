export interface CreditCardProps {
    creditCard: CardInfoProps;
}

 type Banks =  'Nubank' | 'Santander' | 'Inter' | 'BTG Pactual';

 type Flags =  'Mastercard' | 'Visa' | 'American Express';

export interface CardInfoProps {
    id: string;
    color: string;
    bank: Banks;
    flag: Flags;
    number: string;
    owner: string;
    date: string;
    balance?: number;
    income?: number;
    outcome?: number;
    totalLimit?: number;
    limitUsage?: number;
}

export interface CardFieldProps {
    label: string;
    value: string;
}

export type CreditCardContentProps = Pick<CardInfoProps, 'bank' | 'flag' | 'owner' | 'number' | 'date'>;