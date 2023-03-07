import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function useConditionNavigate(from: string, to: string) {
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === from) {
      navigate(to)
    }
  }, [])
}

export default useConditionNavigate
