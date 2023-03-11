import articles from '@inet/mockData/articles'
import { store } from '@inet/redux/store'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import ArticlePreview from './ArticlePreview'

it('render ArticlePreview', () => {
  const component = renderer.create(
    <Provider store={store}>
      <ArticlePreview article={articles[0]} createdAt="8 days ago" />
    </Provider>,
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
