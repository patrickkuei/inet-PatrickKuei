interface IArticleListEmptyProps {
  searchKeyword?: string
}

const ArticleListEmpty = ({ searchKeyword }: IArticleListEmptyProps) => {
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

export default ArticleListEmpty
