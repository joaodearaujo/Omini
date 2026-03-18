import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";

export interface OutcomePercentageProps {
    category: string;
    icon: LucideIcon | ComponentType<{ size?: number; className?: string }>
    bgColor: string;
    iconColor: string;
    track: number;
    indicator: number;
}