export interface TransactionProps { 
    id: string;
    status: 'Completed' | 'Pending' | 'Canceled'
    cardId?: string;
    receiver: string;
    category: 'Food' | 'Health' | 'Transport' | 'Essentials' | 'Lifestyle';
    date: string;
    amount: number;
} 

export class Transaction {

    public readonly id: string;
    public status: 'Completed' | 'Pending' | 'Canceled'
    public cardId?: string;
    public receiver: string;
    public category: 'Food' | 'Health' | 'Transport' | 'Essentials' | 'Lifestyle';
    public  date: string;
    public amount: number;

    constructor(props: TransactionProps) {
        this.id = crypto.randomUUID();
        this.cardId = props.cardId;
        this.receiver = props.receiver;
        this.category = props.category;
        this.status = props.status;
        this.date = props.date;
        this.amount = props.amount;
    }

}