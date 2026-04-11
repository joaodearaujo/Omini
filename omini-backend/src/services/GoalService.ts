import { Goal } from "../domain/entities/goal/Goal";
import { GoalRepository } from "../repositories/GoalsRepository";
import { GoalProps } from "../domain/entities/goal/Goal";

export class GoalService {
  constructor(private repository: GoalRepository) {}

  async execute(data: GoalProps) {
    if (data.target <= 0) throw new Error("O valor alvo deve ser positivo.");
    
    const newGoal = new Goal(data);
    const savedGoal = await this.repository.saveGoalOnArray(newGoal);
    
    console.log(`[Service]: Meta ${savedGoal.category} criada.`);
    console.log(data);
    return savedGoal;
  }

  async list() {
    return await this.repository.listAll();
  }
}