 export type GoalCategory = 'Holidays' | 'Renovation' | 'Gaming' | 'Savings';
 
 export interface CreateGoalDTO {
    id: string,
    value: number,
    targetValue: number,
    deadline: string,
    category: GoalCategory,
} 