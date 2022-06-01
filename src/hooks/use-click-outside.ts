import { RefObject, useEffect } from 'react'

function useClickOutside(
  ref: RefObject<HTMLElement>,
  callback: (e: MouseEvent | TouchEvent) => void,
) {
  useEffect(() => {
    function handleClick(event: MouseEvent | TouchEvent) {
      event.stopPropagation()
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event)
      }
    }

    document.addEventListener('mousedown', handleClick)
    document.addEventListener('touchstart', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('touchstart', handleClick)
    }
  }, [callback])
}

export default useClickOutside
