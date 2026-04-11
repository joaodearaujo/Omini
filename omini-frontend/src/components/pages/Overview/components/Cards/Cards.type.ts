import type { ReactNode } from 'react';
import type { CardInfoProps } from '../../../../ui/CreditCard/CreditCard.type';

export interface CardProps {
  prevIndex: () => void;
  nextIndex: () => void;
  currentCard: CardInfoProps; 
}

export type BalanceStatusProps = Pick<CardProps, 'currentCard'>;

export interface CardNavButtonProps {
  isRight?: boolean;
  onClick: () => void;
}

export interface CardNavProps extends Pick<CardProps, 'prevIndex' | 'nextIndex'> {
  children?: ReactNode;
}

export interface BalanceItemsProps {
  label: string;
  value: number;
  isMain?: boolean;
  color?: string;
}

export interface BalanceItemsConfig {
  key: keyof Pick<CardInfoProps, 'balance' | 'income' | 'outcome'>,
  label: string,
  color: string,
  isMain: boolean,
}

