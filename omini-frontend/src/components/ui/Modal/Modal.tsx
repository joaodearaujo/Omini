import FloatingCard from "../FloatingCard/FloatingCard";
import { SquareArrowRightExit } from "lucide-react";

interface ModalProps {
  isFormOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  description: string;
}

const Modal = ({ isFormOpen, onClose, children, title, description }: ModalProps) => {
  if (!isFormOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] bg-black/50 flex items-center justify-center  p-4">
      <FloatingCard style={{ width: '100%', maxWidth: '500px', position: 'relative' }}>
        <header className="flex flex-col gap-2 mb-8">
          <h2 className="text-medium font-medium text-zinc-900">{title}</h2>
          <p className="text-small text-secondary">{description}</p>
        </header>

        {children}
        
        <button 
          className="absolute right-6 top-6 cursor-pointer text-white hover:text-black transition" 
          onClick={onClose}
        >
          <SquareArrowRightExit size={24} />
        </button>
      </FloatingCard>
    </div>
  );
};

export default Modal