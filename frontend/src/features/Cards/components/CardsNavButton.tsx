import { ChevronRight, ChevronLeft } from 'lucide-react';
import type { CardNavButtonProps } from '../Cards.type';

const CardNavButton = ({ isRight = false, onClick }: CardNavButtonProps) =>{
  
  const SelectedIcon = isRight ? ChevronRight : ChevronLeft;

  return (
    <button onClick={onClick} className="group bg-transparent cursor-pointer transition-all duration-300 ease-in-out">
      <SelectedIcon 
        size={40} 
        className="text-[#404040] transition-transform duration-300 group-hover:scale-110" 
      />
    </button>
  );
};

export default CardNavButton;