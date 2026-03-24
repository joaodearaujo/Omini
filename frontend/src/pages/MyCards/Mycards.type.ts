import type { TransactionProps } from "../Overview/components/Transactions/Transactions.type";

export interface StatusCardProps {
    amount: number,
    title: string,
    description?: string,
}

export interface TransactionItemProps {
    transaction: TransactionProps;
}