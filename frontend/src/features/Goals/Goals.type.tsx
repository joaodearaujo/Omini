export interface GoalCardProps {
    id: string;
    value: number;
    date: string; 
    label: string;
}

export interface GoalsProps {
    goals: GoalCardProps[];
}

export interface GoalButtonNavProps {
    isRight?: boolean;
    onClick: () => void;
}