import { TransactionsRepository } from "../repositories/TransactionsRepository";
import { TransactionProps, Transaction } from "../domain/entities/transactions/Transaction";

export class TransactionsService {

    constructor( private repository: TransactionsRepository ) {}

    async execute(data: TransactionProps) { 

        const transaction = new Transaction(data);
        const savedTransaction = this.repository.saveTransaction(transaction);

        console.log('Transaction created!');
        return savedTransaction;

    }

    async listTransactions() {
        return this.repository.listAllTransactions();
    }

}