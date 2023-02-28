import { useState } from 'react'

const useToggle = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false)

  const handleToggle = () => {
    setIsOpened((prev) => !prev)
  }

  return { isOpened, handleToggle, setIsOpened }
}

export default useToggle
