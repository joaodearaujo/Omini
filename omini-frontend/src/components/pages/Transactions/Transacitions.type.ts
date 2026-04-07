import type { TransactionProps } from "../Overview/components/Transactions/TransactionsHistory.type";

export interface TransactionItemProps {
    transaction: TransactionProps;
    bank: string;
}
