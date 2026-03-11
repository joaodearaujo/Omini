import type { CardProps } from "./Card.type";

const Card = ({children}: CardProps) => {
  return (
    <div className="bg-white w-full p-3 flex flex-1 items-center justify-center shadow-md rounded-3xl">
        {children}
    </div>
  )
}

export default Card;
