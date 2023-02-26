import { useRef } from 'react'
import ReactDOM from 'react-dom'

type Props = {
  children: React.ReactNode
}

const MODAL_ROOT_ID = 'modal-root'

export default function ModalPortal({ children }: Props) {
  const container = useRef(document.getElementById(MODAL_ROOT_ID))

  if (container.current) {
    return ReactDOM.createPortal(children, container.current)
  } else {
    console.warn(`Cannot find element with ID ${MODAL_ROOT_ID}`)
    return null
  }
}
