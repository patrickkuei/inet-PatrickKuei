import { render, screen } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'
import App from './App'

test('renders App', () => {
  render(<App />, { wrapper: BrowserRouter })
  expect(screen).toBeDefined()
})
