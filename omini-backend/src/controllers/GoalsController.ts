import { Request, Response } from 'express';
import { GoalService } from '../services/GoalService';

export class GoalsController {
  constructor(private goalService: GoalService) {}

  async handleCreate(req: Request, res: Response) {
    try {
      const result = await this.goalService.execute(req.body);
      return res.status(201).json(result);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  async handleList(req: Request, res: Response) {
    const goals = await this.goalService.list();
    return res.json(goals);
  }
}