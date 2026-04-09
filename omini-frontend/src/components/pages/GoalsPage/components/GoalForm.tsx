import Modal from "../../../ui/Modal/Modal";
import Form from "../../../ui/Form/Form";
import FormContent from "../../../ui/FormContent/FormContent"
import { useState } from "react";

interface GoalFormProps {
  isOpen: boolean,
  onClose: () => void,
  onGoalCreated: () => void;
}

const GOAL_FORM_CONFIG= [
    {label: 'Goal Name', type: 'text', placeholder: 'e.g., Summer Holidays'},
    {label: 'Amount', type: 'number', placeholder: '$ 0.00'},
    {label: 'Goal Category', type: 'select', options: [{name: 'Select an Option', value: '', disabled: true},
                                                       {name: 'Holidays', value: 'Holidays',},
                                                       {name: 'Renovation', value: 'Renovation'},
                                                       {name: 'Gaming', value: 'Gaming'},
                                                       {name: 'Savings', value: 'Savings'}]}]

export const GoalForm = ({ isOpen, onClose, onGoalCreated }: GoalFormProps) => {

const [formData, setFormData] = useState({ category: 'Savings', target: 0, targetValue: 0, deadline: '' });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubimitContent = async (e: any) => {
  e.preventDefault();

  // Construct the payload to match CreateGoalDTO exactly
  const payload = {
    category: formData.category,
    targetValue: Number(formData.targetValue),
    deadline: formData.deadline,
    value: 0, // Initial value is usually 0
    // id: crypto.randomUUID() -> Only if the DTO requires the client to send the ID
  };

  try {
    const response = await fetch('http://localhost:3333/goals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
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
    <Modal title="Goals" description="Create all your goals here!" isOpen={isOpen} onClose={onClose}>
      <Form onSubimit={handleSubimitContent} onChange={handleChange}>
         <FormContent config={GOAL_FORM_CONFIG} />
      </Form>
    </Modal>
  )

}

export default GoalForm;