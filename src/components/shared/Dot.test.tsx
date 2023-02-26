import renderer from 'react-test-renderer'
import Dot from './Dot'

it('render Dot', () => {
  const component = renderer.create(<Dot />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
