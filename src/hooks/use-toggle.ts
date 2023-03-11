import { Dispatch, SetStateAction, useState } from 'react'

export type IUseToggle = [
  boolean,
  () => void,
  Dispatch<SetStateAction<boolean>>,
]

const useToggle = (): IUseToggle => {
  const [isOpened, setIsOpened] = useState<boolean>(false)

  const handleToggle = () => {
    setIsOpened((prev) => !prev)
  }

  return [isOpened, handleToggle, setIsOpened]
}

export default useToggle
