import { IArticleResponse } from '@inet/services/types/articles/i-article.view-model'
import Dot from '../shared/Dot'
import SpinLoader from '../shared/SpinLoader'

type Props = {
  response: IArticleResponse | undefined
  isFetching: boolean
}

const ArticleSectionTitleSearchResult = ({ response, isFetching }: Props) => {
  return isFetching ? (
    <SpinLoader />
  ) : (
    <div className="flex flex-row gap-2 items-center">
      <span className="text-10.5">Search Result</span>
      <Dot />
      <span className="text-tiny text-gray-300">
        {response!.data.length} articles.
      </span>
    </div>
  )
}

export default ArticleSectionTitleSearchResult
