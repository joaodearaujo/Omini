import { useState } from "react"

const useFormVisibility = () => {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false)

  const toggleForm = () => {
    return  (
      setIsFormVisible(true)
    )
  }

  const closeForm = () => {
    return  (
      setIsFormVisible(false)
    )
  }

  return {
    isFormVisible,
    toggleForm,
    closeForm,
  }
}

export default useFormVisibility;