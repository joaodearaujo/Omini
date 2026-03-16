import type { CSSProperties, ReactNode } from "react";

export interface SectionProps {
    children: ReactNode;
    title: string;
    style?: CSSProperties;
}