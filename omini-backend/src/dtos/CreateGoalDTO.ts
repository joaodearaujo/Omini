 export type GoalCategory = 'Holidays' | 'Renovation' | 'Gaming' | 'Savings';
 
 export interface CreateGoalDTO {
    id: string,
    value: number,
    targetValue: number,
    date: Date,
    category: GoalCategory,
} 