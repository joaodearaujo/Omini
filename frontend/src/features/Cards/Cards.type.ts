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