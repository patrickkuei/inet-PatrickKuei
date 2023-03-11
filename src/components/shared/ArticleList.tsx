import { IArticleViewModel } from '@inet/services/types/articles/i-article.view-model'
import moment from 'moment'
import { useRef } from 'react'
import ArticleListEmpty from './ArticleListEmpty'
import ArticlePreview from './ArticlePreview'
import SpinLoader from './SpinLoader'

interface IArticleListProps {
  isLoading: boolean
  articles: IArticleViewModel[]
  searchKeyword?: string
}

export default function ArticleList({
  isLoading,
  articles,
  searchKeyword,
}: IArticleListProps) {
  const currentMoment = useRef(moment())

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
            highlightText={searchKeyword}
          />
        )
      })}
    </div>
  )
}
