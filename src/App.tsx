import { Provider } from 'react-redux'
import './App.css'
import { store } from './redux/store'
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
