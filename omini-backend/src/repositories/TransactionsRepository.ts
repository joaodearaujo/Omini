import type { Transaction } from "../domain/entities/transactions/Transaction"

export class TransactionsRepository {

   private transctionsArray: Transaction[] = []


//    save method

    async saveTransaction(transaction: Transaction): Promise<Transaction> {
        this.transctionsArray.push(transaction);
        return transaction;
    }

    async listAllTransactions(): Promise<Transaction[]> {
        return this.transctionsArray;
    }
//    List method
}