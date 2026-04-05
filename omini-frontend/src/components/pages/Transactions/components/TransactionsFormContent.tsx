import type { TransactionsFormContent } from "../Transacitions.type"

const STYLE = {
    fieldWrapper: 'w-full h-fit flex flex-col gap-2',
    input: 'w-full rounded-xl border-1 border-black/10 py-3 px-4 outline-none focus:border-black/30 transition',
}

const TransactionsFormContent = ({ config }: TransactionsFormContent) => {
  return (
    <div>
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
    </div>
  )
}

export default TransactionsFormContent
