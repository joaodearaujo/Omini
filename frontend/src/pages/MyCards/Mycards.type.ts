import type { LucideIcon } from "lucide-react";

export interface StatusCardProps {
    amount: number,
    title: string,
    description?: string,
    icon: LucideIcon,
}
