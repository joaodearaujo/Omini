import type { ReactNode } from "react";

interface FormProps {
  children: ReactNode;
  onSubimit?: any;
}

const STYLE = {
  form: 'w-full h-full flex flex-col gap-4 mb-6',
  button: 'w-full h-fit bg-black text-white font-[400] rounded-xl py-3 px-3 cursor-pointer hover:bg-zinc-800 transition duration-400',
};

const Form = ({children, onSubimit}: FormProps) => {
  return (
    <form className={STYLE.form} onSubmit={onSubimit}>
      {children}
      <button type="submit" className={STYLE.button}>Create</button>
    </form>
  );
};

export default Form;