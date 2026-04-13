import { useMemo } from "react"

const useFormatNumber = () => {

const formatter = useMemo(() => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }, []);

  const format = (value: number) => {
    
    return (formatter.format(value));
  };

  return { format };
}

export default useFormatNumber
