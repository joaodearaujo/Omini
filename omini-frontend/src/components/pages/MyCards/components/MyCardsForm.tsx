import Modal from "../../../ui/Modal/Modal"
import Form from "../../../ui/Form/Form"
import FormContent from "../../../ui/FormContent/FormContent"
import { useState } from "react"
import type { CardInfoProps } from "../../../ui/CreditCard/CreditCard.type"

interface MyCardsFormProps {
  isFormOpen: boolean,
  onClose: () => void,
  onCardCreated: () => void,
  onAddCard?: (card: CardInfoProps) => void,
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
        { name: 'Red', value: '#E3262E' },
        { name: 'Blue', value: '#0000FF' },
        { name: 'Green', value: '#008000' },
        { name: 'Purple', value: '#820AD1' },
        { name: 'Orange', value: '#FF7A00' },
        { name: 'Black', value: '#111111' }
    ]},
    {label: 'Flag', name: 'flag', type: 'select', options: [
        {name: 'Select a Flag', value: '', disabled: true},
        {name: 'Visa', value: 'Visa'},
        {name: 'Mastercard', value: 'Mastercard'},
        {name: 'American Express', value: 'American Express'}
    ]},
    {label: 'Expiration Date', name: 'date', type: 'text', placeholder: 'MM/YY'}
]

const MyCardsForm = ({ isFormOpen, onClose, onCardCreated, onAddCard }: MyCardsFormProps) => {
  const [formData, setFormData] = useState({
    owner: '',
    bank: '',
    cardNumber: '',
    color: '',
    flag: '',
    date: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  const handleSubimitContent = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.preventDefault();

    const newCard: CardInfoProps = {
      id: `cc-${Date.now()}`,
      owner: formData.owner,
      bank: formData.bank as CardInfoProps['bank'],
      flag: formData.flag as CardInfoProps['flag'],
      color: formData.color,
      number: formData.cardNumber,
      date: formData.date,
      balance: 0,
      income: 0,
      outcome: 0,
      totalLimit: 5000,
      limitUsage: 0,
    };

    onAddCard?.(newCard);
    onClose();
    onCardCreated();
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
