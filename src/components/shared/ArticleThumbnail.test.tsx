import renderer from 'react-test-renderer'
import articles from '../../mockData/articles'
import ArticleThumbnail from './ArticleThumbnail'

it('render ArticleThumbnail', () => {
  const component = renderer.create(
    <ArticleThumbnail
      article={articles[0]}
      createdAtDuration="8 days ago"
    ></ArticleThumbnail>,
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
