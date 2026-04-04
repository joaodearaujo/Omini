interface FormFieldProps {
  label: string;
  type: string;
  placeholder?: string;
  options?: { name: string; value: string; disabled?: boolean }[];
}

const STYLE = {
  form: 'w-full h-full flex flex-col gap-4 mb-6',
  fieldWrapper: 'w-full h-fit flex flex-col gap-2',
  input: 'w-full rounded-xl border-1 border-black/10 py-3 px-4 outline-none focus:border-black/30 transition',
  button: 'w-full h-fit bg-black text-white font-[400] rounded-xl py-3 px-3 cursor-pointer hover:bg-zinc-800 transition duration-400',
};

const TransactionForm = ({ config }: { config: FormFieldProps[] }) => {
  return (
    <form className={STYLE.form} onSubmit={(e) => e.preventDefault()}>
      {config.map((item, index) => (
        <div key={index} className={STYLE.fieldWrapper}>
          <label className="text-sm font-medium text-zinc-600">{item.label}</label>
          {item.type === 'select' ? (
            <select className={STYLE.input} required defaultValue="">
              {item.options?.map((opt, i) => (
                <option key={i} value={opt.value} disabled={opt.disabled}>
                  {opt.name}
                </option>
              ))}
            </select>
          ) : (
            <input 
              type={item.type} 
              className={STYLE.input} 
              placeholder={item.placeholder} 
              required 
            />
          )}
        </div>
      ))}
      <button type="submit" className={STYLE.button}>Create Transaction</button>
    </form>
  );
};

export default TransactionForm;