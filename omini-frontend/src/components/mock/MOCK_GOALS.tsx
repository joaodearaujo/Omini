import type { GoalCardProps } from "../ui/GoalsCard/GoalsCard";

export const MOCK_GOALS: GoalCardProps[] = [
  {
    id: "goal-001",
    label: 'Holidays',
    value: 4500, 
    targetValue: 12500, 
    date: '15/12/26', 
  },
  {
    id: "goal-002",
    label: 'Renovation',
    value: 1200, 
    targetValue: 4500, 
    date: '20/08/26', 
  },
  {
    id: "goal-003",
    label: 'Gaming',
    value: 3500, 
    targetValue: 3500, 
    date: '10/05/26', 
  },
  {
    id: "goal-005",
    label: 'Savings',
    value: 25000, 
    targetValue: 100000, 
    date: '01/01/30', 
  },
];