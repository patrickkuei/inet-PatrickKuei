import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

type Props = {
  children: React.ReactNode
}

export default function ModalPortal({ children }: Props) {
  const el = useRef(document.createElement('div'))

  useEffect(() => {
    document.getElementById('modal-root')?.appendChild(el.current)

    return () => {
      document.getElementById('modal-root')?.removeChild(el.current)
    }
  }, [])

  return ReactDOM.createPortal(children, el.current)
}
