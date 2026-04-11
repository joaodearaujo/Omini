import { TransactionsService } from "../services/TransactionsService";
import { Request, Response } from "express";

export class TransctionsController {
    constructor(private transactionsService: TransactionsService) {}

    async handleCreate(req: Request, res: Response) {

        try {
            const result = await this.transactionsService.execute(req.body);
            return res.status(201).json(result)
        } catch (error: any) {
            return res.status(400).json({message: error.message})
        }
    }

    async handleList(req: Request, res: Response) {
        try {
            const transacionsArray = await this.transactionsService.listTransactions();
            return res.status(200).json(transacionsArray);
        } catch (error: any) {
            return res.status(500).json({message: error.message})
        }
    }
}