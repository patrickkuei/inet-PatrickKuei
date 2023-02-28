import { SearchIcon } from '@inet/icons'
import renderer from 'react-test-renderer'
import Input from './Input'

it('render Input', () => {
  const component = renderer.create(
    <Input
      type="text"
      placeholder="搜尋 INET"
      suffix={<SearchIcon className="fill-primary-200" />}
    />,
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
