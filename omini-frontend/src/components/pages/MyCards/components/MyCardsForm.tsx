import Modal from "../../../ui/Modal/Modal"
import Form from "../../../ui/Form/Form"
import FormContent from "../../../ui/FormContent/FormContent"
import { useState } from "react"

interface MyCardsForm {
  isFormOpen: boolean,
  onClose: () => void,
  onCardCreated: () => void, 
}

const MYCARDS_FORM_CONFIG= [
    {label: 'Owner', name: 'Owner', type: 'text', placeholder: 'e.g. João Araújo'},
    {label: 'Bank', name: 'Bank', type: 'select', options: [{name: 'Select a Bank', value: '', disabled: true},
                                                            {name: 'Santander', value: 'Santander'},
                                                            {name: 'Nubank', value: 'Nubank'},
                                                            {name: 'Inter', value: 'Inter'},
                                                            {name: 'BTG Pactual', value: 'BTG Pactual'}]},
    {label: 'Card Number', name: 'Card Number', type: 'number', placeholder: '0000 0000 0000 0000'},

    {label: 'Color', name: 'Color', type: 'select', options: [{ name: 'Select a Color', value: '', disabled: true },
                                                              { name: 'Red', value: '#FF0000' },
                                                              { name: 'Blue', value: '#0000FF' },
                                                              { name: 'Green', value: '#008000' },
                                                              { name: 'Yellow', value: '#FFFF00' },
                                                              { name: 'Purple', value: '#800080' },
                                                              { name: 'Orange', value: '#FFA500' }]},


    {label: 'Flag', name: 'Flag', type: 'select', options: [{name: 'Select a Flag', value: '', disabled: true},
                                                            {name: 'Visa', value: 'Visa'},
                                                            {name: 'Mastercard', value: 'Mastercard'},
                                                            {name: 'American Express', value: 'American Express'}]},
                                                            
    {label: 'Expiration Date', name: 'Expiration Date', type: 'date'}]



const MyCardsForm = ({ isFormOpen, onClose, onCardCreated }: MyCardsForm) => {

  const [ formData, setFormData ] = useState({owner: '', bank: '', cardNumber: 0, color: '', flag: '', date: ''})

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }

  const handleSubimitContent = async (e: any) => {
  
    e.preventDefault();

    const creditCardPayLoad = {
      owner: formData.owner,
      bank: formData.bank,
      cardNumber: formData.cardNumber,
      color: formData.color,
      flag: formData.flag,
      date: formData.date,
    }

    try { 
      const response = await fetch('http://localhost:3333/mycards', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(creditCardPayLoad),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Backend validation failed:", errorData);
        return;
      }

      onClose();
      onCardCreated()

     } catch (error) {
        console.error("Network error:", error);
     }

  }

  return (
    <Modal title="Cards" description="Create all your Cardsw here!" isFormOpen={isFormOpen} onClose={onClose}>
      <Form onSubimit={handleSubimitContent} onChange={handleChange}>
         <FormContent config={MYCARDS_FORM_CONFIG} />
      </Form>
    </Modal>
  )
}

export default MyCardsForm
