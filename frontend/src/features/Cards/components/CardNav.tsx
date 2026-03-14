import { ChevronRight, ChevronLeft } from 'lucide-react';
import type { ReactNode } from 'react';

interface CardNavProps {
  children?: ReactNode; 
}

const NavButton = ({ isRight = false }: { isRight?: boolean }) => {
  
  const SelectedIcon = isRight ? ChevronRight : ChevronLeft;

  return (
    <button className="group bg-transparent cursor-pointer transition-transform duration-300 ease-in-out">
      <SelectedIcon 
        size={30} 
        className="text-[#404040] transition-transform duration-300 group-hover:scale-110" 
      />
    </button>
  );
};

const CardNav = ({children}: CardNavProps) => {
  return (
    <div className="flex gap-2 w-full items-center justify-center">
      <NavButton />   
      {children}
      <NavButton isRight /> 
    </div>
  );
};

export default CardNav