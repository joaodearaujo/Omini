import type { GoalCardProps } from "../../../../components/ui/GoalsCard/GoalsCard";

export interface GoalsProps {
    goals: GoalCardProps[],
}

export interface GoalButtonNavProps {
    isRight?: boolean,
    onClick: () => void,
}