import Modal from "../../ui/Modal/Modal";
import Form from "../../ui/Form/Form";
import FormContent from "../../ui/FormContent/FormContent";
import { useState } from "react";

interface TransactionsFormProps {
    isFormOpen: boolean,
    onClose: () => void,
    onTransactionsCreated: () => void,
    onAddTransaction?: (transaction: TransactionFormData) => void,
}

export interface TransactionFormData {
    status: 'Completed' | 'Pending' | 'Canceled';
    receiver: string;
    category: 'Food' | 'Health' | 'Transport' | 'Essentials' | 'Lifestyle';
    date: string;
    amount: number;
}

const TRANSACTIONS_FORM_CONFIG = [
    {label: 'Receiver', name: 'receiver', type: 'text', placeholder: 'e.g. Amazon'},
    {label: 'Amount', name: 'amount', type: 'number', placeholder: '$ 0.00'},
    {label: 'Status', name: 'status', type: 'select', options: [
        { name: 'Select a Status', value: '', disabled: true },
        { name: 'Completed', value: 'Completed' },
        { name: 'Pending', value: 'Pending' },
        { name: 'Canceled', value: 'Canceled' },
    ]},
    {label: 'Category', name: 'category', type: 'select', options: [
        {name: 'Select a Category', value: '', disabled: true},
        {name: 'Food', value: 'Food'},
        {name: 'Health', value: 'Health'},
        {name: 'Transport', value: 'Transport'},
        {name: 'Essentials', value: 'Essentials'},
        {name: 'Lifestyle', value: 'Lifestyle'},
    ]},
    {label: 'Date', name: 'date', type: 'date'}
]

const TransactionsForm = ({isFormOpen, onClose, onTransactionsCreated, onAddTransaction}: TransactionsFormProps) => {

    const [formData, setFormaData] = useState({
        status: '',
        receiver: '',
        category: '',
        date: '',
        amount: 0,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormaData(prev => ({...prev, [name]: name === 'amount' ? Number(value) : value}))
    }

    const handleSubimit = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        e.preventDefault();

        const newTransaction: TransactionFormData = {
            status: formData.status as TransactionFormData['status'],
            receiver: formData.receiver,
            category: formData.category as TransactionFormData['category'],
            date: formData.date,
            amount: Number(formData.amount),
        };

        onAddTransaction?.(newTransaction);
        onClose();
        onTransactionsCreated();
    }

  return (
    <Modal title="New Transaction" description="Create your transaction here!" isFormOpen={isFormOpen} onClose={onClose}>
        <Form onSubimit={handleSubimit} onChange={handleChange}>
          <FormContent config={TRANSACTIONS_FORM_CONFIG}/>
        </Form>
    </Modal>
  )
}

export default TransactionsForm
