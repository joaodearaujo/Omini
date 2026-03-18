import type { LucideIcon } from "lucide-react";
import type { CSSProperties } from "react";


export interface TransactionsProps {
    transactions: TransactionProps[];
}

export interface TransactionsTableProps {
    transactions: TransactionProps[];
}

export interface TransactionProps{
    id: string;
    cardId?: string;
    receiver: string;
    category: string;
    date: string;
    amount: number;
}

export interface TableDataProps {
    data: string;
    style?: CSSProperties;
    className?:string;
    Icon?: LucideIcon;
}