import type { CSSProperties, ReactNode } from "react";

export interface FloatingCardProps {
    children: ReactNode;
    title?: string;
    style?: CSSProperties;
}