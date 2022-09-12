import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import { store } from './app/store'
import Home from './components/pages/Home'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  )
}

export default App
