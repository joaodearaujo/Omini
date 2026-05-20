import Modal from "../../../ui/Modal/Modal";
import Form from "../../../ui/Form/Form";
import FormContent from "../../../ui/FormContent/FormContent"
import { useState } from "react";
import type { GoalCardProps } from "../../../ui/GoalsCard/GoalsCard";

interface GoalFormProps {
  isFormOpen: boolean,
  onClose: () => void,
  onGoalCreated: () => void;
  onAddGoal?: (goal: GoalCardProps) => void;
}

const GOAL_FORM_CONFIG = [
    {label: 'Name', name: 'name', type: 'text', placeholder: 'e.g., Summer Holidays'},
    {label: 'Value', name: 'value', type: 'number', placeholder: '$ 0.00'},
    {label: 'Target', name: 'target', type: 'number', placeholder: '$ 0.00'},
    {label: 'Goal Category', name: 'category', type: 'select', options: [
        {name: 'Select an Option', value: '', disabled: true},
        {name: 'Holidays', value: 'Holidays'},
        {name: 'Renovation', value: 'Renovation'},
        {name: 'Gaming', value: 'Gaming'},
        {name: 'Savings', value: 'Savings'}
    ]}
]

export const GoalForm = ({ isFormOpen, onClose, onGoalCreated, onAddGoal }: GoalFormProps) => {

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

    const newGoal: GoalCardProps = {
      name: formData.name,
      category: formData.category as GoalCardProps['category'],
      value: Number(formData.value),
      target: Number(formData.target),
    };

    onAddGoal?.(newGoal);
    onGoalCreated();
    onClose();
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
