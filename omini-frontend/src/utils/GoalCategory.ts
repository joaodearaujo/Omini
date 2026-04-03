import { Mountain, Brush, Gamepad2, HandCoins, type LucideIcon} from "lucide-react";

export type GoalCategory = 'Holidays' | 'Renovation' | 'Gaming' | 'Savings';

const CATEGORY_GOALS: Record<GoalCategory, {icon: LucideIcon, color: string}> = {
    Holidays: {icon: Mountain, color: 'text-[#0ea5e9]'},
    Renovation: {icon: Brush, color: 'text-[#f97316]'},
    Gaming: {icon: Gamepad2, color: 'text-[#8b5cf6]'},
    Savings: {icon: HandCoins, color: 'text-[#10b981]'},
} as const;

export default CATEGORY_GOALS;