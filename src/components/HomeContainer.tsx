import React from 'react'
import { ReactComponent as MainLogo } from '../images/mainLogo.svg'
import { ReactComponent as SearchIcon } from '../icons/searchIcon.svg'
import Button from './shared/Button'

type Props = {}

// eslint-disable-next-line no-empty-pattern
export default function HomeContainer({}: Props) {
  // navbar

  return (
    <div className="w-screen h-screen bg-background-white">
      <div className="h-16 px-16 bg-white shadow-md flex justify-between items-center">
        <div className="text-primary-500">
          <MainLogo className="h-6" />
        </div>
        <div className="w-1/3 h-10 flex">
          <input
            type="text"
            className="w-11/12 px-4 border-2 border-r-0 rounded-lg rounded-r-none border-primary-200"
            placeholder="搜尋 INET"
          />
          <div className="w-1/12 flex justify-center items-center border-2 border-l-0 rounded-lg rounded-l-none border-primary-200">
            <SearchIcon className="w-5 h-5" />
          </div>
        </div>
        <div className="flex space-x-4">
          <Button title="login" size="medium" type="outline" />
          <Button title="sign up" size="medium" type="filled" />
        </div>
      </div>
      HomeContainer
    </div>
  )
}
