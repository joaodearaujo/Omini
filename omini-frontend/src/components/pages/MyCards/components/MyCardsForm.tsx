import Modal from "../../../ui/Modal/Modal"
import Form from "../../../ui/Form/Form"
import FormContent from "../../../ui/FormContent/FormContent"
import { useState } from "react"

interface MyCardsFormProps {
  isFormOpen: boolean,
  onClose: () => void,
  onCardCreated: () => void, 
}

const MYCARDS_FORM_CONFIG = [
    {label: 'Owner', name: 'owner', type: 'text', placeholder: 'e.g. João Araújo'},
    {label: 'Bank', name: 'bank', type: 'select', options: [
        {name: 'Select a Bank', value: '', disabled: true},
        {name: 'Santander', value: 'Santander'},
        {name: 'Nubank', value: 'Nubank'},
        {name: 'Inter', value: 'Inter'},
        {name: 'BTG Pactual', value: 'BTG Pactual'}
    ]},
    {label: 'Card Number', name: 'cardNumber', type: 'text', placeholder: '0000 0000 0000 0000'},
    {label: 'Color', name: 'color', type: 'select', options: [
        { name: 'Select a Color', value: '', disabled: true },
        { name: 'Red', value: '#FF0000' },
        { name: 'Blue', value: '#0000FF' },
        { name: 'Green', value: '#008000' },
        { name: 'Yellow', value: '#FFFF00' },
        { name: 'Purple', value: '#800080' },
        { name: 'Orange', value: '#FFA500' }
    ]},
    {label: 'Flag', name: 'flag', type: 'select', options: [
        {name: 'Select a Flag', value: '', disabled: true},
        {name: 'Visa', value: 'Visa'},
        {name: 'Mastercard', value: 'Mastercard'},
        {name: 'American Express', value: 'American Express'}
    ]},
    {label: 'Expiration Date', name: 'date', type: 'date'}
]

const MyCardsForm = ({ isFormOpen, onClose, onCardCreated }: MyCardsFormProps) => {
  const [formData, setFormData] = useState({
    owner: '', 
    bank: '', 
    cardNumber: 0, 
    color: '', 
    flag: '', 
    date: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
        ...prev, 
        [name]: name === 'cardNumber' ? Number(value) : value 
    }));
  }

  const handleSubimitContent = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.preventDefault();

    console.log(formData);
    
    try { 
      const response = await fetch('http://localhost:3333/mycards', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), 
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Backend validation failed:", errorData);
        return;
      }

      onClose();
      onCardCreated();
      
     } catch (error) {
        console.error("Network error:", error);
     }
  }

  return (
    <Modal title="Cards" description="Create all your Cards here!" isFormOpen={isFormOpen} onClose={onClose}>
      <Form onSubimit={handleSubimitContent} onChange={handleChange}>
         <FormContent config={MYCARDS_FORM_CONFIG} />
      </Form>
    </Modal>
  )
}

export default MyCardsForm