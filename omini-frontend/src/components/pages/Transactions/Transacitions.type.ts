import type { TransactionProps } from "../Overview/components/Transactions/TransactionsHistory.type";

export interface TransactionItemProps {
    transaction: TransactionProps;
    bank: string;
}

export interface FormFieldProps {
  label: string;
  type: string;
  placeholder?: string;
  options?: { name: string; value: string; disabled?: boolean }[];
}

 export interface TransactionsFormContent {
     config: FormFieldProps[],
}
