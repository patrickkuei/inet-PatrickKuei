import articles from '@inet/mockData/articles'
import renderer from 'react-test-renderer'
import ArticlePreview from './ArticlePreview'

it('render ArticlePreview', () => {
  const component = renderer.create(
    <ArticlePreview article={articles[0]} createdAt="8 days ago" />,
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
