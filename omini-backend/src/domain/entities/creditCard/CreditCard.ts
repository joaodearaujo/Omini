
type Banks =  'Nubank' | 'Santander' | 'Inter' | 'BTG Pactual';
type Flags =  'Mastercard' | 'Visa' | 'American Express';

export interface CardInfoProps {
    id: string;
    owner: string;
    bank: Banks;
    flag: Flags;
    number: string;
    date: string;
    color: string;
}

export class CreditCard {

    public readonly id: string;
    public color: string;
    public bank: Banks;
    public  flag: Flags;
    public  number: string;
    public owner: string;
    public  date: string;


    constructor(creditCard: CardInfoProps) {

        this.id =  crypto.randomUUID();
        this.color = creditCard.color;
        this.bank = creditCard.bank;
        this.flag = creditCard.flag;
        this.number = creditCard.number;
        this.owner = creditCard.owner;
        this.date = creditCard.date;
    }
}

