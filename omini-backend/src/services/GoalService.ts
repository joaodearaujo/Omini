import { Goal } from "../domain/entities/goal/Goal";
import { GoalDTO } from "../dtos/GoalsDTO";

export class GoalService {
  execute(data: any): Goal {

    const goal = new Goal({
      value: data.value,
      targetValue: data.targetValue,
      date: new Date(data.date),
      category: data.category
    });
    
    return goal;
  }
}