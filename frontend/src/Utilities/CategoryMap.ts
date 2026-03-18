 import { UtensilsCrossed, HeartPlus, Bus, Lightbulb, Armchair} from 'lucide-react'
import type { LucideIcon } from "lucide-react";

 export const CATEGORY_MAP: Record<string, LucideIcon> = {
  Food: UtensilsCrossed,
  Health: HeartPlus,
  Transport: Bus,
  Essentials: Lightbulb,
  Lifestyle: Armchair
};
