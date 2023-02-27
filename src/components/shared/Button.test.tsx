import renderer from 'react-test-renderer'
import Button from './Button'
it('render Button', () => {
  const component = renderer.create(<Button />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
