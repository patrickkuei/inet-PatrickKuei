import { useAppSelector } from '@inet/app/hooks'

type Props = {}

const ArticleSectionArticleListNoArticle = (props: Props) => {
  const searchKeyword = useAppSelector(
    (state) => state.searchReducer.searchKeyword,
  )

  return (
    <span className="text-tiny text-gray-500">
      {searchKeyword ? (
        <>
          No articles related to{' '}
          <span className="text-secondary-500">
            &quot;{searchKeyword}&quot;
          </span>{' '}
          were found.
        </>
      ) : (
        'No related articles.'
      )}
    </span>
  )
}

export default ArticleSectionArticleListNoArticle
