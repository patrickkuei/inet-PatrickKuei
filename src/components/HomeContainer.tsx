import React from 'react'
import mainLogo from '../images/Vector.svg'

type Props = {}

// eslint-disable-next-line no-empty-pattern
export default function HomeContainer({}: Props) {
  // navbar

  return (
    <div className="w-screen h-screen bg-background-white">
      <div className="h-16 px-16 bg-white shadow-md flex justify-between items-center">
        <div className="text-primary-500">
          <img className="h-6" src={mainLogo} alt="main logo" />
        </div>
        <div className="w-1/3 h-10 flex">
          <input
            type="text"
            className="w-11/12 px-4 border-2 border-r-0 rounded-lg rounded-r-none border-primary-200"
            placeholder="搜尋 INET"
          />
          <div className="w-1/12 flex justify-center items-center border-2 border-l-0 rounded-lg rounded-l-none border-primary-200">
            <i className="bg-icon-search bg-no-repeat inline-block w-5 h-5" />
          </div>
        </div>
        <div>
          <button
            type="button"
            className="w-24 h-10 border-2 rounded-3xl border-primary-500 text-primary-500"
          >
            login
          </button>
          <button
            type="button"
            className="w-24 h-10 border-2 rounded-3xl bg-primary-500 border-primary-500 text-primary-500 text-white"
          >
            sign up
          </button>
        </div>
      </div>
      HomeContainer
    </div>
  )
}
