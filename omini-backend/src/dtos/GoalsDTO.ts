  export type GoalCategory = 'Holidays' | 'Renovation' | 'Gaming' | 'Savings';
 
 export interface GoalDTO {
    id: string,
    value: number,
    targetValue: number,
    date: Date,
    category: GoalCategory,
} 