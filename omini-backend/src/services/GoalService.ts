import { Goal } from "../domain/entities/goal/Goal";
import { GoalRepository } from "../repositories/GoalsRepository";

export class GoalService {
  constructor(private repository: GoalRepository) {}

  async execute(data: { category: string; target: number; deadline: string }) {
    if (data.target <= 0) throw new Error("O valor alvo deve ser positivo.");
    
    const newGoal = new Goal(data.category, data.target, data.deadline);
    const savedGoal = await this.repository.saveGoalOnArray(newGoal);
    
    console.log(`[Service]: Meta ${savedGoal.category} criada.`);
    return savedGoal;
  }

  async list() {
    return await this.repository.listAll();
  }
}