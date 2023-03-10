import { useAppSelector } from '@inet/app/hooks'
import { IArticleViewModel } from '@inet/services/types/articles/i-article.view-model'
import moment from 'moment'
import { useRef } from 'react'
import ArticleListEmpty from './ArticleListEmpty'
import ArticlePreview from './ArticlePreview'
import SpinLoader from './SpinLoader'

interface IArticleListProps {
  isLoading: boolean
  articles: IArticleViewModel[]
}

export default function ArticleList({
  isLoading,
  articles,
}: IArticleListProps) {
  const currentMoment = useRef(moment())

  const searchKeyword = useAppSelector(
    (state) => state.searchReducer.searchKeyword,
  )

  return isLoading ? (
    <SpinLoader className="mt-12" />
  ) : !articles.length ? (
    <ArticleListEmpty searchKeyword={searchKeyword} />
  ) : (
    <div className="flex flex-col gap-y-5">
      {articles.map((article) => {
        const createdAt = moment
          .duration(-currentMoment.current.diff(moment(article.createdAt)))
          .humanize(true)

        return (
          <ArticlePreview
            key={article.id}
            article={article}
            createdAt={createdAt}
          />
        )
      })}
    </div>
  )
}
