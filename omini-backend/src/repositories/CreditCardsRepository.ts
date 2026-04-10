import { CreditCard } from "../domain/entities/goal/CreditCard"

export class CrediCardRepository {
    private creditCardArray: CreditCard[] = []

    async saveCreditCard(creditCard: CreditCard): Promise<CreditCard>{
        this.creditCardArray.push(creditCard);
        return creditCard;
    }

    async listAllCards(): Promise<CreditCard[]> {
        return this.creditCardArray;
    }
 
}