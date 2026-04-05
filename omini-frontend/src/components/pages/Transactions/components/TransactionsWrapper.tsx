import { useState } from "react";
import Modal from "../../../ui/Modal/Modal";
import FormCreate from "../../../ui/Form/Form";
import TransactionsFormContent from "./TransactionsFormContent";
import SectionHeader from "../../../ui/SectionHeader/SectionHeader";
import FloatingCard from "../../../ui/FloatingCard/FloatingCard";
import useFadeIn from "../../../../hooks/useFadeIn";

const FORM_CONFIG = [
  {label: 'Receiver', type:'text', placeholder: 'e.g., Monthhly Subscription  '},
  {label: 'Amount', type:'number', placeholder: '$ 0.00'},                                            
  {label: 'Category', type:'select', options: [ {name: 'Select a Category', value: '', disabled: true},
                                              { name: 'Income', value: 'income' },
                                              { name: 'Expenses', value: 'expenses' },
                                              { name: 'Savings', value: 'savings' },
                                              { name: 'Investments', value: 'investments' },
                                              { name: 'Entertainment', value: 'entertainment' },
                                              { name: 'Food & Dining', value: 'food_dining' },
                                              { name: 'Transportation', value: 'transportation' },
                                              { name: 'Utilities', value: 'utilities' },
                                              { name: 'Healthcare', value: 'healthcare' },
                                              { name: 'Shopping', value: 'shopping' },
                                              { name: 'Other', value: 'other' }]},
  {label: 'Date', type:'date', placeholder: 'e.g, Monthhly Subscription  '},
  {label: 'Status', type:'select', options: [ {name: 'Select a status', value: '', disabled: true},
                                              {name: 'Completed', value: 'completed'},
                                              {name: 'Pending', value: 'pending'},
                                              {name: 'Canceled', value: 'canceled'},

  ]},

]

const TransactionsWrapper = () => {
  const { isVisible } = useFadeIn();
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className={`w-full h-full transition-all duration-800 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Modal title="New Transaction" description="Create your transaction here!" isOpen={isFormOpen} onClose={() => setIsFormOpen(false)}>
        <FormCreate>
          <TransactionsFormContent config={FORM_CONFIG}/>
        </FormCreate>
      </Modal>

      <FloatingCard>
        <section className="p-2">
          <SectionHeader title="Recent Transactions" onClick={() => setIsFormOpen(true)} />
        </section>
      </FloatingCard>
          </div>
  );
};

export default TransactionsWrapper