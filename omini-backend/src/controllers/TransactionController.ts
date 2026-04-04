import { Request, Response } from "express";

interface TransactionProps {
    id: string;
    status: 'Completed' | 'Pending' | 'Canceled'
    cardId?: string;
    receiver: string;
    category: 'Food' | 'Health' | 'Transport' | 'Essentials' | 'Lifestyle';
    date: string;
    amount: number;
} 

export class TransactionController  { 

  private transactions: TransactionProps[] = []

   async pullTransaction(req: Request, res: Response) { 
      try {
        return res.json(this.transactions) 
      } catch (error) {
        return res.status(500).json({error: "Internal Server Error"})
      }
  }

async createTransaction(req: Request, res: Response) {
    try {
      const { receiver, amount } = req.body;

      if (!receiver || !amount) {
        return res.status(400).json({ error: "Receiver and amount are required." });
      }

      const newTransaction: TransactionProps = {
        id: String(Math.random()),
        receiver,
        amount: Number(amount),
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: '2026' }),
        category: "Food",
        status: "Completed"
      };

      this.transactions.unshift(newTransaction); 
      
      return res.status(201).json(newTransaction);
    } catch (error) {
      return res.status(400).json({ error: "Failed to create transaction." });
    }
  }
}