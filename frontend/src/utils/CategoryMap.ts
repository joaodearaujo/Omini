 import { UtensilsCrossed, HeartPlus, Bus, Lightbulb, Armchair} from 'lucide-react'
import type { LucideIcon } from "lucide-react";

type TransactionCategory = 'Food' | 'Health' | 'Transport' | 'Essentials' | 'Lifestyle'

 export const CATEGORY_MAP: Record<TransactionCategory, {icon: LucideIcon, iconColor: string, progressBarColor: string, bgColor: string}> = {

  Food: {
    icon: UtensilsCrossed, 
    iconColor: 'text-[#FF845E]',       
    progressBarColor: '#FF845E',
    bgColor: '#FFF5F2',               
  },

  Health: {
    icon: HeartPlus, 
    iconColor: 'text-[#2CC069]',       
    progressBarColor: '#2CC069',
    bgColor: '#F2FAF5',              
  },

  Transport: {
    icon: Bus,
    iconColor: 'text-[#47A1FF]',        
    progressBarColor: '#47A1FF',
    bgColor: '#F0F7FF',             
  },

  Essentials: {
    icon: Lightbulb,
    iconColor: 'text-[#36B9CC]',       
    progressBarColor: '#36B9CC',
    bgColor: '#F1FAFB',              
  },

  Lifestyle: {
    icon: Armchair,
    iconColor: 'text-[#A374F2]',        
    progressBarColor: '#A374F2',
    bgColor: '#F7F4FD',               
  },
}