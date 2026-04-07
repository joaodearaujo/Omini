import { Goal } from "../domain/entities/goal/Goal";
import { CreateGoalDTO } from "../dtos/CreateGoalDTO";

export class GoalService {

  public  execute(data: CreateGoalDTO): Goal {

    if (data.targetValue < 0) {
      throw new Error('The value must be 1 or more.')
    }

    const goal = new Goal({
      value: data.value,
      targetValue: data.targetValue,
      date: new Date(data.date),
      category: data.category
    });
    
    return goal;
  }
}