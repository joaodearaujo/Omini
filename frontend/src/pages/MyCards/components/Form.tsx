import type { CardsSectionsHeaderProps } from '../Mycards.type';

const STYLE = {
    backdrop: 'fixed inset-0 z-[1000] bg-black/50 flex items-center justify-center',
    formWrapper: 'w-[30%] h-fit flex flex-col bg-white z-[1001] rounded-4xl p-8 gap-8',
    button: 'bg-black text-white flex-1 font-[500] rounded-xl py-2 px-3 cursor-pointer transition duration-400 hover:scale-104',
}

const FORM_CONFIG = [
  { id: 'holder', label: 'Card Holder Name', placeholder: 'João Pedro Araújo', type: 'text' },
  { id: 'bank', label: 'Bank Name', placeholder: 'Omini', type: 'text' },
  { id: 'number', label: 'Card Number', placeholder: '**** **** **** ****', type: 'text' },
  { id: 'expiry', label: 'Expiry Date', placeholder: '05/32', type: 'text' }, 
  { id: 'flag', label: 'Card Flag', type: 'select', options: ['Visa', 'MasterCard', 'American Express'] },
  { id: 'color', label: 'Card Color', type: 'select', options: ['Blue', 'Red', 'Green', 'Black', 'Purple']}
];

const Form = ({onClick}: CardsSectionsHeaderProps) => {

  return (
        <div className={STYLE.backdrop}>
          <div className={STYLE.formWrapper}>

            <div className="flex flex-col items-center justify-center sgap-2">
                <strong>Create your Card</strong>
                <small>Give your credit card information below.</small>
              </div>

            <form className="w-full h-full flex flex-col gap-4">
                {FORM_CONFIG.map((item) => {
                    return (
                        <div key={item.id} className="flex flex-col gap-1">
                            <label htmlFor={item.id} className="text-[14px] font-[500]">{item.label}</label>

                            {item.type === 'select' ? (
                                <select id={item.id} required className="py-2 px-3 rounded-lg text-[#404040] bg-[#f3f3f5] text-[12px] outline-none">
                                    <option value="" disabled selected>Select a Option</option>

                                    {item.options?.map(opt => (<option key={opt} value={opt}>{opt}</option>))}

                                </select>
                            ) : (
                                <input type={item.type} placeholder={item.placeholder} required className="py-2 px-3 rounded-lg text-[#404040] bg-[#f3f3f5] text-[12px] outline-none"/>
                            )}

                        </div>
                    )
                })}

                <div className='flex gap-4'>
                    <button className={STYLE.button} type='subit'>Create</button>
                    <button className={STYLE.button} onClick={onClick}>Cancel</button>
                </div>
            </form>
          </div>
        </div>
  )
}

export default Form
