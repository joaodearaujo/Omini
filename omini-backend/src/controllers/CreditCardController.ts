import { Request, Response } from "express";
import { CreditCardService } from "../services/CreditCardService";

export class CreditCardController {

    constructor(private creditCardSrvice: CreditCardService ) {}

    async handleCreate(req: Request, res: Response) {
        try {
            const result = await this.creditCardSrvice.execute(req.body)
            return res.status(201).json(result)
        } catch (error: any){
            return res.status(400).json({ message: error.message })
        }
    }

 async handleList(req: Request, res: Response) {
    try {
        const creditCardArray = await this.creditCardSrvice.listAllCards(); 
        return res.json(creditCardArray);
    } catch (error) {
        return res.status(500).json({ message: "Erro ao listar cartões" });
    }
}
    
}