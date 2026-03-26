import type { GoalCategory } from "../../../../utils/GoalCategory";

export interface GoalCardProps {
    id: string,
    value: number,
    date: string,
    label: GoalCategory
}

export interface GoalsProps {
    goals: GoalCardProps[],
}

export interface GoalButtonNavProps {
    isRight?: boolean,
    onClick: () => void,
}