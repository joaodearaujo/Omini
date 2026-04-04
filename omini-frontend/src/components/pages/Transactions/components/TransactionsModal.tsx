import FloatingCard from "../../../ui/FloatingCard/FloatingCard";
import { SquareArrowRightExit } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const TransactionModal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] bg-black/50 flex items-center justify-center  p-4">
      <FloatingCard style={{ width: '100%', maxWidth: '500px', padding: '40px', position: 'relative' }}>
        <button 
          className="absolute right-6 top-6 cursor-pointer text-zinc-400 hover:text-black transition" 
          onClick={onClose}
        >
          <SquareArrowRightExit size={24} />
        </button>
        {children}
      </FloatingCard>
    </div>
  );
};

export default TransactionModal