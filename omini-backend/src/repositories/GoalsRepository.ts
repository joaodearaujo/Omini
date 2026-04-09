import { Goal } from "../domain/entities/goal/Goal";

export class GoalRepository {
  private goals: Goal[] = []; 

  async save(goal: Goal): Promise<Goal> {
    this.goals.push(goal);
    return goal;
  }

  async listAll(): Promise<Goal[]> {
    return this.goals;
  }
}