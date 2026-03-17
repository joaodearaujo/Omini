export interface GoalCardProps {
    value: number;
    date: string; 
    label: string;
}

export interface GoalsProps {
    goals: GoalCardProps[];
}
