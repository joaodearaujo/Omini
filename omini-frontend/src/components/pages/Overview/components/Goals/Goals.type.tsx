import type { GoalCardProps } from "../../../../ui/GoalsCard/GoalsCard";

export interface GoalsProps {
    goals: GoalCardProps[],
}

export interface GoalButtonNavProps {
    isRight?: boolean,
    onClick: () => void,
}