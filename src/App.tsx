import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import { store } from './app/store'
import Router from './Router'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router />
      </div>
    </Provider>
  )
}

export default App
