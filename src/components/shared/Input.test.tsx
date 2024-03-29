import { SearchIcon } from '@inet/icons'
import { store } from '@inet/redux/store'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Input from './Input'

it('render Input', () => {
  const ref = React.createRef<HTMLInputElement>()
  const component = renderer.create(
    <Router>
      <Provider store={store}>
        <Input
          ref={ref}
          type="text"
          placeholder="搜尋 INET"
          suffix={<SearchIcon className="fill-primary-200" />}
        />
      </Provider>
    </Router>,
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
