import { ChevronRight, ChevronLeft } from 'lucide-react';
import type { CardNavButtonProps } from '../Cards.type';

const STYLE = {
  button: 'flex items-center min-w-4 min-h-4 justify-center group bg-[#F0F0F0] rounded-full p-2 cursor-pointer transition-all duration-300 ease-in-out hover:scale-102 hover:-translate-y-1 hover:shadow-sm',
}

const CardNavButton = ({ isRight = false, onClick }: CardNavButtonProps) =>{
     
  const SelectedIcon = isRight ? ChevronRight : ChevronLeft;

  return (
    <button onClick={onClick} className={STYLE.button}>
      <SelectedIcon 
        size={30} 
        className="text-[#404040] transition-transform duration-300 group-hover:scale-102" 
      />
    </button>
  );
};

export default CardNavButton;