import type { CardProps } from "./Card.type";

const Card = ({children}: CardProps) => {
  return (
    <article className="bg-white w-full max-h-[400px] p-6 flex flex-col justify-center border-1 border-black/10 items-center rounded-3xl shadow-sm">
        <div className="flex-1 w-full flex flex-col gap-2">
          <div className="w-full">
              <h1 className="font-semibold text-[18px] text-[#404040] w-fit">Cards</h1>
          </div>
          {children}
        </div>
    </article>
  )
}

export default Card;
