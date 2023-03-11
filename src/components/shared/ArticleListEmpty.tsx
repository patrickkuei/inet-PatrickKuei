export interface IArticleListEmptyProps {
  searchKeyword?: string
}

const ArticleListEmpty = ({ searchKeyword }: IArticleListEmptyProps) => {
  return (
    <span className="text-tiny text-gray-500">
      {searchKeyword ? (
        <div className="border-t pt-6 mt-4">
          No articles related to{' '}
          <span className="text-secondary-500">
            &quot;{searchKeyword}&quot;
          </span>{' '}
          were found.
        </div>
      ) : (
        <div className="border-t pt-6">No related articles.</div>
      )}
    </span>
  )
}

export default ArticleListEmpty
