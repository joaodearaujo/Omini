import Modal from "../../../ui/Modal/Modal";
import Form from "../../../ui/Form/Form";
import GoalsFormContent from "./GoalsFormContent";

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
]

interface GoalFormProps {
  isOpen: boolean,
  sendData?: any,
  onClose?: any,
}

export const GoalForm = ({isOpen, sendData, onClose}: GoalFormProps) => {

  return (
    <Modal title="Goals" description="Create all your goals here!" isOpen={isOpen} onClose={onClose}>
      <Form onSubimit={sendData}>
        <GoalsFormContent config={FORM_CONFIG}/>
      </Form>
    </Modal>
  )

}

export default GoalForm;