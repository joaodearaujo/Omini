import { CardInfoProps, CreditCard } from "../domain/entities/goal/CreditCard";
import { CrediCardRepository } from "../repositories/CreditCardsRepository";

export class CreditCardService {
    constructor(private repository: CrediCardRepository) {}

    async execute(data: CardInfoProps) {

        const creditCard = new CreditCard(data);
        const savedCreditCard = await this.repository.saveCreditCard(creditCard)

        console.log(`Credit Card created!`);
          return savedCreditCard;
    }

    async listAllCards() {
        return await this.repository.listAllCards();
    }

}