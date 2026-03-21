import { useRef } from "react"

const useGoalsNavigatrion = () => {

    const goalsRef = useRef<HTMLDivElement>(null)   
   
   const goalsScrollNext = () => {
    goalsRef.current?.scrollBy({left:385, behavior: "smooth"})
}
   
   const goalsScrollPrevious = () => {  
    goalsRef.current?.scrollBy({left:-385, behavior: "smooth"})
}
      
return {
    goalsRef,
    goalsScrollNext,
    goalsScrollPrevious
}

}

export default useGoalsNavigatrion
