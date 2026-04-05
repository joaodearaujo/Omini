import type { ReactNode } from "react";

interface FormCreateProps {
  children: ReactNode;
}

const STYLE = {
  form: 'w-full h-full flex flex-col gap-4 mb-6',
  button: 'w-full h-fit bg-black text-white font-[400] rounded-xl py-3 px-3 cursor-pointer hover:bg-zinc-800 transition duration-400',
};

const FormCreate = ({children}: FormCreateProps) => {
  return (
    <form className={STYLE.form} onSubmit={(e) => e.preventDefault()}>
      {children}
      <button type="submit" className={STYLE.button}>Create</button>
    </form>
  );
};

export default FormCreate;