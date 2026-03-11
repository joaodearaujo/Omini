import type { CardProps } from "./Card.type";

const Card = ({children}: CardProps) => {
  return (
    <div className="bg-white p-4 w-full flex-1 shadow-md rounded-xl">
        {children}
    </div>
  )
}

export default Card;
