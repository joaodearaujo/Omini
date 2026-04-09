import Modal from "../../../ui/Modal/Modal"
import Form from "../../../ui/Form/Form"
import FormContent from "../../../ui/FormContent/FormContent"

interface MyCardsForm {
  isFormOpen: boolean,
  onClose: () => void,
}

const MYCARDS_FORM_CONFIG= [
    {label: 'Owner', name: 'Owner', type: 'text', placeholder: 'e.g. João Araújo'},
    {label: 'Bank', name: 'Bank', type: 'select', options: [{name: 'Select an Option', value: '', disabled: true},
                                                            {name: 'Santander', value: 'Santander'},
                                                            {name: 'Nubank', value: 'Nubank'},
                                                            {name: 'Inter', value: 'Inter'},
                                                            {name: 'BTG Pactual', value: 'BTG Pactual'}]},

    {label: 'Flag', name: 'Flag', type: 'select', options: [{name: 'Select an Option', value: '', disabled: true},
                                                            {name: 'Visa', value: 'Visa'},
                                                            {name: 'Mastercard', value: 'Mastercard'},
                                                            {name: 'American Express', value: 'American Express'}]},
                                                            
    {label: 'Expiration Date', name: 'Expiration Date', type: 'date', placeholder: ''}]



const MyCardsForm = ({ isFormOpen, onClose }: MyCardsForm) => {

  const handleChange = () => {

  }

  const handleSubimitContent = () => {

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
