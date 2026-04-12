interface FormFieldsProps {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  options?: { name: string; value: string; disabled?: boolean }[];
}

interface FormContentProps {
 config: FormFieldsProps[]
}

const STYLE = {
    fieldWrapper: 'w-full h-fit flex flex-col gap-2',
    input: 'w-full text-small rounded-xl border-1 border-black/10 py-3 px-4 outline-none focus:border-black/30 transition',
}

const FormContent = ({ config = [] }: FormContentProps) => {
  return (
    <div className="flex flex-col gap-2">
        {config.map((item, index) => (
          <div key={index} className={STYLE.fieldWrapper}>
            <label className="text-sm font-medium text-zinc-600">
              {item.label}
            </label>

            {item.type === 'select' ? (

              <select className={STYLE.input} name={item.name} required defaultValue="">
                {item.options?.map((opt, i) => (

                  <option key={i} value={opt.value} disabled={opt.disabled}>
                    {opt.name}
                  </option>
                ))}
              </select>

            ) : (
              <input 
                name={item.name}
                type={item.type} 
                className={STYLE.input} 
                placeholder={item.placeholder} 
                required 
              />
            )}
          </div>
        ))}
    </div>
  )
}

export default FormContent;
