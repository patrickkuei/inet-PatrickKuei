import { useAppSelector } from '@inet/app/hooks'
import { IArticleResponse } from '@inet/services/types/articles/i-article.view-model'
import Dot from '../shared/Dot'
import SpinLoader from '../shared/SpinLoader'

type Props = {
  response: IArticleResponse | undefined
  isFetching: boolean
}

const ArticleSectionTitleSearchResult = ({ response, isFetching }: Props) => {
  const searchKeyword = useAppSelector(
    (state) => state.searchReducer.searchKeyword,
  )

  return isFetching ? (
    <SpinLoader />
  ) : (
    <>
      <div className="flex flex-row gap-2 items-center">
        <span className="text-10.5">Search Result</span>
        <Dot />
        <span className="text-tiny text-gray-300">
          {response!.data.length} articles
        </span>
      </div>
      {response!.data.length > 0 ? (
        <div className="pt-2 pb-3 text-left text-gray-300">
          The articles related to{' '}
          <span className="text-secondary-500">
            &quot;{searchKeyword}&quot;
          </span>
        </div>
      ) : null}
    </>
  )
}

export default ArticleSectionTitleSearchResult
