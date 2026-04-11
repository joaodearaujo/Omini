import Modal from "../../../ui/Modal/Modal";
import Form from "../../../ui/Form/Form";
import FormContent from "../../../ui/FormContent/FormContent"
import { useState } from "react";

interface GoalFormProps {
  isFormOpen: boolean,
  onClose: () => void,
  onGoalCreated: () => void;
}

const GOAL_FORM_CONFIG= [ 
    {label: 'Name', name: 'name', type: 'text', placeholder: 'e.g., Summer Holidays'},
    {label: 'Value', name: 'value',type: 'number', placeholder: '$ 0.00'},
    {label: 'Target', name: 'target',type: 'number', placeholder: '$ 0.00'},
    {label: 'Goal Category', name: 'category', type: 'select', options: [{name: 'Select an Option', value: '', disabled: true},
                                                       {name: 'Holidays', value: 'Holidays',},
                                                       {name: 'Renovation', value: 'Renovation'},
                                                       {name: 'Gaming', value: 'Gaming'},
                                                       {name: 'Savings', value: 'Savings'}]}]
                                                       

export const GoalForm = ({ isFormOpen, onClose, onGoalCreated }: GoalFormProps) => {

const [formData, setFormData] = useState({ 
  name: '',
  value: 0,
  target: 0,
  category: '',
 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubimitContent = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  e.preventDefault();

  console.log(formData)

  const goalFromForm = {
    name: formData.name,
    category: formData.category,
    value: Number(formData.value),
    target: Number(formData.target),
  };

  try {
    const response = await fetch('http://localhost:3333/goals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(goalFromForm),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Backend validation failed:", errorData);
      return;
    }
    
    onGoalCreated();
    onClose();
  } catch (err) {
    console.error("Network error:", err);
  }
};

  return (
    <Modal title="Goals" description="Create all your goals here!" isFormOpen={isFormOpen} onClose={onClose}>
      <Form onSubimit={handleSubimitContent} onChange={handleChange}>
         <FormContent config={GOAL_FORM_CONFIG} />
      </Form>
    </Modal>
  )

}

export default GoalForm;