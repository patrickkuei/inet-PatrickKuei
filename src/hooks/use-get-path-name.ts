import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const useGetPathName = (patter: string, index: number) => {
  const [pathName, setPathName] = useState<string | undefined>(undefined)

  const location = useLocation()
  const pathnameArray = location.pathname.split('/')
  const categoryIndex = pathnameArray.indexOf(patter)

  useEffect(() => {
    if (categoryIndex > -1) {
      setPathName(pathnameArray[categoryIndex + index])
    }
  }, [location])

  return pathName
}

export default useGetPathName
