import type { ReactNode } from 'react';

export interface BalanceItemsProps {
  label: string;
  value: number;
  isMain?: boolean;
  color?: string;
}

export interface CardNavProps {
  children?: ReactNode; 
  nextIndex: () => void;
  prevIndex: () => void;
}

export interface CardNavButtonProps {
  isRight?: boolean;
  onClick: () => void;
}

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