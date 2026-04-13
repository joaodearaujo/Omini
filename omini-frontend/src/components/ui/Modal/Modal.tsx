import { createPortal } from "react-dom";
import FloatingCard from "../FloatingCard/FloatingCard";
import { SquareArrowRightExit } from "lucide-react";
import useFadeIn from "../../../hooks/useFadeIn";

interface ModalProps {
  isFormOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  description: string;
}

const Modal = ({ isFormOpen, onClose, children, title, description }: ModalProps) => {
  if (!isFormOpen) return null;

  const { isVisible } = useFadeIn();

  return  createPortal (
    <div className={`fixed inset-0 bg-black/50 flex items-center justify-center p-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0 ' : 'opacity-0 translate-y-1'}`}>
      <FloatingCard style={{ width: '100%', maxWidth: '500px', position: 'relative' }}>
        <header className="flex flex-col gap-2 mb-8">
          <h2 className="text-medium text-primary">{title}</h2>
          <p className="text-small text-secondary">{description}</p>
        </header>

        {children}
        
        <button 
          className="absolute right-6 top-6 cursor-pointer text-black" 
          onClick={onClose}
        >
          <SquareArrowRightExit size={24} />
        </button>
      </FloatingCard>
    </div>,
    document.body
  ) ;
};

export default Modal