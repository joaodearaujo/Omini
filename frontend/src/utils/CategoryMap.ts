 import { UtensilsCrossed, HeartPlus, Bus, Lightbulb, Armchair} from 'lucide-react'
import type { LucideIcon } from "lucide-react";

type TransactionCategory = 'Food' | 'Health' | 'Transport' | 'Essentials' | 'Lifestyle'

 export const CATEGORY_MAP: Record<TransactionCategory, {icon: LucideIcon, iconColor: string, progressBarColor: string, bgColor: string}> = {

  Food: {icon: UtensilsCrossed, 
        iconColor: 'text-[#FF6B35]',
        progressBarColor: '#FF6B35',
        bgColor: '#FFB38A'},

  Health: {
        icon: HeartPlus, 
        iconColor: 'text-[#00ED64]', 
        progressBarColor: '#00ED64',
        bgColor: '#98FB98'},

  Transport: {
        icon: Bus,
        iconColor: 'text-[#1E90FF]', 
        progressBarColor: '#1E90FF',
        bgColor: '#87CEFA'},

  Essentials: {
        icon: Lightbulb,
        iconColor: 'text-[#00CED1]',
        progressBarColor: '#00CED1',
        bgColor: '#00CED115'},

  Lifestyle: {
        icon: Armchair,
        iconColor: 'text-[#BA55D3]',
        progressBarColor: '#BA55D3',
        bgColor: '#C3B1E1'}
 };
